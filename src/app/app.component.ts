import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Get a random User';
  users = [
    {
      firstName: "Miguel",
      lastName: "Farlens",
      gender: "male"
    },
    {
      firstName: "Matias",
      lastName: "Farlens",
      gender: "male"
    }
  ];
}
