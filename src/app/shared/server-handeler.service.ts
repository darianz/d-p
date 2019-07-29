import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Video, Videos } from '../videos/video.module';

@Injectable({
  providedIn: 'root'
})
export class ServerHandelerService {
  
  videos: Video[] = []
  
  constructor(private http: HttpClient) { }
  
  storeVideo(video: Video) {
    return this.http.post('https://dharmaphoto1-bdc44.firebaseio.com/data.json', video);
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








