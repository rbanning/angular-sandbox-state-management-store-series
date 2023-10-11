export interface ISeriesPage {
  id: string;
  title: string;
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