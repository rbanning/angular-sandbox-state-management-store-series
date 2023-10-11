import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-back-link',
  templateUrl: './back-link.component.html',
  styles: [ 
    ':host { line-height: 1; display: inline-block; }'
  ]
})
export class BackLinkComponent {
  @Input()
  linkTo: string[] = ['..']
}
