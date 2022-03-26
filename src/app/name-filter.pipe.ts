import { Pipe, PipeTransform } from '@angular/core';
import { UserModel } from './model/UserModel';

@Pipe({
  name: 'nameFilter'
})
export class NameFilterPipe implements PipeTransform {

  transform(users: UserModel[], name: string) {
    if(name !== ''){
      return users.filter( el => (el.firstName + ' ' + el.lastName).toLocaleLowerCase().includes(name.toLocaleLowerCase()));
    }
    return users;
  }

}
