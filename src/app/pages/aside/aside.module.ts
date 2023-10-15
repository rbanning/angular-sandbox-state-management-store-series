import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared';

import { AsideRoutingModule } from './aside-routing.module';
import { AsideComponent } from './aside.component';
import { asideComponents } from './components';
import { AsideService } from './utilities/aside.service';


@NgModule({
  declarations: [
    AsideComponent,
    asideComponents
  ],
  imports: [
    SharedModule,
    AsideRoutingModule
  ],
  providers: [
    AsideService
  ]
})
export class AsideModule { }
