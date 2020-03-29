import { Component, OnInit } from '@angular/core';
import { NgForm, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../loginservive/authentication-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  title = 'angulartoastr';
  showModal: boolean;
  registerForm: FormGroup;
  submitted = false;

  username: string;  
  password: string; 


  constructor(private formBuilder: FormBuilder, private _auth: AuthenticationService, private _router: Router) { }
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
      password: ['', [Validators.required, Validators.minLength(6)]]
    });

    this.show();
  }
  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }
  
  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }
    if (this.submitted) {

      this.login(this.registerForm.controls.email.value, this.registerForm.controls.password.value );
      
      // this.showModal = false;

      
      location.reload();
      this._router.navigate(["home"]);
      this.showModal = false;
      

      
    }

  }


  login(user: string, password: string): void {  
    
    if (user != '' && password != '') { 

      console.log("primero")

      if (this._auth.login(user, password)) {  
        console.log("segundo")
        
        // window.location.reload();

        // this._router.navigate(["home"]);  
      }  
      else  
        alert("Wrong username or password");  
    }  
  } 

}