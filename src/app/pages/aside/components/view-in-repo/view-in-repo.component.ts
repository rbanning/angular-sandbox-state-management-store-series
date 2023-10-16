import { Component, Input } from '@angular/core';
import { Nullable } from '@app/common';

@Component({
  selector: 'app-view-in-repo',
  templateUrl: './view-in-repo.component.html',
  styles: [
  ]
})
export class ViewInRepoComponent {
  // this gets enclosed in <code> element
  @Input()
  code: Nullable<string>

  // these params get passed onto the RepoLinkComponent
  @Input()
  file: Nullable<string>; //required!!

  @Input()
  name: Nullable<string>;

}
