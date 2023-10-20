import { BackLinkComponent } from "./back-link/back-link.component";
import { BulletComponent } from "./bullet/bullet.component";
import { ErrorMessageComponent } from "./error-message/error-message.component";
import { RepoLinkComponent } from "./repo-link/repo-link.component";
import { TooltipComponent } from "./tooltip/tooltip.component";

export const sharedComponents = [
  ErrorMessageComponent,
  BackLinkComponent,
  BulletComponent,
  RepoLinkComponent,
  TooltipComponent,
];

export * from './error-message/error-message.component';
export * from './back-link/back-link.component';
export * from './bullet/bullet.component';
export * from './repo-link/repo-link.component';
export * from './tooltip/tooltip.component';
