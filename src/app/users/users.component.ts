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
    const favorite = this.users.splice(index, 1)[0]
    favorite.favorite = true;
    this.users.splice(0, 0, favorite);
    let favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    favorites.push(favorite);
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
