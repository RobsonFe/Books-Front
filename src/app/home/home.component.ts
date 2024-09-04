import { Component } from '@angular/core';
import { NavbarComponent } from '../templates/navbar/navbar.component';
import { GalleryComponent } from '../modules/components/gallery/gallery.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, GalleryComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
