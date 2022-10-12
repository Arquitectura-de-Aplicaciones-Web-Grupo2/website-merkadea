import { Injectable } from '@angular/core';
//reactive
import { BehaviorSubject } from 'rxjs';

import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  private myShoppingCart: Product[] = [];
  private myCart = new BehaviorSubject<Product[]>([]);
  //observable, patron, escuchar activamente los cambios
  myCart$ = this.myCart.asObservable();

  constructor() {}
  addProduct(product: Product) {
    this.myShoppingCart.push(product);
    //enviar la notificacion a los que estan subsicritos
    this.myCart.next(this.myShoppingCart);
  }
  getShoppingCart() {
    return this.myShoppingCart;
  }

  getTotal() {
    return this.myShoppingCart.reduce((sum, item) => sum + item.price, 0);
  }
}
