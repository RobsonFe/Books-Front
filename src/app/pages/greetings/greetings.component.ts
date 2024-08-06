import { CarouselComponent } from '@/app/modules/components/carousel/carousel.component';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-greetings',
  standalone: true,
  imports: [RouterLink, CarouselComponent],
  templateUrl: './greetings.component.html',
  styleUrl: './greetings.component.css',
})
export class GreetingsComponent {}
