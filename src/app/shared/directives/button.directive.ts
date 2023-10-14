import { Directive, HostBinding, Input } from '@angular/core';
import { ThemeColor } from '@app/common';

  //NOTE: Tailwind can only find classes that are unbroken strings
  //  meaning that we cannot use classes that have been "constructed"
  //  Thus: `border-${this.color}-50` will not work because 
  //        we are using string interpolation.
  //  Our Solution: instead of trying to create all of the individual
  //        classes in the directive, we have constructed 'button' classes
  //        within the component layer of Tailwind and then 
  //        just call them from this Angular Directive.


export type ButtonType = 'outline' | 'solid' | 'clear';
export const buttonTypes: ButtonType[] = ['outline', 'clear', 'solid'];

@Directive({
  selector: '[appButton]'
})
export class ButtonDirective {
  private _appButton: ButtonType = 'outline';
  @Input()
  set appButton(value: ButtonType | '') {
    if (buttonTypes.includes(value as ButtonType)) { 
      this._appButton = value as ButtonType; 
    }
  }

  @Input()
  color: ThemeColor = 'neutral';


  @HostBinding('class')
  private get appClass() {
    //It would be nice to just do this:
    // return `button-${this._appButton}-${this.color}`;
    //But Tailwind needs the class as a solid string.. 

    switch(this._appButton) {
      case 'clear':
        return this.clearButton;
      case 'outline': 
        return this.outlineButton;
      case 'solid':
        return this.solidButton;
      default:
        return this.outlineButton;
    }
  }

  private get outlineButton() {
    switch (this.color) {
      case 'neutral':
        return `button-outline-neutral`;
      case 'primary':
        return `button-outline-primary`;
      case 'secondary':
        return `button-outline-secondary`;
      case 'accent':
        return `button-outline-accent`;
      case 'warn':
        return `button-outline-warn`;
      default:
        return `button-outline-neutral`;
    }
  }

  private get solidButton() {
    switch (this.color) {
      case 'neutral':
        return `button-solid-neutral`;
      case 'primary':
        return `button-solid-primary`;
      case 'secondary':
        return `button-solid-secondary`;
      case 'accent':
        return `button-solid-accent`;
      case 'warn':
        return `button-solid-warn`;
      default:
        return `button-solid-neutral`;
    }
  }

  private get clearButton() {
    switch (this.color) {
      case 'neutral':
        return `button-clear-neutral`;
      case 'primary':
        return `button-clear-primary`;
      case 'secondary':
        return `button-clear-secondary`;
      case 'accent':
        return `button-clear-accent`;
      case 'warn':
        return `button-clear-warn`;
      default:
        return `button-clear-neutral`;
    }
  }
  

}
