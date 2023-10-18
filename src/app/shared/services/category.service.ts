import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICategory } from './category.interface';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private apiUrl = 'http://localhost:3000/categories';

  constructor(private http: HttpClient) {
  }

  getCategories(): Observable<ICategory[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}

