import Head from "next/head";
import { Box, Container, Grid, Pagination } from "@mui/material";
import { coupons } from "../__mocks__/coupons";
import { CouponListToolbar } from "../components/coupon/coupon-list-toolbar";
import { CouponCard } from "../components/coupon/coupon-card";
import { DashboardLayout } from "../components/dashboard-layout";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const Coupons = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  useEffect(() => {
    if (!userInfo) {
      router.push("/login");
    }
  }, [userInfo, dispatch]);
  return (
    <>
      <Head>
        <title>Coupon | Material Kit</title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
        }}
      >
        <Container maxWidth={false}>
          <CouponListToolbar />
          <Box sx={{ pt: 3 }}>
            <Grid container spacing={3}>
              {coupons.map((coupon) => (
                <Grid item key={coupon.id} lg={4} md={6} xs={12}>
                  <CouponCard coupons={coupon} />
                </Grid>
              ))}
            </Grid>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              pt: 3,
            }}
          >
            <Pagination color="primary" count={3} size="small" />
          </Box>
        </Container>
      </Box>
    </>
  );
};

Coupons.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Coupons;
