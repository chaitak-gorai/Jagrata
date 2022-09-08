import Head from "next/head";
import {
  Alert,
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Container,
  Divider,
  TextField,
  Typography,
} from "@mui/material";
import { DashboardLayout } from "../components/dashboard-layout";
import { SettingsNotifications } from "../components/settings/settings-notifications";
import { SettingsPassword } from "../components/settings/settings-password";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";

const Settings = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const [msg, setMsg] = useState("");
  const [err, setErr] = useState("");
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      newPassword: "",
    },

    validationSchema: Yup.object({
      email: Yup.string().max(255).required("Message is required"),
      password: Yup.string().max(255).required("Password is required"),
      newPassword: Yup.string().required("New Password is required"),
    }),
    onSubmit: async () => {
      try {
        const config = {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${userInfo.token}`,
          },
        };
        const { data } = await axios.post(
          `https://gravitybites.in/api/stores/changePassword`,
          {
            email: formik.values.email,
            password: formik.values.password,
            newPassword: formik.values.newPassword,
          },
          config
        );
        setMsg(data.msg);
      } catch (error) {
        console.log(error);

        setErr(error.response.data.msg);
      }
    },
  });
  useEffect(() => {
    if (!userInfo) {
      router.push("/login");
    }
  }, [userInfo, dispatch]);
  return (
    <>
      <Head>
        <title>Settings | Material Kit</title>
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
            Settings
          </Typography>

          <Box sx={{ pt: 3 }}>
            <form onSubmit={formik.handleSubmit}>
              {msg != "" ? <Alert severity="success">{msg}</Alert> : ""}
              {err != "" ? <Alert severity="error">{err}</Alert> : ""}
              <Card>
                <CardHeader subheader="Update password" title="Password" />
                <Divider />
                <CardContent>
                  <TextField
                    error={Boolean(formik.touched.email && formik.errors.email)}
                    fullWidth
                    helpertext={formik.touched.email && formik.errors.email}
                    label="Email"
                    margin="normal"
                    name="email"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    variant="outlined"
                  />
                  <TextField
                    error={Boolean(formik.touched.password && formik.errors.password)}
                    fullWidth
                    helpertext={formik.touched.password && formik.errors.password}
                    label="Password"
                    margin="normal"
                    name="password"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values.password}
                    variant="outlined"
                  />
                  <TextField
                    error={Boolean(formik.touched.newPassword && formik.errors.newPassword)}
                    fullWidth
                    helpertext={formik.touched.newPassword && formik.errors.newPassword}
                    label="New Password"
                    margin="normal"
                    name="newPassword"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values.newPassword}
                    variant="outlined"
                  />
                </CardContent>
                <Divider />
                <Button
                  color="primary"
                  disabled={formik.isSubmitting}
                  fullWidth
                  size="large"
                  type="submit"
                  variant="contained"
                >
                  Update
                </Button>
              </Card>
            </form>
          </Box>
        </Container>
      </Box>
    </>
  );
};

Settings.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Settings;
