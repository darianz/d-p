import { Component, OnInit } from '@angular/core';
import { Video } from '../video.module';


@Component({
  selector: 'app-youtube-videos',
  templateUrl: './youtube-videos.component.html',
  styleUrls: ['./youtube-videos.component.scss']
})

export class YoutubeVideosComponent implements OnInit {
  name: string;
  description: string;
  id: string;
  type: string;
  prefix: string = 'https://www.youtube.com/embed/';
  url: string;

  constructor(video:Video) { 
    this.name = video.name;
    this.description = video.description;
    this.id = video.id;
    this.url = this.prefix + video.url;
    this.type = video.type;

  }


  ngOnInit() {
    
  }

}
