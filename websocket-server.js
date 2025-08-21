const express = require('express');
const { createServer } = require('http');
const { WebSocketServer } = require('ws');

const app = express();
const server = createServer(app);
const wss = new WebSocketServer({ server });

// Sample inventory data for real-time updates
const inventoryData = [
  { id: 'chrome-1', name: 'Chrome', inStock: true, quantity: 5 },
  { id: 'firefox-1', name: 'Firefox', inStock: true, quantity: 3 },
  { id: 'opera-1', name: 'Opera', inStock: false, quantity: 0 }
];

// Enable CORS
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.get('/health', (req, res) => {
  res.json({ status: 'ok', message: 'WebSocket server is running' });
});

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
    
    console.log(`Updated ${randomItem.name}: quantity=${randomItem.quantity}, inStock=${randomItem.inStock}`);
    
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

const port = process.env.PORT || 4000;

server.listen(port, () => {
  console.log(`WebSocket server listening on http://localhost:${port}`);
  console.log(`WebSocket endpoint available at ws://localhost:${port}`);
});