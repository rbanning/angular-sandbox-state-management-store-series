import { Type } from "@angular/core";
import { IExamplePage } from "./example-page.interface";

export interface ISeriesPage {
  id: string;
  title: string;
  component?: Type<IExamplePage>;
}
export interface ISeriesItem {
  id: number;
  title: string;
  snippet: string;
  description: string[];
  pages: ISeriesPage[];
  image: {
    src: string;
    alt: string;
    credit: string;
    creditLink: string;
  };
}