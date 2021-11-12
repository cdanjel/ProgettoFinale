import { UserService } from './../services/user.service';
import { Component, OnInit } from '@angular/core';
import { IUser } from './../interfaces/iuser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {

  users: IUser[] = [];

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe(resp => this.users = resp);
  }

  removeUser(item: IUser): void {
    this.userService.removeUser(item).subscribe(resp => {
      this.users = this.users.filter(element => element.id !== item.id);
    });
  }

  selectUser(item: IUser): void {
    this.router.navigate(['users', item.id, 'edit']);
  }

}
