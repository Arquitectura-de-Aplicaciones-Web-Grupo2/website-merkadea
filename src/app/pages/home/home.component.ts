import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../models/product.model';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  products: Product[] = [];
  limit = 10;
  offset = 0;

  constructor(
    private productsService: ProductsService,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // this.productsService.getProductsByPage(10, 0).subscribe((data) => {
    //   this.products = data;
    // });
  }
  // onLoadMore() {
  //   this.productsService
  //     .getProductsByPage(this.limit, this.offset)
  //     .subscribe((data) => {
  //       this.products = this.products.concat(data);
  //       this.offset += this.limit;
  //     });
  // }
  onClick() {
    this.userService
      .logout()
      .then(() => {
        this.router.navigate(['/login']);
      })
      .catch((error) => console.error());
  }
}
