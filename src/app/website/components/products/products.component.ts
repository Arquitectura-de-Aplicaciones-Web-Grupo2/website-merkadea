import { Component, Input, Output, EventEmitter } from '@angular/core'; 
import { StoreService } from 'src/app/services/store.service';
import { ProductsService } from 'src/app/services/products.service';
import { CreateProductDTO, UpdateProductDTO } from 'src/app/models/product.model';
import { Product } from 'src/app/models/product.model';
import { RegisterProductComponent } from '../../pages/register-product/register-product.component';
import { MatDialog} from '@angular/material/dialog';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent {
  //lista del carrito
  myShoppingCart: Product[] = [];
  total = 0;
  @Input() products: Product[] = [];
  @Output() loadMore = new EventEmitter();
  showProductDetail = false;
  productChosen: Product = {
    productId: '',
    name: '',
    categoryId: 0,
    price: 0,
    stock: 0,
    active: true,
    image: 'https://www.globalizewine.com/wp-content/uploads/2018/08/jagermeister-700.jpg',
    category: {
      categoryId: '',
      name: '',
      description: '',
     
    },
  };
  limit = 10;
  offset = 0;
  today = new Date();
  data = new Date(2021, 1, 21);

  constructor(
    private storeService: StoreService,
    private productsService: ProductsService,
    private dialog: MatDialog
  ) {
    this.myShoppingCart = storeService.getShoppingCart();
  }

  // ngOnInit(): void {
  //   this.productsService.getProductsByPage(10, 0).subscribe((data) => {
  //     this.products = data;
  //   });
  // }
  onAddToShoppingCart(product: Product) {
    this.storeService.addProduct(product);
    // this.myShoppingCart.push(product);
    //metodos dentro de los arrays
    this.total = this.storeService.getTotal();
    // this.total = this.myShoppingCart.reduce((sum, item) => sum + item.price, 0);
  }
  toggleProductDetail() {
    this.showProductDetail = !this.showProductDetail;
  }
  onShowDetail(id: string) {
    this.productsService.getProduct(id).subscribe((data) => {
      // console.log('product', data);
      this.toggleProductDetail();
      this.productChosen = data;
    });
  }
  //crear un nuevoo producto usando la API
  createNewProduct() {
    const product: CreateProductDTO = {
      name: 'Nuevo producto',
      categoryId: 2,
      price: 1000,
      stock: 15,
      active: true,
      image:
        'https://www.globalizewine.com/wp-content/uploads/2018/08/jagermeister-700.jpg',
    };
    this.productsService.create(product).subscribe((data) => {
      this.products.unshift(data);
    });
  }

  updateProduct() {
    //buenas practicas
    const changes: UpdateProductDTO = {
      image: 'https://placeimg.com/640/480/any?random=$%7BMath.random()%7D',
      name: 'Producto editado',
    };
    const id = this.productChosen.productId;
    this.productsService.update(id, changes).subscribe((data) => {
      //chapa en que posi esta tal product
      const productIndex = this.products.findIndex(
        (item) => item.productId === this.productChosen.productId
      );
      this.products[productIndex] = data;
    });
  }
  deleteProduct() {
    const id = this.productChosen.productId;
    this.productsService.delete(id).subscribe(() => {
      const productIndex = this.products.findIndex(
        (item) => item.productId === this.productChosen.productId
      );
      this.products.splice(productIndex, 1);
      this.showProductDetail = false;
    });
  }
  onLoadMore() {
    this.loadMore.emit();
  }
  openDialog() {
    this.dialog.open(RegisterProductComponent, {
      width: '30%'
    }).afterClosed().subscribe(val => {
      if (val === 'save') {
        this.productsService.getAllProducts();
      }
    })
  }
  // loadMore() {
  //   this.productsService
  //     .getProductsByPage(this.limit, this.offset)
  //     .subscribe((data) => {
  //       this.products = this.products.concat(data);
  //       this.offset += this.limit;
  //     });
  // }
}
