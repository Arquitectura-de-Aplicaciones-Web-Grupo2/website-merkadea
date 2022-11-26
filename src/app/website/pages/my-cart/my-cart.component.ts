import { Component, OnInit } from '@angular/core';
import { StoreService } from '../../../services/store.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-my-cart',
  templateUrl: './my-cart.component.html',
  styleUrls: ['./my-cart.component.scss']
})
export class MyCartComponent implements OnInit {

  constructor(
    private storeservice: StoreService,
    private httpcliente: HttpClient,
    private router: Router,) { }

  ngOnInit(): void {}

  getInfoCart(){
    this.storeservice.getShoppingCart();
  }
  
}
