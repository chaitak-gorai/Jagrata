import Head from "next/head";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { Formik, Form, useFormik,ErrorMessage } from "formik";
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

const PersonalInfo = (props) => {
  // const formik = useFormik({
  //   initialValues: {
  //     fullName: "Kunal Shah",
  //     storeName: "Kunal General Store",
  //     phoneNo: "9000012530",
  //     streetName: "Gorai",
  //     streetNumber: "A-8",
  //     city: "Mumbai",
  //     countryCode: "India",
  //     stateCode: "MH",
  //     zipcode: "400092",
  //     latitude: "19.232328",
  //     longitude: "72.805127",
  //     email: "kunal@example.com",
  //     password: "Kunal@567",
  //     cancelledCheque: "/uploads/docu.jpg",
  //     uploadMenu: "/uploads/docu.jpg",
  //     uploadPan: "/uploads/docu.jpg",
  //     licenseImage: "/uploads/docu.jpg",
  //     expiryDate: "02/05/2022",
  //     uploadGSTcertificate: "/uploads/docu.jpg",
  //     storeImage: "/uploads/docu.jpg",
  //     active: true,
  //     whatsappUpdate: true,
  //     cashback: 2,
  //     terms: true,
  //     policy: true,
  //     gst: "250000478965214",
  //     ownerPan: "6400000964",
  //     bankName: "AXIS",
  //     accountHolder: "Kunal Shah",
  //     accountNo: "4100000035",
  //     ifsc: "AXIS",
  //     upiId: "6900000054",
  //     storeManager: "Owner",
  //     categories: "Groceries",
  //     services: "Home Delivery",
  //     liscenseNo: "1502000698",
  //     licenseType: "Fissai",
  //     openingTime: "9:00am",
  //     closingTime: "8:00pm",
  //   },
  //   validationSchema: Yup.object({
  //     }),
  //   onSubmit: () => {
  //     console.log(formik.values);
  //     dispatch(register(formik.values));
  //     // router.push("/login");
  //   },
  // });

  const stepOneValidationSchema = Yup.object({
    email: Yup.string().email("Must be a valid email").max(255).required("Email is required"),
      fullName: Yup.string().max(255).required("Name is required"),
      storeName: Yup.string().max(255).required("Last name is required"),
      password: Yup.string().max(255).required("Password is required"),
      phoneNo: Yup.string().max(255).required("Phone Number is required"),
      streetName: Yup.string().max(255).required("Street is required"),
      city: Yup.string().max(255).required("City is required"),
      countryCode: Yup.string().max(255).required("Country is required"),
      stateCode: Yup.string().max(255).required("state is required"),
  });

  const handleSubmit = (values) => {
    props.next(values);
  };

  return (
    <Box>
      <Formik
        validationSchema={stepOneValidationSchema}
        initialValues={props.data}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form>
            <Box sx={{ my: 3 }}>
              <Typography color="textPrimary" variant="h4">
                Personal Informations
              </Typography>
            </Box>
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <TextField label="Full Name" margin="normal" name="fullName" variant="outlined" />
                <ErrorMessage name="fullName" />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  label="Store Name"
                  margin="normal"
                  name="storeName"
                  variant="outlined"
                />
                <ErrorMessage name="storeName" />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  label="Phone Number"
                  margin="normal"
                  name="phoneNo"
                  type="number"        
                  variant="outlined"
                />
                <ErrorMessage name="phoneNo" />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  label="Email Address"
                  margin="normal"
                  name="email"
                  type="email"
                  variant="outlined"
                />
                <ErrorMessage name="email" />
              </Grid>
              <Grid item xs={4}>
                <TextField              
                  label="Password"
                  margin="normal"
                  name="password"
                  type="password"        
                  variant="outlined"
                />
                <ErrorMessage name="password" />
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
                  label="StreetName"
                  margin="normal"
                  name="streetName"
                  variant="outlined"
                />
                <ErrorMessage name="streetName" />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  label="City"
                  margin="normal"
                  name="city"
                  variant="outlined"
                />
                <ErrorMessage name="city" />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  label="Country"
                  margin="normal"
                  name="countryCode"
                  type="text"
                  variant="outlined"
                />
                <ErrorMessage name="countryCode" />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  label="Zip Code"
                  margin="normal"
                  name="zipcode"
                  type="number"
                  variant="outlined"
                />
                <ErrorMessage name="zipcode" />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  label="State"
                  margin="normal"
                  name="stateCode"              
                  type="stateCode"
                  variant="outlined"
                />
                <ErrorMessage name="stateCode" />
              </Grid>
            </Grid>
            <button type="submit">Next</button>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default PersonalInfo;
