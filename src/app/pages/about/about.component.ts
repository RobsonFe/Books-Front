import { Component } from '@angular/core';
import { ProfileComponent } from '../../modules/components/profile/profile.component';
import { NavbarComponent } from '@/app/modules/components/navbar/navbar.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [ProfileComponent, NavbarComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {}
