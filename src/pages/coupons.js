import Head from "next/head";
import { Box, Container, Grid, Pagination } from "@mui/material";

import { CouponListToolbar } from "../components/coupon/coupon-list-toolbar";
import { CouponCard } from "../components/coupon/coupon-card";
import { DashboardLayout } from "../components/dashboard-layout";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getAdminCoupons, getVendorCoupons } from "src/store/actions/couponsActions";
import ColorToggleButton from "src/components/toggle";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
const Coupons = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const [couponType, setCouponType] = useState("admin");

  const handleChange = () => {
    if (couponType === "admin") {
      setCouponType("vendor");
    } else {
      setCouponType("admin");
    }
    console.log(couponType);
  };

  const adminCoupons = useSelector((state) => state.adminCoupons);
  const { loading, error, coupons } = adminCoupons;
  const vendorCouponsList = useSelector((state) => state.vendorCoupons);
  const { loading: vendorLoading, error: vendorError, vendorCoupons } = vendorCouponsList;
  useEffect(() => {
    dispatch({ type: "VENDOR_COUPONS_RESET" });
    dispatch(getAdminCoupons());
    dispatch(getVendorCoupons());
  }, [dispatch]);

  useEffect(() => {
    if (!userInfo) {
      router.push("/login");
    }
  }, [userInfo, dispatch, router]);
  return (
    <>
      {console.log(vendorCoupons)}
      <Head>
        <title>Coupon | Material Kit</title>
      </Head>
      {loading ? (
        <h1>Loading...</h1>
      ) : error ? (
        <h1>{error}</h1>
      ) : (
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            py: 8,
          }}
        >
          <Container maxWidth={false}>
            <CouponListToolbar />
            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
              <ToggleButtonGroup
                color="primary"
                value={couponType}
                exclusive
                onChange={handleChange}
                aria-label="Platform"
              >
                <ToggleButton value="admin">Admin</ToggleButton>
                <ToggleButton value="vendor">Vendor</ToggleButton>
              </ToggleButtonGroup>
            </Box>

            <Box sx={{ pt: 3 }}>
              {couponType === "admin" ? (
                <Grid container spacing={3}>
                  {coupons.map((coupon) => (
                    <Grid item key={coupon._id} lg={4} md={6} xs={12}>
                      <CouponCard coupons={coupon} />
                    </Grid>
                  ))}
                </Grid>
              ) : (
                <Grid container spacing={3}>
                  {vendorCoupons
                    .filter((item) => item.couponId != null)
                    .map((coupon) => (
                      <Grid item key={coupon._id} lg={4} md={6} xs={12}>
                        <CouponCard coupons={coupon.couponId} />
                      </Grid>
                    ))}
                </Grid>
              )}
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
      )}
    </>
  );
};

Coupons.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Coupons;
