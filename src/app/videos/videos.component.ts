import { Component, OnInit } from '@angular/core';
import { Video } from '../video/video.module';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss']
})
export class VideosComponent implements OnInit {
  videosArray: Video[] = [
    new Video('testName', 'testDesc', 'testID', 'testType')
  ];

  

  constructor() { }

  ngOnInit() {
  }

  addNewVideo() {
    
  }
  
}
