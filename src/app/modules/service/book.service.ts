import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from '../model/book.model';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private apiUrl = 'http://localhost:8080/api/v1/books';

  constructor(private http: HttpClient) {}

  // Atualizar um livro por ID
  atualizar(id: number, bookData: Book): Observable<any> {
    return this.http.put(`${this.apiUrl}/atualizar/${id}`, bookData);
  }

  // Criar um novo livro
  criar(bookData: Book): Observable<any> {
    return this.http.post(`${this.apiUrl}/criar/`, bookData);
  }

  // Encontrar livro por nome
  find(name: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/find/${name}`);
  }

  // Buscar livro por ID
  buscar(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/buscar/${id}`);
  }

  // Deletar livro por ID
  deletar(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/deletar/${id}`);
  }

  // Listar livros com paginação
  listar(page: number, pageSize: number): Observable<any> {
    let params = new HttpParams()
      .set('page', page.toString())
      .set('pageSize', pageSize.toString());

    return this.http.get(`${this.apiUrl}/listar`, { params });
  }

  // listar(page: number, pageSize: number): Observable<Book[]> {
  //   return this.http.get<Book[]>(`api/books?page=${page}&size=${pageSize}`);
  // }
}
