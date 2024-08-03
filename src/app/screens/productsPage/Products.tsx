import React, { useEffect } from "react";
import { Box, Button, Container, Stack } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import RemoveRedIcon from "@mui/icons-material/RemoveRedEye";
import Badge from "@mui/material/Badge";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowFrowardIcon from "@mui/icons-material/ArrowForward";

import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import { setProducts } from "./slice";
import { createSelector } from "reselect";
import { retrieveProducts } from "./selector";
import { Product } from "../../../lib/types/products";
import ProductService from "../../services/ProductService";
import { ProductCollection } from "../../../lib/enums/product.enum";
import { serverApi } from "../../../lib/config";

/** Redux Slice & Selector */
const actionDispatch = (dispatch: Dispatch) => ({
  setProducts: (data: Product[]) => dispatch(setProducts(data)),
});
const productsRetriever = createSelector(retrieveProducts, (products) => ({
  products,
}));

export default function Products() {
  const { setProducts } = actionDispatch(useDispatch());
  const { products } = useSelector(productsRetriever);
  useEffect(() => {
    const product = new ProductService();
    product
      .getProducts({
        page: 1,
        limit: 8,
        order: "createdAt",
        productCollection: ProductCollection.DISH,
        search: "",
      })
      .then((data) => setProducts(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="products">
      <Container>
        <Stack flexDirection={"column"} alignItems={"center"}>
          <Stack className="avatar-big-box">
            <Stack className={"section-title"}>
              <Box className={"title"}>Burak Restaurant</Box>
              <Box className={"red"}>
                <input type="text" placeholder="Type here" className="input" />
                <Button variant="contained" className="search-button">
                  Search <SearchIcon sx={{ ml: "10px" }} className="icon" />
                </Button>
              </Box>
            </Stack>
          </Stack>

          <Stack className={"dishes-filter-section"}>
            <Stack className={"dishes-filter-box"}>
              <Button
                variant={"contained"}
                color={"primary"}
                className={"order"}
              >
                New
              </Button>
              <Button
                variant={"contained"}
                color={"secondary"}
                className={"order"}
              >
                Price
              </Button>
              <Button
                variant={"contained"}
                color={"secondary"}
                className={"order"}
              >
                Views
              </Button>
            </Stack>
          </Stack>

          <Stack className={"list-category-section"}>
            <Stack className={"product-category"}>
              <Button variant={"contained"} color={"primary"} className="order">
                Dish
              </Button>
              <Button
                variant={"contained"}
                color={"secondary"}
                className="order"
              >
                Salad
              </Button>
              <Button
                variant={"contained"}
                color={"secondary"}
                className="order"
              >
                Drink
              </Button>
              <Button
                variant={"contained"}
                color={"secondary"}
                className="order"
              >
                Dessert
              </Button>
              <Button
                variant={"contained"}
                color={"secondary"}
                className="order"
              >
                Other
              </Button>
            </Stack>

            <Stack className={"product-wrapper"}>
              {products.length !== 0 ? (
                products.map((product: Product) => {
                  const imagePath = `${serverApi}/${product.productImages[0]}`;
                  const sizeVolume =
                    product.productCollection === ProductCollection.DRINK
                      ? product.productVolume + " L"
                      : product.productSize + " size";
                  return (
                    <Stack key={product._id} className={"product-card"}>
                      <Stack
                        className={"product-img"}
                        sx={{ backgroundImage: `url(${imagePath})` }}
                      >
                        <div className={"product-sale"}>{sizeVolume}</div>
                        <Stack className={"product-btns"}>
                          <Button className={"shop-btn"}>
                            <img src={"/icons/shopping-cart.svg"} />
                          </Button>
                          <Button className={"view-btn"}>
                            <Badge
                              badgeContent={product.productViews}
                              color="secondary"
                              className="badge"
                            >
                              <RemoveRedIcon
                                sx={{
                                  color:
                                    product.productViews === 0
                                      ? "gray"
                                      : "white",
                                }}
                              />
                            </Badge>
                          </Button>
                        </Stack>
                      </Stack>
                      <Box className={"product-desc"}>
                        <span className={"product-title"}>
                          {product.productName}
                        </span>
                        <div className="product-price">
                          <MonetizationOnIcon />
                          {product.productPrice}
                        </div>
                      </Box>
                    </Stack>
                  );
                })
              ) : (
                <Box className={"no-data"}>No Products Available</Box>
              )}
            </Stack>
          </Stack>
          <Stack className={"pagination-section"}>
            <Pagination
              count={3}
              page={1}
              renderItem={(item) => (
                <PaginationItem
                  components={{
                    previous: ArrowBackIcon,
                    next: ArrowFrowardIcon,
                  }}
                  {...item}
                  color={"secondary"}
                />
              )}
            />
          </Stack>
        </Stack>
      </Container>
      <div className="brands-logo">
        <Container className="family-brands">
          <Stack className="brand-list">
            <Box className={"category-title"}>Our Family Brands</Box>
            <Box className={"review-box"}>
              <img className="rest-logo" src={"/img/gurme.webp"} alt="" />
              <img className="rest-logo" src={"/img/seafood.webp"} alt="" />
              <img className="rest-logo" src={"/img/sweets.webp"} alt="" />
              <img className="rest-logo" src={"/img/doner.webp"} alt="" />
            </Box>
          </Stack>
        </Container>
      </div>
      <div className="address">
        <Container>
          <Stack className="address-area">
            <Box className={"title"}>Our Address</Box>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10318.676760234534!2d127.05146155758018!3d37.550703270493614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca3a4c23b83eb%3A0xa27a76b786341663!2sD%20Museum!5e0!3m2!1sen!2skr!4v1720935785350!5m2!1sen!2skr"
              width="100%"
              height="570px"
            ></iframe>
          </Stack>
        </Container>
      </div>
    </div>
  );
}
