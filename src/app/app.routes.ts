import { Routes } from '@angular/router';
import { NavbarComponent } from './modules/components/navbar/navbar.component';
import { AboutComponent } from './pages/about/about.component';
import { DeveloperComponent } from './pages/developer/developer.component';
import { GreetingsComponent } from './pages/greetings/greetings.component';
import { BooksComponent } from './modules/components/books/books.component';
import { ListComponent } from './pages/list/list.component';
import { LoginComponent } from './pages/login/login.component';
import { FormComponent } from './pages/form/form.component';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: FormComponent },
  { path: 'greetings', component: GreetingsComponent },
  { path: 'books', component: BooksComponent },
  { path: 'navbar', component: NavbarComponent },
  { path: 'about', component: AboutComponent },
  { path: 'dev', component: DeveloperComponent },
  { path: 'list', component: ListComponent },
  { path: 'list/:id', component: ListComponent },
];
