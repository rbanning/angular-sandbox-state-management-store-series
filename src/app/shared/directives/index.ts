import { SurfaceDirective } from "./surface.directive";
import { ButtonDirective } from "./button.directive";
import { DynamicHostDirective } from "./dynamic-host";

export const sharedDirectives = [
  ButtonDirective,
  DynamicHostDirective,
  SurfaceDirective,
];

export * from './dynamic-host';
export * from './button.directive';
export * from './surface.directive';
