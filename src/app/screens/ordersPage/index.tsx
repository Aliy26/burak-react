import { useState, SyntheticEvent } from "react";
import { Container, Stack, Box } from "@mui/material";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PausedOrders from "./PausedOrders";
import ProcessOrders from "./ProcessOrders";
import FinishedOrders from "./FinishedOrders";
import { useDispatch } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import { setFinishedOrders, setPausedOrders, setProcessOrders } from "./slice";
import { Order } from "../../../lib/types/order";
import "../../../css/order.css";

/** REDUX SLICE & SELECTOR */
const actionDispatch = (dispatch: Dispatch) => ({
  setPausedOrders: (data: Order[]) => dispatch(setPausedOrders(data)),
  setProcessOrders: (data: Order[]) => dispatch(setProcessOrders(data)),
  setFinishedOrders: (data: Order[]) => dispatch(setFinishedOrders(data)),
});

export default function OrdersPage() {
  const { setPausedOrders, setProcessOrders, setFinishedOrders } =
    actionDispatch(useDispatch());
  const [value, setValue] = useState("1");

  //** HANDLERS **/

  const handleChange = (e: SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <div className={"order-page"}>
      <Container className="order-container">
        <Stack className="order-left">
          <TabContext value={value}>
            <Box className={"order-nav-frame"}>
              <Box className={"border-line"}>
                <Tabs
                  value={value}
                  onChange={handleChange}
                  aria-label="basic tabs example"
                  className={"table-list"}
                >
                  <Tab label="PAUSED ORDERS" value={"1"} />
                  <Tab label="PROCESS ORDERS" value={"2"} />
                  <Tab label="FINISHED ORDERS" value={"3"} />
                </Tabs>
              </Box>
            </Box>

            <Stack className="order-main-content">
              <PausedOrders />
              <ProcessOrders />
              <FinishedOrders />
            </Stack>
          </TabContext>
        </Stack>
        <Stack className={"order-right"}>
          <Box className={"order-info-box"}>
            <Box className={"member-box"}>
              <div className={"order-user-img"}>
                <img
                  src={"/icons/default-user.svg"}
                  className={"order-user-avatar"}
                />
                <div className={"order-user-icon-box"}>
                  <img src="/icons/user-badge.svg" />
                </div>
                <p className={"user-name"}>Justin</p>
                <p className={"user"}>User</p>
                <div className="border-line"></div>
                <div className="location">
                  <img src={"/icons/location.svg"} />
                  <p>South Korea, Seoul</p>
                </div>
              </div>
            </Box>
          </Box>

          <Stack className={"input-fields"}>
            <input
              type="text"
              className="top-input"
              placeholder="Card number : 5243 4090 2002 7495"
            />
            <Box className={"input-container"}>
              <input type="text" className="flex-input" placeholder="07/24" />
              <input type="text" className="flex-input" placeholder="CVV:010" />
            </Box>
            <input
              type="text"
              className="bottom-input"
              placeholder="Justin Robertson"
            />
            <Box className="images">
              <img src="/icons/western-card.svg" alt="" />
              <img src="/icons/master-card.svg" alt="" />
              <img src="/icons/paypal-card.svg" alt="" />
              <img src="/icons/visa-card.svg" alt="" />
            </Box>
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}
