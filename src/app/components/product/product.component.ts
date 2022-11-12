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
    categoryId: '',
    price: 0,
    stock: 0,
    active: null,
    category: {
      categoryId: '',
      category: '',
      active: null,
    },
  };
  @Output() addedProduct = new EventEmitter<Product>();
  @Output() showProduct = new EventEmitter<string>(); ///id aun que tambien
  constructor() {}
  imgDefault =
    'https://media.justo.mx/__sized__/products/VERDURAS_10698_Jitomate_Saladette_1-thumbnail-255x255-70.jpg';
  // ngOnInit(): void {}

  onAddToCart() {
    this.addedProduct.emit(this.product);
  }
  onShowDetail() {
    this.showProduct.emit(this.product.productId);
  }
}
