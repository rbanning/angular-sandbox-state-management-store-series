import { Component, Input } from '@angular/core';
import { Nullable } from '@app/common';

@Component({
  selector: 'app-error-message',
  templateUrl: './error-message.component.html',
  styles: [
  ]
})
export class ErrorMessageComponent {
  @Input()
  title: Nullable<string>;
}
