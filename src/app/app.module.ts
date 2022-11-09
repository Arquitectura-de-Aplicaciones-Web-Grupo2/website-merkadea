import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductsComponent } from './components/products/products.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import {GoogleMapsModule} from '@angular/google-maps';
import {MatSliderModule} from '@angular/material/slider';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatCardModule} from '@angular/material/card';
import { AddProductsComponent } from './components/add-products/add-products.component';
import { HomeComponent } from './components/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeConsumidorComponent } from './components/home-consumidor/home-consumidor.component';
import { ToolbarConsumidorComponent } from './components/toolbar-consumidor/toolbar-consumidor.component';
import { ElectionSectionComponent } from './components/election-section/election-section.component';
import { BuscarNegocioComponent } from './components/buscar-negocio/buscar-negocio.component';
import { RegisterScreenComponent } from './components/register-screen/register-screen.component';
import { ProfileEditionComponent } from './components/profile-edition/profile-edition.component';
import { PaymentComponent } from './components/payment/payment.component';
import {MatStep, MatStepperModule} from '@angular/material/stepper';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { InitialScreenComponent } from './components/initial-screen/initial-screen.component';
import { LoginConsumidorComponent } from './components/login-consumidor/login-consumidor.component';
import { LoginComercianteComponent } from './components/login-comerciante/login-comerciante.component';
import { RegisterComercianteComponent } from './components/register-comerciante/register-comerciante.component';
@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ToolbarComponent,
    AddProductsComponent,
    HomeComponent,
    HomeConsumidorComponent,
    ToolbarConsumidorComponent,
    ElectionSectionComponent,
    BuscarNegocioComponent,
    RegisterScreenComponent,
    ProfileEditionComponent,
    PaymentComponent,
    InitialScreenComponent,
    LoginConsumidorComponent,
    LoginComercianteComponent,
    RegisterComercianteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatToolbarModule,
    MatTableModule, 
    MatFormFieldModule, 
    MatInputModule, 
    MatPaginatorModule,
    MatIconModule, 
    MatButtonModule, 
    MatSnackBarModule, 
    MatCardModule,
    ReactiveFormsModule,
    HttpClientModule,
    GoogleMapsModule,
    FormsModule,
    MatStepperModule,
    MatProgressBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
