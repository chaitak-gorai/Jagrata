import Head from "next/head";
import { Box, Container, Grid } from "@mui/material";
import { Budget } from "../components/dashboard/budget";
import { LatestOrders } from "../components/dashboard/latest-orders";
import { LatestProducts } from "../components/dashboard/latest-products";
import { Sales } from "../components/dashboard/sales";
import { TasksProgress } from "../components/dashboard/tasks-progress";
import { TotalCustomers } from "../components/dashboard/total-customers";
import { TotalProfit } from "../components/dashboard/total-profit";
import { TrafficByDevice } from "../components/dashboard/traffic-by-device";
import { DashboardLayout } from "../components/dashboard-layout";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getProducts } from "src/store/actions/productActions";
import { listMyOrder } from "src/store/actions/ordersActions";
import { margin } from "@mui/system";

const Dashboard = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const productList = useSelector((state) => state.products);

  const { loading, error: productErr, products } = productList;
  const adminCoupons = useSelector((state) => state.adminCoupons);
  const { loading: adminLoad, error: adminErr, coupons } = adminCoupons;
  const vendorCouponsList = useSelector((state) => state.vendorCoupons);
  const { loading: vendorLoading, error: vendorError, vendorCoupons } = vendorCouponsList;
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const orderList = useSelector((state) => state.ordersList);
  const { loading: orderLoading, error: orderError, orders } = orderList;
  useEffect(() => {
    if (!userInfo) {
      router.push("/login");
    }
    dispatch(getProducts("Vegetables"));
    dispatch(listMyOrder());
  }, [userInfo, dispatch, router]);
  return (
    <>
      <Head>
        <title>Dashboard </title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
        }}
      >
        <Container maxWidth={false}>
          <Grid
            container
            spacing={4}
            sx={{ marginBottom: "20px", display: "flex", justifyContent: "center" }}
          >
            <Grid item>
              <Budget text={"orders"} value={orders ? Object.keys(orders).length : 0} />
            </Grid>
            <Grid item>
              <Budget text={"products"} value={orders ? Object.keys(products).length : 0} />
            </Grid>
            <Grid item>
              <Budget text={"Admin Coupons"} value={orders ? Object.keys(coupons).length : 0} />
            </Grid>
            <Grid item>
              <Budget
                text={"Vendor Coupons"}
                value={orders ? Object.keys(vendorCoupons).length : 0}
              />
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            <Grid item lg={4} md={6} xl={3} xs={12}>
              <LatestProducts sx={{ height: "100%" }} products={products} />
            </Grid>
            <Grid item lg={8} md={12} xl={9} xs={12}>
              <LatestOrders orders={orders} />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

Dashboard.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Dashboard;
