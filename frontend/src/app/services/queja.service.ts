import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Queja } from '../models/queja';
import { QuejasComponent } from '../components/quejas/quejas.component';

@Injectable({
  providedIn: 'root'
})
export class QuejaService {

  selectedQueja: Queja;
  quejas!: Queja[];

  readonly URL_API = 'http://localhost:3000/api/quejas';
  constructor(private http: HttpClient) { 
    this.selectedQueja = new Queja();
  }

  getQuejas(){
    return this.http.get(this.URL_API)
  }

  postQueja(queja: Queja){
    return this.http.post(this.URL_API, queja);
  }

  putQueja(queja: Queja){
    return this.http.put(this.URL_API + `/${queja._id}`, queja);
  }

  deleteQueja(_id: string){
    return this.http.delete(this.URL_API + `/${_id}`);
  }

}
