import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-youtube-videos',
  templateUrl: './youtube-videos.component.html',
  styleUrls: ['./youtube-videos.component.scss']
})
export class YoutubeVideosComponent implements OnInit {
  player: YT.Player;
  id: string = 'g8jKK3iCIQs';
  

  
  savePlayer(player) {
    
    this.player = player;
    
    console.log('player instance', player);
  }
  onStateChange(event) {
    console.log('player state', event.data);
  }

  constructor() { }

  ngOnInit() {
    
  }

}
