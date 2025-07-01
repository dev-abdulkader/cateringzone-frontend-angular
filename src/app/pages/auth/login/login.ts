import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],  // <-- add this for ngModel to work
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class LoginComponent {
  loginData = {
    email: '',
    password: '',
  };

  showPassword = false;
  loading = false;

  constructor() {}

  onLogin() {
    if (!this.loginData.email || !this.loginData.password) {
      alert('Please enter email and password.');
      return;
    }

    this.loading = true;

    // Simulate login process (replace with actual login API call)
    setTimeout(() => {
      this.loading = false;
      alert(`Logged in with email: ${this.loginData.email}`);
      // TODO: Redirect or update UI on successful login
    }, 1500);
  }
}
