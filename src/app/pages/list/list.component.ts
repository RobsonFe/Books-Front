import { HomeComponent } from '@/app/home/home.component';
import { PaginationComponent } from '@/app/modules/components/pagination/pagination.component';
import { Book } from '@/app/modules/model/book.model';
import { BookService } from '@/app/modules/service/book.service';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [HomeComponent, CommonModule, PaginationComponent, RouterModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
  providers: [HttpClient],
})
export class ListComponent implements OnInit {
  books: any[] = [];
  bookDetails: any;
  newBook: Book = {
    id: 0,
    name: '',
    pages: '',
    chapters: '',
    isbn: '',
    publisherName: '',
    author: {
      id: 0,
      name: '',
      age: '',
    },
  };

  sucess: boolean = false;

  constructor(private bookService: BookService, router: Router) {}

  ngOnInit(): void {
    this.listarBooks(1, 5);
    this.books = Object.values(this.books);
  }
  private convertFieldsToNumber(): void {
    Number(this.newBook.pages);
    Number(this.newBook.chapters);
    Number(this.newBook.author.age);
  }

  atualizarBook(id: number): void {
    this.convertFieldsToNumber();
    this.bookService.atualizar(id, this.newBook).subscribe((response) => {
      this.sucess = true;
      console.log('Livro atualizado:', response);
      setTimeout(() => {
        this.sucess = false;
      }, 5000);
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
    this.bookService.listar(page, pageSize).subscribe((response: any) => {
      console.log('Resposta da API:', response);
      // Acessa a propriedade 'content' do objeto de resposta
      this.books = response.content || [];
      console.log('Livros listados:', this.books);
    });
  }
}
