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

const Order = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const [Order, setOrder] = useState([]);
  const [msg, setMsg] = useState("");
  const orderList = useSelector((state) => state.ordersList);
  const { loading: orderLoading, error: orderError, orders } = orderList;
  const formik = useFormik({
    initialValues: {
      productName: "",
      productPrice: "",
    },
    validationSchema: Yup.object({
      productName: Yup.string().max(255).required("Name is required"),
      productPrice: Yup.string().required("Price is required"),
    }),
    onSubmit: async () => {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userInfo.token}`,
        },
      };
      const { data } = await axios.post(
        `https://gravitybites.in/api/stores/addtoOrder`,
        {
          productName: formik.values.productName,
          productPrice: formik.values.productPrice,
        },
        config
      );
      setMsg(`${data.mess} Added to Order`);
    },
  });
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
      const { data } = await axios.get(`https://gravitybites.in/api/stores/showOrder`, config);
      setOrder(data.myOrder);
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
            <Typography
              sx={{ mb: 3 }}
              variant="h4"
              style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
            >
              Orders
            </Typography>
            <Grid
              container
              spacing={3}
              style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
            >
              <LatestOrders orders={orders} />
            </Grid>
          </Container>
        </Box>
      </Box>
    </>
  );
};

Order.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Order;
