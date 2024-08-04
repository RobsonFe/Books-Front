import { Routes } from '@angular/router';
import { NavbarComponent } from './modules/components/navbar/navbar.component';
import { ProfileComponent } from './modules/components/profile/profile.component';

export const routes: Routes = [
  { path: 'navbar', component: NavbarComponent },
  { path: 'profile', component: ProfileComponent },
];
