import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../templates/navbar/navbar.component';
import { ProfileComponent } from '../components/profile/profile.component';
import { FooterComponent } from '@/app/templates/footer/footer.component';
import { HomeComponent } from '@/app/home/home.component';
import { AboutComponent } from '@/app/pages/about/about.component';
import { SobreComponent } from '@/app/pages/sobre/sobre.component';
import { BooksComponent } from '../components/books/books.component';
import { LoginComponent } from '@/app/pages/login/login.component';
import { BookService } from '../service/book.service';
import { ImagePreloaderService } from '../service/image-preloader.service';
import { HeaderComponent } from '@/app/templates/header/header.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NavbarComponent,
    ProfileComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    SobreComponent,
    BooksComponent,
    LoginComponent,
    HeaderComponent,
  ],
  exports: [
    NavbarComponent,
    ProfileComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    SobreComponent,
    BooksComponent,
    LoginComponent,
    HeaderComponent,
  ],
  providers: [BookService, ImagePreloaderService],
})
export class SharedModule {}
