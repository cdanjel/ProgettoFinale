import { IUser } from './../interfaces/iuser';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private urlAPI = "https://epicode.online/epicodebeservice_v2_unauth/api/clienti?page=0&size=20&sort=id,ASC"

  constructor(private http: HttpClient) { }

  getAllUsers() {
    return this.http.get<IUser[]>(this.urlAPI);
  }

  getUser(id: string) {
    return this.http.get<IUser>(this.urlAPI+id);
  }

  removeUser(item: IUser) {
    return this.http.delete(this.urlAPI+item.id);
  }

  createUser(item: IUser) {
    return this.http.post(this.urlAPI, item);
  }

  updateUser(item: IUser) {
    return this.http.put(this.urlAPI+item.id, item);
  }

}
