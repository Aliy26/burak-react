import React from "react";
import { Box, Stack } from "@mui/material";
import Button from "@mui/material/Button";
import TabPanel from "@mui/lab/TabPanel";
import moment from "moment";

export default function PausedOrders() {
  return (
    <TabPanel value={"2"}>
      <Stack>
        {[1, 2].map((value, index) => {
          return (
            <Box key={index} className={"order-main-box"}>
              <Box className={"order-box-scroll"}>
                {[1, 2].map((value2, index2) => {
                  return (
                    <Box key={index2} className={"orders-name-price"}>
                      <Box className={"dish-info"}>
                        <img
                          src={"/img/lavash.webp"}
                          className={"order-dish-img"}
                        />
                        <p className={"title-dish"}>Kebab</p>
                      </Box>
                      <Box className={"price-box"}>
                        <p>$9</p>
                        <img src={"/icons/close.svg"} />
                        <p>2</p>
                        <img src="/icons/pause.svg" />
                        <p style={{ marginLeft: "15px" }}>$24</p>
                      </Box>
                    </Box>
                  );
                })}
              </Box>

              <Box className={"total-price-box"}>
                <Box className={"box-total"}>
                  <p>Product price</p>
                  <p>$18</p>
                  <img src={"/icons/plus.svg"} style={{ marginLeft: "20px" }} />
                  <p>Delivery cost</p>
                  <p>$2</p>
                  <img
                    src={"/icons/pause.svg"}
                    style={{ marginLeft: "20px" }}
                  />
                  <p>Total</p>
                  <p>$20</p>
                  <p className={"data-compl"}>
                    {moment().format("YY-MM-DD HH:mm")}
                  </p>
                </Box>
                <Button variant="contained" className={"verify-button"}>
                  Verify to Fulfil
                </Button>
              </Box>
            </Box>
          );
        })}

        {false && (
          <Box display={"flex"} flexDirection={"row"} justifyContent={"center"}>
            <img
              src="/icons/noimage-list.svg"
              style={{ width: 300, height: 300 }}
            />
          </Box>
        )}
      </Stack>
    </TabPanel>
  );
}