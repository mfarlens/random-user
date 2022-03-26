import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, EMPTY, retry } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private _http: HttpClient) {
  }

  httpUrl: string = 'https://randomuser.me/api?results='
  userPerCall: number = 10;

  getUsers() {
    const url = `${this.httpUrl}${this.userPerCall}`;

    return this._http.get(url).pipe(retry(5), catchError(()=> {return EMPTY}));
  }
}
