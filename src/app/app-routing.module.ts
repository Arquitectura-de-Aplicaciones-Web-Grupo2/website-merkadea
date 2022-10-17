import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AddPedidosComponent } from './components/add-pedidos/add-pedidos.component';
import { EditPedidosComponent } from './components/edit-pedidos/edit-pedidos.component';
import { ListPedidosComponent } from './components/list-pedidos/list-pedidos.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'registros/pedidos', component: ListPedidosComponent},
  {path: 'negocio/pedido/new', component: AddPedidosComponent},
  {path: 'admin/pedido/edit/:id', component: EditPedidosComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
