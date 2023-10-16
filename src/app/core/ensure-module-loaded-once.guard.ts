//Credit to Dan Wahlin for this ...
//https://github.com/DanWahlin/Angular-JumpStart/blob/main/src/app/core/ensure-module-loaded-once.guard.ts

export class EnsureModuleLoadedOnceGuard {

  constructor(targetModule: any) {
    if (targetModule) {
      throw new Error(`${targetModule.constructor.name} has already been loaded. Import this module in the AppModule only.`);
    }
  }

}
