import { APP_BASE_HREF } from '@angular/common';
import { CommonEngine } from '@angular/ssr';
import express from 'express';
import { fileURLToPath } from 'node:url';
import { dirname, join, resolve } from 'node:path';
import { createServer } from 'node:http';
import { WebSocketServer } from 'ws';
import bootstrap from './src/main.server';

// The Express app is exported so that it can be used by serverless Functions.
export function app(): express.Express {
  const server = express();
  const serverDistFolder = dirname(fileURLToPath(import.meta.url));
  const browserDistFolder = resolve(serverDistFolder, '../public');
  const indexHtml = join(serverDistFolder, 'index.server.html');

  const commonEngine = new CommonEngine();

  server.set('view engine', 'html');
  server.set('views', browserDistFolder);

  // Example Express Rest API endpoints
  // server.get('/api/**', (req, res) => { });
  // Serve static files from /browser
  server.get('**', express.static(browserDistFolder, {
    maxAge: '1y',
    index: 'index.html',
  }));

  // All regular routes use the Angular engine
  server.get('**', (req, res, next) => {
    const { protocol, originalUrl, baseUrl, headers } = req;

    commonEngine
      .render({
        bootstrap,
        documentFilePath: indexHtml,
        url: `${protocol}://${headers.host}${originalUrl}`,
        publicPath: browserDistFolder,
        providers: [{ provide: APP_BASE_HREF, useValue: baseUrl }],
      })
      .then((html) => res.send(html))
      .catch((err) => next(err));
  });

  return server;
}

function run(): void {
  const port = process.env['PORT'] || 4000;

  // Start up the Node server
  const server = app();
  const httpServer = createServer(server);
  
  // Create WebSocket server
  const wss = new WebSocketServer({ server: httpServer });
  
  // Sample inventory data for real-time updates
  const inventoryData = [
    { id: 'chrome-1', name: 'Chrome', inStock: true, quantity: 5 },
    { id: 'firefox-1', name: 'Firefox', inStock: true, quantity: 3 },
    { id: 'opera-1', name: 'Opera', inStock: false, quantity: 0 }
  ];
  
  wss.on('connection', (ws) => {
    console.log('New WebSocket connection established');
    
    // Send initial inventory status
    ws.send(JSON.stringify({
      type: 'inventory_update',
      data: inventoryData
    }));
    
    // Simulate real-time inventory changes every 10 seconds
    const interval = setInterval(() => {
      // Randomly update inventory
      const randomItem = inventoryData[Math.floor(Math.random() * inventoryData.length)];
      randomItem.quantity = Math.floor(Math.random() * 10);
      randomItem.inStock = randomItem.quantity > 0;
      
      // Broadcast update to all connected clients
      wss.clients.forEach((client) => {
        if (client.readyState === 1) { // WebSocket.OPEN
          client.send(JSON.stringify({
            type: 'inventory_update',
            data: inventoryData
          }));
        }
      });
    }, 10000);
    
    ws.on('close', () => {
      console.log('WebSocket connection closed');
      clearInterval(interval);
    });
    
    ws.on('error', (error) => {
      console.error('WebSocket error:', error);
    });
  });

  httpServer.listen(port, () => {
    console.log(`Node Express server listening on http://localhost:${port}`);
    console.log(`WebSocket server ready on ws://localhost:${port}`);
  });
}

run();
