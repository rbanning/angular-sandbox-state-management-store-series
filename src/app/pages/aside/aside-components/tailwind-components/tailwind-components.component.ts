import { Component } from '@angular/core';
import { AsideComponentBase } from '../aside-component-base';
import { ThemeColor, themeColors } from '@app/common';
import { ButtonType, SurfaceSize, buttonTypes, surfaceSizes } from '@app/shared';

@Component({
  selector: 'app-tailwind-components',
  templateUrl: './tailwind-components.component.html',
  styles: [
  ]
})
export class TailwindComponentsComponent extends AsideComponentBase {

  buttonTypes: ButtonType[] = buttonTypes;
  colors: ThemeColor[] = themeColors;
  surfaceSizes: SurfaceSize[] = surfaceSizes;
}
