import { Component, OnInit } from '@angular/core';

import { NewComponent } from '../new/new.component';
import { PopularComponent } from '../popular/popular.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
