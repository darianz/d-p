import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-video-edit',
  templateUrl: './video-edit.component.html',
  styleUrls: ['./video-edit.component.scss']
})
export class VideoEditComponent implements OnInit {

  @ViewChild('f') loginForm: NgForm;
  name: string;
  ID: string;
  type: string;
  description: string;
  submited = false;

  videosArray = [];
  constructor() { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    this.submited = true;

    this.name = this.loginForm.value.name;
    this.type = this.loginForm.value.type;
    this.ID = this.loginForm.value.ID;
    this.description = this.loginForm.value.description;
    /* 
       this.name = this.loginForm.value.user;
    this.type = this.loginForm.value.pass;
    console.log(this.loginForm.value.user);
    console.log(this.loginForm.value.pass);
    */
   


  }
}

/* 

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


  }*/

