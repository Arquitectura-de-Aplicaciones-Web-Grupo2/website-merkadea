import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AngularMaterialModule } from './components/shared/angular-material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AddPedidosComponent } from './components/add-pedidos/add-pedidos.component';
import { EditPedidosComponent } from './components/edit-pedidos/edit-pedidos.component';
import { ListPedidosComponent } from './components/list-pedidos/list-pedidos.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    AddPedidosComponent,
    EditPedidosComponent,
    ListPedidosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
