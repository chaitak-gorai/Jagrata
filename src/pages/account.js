import Head from "next/head";
import { Box, Container, Grid, Typography } from "@mui/material";
import { AccountProfile } from "../components/account/account-profile";
import { AccountProfileDetails } from "../components/account/account-profile-details";
import { Support } from "../components/account/support";
import { Wallet } from "../components/account/wallet";
import { Review } from "../components/account/review";
import { Menu } from "../components/account/menu";
import { DashboardLayout } from "../components/dashboard-layout";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

const Account = () => {
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
        <title>Account | Material Kit</title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
        }}
      >
        <Container maxWidth="lg">
          
          <Typography sx={{ mb: 3 }} variant="h4">
            Account
          </Typography>
          <Grid container spacing={3}>
            <Grid item lg={4} md={6} xs={12}>
              <AccountProfile />
              <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
              <ToggleButtonGroup sx={{mt:3, mb:3}}
                color="primary"
                // value={couponType}
                exclusive
                // onChange={handleChange}
                aria-label="Platform"
              >
                <ToggleButton value="admin">Online</ToggleButton>
                <ToggleButton value="vendor">Offline</ToggleButton>
              </ToggleButtonGroup>
            </Box>
            </Grid>
            <Grid item lg={8} md={6} xs={12}>
              <AccountProfileDetails />
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
        }}
      >
        <Container maxWidth="lg">
          
          <Typography sx={{ mb: 3 }} variant="h4">
            Support
          </Typography>
          <Grid container spacing={3}>
            
            <Grid item lg={12} md={6} xs={12}>
              <Support />
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
        }}
      >
        <Container maxWidth="lg">
          
          <Typography sx={{ mb: 3 }} variant="h4">
            Wallet Amount
          </Typography>
          <Grid container spacing={3}>
            <Grid item lg={12} md={6} xs={12}>
              <Wallet />
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
        }}
      >
        <Container maxWidth="lg">
          
          <Typography sx={{ mb: 3 }} variant="h4">
            Reviews
          </Typography>
          <Grid container spacing={3}>
            <Grid item lg={12} md={6} xs={12}>
              <Review />
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
        }}
      >
        <Container maxWidth="lg">
          
          <Typography sx={{ mb: 3 }} variant="h4">
            Terms
          </Typography>
          <Grid container spacing={3}>
            {/* <Grid item lg={4} md={6} xs={12}>
              <AccountProfile />
            </Grid> */}
            <Grid item lg={12} md={6} xs={12}>
              <Support />
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
        }}
      >
        <Container maxWidth="lg">
          
          <Typography sx={{ mb: 3 }} variant="h4">
            Menu
          </Typography>
          <Grid container spacing={3}>
            
            <Grid item lg={12} md={6} xs={12}>
              <Menu />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

Account.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Account;
