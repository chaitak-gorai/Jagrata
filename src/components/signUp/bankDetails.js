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

const BankDetails = () => {
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
    </>
  )
}

export default BankDetails