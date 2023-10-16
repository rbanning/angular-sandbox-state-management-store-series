import { Directive, HostBinding, Input } from '@angular/core';
import { ThemeColor } from '@app/common';

export type SurfaceSize = 1 | 2 | 3 | 4;

@Directive({
  selector: '[appSurface]'
})
export class SurfaceDirective {
  private _size: SurfaceSize = 1;
  @Input()
  set appSurface(size: SurfaceSize | '') {
    if (typeof(size) === 'number') {
      this._size = size;
    }
  } 

  @Input()
  color: ThemeColor = 'neutral';

  @HostBinding('class')
  private get appClass() {
    //can't build the class string (interpolate) - Tailwind needs the full string 
    switch (this._size) {
      case 1:
        switch (this.color) {
          case 'neutral':
            return 'surface-1-neutral';
          case 'primary':
            return 'surface-1-primary';
          case 'secondary':
            return 'surface-1-secondary';
          case 'accent':
            return 'surface-1-accent';
          case 'warn':
             return 'surface-1-warn';
          default: 
            return 'surface-1'; //should not happen;
        }
      case 2:
        switch (this.color) {
          case 'neutral':
            return 'surface-2-neutral';
          case 'primary':
            return 'surface-2-primary';
          case 'secondary':
            return 'surface-2-secondary';
          case 'accent':
            return 'surface-2-accent';
          case 'warn':
             return 'surface-2-warn';
          default: 
            return 'surface-2'; //should not happen;
        }
      case 3:
        switch (this.color) {
          case 'neutral':
            return 'surface-3-neutral';
          case 'primary':
            return 'surface-3-primary';
          case 'secondary':
            return 'surface-3-secondary';
          case 'accent':
            return 'surface-3-accent';
          case 'warn':
             return 'surface-3-warn';
          default: 
            return 'surface-3'; //should not happen;
        }
      case 4:
        switch (this.color) {
          case 'neutral':
            return 'surface-4-neutral';
          case 'primary':
            return 'surface-4-primary';
          case 'secondary':
            return 'surface-4-secondary';
          case 'accent':
            return 'surface-4-accent';
          case 'warn':
             return 'surface-4-warn';
          default: 
            return 'surface-4'; //should not happen;
        }
    }
  }
}
