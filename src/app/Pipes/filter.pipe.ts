import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filter_string: any) {
    if(value.length === 0 || filter_string === '')
    {
      return value;
    }

    const users = [];
    for(const user of value)
    {
      if(user['title'] === filter_string){
        users.push(user)
      }
    }
    return users;
  }

}
