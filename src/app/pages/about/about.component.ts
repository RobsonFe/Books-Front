import { Component } from '@angular/core';
import { ProfileComponent } from '../../modules/components/profile/profile.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [ProfileComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {}
