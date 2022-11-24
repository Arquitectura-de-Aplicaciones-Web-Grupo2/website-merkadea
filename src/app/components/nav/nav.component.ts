import { Component, OnInit } from '@angular/core';
import { StoreService } from '../../services/store.service';
import { ProductsService } from 'src/app/services/products.service';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  activeMenu = false;
  counter = 0;

  constructor(private storeService: StoreService,
    private productsService: ProductsService,
    private userService: UserService,
    private router: Router) {}

  ngOnInit(): void {
    this.storeService.myCart$.subscribe((products) => {
      this.counter = products.length;
    });
  }
  toggleMenu() {
    this.activeMenu = !this.activeMenu;
  }

  onClick() {
    this.userService
      .logout()
      .then(() => {
        this.router.navigate(['/login']);
      })
      .catch((error) => console.error());
  }
}
