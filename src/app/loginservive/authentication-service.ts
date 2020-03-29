import { Injectable } from '@angular/core';
import { UserService } from '../dataservice/user-service';
import { User } from '../model/usert';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private users = [];

  constructor(private userService: UserService) {

  }
   async login(username: string, password: string): Promise<boolean>{

    let status: boolean;

    this.userService.getUsers().subscribe(async (users: User[]) => {
      this.users = users;

      status = <boolean> await this.validate(username, password, users);

      console.log(status)


    })
    return status;

  }


  


  logout() {
    localStorage.removeItem('currentUser');
  }
  public get loggedIn(): boolean {
    return (localStorage.getItem('currentUser') !== null);
  }

  /**
 * Load the items from the database calling his service
 */
  validate(username: string, password: string, users: User[]) {

    for (let i = 0; i < users.length; i++) {

      if (username == users[i].email_user && password == users[i].password) {

        console.log("db" + this.users[i].email_user + "param" + username);

        localStorage.setItem('currentUser', "loggedin");

        return true;
      }
    }
    return false;
  }
} 