# FeChallenge

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.11.

## WebSocket Real-time Features

This application now includes **WebSocket functionality** that demonstrates real-time inventory updates. The implementation answers the question "Que es un web socket" (What is a web socket) by showing practical WebSocket usage in a gaming marketplace.

### Features
- ✅ Real-time inventory quantity updates every 10 seconds
- ✅ Visual in-stock/out-of-stock indicators with color coding
- ✅ Automatic disabling of "Add to Cart" for unavailable items
- ✅ WebSocket server broadcasting live inventory changes
- ✅ SSR-compatible Angular WebSocket service

### Running the WebSocket Demo

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start the WebSocket server** (in terminal 1):
   ```bash
   node websocket-server.js
   ```
   Server will run on `http://localhost:4000` with WebSocket endpoint at `ws://localhost:4000`

3. **Start the Angular development server** (in terminal 2):
   ```bash
   npm run start
   ```
   Application will run on `http://localhost:4200` (or next available port)

4. **View real-time updates**:
   - Open browser console to see WebSocket connection logs
   - Watch inventory quantities change every 10 seconds
   - Observe buttons changing color when items go in/out of stock

### WebSocket Implementation Details

See [WEBSOCKET_DOCUMENTATION.md](./WEBSOCKET_DOCUMENTATION.md) for complete technical documentation.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
