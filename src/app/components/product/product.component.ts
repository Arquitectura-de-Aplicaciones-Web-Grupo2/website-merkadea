import { Component, Input, Output, EventEmitter } from '@angular/core';
// OnInit
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
// implements OnInit
export class ProductComponent {
  @Input() producto: Product = {
    id: '',
    title: '',
    price: 0,
    image: '',
    description: '',
    category: '',
  };
  @Output() addedProduct = new EventEmitter<Product>();
  constructor() {}

  // ngOnInit(): void {}

  onAddToCart() {
    this.addedProduct.emit(this.producto);
  }
}
