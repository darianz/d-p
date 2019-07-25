import { Component, OnInit } from '@angular/core';
import { Video } from '../video/video.module';
import { VideoEditService } from '../video-edit.service';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss'],
  
})
export class VideosComponent implements OnInit {

  videosArray : Video[] = [];
  

  constructor(private videosService: VideoEditService) {


   }
   
   ngOnInit() {
     this.videosArray = this.videosService.videosArray;
    
    }
    
    addNewVideo() {
      
    }
    
    
}
