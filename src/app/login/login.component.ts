import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from  '@angular/forms';
import { Router } from  '@angular/router';
import { User } from  '../user';
import { AuthService } from  '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  isSubmitted  =  false;
  email: any;
  passwd: any;
  msg:any;
  constructor(private authService: AuthService,
     private router: Router,
      private formBuilder: FormBuilder ) { }
  ngOnInit() {
    this.loginForm  =  this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
  });
  }
  get formControls() { return this.loginForm.controls; }
  login(){
    console.log(this.loginForm.value);
    this.isSubmitted = true;
    if(this.loginForm.invalid){
      return;
    }
    this.email=this.loginForm.controls['email'].value;
    this.passwd=this.loginForm.controls['password'].value;
    if(this.email == 'admin' && this.passwd == 'admin')
    {
      alert('Loggedin Successfully');
      this.authService.login(this.loginForm.value.email);
      this.router.navigateByUrl('/admin');
    }
    else{
      this.msg='Your email or password is incorrect';
      this.loginForm.reset();
      this.isSubmitted = false;
    }
  }
}