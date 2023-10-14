import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared';

import { AsideRoutingModule } from './aside-routing.module';
import { AsideComponent } from './aside.component';


@NgModule({
  declarations: [
    AsideComponent
  ],
  imports: [
    SharedModule,
    AsideRoutingModule
  ]
})
export class AsideModule { }
