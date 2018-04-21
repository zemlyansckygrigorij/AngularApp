import {Http} from '@angular/http';
import {Injectable} from '@angular/core';
@Injectable()
export class UserService {

  constructor (private http: Http) {}
 /* getUsers(){
    return this.http.get('https://randomuser.me/api/?inc=gender,name,picture,location&results=8&nat=gd')
      .map(response => response.json()).map(response => response.result)
      .map(function(response){
        return response.json();
      });
  }*/
   users = [
    {name: 'WFM 1'},
    {name: 'WFM 2'},
    {name: 'WFM 3'},
    {name: 'WFM 4'},
    {name: 'WFM 5'},
    {name: 'WFM 6'}
  ];
}
