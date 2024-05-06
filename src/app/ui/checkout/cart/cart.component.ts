import {Component, OnInit} from '@angular/core';
import {CartViewService} from "../cart.view.service";
import {Cart} from "../../../domain/cart/Cart";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cart: Cart[] = []
  constructor(
    private cartService: CartViewService
  ) {

  }

  ngOnInit(): void {
    this.cartService.$cartList.subscribe({
      next: (cart)=>{
        this.cart = cart
      }
    })
  }

  onUpdate(model: Cart) {
    this.cartService.updateQuantity( model.product, +1)
  }

  onRemove(model: Cart, i: number) {
    this.cartService.updateQuantity( model.product, -1)
  }
}
