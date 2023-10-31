import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, delay, finalize, tap, throwError } from 'rxjs';
import { Nullable, parsers, primitive } from "@app/common";
import { WorkingService } from "./working.service";
import { ConfigService } from "./config.service";

export type API_ENDPOINT = 'products' | 'users';
@Injectable({
  providedIn: 'root'
})
export class RemoteApiService {
  protected readonly BASE_URL: string;
  protected readonly DELAY;

  constructor(
    protected config: ConfigService,
    protected http: HttpClient,
    protected workingService: WorkingService
  ) { 
    this.BASE_URL = config.get<string>('api_base_url');
    this.DELAY = config.get<number>('remote_delay') ?? 2000;
  }

  fetch(what: API_ENDPOINT, path?: Nullable<string[]>): Observable<any> {
    const url = this.buildUrl(what, path);
    this.setWorking(what, true);
    return this.http.get(url)
      .pipe(
        delay(this.DELAY),
        tap((result) => {
          console.log("RemoteApiService - fetch", {what, path, result});
        }),
        catchError((err) => {
          console.warn("RemoteApiService - fetch ERROR", {what, path, err});
          return throwError(() => this.buildErrorMessage(err));
        }),
        finalize(() => {
          this.setWorking(what, false);
        })
      )
  }

  protected buildUrl(what: API_ENDPOINT, path?: Nullable<string[]>): string {
    return this.BASE_URL + what + (primitive.isArray(path) ? `/${path.join('/')}` : '');
  }
  
  protected buildErrorMessage(err: any): string {
    return parsers.fromHttpError(err) ?? 'Unknown error returned by remote api';
  }


  protected setWorking(what: API_ENDPOINT, state: boolean) {
    this.workingService.setWorking(`RemoteApiService-${what}`, state);
  }
}