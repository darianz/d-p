import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServerHandelerService {

  constructor(private http: HttpClient) { }
  storeVideo(video: any[]) {
    return this.http.post('https://dharmaphoto1-bdc44.firebaseio.com/', video);
  }
}





