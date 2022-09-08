import Head from "next/head";
import {
  Alert,
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Divider,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { AccountProfile } from "../components/account/account-profile";
import { AccountProfileDetails } from "../components/account/account-profile-details";
import { Support } from "../components/account/support";
import { Wallet } from "../components/account/wallet";
import { Review } from "../components/account/review";
import { Menu } from "../components/account/menu";
import { DashboardLayout } from "../components/dashboard-layout";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import axios from "axios";
import { useFormik } from "formik";
import * as Yup from "yup";
const Account = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const [terms, setTerms] = useState("");
  const [privacy, setPrivacy] = useState("");
  const [about, setAbout] = useState("");
  const [walletAmount, setWalletAmount] = useState(0);
  const [msg, setMsg] = useState("");
  const [msg2, setMsg2] = useState("");
  const formik = useFormik({
    initialValues: {
      message: "",
      phoneNo: "",
    },
    validationSchema: Yup.object({
      message: Yup.string().max(255).required("Message is required"),
      phoneNo: Yup.string().required("Phone No is required"),
    }),
    onSubmit: async () => {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userInfo.token}`,
        },
      };
      const { data } = await axios.post(
        `https://gravitybites.in/api/stores/support`,
        {
          message: formik.values.message,
          phoneNo: formik.values.phoneNo,
        },
        config
      );
      setMsg(data.mess);
    },
  });
  const formik2 = useFormik({
    initialValues: {
      packagingCharge: null,
    },
    validationSchema: Yup.object({
      packagingCharge: Yup.number().max(255).required("Message is required"),
    }),
    onSubmit: async () => {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userInfo.token}`,
        },
      };
      const { data } = await axios.post(
        `https://gravitybites.in/api/stores/packagingCharge`,
        {
          packagingCharge: formik2.values.packagingCharge,
        },
        config
      );
      setMsg2(data.mess);
    },
  });
  useEffect(() => {
    if (!userInfo) {
      router.push("/login");
    }
    const getWalletAmount = async () => {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userInfo.token}`,
        },
      };
      const { data } = await axios.get(`https://gravitybites.in/api/orders/walletAmount`, config);
      setWalletAmount(data.amount);
    };
    getWalletAmount();
    const getTerms = async () => {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userInfo.token}`,
        },
      };
      const { data } = await axios.get(`https://gravitybites.in/api/stores/terms`, config);
      setTerms(data.termsofuse);
      setPrivacy(data.privacyPolicy);
      setAbout(data.aboutUs);
    };
    getTerms();
  }, [userInfo, dispatch, router]);
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
                <ToggleButtonGroup
                  sx={{ mt: 3, mb: 3 }}
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
            Update Packaging Charge
          </Typography>
          {msg2 != "" ? <Alert severity="success">{msg2}</Alert> : ""}
          <Grid container spacing={3}>
            <Grid item lg={12} md={6} xs={12}>
              <Box
                component="main"
                sx={{
                  alignItems: "center",
                  display: "flex",
                  flexGrow: 1,
                  minHeight: "100%",
                }}
              >
                <Container maxWidth="lg">
                  <form onSubmit={formik2.handleSubmit}>
                    <Card>
                      <Divider />
                      <CardContent>
                        <Grid container spacing={3}>
                          <Grid item md={6} xs={12}>
                            <TextField
                              error={Boolean(
                                formik2.touched.packagingCharge && formik2.errors.packagingCharge
                              )}
                              fullWidth
                              helpertext={
                                formik2.touched.packagingCharge && formik2.errors.packagingCharge
                              }
                              label="packagingCharge"
                              margin="normal"
                              name="packagingCharge"
                              onBlur={formik2.handleBlur}
                              onChange={formik2.handleChange}
                              value={formik2.values.packagingCharge}
                              variant="outlined"
                            />
                          </Grid>
                        </Grid>
                      </CardContent>
                      <Divider />
                      <Box sx={{ py: 2 }}>
                        <Button
                          color="primary"
                          disabled={formik2.isSubmitting}
                          fullWidth
                          size="large"
                          type="submit"
                          variant="contained"
                        >
                          Update
                        </Button>
                      </Box>
                    </Card>
                  </form>
                </Container>
              </Box>
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
          {msg != "" ? <Alert severity="success">{msg}</Alert> : ""}
          <Grid container spacing={3}>
            <Grid item lg={12} md={6} xs={12}>
              <Box
                component="main"
                sx={{
                  alignItems: "center",
                  display: "flex",
                  flexGrow: 1,
                  minHeight: "100%",
                }}
              >
                <Container maxWidth="lg">
                  <form onSubmit={formik.handleSubmit}>
                    <Card>
                      <Divider />
                      <CardContent>
                        <Grid container spacing={3}>
                          <Grid item md={6} xs={12}>
                            <TextField
                              error={Boolean(formik.touched.message && formik.errors.message)}
                              fullWidth
                              helpertext={formik.touched.message && formik.errors.message}
                              label="Message"
                              margin="normal"
                              name="message"
                              onBlur={formik.handleBlur}
                              onChange={formik.handleChange}
                              value={formik.values.message}
                              variant="outlined"
                            />
                          </Grid>

                          <Grid item md={6} xs={12}>
                            <TextField
                              error={Boolean(formik.touched.phoneNo && formik.errors.phoneNo)}
                              fullWidth
                              helpertext={formik.touched.phoneNo && formik.errors.phoneNo}
                              label="Phone No"
                              margin="normal"
                              name="phoneNo"
                              onBlur={formik.handleBlur}
                              onChange={formik.handleChange}
                              value={formik.values.phoneNo}
                              variant="outlined"
                            />
                          </Grid>
                        </Grid>
                      </CardContent>
                      <Divider />
                      <Box sx={{ py: 2 }}>
                        <Button
                          color="primary"
                          disabled={formik.isSubmitting}
                          fullWidth
                          size="large"
                          type="submit"
                          variant="contained"
                        >
                          Support
                        </Button>
                      </Box>
                    </Card>
                  </form>
                </Container>
              </Box>
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
              <Wallet amount={walletAmount} />
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
          <b>Terms of Use:</b>
          {terms}
          <br></br>
          <b>Privacy Policy:</b>
          {privacy}
          <br></br>
          <b>About Us:</b>
          {about}
        </Container>
      </Box>
    </>
  );
};

Account.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Account;
