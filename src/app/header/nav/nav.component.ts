import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  toggleMenu = false;

  onToggleMenu() {
    if(this.toggleMenu === true){
       this.toggleMenu = false;
    }else{
      this.toggleMenu = true;
    }
    console.log('click');
  }
}
