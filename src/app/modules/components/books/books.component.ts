import { Component, OnInit } from '@angular/core';
import { BookService } from '../../service/book.service';
import { Book } from '../../model/book.model';

@Component({
  selector: 'app-books',
  standalone: true,
  imports: [],
  templateUrl: './books.component.html',
  styleUrl: './books.component.css',
})
export class BooksComponent implements OnInit {
  books: any[] = [];
  bookDetails: any;
  newBook: Book = {
    id: 0,
    name: '',
    pages: 0,
    chapters: 0,
    isbn: '',
    publisherName: '',
    author: {
      id: 0,
      name: '',
      age: 0,
    },
  };

  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.listarBooks(1, 5);
  }

  atualizarBook(id: number): void {
    this.bookService.atualizar(id, this.newBook).subscribe((response) => {
      console.log('Livro atualizado:', response);
    });
  }

  criarBook(): void {
    this.bookService.criar(this.newBook).subscribe((response) => {
      console.log('Novo livro criado:', response);
    });
  }

  findBook(name: string): void {
    this.bookService.find(name).subscribe((response) => {
      console.log('Livro encontrado:', response);
    });
  }

  buscarBook(id: number): void {
    this.bookService.buscar(id).subscribe((response) => {
      this.bookDetails = response;
      console.log('Detalhes do livro:', this.bookDetails);
    });
  }

  deletarBook(id: number): void {
    this.bookService.deletar(id).subscribe((response) => {
      console.log('Livro deletado:', response);
    });
  }

  listarBooks(page: number, pageSize: number): void {
    this.bookService.listar(page, pageSize).subscribe((response) => {
      this.books = response;
      console.log('Livros listados:', this.books);
    });
  }
}
