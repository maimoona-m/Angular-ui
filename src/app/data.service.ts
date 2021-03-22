import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Iuserdata } from './user';
import { PageEvent } from '@angular/material/paginator';
import { Page } from 'ngx-pagination/dist/pagination-controls.directive';


@Injectable({
  providedIn: 'root'
})

@Injectable()
export class DataService {

  private url:string='http://localhost:8080/users';
  constructor(private http: HttpClient) { }

  getAll() :Observable<Iuserdata[]> {
    return this.http.get<Iuserdata[]>(this.url );      
  }
  deleteUser(userid : string, user : any) {
    this.http.delete(this.url+ '/' + userid, user)
      .subscribe( response => {
        console.log("deleted")
      });
  }
  getUserById(userId : string) {
    return this.http.get<Iuserdata[]>(this.url + '/' + userId);
  }
  getUserCount()
  {
    return this.http.get(this.url + '/count');
  }
  updateUser(userId : string, user : any) {
    this.http.put(this.url+ '/' + userId, user)
    .subscribe( response => {
      console.log("updated");
    });
  }
  createUser(user : any) {
    this.http.post(this.url + '/', user)
      .subscribe( response => {
        console.log("added");
      });
  }
  sort(pageSize : number, pageIndex : number, sortByData : string, sortByOrder : string):Observable<Iuserdata[]> 
  {
    return this.http.get<Iuserdata[]>(this.url + '?pageSize=' + pageSize + '&pageNo=' + pageIndex + '&sortBy=' + sortByData + '&sortDir=' +sortByOrder );
  } 
  getPage(pageSize : number, pageIndex : number){
    return this.http.get<Iuserdata[]>(this.url + '?pageSize=' + pageSize + '&pageNo=' + pageIndex);

  }
  search(pageSize : number, pageIndex : number, query : string)
  {
    return this.http.get<Iuserdata[]>(this.url + '/search/' + query + '?pageSize=' + pageSize + '&pageIndex=' + pageIndex);
  }

  }




