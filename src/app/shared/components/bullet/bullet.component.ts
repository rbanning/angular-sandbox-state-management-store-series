import { Component, HostBinding, Input } from '@angular/core';
import { ThemeColor } from '@app/common';

@Component({
  selector: 'app-bullet',
  template: '&bullet;',
  styles: [
  ]
})
export class BulletComponent {
  @Input()
  color: ThemeColor = 'accent';

  @HostBinding('class')
  get css() {
    switch (this.color) {
      case 'neutral':
        return 'text-2xl text-neutral-600';
      case 'primary':
        return 'text-2xl text-primary-600';
      case 'secondary':
        return 'text-2xl text-secondary-600';
      case 'accent':
        return 'text-2xl text-accent-600';
      case 'warn':
        return 'text-2xl text-warn-600';
      default:
        return 'text-2xl text-black';
    }
  }
}
