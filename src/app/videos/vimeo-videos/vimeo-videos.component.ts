import { Component, OnInit } from '@angular/core';
import { Video } from '../video.module';

@Component({
  selector: 'app-vimeo-videos',
  templateUrl: './vimeo-videos.component.html',
  styleUrls: ['./vimeo-videos.component.scss']
})
export class VimeoVideosComponent implements OnInit {
  name: string;
  description: string;
  id: string;
  type: string;
  prefix: string = 'https://player.vimeo.com/video/';
  url: string;

  constructor(video: Video) { 
    this.name = video.name;
    this.description = video.description;
    this.id = video.id;
    this.url = this.prefix + video.url;
    this.type = video.type;

  }

  ngOnInit() {
  }

}
