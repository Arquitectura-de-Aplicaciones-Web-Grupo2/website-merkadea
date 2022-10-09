import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  products: Product[] = [
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
  constructor() {}

  ngOnInit(): void {}
}
