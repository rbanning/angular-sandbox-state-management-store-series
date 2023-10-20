import { Injectable } from "@angular/core";
import { RemoteApiService } from "./remote-api.service";
import { primitive } from "@app/common";
import { IProducts } from "@app/models/products.interface";
import { Observable, map } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(protected remote: RemoteApiService) {}

  loadFromRemote(): Observable<IProducts[]> {
    return this.remote.fetch('products')
    .pipe(
      map((result) => {
        if (primitive.isArray(result)) {
          return result as IProducts[];
        }
        throw new Error("Product Remote API did not return a collection of products as expected");
      })
    )
  }
}