// category.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './category.html',
  styleUrls: ['./category.css']
})
export class CategoryComponent implements OnInit {
  categoryId!: string;

  categories = [
    { name: 'Weddings', image: 'weddings.jpg' },
    { name: 'Corporate Events', image: 'corporate.jpg' },
    { name: 'Birthday Parties', image: 'birthday.jpg' },
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.categoryId = this.route.snapshot.paramMap.get('categoryId') || '';
    // You can filter based on categoryId if needed
  }
}
