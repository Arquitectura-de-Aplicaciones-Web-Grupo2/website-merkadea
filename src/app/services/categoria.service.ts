import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Categoria } from '../models/categoria.model';

@Injectable({
  providedIn: 'root',
})
export class CategoriaService {
  constructor(private http: HttpClient) {}

  getAllCategorias() {
    return this.http.get<Categoria[]>(
      'https://versiondos.herokuapp.com/merkadeam-market/api/categorys/alll'
    );
  }
  saveCategorie(body: any) {
    const endpoint =
      'https://versiondos.herokuapp.com/merkadeam-market/api/categorys/save';
    return this.http.post<Categoria>(endpoint, body);
  }

  deleteCategorie(id: any) {
    const endpoint = `https://versiondos.herokuapp.com/merkadeam-market/api/categorys/delete/${id}`;
    return this.http.delete<Categoria>(endpoint);
  }
}
