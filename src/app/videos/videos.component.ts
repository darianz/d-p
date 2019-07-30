import { Component, OnInit, Input, AfterContentChecked } from '@angular/core';
import { Video } from '../videos/video.module';
import { ServerHandelerService } from '../shared/server-handeler.service';
import { DomSanitizer } from '@angular/platform-browser';
import { VideosService } from '../shared/videos.service';


@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss'],
  
})
export class VideosComponent implements OnInit, AfterContentChecked {
  @Input()page: string;
  videosArray : Video[] = [];
  
  constructor(private serverService: ServerHandelerService, private videosService: VideosService, public sanitizer: DomSanitizer,) {
    
  }
 // NEED TO ADD ON DESTROY TO FETCH DATA WHEN COMPONENT IS DESTROY
 // NEED TO FETCH DATA ONLY IF THE ARRAY IS EMPTY AND DATA ON THE DATABASE CHANGED 
  ngOnInit() {
   
  }

  ngAfterContentChecked() {
    console.log('page is '+ this.page);
    this.videosArray = this.serverService.getVideos(); // Need to change the videosArray to the wanted page array, not from serverService, from videoService
    this.videosService.sortByType(this.videosArray);
    this.videosArray = this.videosService.getPageVideos(this.page);

    console.log('Videos Array From Videos Component',this.videosArray);
  }

  onEdit() {
    
  }

  onDelete(id) {
    console.log(id);
    // firebase.database().ref('data/' + id).remove();
  }


    
}
