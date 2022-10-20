import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router';
import { AgregarPedidoComponent } from './components/agregar-pedido/agregar-pedido.component';
import { EditarPedidoComponent } from './components/editar-pedido/editar-pedido.component';
import { HomeComponent } from './components/home/home.component';
import { ListarPedidoComponent } from './components/listar-pedido/listar-pedido.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'listas/pedidos', component: ListarPedidoComponent},
  {path: 'base/pedido/nuevo', component: AgregarPedidoComponent},
  {path: 'base/pedido/editar/:id', component: EditarPedidoComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
