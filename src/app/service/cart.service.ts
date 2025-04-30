import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

interface CartItem {
  id: string;
  name: string;
  description: string;
  price: number;
  avatar?: string;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems = new BehaviorSubject<CartItem[]>([]);
  cartItems$ = this.cartItems.asObservable();

  addToCart(item: CartItem) {
    const currentItems = this.cartItems.getValue();
    this.cartItems.next([...currentItems, item]);
  }

  removeFromCart(itemId: string) {
    const currentItems = this.cartItems.getValue();
    this.cartItems.next(currentItems.filter(item => item.id !== itemId));
  }

  getCartItems() {
    return this.cartItems.getValue();
  }
}