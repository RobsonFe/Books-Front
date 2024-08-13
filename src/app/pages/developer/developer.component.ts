import { HomeComponent } from '@/app/home/home.component';
import { NavbarComponent } from '@/app/modules/components/navbar/navbar.component';
import { ProfileComponent } from '@/app/modules/components/profile/profile.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-developer',
  standalone: true,
  imports: [ProfileComponent, HomeComponent, NavbarComponent],
  templateUrl: './developer.component.html',
  styleUrl: './developer.component.css',
})
export class DeveloperComponent {}
