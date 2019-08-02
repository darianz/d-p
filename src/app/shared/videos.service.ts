import { Injectable } from '@angular/core';
import { Video } from '../videos/video.module';
import { ServerHandelerService } from './server-handeler.service';

@Injectable({
  providedIn: 'root'
})
export class VideosService {
  
  edited = false;

  weddingsPagesVideosArray: Video[] = [];
  businessPagesVideosArray: Video[] = [];

  constructor(private serverHandeler: ServerHandelerService) { }

  editVideoOnServer(id, video, success: Function) {
    this.serverHandeler.editVideoOnServer(id, video).subscribe(
      (response) => {
        success();
      },
      (error) => console.log(error)
    )
  }

  deleteVideosFromServer(videoId: string){
    this.serverHandeler.deleteVideoFromServer(videoId).subscribe(
    (error) => console.log(error)
  );
  }

  getVideosFromServer(){
    this.serverHandeler.getVideosFromServer().subscribe(
      (response) => {
        this.edited = false;
        this.videoToPage(response);
      },
      (error) => console.log(error)
    );
  }

  sortValidation(url: string){
    if(url.includes('https://www.youtube.com/embed/' || '<iframe src="https://www.facebook.com/' || 'https://player.vimeo.com/video/')) {
      return false;
    }
    return true;
  }

  fixUrl(url: string, type: string) {
    if (url && type) {
        switch (type) {
          case 'youtube':
            if(url.includes('https://www.youtube.com/watch?v=')) {  //WARNING makes infinate loops
            url = this.youtubeVideoHandle(url);  
            return url;
            }
            else {
              // ERROR HANDELING 
            }
            break;
          case 'vimeo':
            if (url.includes('https://vimeo.com/')) {
              url = this.vimeoVideoHandle(url);
              return url;
            } 
            else {
              // ERROR HANDELING 
            }
            break;
          case 'facebook':
            if (url.includes('<iframe src="https://www.facebook.com/')) {
              url = this.facebookVideoHandle(url);
              return url;
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

  videoToPage(serverVideoArray) {
    for (let video of serverVideoArray) {
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
