import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { sharedComponents } from './components';
import { RouterModule } from '@angular/router';
import { sharedDirectives } from './directives';



@NgModule({
  declarations: [
    sharedComponents,
    sharedDirectives,
  ],
  imports: [
    CommonModule,
    RouterModule  //don't export
  ],
  exports: [
    CommonModule,
    sharedComponents,
    sharedDirectives,
  ]
})
export class SharedModule { }
