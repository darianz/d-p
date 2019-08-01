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
    console.log('success:', success)
    this.serverHandeler.editVideoOnServer(id, video).subscribe(
      (response) => {
        success();
      },
      (error) => console.log(error)
    )
  }

  getVideosFromServer(){
    this.serverHandeler.getVideosFromServer().subscribe(
      (response) => {
        console.log(response);
        this.edited = false;
        // this.serverVideosArray = response;
        this.videoToPage(response);
        
      },
      (error) => console.log(error)
    );
  }

  deleteVideosFromServer(videoId: string){
    this.serverHandeler.deleteVideoFromServer(videoId);
  }

  sortValidation(url: string){
    console.log ('URL from sortValidation' + url);
    if(url.includes('https://www.youtube.com/embed/')) {  //WARNING makes infinate loops
      return false;
    }
    return true;
  }

  fixUrl(url: string, type: string) {
    if (url && type) {
        switch (type) {
          case 'youtube':
              console.log ('URL from fixUrl' + url);
            if(url.includes('https://www.youtube.com/watch?v=')) {  //WARNING makes infinate loops
            url = this.youtubeVideoHandle(url);  
            // this.pushToPageArray(video);
            return url;
            }
            else {
              // ERROR HANDELING 
            }
            break;
          case 'vimeo':
            if (url.includes('https://vimeo.com/')) {
              url = this.vimeoVideoHandle(url);
              // this.pushToPageArray(video);
              return url;
            } 
            // else if (video.url.includes('https://player.vimeo.com/video/')) {
            //   this.pushToPageArray(video);
            // }
            else {
              
            }
            break;
          case 'facebook':
            if (url.includes('<iframe src="https://www.facebook.com/')) {
              url = this.facebookVideoHandle(url);
              // this.pushToPageArray(video);
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
