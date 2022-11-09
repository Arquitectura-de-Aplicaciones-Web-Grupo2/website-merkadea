import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductsComponent } from './components/add-products/add-products.component';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { HomeConsumidorComponent } from './components/home-consumidor/home-consumidor.component';
import { BuscarNegocioComponent } from './components/buscar-negocio/buscar-negocio.component';
import { RegisterScreenComponent } from './components/register-screen/register-screen.component';
import { ProfileEditionComponent } from './components/profile-edition/profile-edition.component';
import { PaymentComponent } from './components/payment/payment.component';
import { InitialScreenComponent } from './components/initial-screen/initial-screen.component';
import { ToolbarConsumidorComponent } from './components/toolbar-consumidor/toolbar-consumidor.component';
import { LoginConsumidorComponent } from './components/login-consumidor/login-consumidor.component';
import { LoginComercianteComponent } from './components/login-comerciante/login-comerciante.component';
import { RegisterComercianteComponent } from './components/register-comerciante/register-comerciante.component';

const routes: Routes = [
  {path: '', component:InitialScreenComponent},

  {path: 'inventory/add-products',component:ProductsComponent},
  {path: 'home/welcome',component:HomeComponent},
  {path: 'home/inventory/add-products', component: AddProductsComponent},
  {path: 'home/welcome-consumidor', component: HomeConsumidorComponent},
  {path: 'find/locate-market', component:BuscarNegocioComponent},
  {path: 'edit-profile',component:ProfileEditionComponent},
  {path: 'payment:id', component:PaymentComponent},
  {path: 'register-consumidor', component: RegisterScreenComponent},
  {path: 'login-consumidor', component: LoginConsumidorComponent},
  {path: 'login-comerciante', component:LoginComercianteComponent},
  {path: 'register-comerciante', component: RegisterComercianteComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
