import { Component, Input } from '@angular/core';
import { Nullable, primitive } from '@app/common';

const GITHUB_REPO = "https://github.com/rbanning/angular-sandbox-state-management-store-series";
@Component({
  selector: 'app-repo-link',
  templateUrl: './repo-link.component.html',
  styles: [
    `.custom {
      color: green;
    }`,
    `.custom:empty { 
      display: none; 
    }`,
    `.custom:not(:empty) + .default {
      display: none;
    }`
  ]
})
export class RepoLinkComponent {
  @Input()
  file: Nullable<string>;

  @Input()
  name: Nullable<string>;

  @Input()
  branch: string = 'main';

  get href() {
    if (primitive.isNullish(this.file)) { return ''; }
    //else
    return `${GITHUB_REPO}/tree/${this.branch}/${this.file}`;
  }
}
