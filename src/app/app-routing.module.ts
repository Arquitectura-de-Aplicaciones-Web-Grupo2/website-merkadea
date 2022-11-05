import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductsComponent } from './components/add-products/add-products.component';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { HomeConsumidorComponent } from './components/home-consumidor/home-consumidor.component';
import { BuscarNegocioComponent } from './components/buscar-negocio/buscar-negocio.component';
import { RegisterScreenComponent } from './components/register-screen/register-screen.component';

const routes: Routes = [
  {path: 'inventory/add-products',component:ProductsComponent},
  {path: 'home/welcome',component:HomeComponent},
  {path: 'home/inventory/add-products', component: AddProductsComponent},
  {path: 'home/welcome-consumidor', component: HomeConsumidorComponent},
  {path: 'find/locate-market', component:BuscarNegocioComponent},
  {path: '', component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
