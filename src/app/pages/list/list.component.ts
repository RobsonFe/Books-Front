import { Component, OnInit, OnDestroy } from '@angular/core';
import { PaginationService } from '@/app/modules/service/pagination.service';
import { BookService } from '@/app/modules/service/book.service';
import { Book } from '@/app/modules/model/book.model';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '@/app/home/home.component';
import { PaginationComponent } from '@/app/modules/components/pagination/pagination.component';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Subscription } from 'rxjs';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [
    CommonModule,
    HomeComponent,
    PaginationComponent,
    RouterLink,
    FormsModule,
  ],
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit, OnDestroy {
  private subscriptions: Subscription[] = [];
  books: any[] = [];
  bookDetails: Book | null = null;
  bookToUpdate: Book = {
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
  success: boolean = false;
  deletou: boolean = false;
  error: string = '';

  constructor(
    private bookService: BookService,
    private paginationService: PaginationService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.subscriptions.push(
      this.paginationService.currentPage$.subscribe((page) => {
        this.listarBooks(page, 5);
      })
    );

    this.subscriptions.push(
      this.route.paramMap.subscribe((params) => {
        const id = params.get('id');
        if (id) {
          this.loadBookDetails(Number(id));
        }
      })
    );
  }

  listarBooks(page: number, pageSize: number): void {
    this.bookService.listar(page - 1, pageSize).subscribe((response: any) => {
      this.books = response.content || [];
    });
  }

  loadBookDetails(id: number): void {
    this.bookService.buscar(id).subscribe((details: Book) => {
      this.bookDetails = details;
      this.bookToUpdate = { ...details };
    });
  }

  updateBook(): void {
    if (this.bookDetails) {
      this.bookService
        .atualizar(this.bookToUpdate.id, this.bookToUpdate)
        .subscribe(
          (response) => {
            this.success = true;
            console.log('Livro atualizado com sucesso!', response);
            this.loadBookDetails(this.bookToUpdate.id);
          },
          (error) => {
            this.error = 'Erro ao atualizar o livro';
            console.error('Erro ao atualizar o livro:', error);
          }
        );
    }
  }

  confirmDelete(): void {
    if (this.bookDetails) {
      this.bookService.deletar(this.bookDetails.id).subscribe(
        () => {
          this.deletou = true;
          console.log('Livro removido com sucesso!');
          this.listarBooks(1, 5); // Recarregar a lista após remoção
        },
        (error) => {
          this.error = 'Erro ao remover o livro';
          console.error('Erro ao remover o livro:', error);
        }
      );
    }
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub) => sub.unsubscribe());
  }
}
