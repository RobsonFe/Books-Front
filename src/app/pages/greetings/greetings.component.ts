import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-greetings',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './greetings.component.html',
  styleUrl: './greetings.component.css',
})
export class GreetingsComponent {}
