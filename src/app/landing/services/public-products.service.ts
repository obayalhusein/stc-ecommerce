import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/enviremonets';

@Injectable({
  providedIn: 'root'
})
export class PublicProductsService {

  constructor(private http: HttpClient) { }

  getProductsApi(): Observable<any> {
    let url = `${environment.baseUrl}/api/products?populate=*`;

    return this.http.get(url);
  }
}
