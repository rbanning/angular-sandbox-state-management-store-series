import { BackLinkComponent } from "./back-link/back-link.component";
import { BulletComponent } from "./bullet/bullet.component";
import { ErrorMessageComponent } from "./error-message/error-message.component";
import { SeriesCardComponent } from "./series-card/series-card.component";

export const sharedComponents = [
  ErrorMessageComponent,
  SeriesCardComponent,
  BackLinkComponent,
  BulletComponent,
];

export * from './error-message/error-message.component';
export * from './back-link/back-link.component';
export * from './series-card/series-card.component';
export * from './bullet/bullet.component';
