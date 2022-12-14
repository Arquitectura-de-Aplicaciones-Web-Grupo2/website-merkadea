import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  Product,
  CreateProductDTO,
  UpdateProductDTO,
} from '../models/product.model';
import { checkTime } from '../interceptors/time.interceptor';
import { retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private apiUrl = 'https://young-sands-07814.herokuapp.com/api/products';
  private apiUrll = 'https://young-sands-07814.herokuapp.com/api';

  private apiV2 = 'https://versiondos.herokuapp.com/merkadeam-market/api';

  constructor(private http: HttpClient) {}
  //devolver todos los productos
  getAllProducts() {
    return this.http
      .get<Product[]>(`${this.apiV2}/products/all`)
      .pipe(retry(3));
  }
  getByCategory(categoryId: string) {
    return this.http.get<Product[]>(
      `${this.apiV2}/products/category/${categoryId}`
    );
  }

  getByCategoryName(categoryname: string) {
    return this.http.get<Product[]>(
      `${this.apiV2}/products/category/${categoryname}`
    );
  }
  //producto especifico
  getProduct(id: string) {
    return this.http.get<Product>(`${this.apiV2}/products/${id}`);
  }
  //paginacion
  getProductsByPage(limit: number, offset: number) {
    return this.http.get<Product[]>(`${this.apiV2}/products/all`, {
      params: { limit, offset },
      context: checkTime(),
    });
  }
  //dto= Data Transfer Object
  create(dto: CreateProductDTO) {
    return this.http.post<Product>(`${this.apiV2}/products/save`, dto);
  }
  update(id: string, dto: UpdateProductDTO) {
    return this.http.put<Product>(`${this.apiUrl}/${id}`, dto);
  }
  delete(id: string) {
    return this.http.delete<boolean>(`${this.apiV2}/products/delete/${id}`);
  }
}
