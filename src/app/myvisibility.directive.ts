import { Directive, ElementRef, Renderer, Input } from '@angular/core';

@Directive({
  selector: '[appMyvisibility]'
})
export class MyvisibilityDirective {
  @Input() appMyvisibility:boolean

  constructor(private elem: ElementRef) { }

  ngOnInit() {
    if(!this.appMyvisibility) {
      this.elem.nativeElement.style.display = "none"
    } else {
      this.elem.nativeElement.style.display = "block"
    }
  }
}
