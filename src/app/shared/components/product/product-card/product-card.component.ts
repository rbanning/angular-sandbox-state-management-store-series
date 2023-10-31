import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Nullable, ThemeColor } from '@app/common';
import { IProduct } from '@app/models';
import { ButtonType } from '@app/shared/directives';

export interface ICardButtonConfig {
  type: ButtonType;
  color: ThemeColor;
}
export interface ICardAction {
  id?: Nullable<string>;
  label: string;
  button?: Partial<ICardButtonConfig>;
}
type CardAction = {
  id?: Nullable<string>;
  label: string;
  button: ICardButtonConfig;
};

const defaultCardButton: ICardButtonConfig = {
  type: 'solid',
  color: 'neutral'
}

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styles: [
    ':host { display: block; }'
  ]
})
export class ProductCardComponent {
  @Input()
  item: Nullable<IProduct>;

  @Input("actions")
  _actions: ICardAction[] = [];

  get actions(): CardAction[] {
    return (this._actions ?? []).map(x => {
      return {
        id: null,
        ...x,
        button: {
          type: x.button?.type ?? defaultCardButton.type,
          color: x.button?.color ?? defaultCardButton.color
        }
      };
    });
  }

  @Output()
  action = new EventEmitter<ICardAction>();


  handleAction(action: ICardAction) {
    console.log("DEBUG: handleAction", action);
    this.action.emit(action);
  }
}
