import { Component, OnInit, Input } from '@angular/core';
import { UserModel } from "../model/UserModel";
import { UsersService } from '../users.service';

@Component({
  selector: 'users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private userService: UsersService) {
    this.users = JSON.parse(localStorage.getItem("favorites") || "[]");
    this.getUsers();
    this.usersToShow = this.users;}

  ngOnInit(): void {
  }

  users: UserModel[] = [];
  usersToShow: UserModel[] = [];
  nameFilter= '';

  getUsers(){
    this.userService.getUsers().subscribe(response => this.setUsers(response));
  }

  setUsers(response: any) {
    response.results.map((user: JSON) => this.setUser(user));
  }

  setUser(user: JSON) {
    let newUser = new UserModel(user);
    this.users.push(newUser);
  }

  setFavorite(user: UserModel) {
    const index = this.users.findIndex(aux => aux.firstName === user.firstName && aux.lastName === user.lastName);
    this.users.splice(index, 1)[0]
    let position: number; 

    if(user.favorite){
      position = this.users.map(val => val.favorite).lastIndexOf(true) + 1; //finding the position of the first non favorite
    } else {
      position = 0;
    }

    user.favorite = !user.favorite;
    this.users.splice(position, 0, user);

    const favorites = this.users.slice(0, position);
    console.log(favorites);
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }

  setFilters(filters: any){
    this.nameFilter = filters.name;

    if(filters.favorite){
      this.usersToShow = this.users.filter(el => { return el.favorite === filters.favorite});
    } else {
      this.usersToShow = this.users;
    }
    
    if(filters.gender !== ''){
      this.usersToShow = this.usersToShow.filter(el => { return el.gender === filters.gender});
    } else {
      this.usersToShow = this.usersToShow;
    }

  }

}
