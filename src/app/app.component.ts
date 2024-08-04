import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './modules/components/navbar/navbar.component';
import { ProfileComponent } from './modules/components/profile/profile.component';
import { initFlowbite } from 'flowbite';
import { FooterComponent } from './pages/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, ProfileComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'books-front';

  ngOnInit(): void {
    initFlowbite();
  }
}
