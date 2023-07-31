import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/enviremonets';

@Injectable({
  providedIn: 'root'
})
export class AdminUploadService {

  constructor(private http: HttpClient) { }

  postImagesApi(payload: any): Observable<any> {
    let url = `${environment.baseUrl}/api/upload`;

    return this.http.post(url, payload);
  }

}
