import { Component } from '@angular/core';
import { IAsideComponent } from '../aside-component.interface';
import { IAsideCategory } from '../../utilities';

@Component({
  selector: 'app-aside-core-module',
  templateUrl: './aside-core-module.component.html',
  styles: [
  ]
})
export class AsideCoreModuleComponent implements IAsideComponent {
  category!: IAsideCategory;
  data?: any;
}
