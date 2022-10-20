import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Pedido } from 'src/app/models/pedido';
import { PedidoService } from 'src/app/services/pedido.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-listar-pedido',
  templateUrl: './listar-pedido.component.html',
  styleUrls: ['./listar-pedido.component.scss']
})
export class ListarPedidoComponent implements OnInit {
  columnas: string[] = ['id_Pedido', 'id_Producto', 'id_Consumidor', 'id_Tienda', 'cantidad', 'precio_Total', 'fecha_Pedido', 'actions'];
  dataSource = new MatTableDataSource<Pedido>();
  pedidos!: Pedido[];

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  constructor(private pedidoService: PedidoService, private snackBar: MatSnackBar) { }

  ngOnInit(): void { this.getPedidos(); }

  aplicarFiltro(event: Event) {
    const valorFiltrado = (event.target as HTMLInputElement).value;
    this.dataSource.filter = valorFiltrado.trim().toLowerCase();
  }

  getPedidos() {
    this.pedidoService.getPedidos().subscribe((data: Pedido[]) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    });
  }

  eliminarPedido(id_Pedido: number) {
    this.pedidoService.eliminarPedido(id_Pedido).subscribe(() => {
      this.dataSource.data = this.dataSource.data.filter((e: Pedido) => {
        return e.id_Pedido !== id_Pedido ? e : false;
      });
      this.snackBar.open('Pedido eliminado exitosamente!', '', {
        duration: 6000
      });
    });
  }
}