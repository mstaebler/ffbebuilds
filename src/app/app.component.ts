import { Component } from '@angular/core';

import { NewComponent } from './new/new.component';
import { PopularComponent } from './popular/popular.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FFBE Builds';
  create = 'Create Build';
}
