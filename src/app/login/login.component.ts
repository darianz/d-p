import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @ViewChild('f') loginForm: NgForm;
  username: string;
  password: string;
  submited = false;
  constructor(http: HttpClient) { }

  ngOnInit() {
  }
  onSubmit(form: NgForm) {
    this.submited = true;
    this.username = this.loginForm.value.user;
    this.password = this.loginForm.value.pass;
    console.log(this.loginForm.value.user);
    console.log(this.loginForm.value.pass);


    
    
    
  }
}
