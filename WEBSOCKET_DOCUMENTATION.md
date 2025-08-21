# WebSocket Implementation Documentation

## Overview

This document explains the WebSocket implementation added to the Angular Frontend Challenge application to enable real-time inventory updates. The implementation answers the question "Que es un web socket" (What is a web socket) by demonstrating practical WebSocket usage in a gaming marketplace application.

## What is a WebSocket?

WebSocket is a communication protocol that provides full-duplex communication channels over a single TCP connection. Unlike traditional HTTP requests, WebSockets maintain a persistent connection between client and server, enabling real-time, bidirectional data exchange.

### Key Features:
- **Real-time communication**: Instant data updates without polling
- **Bidirectional**: Both client and server can initiate communication
- **Low latency**: Minimal overhead compared to HTTP requests
- **Persistent connection**: Eliminates the need for constant reconnections

## Implementation Architecture

### Server Side (WebSocket Server)

**File**: `websocket-server.js`
- **Framework**: Node.js with `ws` library
- **Port**: 4000
- **Features**:
  - Broadcasts inventory updates every 10 seconds
  - Simulates real-time inventory changes (quantity and stock status)
  - Handles multiple client connections
  - Automatic cleanup on client disconnect

```javascript
const inventoryData = [
  { id: 'chrome-1', name: 'Chrome', inStock: true, quantity: 5 },
  { id: 'firefox-1', name: 'Firefox', inStock: true, quantity: 3 },
  { id: 'opera-1', name: 'Opera', inStock: false, quantity: 0 }
];
```

### Client Side (Angular WebSocket Service)

**File**: `src/app/services/websocket.service.ts`
- **Framework**: Angular 18 with RxJS
- **Features**:
  - SSR-compatible using `isPlatformBrowser` check
  - Automatic reconnection on connection loss
  - RxJS Observables for reactive data flow
  - Error handling and logging

```typescript
@Injectable({
  providedIn: 'root'
})
export class WebSocketService {
  private socket?: WebSocket;
  private inventorySubject = new BehaviorSubject<InventoryItem[]>([]);
  
  // Platform-safe WebSocket initialization
  constructor(@Inject(PLATFORM_ID) platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
    if (this.isBrowser) {
      this.connect();
    }
  }
}
```

### UI Integration (Main Component)

**File**: `src/app/components/main/main.component.ts`
- **Integration**: Subscribes to WebSocket inventory updates
- **Real-time Features**:
  - Dynamic inventory quantity display
  - Real-time stock status indicators
  - Disabled add buttons for out-of-stock items

```typescript
ngOnInit() {
  // Subscribe to real-time inventory updates
  this.inventorySubscription = this.webSocketService.getInventoryUpdates().subscribe(
    (inventory: InventoryItem[]) => {
      this.realTimeInventory = inventory;
      console.log('Received inventory update:', inventory);
    }
  );
}
```

## Real-time Features Implemented

### 1. Dynamic Inventory Display
- **Feature**: Real-time quantity updates
- **Implementation**: Product cards show current stock levels
- **Example**: "In Stock (5)" → "In Stock (2)" → "Out of Stock"

### 2. Visual Status Indicators
- **In Stock**: Green button with quantity display
- **Out of Stock**: Red button with disabled state
- **CSS Classes**: `.btn-stock-in`, `.btn-stock-out`

### 3. Interactive Elements
- **Add to Cart**: Automatically disabled for out-of-stock items
- **Stock Status**: Color-coded buttons for quick visual feedback

## Technical Details

### WebSocket Connection Flow

1. **Client Initialization**:
   ```typescript
   const wsUrl = `ws://localhost:4000`;
   this.socket = new WebSocket(wsUrl);
   ```

2. **Message Handling**:
   ```typescript
   this.socket.onmessage = (event) => {
     const message: WebSocketMessage = JSON.parse(event.data);
     if (message.type === 'inventory_update') {
       this.inventorySubject.next(message.data);
     }
   };
   ```

3. **UI Updates**:
   ```html
   <button [ngClass]="{'btn-stock-out': !isItemInStock(c.name), 'btn-stock-in': isItemInStock(c.name)}">
     {{ isItemInStock(c.name) ? 'In Stock (' + getItemQuantity(c.name) + ')' : 'Out of Stock' }}
   </button>
   ```

### SSR Compatibility

The implementation handles Server-Side Rendering by:
- Checking browser platform before WebSocket initialization
- Graceful fallback for server-side execution
- No runtime errors during SSR build process

```typescript
constructor(@Inject(PLATFORM_ID) platformId: Object) {
  this.isBrowser = isPlatformBrowser(platformId);
  if (this.isBrowser) {
    this.connect();
  }
}
```

### Error Handling & Reconnection

- **Automatic Reconnection**: 5-second delay on connection loss
- **Error Logging**: Console output for debugging
- **Graceful Degradation**: Application continues functioning without WebSocket

## Dependencies Added

```json
{
  "dependencies": {
    "ws": "^8.x.x"
  },
  "devDependencies": {
    "@types/ws": "^8.x.x"
  }
}
```

## Development Setup

### Starting the WebSocket Server
```bash
node websocket-server.js
# Server will run on http://localhost:4000
# WebSocket endpoint: ws://localhost:4000
```

### Starting the Angular Development Server
```bash
npm run start
# Application will run on http://localhost:4200 (or next available port)
```

### Viewing Real-time Updates
1. Open the application in a browser
2. Open browser console to see WebSocket connection logs
3. Watch inventory quantities update every 10 seconds
4. Observe color changes when items go in/out of stock

## Console Output Examples

### Successful Connection
```
WebSocket connection established
Received inventory update: [
  {id: 'chrome-1', name: 'Chrome', inStock: true, quantity: 5},
  {id: 'firefox-1', name: 'Firefox', inStock: true, quantity: 3},
  {id: 'opera-1', name: 'Opera', inStock: false, quantity: 0}
]
```

### Server-side Updates
```
Updated Chrome: quantity=2, inStock=true
Updated Firefox: quantity=0, inStock=false
Updated Opera: quantity=7, inStock=true
```

## Use Cases Demonstrated

1. **E-commerce Inventory Management**: Real-time stock level updates
2. **Gaming Marketplace**: Live availability of game items
3. **Dynamic Pricing**: Foundation for real-time price updates
4. **User Experience**: Immediate feedback without page refreshes

## Benefits of This Implementation

- **Improved UX**: Users see live inventory without refreshing
- **Reduced Server Load**: No need for constant polling
- **Scalability**: WebSocket connections handle multiple clients efficiently
- **Real-time Accuracy**: Prevents overselling by showing current stock

## Future Enhancements

- **Price Updates**: Extend to real-time pricing changes
- **User Notifications**: Toast messages for inventory alerts
- **Shopping Cart**: Real-time cart synchronization
- **Chat Support**: Live customer service integration
- **Admin Dashboard**: Real-time analytics and monitoring

This implementation demonstrates a complete WebSocket solution that enhances the user experience with real-time data updates while maintaining code quality and scalability.