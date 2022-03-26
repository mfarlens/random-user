import { Component, Input, Output, EventEmitter } from '@angular/core';
import { UserModel } from "../model/UserModel";
import { ModalService } from '../modal/modal.service';

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

  constructor(private modalService: ModalService) {}

  setFavorite(user: UserModel){
    this.favoriteEvent.emit(user);
  }

  openModal(id: string) {
      this.modalService.open(id);
  }
}

