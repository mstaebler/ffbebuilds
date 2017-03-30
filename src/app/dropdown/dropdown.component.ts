import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  public units: Unit[] = [
    { 'id': 1, "name": "rain"}
  ];
  public selectedUnit: Unit = this.units[0];
  onSelect(unitId) {
    this.selectedUnit = null;
    for (var i = 0; i < this.units.length; i++){
      if(this.units[i].id == unitId){
        this.selectedUnit = this.units[i];
      }
    }
  }
}

class Unit {
  id: number;
  name: string;
}