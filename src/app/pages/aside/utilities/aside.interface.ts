import { Type } from "@angular/core";
import { IAsideComponent } from "../aside-components";

export interface IAsideCategory {
  id: string;
  name: string;
  snippet: string;
  icon: string;
  items?: IAsideItem[]; //optional - added in AsideService
}
export interface IAsideItem {
  id: string;
  name: string;
  snippet: string;
  categoryId: string;
  category?: IAsideCategory;  //optional - added in AsideService  
  component?: Type<IAsideComponent>;  //see https://angular.io/api/core/Type
}