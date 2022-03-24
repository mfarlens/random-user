import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  @Input() user = {
          firstName:'',
          lastName: '',
          gender: ''
        };

  constructor() { }

  ngOnInit(): void {
  }

}
