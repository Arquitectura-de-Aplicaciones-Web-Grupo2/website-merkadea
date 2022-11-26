import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, Inject, Input, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CreateProductDTO } from '../../../models/product.model';
import { ProductsService } from 'src/app/services/products.service';
import { Product } from 'src/app/models/product.model';
@Component({
  selector: 'app-register-product',
  templateUrl: './register-product.component.html',
  styleUrls: ['./register-product.component.scss']
})
export class RegisterProductComponent implements OnInit {
  myForm!: FormGroup;
  actionBtn: string = "Save";
  @Input() products: Product[] = [];
  constructor(
    @Inject(MAT_DIALOG_DATA)
    public editData: any,
    private productsService: ProductsService,
    private formBuilder: FormBuilder
  ) {

  }

  ngOnInit(): void {
    this.myForm = this.formBuilder.group({
      name: [''],
      categoryId: [''],
      price: [''],
      stock: [''],
      active: [''],
      image:[''],
  });
}

  createNewProduct() {
    const product: CreateProductDTO = {

      name: this.myForm.get('name')!.value,
      categoryId: this.myForm.get('categoryId')!.value,
      price: this.myForm.get('price')!.value,
      stock: this.myForm.get('stock')!.value,
      active: this.myForm.get('active')!.value,
      image:this.myForm.get('image')!.value,
    };
    this.productsService.create(product).subscribe((data) => {
      this.products.unshift(data);
    });
  }
}
