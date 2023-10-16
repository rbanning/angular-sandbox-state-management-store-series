import { Component, ElementRef, HostBinding } from '@angular/core';

@Component({
  selector: 'app-tooltip',
  templateUrl: './tooltip.component.html',
  styles: [
    `:host {
      position: absolute;
      left: 0; right: 0;
      bottom: -110%;
    }`,
    `
    .active {
        opacity: 1;
    }`
  ]
})
export class TooltipComponent {
  @HostBinding('class') 
  get css() {
    if (this.show) {
      return 'visible';
    }
    //else
    return 'hidden';
  }

  show: boolean = false;

  constructor(private elRef: ElementRef) {
    const parent = elRef.nativeElement.parentElement;
    if (parent) {
      parent.style.position = 'relative';
      parent.addEventListener('mouseover', () => { this.show = true; });
      parent.addEventListener('mouseout', () => { this.show = false; });
    }
    console.log("DEBUG: tooltip", {elRef, parent});
  }
}
