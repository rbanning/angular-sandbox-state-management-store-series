import { BackLinkComponent } from "./back-link/back-link.component";
import { ErrorMessageComponent } from "./error-message/error-message.component";
import { SeriesCardComponent } from "./series-card/series-card.component";

export const sharedComponents = [
  ErrorMessageComponent,
  SeriesCardComponent,
  BackLinkComponent
];

export * from './error-message/error-message.component';
export * from './back-link/back-link.component';
export * from './series-card/series-card.component';

