import { Component } from '@angular/core';
import { VideosService } from './shared/videos.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private videosService: VideosService) {
   console.log("APP COMPONENTS CONSTRUCTOR");
   this.videosService.setVideosFromServer()
   
  }


}
