import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { Pedidos } from '../models/pedidos';

@Injectable({
  providedIn: 'root'
})
export class HttpDataService {

  base_Url = "http://localhost:3000/pedidos";

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  handleError(error: HttpErrorResponse) {
  if (error.error instanceof ErrorEvent) {
   console.log(`An error occurred ${error.status}, body was: ${error.error}`);
  } else {
   console.log(`Backend returned code ${error.status}, body was: ${error.error}`);
  }
  return throwError('Something happened with request, please try again later.');}

  createItem(item: any): Observable<Pedidos> {
    return this.http
     .post<Pedidos>(this.base_Url, JSON.stringify(item), this.httpOptions)
     .pipe(retry(2), catchError(this.handleError));
   }

   getList(): Observable<Pedidos> {
    return this.http
     .get<Pedidos>(this.base_Url)
     .pipe(retry(2), catchError(this.handleError));
   }

   getItem(id_Pedido: string): Observable<Pedidos> {
    return this.http
    .get<Pedidos>(this.base_Url + '/' + id_Pedido).pipe(retry(2),catchError(this.handleError));
   }

   updateItem(id_Pedido: string, item: any): Observable<Pedidos> {
    return this.http
    .put<Pedidos>(this.base_Url + '/' + id_Pedido, JSON.stringify(item), this.httpOptions)
    .pipe(retry(2), catchError(this.handleError));
   }

   deleteItem(id_Pedido: string): Observable<Pedidos> {
    return this.http
     .delete<Pedidos>(`${this.base_Url}/${id_Pedido}`, this.httpOptions)
     .pipe(retry(2), catchError(this.handleError));
   }
}
