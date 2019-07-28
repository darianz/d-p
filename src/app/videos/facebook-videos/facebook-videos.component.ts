import { Component, OnInit } from '@angular/core';
import { Video } from '../video.module';

@Component({
  selector: 'app-facebook-videos',
  templateUrl: './facebook-videos.component.html',
  styleUrls: ['./facebook-videos.component.scss']
})
export class FacebookVideosComponent implements OnInit {
  name: string;
  description: string;
  id: string;
  type: string;
  url: string;

  constructor(video: Video) { 
    this.name = video.name;
    this.description = video.description;
    this.id = video.id;
    this.url = video.url;
    this.type = video.type;

  }

  ngOnInit() {
  }

}
