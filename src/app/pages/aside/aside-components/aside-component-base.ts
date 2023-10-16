import { IAsideCategory } from "../utilities";
import { IAsideComponent } from "./aside-component.interface";


export class AsideComponentBase implements IAsideComponent {
  category!: IAsideCategory;
  data?: any;
}