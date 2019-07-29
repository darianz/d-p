import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weddings',
  templateUrl: './weddings.component.html',
  styleUrls: ['./weddings.component.scss']
})
export class WeddingsComponent implements OnInit {
  weddings = 'weddings';
  constructor() { }

  ngOnInit() {
  }

}
