import { Member } from "./member";
import { Product } from "./products";

// ** REACT APP STATE **//
export interface AppRootState {
  homePage: HomePageState;
  productsPage: ProductsPageState;
}

//** HOMEPAGE **/
export interface HomePageState {
  popularDishes: Product[];
  newDishes: Product[];
  topUsers: Member[];
}

//** PRODUCTS **/
export interface ProductsPageState {}

//** ORDERS PAGE **/