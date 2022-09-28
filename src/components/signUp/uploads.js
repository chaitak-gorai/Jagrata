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

const Uploads = (props) => {
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
  //     email: Yup.string().email("Must be a valid email").max(255).required("Email is required"),
  //     fullName: Yup.string().max(255).required("First name is required"),
  //     storeName: Yup.string().max(255).required("Last name is required"),
  //     password: Yup.string().max(255).required("Password is required"),
  //     phoneNo: Yup.string().max(255).required("Phone Number is required"),
  //     streetName: Yup.string().max(255).required("Street is required"),
  //     city: Yup.string().max(255).required("City is required"),
  //     countryCode: Yup.string().max(255).required("Country is required"),
  //     stateCode: Yup.string().max(255).required("state is required"),
  //     bankName: Yup.string().max(255).required("Bank Name is required"),
  //     accountNo: Yup.string().max(255).required("accountNo is required"),
  //     accountHolder: Yup.string().max(255).required("accountHolder is required"),
  //     ifsc: Yup.string().max(255).required("ifsc is required"),
  //     upiId: Yup.string().max(255).required("upiId is required"),
  //     storeManager: Yup.string().max(255).required("storeManager is required"),
  //     categories: Yup.string().max(255).required("categories is required"),
  //     services: Yup.string().max(255).required("services is required"),
  //     liscenseNo: Yup.string().max(255).required("liscenseNo is required"),
  //     licenseType: Yup.string().max(255).required("licenseType is required"),
  //     openingTime: Yup.string().max(255).required("openingTime is required"),
  //     closingTime: Yup.string().max(255).required("closingTime is required"),
  //     zipcode: Yup.string().max(255).required("Zip is required"),
  //     cancelledCheque: Yup.mixed().required("Checque is required"),
  //     policy: Yup.boolean().oneOf([true], "This field must be checked"),
  //   }),
  //   onSubmit: () => {
  //     console.log(formik.values);
  //     dispatch(register(formik.values));
  //     // router.push("/login");
  //   },
  // });
  // return (
  //   <>
  //           <Box sx={{ my: 3 }}>
  //             <Typography color="textSecondary" gutterBottom variant="h5">
  //               Uploads
  //             </Typography>
  //           </Box>
  //           <Grid container spacing={2}>
  //             <Grid item xs={4}>
  //               <label htmlFor="cancelledCheque">
  //                 <Button
  //                   variant="contained"
  //                   component="span"
  //                   color="primary"
  //                   error={Boolean(formik.touched.cancelledCheque && formik.errors.cancelledCheque)}
  //                   helpertext={formik.touched.cancelledCheque && formik.errors.cancelledCheque}
  //                   onChange={formik.handleChange}
  //                   fullWidth
  //                 >
  //                   Upload Cancelled Cheque
  //                 </Button>
  //                 <input
  //                   accept="image/*"
  //                   id="cancelledCheque"
  //                   type="file"
  //                   style={{ display: "none" }}
  //                   onChange={(e) => {
  //                     formik.setFieldValue("cancelledCheque", e.target.files[0]);
  //                     console.log(e.target.files[0].name);
  //                   }}
  //                 />
  //                 <Typography variant="body2">
  //                   {formik.values.cancelledCheque
  //                     ? formik.values.cancelledCheque.name
  //                     : "No file chosen"}
  //                 </Typography>
  //               </label>
  //             </Grid>
  //             <Grid item xs={4}>
  //               <label htmlFor="uploadMenu">
  //                 <Button
  //                   variant="contained"
  //                   component="span"
  //                   color="primary"
  //                   error={Boolean(formik.touched.uploadMenu && formik.errors.uploadMenu)}
  //                   helpertext={formik.touched.uploadMenu && formik.errors.uploadMenu}
  //                   onChange={formik.handleChange}
  //                   fullWidth
  //                 >
  //                   Upload Menu
  //                 </Button>
  //                 <input
  //                   accept="image/*"
  //                   id="uploadMenu"
  //                   type="file"
  //                   style={{ display: "none" }}
  //                   onChange={(e) => {
  //                     formik.setFieldValue("uploadMenu", e.target.files[0]);
  //                     console.log(e.target.files[0].name);
  //                   }}
  //                 />
  //                 <Typography variant="body2">
  //                   {formik.values.uploadMenu ? formik.values.uploadMenu.name : "No file chosen"}
  //                 </Typography>
  //               </label>
  //             </Grid>
  //             <Grid item xs={4}>
  //               <label htmlFor="uploadPan">
  //                 <Button
  //                   variant="contained"
  //                   component="span"
  //                   color="primary"
  //                   error={Boolean(formik.touched.uploadPan && formik.errors.uploadPan)}
  //                   helpertext={formik.touched.uploadPan && formik.errors.uploadPan}
  //                   onChange={formik.handleChange}
  //                   fullWidth
  //                 >
  //                   Upload Pan
  //                 </Button>
  //                 <input
  //                   accept="image/*"
  //                   id="uploadPan"
  //                   type="file"
  //                   style={{ display: "none" }}
  //                   onChange={(e) => {
  //                     formik.setFieldValue("uploadPan", e.target.files[0]);
  //                     console.log(e.target.files[0].name);
  //                   }}
  //                 />
  //                 <Typography variant="body2">
  //                   {formik.values.uploadPan ? formik.values.uploadPan.name : "No file chosen"}
  //                 </Typography>
  //               </label>
  //             </Grid>
  //             <Grid item xs={4}>
  //               <label htmlFor="licenseImage">
  //                 <Button
  //                   variant="contained"
  //                   component="span"
  //                   color="primary"
  //                   error={Boolean(formik.touched.licenseImage && formik.errors.licenseImage)}
  //                   helpertext={formik.touched.licenseImage && formik.errors.licenseImage}
  //                   onChange={formik.handleChange}
  //                   fullWidth
  //                 >
  //                   Upload License
  //                 </Button>
  //                 <input
  //                   accept="image/*"
  //                   id="licenseImage"
  //                   type="file"
  //                   style={{ display: "none" }}
  //                   onChange={(e) => {
  //                     formik.setFieldValue("licenseImage", e.target.files[0]);
  //                     console.log(e.target.files[0].name);
  //                   }}
  //                 />
  //                 <Typography variant="body2">
  //                   {formik.values.licenseImage
  //                     ? formik.values.licenseImage.name
  //                     : "No file chosen"}
  //                 </Typography>
  //               </label>
  //             </Grid>
  //             <Grid item xs={4}>
  //               <label htmlFor="gst">
  //                 <Button
  //                   variant="contained"
  //                   component="span"
  //                   color="primary"
  //                   error={Boolean(formik.touched.gst && formik.errors.gst)}
  //                   helpertext={formik.touched.gst && formik.errors.gst}
  //                   onChange={formik.handleChange}
  //                   fullWidth
  //                 >
  //                   Upload GST
  //                 </Button>
  //                 <input
  //                   accept="image/*"
  //                   id="gst"
  //                   type="file"
  //                   style={{ display: "none" }}
  //                   onChange={(e) => {
  //                     formik.setFieldValue("gst", e.target.files[0]);
  //                     console.log(e.target.files[0].name);
  //                   }}
  //                 />
  //                 <Typography variant="body2">
  //                   {formik.values.gst ? formik.values.gst.name : "No file chosen"}
  //                 </Typography>
  //               </label>
  //             </Grid>
  //             <Grid item xs={4}>
  //               <label htmlFor="storeImage">
  //                 <Button
  //                   variant="contained"
  //                   component="span"
  //                   color="primary"
  //                   error={Boolean(formik.touched.storeImage && formik.errors.storeImage)}
  //                   helpertext={formik.touched.storeImage && formik.errors.storeImage}
  //                   onChange={formik.handleChange}
  //                   fullWidth
  //                 >
  //                   Upload Store Image
  //                 </Button>
  //                 <input
  //                   accept="image/*"
  //                   id="storeImage"
  //                   type="file"
  //                   style={{ display: "none" }}
  //                   onChange={(e) => {
  //                     formik.setFieldValue("storeImage", e.target.files[0]);
  //                     console.log(e.target.files[0].name);
  //                   }}
  //                 />
  //                 <Typography variant="body2">
  //                   {formik.values.storeImage ? formik.values.storeImage.name : "No file chosen"}
  //                 </Typography>
  //               </label>
  //             </Grid>
  //           </Grid>
  //           </>
  // )
  const stepOneValidationSchema = Yup.object({
    email: Yup.string().email("Must be a valid email").max(255).required("Email is required"),
      fullName: Yup.string().max(255).required("First name is required"),
      storeName: Yup.string().max(255).required("Last name is required"),
      password: Yup.string().max(255).required("Password is required"),
      phoneNo: Yup.string().max(255).required("Phone Number is required"),
      streetName: Yup.string().max(255).required("Street is required"),
      city: Yup.string().max(255).required("City is required"),
      countryCode: Yup.string().max(255).required("Country is required"),
      stateCode: Yup.string().max(255).required("state is required"),
  });

  const handleSubmit = (values) => {
    props.next(values,true);
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
            <button type="button" onClick={() => props.prev(values)}>
            Back
          </button>
          <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </Box>
  );
}

export default Uploads