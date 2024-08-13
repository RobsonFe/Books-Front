import { CarouselComponent } from '@/app/modules/components/carousel/carousel.component';
import { GalleryComponent } from '@/app/modules/components/gallery/gallery.component';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-greetings',
  standalone: true,
  imports: [RouterLink, CarouselComponent, GalleryComponent],
  templateUrl: './greetings.component.html',
  styleUrl: './greetings.component.css',
})
export class GreetingsComponent {}
