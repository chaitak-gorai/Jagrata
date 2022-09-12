import Head from "next/head";
import {
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  Rating,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { AccountProfile } from "../components/account/account-profile";
import { AccountProfileDetails } from "../components/account/account-profile-details";
import { Support } from "../components/account/support";
import { Wallet } from "../components/account/wallet";

import { Menu } from "../components/account/menu";
import { DashboardLayout } from "../components/dashboard-layout";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import axios from "axios";
import Paper from "@mui/material/Paper";
const Reviews = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    if (!userInfo) {
      router.push("/login");
    }
    const getReviews = async () => {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userInfo.token}`,
        },
      };
      const { data } = await axios.get(`https://gravitybites.in/api/orders/fetchReviews`, config);
      setReviews(data.reviews);
    };
    getReviews();
  }, [userInfo, dispatch, router]);
  return (
    <>
      <Head>
        <title>Account </title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
        }}
      >
        <Container maxWidth="lg">
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
                  <Card>
                    <CardContent>
                      <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                          <TableHead>
                            <TableRow>
                              <TableCell align="center">Name</TableCell>
                              <TableCell align="center">Rating</TableCell>
                              <TableCell align="center">Comment</TableCell>
                              <TableCell align="center">Time</TableCell>
                            </TableRow>
                          </TableHead>
                          <TableBody>
                            {reviews.map((rev) => (
                              <TableRow
                                key={rev._id}
                                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                              >
                                <TableCell align="center">{rev.userId.name}</TableCell>
                                <TableCell align="center">
                                  <Rating value={rev.rating} readOnly />
                                </TableCell>
                                <TableCell align="center">{rev.comment}</TableCell>
                                <TableCell align="center">{rev.createdAt}</TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </TableContainer>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </Container>
          </Box>
        </Container>
      </Box>
    </>
  );
};

Reviews.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Reviews;
