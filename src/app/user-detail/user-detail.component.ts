import { Component, Input, Output, EventEmitter } from '@angular/core';
import { UserModel } from "../model/UserModel";

@Component({
  selector: 'user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent {

  @Input() user: UserModel = {
    firstName: '',
    lastName: '',
    gender: '',
    thumbnail: '',
    photo: '',
    favorite: false
  };

  @Output() favoriteEvent = new EventEmitter<UserModel>();

  constructor() {}

  setFavorite(user: UserModel){
    this.favoriteEvent.emit(user);
  }
}

