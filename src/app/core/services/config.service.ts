import { Injectable } from "@angular/core";
import { parsers } from "@app/common";
import { IConfig } from "@app/models";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  private _config: IConfig;

  constructor() {
    this._config = this.loadConfig();
  }

  get<T>(key: keyof IConfig) {
    return this._config[key] as T;
  }

  loadConfig() {
    return {
      production: parsers.toBooleanStrict(environment.production, false),
      api_base_url: environment.api_base_url ?? '',
      remote_delay: parsers.toInt(environment.remote_delay, 1000),
    } as IConfig;
  }
}