import { Directive,ElementRef,HostListener } from '@angular/core';
@Directive({
  selector:'[customD]'
})
export class AppDirective{
  constructor(private el:ElementRef){
    el.nativeElement.style.color='blue';
  }

  @HostListener('click')
  private onClick() {
    this.el.nativeElement.style.color='green';
  }
}