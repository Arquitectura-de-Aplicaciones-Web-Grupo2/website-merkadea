import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Pedido } from '../models/pedido';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {
  urlBase: string = environment.urlBase;

  constructor(private http: HttpClient) {}

  getPedidos() {return this.http.get<Pedido[]>(this.urlBase);}

  agregarPedido(pedido: Pedido) {return this.http.post<Pedido>(this.urlBase, pedido);}

  getPedidoId(id_Pedido: any) {return this.http.get<Pedido>(`${this.urlBase}/${id_Pedido}`);}

  actualizarPedido(id_Pedido:any, pedido: Pedido) {return this.http.put<Pedido>(`${this.urlBase}/${id_Pedido}`, pedido);}

  eliminarPedido(id_Pedido: any) {return this.http.delete<Pedido>(`${this.urlBase}/${id_Pedido}`);}
}