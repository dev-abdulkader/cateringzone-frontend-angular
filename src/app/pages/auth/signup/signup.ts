import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';  // import CommonModule
interface FormData {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  password: string;
  confirm_password: string;
  location: string;
  business_name: string;
  contact_name: string;
  business_email: string;
  business_phone: string;
  description: string;
  role: 'customer' | 'caterer';
  service_types: string[];
}

@Component({
  selector: 'app-signup',
    standalone: true,            // <-- add this if not already
  imports: [FormsModule, CommonModule],     
  templateUrl: './signup.html',
  styleUrls: ['./signup.css'],
})


export class SignupComponent {
  activeTab: 'customer' | 'caterer' = 'customer';

  showPassword = false;
  showConfirmPassword = false;
  loading = false;
  errorMessage = '';

  serviceTypes = [
    'Wedding Catering',
    'Corporate Events',
    'Birthday Parties',
    'Holiday Parties',
    'Buffet Service',
    'Plated Service',
    'Cocktail Reception',
    'Family Style',
  ];

  selectedServices: string[] = [];

  formData: FormData = {
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    password: '',
    confirm_password: '',
    location: '',
    business_name: '',
    contact_name: '',
    business_email: '',
    business_phone: '',
    description: '',
    role: 'customer',
    service_types: [],
  };

  toggleService(service: string) {
    if (this.selectedServices.includes(service)) {
      this.selectedServices = this.selectedServices.filter((s) => s !== service);
    } else {
      this.selectedServices.push(service);
    }
  }

  switchTab(tab: 'customer' | 'caterer') {
    this.activeTab = tab;
    this.formData.role = tab;
    this.selectedServices = [];
  }

  async onSubmit() {
    this.errorMessage = '';

    if (this.formData.password !== this.formData.confirm_password) {
      this.errorMessage = 'Passwords do not match.';
      return;
    }

    // Prepare payload
    const payload: any = {
      ...this.formData,
      role: this.formData.role.toUpperCase(),
      service_types: this.selectedServices,
    };

    // Remove business fields for customers
    if (payload.role === 'CUSTOMER') {
      delete payload.business_name;
      delete payload.contact_name;
      delete payload.business_email;
      delete payload.business_phone;
      delete payload.description;
    }

    this.loading = true;

    try {
      const response = await fetch('https://your-api-endpoint.com/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (response.ok) {
        alert('Signup successful! Please login.');
        // You can also use Angular router to navigate
      } else {
        this.errorMessage = result.message || 'Signup failed';
      }
    } catch (error) {
      this.errorMessage = 'An error occurred. Please try again.';
    } finally {
      this.loading = false;
    }
  }
}
