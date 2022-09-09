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

const Order = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const [order, setOrder] = useState([]);
  const [msg, setMsg] = useState("");

  useEffect(() => {
    if (!userInfo) {
      router.push("/login");
    }
    const getOrder = async () => {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userInfo.token}`,
        },
      };
      const { data } = await axios.get(`https://gravitybites.in/api/orders/getallorders`, config);
      setOrder(data.orders);
      console.log(order);
    };
    getOrder();
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
            <Typography sx={{ mb: 3 }} variant="h4">
              Orders
            </Typography>
            <Grid container spacing={3}>
              <Grid item lg={12} md={6} xs={12}>
                <Card>
                  {order?.map((ord) => {
                    <CardContent>
                    {msg != "" ? <Alert severity="success">{msg}</Alert> : ""}
                    <Typography sx={{ pb: 2 }}>Order Id:- {ord._id}</Typography>
                    <Typography sx={{ pb: 2 }}>Delivery Slot:- </Typography>
                    <Typography sx={{ pb: 2 }}>Pickup Address:- 4654556656</Typography>

                    <TableContainer component={Paper}>
                      <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                          <TableRow>
                            <TableCell align="center">Product Name</TableCell>
                            <TableCell align="center">Product Image</TableCell>
                            <TableCell align="center">Product Quantity</TableCell>
                            <TableCell align="center">Product Price</TableCell>
                            <TableCell align="center">Product GST</TableCell>
                            <TableCell align="center">Total Amount</TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {ord?.products.map((row) => (
                            <TableRow
                              key={row._id}
                              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                            >
                              <TableCell align="center">{row.productId.name}</TableCell>
                              <TableCell align="center">
                                {" "}
                                <img
                                  alt="Product"
                                  src={`https://gravitybites.in${row.productId.image}`}
                                  width="100px"
                                  height="100px"
                                />
                              </TableCell>
                              <TableCell align="center"></TableCell>
                              <TableCell align="center"></TableCell>
                              <TableCell align="center"></TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </CardContent>
                  })}
                  
                </Card>
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
