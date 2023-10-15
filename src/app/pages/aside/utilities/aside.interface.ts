
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
}