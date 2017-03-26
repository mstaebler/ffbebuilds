import { Component, OnInit } from '@angular/core';
import {AF} from "../providers/af";
import {FirebaseListObservable} from "angularfire2";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  public newBuild: string;
  public builds: FirebaseListObservable<any>;
  constructor(public afService: AF) {
    this.builds = this.afService.builds;
  }

  ngOnInit() {}

  sendBuild(){
    this.afService.sendBuild(this.newBuild);
    this.newBuild = '';
  }
}
