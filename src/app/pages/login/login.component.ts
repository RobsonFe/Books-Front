import { HomeComponent } from '@/app/home/home.component';
import { Component, OnInit } from '@angular/core';
import { FormComponent } from '../form/form.component';
import { Router, RouterLink } from '@angular/router';
import { ButtonComponent } from '@/app/modules/components/button/button.component';
import { CommonModule } from '@angular/common';
import { Login } from '@/app/modules/model/login.model';
import { FormsModule } from '@angular/forms';
import { Menssagens } from '@/app/enum/constrants.enum';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    HomeComponent,
    FormComponent,
    RouterLink,
    ButtonComponent,
    CommonModule,
    FormsModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  loginError?: string;
  erro = false;

  UserLogin: Login = {
    email: '',
    password: '',
  };

  constructor(private router: Router) {}
  ngOnInit(): void {}

  loginUser() {
    if (this.UserLogin.email && this.UserLogin.password) {
      try {
        console.log('Login realizado com sucesso: ', this.UserLogin);
        this.router.navigate(['/home']);
      } catch (error) {
        console.error(`Erro ao realizar o login ${error}`);
        this.loginError = Menssagens.ERRO_LOGIN;
      }
    } else {
      this.erro = true;
      this.loginError = Menssagens.ERRO_LOGIN_VAZIO;
      setTimeout(() => (this.erro = false), 4000);
    }
  }
}
