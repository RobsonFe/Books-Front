import { Component, OnInit } from '@angular/core';
import { BookService } from '../../service/book.service';
import { Book } from '../../model/book.model';
import { HomeComponent } from '@/app/home/home.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgxMaskDirective, NgxMaskPipe } from 'ngx-mask';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-books',
  standalone: true,
  imports: [
    HomeComponent,
    CommonModule,
    FormsModule,
    NgxMaskDirective,
    NgxMaskPipe,
    RouterLink,
  ],
  templateUrl: './books.component.html',
  styleUrl: './books.component.css',
})
export class BooksComponent implements OnInit {
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
  erro: boolean = false;

  constructor(private bookService: BookService) {}

  ngOnInit(): void {}

  private convertFieldsToNumber(): void {
    Number(this.newBook.pages);
    Number(this.newBook.chapters);
    Number(this.newBook.author.age);
  }

  criarBook(): void {
    this.convertFieldsToNumber();
    this.bookService.criar(this.newBook).subscribe(
      (response) => {
        console.log('Novo livro criado:', response);
        this.sucess = true;
        this.limpar();
        setTimeout(() => {
          this.sucess = false;
        }, 5000);
      },
      (error) => {
        console.error(`Erro ao cadastrar livro: ${error}`);
        this.erro = true;
        setTimeout(() => {
          this.erro = false;
        }, 5000);
      }
    );
  }

  limpar() {
    this.newBook = {
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
  }
}
