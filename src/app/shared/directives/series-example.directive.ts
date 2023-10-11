import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[seriesExample]',
})
export class SeriesExampleDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}