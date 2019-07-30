import { Component, OnInit, ViewChild, Input, HostBinding } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-video-edit',
  templateUrl: './video-edit.component.html',
  styleUrls: ['./video-edit.component.scss']
})
export class VideoEditComponent implements OnInit {

  @ViewChild('f') loginForm: NgForm;
  name: string;
  url: string;
  type: string;
  description: string;
  page: string;
  submited = false;
  @HostBinding('class.is-open')

  clicked = false;
  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    
  }

  toggle() {
    this.clicked = !this.clicked;
  }
}
