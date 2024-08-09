import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { BookService } from '../../service/book.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css'],
  providers: [HttpClient],
})
export class PaginationComponent implements OnInit {
  books: any[] = [];
  currentPage: number = 1;
  totalPages: number = 1;
  pageSize: number = 5;

  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.listarBooks(this.currentPage, this.pageSize);
  }

  listarBooks(page: number, pageSize: number): void {
    this.bookService.listar(page - 1, pageSize).subscribe((response: any) => {
      console.log('Resposta da API:', response);
      this.books = response.content || [];
      this.currentPage = response.number + 1; // Atualiza a página atual (+1 porque o número da página é baseado em zero)
      this.totalPages = response.totalPages; // Atualiza o total de páginas
    });
  }

  goToPage(page: number): void {
    if (page > 0 && page <= this.totalPages && page !== this.currentPage) {
      this.listarBooks(page, this.pageSize);
    }
  }
}
