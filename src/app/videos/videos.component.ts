import { Component, OnInit, Input, AfterContentChecked, HostListener } from '@angular/core';
import { Video } from '../videos/video.module';
import { ServerHandelerService } from '../shared/server-handeler.service';
import { DomSanitizer } from '@angular/platform-browser';
import { VideosService } from '../shared/videos.service';
import { VideoEditComponent } from './video-edit/video-edit.component';
import { Subscription } from 'rxjs';
import { LoginService } from '../pages/login/login.service';


@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss'],

})
export class VideosComponent implements OnInit, AfterContentChecked {
  @Input() page: string;
  showEditForm = false;
  EditButtonContent = false;
  videosArray: Video[] = [];
  serverHendelerService: any;
  confirmAnswer: boolean;
  @Input() isLogged = false;
  videoUrl: any = '';

  constructor(private serverService: ServerHandelerService, private videosService: VideosService, public sanitizer: DomSanitizer, private loginService: LoginService) {

  }
  // NEED TO ADD ON DESTROY TO FETCH DATA WHEN COMPONENT IS DESTROY
  // NEED TO FETCH DATA ONLY IF THE ARRAY IS EMPTY AND DATA ON THE DATABASE CHANGED 
  ngOnInit() {
    this.videosArray = this.videosService.getPageVideos(this.page);
  }

  ngAfterContentChecked() {
    // console.log('page is ' + this.page);
    // this.videosArray = this.serverService.getVideos(); // Need to change the videosArray to the wanted page array, not from serverService, from videoService
    // this.videosService.sortByType(this.videosArray);

    // console.log('Videos Array From Videos Component', this.videosArray);
  }

  onEdit() {
    console.log("onEdit clicked");
    this.showEditForm = !this.showEditForm;
    this.EditButtonContent = !this.EditButtonContent;
  }

  onDelete(id) {
    this.confirmAnswer = confirm('Are you sure you want to delete?');
    if (this.confirmAnswer) {
      this.videosService.deleteVideosFromServer(id);
      location.reload();
    }

  }



}
