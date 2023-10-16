import { Component, Input } from '@angular/core';
import { Nullable } from '@app/common';

export interface IErrorMessage {
  title: Nullable<string>;
  message: Nullable<string>;
}

@Component({
  selector: 'app-error-message',
  templateUrl: './error-message.component.html',
  styles: [
  ]
})
export class ErrorMessageComponent implements IErrorMessage {
  @Input()
  title: Nullable<string>;

  @Input()
  message: Nullable<string>;  //optional (can be used along with ng-content)
}
