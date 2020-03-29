import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog, } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar'
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../loginservive/authentication-service';
import { ActiveSession } from '../app.component';
import { RegisterPopComponent } from '../register-pop/register-pop.component';
import { User } from '../model/usert';

@Component({
  selector: 'app-login-pop',
  templateUrl: './login-pop.component.html',
  styleUrls: ['./login-pop.component.css']
})
export class LoginPopComponent implements OnInit {

  registerForm: FormGroup
  submitted = false;
  user = new User;


  /**Create an instance of this class */
  constructor(
    private dialog: MatDialog,
    private _auth: AuthenticationService, 
    private _router: Router,
    private formBuilder: FormBuilder,
    private _snackBar: MatSnackBar,
    private dialogRef: MatDialogRef<LoginPopComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ActiveSession) {
    
  }

  /**First method to get executed */
  ngOnInit() {
    
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  /**Allow put the data items at the local storage and close the pop up window */
  validator() {
    console.log("al validador")


    // this.dialogRef.close();

  }


  /**Allow bet bac to the previous UI */
  back(): void {
    
    
    this.dialogRef.close();
  }


  /**
   * Allow to login the user
   */
  async login(user: string, password: string) {  

    
    
    if (user != '' && password != '') { 
      
      console.log("al primero")
      
      let flag =  this._auth.login(user, password);

       console.log("flag: " + flag)

      if (flag) {  

        console.log("al segundo")

        window.location.reload();

        this.dialogRef.close();

        this._router.navigate(["home"]);  
      } else if(!flag){
        this._snackBar.open("Wrong username or password!", "", {duration: 3000})
      }
      else  
        alert("Wrong username or password");  
    }  
  } 

  get f() { return this.registerForm.controls; }
  /**
   * Is called by the event in the submit button
   */
  onSubmit() {

    this.submitted = true;

    console.log(this.registerForm.controls.email.value);    

    if (this.registerForm.invalid) {
      return;
    }
    if (this.submitted) {         

      
      this.login(this.registerForm.controls.email.value, this.registerForm.controls.password.value );
    
    }

  }

  redirect(){
    this.dialogRef.close();
    // this._router.navigate(["./register"]);  
  }


   /**
   * Allow to open a dialog component as a pop up, receiving a data to work with it
   * @param item Contains the data
   */
  openDialog(): void {

    this.dialogRef.close();
    
    const dialogRef = this.dialog.open(RegisterPopComponent, {
      width: '500px',
      data: { email_user: this.user.email_user, user_name: this.user.user_name, password: this.user.password }

    });

    dialogRef.afterClosed().subscribe(result => {

      console.log("Se cerró en app componnet");
      

    });
  }

}