import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Video, Videos } from '../videos/video.module';
import { VideosService } from './videos.service';

@Injectable({
  providedIn: 'root'
})
export class ServerHandelerService {
  
  videos: Video[] = []
  
  constructor(private http: HttpClient ,private videosService: VideosService) { }
  
  storeVideo(video: Video) {
    if (this.videosService.sortValidation(video.url) == false) {
       let newVideo = this.videosService.fixUrl(video);
       return this.http.post('https://dharmaphoto1-bdc44.firebaseio.com/data.json', newVideo);
    }else {
      return this.http.post('https://dharmaphoto1-bdc44.firebaseio.com/data.json', video);
    }
    
    
  }

  getVideosFromServer() {
    return this.http.get<Videos>('https://dharmaphoto1-bdc44.firebaseio.com/data.json')
    .pipe(
      map((videosData: Videos) => {
        const videosArray: Video[] = [];
        
        Object.keys(videosData).forEach((videoId) => {
          videosArray.push({ ...videosData[videoId], id: videoId});
        });
        this.videos = videosArray; 
        return videosArray;
      })
    );
  }

  deleteVideoFromServer(id: string) {
    return this.http.delete(`https://dharmaphoto1-bdc44.firebaseio.com/data/${id}.json`).subscribe((response) => {
      console.log( 'the Response from the delete is:' ,response);
    });
    
  }

  editVideoOnServer(id: string, video: Video) {
    // validation if SortByType is NEEDED
    if (this.videosService.sortValidation(video.url) == false) {
      let newVideo = this.videosService.fixUrl(video);
      return this.http.put(`https://dharmaphoto1-bdc44.firebaseio.com/data/${id}.json`, newVideo);
   }else {
      return this.http.put(`https://dharmaphoto1-bdc44.firebaseio.com/data/${id}.json`, video);
   }
    // ACTIVATE SortBt Type if NEEDED
    // return this.http.put(`https://dharmaphoto1-bdc44.firebaseio.com/data/${id}.json`, video);
  }



  getVideos(){
    return this.videos;
  }

  
  // fetchData() {
  //   this.getVideosFromServer().subscribe(
  //     (response) => {
  //       console.log(response);
  //       return response;
  //     },
  //     (error) => console.log(error)
  //   );

  // }



}








