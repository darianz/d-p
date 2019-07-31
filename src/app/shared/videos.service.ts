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
        this.serverVideosArray =response;
      },
      (error) => console.log(error)
    );
  }

  deleteVideosFromServer(videoId: string){
    this.serverHandeler.deleteVideoFromServer(videoId);
  }

  sortByType(videosArray: Video[]) {
    if (videosArray.length > 0) {

      for (const video in videosArray) {
        switch (videosArray[video].type) {
          case 'youtube':
            if (videosArray[video].url.includes('https://www.youtube.com/watch?v=')) {
              videosArray[video].url = this.youtubeVideoHandle(videosArray[video].url);
              this.pushToPageArray(videosArray[video]);
            }
            // else if(videosArray[video].url.includes('https://www.youtube.com/embed/')) {  //WARNING makes infinate loops
            //   this.pushToPageArray(videosArray[video]);
            // }
            else {
              
            }
            break;
          case 'vimeo':
            if (videosArray[video].url.includes('https://vimeo.com/')) {
              videosArray[video].url = this.vimeoVideoHandle(videosArray[video].url);
              this.pushToPageArray(videosArray[video]);
            } 
            // else if (videosArray[video].url.includes('https://player.vimeo.com/video/')) {
            //   this.pushToPageArray(videosArray[video]);
            // }
            else {
              
            }
            break;
          case 'facebook':
            if (videosArray[video].url.includes('<iframe src="https://www.facebook.com/')) {
              videosArray[video].url = this.facebookVideoHandle(videosArray[video].url);
              this.pushToPageArray(videosArray[video]);
         
            } else {
              // ERROR
            }
            break;
        }
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

  pushToPageArray(video: Video) {
    if (video.page === 'weddings') {
      this.weddingsPagesVideosArray.push(video);
    } else {
      this.businessPagesVideosArray.push(video);
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
