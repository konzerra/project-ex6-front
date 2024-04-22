import { Injectable } from '@angular/core';
import {Cart} from "../../domain/cart/Cart";
import {Token} from "@angular/compiler";
import {Product} from "../../domain/product/Product";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CartViewService {

  private cartList = new BehaviorSubject<Cart[]>([]);
  $cartList = this.cartList.asObservable()
  constructor() {

  }

  addCart(product: Product){
    const currentCart = this.cartList.value

    let foundItem = currentCart.find((item)=>item.product.id === product.id)
    if(foundItem){
      foundItem.quantity += 1
    }else{
      currentCart.push({product: product, quantity: 1})
    }
    this.cartList.next(currentCart)
  }

  deleteFromCart(product: Product): void {
    let currentItems = this.cartList.value;
    currentItems = currentItems.filter(item => item.product.id !== product.id);
    console.log("after deleting")
    console.log(currentItems);
    this.cartList.next(currentItems); // Notify all subscribers of the update
  }

  updateQuantity(product: Product, quantity: number): void {
    const currentItems = this.cartList.value;
    const foundItem = currentItems.find(item => item.product.id === product.id);

    if (foundItem ) {
      foundItem.quantity += quantity;
      this.cartList.next(currentItems);
    }
    if (foundItem && foundItem.quantity < 1) {
      console.log("Entered deleting")
      this.deleteFromCart(product); // Remove the item if quantity is set to 0
    }
  }



}
