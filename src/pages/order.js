import Head from "next/head";
import { Alert, Avatar, Container, Modal, Typography } from "@mui/material";
import { AccountProfile } from "../components/account/account-profile";
import { AccountProfileDetails } from "../components/account/account-profile-details";
import { Support } from "../components/account/support";
import { Wallet } from "../components/account/wallet";
import { Review } from "../components/account/review";

import { DashboardLayout } from "../components/dashboard-layout";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import DeleteIcon from "@mui/icons-material/Delete";
import * as Yup from "yup";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField,
} from "@mui/material";
import axios from "axios";
import { useFormik } from "formik";
import { LatestOrders } from "src/components/dashboard/latest-orders";
import { listMyOrder } from "src/store/actions/ordersActions";
import { SeverityPill } from "src/components/severity-pill";
import { ArrowDropDown } from "@mui/icons-material";
import { StyledMenu } from "src/components/customer/customer-list-results";

const Order = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const [activeCost, setActiveCost] = useState("");
  const [msg, setMsg] = useState("");
  const orderList = useSelector((state) => state.ordersList);
  const { loading: orderLoading, error: orderError, orders } = orderList;
  const [anchorEl, setAnchorEl] = useState(null);
  const [active, setActive] = useState("");
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    console.log(event.taget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  useEffect(() => {
    if (!userInfo) {
      router.push("/login");
    }
    dispatch(listMyOrder());
    console.log(orders);
  }, [userInfo, dispatch, router, msg]);
  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",

    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const [activeAdd, setActiveAdd] = useState("");
  const [activeAdd2, setActiveAdd2] = useState("");
  const handleOpen = () => setOpen(true);

  return (
    <>
      <Head>
        <title>Order | Material Kit</title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
        }}
      >
        <Box
          component="main"
          sx={{
            flexGrow: 1,
          }}
        >
          <Container maxWidth="lg">
            <Typography
              sx={{ mb: 3 }}
              variant="h4"
              style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
            >
              Orders
            </Typography>
            <Grid container spacing={3}>
              <Grid item lg={12} md={6} xs={12}>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Order Id</TableCell>
                      <TableCell>Name</TableCell>
                      <TableCell>Product Details</TableCell>
                      <TableCell>Pick-up Address</TableCell>
                      <TableCell>Address</TableCell>
                      <TableCell>Delivery</TableCell>
                      <TableCell>Time</TableCell>
                      <TableCell>Cost</TableCell>
                      <TableCell>Order Status</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {orders?.map((ord) => (
                      <TableRow hover key={ord._id}>
                        <TableCell>
                          <Box
                            sx={{
                              alignItems: "center",
                              display: "flex",
                            }}
                          >
                            <Typography color="textPrimary" variant="body1">
                              {ord._id}
                            </Typography>
                          </Box>
                        </TableCell>
                        <TableCell>{ord.userId.name}</TableCell>
                        <TableCell>
                          <Button
                            color="primary"
                            variant="contained"
                            onClick={() => {
                              setActive(ord._id);
                            }}
                          >
                            Products
                          </Button>
                          <Modal
                            open={active === ord._id}
                            onClose={() => {
                              setActive("");
                            }}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                          >
                            <Box sx={style}>
                              <Table>
                                <TableHead>
                                  <TableRow>
                                    <TableCell>Id</TableCell>
                                    <TableCell>Image</TableCell>
                                    <TableCell>Name</TableCell>
                                    <TableCell>Quantity</TableCell>
                                    <TableCell>Price</TableCell>
                                    <TableCell>Gst</TableCell>
                                  </TableRow>
                                </TableHead>
                                <TableBody>
                                  {ord.products.map((prod) => (
                                    <TableRow key={prod._id}>
                                      <TableCell>{prod._id}</TableCell>
                                      {prod.productId != null ? (
                                        <>
                                          <TableCell>
                                            <img
                                              alt="Product"
                                              src={`https://gravitybites.in${prod.productId.image}`}
                                              width="40px"
                                              height="40px"
                                            />
                                          </TableCell>
                                          <TableCell>{prod.productId.name}</TableCell>
                                        </>
                                      ) : (
                                        <>
                                          <TableCell>
                                            <img
                                              alt="Product"
                                              src={`https://gravitybites.in/uploads/carrot.jpg`}
                                              width="40px"
                                              height="40px"
                                            />
                                          </TableCell>
                                          <TableCell>Product Name</TableCell>
                                        </>
                                      )}

                                      <TableCell>{prod.quantity}</TableCell>
                                      <TableCell>{prod.price}</TableCell>
                                      <TableCell>{prod.gst}</TableCell>
                                    </TableRow>
                                  ))}
                                </TableBody>
                              </Table>
                            </Box>
                          </Modal>
                        </TableCell>
                        <TableCell>
                          <Button
                            color="primary"
                            variant="contained"
                            onClick={() => {
                              setActiveAdd(ord._id);
                            }}
                          >
                            PickUp
                          </Button>
                          <Modal
                            open={activeAdd === ord._id}
                            onClose={() => {
                              setActiveAdd("");
                            }}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                          >
                            <Box sx={style}>
                              <Table>
                                <TableHead>
                                  <TableRow>
                                    <TableCell>Street No</TableCell>
                                    <TableCell>Street Name</TableCell>
                                    <TableCell>City</TableCell>
                                    <TableCell>State</TableCell>
                                    <TableCell>Zip Code</TableCell>
                                    <TableCell>Country</TableCell>
                                    <TableCell>Longitude</TableCell>
                                    <TableCell>Latitude</TableCell>
                                  </TableRow>
                                </TableHead>
                                <TableBody>
                                  <TableRow key={ord.pickupAddress._id}>
                                    <TableCell>{ord.pickupAddress.streetName}</TableCell>
                                    <TableCell>{ord.pickupAddress.streetNumber}</TableCell>
                                    <TableCell>{ord.pickupAddress.city}</TableCell>
                                    <TableCell>{ord.pickupAddress.countryCode}</TableCell>
                                    <TableCell>{ord.pickupAddress.stateCode}</TableCell>
                                    <TableCell>{ord.pickupAddress.zipcode}</TableCell>
                                    <TableCell>{ord.pickupAddress.latitude}</TableCell>
                                    <TableCell>{ord.pickupAddress.longitude}</TableCell>
                                  </TableRow>
                                </TableBody>
                              </Table>
                            </Box>
                          </Modal>
                        </TableCell>
                        <TableCell>
                          <Button
                            color="primary"
                            variant="contained"
                            onClick={() => {
                              setActiveAdd2(ord._id);
                            }}
                          >
                            Address
                          </Button>
                          <Modal
                            open={activeAdd2 === ord._id}
                            onClose={() => {
                              setActiveAdd2("");
                            }}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                          >
                            <Box sx={style}>
                              <Table>
                                <TableHead>
                                  <TableRow>
                                    <TableCell>Type</TableCell>
                                    <TableCell>Street No</TableCell>
                                    <TableCell>Street Name</TableCell>
                                    <TableCell>City</TableCell>
                                    <TableCell>State</TableCell>
                                    <TableCell>Zip Code</TableCell>
                                    <TableCell>Country</TableCell>
                                  </TableRow>
                                </TableHead>
                                <TableBody>
                                  <TableRow key={ord.address._id}>
                                    <TableCell>{ord.address.addressType}</TableCell>
                                    <TableCell>{ord.address.streetName}</TableCell>
                                    <TableCell>{ord.address.streetNumber}</TableCell>
                                    <TableCell>{ord.address.city}</TableCell>
                                    <TableCell>{ord.address.countryCode}</TableCell>
                                    <TableCell>{ord.address.stateCode}</TableCell>
                                    <TableCell>{ord.address.zipcode}</TableCell>
                                  </TableRow>
                                </TableBody>
                              </Table>
                            </Box>
                          </Modal>
                        </TableCell>
                        <TableCell>{ord.deliveryOption}</TableCell>
                        <TableCell>{ord.createdAt}</TableCell>
                        <TableCell>
                          <Button
                            color="primary"
                            variant="contained"
                            onClick={() => {
                              setActiveCost(ord._id);
                            }}
                          >
                            Cost
                          </Button>
                          <Modal
                            open={activeCost === ord._id}
                            onClose={() => {
                              setActiveCost("");
                            }}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                          >
                            <Box sx={style}>
                              <Table>
                                <TableHead>
                                  <TableRow>
                                    <TableCell>Sub Total</TableCell>
                                    <TableCell>GST</TableCell>
                                    <TableCell>Packaging Charge</TableCell>
                                    <TableCell>Base Fare</TableCell>
                                    <TableCell>Distance Fee</TableCell>
                                    <TableCell>Service Fees</TableCell>
                                    <TableCell>Cashback Used</TableCell>
                                    <TableCell>Total</TableCell>
                                  </TableRow>
                                </TableHead>
                                <TableBody>
                                  <TableRow key={ord._id}>
                                    <TableCell>{ord.subTotal}</TableCell>
                                    <TableCell>{ord.GST}</TableCell>
                                    <TableCell>{ord.packagingCharges}</TableCell>
                                    <TableCell>{ord.baseFare}</TableCell>
                                    <TableCell>{ord.distanceFee}</TableCell>
                                    <TableCell>{ord.serviceFee}</TableCell>
                                    <TableCell>{ord.cashbackUsed}</TableCell>
                                    <TableCell>
                                      {" "}
                                      <SeverityPill color="success">{ord.Total}</SeverityPill>
                                    </TableCell>
                                  </TableRow>
                                </TableBody>
                              </Table>
                            </Box>
                          </Modal>
                        </TableCell>
                        <TableCell>
                          <SeverityPill
                            color={
                              (ord.status === "delivered" && "success") ||
                              (ord.status === "refunded" && "error") ||
                              "warning"
                            }
                          >
                            {ord.status.substr(6)}
                          </SeverityPill>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
    </>
  );
};

Order.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Order;
