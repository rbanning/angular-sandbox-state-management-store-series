import { Injectable } from "@angular/core";
import { RemoteApiService } from "./remote-api.service";
import { Nullable, primitive } from "@app/common";
import { IProduct } from "@app/models/products.interface";
import { Observable, map, of } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(protected remote: RemoteApiService) {}

  loadFromRemote(): Observable<IProduct[]> {
    return this.remote.fetch('products')
    .pipe(
      map((result) => {
        if (primitive.isArray(result)) {
          return result as IProduct[];
        }
        throw new Error("Product Remote API did not return a collection of products as expected");
      })
    )
  }
  getFromRemote(id: string): Observable<Nullable<IProduct>> {
    return this.remote.fetch('products', [id])
      .pipe(
        map((result) => {
          if (result) {
            return result as IProduct;
          }
          return null;   //not found?
        })
      )
  }
  getByCategoryFromRemote(category: string): Observable<IProduct[]> {
    return this.remote.fetch('products', ['category', category])
      .pipe(
        map((result) => {
          if (primitive.isArray(result)) {
            return result as IProduct[];
          }
          //else
          return []; //not found
        })
      )
  }

}