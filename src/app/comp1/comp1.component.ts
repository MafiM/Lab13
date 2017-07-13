import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styles: []
})
export class Comp1Component implements OnInit {
  fruits : string[]
  public selectedColor: string;

  constructor() {
    this.fruits = ["Apple", "Orange", "Grapes", "Pineapple"]
   }

  ngOnInit() {
    this.selectedColor = "red"
  }
  getCurrentColor(evt) {
    this.selectedColor = evt.target.style.color
  }
}
