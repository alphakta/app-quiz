import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../shared/services/category.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor(
    private readonly categoryService: CategoryService,
    private router: Router) {
    this.filteredCategories = this.categoryArray;
  }

  categoryArray: any[] = [];
  searchText: string = '';
  filteredCategories: any[] = [];

  redirectToCategory(categoryId: number) {
    this.router.navigate(['/quiz', categoryId]);
  }

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe((data: any) => {
      this.categoryArray = data;
      this.filteredCategories = this.categoryArray; // Initialize filteredCategories
    });
  }

  filterCategories() {
    this.filteredCategories = this.categoryArray.filter(category => {
      return category.name.toLowerCase().includes(this.searchText.toLowerCase());
    });
  }

}
