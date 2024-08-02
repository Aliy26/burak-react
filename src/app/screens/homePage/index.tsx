import React, { useEffect } from "react";
import Statistics from "./Statistics";
import PopularDishes from "./PopularDishes";
import NewDishes from "./NewDishes";
import Adverstisement from "./Advertisement";
import ActiveUsers from "./ActiveUsers";
import Events from "./Events";
import "../../../css/home.css";

import { useDispatch } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import { setPopularDishes } from "./slice";
import { Product } from "../../../lib/types/products";
import ProductService from "../../services/ProductService";
import { ProductCollection } from "../../../lib/enums/product.enum";

/** REDUX SLICE & SELECTOR */
const actionDispatch = (dispatch: Dispatch) => ({
  setPopularDishes: (data: Product[]) => dispatch(setPopularDishes(data)),
});

export default function HomePage() {
  const { setPopularDishes } = actionDispatch(useDispatch());

  useEffect(() => {
    // Backend server data fetch => Data
    const product = new ProductService();
    product
      .getProducts({
        page: 1,
        limit: 4,
        order: "productViews",
        productCollection: ProductCollection.DISH,
      })
      .then((data) => {
        console.log("data passed here", data);
        setPopularDishes(data);
      })
      .catch((err) => {
        console.log("useEffect err", err);
      });
  }, []);

  return (
    <div className="homepage">
      <Statistics />
      <PopularDishes />
      <NewDishes />
      <Adverstisement />
      <ActiveUsers />
      <Events />
    </div>
  );
}
