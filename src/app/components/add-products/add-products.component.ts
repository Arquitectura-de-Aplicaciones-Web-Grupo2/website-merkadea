import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.scss']
})
export class AddProductsComponent implements OnInit {
  myForm!: FormGroup;
  constructor(private fb: FormBuilder, private snackBar: MatSnackBar, private router: Router) { }

  ngOnInit(): void {this.reactiveForm();}

  reactiveForm(){
    this.myForm = this.fb.group({
      id_producto: [''],
      nombre_producto: ['', [Validators.required]],
      precio_producto: ['', [Validators.required]],
      descuento_producto: ['', [Validators.required]]
    })
  }
}