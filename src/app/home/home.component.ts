import { Component, OnInit } from '@angular/core';
import {AF} from "../providers/af";
import {FirebaseListObservable} from "angularfire2";

import { NewComponent } from '../new/new.component';
import { PopularComponent } from '../popular/popular.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public newBuild: string;
  public builds: FirebaseListObservable<any>;

  constructor(public afService: AF) { 
    this.builds = this.afService.builds
  }

  ngOnInit() {
  }

}
