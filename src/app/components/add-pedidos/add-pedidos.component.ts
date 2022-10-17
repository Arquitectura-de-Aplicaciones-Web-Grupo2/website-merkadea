import { PedidosService } from './../../services/pedidos.service';
import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Pedido } from 'src/app/models/pedido';

@Component({
  selector: 'app-add-pedidos',
  templateUrl: './add-pedidos.component.html',
  styleUrls: ['./add-pedidos.component.scss']
})
export class AddPedidosComponent implements OnInit {
  form!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private pedidoService: PedidosService,
    private snackBar: MatSnackBar,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.reactivarForm();
  }

  reactivarForm() {
    this.form = this.fb.group({
      id: [''],
      id_Consumidor: ['', [Validators.required]],
      fecha_Pedido: ['', [Validators.required]],
      pago_Total: ['', [Validators.required]],
      idTienda: ['', [Validators.required]]
    })
  }

  guardarPedido(): void {
    const pedido: Pedido = {
      id: 0,
      id_Consumidor: this.form.get('id_Consumidor')!.value,
      fecha_Pedido: this.form.get('fecha_Pedido')!.value,
      pago_Total: this.form.get('pago_Total')!.value,
      idTienda: this.form.get('idTienda')!.value
    };
    this.pedidoService.agregarPedido(pedido).subscribe({
      next: (data) => {
        this.snackBar.open('Pedido registrado!', '', {
          duration: 6000
        });
        this.router.navigate(['/registros/pedidos']);
      },
      error: (err) => { console.log(err); }
    });
  }
}