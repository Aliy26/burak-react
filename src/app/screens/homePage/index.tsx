import React, { useEffect } from "react";
import Statistics from "./Statistics";
import PopularDishes from "./PopularDishes";
import NewDishes from "./NewDishes";
import Adverstisement from "./Advertisement";
import ActiveUsers from "./ActiveUsers";
import Events from "./Events";
import "../../../css/home.css";

export default function HomePage() {
  // Selector: (Selecting) Data from Store

  useEffect(() => {
    // Backend server data request => Data
    // Slice: (recording) Data =>  (to Redux) Store
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
