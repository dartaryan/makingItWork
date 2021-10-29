import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appCustomAttribute]',
})
export class CustomAttributeDirective {
  private htmlElement: HTMLElement;
  @Input() color: string = 'red';
  constructor(element: ElementRef) {
    this.htmlElement = element.nativeElement;
    this.htmlElement.style.color = 'red';
  }

  @HostListener('click') OnClick() {
    this.htmlElement.style.color = this.color;
  }
}
