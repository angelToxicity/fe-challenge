import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Observable, Subject, BehaviorSubject } from 'rxjs';

export interface InventoryItem {
  id: string;
  name: string;
  inStock: boolean;
  quantity: number;
}

export interface WebSocketMessage {
  type: string;
  data: any;
}

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {
  private socket?: WebSocket;
  private messageSubject = new Subject<WebSocketMessage>();
  private inventorySubject = new BehaviorSubject<InventoryItem[]>([]);
  private isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
    if (this.isBrowser) {
      this.connect();
    }
  }

  private connect(): void {
    if (!this.isBrowser) {
      return;
    }
    
    try {
      // Use the WebSocket endpoint through the proxy
      const wsUrl = `ws://localhost:4000`; // Direct connection to the Express server with WebSocket
      this.socket = new WebSocket(wsUrl);

      this.socket.onopen = () => {
        console.log('WebSocket connection established');
      };

      this.socket.onmessage = (event) => {
        try {
          const message: WebSocketMessage = JSON.parse(event.data);
          this.messageSubject.next(message);
          
          if (message.type === 'inventory_update') {
            this.inventorySubject.next(message.data);
          }
        } catch (error) {
          console.error('Error parsing WebSocket message:', error);
        }
      };

      this.socket.onclose = () => {
        console.log('WebSocket connection closed');
        // Attempt to reconnect after 5 seconds
        if (this.isBrowser) {
          setTimeout(() => this.connect(), 5000);
        }
      };

      this.socket.onerror = (error) => {
        console.error('WebSocket error:', error);
      };
    } catch (error) {
      console.error('Failed to establish WebSocket connection:', error);
      // Fallback: retry after 5 seconds
      if (this.isBrowser) {
        setTimeout(() => this.connect(), 5000);
      }
    }
  }

  public getMessages(): Observable<WebSocketMessage> {
    return this.messageSubject.asObservable();
  }

  public getInventoryUpdates(): Observable<InventoryItem[]> {
    return this.inventorySubject.asObservable();
  }

  public sendMessage(message: WebSocketMessage): void {
    if (this.isBrowser && this.socket && this.socket.readyState === WebSocket.OPEN) {
      this.socket.send(JSON.stringify(message));
    } else {
      console.warn('WebSocket is not connected');
    }
  }

  public disconnect(): void {
    if (this.socket) {
      this.socket.close();
    }
  }
}