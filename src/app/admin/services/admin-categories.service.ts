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

}
