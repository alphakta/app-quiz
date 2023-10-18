import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../shared/services/category.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor(private readonly categoryService:CategoryService, private router: Router) { }
  categoryArray: any[] = [];

  redirectToCategory(categoryId: number) {
    // Utilisez la méthode navigate pour rediriger l'utilisateur vers la page souhaitée avec l'ID de la catégorie
    this.router.navigate(['/quiz', categoryId]);
  }

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe((data: any) => {
      this.categoryArray= data;
    });
  };


}
