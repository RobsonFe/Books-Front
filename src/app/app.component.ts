import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './modules/components/navbar/navbar.component';
import { ProfileComponent } from './modules/components/profile/profile.component';
import { initFlowbite } from 'flowbite';
import { FooterComponent } from './pages/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { BooksComponent } from './modules/components/books/books.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BookService } from './modules/service/book.service';
import { ImagePreloaderService } from './modules/service/image-preloader.service';
import { LoginComponent } from './pages/login/login.component';
import { SobreComponent } from './pages/sobre/sobre.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarComponent,
    ProfileComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    SobreComponent,
    BooksComponent,
    LoginComponent,
    HttpClientModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',

  providers: [BookService, ImagePreloaderService],
})
export class AppComponent implements OnInit {
  title = 'books-front';

  ngOnInit(): void {
    initFlowbite();
  }
}
