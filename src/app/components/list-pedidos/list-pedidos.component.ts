import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PedidosService } from '../../services/pedidos.service';
import { Pedido } from 'src/app/models/pedido';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-list-pedidos',
  templateUrl: './list-pedidos.component.html',
  styleUrls: ['./list-pedidos.component.scss']
})
export class ListPedidosComponent implements OnInit {
  columnas: string[] = ['id','id_Consumidor','fecha_Pedido','pago_Total','idTienda','actions'];
  dataSource = new MatTableDataSource<Pedido>();

  pedidos!: Pedido[];

  @ViewChild(MatPaginator, {static: true}) paginator!: MatPaginator;
  
  constructor(
    private pedidoService: PedidosService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.getPedidos();
  }

  Filtrar(event: Event) {
    const valorFiltrado = (event.target as HTMLInputElement).value;
    this.dataSource.filter = valorFiltrado.trim().toLowerCase();
  }

  getPedidos() {
    this.pedidoService.getPedidos().subscribe((data: Pedido[]) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this. paginator;
    });
  }

  eliminarPedido(id: number) {
    this.pedidoService.eliminarPedido(id).subscribe(() =>{
      this.dataSource.data = this.dataSource.data.filter((e: Pedido) => {
        return e.id !== id ? e : false;
      });
      this.snackBar.open("Pedido eliminado!", '', {
        duration: 6000
      });
    });
  }
}
