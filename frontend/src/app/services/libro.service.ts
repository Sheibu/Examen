import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LibroService {

  constructor(private http: HttpClient) { }
  readonly URL_API = 'http://localhost:3000/api/quejas';

  getLibros(){
    return this.http.get(this.URL_API)
  }
}
