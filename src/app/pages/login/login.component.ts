import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private router: Router) {}

  onSubmit() {
    // Aqui você implementará a lógica de autenticação
    console.log('Login attempt:', { email: this.email, password: this.password });
    
    // Por enquanto, vamos apenas redirecionar para a home
    this.router.navigate(['/home']);
  }
}
