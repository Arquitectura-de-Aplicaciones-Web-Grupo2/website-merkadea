import { PedidoService } from './../../services/pedido.service';
import { Pedido } from './../../models/pedido';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-pedido',
  templateUrl: './editar-pedido.component.html',
  styleUrls: ['./editar-pedido.component.scss']
})
export class EditarPedidoComponent implements OnInit {
  form!: FormGroup;
  pedido!: Pedido;
  idPedido: any;

  constructor(private fb: FormBuilder, private pedidoService: PedidoService, private snackBar: MatSnackBar, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void { this.cargarPedido(); }

  cargarPedido() {
    this.idPedido = this.route.snapshot.paramMap.get('id');
    this.pedidoService.getPedidoId(this.idPedido).subscribe((data) => {
      this.pedido = data;
      this.form = this.fb.group({
        id: this.idPedido,
        id_Producto: [this.pedido.id_Producto, [Validators.required]],
        id_Consumidor: [this.pedido.id_Consumidor, [Validators.required]],
        id_Tienda: [this.pedido.id_Tienda, [Validators.required]],
        cantidad: [this.pedido.cantidad, [Validators.required]],
        precio_Total: [this.pedido.precio_Total, [Validators.required]],
        fecha_Pedido: [this.pedido.fecha_Pedido, [Validators.required]]
      });
    });
  }

  actualizarPedido(): void {
    const pedido: Pedido = {
      id: this.idPedido,
      id_Producto: this.form.get('id_Producto')!.value,
      id_Consumidor: this.form.get('id_Consumidor')!.value,
      id_Tienda: this.form.get('id_Tienda')!.value,
      cantidad: this.form.get('cantidad')!.value,
      precio_Total: this.form.get('precio_Total')!.value,
      fecha_Pedido: this.form.get('fecha_Pedido')!.value
    };
    this.pedidoService.actualizarPedido(this.idPedido, pedido).subscribe({
      next: (data) => {
        this.snackBar.open('Pedido actualizado exitosamente!', '', {
          duration: 6000
        });
        this.router.navigate(['/listas/pedidos']);
      },
      error: (err) => {console.log(err);}
    })
  }
}
