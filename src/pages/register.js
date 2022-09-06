import Head from "next/head";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  Box,
  Button,
  Checkbox,
  Container,
  FormHelperText,
  Grid,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const Register = () => {
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      email: "",
      fullName: "",
      storeName: "",
      phoneNumber: "",
      password: "",
      streetName: "",
      city: "",
      stateCode: "",
      zipcode: "",
      countryCode: "",
      cheque: "",
      bankName: "",
      accountNo: "",
      accountHolder: "",
      ifsc: "",
      upiId: "",
      storeManager: "",
      categories: "",
      services: "",
      licenseNo: "",
      licenseType: "",
      openingTime: "",
      closingTime: "",

      policy: false,
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Must be a valid email").max(255).required("Email is required"),
      fullName: Yup.string().max(255).required("First name is required"),
      storeName: Yup.string().max(255).required("Last name is required"),
      password: Yup.string().max(255).required("Password is required"),
      phoneNumber: Yup.string().max(255).required("Phone Number is required"),
      streetName: Yup.string().max(255).required("Street is required"),
      city: Yup.string().max(255).required("City is required"),
      countryCode: Yup.string().max(255).required("Country is required"),
      stateCode: Yup.string().max(255).required("state is required"),
      bankName: Yup.string().max(255).required("Bank Name is required"),
      accountNo: Yup.string().max(255).required("accountNo is required"),
      accountHolder: Yup.string().max(255).required("accountHolder is required"),
      ifsc: Yup.string().max(255).required("ifsc is required"),
      upiId: Yup.string().max(255).required("upiId is required"),
      storeManager: Yup.string().max(255).required("storeManager is required"),
      categories: Yup.string().max(255).required("categories is required"),
      services: Yup.string().max(255).required("services is required"),
      licenseNo: Yup.string().max(255).required("licenseNo is required"),
      licenseType: Yup.string().max(255).required("licenseType is required"),
      openingTime: Yup.string().max(255).required("openingTime is required"),
      closingTime: Yup.string().max(255).required("closingTime is required"),
      zipcode: Yup.string().max(255).required("Zip is required"),
      cheque: Yup.mixed().required("Checque is required"),
      policy: Yup.boolean().oneOf([true], "This field must be checked"),
    }),
    onSubmit: () => {
      router.push("/");
    },
  });

  const handleCheque = (e) => {
    formik.setFieldValue("cheque", e.target.files[0]);
    console.log("formik.values.cheque");
  };
  return (
    <>
      <Head>
        <title>Register | Material Kit</title>
      </Head>
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
            <Box sx={{ my: 3 }}>
              <Typography color="textPrimary" variant="h4">
                Create a new account
              </Typography>
              <Typography color="textSecondary" gutterBottom variant="body2">
                Use your email to create a new account
              </Typography>
            </Box>
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <TextField
                  error={Boolean(formik.touched.fullName && formik.errors.fullName)}
                  fullWidth
                  helperText={formik.touched.fullName && formik.errors.fullName}
                  label="Full Name"
                  margin="normal"
                  name="fullName"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.fullName}
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  error={Boolean(formik.touched.storeName && formik.errors.storeName)}
                  fullWidth
                  helperText={formik.touched.storeName && formik.errors.storeName}
                  label="Store Name"
                  margin="normal"
                  name="storeName"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.storeName}
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  error={Boolean(formik.touched.phoneNumber && formik.errors.phoneNumber)}
                  fullWidth
                  helperText={formik.touched.phoneNumber && formik.errors.phoneNumber}
                  label="Phone Number"
                  margin="normal"
                  name="phoneNumber"
                  type="number"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.phoneNumber}
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  error={Boolean(formik.touched.email && formik.errors.email)}
                  fullWidth
                  helperText={formik.touched.email && formik.errors.email}
                  label="Email Address"
                  margin="normal"
                  name="email"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  type="email"
                  value={formik.values.email}
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  error={Boolean(formik.touched.password && formik.errors.password)}
                  fullWidth
                  helperText={formik.touched.password && formik.errors.password}
                  label="Password"
                  margin="normal"
                  name="password"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  type="password"
                  value={formik.values.password}
                  variant="outlined"
                />
              </Grid>
            </Grid>
            <Box sx={{ my: 3 }}>
              <Typography color="textSecondary" gutterBottom variant="h5">
                Address
              </Typography>
            </Box>
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <TextField
                  error={Boolean(formik.touched.streetName && formik.errors.streetName)}
                  fullWidth
                  helperText={formik.touched.streetName && formik.errors.streetName}
                  label="StreetName"
                  margin="normal"
                  name="streetName"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.streetName}
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  error={Boolean(formik.touched.city && formik.errors.city)}
                  fullWidth
                  helperText={formik.touched.city && formik.errors.city}
                  label="City"
                  margin="normal"
                  name="city"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.city}
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  error={Boolean(formik.touched.countryCode && formik.errors.countryCode)}
                  fullWidth
                  helperText={formik.touched.countryCode && formik.errors.countryCode}
                  label="Country"
                  margin="normal"
                  name="countryCode"
                  type="text"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.countryCode}
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  error={Boolean(formik.touched.zipcode && formik.errors.zipcode)}
                  fullWidth
                  helperText={formik.touched.zipcode && formik.errors.zipcode}
                  label="Zip Code"
                  margin="normal"
                  name="zipcode"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  type="number"
                  value={formik.values.zipcode}
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  error={Boolean(formik.touched.stateCode && formik.errors.stateCode)}
                  fullWidth
                  helperText={formik.touched.stateCode && formik.errors.stateCode}
                  label="State"
                  margin="normal"
                  name="stateCode"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  type="stateCode"
                  value={formik.values.stateCode}
                  variant="outlined"
                />
              </Grid>
            </Grid>
            <Box sx={{ my: 3 }}>
              <Typography color="textSecondary" gutterBottom variant="h5">
                Uploads
              </Typography>
            </Box>
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <label htmlFor="cheque">
                  <Button
                    variant="contained"
                    component="span"
                    color="primary"
                    error={Boolean(formik.touched.cheque && formik.errors.cheque)}
                    helperText={formik.touched.cheque && formik.errors.cheque}
                    onChange={formik.handleChange}
                    fullWidth
                  >
                    Upload Cheque
                  </Button>
                  <input
                    accept="image/*"
                    id="cheque"
                    type="file"
                    style={{ display: "none" }}
                    onChange={(e) => {
                      formik.setFieldValue("cheque", e.target.files[0]);
                      console.log(e.target.files[0].name);
                    }}
                  />
                  <Typography variant="body2">
                    {formik.values.cheque ? formik.values.cheque.name : "No file chosen"}
                  </Typography>
                </label>
              </Grid>
              <Grid item xs={4}>
                <label htmlFor="uploadMenu">
                  <Button
                    variant="contained"
                    component="span"
                    color="primary"
                    error={Boolean(formik.touched.uploadMenu && formik.errors.uploadMenu)}
                    helperText={formik.touched.uploadMenu && formik.errors.uploadMenu}
                    onChange={formik.handleChange}
                    fullWidth
                  >
                    Upload Menu
                  </Button>
                  <input
                    accept="image/*"
                    id="uploadMenu"
                    type="file"
                    style={{ display: "none" }}
                    onChange={(e) => {
                      formik.setFieldValue("uploadMenu", e.target.files[0]);
                      console.log(e.target.files[0].name);
                    }}
                  />
                  <Typography variant="body2">
                    {formik.values.uploadMenu ? formik.values.uploadMenu.name : "No file chosen"}
                  </Typography>
                </label>
              </Grid>
              <Grid item xs={4}>
                <label htmlFor="uploadPan">
                  <Button
                    variant="contained"
                    component="span"
                    color="primary"
                    error={Boolean(formik.touched.uploadPan && formik.errors.uploadPan)}
                    helperText={formik.touched.uploadPan && formik.errors.uploadPan}
                    onChange={formik.handleChange}
                    fullWidth
                  >
                    Upload Pan
                  </Button>
                  <input
                    accept="image/*"
                    id="uploadPan"
                    type="file"
                    style={{ display: "none" }}
                    onChange={(e) => {
                      formik.setFieldValue("uploadPan", e.target.files[0]);
                      console.log(e.target.files[0].name);
                    }}
                  />
                  <Typography variant="body2">
                    {formik.values.uploadPan ? formik.values.uploadPan.name : "No file chosen"}
                  </Typography>
                </label>
              </Grid>
              <Grid item xs={4}>
                <label htmlFor="licenseImage">
                  <Button
                    variant="contained"
                    component="span"
                    color="primary"
                    error={Boolean(formik.touched.licenseImage && formik.errors.licenseImage)}
                    helperText={formik.touched.licenseImage && formik.errors.licenseImage}
                    onChange={formik.handleChange}
                    fullWidth
                  >
                    Upload License
                  </Button>
                  <input
                    accept="image/*"
                    id="licenseImage"
                    type="file"
                    style={{ display: "none" }}
                    onChange={(e) => {
                      formik.setFieldValue("licenseImage", e.target.files[0]);
                      console.log(e.target.files[0].name);
                    }}
                  />
                  <Typography variant="body2">
                    {formik.values.licenseImage
                      ? formik.values.licenseImage.name
                      : "No file chosen"}
                  </Typography>
                </label>
              </Grid>
              <Grid item xs={4}>
                <label htmlFor="gst">
                  <Button
                    variant="contained"
                    component="span"
                    color="primary"
                    error={Boolean(formik.touched.gst && formik.errors.gst)}
                    helperText={formik.touched.gst && formik.errors.gst}
                    onChange={formik.handleChange}
                    fullWidth
                  >
                    Upload GST
                  </Button>
                  <input
                    accept="image/*"
                    id="gst"
                    type="file"
                    style={{ display: "none" }}
                    onChange={(e) => {
                      formik.setFieldValue("gst", e.target.files[0]);
                      console.log(e.target.files[0].name);
                    }}
                  />
                  <Typography variant="body2">
                    {formik.values.gst ? formik.values.gst.name : "No file chosen"}
                  </Typography>
                </label>
              </Grid>
              <Grid item xs={4}>
                <label htmlFor="storeImage">
                  <Button
                    variant="contained"
                    component="span"
                    color="primary"
                    error={Boolean(formik.touched.storeImage && formik.errors.storeImage)}
                    helperText={formik.touched.storeImage && formik.errors.storeImage}
                    onChange={formik.handleChange}
                    fullWidth
                  >
                    Upload Store Image
                  </Button>
                  <input
                    accept="image/*"
                    id="storeImage"
                    type="file"
                    style={{ display: "none" }}
                    onChange={(e) => {
                      formik.setFieldValue("storeImage", e.target.files[0]);
                      console.log(e.target.files[0].name);
                    }}
                  />
                  <Typography variant="body2">
                    {formik.values.storeImage ? formik.values.storeImage.name : "No file chosen"}
                  </Typography>
                </label>
              </Grid>
            </Grid>
            <Box sx={{ my: 3 }}>
              <Typography color="textSecondary" gutterBottom variant="h5">
                Bank Details
              </Typography>
            </Box>
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <TextField
                  error={Boolean(formik.touched.bankName && formik.errors.bankName)}
                  fullWidth
                  helperText={formik.touched.bankName && formik.errors.bankName}
                  label="Bank Name"
                  margin="normal"
                  name="bankName"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.bankName}
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  error={Boolean(formik.touched.accountHolder && formik.errors.accountHolder)}
                  fullWidth
                  helperText={formik.touched.accountHolder && formik.errors.accountHolder}
                  label="Account Holder Name"
                  margin="normal"
                  name="accountHolder"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.accountHolder}
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  error={Boolean(formik.touched.accountNo && formik.errors.accountNo)}
                  fullWidth
                  helperText={formik.touched.accountNo && formik.errors.accountNo}
                  label="Country"
                  margin="normal"
                  name="Account No"
                  type="number"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.accountNo}
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  error={Boolean(formik.touched.ifsc && formik.errors.ifsc)}
                  fullWidth
                  helperText={formik.touched.ifsc && formik.errors.ifsc}
                  label="IFSC Code"
                  margin="normal"
                  name="ifsc"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  type="number"
                  value={formik.values.ifsc}
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  error={Boolean(formik.touched.upiId && formik.errors.upiId)}
                  fullWidth
                  helperText={formik.touched.upiId && formik.errors.upiId}
                  label="UPI ID"
                  margin="normal"
                  name="upiId"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  type="upiId"
                  value={formik.values.password}
                  variant="outlined"
                />
              </Grid>
            </Grid>
            <Box sx={{ my: 3 }}>
              <Typography color="textSecondary" gutterBottom variant="h5">
                Store Details
              </Typography>
            </Box>
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <TextField
                  error={Boolean(formik.touched.storeManager && formik.errors.storeManager)}
                  fullWidth
                  helperText={formik.touched.storeManager && formik.errors.storeManager}
                  label="Store Manager"
                  margin="normal"
                  name="storeManager"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.storeManager}
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  error={Boolean(formik.touched.categories && formik.errors.categories)}
                  fullWidth
                  helperText={formik.touched.categories && formik.errors.categories}
                  label="Store Category"
                  margin="normal"
                  name="categories"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.categories}
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  error={Boolean(formik.touched.services && formik.errors.services)}
                  fullWidth
                  helperText={formik.touched.services && formik.errors.services}
                  label="Services"
                  margin="normal"
                  name="Account No"
                  type="text"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.services}
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  error={Boolean(formik.touched.licenseNo && formik.errors.licenseNo)}
                  fullWidth
                  helperText={formik.touched.licenseNo && formik.errors.licenseNo}
                  label="license No"
                  margin="normal"
                  name="licenseNo"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  type="number"
                  value={formik.values.licenseNo}
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  error={Boolean(formik.touched.licenseType && formik.errors.licenseType)}
                  fullWidth
                  helperText={formik.touched.licenseType && formik.errors.licenseType}
                  label="License Type"
                  margin="normal"
                  name="licenseType"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  type="licenseType"
                  value={formik.values.password}
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  error={Boolean(formik.touched.openingTime && formik.errors.openingTime)}
                  fullWidth
                  helperText={formik.touched.openingTime && formik.errors.openingTime}
                  label="Opening Time"
                  margin="normal"
                  name="openingTime"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  type="openingTime"
                  value={formik.values.password}
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  error={Boolean(formik.touched.closingTime && formik.errors.closingTime)}
                  fullWidth
                  helperText={formik.touched.closingTime && formik.errors.closingTime}
                  label="Closing Time"
                  margin="normal"
                  name="closingTime"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  type="closingTime"
                  value={formik.values.password}
                  variant="outlined"
                />
              </Grid>
            </Grid>
            <Box
              sx={{
                alignItems: "center",
                display: "flex",
                ml: -1,
              }}
            >
              <Checkbox
                checked={formik.values.policy}
                name="policy"
                onChange={formik.handleChange}
              />
              <Typography color="textSecondary" variant="body2">
                I have read the{" "}
                <NextLink href="#" passHref>
                  <Link color="primary" underline="always" variant="subtitle2">
                    Terms and Conditions
                  </Link>
                </NextLink>
              </Typography>
            </Box>
            {Boolean(formik.touched.policy && formik.errors.policy) && (
              <FormHelperText error>{formik.errors.policy}</FormHelperText>
            )}
            <Box sx={{ py: 2 }}>
              <Button
                color="primary"
                disabled={formik.isSubmitting}
                fullWidth
                size="large"
                type="submit"
                variant="contained"
              >
                Sign Up Now
              </Button>
            </Box>
            <Typography color="textSecondary" variant="body2">
              Have an account?{" "}
              <NextLink href="/login" passHref>
                <Link variant="subtitle2" underline="hover">
                  Sign In
                </Link>
              </NextLink>
            </Typography>
          </form>
        </Container>
      </Box>
    </>
  );
};

export default Register;
