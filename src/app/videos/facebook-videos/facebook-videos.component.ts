import { Component, OnInit } from '@angular/core';
import { Video } from '../video.module';

@Component({
  selector: 'app-facebook-videos',
  templateUrl: './facebook-videos.component.html',
  styleUrls: ['./facebook-videos.component.scss']
})
export class FacebookVideosComponent implements OnInit {
  video: Video;
  
  constructor(newVideo: Video) {
    this.video.name = newVideo.name;
    this.video.description = newVideo.description;
    this.video.url = newVideo.url;
    
   }

  ngOnInit() {
  }

}
