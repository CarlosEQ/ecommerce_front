import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../dataservice/user-service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { User } from '../model/usert';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  title = 'angulartoastr';
  showModal: boolean;
  registerForm: FormGroup;
  submitted = false;
  user;


  constructor(private formBuilder: FormBuilder, private userService: UserService, private _snackBar: MatSnackBar) {
    this.user = new User();
   }


  show() {
    this.showModal = true; // Show-Hide Modal Check

  }
  //Bootstrap Modal Close event
  hide() {
    this.showModal = false;
  }
  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      user: ['', [Validators.required, Validators.maxLength(15)]]
    });

    this.show();
    
  }
  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }
  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.registerForm.invalid) {
      console.log("invalid");
      return;
    }
    if (this.submitted) {
      this.user.email_user = this.registerForm.value.email.toString();
      this.user.user_name = this.registerForm.value.user;
      this.user.password = this.registerForm.value.password;
      
      this.saveUser();
      this.showModal = false;
    }

  }

  saveUser(): void{

    this.userService.postUSer(this.user)
      .then(
        () =>  this._snackBar.open("Succes!", "", {duration: 3000}),
        () =>  this._snackBar.open("Failed!", "", {duration: 3000}),
      )
    }

}