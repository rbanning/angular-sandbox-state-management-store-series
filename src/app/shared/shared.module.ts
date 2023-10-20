import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { sharedComponents } from './components';
import { RouterModule } from '@angular/router';
import { sharedDirectives } from './directives';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    sharedComponents,
    sharedDirectives,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule  //don't export
  ],
  exports: [
    CommonModule,
    HttpClientModule,
    sharedComponents,
    sharedDirectives,
  ]
})
export class SharedModule { }
