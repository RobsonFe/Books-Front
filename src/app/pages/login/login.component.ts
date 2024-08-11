import { HomeComponent } from '@/app/home/home.component';
import { Component } from '@angular/core';
import { FormComponent } from '../form/form.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [HomeComponent, FormComponent, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {}
