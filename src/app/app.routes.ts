import { Routes } from '@angular/router';
import { NavbarComponent } from './modules/components/navbar/navbar.component';
import { AboutComponent } from './pages/about/about.component';

export const routes: Routes = [
  { path: 'navbar', component: NavbarComponent },
  { path: 'about', component: AboutComponent },
];
