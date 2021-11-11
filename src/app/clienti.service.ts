import { environment } from './../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClientiService {

  urlAPI = environment.urlAPI + '/api/clienti?page=0&size=20&sort=id,ASC';
  headers = new HttpHeaders();

  constructor(private http: HttpClient) { }

  getAllClienti(){
    return this.http.get(this.urlAPI);

  }
}

 
