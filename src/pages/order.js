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

const Menu = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const [menu, setMenu] = useState([]);
  const [msg, setMsg] = useState("");
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
        `https://gravitybites.in/api/stores/addtoMenu`,
        {
          productName: formik.values.productName,
          productPrice: formik.values.productPrice,
        },
        config
      );
      setMsg(`${data.mess} Added to Menu`);
    },
  });
  useEffect(() => {
    if (!userInfo) {
      router.push("/login");
    }
    const getMenu = async () => {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userInfo.token}`,
        },
      };
      const { data } = await axios.get(`https://gravitybites.in/api/stores/showMenu`, config);
      setMenu(data.mymenu);
    };
    getMenu();
  }, [userInfo, dispatch, router, msg]);
  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };
  return (
    <>
      <Head>
        <title>Menu | Material Kit</title>
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
              Menu
            </Typography>
            <Grid container spacing={3}>
              <Grid item lg={12} md={6} xs={12}>
                <Card>
                  <CardContent>
                    {msg != "" ? <Alert severity="success">{msg}</Alert> : ""}
                    <TableContainer component={Paper}>
                      <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                          <TableRow>
                            <TableCell align="center">Product Name</TableCell>
                            <TableCell align="center">Product Price</TableCell>
                            <TableCell align="center"></TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {menu.map((row) => (
                            <TableRow
                              key={row._id}
                              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                            >
                              <TableCell align="center">{row.productName}</TableCell>
                              <TableCell align="center">{row.productPrice}</TableCell>
                              <TableCell align="center">
                                <DeleteIcon
                                  onClick={async () => {
                                    const config = {
                                      headers: {
                                        "Content-Type": "application/json",
                                        Authorization: `Bearer ${userInfo.token}`,
                                      },
                                    };
                                    await axios.post(
                                      `https://gravitybites.in/api/stores/removefromMenu`,
                                      { productName: row.productName },
                                      config
                                    );
                                    setMsg(`${row.productName} Deleted`);
                                  }}
                                />
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </CardContent>
                  <Divider />
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
                                  error={Boolean(
                                    formik.touched.productName && formik.errors.productName
                                  )}
                                  fullWidth
                                  helpertext={
                                    formik.touched.productName && formik.errors.productName
                                  }
                                  label="Product Name"
                                  margin="normal"
                                  name="productName"
                                  onBlur={formik.handleBlur}
                                  onChange={formik.handleChange}
                                  value={formik.values.productName}
                                  variant="outlined"
                                />
                              </Grid>

                              <Grid item md={6} xs={12}>
                                <TextField
                                  error={Boolean(
                                    formik.touched.productPrice && formik.errors.productPrice
                                  )}
                                  fullWidth
                                  helpertext={
                                    formik.touched.productPrice && formik.errors.productPrice
                                  }
                                  label="Product Price"
                                  margin="normal"
                                  name="productPrice"
                                  onBlur={formik.handleBlur}
                                  onChange={formik.handleChange}
                                  value={formik.values.productPrice}
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
                              Add Menu
                            </Button>
                          </Box>
                        </Card>
                      </form>
                    </Container>
                  </Box>
                </Card>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
    </>
  );
};

Menu.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Menu;
