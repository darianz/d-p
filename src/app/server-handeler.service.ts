import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Video } from './video/video.module';

@Injectable({
  providedIn: 'root'
})
export class ServerHandelerService {

  constructor(private http: HttpClient) { }
  array: Video[] = []
  storeVideo(video: any) {
    return this.http.post('https://dharmaphoto1-bdc44.firebaseio.com/data.json', video);
  }

  getVideos() {
    return this.http.get<{[key: string]: Video}>('https://dharmaphoto1-bdc44.firebaseio.com/data.json')
    .pipe(
      map((responseData) => {
        const videosArray: Video[] = [];
        for (const key in responseData){
          if (responseData.hasOwnProperty(key)) {
            videosArray.push({ ...responseData[key], id: key});
          }
        }
        return videosArray;
      })
    );
  }
  
}





