import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServerHandelerService {

  constructor(private http: HttpClient) { }
  storeVideo(video: any) {
    return this.http.put('https://dharmaphoto1-bdc44.firebaseio.com/data.json', video);
  }
  getVideos() {
    return this.http.get('https://dharmaphoto1-bdc44.firebaseio.com/data.json');
  }
}





