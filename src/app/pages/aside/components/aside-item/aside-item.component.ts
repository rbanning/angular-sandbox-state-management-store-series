import { Component, Input } from '@angular/core';
import { Nullable } from '@app/common';
import { IAsideItem } from '../../utilities';

@Component({
  selector: 'app-aside-item',
  templateUrl: './aside-item.component.html',
  styles: [
    ':host { display: block; }'
  ]
})
export class AsideItemComponent {
  @Input()
  item: Nullable<IAsideItem>;
}


