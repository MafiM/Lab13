import { Directive, HostListener, ElementRef, EventEmitter } from '@angular/core';

@Directive({
  selector: '[appMycolor]'
})
export class MycolorDirective {
  colors: string[] = ['red', 'yellow', 'green', 'aqua', 'orange', 'blue', 'beige']

  @HostListener('click', ['$event']) onClick ($event){
    let select = Math.floor((Math.random() * 4) + 1);
    $event.target.style.color = this.colors[select]   
  }

  constructor(private elem:ElementRef) {
    //this.click = new EventEmitter()
  }
}
