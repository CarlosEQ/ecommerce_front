import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/internal/Observable';
import { User } from '../model/usert';







@Injectable()
export class UserService {

  private url: string = "http://localhost:8081/api/v1/users";

  private headers = new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Access-Control-Allow-Origin', '*');





  constructor(private http: HttpClient) { }



  /**
   * Create a post request for the param
   * @param user param to send to the backend
   */
  postUSer(user: User): Promise<User> {

    console.log(user)
    return this.http
    .post(this.url, JSON.stringify(user), {headers: this.headers})
    .toPromise()
    .then(res => res as User)
  }


  /**
   * Create a delete repost for the param
   * @param id param to sen to the backend
   */
  deleteUser(id: number): Promise<void> {
    const url = `${this.url}/${id}`;
    return this.http.delete(url, { headers: this.headers })
      .toPromise()
      .then(() => null)
  }

  /**
   * Create a get request to the backend
   */
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.url);
  }

   /**
   * Create a get request to the backend with the product id
   */
  getUserById(id): Observable<User[]> {
    const url = `${this.url}/${id}`;
    return this.http.get<User[]>(this.url);
  }

}
