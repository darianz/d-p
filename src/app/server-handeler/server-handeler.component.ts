import { Component, OnInit, Input } from '@angular/core';
import { ServerHandelerService } from '../shared/server-handeler.service';
import { Video } from '../videos/video.module';




@Component({
  selector: 'app-server-handeler',
  templateUrl: './server-handeler.component.html',
  styleUrls: ['./server-handeler.component.scss']
})
export class ServerHandelerComponent implements OnInit {

  videosArray: Video[] = [];
  prefix: any = '';

  constructor(private ServerHandelerService: ServerHandelerService) { }

  ngOnInit() {
  }



  fetchData() {
    this.ServerHandelerService.getVideos().subscribe(
      (response) => {
        console.log(response);
        this.videosArray = response;
      },
      (error) => console.log(error)
    );

  }

  readData() {

    if (this.videosArray.length === 0) {
      console.log("didnt fetch data");
    } else {
      for (let i = 0; i < this.videosArray.length; i++) {
        console.log("video number " + (i + 1) + ":");
        console.log("video name: " + this.videosArray[i].name);
        console.log("video name: " + this.videosArray[i].type);
        console.log("video name: " + this.videosArray[i].url);
        console.log("video name: " + this.videosArray[i].correctedUrl);
        console.log("video name: " + this.videosArray[i].description);
        console.log("video name: " + this.videosArray[i].id);
      }
    }
  }

  sortByType() {
    if (this.videosArray.length > 0) {

      for (const video in this.videosArray) {
        console.log("look at this shit ", this.videosArray[video]);
        switch (this.videosArray[video].type) {
          case 'youtube':
            if (this.videosArray[video].url.includes('https://www.youtube.com/watch?v='))
            this.videosArray[video].correctedUrl = this.videosArray[video].url.slice(32);
            break;
          case 'vimeo':
              if (this.videosArray[video].url.includes('https://vimeo.com/'))
              this.videosArray[video].correctedUrl = this.videosArray[video].url.slice(18);
              break;
          case 'facebook':
            this.videosArray[video].correctedUrl = ''; //facebook url is tricky, need lib
            break;
        }

      }
    }
    else { console.log('no data') }
  }

  addVideo(video: Video) { //storeVideo is a callback
    this.ServerHandelerService.storeVideo(video)
      .subscribe(
        (response) => console.log(response),
        (error) => console.log(error)
      );
  }
}
