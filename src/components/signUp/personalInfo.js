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


const PersonalInfo = () => {
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
    <Box>
        <form onSubmit={formik.handleSubmit}>
            <Box sx={{ my: 3 }}>
              <Typography color="textPrimary" variant="h4">
                Personal Informations
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
            </form>
    </Box>
  )
}

export default PersonalInfo