import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appUpper]'
})
export class UpperDirective {

  constructor(private elem : ElementRef) { 
    elem.nativeElement.style.textTransform = 'capitalize'
  }

}
