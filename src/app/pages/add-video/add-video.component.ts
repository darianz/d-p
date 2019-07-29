import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ServerHandelerService } from '../../shared/server-handeler.service';

@Component({
  selector: 'app-add-video',
  templateUrl: './add-video.component.html',
  styleUrls: ['./add-video.component.scss']
})
export class AddVideoComponent implements OnInit {

  videos: any;

  @ViewChild('f') loginForm: NgForm;
  name: string;
  url: string;
  type: string;
  description: string;
  page: string;
  submited = false;

  constructor(private ServerHandelerService: ServerHandelerService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    this.submited = true;

    this.name = this.loginForm.value.name;
    this.type = this.loginForm.value.type;
    this.url = this.loginForm.value.ID;
    this.description = this.loginForm.value.description;
    this.page = this.loginForm.value.page
    // console.log(this.loginForm.value);

    this.ServerHandelerService.storeVideo(this.loginForm.value)
      .subscribe(
        (response) => console.log(response),
        (error) => console.log(error)
      );
  }
}