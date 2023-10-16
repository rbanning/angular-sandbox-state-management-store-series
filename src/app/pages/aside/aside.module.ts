import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared';

import { AsideRoutingModule } from './aside-routing.module';
import { AsideService } from './utilities/aside.service';
import { AsideComponent } from './aside.component';
import { generalComponents } from './components';
import { asideComponents } from './aside-components';


@NgModule({
  declarations: [
    AsideComponent,
    generalComponents,
    asideComponents,
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
