import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FileDB } from '../modules/posts/file-db';

@Injectable({
  providedIn: 'root'
})
export class PackagesService {


  constructor(private http: HttpClient) { }

  upload(file: File): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();

    formData.append('file', file);

    const req = new HttpRequest('POST','http://localhost:8080/posts', formData, {
      reportProgress: true,
      responseType: 'json'
    });

    return this.http.request(req);
  }

  getFiles(): Observable<FileDB[]> {
    return this.http.get<FileDB[]>('http://localhost:8080/posts');
  }
 
}
