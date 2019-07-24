import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Video } from './video/video.module';

@Injectable({providedIn: 'root'})
export class VideoEditService {
    videosArray: Video[] = [];

    addVideo(name: string, ID: string, type: string, desc: string){
        this.videosArray.push(new Video(name, desc,ID,type));
    }


}
