import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  Product,
  CreateProductDTO,
  UpdateProductDTO,
} from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private apiUrl = 'https://young-sands-07814.herokuapp.com/api/products';

  constructor(private http: HttpClient) {}
  //devolver todos los productos
  getAllProducts() {
    return this.http.get<Product[]>(this.apiUrl);
  }
  //producto especifico
  getProduct(id: string) {
    return this.http.get<Product>(`${this.apiUrl}/${id}`);
  }
  //paginacion
  getProductsByPage(limit: number, offset: number) {
    return this.http.get<Product[]>(`${this.apiUrl}`, {
      params: { limit, offset },
    });
  }
  //dto= Data Transfer Object
  create(dto: CreateProductDTO) {
    return this.http.post<Product>(this.apiUrl, dto);
  }
  update(id: string, dto: UpdateProductDTO) {
    return this.http.put<Product>(`${this.apiUrl}/${id}`, dto);
  }
  delete(id: string) {
    return this.http.delete<boolean>(`${this.apiUrl}/${id}`);
  }
}
