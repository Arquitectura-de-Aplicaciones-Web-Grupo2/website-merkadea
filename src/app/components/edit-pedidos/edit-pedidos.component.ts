import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, Form } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Pedido } from 'src/app/models/pedido';
import { PedidosService } from 'src/app/services/pedidos.service';

@Component({
  selector: 'app-edit-pedidos',
  templateUrl: './edit-pedidos.component.html',
  styleUrls: ['./edit-pedidos.component.scss']
})
export class EditPedidosComponent implements OnInit {
  form!: FormGroup;
  pedido!: Pedido;
  idPedido: any;

  constructor(
    private fb: FormBuilder,
    private pedidoService: PedidosService,
    private snackBar: MatSnackBar,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.cargarPedido();
  }

  cargarPedido() {
    this.idPedido = this.route.snapshot.paramMap.get('id');
    this.pedidoService.getPedidoId(this.idPedido).subscribe((data) => {
      this.pedido = data;
      this.form = this.fb.group({
        id: this.idPedido,
        id_Consumidor: [this.pedido.id_Consumidor, [Validators.required]],
        fecha_Pedido: [this.pedido.fecha_Pedido, [Validators.required]],
        pago_Total: [this.pedido.pago_Total, [Validators.required]],
        idTienda: [this.pedido.idTienda, [Validators.required]]
      });
    });
  }

  actualizarPedido(): void {
    const pedido: Pedido = {
      id: this.idPedido,
      id_Consumidor: this.form.get('id_Consumidor')!.value,
      fecha_Pedido: this.form.get('fecha_Pedido')!.value,
      pago_Total: this.form.get('pago_Total')!.value,
      idTienda: this.form.get('idTienda')!.value
    };
    this.pedidoService.actualizarPedido(this.idPedido, pedido).subscribe({
      next: (data) => {
        this.snackBar.open('Pedido actualizado!', '', {
          duration: 6000
        });
        this.router.navigate(['/registros/pedidos']);
      },
      error: (err) => {console.log(err);}
    });
  }
}
