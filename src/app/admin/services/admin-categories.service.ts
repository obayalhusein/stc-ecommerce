import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/enviremonets';

@Injectable({
  providedIn: 'root'
})
export class AdminCategoriesService {

  constructor(private http: HttpClient) { }

  getCategoriesApi(): Observable<any> {
    let url = `${environment.baseUrl}/api/categories?populate=*`;

    return this.http.get(url);
  }

  postCategoryApi(payload: any): Observable<any> {
    let url = `${environment.baseUrl}/api/categories`;

    return this.http.post<any>(url, payload);
  }

  updateCategoryApi(payload: any, categoryId: number): Observable<any> {
    let url = `${environment.baseUrl}/api/categories/${categoryId}`;

    return this.http.put<any>(url, payload);
  }

  deleteCategoryByIdApi(categoryId: number): Observable<any> {
    let url = `${environment.baseUrl}/api/categories/${categoryId}`;

    return this.http.delete(url);
  }
}
