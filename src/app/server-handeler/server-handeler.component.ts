import { Component, OnInit, Input } from '@angular/core';
import { ServerHandelerService } from '../shared/server-handeler.service';
import { Video} from '../videos/video.module';

import { DomSanitizer } from '@angular/platform-browser';





@Component({
  selector: 'app-server-handeler',
  templateUrl: './server-handeler.component.html',
  styleUrls: ['./server-handeler.component.scss']
})
export class ServerHandelerComponent implements OnInit {
  youtubePrefix: string = 'https://www.youtube.com/embed/';
  vimeoPrefix: string = 'https://player.vimeo.com/video/';
  

  newVideo: Video;
  videosArray: Video[] = [];
  newVideosArray: Video[] = [];
  prefix: any = '';
  constructor(private ServerHandelerService: ServerHandelerService, public sanitizer: DomSanitizer) { }

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
        console.log("video name: ", this.videosArray[i]);
        console.log("video name: " + this.videosArray[i].type);
        console.log("video name: " + this.videosArray[i].url);
        console.log("video name: " + this.videosArray[i].description);
        console.log("video name: " + this.videosArray[i].id);
      }
    }
  }

  sortByType() {
    if (this.videosArray.length > 0) {

      for (const video in this.videosArray) {
        switch (this.videosArray[video].type) {
          case 'youtube':
            if (this.videosArray[video].url.includes('https://www.youtube.com/watch?v=')) {
              this.videosArray[video].url = this.videosArray[video].url.slice(32);
              this.videosArray[video].url = this.youtubePrefix + this.videosArray[video].url;
              this.newVideo = new Video(this.videosArray[video].name,this.videosArray[video].url,this.videosArray[video].type,this.videosArray[video].description,this.videosArray[video].id);
              this.newVideosArray.push(this.newVideo);
            } else {
              // ERROR 
            }
            break;
          case 'vimeo':
            if (this.videosArray[video].url.includes('https://vimeo.com/')) {
              this.videosArray[video].url = this.videosArray[video].url.slice(18);
              this.videosArray[video].url = this.vimeoPrefix + this.videosArray[video].url
              this.newVideo = new Video(this.videosArray[video].name,this.videosArray[video].url,this.videosArray[video].type,this.videosArray[video].description,this.videosArray[video].id);
              this.newVideosArray.push(this.newVideo);
            } else {
              // ERROR
            }
            break;
          case 'facebook':
            if (this.videosArray[video].url.includes('<iframe src="https://www.facebook.com/')) {
              this.videosArray[video].url = this.videosArray[video].url.slice(13);
              let indexOfEl = Array.from(this.videosArray[video].url).findIndex((el) => {
                if (el === '"') {
                  return true;
                }

              });
              this.videosArray[video].url = this.videosArray[video].url.slice(0, indexOfEl);
              this.newVideo = new Video(this.videosArray[video].name,this.videosArray[video].url,this.videosArray[video].type,this.videosArray[video].description,this.videosArray[video].id);
              this.newVideosArray.push(this.newVideo);
            } else {
              // ERROR
            }
            


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

  findUrl() {

  }

 
}
