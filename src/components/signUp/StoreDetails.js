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

const StoreDetails = () => {
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
  return (
    <>
    <Box sx={{ my: 3 }}>
              <Typography color="textSecondary" gutterBottom variant="h5">
                Store Details
              </Typography>
            </Box>
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <TextField
                  label="Store Manager"
                  margin="normal"
                  name="storeManager"
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
    </>
  )
}

export default StoreDetails