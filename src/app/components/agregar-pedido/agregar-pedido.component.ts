import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Pedido } from 'src/app/models/pedido';
import { PedidoService } from 'src/app/services/pedido.service';

@Component({
  selector: 'app-agregar-pedido',
  templateUrl: './agregar-pedido.component.html',
  styleUrls: ['./agregar-pedido.component.scss']
})
export class AgregarPedidoComponent implements OnInit {
  form!: FormGroup;

  constructor(private fb: FormBuilder, private pedidoService: PedidoService, private snackBar: MatSnackBar, private router: Router) {}

  ngOnInit(): void {this.reactivarForm();}

  reactivarForm(){
    this.form = this.fb.group({
      id_Pedido: [''],
      id_Producto: ['', [Validators.required]],
      id_Consumidor: ['', [Validators.required]],
      id_Tienda: ['', [Validators.required]],
      cantidad: ['', [Validators.required]],
      precio_Total: ['', [Validators.required]],
      fecha_Pedido: ['', [Validators.required]]
    })
  }

  guardarPedido(): void {
    const pedido: Pedido = {
      id_Pedido: 0,
      id_Producto: this.form.get('id_Producto')!.value,
      id_Consumidor: this.form.get('id_Consumidor')!.value,
      id_Tienda: this.form.get('id_Tienda')!.value,
      cantidad: this.form.get('cantidad')!.value,
      precio_Total: this.form.get('precio_Total')!.value,
      fecha_Pedido: this.form.get('fecha_Pedido')!.value
    };
    this.pedidoService.agregarPedido(pedido).subscribe({
      next: (data) => {this.snackBar.open('Pedido registrado exitosamente!', '', {duration: 6000});},
      error: (err) => {console.log(err);}
    })
  }
}