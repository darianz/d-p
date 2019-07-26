import { Component, OnInit } from '@angular/core';
import { ServerHandelerService } from '../server-handeler.service';


@Component({
  selector: 'app-server-handeler',
  templateUrl: './server-handeler.component.html',
  styleUrls: ['./server-handeler.component.scss']
})
export class ServerHandelerComponent implements OnInit {

  video = {name: 'Video tittle', ID: '1456', description: 'Video description', type: 'youtube'};

  constructor(private ServerHandelerService: ServerHandelerService) { }

  ngOnInit() {
    this.ServerHandelerService.getVideos().subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    );
  }

  addVideo() { //storeVideo is a callback
    this.ServerHandelerService.storeVideo(this.video)
    .subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
      
    );
  }
}
