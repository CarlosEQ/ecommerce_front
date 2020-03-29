import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { UserService } from '../dataservice/user-service';
import { MatSnackBar } from '@angular/material/snack-bar'
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog, } from '@angular/material/dialog';
import { AuthenticationService } from '../loginservive/authentication-service';
import { Router } from '@angular/router';
import { User } from '../model/usert';


@Component({
  selector: 'app-register-pop',
  templateUrl: './register-pop.component.html',
  styleUrls: ['./register-pop.component.css']
})
export class RegisterPopComponent implements OnInit {

  private registerForm: FormGroup;
  private submitted = false;

  constructor(
    private userService: UserService, 
    private dialog: MatDialog,
    private _auth: AuthenticationService, 
    private _router: Router,
    private formBuilder: FormBuilder,
    private _snackBar: MatSnackBar,
    private dialogRef: MatDialogRef<RegisterPopComponent>,
    @Inject(MAT_DIALOG_DATA) public data: User) {

    
   }


 

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      user: ['', [Validators.required, Validators.maxLength(15)]]
    });
    
  }
  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }
 async onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.registerForm.invalid) {
      
      return;
    }
    if (this.submitted) {
      
      this.data.email_user = this.registerForm.value.email.toString();
      this.data.user_name = this.registerForm.value.user;
      this.data.password = this.registerForm.value.password;
      
      await this.saveUser();

      await this.login(this.registerForm.controls.email.value, this.registerForm.controls.password.value );
      
    }

  }

  /**
   * Allow to login the user
   */
  async login(user: string, password: string): Promise<void>{  

    
    
    if (user != '' && password != '') { 
      
      console.log("al primero")
      
      let flag =  this._auth.login(user, password);

       console.log("flag: " + flag)

      if (flag) {  

        console.log("al segundo")

        window.location.reload();

        this._router.navigate(["home"]);  
      }  
      else  
        alert("Wrong username or password");  
    }  
  } 

  async saveUser(): Promise<void>{

    
    await this.userService.postUSer(this.data)
      .then(
        () =>  this._snackBar.open("Succes!", "", {duration: 3000}),
        () =>  this._snackBar.open("Failed!", "", {duration: 3000}),
      )
    }

}
