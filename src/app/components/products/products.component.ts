import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';
import{StoreService}from '../../services/store.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  //lista del carrito
  myShoppingCart: Product[] = [];
  total = 0;
  public products: Product[] = [
    {
      id: '1',
      name: 'Product 1',
      image: 'https://source.unsplash.com/random',
      price: 100,
    },
    {
      id: '2',
      name: 'Product 1',
      image: 'https://source.unsplash.com/random',
      price: 100,
    },
    {
      id: '3',
      name: 'Product 1',
      image: 'https://source.unsplash.com/random',
      price: 100,
    },
    {
      id: '4',
      name: 'Product 1',
      image: 'https://source.unsplash.com/random',
      price: 100,
    },
    {
      id: '5',
      name: 'Product 1',
      image: 'https://source.unsplash.com/random',
      price: 100,
    },
    {
      id: '6',
      name: 'Product 1',
      image: 'https://source.unsplash.com/random',
      price: 100,
    },
    {
      id: '7',
      name: 'Product 1',
      image: 'https://source.unsplash.com/random',
      price: 100,
    },
  ];
  constructor(
    private storeService:StoreService,
  ) {
    this.myShoppingCart=storeService.getShoppingCart();

  }

  ngOnInit(): void {}
  onAddToShoppingCart(product: Product) {
    this.storeService.addProduct(product);
    // this.myShoppingCart.push(product);
    //metodos dentro de los arrays
    this.total=this.storeService.getTotal();
    // this.total = this.myShoppingCart.reduce((sum, item) => sum + item.price, 0);
  }
}
