import { ProfileComponent } from '@/app/modules/components/profile/profile.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-developer',
  standalone: true,
  imports: [ProfileComponent],
  templateUrl: './developer.component.html',
  styleUrl: './developer.component.css',
})
export class DeveloperComponent {}
