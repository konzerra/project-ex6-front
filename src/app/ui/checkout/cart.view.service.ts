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

    this.getCart()
    this.$cartList.subscribe(cart=>{
      this.cacheCart(cart)
    })
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
      this.deleteFromCart(product); // Remove the item if quantity is set to 0
    }
  }

  getTotalItems(): number {
    return this.cartList.value.length
  }

  private cacheCart(cart: Cart[]): void {
    localStorage.setItem("cart", JSON.stringify(cart));
  }

  private getCart(){
    let cartStr = localStorage.getItem("cart")
    if(cartStr){
      let cachedCart = JSON.parse(cartStr)
      this.cartList.next(cachedCart)

    }

  }

  clearCart(){
    localStorage.removeItem("cart")
    this.cartList.next([])
  }


}
