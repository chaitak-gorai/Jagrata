import Head from "next/head";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  Alert,
  Box,
  Button,
  Checkbox,
  Container,
  FormHelperText,
  Formhelpertext,
  Grid,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { register } from "src/store/actions/userActions";
import { useDispatch, useSelector } from "react-redux";

const Register = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const userRegister = useSelector((state) => state.userRegister);
  const { loading, error, userInfo } = userRegister;

  const formik = useFormik({
    initialValues: {
      fullName: "Kunal Shah",
      storeName: "Kunal General Store",
      phoneNo: "9000012530",
      streetName: "Gorai",
      streetNumber: "A-8",
      city: "Mumbai",
      countryCode: "India",
      stateCode: "MH",
      zipcode: "400092",
      latitude: "19.232328",
      longitude: "72.805127",
      email: "kunal@example.com",
      password: "Kunal@567",
      cancelledCheque: "/uploads/docu.jpg",
      uploadMenu: "/uploads/docu.jpg",
      uploadPan: "/uploads/docu.jpg",
      licenseImage: "/uploads/docu.jpg",
      expiryDate: "02/05/2022",
      uploadGSTcertificate: "/uploads/docu.jpg",
      storeImage: "/uploads/docu.jpg",
      active: true,
      whatsappUpdate: true,
      cashback: 2,
      terms: true,
      policy: true,
      gst: "250000478965214",
      ownerPan: "6400000964",
      bankName: "AXIS",
      accountHolder: "Kunal Shah",
      accountNo: "4100000035",
      ifsc: "AXIS",
      upiId: "6900000054",
      storeManager: "Owner",
      categories: "Groceries",
      services: "Home Delivery",
      liscenseNo: "1502000698",
      licenseType: "Fissai",
      openingTime: "9:00am",
      closingTime: "8:00pm",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Must be a valid email").max(255).required("Email is required"),
      fullName: Yup.string().max(255).required("First name is required"),
      storeName: Yup.string().max(255).required("Last name is required"),
      password: Yup.string().max(255).required("Password is required"),
      phoneNo: Yup.string().max(255).required("Phone Number is required"),
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
      liscenseNo: Yup.string().max(255).required("liscenseNo is required"),
      licenseType: Yup.string().max(255).required("licenseType is required"),
      openingTime: Yup.string().max(255).required("openingTime is required"),
      closingTime: Yup.string().max(255).required("closingTime is required"),
      zipcode: Yup.string().max(255).required("Zip is required"),
      cancelledCheque: Yup.mixed().required("Checque is required"),
      policy: Yup.boolean().oneOf([true], "This field must be checked"),
    }),
    onSubmit: () => {
      console.log(formik.values);
      dispatch(register(formik.values));
      // router.push("/login");
    },
  });

  // const handleCheque = (e) => {
  //   formik.setFieldValue("cancelledCheque", e.target.files[0]);
  //   console.log(formik.values.cancelledCheque);
  // };
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
          {error && <p>{error}</p>}
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
                  helpertext={formik.touched.fullName && formik.errors.fullName}
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
                  helpertext={formik.touched.storeName && formik.errors.storeName}
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
                  error={Boolean(formik.touched.phoneNo && formik.errors.phoneNo)}
                  fullWidth
                  helpertext={formik.touched.phoneNo && formik.errors.phoneNo}
                  label="Phone Number"
                  margin="normal"
                  name="phoneNo"
                  type="number"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.phoneNo}
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  error={Boolean(formik.touched.email && formik.errors.email)}
                  fullWidth
                  helpertext={formik.touched.email && formik.errors.email}
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
                  helpertext={formik.touched.password && formik.errors.password}
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
                  helpertext={formik.touched.streetName && formik.errors.streetName}
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
                  helpertext={formik.touched.city && formik.errors.city}
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
                  helpertext={formik.touched.countryCode && formik.errors.countryCode}
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
                  helpertext={formik.touched.zipcode && formik.errors.zipcode}
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
                  helpertext={formik.touched.stateCode && formik.errors.stateCode}
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
                <label htmlFor="cancelledCheque">
                  <Button
                    variant="contained"
                    component="span"
                    color="primary"
                    error={Boolean(formik.touched.cancelledCheque && formik.errors.cancelledCheque)}
                    helpertext={formik.touched.cancelledCheque && formik.errors.cancelledCheque}
                    onChange={formik.handleChange}
                    fullWidth
                  >
                    Upload Cancelled Cheque
                  </Button>
                  <input
                    accept="image/*"
                    id="cancelledCheque"
                    type="file"
                    style={{ display: "none" }}
                    onChange={(e) => {
                      formik.setFieldValue("cancelledCheque", e.target.files[0]);
                      console.log(e.target.files[0].name);
                    }}
                  />
                  <Typography variant="body2">
                    {formik.values.cancelledCheque
                      ? formik.values.cancelledCheque.name
                      : "No file chosen"}
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
                    helpertext={formik.touched.uploadMenu && formik.errors.uploadMenu}
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
                    helpertext={formik.touched.uploadPan && formik.errors.uploadPan}
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
                    helpertext={formik.touched.licenseImage && formik.errors.licenseImage}
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
                    helpertext={formik.touched.gst && formik.errors.gst}
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
                    helpertext={formik.touched.storeImage && formik.errors.storeImage}
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
                  helpertext={formik.touched.bankName && formik.errors.bankName}
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
                  helpertext={formik.touched.accountHolder && formik.errors.accountHolder}
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
                  helpertext={formik.touched.accountNo && formik.errors.accountNo}
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
                  helpertext={formik.touched.ifsc && formik.errors.ifsc}
                  label="IFSC Code"
                  margin="normal"
                  name="ifsc"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  type="string"
                  value={formik.values.ifsc}
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  error={Boolean(formik.touched.upiId && formik.errors.upiId)}
                  fullWidth
                  helpertext={formik.touched.upiId && formik.errors.upiId}
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
                  helpertext={formik.touched.storeManager && formik.errors.storeManager}
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
                  helpertext={formik.touched.categories && formik.errors.categories}
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
                  helpertext={formik.touched.services && formik.errors.services}
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
                  error={Boolean(formik.touched.liscenseNo && formik.errors.liscenseNo)}
                  fullWidth
                  helpertext={formik.touched.liscenseNo && formik.errors.liscenseNo}
                  label="license No"
                  margin="normal"
                  name="liscenseNo"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  type="number"
                  value={formik.values.liscenseNo}
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  error={Boolean(formik.touched.licenseType && formik.errors.licenseType)}
                  fullWidth
                  helpertext={formik.touched.licenseType && formik.errors.licenseType}
                  label="License Type"
                  margin="normal"
                  name="licenseType"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  type="string"
                  value={formik.values.licenseType}
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  error={Boolean(formik.touched.openingTime && formik.errors.openingTime)}
                  fullWidth
                  helpertext={formik.touched.openingTime && formik.errors.openingTime}
                  label="Opening Time"
                  margin="normal"
                  name="openingTime"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  type="string"
                  value={formik.values.openingTime}
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  error={Boolean(formik.touched.closingTime && formik.errors.closingTime)}
                  fullWidth
                  helpertext={formik.touched.closingTime && formik.errors.closingTime}
                  label="Closing Time"
                  margin="normal"
                  name="closingTime"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  type="string"
                  value={formik.values.closingTime}
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
                <NextLink href="/terms" passHref>
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
