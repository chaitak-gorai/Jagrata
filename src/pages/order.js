import Head from "next/head";
import { Alert, Container, Typography } from "@mui/material";
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

const Order = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const [msg, setMsg] = useState("");
  const orderList = useSelector((state) => state.ordersList);
  const { loading: orderLoading, error: orderError, orders } = orderList;
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
  return (
    <>
      <Head>
        <title>Order | Material Kit</title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
        }}
      >
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            py: 8,
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
                {orders?.map((ord) => {
                  return (
                    <Card key={ord._id} style={{ margin: "20px" }}>
                      <CardContent>
                        {msg != "" ? <Alert severity="success">{msg}</Alert> : ""}
                        <Grid
                          item
                          lg={12}
                          md={6}
                          xs={12}
                          style={{ display: "flex", justifyContent: "space-between" }}
                        >
                          <Typography sx={{ pb: 2 }}>
                            <b>User:-</b> {ord.userId.name} ID:{ord.userId._id}{" "}
                          </Typography>
                          <Typography sx={{ pb: 2 }}>
                            <b>Location:-</b>
                            {ord.location.formattedAddress}
                          </Typography>
                          <Typography sx={{ pb: 2 }}>
                            <b>Location:-</b> {ord.location.formattedAddress}
                          </Typography>
                          <Typography sx={{ pb: 2 }}>
                            <b>Status</b>
                            <SeverityPill
                              color={
                                (ord.status === "delivered" && "success") ||
                                (ord.status === "refunded" && "error") ||
                                "warning"
                              }
                            >
                              {ord.status}
                            </SeverityPill>
                          </Typography>
                        </Grid>
                        <TableContainer component={Paper}>
                          <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                              <TableRow>
                                <TableCell align="center">Product Id</TableCell>
                                <TableCell align="center">Product Image</TableCell>
                                <TableCell align="center">Product Name</TableCell>

                                <TableCell align="center">Product Quantity</TableCell>
                                <TableCell align="center">Product Price</TableCell>
                                <TableCell align="center">Product GST</TableCell>
                              </TableRow>
                            </TableHead>
                            <TableBody>
                              {ord?.products.map((row) => (
                                <TableRow
                                  key={row._id}
                                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                                >
                                  <TableCell align="center">{row.productId._id}</TableCell>
                                  <TableCell align="center">
                                    {" "}
                                    <img
                                      alt="Product"
                                      src={`https://gravitybites.in${row.productId.image}`}
                                      width="100px"
                                      height="100px"
                                    />
                                  </TableCell>
                                  <TableCell align="center">{row.productId.name}</TableCell>
                                  <TableCell align="center">{row.quantity}</TableCell>
                                  <TableCell align="center">{row.price}</TableCell>
                                  <TableCell align="center">{row.gst}</TableCell>
                                </TableRow>
                              ))}
                            </TableBody>
                          </Table>
                        </TableContainer>
                        <Grid
                          item
                          lg={12}
                          md={6}
                          xs={12}
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            marginTop: "10px",
                          }}
                        >
                          <Typography sx={{ pb: 2 }}>
                            <b>Sub Total:-</b> {ord.subTotal}{" "}
                          </Typography>
                          <Typography sx={{ pb: 2 }}>
                            <b>GST:-</b> {ord.GST}{" "}
                          </Typography>
                          <Typography sx={{ pb: 2 }}>
                            <b>Packaging:-</b> {ord.packagingCharges}{" "}
                          </Typography>
                          <Typography sx={{ pb: 2 }}>
                            <b>Base:-</b> {ord.baseFare}{" "}
                          </Typography>
                          <Typography sx={{ pb: 2 }}>
                            <b>Distance fee:-</b> {ord.distanceFee}{" "}
                          </Typography>
                          <Typography sx={{ pb: 2 }}>
                            <b>Total:-</b>
                            <SeverityPill color="success">{ord.Total}</SeverityPill>{" "}
                          </Typography>
                        </Grid>
                      </CardContent>
                    </Card>
                  );
                })}
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
