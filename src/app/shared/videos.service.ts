import { Injectable } from '@angular/core';
import { Video } from '../videos/video.module';
import { ServerHandelerService } from './server-handeler.service';

@Injectable({
  providedIn: 'root'
})
export class VideosService {
  
  serverVideosArray: Video[] = [];
  
  weddingsPagesVideosArray: Video[] = [];
  businessPagesVideosArray: Video[] = [];

  constructor(private serverHandeler: ServerHandelerService) { }

  editVideoOnServer(id, video) {
    this.serverHandeler.editVideoOnServer(id, video).subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    )
  }

  getVideosFromServer(){
    this.serverHandeler.getVideosFromServer().subscribe(
      (response) => {
        console.log(response);
        this.serverVideosArray = response;
        this.videoToPage();
      },
      (error) => console.log(error)
    );
  }

  deleteVideosFromServer(videoId: string){
    this.serverHandeler.deleteVideoFromServer(videoId);
  }
  sortValidation(url: string){
    if(!url.includes('https://www.youtube.com/embed/')) {  //WARNING makes infinate loops
      return false;
    }
  }

  fixUrl(video: Video) {
    if (video) {
        switch (video.type) {
          case 'youtube':
            if(video.url.includes('https://www.youtube.com/watch?v=')) {  //WARNING makes infinate loops
            video.url = this.youtubeVideoHandle(video.url);  
            // this.pushToPageArray(video);
            return video;
            }
            else {
              // ERROR HANDELING 
            }
            break;
          case 'vimeo':
            if (video.url.includes('https://vimeo.com/')) {
              video.url = this.vimeoVideoHandle(video.url);
              // this.pushToPageArray(video);
              return video;
            } 
            // else if (video.url.includes('https://player.vimeo.com/video/')) {
            //   this.pushToPageArray(video);
            // }
            else {
              
            }
            break;
          case 'facebook':
            if (video.url.includes('<iframe src="https://www.facebook.com/')) {
              video.url = this.facebookVideoHandle(video.url);
              // this.pushToPageArray(video);
              return video;
            } else {
              // ERROR
            }
            break;
        }
      
    }
    else { console.log('no data') }
  } // END OF sortByType
 
  facebookVideoHandle(url: string) {
    url = url.slice(13);
    let indexOfEl = Array.from(url).findIndex((el) => {
      if (el === '"') {
        return true;
      }

    });
    url = url.slice(0, indexOfEl);
    return url;
  }
  vimeoVideoHandle(url: string) {
    url = url.slice(18);
    url = 'https://player.vimeo.com/video/' + url;
    return url;
  }
  youtubeVideoHandle(url: string) {
    url = url.slice(32);
    url = 'https://www.youtube.com/embed/' + url;
    return url;
  }

  videoToPage() {
    for (let video of this.serverVideosArray) {
      if (video.page === 'weddings') {
        this.weddingsPagesVideosArray.push(video);
      } else {
        this.businessPagesVideosArray.push(video);
      }
    }
  }



  getPageVideos(page: string) {
    if (page === 'weddings') {
      return this.weddingsPagesVideosArray;
    } else {
      return this.businessPagesVideosArray;
    }
  }



} // END OF SERVICE
