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
import { ModalComponent } from '@/app/modules/components/modal/modal.component';
import { NgxMaskDirective } from 'ngx-mask';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [
    HomeComponent,
    ModalComponent,
    CommonModule,
    HomeComponent,
    PaginationComponent,
    FormsModule,
    RouterLink,
    NgxMaskDirective,
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
  bookToDelete: Book | null = null;
  isEditModalOpen: boolean = false;
  isDeleteModalOpen: boolean = false;
  isViewModalOpen = false;
  bookToView: any;
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
    console.log('Método updateBook chamado');
    console.log('ID do livro a ser atualizado:', this.bookToUpdate.id);
    console.log('Dados do livro a ser atualizado:', this.bookToUpdate);
    if (this.bookToUpdate) {
      this.convertFieldsToNumber();
      console.log('Atualizando livro com:', this.bookToUpdate);
      this.bookService
        .atualizar(this.bookToUpdate.id, this.bookToUpdate)
        .subscribe(
          (response) => {
            console.log('Resposta da atualização:', response);
            this.success = true;
            this.listarBooks(1, 5);
            this.loadBookDetails(this.bookToUpdate.id);
            this.closeEditModal();
            setTimeout(() => (this.success = false), 3000);
          },
          (error) => {
            this.error = 'Erro ao atualizar o livro';
            console.error('Erro ao atualizar o livro:', error);
          }
        );
    }
  }

  confirmDelete(): void {
    if (this.bookToDelete) {
      this.bookService.deletar(this.bookToDelete.id).subscribe(
        () => {
          this.deletou = true;
          console.log('Livro removido com sucesso!');
          this.listarBooks(1, 5); // Recarregar a lista após remoção
          this.closeDeleteModal();
          setTimeout(() => (this.deletou = false), 3000);
        },
        (error) => {
          this.error = 'Erro ao remover o livro';
          console.error('Erro ao remover o livro:', error);
        }
      );
    }
  }

  openEditModal(book: Book): void {
    this.bookToUpdate = { ...book };
    this.isEditModalOpen = true;
  }

  closeEditModal(): void {
    this.isEditModalOpen = false;
  }

  openDeleteModal(book: Book): void {
    this.bookToDelete = book;
    this.isDeleteModalOpen = true;
  }

  closeDeleteModal(): void {
    this.isDeleteModalOpen = false;
  }

  // Função para abrir o modal de visualização
  openViewModal(book: any): void {
    this.bookToView = book;
    this.isViewModalOpen = true;
  }

  // Função para fechar o modal de visualização
  closeViewModal(): void {
    this.isViewModalOpen = false;
    this.bookToView = null;
  }

  private convertFieldsToNumber(): void {
    Number(this.bookToUpdate.pages);
    Number(this.bookToUpdate.chapters);
    Number(this.bookToUpdate.author.age);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub) => sub.unsubscribe());
  }
}
