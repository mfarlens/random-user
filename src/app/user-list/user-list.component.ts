import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  @Input() users = [{
                    firstName:'',
                    lastName: '',
                    gender: ''
                  },{
                    firstName:'',
                    lastName: '',
                    gender: ''
                  }];

  constructor() { }

  ngOnInit(): void {
  }

}
