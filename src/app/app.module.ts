import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductsComponent } from './components/products/products.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';


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
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeConsumidorComponent } from './components/home-consumidor/home-consumidor.component';
import { ToolbarConsumidorComponent } from './components/toolbar-consumidor/toolbar-consumidor.component';
import { ElectionSectionComponent } from './components/election-section/election-section.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ToolbarComponent,
    AddProductsComponent,
    HomeComponent,
    HomeConsumidorComponent,
    ToolbarConsumidorComponent,
    ElectionSectionComponent
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
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
