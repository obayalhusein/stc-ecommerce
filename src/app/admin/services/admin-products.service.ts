import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/enviremonets';

@Injectable({
  providedIn: 'root'
})
export class AdminProductsService {

  constructor(private http: HttpClient) { }

  getProductsApi(): Observable<any> {
    let url = `${environment.baseUrl}/api/products?populate=*`;

    return this.http.get(url);
  }

  deleteProductByIdApi(productId: number): Observable<any> {
    let url = `${environment.baseUrl}/api/products/${productId}`;

    return this.http.delete(url);
  }

  postProductApi(payload: any): Observable<any> {
    let url = `${environment.baseUrl}/api/products`;

    return this.http.post<any>(url, payload);
  }

  updateProductApi(payload: any, productId: number): Observable<any> {
    let url = `${environment.baseUrl}/api/products/${productId}`;

    return this.http.put<any>(url, payload);
  }

}
