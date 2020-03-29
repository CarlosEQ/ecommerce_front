import { Component, OnInit, ViewChild, ViewContainerRef, ComponentFactoryResolver} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthenticationService } from './loginservive/authentication-service';
import { LoginPopComponent } from './login-pop/login-pop.component';
import { MatDialog } from '@angular/material/dialog';


export interface ActiveSession {
  email: string;
  password:string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {
  title = 'app works!';

  session: boolean;

  constructor(private router: Router,
              private authenticationService: AuthenticationService,
              private _snackBar: MatSnackBar,
              private dialog: MatDialog) {

    
  }

  ngOnInit() {
    this.session = this.getSession();

    console.log(this.session);
  }

  getSession(): boolean{
    if(localStorage.getItem("currentUser") == null ){
      return false;
    }
    return localStorage.getItem("currentUser").toString() ==  "loggedin";

  }

  addProduct(){

      this.router.navigate(['./add-product'])

  }

  logout() {  
    
    this.authenticationService.logout(); 
    window.location.reload();
    // this.router.navigate(['.']);  
  }  
 

  /**
   * Allow to open a dialog component as a pop up, receiving a data to work with it
   * @param item Contains the data
   */
  openDialog(): void {
    
    const dialogRef = this.dialog.open(LoginPopComponent, {
      width: '500px',
      data: { email: "as", password: "asd" }

    });

    dialogRef.afterClosed().subscribe(result => {

      console.log("Se cerró en app componnet");
      

    });
  }
  
  

}

