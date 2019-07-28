import { Component, OnInit } from '@angular/core';
import { Video } from '../videos/video.module';


@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss'],
  
})
export class VideosComponent implements OnInit {

  videosArray : Video[] = [];
  

  constructor() {


   }
   
   ngOnInit() {
      
    }
    
    addNewVideo() {
      
    }
    
    
}
