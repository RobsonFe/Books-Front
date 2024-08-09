import { Component, OnInit } from '@angular/core';
import { PaginationService } from '@/app/modules/service/pagination.service';
import { BookService } from '@/app/modules/service/book.service';
import { Book } from '@/app/modules/model/book.model';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '@/app/home/home.component';
import { PaginationComponent } from '@/app/modules/components/pagination/pagination.component';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, HomeComponent, PaginationComponent],
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
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

  constructor(
    private bookService: BookService,
    private paginationService: PaginationService
  ) {}

  ngOnInit(): void {
    this.paginationService.currentPage$.subscribe((page) => {
      this.listarBooks(page, 5);
    });
  }

  listarBooks(page: number, pageSize: number): void {
    this.bookService.listar(page - 1, pageSize).subscribe((response: any) => {
      this.books = response.content || [];
    });
  }
}
