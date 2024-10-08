import { Menssagens } from './../../enum/constrants.enum';
import { ButtonComponent } from '@/app/modules/components/button/button.component';
import { User } from '@/app/modules/model/user.model';
import { UserService } from '@/app/modules/service/user.service';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CommonModule, FormsModule, ButtonComponent, RouterLink],
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  newUser: User = {
    id: 0,
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  };
  succes = false;
  erro = false;
  message = '';

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    console.log('FormComponent carregado');
  }

  createUser(): void {
    console.log('Dados do Usuário:', this.newUser);
    if (
      this.newUser.password === this.newUser.confirmPassword &&
      this.newUser.password.length > 8 &&
      this.newUser
    ) {
      console.log(
        `Conta Criada com Sucesso! Nome: ${this.newUser.name}, Email: ${this.newUser.email}`
      );
      this.succes = true;
      this.limpar();
      setTimeout(() => (this.succes = false), 5000);
      this.router.navigate(['/home']);
    } else {
      console.log('As senhas não são iguais');
      this.erro = true;
      this.message = Menssagens.ERRO_SENHA;
      this.limpar();
      setTimeout(() => (this.erro = false), 5000);
    }
  }

  limpar() {
    this.newUser = {
      id: 0,
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    };
  }
}
