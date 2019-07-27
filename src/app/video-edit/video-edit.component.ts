import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ServerHandelerService } from '../server-handeler.service';

@Component({
  selector: 'app-video-edit',
  templateUrl: './video-edit.component.html',
  styleUrls: ['./video-edit.component.scss']
})
export class VideoEditComponent implements OnInit {

  videos: any;

  @ViewChild('f') loginForm: NgForm;
  name: string;
  url: string;
  type: string;
  description: string;
  submited = false;

  // videosArray = [];
  constructor(private ServerHandelerService: ServerHandelerService) { }

  ngOnInit() {
    // this.ServerHandelerService.getVideos().subscribe(
    //   (response) => {
    //     this.videos = [response];
    //     console.log(this.videos);
        
    //   },
    //   (error) => console.log(error)
    // );
  }


  onSubmit(form: NgForm) {
    this.submited = true;

    this.name = this.loginForm.value.name;
    this.type = this.loginForm.value.type;
    this.url = this.loginForm.value.ID;
    this.description = this.loginForm.value.description;
    // console.log(this.loginForm.value);

    this.ServerHandelerService.storeVideo(this.loginForm.value)
    .subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
      
    );
    
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

