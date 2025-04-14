import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  isLoading: boolean = false;

  constructor(private router: Router) {}

  onSubmit() {
    this.isLoading = true;
    
    // Aqui você implementará a lógica de autenticação
    console.log('Login attempt:', { email: this.email, password: this.password });
    
    // Simulando um delay de autenticação
    setTimeout(() => {
      this.isLoading = false;
      // Por enquanto, vamos apenas redirecionar para a home
      this.router.navigate(['/home']);
    }, 1000);
  }
  
  loginWithGoogle() {
    this.isLoading = true;
    
    // Aqui você implementará a autenticação com Google
    console.log('Login with Google attempt');
    
    // Simulando um delay de autenticação
    setTimeout(() => {
      this.isLoading = false;
      // Por enquanto, vamos apenas redirecionar para a home
      this.router.navigate(['/home']);
    }, 1000);
  }
}
