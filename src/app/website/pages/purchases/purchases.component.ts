import { Component, OnInit } from '@angular/core';
import { StoreService } from '../../../services/store.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-purchases',
  templateUrl: './purchases.component.html',
  styleUrls: ['./purchases.component.scss']
})
export class PurchasesComponent implements OnInit {

  constructor(
    private storeservice: StoreService,
    private httpcliente: HttpClient,
    private router: Router,
  ){}

  ngOnInit(): void {
  }

}
