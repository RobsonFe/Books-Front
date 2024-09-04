import { NavbarComponent } from '@/app/templates/navbar/navbar.component';
import { ProfileComponent } from '@/app/modules/components/profile/profile.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-developer',
  standalone: true,
  imports: [ProfileComponent, NavbarComponent],
  templateUrl: './developer.component.html',
  styleUrl: './developer.component.css',
})
export class DeveloperComponent {}
