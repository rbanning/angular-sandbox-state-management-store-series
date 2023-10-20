import { Component, Input } from '@angular/core';
import { Nullable } from '@app/common';
import { ISeriesItem } from '../../utilities';

export type CardDisplayType = 'normal' | 'mini'

@Component({
  selector: 'app-series-card',
  templateUrl: './series-card.component.html',
  styleUrls: ['./series-card.component.scss']
})
export class SeriesCardComponent {
  @Input()
  item: Nullable<ISeriesItem>;

  @Input()
  display: CardDisplayType = 'normal';

  //css based on display type
  get imageCss() {
    return 'p-8';
  }
}
