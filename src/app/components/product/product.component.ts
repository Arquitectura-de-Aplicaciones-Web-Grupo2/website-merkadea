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
  @Input() product: Product = {
    productId: '',
    name: '',
    categoryId: 0,
    price: 0,
    stock: 0,
    active: true,
    image: '',
    category: {
      categoryId: '',
      name: '',
      description: '',
    },
  };
  @Output() addedProduct = new EventEmitter<Product>();
  @Output() showProduct = new EventEmitter<string>(); ///id aun que tambien
  constructor() {}

  // ngOnInit(): void {}

  onAddToCart() {
    this.addedProduct.emit(this.product);
  }
  onShowDetail() {
    this.showProduct.emit(this.product.productId);
  }
}
