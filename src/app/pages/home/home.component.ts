import { Component } from '@angular/core';
import { themeColors } from '@app/common';
import { buttonTypes } from '@app/shared';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent {

  types = buttonTypes;
  colors = themeColors;
}
