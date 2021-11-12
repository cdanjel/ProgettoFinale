import { environment } from './../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClientiService {

  urlAPI = environment.urlAPI + '/api/clienti?page=0&size=20&sort=id,ASC';
  bearerAuth = "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImlhdCI6MTYzNjY3MDkyNywiZXhwIjoxNjM3NTM0OTI3fQ.KoNhvj4ZS6El0upCzVGRWoYOv7AKK4oy0OiIIj5oP50c9d8Z1CF_ozZtGW3EaopKtoJzKu0Lvoic2nwyjRX_iQ"
  tenantID = "fe_0421";
  headers = new HttpHeaders();

  constructor(private http: HttpClient) {
    this.headers = this.headers.set("Authorization", "Bearer " + this.bearerAuth).set("X-TENANT-ID", this.tenantID);
   }

  getAllClienti(){
    return this.http.get(this.urlAPI, {headers: this.headers});

  }
}

 
