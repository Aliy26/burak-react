import React from "react";
import Statistics from "./Statistics";
import PopularDishes from "./PopularDishes copy";
import NewDishes from "./NewDishes";
import Adverstisement from "./Advertisement";
import ActiveUsers from "./ActiveUsers";
import Events from "./Events";

export default function HomePage() {
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
