import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconDefinition, faHeart, faBuilding, faCake, faGraduationCap, faBaby, faGlassCheers, faUtensils, faCrown, faUsers, faLeaf, faAppleAlt, faCoffee, faIceCream } from '@fortawesome/free-solid-svg-icons';

interface Category {
  id: string;
  title: string;
  description: string;
  icon: IconDefinition;
  color: string;
  popular: boolean;
  count: string;
}

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './categories.html',
  styleUrls: ['./categories.css'],
})
export class CategoriesComponent {
  categories: Category[] = [
    {
      id: 'wedding',
      title: 'Wedding Catering',
      description: 'Make your special day unforgettable with elegant wedding catering services',
      icon: faHeart,
      color: 'bg-pink-100 text-pink-600',
      popular: true,
      count: '150+ caterers',
    },
    {
      id: 'corporate',
      title: 'Corporate Events',
      description: 'Professional catering for meetings, conferences, and corporate gatherings',
      icon: faBuilding,
      color: 'bg-blue-100 text-blue-600',
      popular: true,
      count: '200+ caterers',
    },
    {
      id: 'birthday',
      title: 'Birthday Parties',
      description: 'Celebrate with delicious food that makes every birthday memorable',
      icon: faCake,
      color: 'bg-yellow-100 text-yellow-600',
      popular: false,
      count: '120+ caterers',
    },
    {
      id: 'graduation',
      title: 'Graduation Parties',
      description: 'Honor achievements with catering that celebrates success',
      icon: faGraduationCap,
      color: 'bg-purple-100 text-purple-600',
      popular: false,
      count: '80+ caterers',
    },
    {
      id: 'baby-shower',
      title: 'Baby Showers',
      description: 'Sweet celebrations for new arrivals with thoughtful catering',
      icon: faBaby,
      color: 'bg-green-100 text-green-600',
      popular: false,
      count: '60+ caterers',
    },
    {
      id: 'holiday',
      title: 'Holiday Parties',
      description: 'Festive catering for all your holiday celebrations and gatherings',
      icon: faGlassCheers,
      color: 'bg-red-100 text-red-600',
      popular: true,
      count: '90+ caterers',
    },
    {
      id: 'buffet',
      title: 'Buffet Style',
      description: 'Self-service dining with variety and flexibility for your guests',
      icon: faUtensils,
      color: 'bg-orange-100 text-orange-600',
      popular: true,
      count: '180+ caterers',
    },
    {
      id: 'plated',
      title: 'Plated Service',
      description: 'Elegant sit-down dining with professionally plated meals',
      icon: faCrown,
      color: 'bg-indigo-100 text-indigo-600',
      popular: false,
      count: '100+ caterers',
    },
    {
      id: 'family-style',
      title: 'Family Style',
      description: 'Shared platters that bring people together around the table',
      icon: faUsers,
      color: 'bg-green-100 text-green-600',
      popular: false,
      count: '85+ caterers',
    },
    {
      id: 'vegetarian',
      title: 'Vegetarian',
      description: 'Delicious plant-based options that satisfy all dietary needs',
      icon: faLeaf,
      color: 'bg-green-100 text-green-600',
      popular: true,
      count: '160+ caterers',
    },
    {
      id: 'vegan',
      title: 'Vegan',
      description: 'Completely plant-based catering with creative, flavorful dishes',
      icon: faAppleAlt,
      color: 'bg-green-100 text-green-600',
      popular: false,
      count: '80+ caterers',
    },
    {
      id: 'breakfast',
      title: 'Breakfast Catering',
      description: 'Start your day right with fresh breakfast and brunch options',
      icon: faCoffee,
      color: 'bg-amber-100 text-amber-600',
      popular: false,
      count: '70+ caterers',
    },
    {
      id: 'dessert',
      title: 'Dessert Catering',
      description: 'Sweet endings with custom desserts and treat stations',
      icon: faIceCream,
      color: 'bg-pink-100 text-pink-600',
      popular: false,
      count: '45+ caterers',
    },
  ];

  get popularCategories() {
    return this.categories.filter((c) => c.popular);
  }

  get allCategories() {
    return this.categories.filter((c) => !c.popular);
  }
}
