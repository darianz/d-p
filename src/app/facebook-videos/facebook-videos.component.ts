import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-facebook-videos',
  templateUrl: './facebook-videos.component.html',
  styleUrls: ['./facebook-videos.component.scss']
})
export class FacebookVideosComponent implements OnInit {
  name: string;
  ID: string;
  description: string;
  
  constructor() {
    
   }

  ngOnInit() {
  }

}
