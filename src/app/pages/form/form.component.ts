import { HomeComponent } from '@/app/home/home.component';
import { User } from '@/app/modules/model/user.model';
import { UserService } from '@/app/modules/service/user.service';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [HomeComponent, CommonModule, FormsModule],
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

  constructor(private userService: UserService) {}

  ngOnInit(): void {}

  createUser(): void {
    console.log('Dados do Usuário:', this.newUser);
    if (this.newUser.password === this.newUser.confirmPassword) {
      console.log(
        `Conta Criada com Sucesso! Nome: ${this.newUser.name}, Email: ${this.newUser.email}`
      );
      this.limpar();
    } else {
      console.log('As senhas não são iguais');
      this.limpar();
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
