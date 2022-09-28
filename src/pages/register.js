import { useState } from "react";
import Head from "next/head"
import { Formik, Form, Field, ErrorMessage } from "formik";
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
export default function App() {
  const [data, setData] = useState({
      email: "",
      fullName: "",
      storeName: "",
      password: "",
      phoneNo: "",
      streetName: "",
      city: "",
      pinCode:"",
      countryCode: "",
      stateCode: "",
  });
  const [currentStep, setCurrentStep] = useState(0);
  const [errors, setErrors] = useState({});

  const makeRequest = (formData) => {
    console.log("Form Submitted", formData);
  };

  const handleNextStep = (newData, final = false) => {
    setData((prev) => ({ ...prev, ...newData }));

    if (final) {
      makeRequest(newData);
      return;
    }

    setCurrentStep((prev) => prev + 1);
  };

  const handlePrevStep = (newData) => {
    setData((prev) => ({ ...prev, ...newData }));
    setCurrentStep((prev) => prev - 1);
  };

  const steps = [
    <PersonalInfo key={1} next={handleNextStep} data={data} errors={errors} />,
    // <StepTwo key={2} next={handleNextStep} prev={handlePrevStep} data={data} />,
  ];

  console.log("data", data);

  return <>
    <Container>
    <Box sx={{ my: 3 }}>
            <Typography color="textPrimary" variant="h4">
              Create a new account
            </Typography>
          </Box>
          {steps[currentStep]}
    </Container></>
    ;
}

const PersonalInfoValidationSchema = Yup.object({
  email: Yup.string().email("Must be a valid email").max(255).required("Email is required"),
  fullName: Yup.string().max(255).required("Name is required"),
  storeName: Yup.string().max(255).required("Last name is required"),
  password: Yup.string().max(255).required("Password is required"),
  phoneNo: Yup.number().required("Phone Number is required"),
  streetName: Yup.string().max(255).required("Street is required"),
  city: Yup.string().max(255).required("City is required"),
  countryCode: Yup.string().max(255).required("Country is required"),
  stateCode: Yup.string().max(255).required("State is required"),
  pinCode: Yup.number().required("Pin Code is required"),
});

const PersonalInfo = (props) => {
  const handleSubmit = (values) => {
    props.next(values);
  };

  return (
    <>
    <Head>
        <title>Register </title>
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

          
      <Formik
      validationSchema={PersonalInfoValidationSchema}
      initialValues={props.data}
      onSubmit={handleSubmit}
    >
      {() => (
        <Form>
          <Box sx={{ my: 3 }}>
            <Typography color="textPrimary" variant="h5">
              Personal Informations
            </Typography>
          </Box>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={4}>
              <Field label="Full Name" margin="normal" name="fullName" variant="outlined" className="field" placeholder="Name"/>
              <ErrorMessage name="fullName" />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Field label="Store Name" margin="normal" name="storeName" variant="outlined" className="field" placeholder="Store Name" />
              <ErrorMessage name="storeName" />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Field
                label="Phone Number"
                margin="normal"
                name="phoneNo"
                type="number"
                variant="outlined" className="field" placeholder="Phone No."
              />
              <ErrorMessage name="phoneNo" />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Field
                label="Email Address"
                margin="normal"
                name="email"
                type="email"
                variant="outlined" className="field" placeholder="Email"
              />
              <ErrorMessage name="email" />
            </Grid>
            <Grid item xs={8}>
              <Field
                label="Password"
                margin="normal"
                name="password"
                type="password"
                variant="outlined" className="field" placeholder="Password"
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
            <Grid item xs={12} sm={4}>
              <Field label="StreetName" margin="normal" name="streetName" variant="outlined" className="field" placeholder="Street Name" />
              <ErrorMessage name="streetName" />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Field label="City" margin="normal" name="city" variant="outlined" className="field" placeholder="City" />
              <ErrorMessage name="city" />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Field
                label="Country"
                margin="normal"
                name="countryCode"
                type="text"
                variant="outlined" className="field" placeholder="Country"
              />
              <ErrorMessage name="countryCode" />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Field
                label="Zip Code"
                margin="normal"
                name="pinCode"
                type="number"
                variant="outlined" className="field" placeholder="Pin code"
              />
              <ErrorMessage name="pinCode" />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Field
                label="State"
                margin="normal"
                name="stateCode"
                type="stateCode"
                variant="outlined" className="field" placeholder="State"
              />
              <ErrorMessage name="stateCode" />
            </Grid>
          </Grid>
          <Button color="primary" size="large"  variant="contained" sx={{margin:4}} type="submit">Next</Button>
        </Form>
      )}
    </Formik>
    </Container>
    </Box>
    </>
    
  );
};


const stepOneValidationSchema = Yup.object({
  email: Yup.string().email("Must be a valid email").max(255).required("Email is required"),
  fullName: Yup.string().max(255).required("Name is required"),
  storeName: Yup.string().max(255).required("Last name is required"),
  password: Yup.string().max(255).required("Password is required"),
  phoneNo: Yup.number().required("Phone Number is required"),
  streetName: Yup.string().max(255).required("Street is required"),
  city: Yup.string().max(255).required("City is required"),
  countryCode: Yup.string().max(255).required("Country is required"),
  stateCode: Yup.string().max(255).required("State is required"),
  pinCode: Yup.number().required("Pin Code is required"),
});

const StepOne = (props) => {
  const handleSubmit = (values) => {
    props.next(values);
  };

  return (
    <>
    <Head>
        <title>Register </title>
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

          
      <Formik
      validationSchema={stepOneValidationSchema}
      initialValues={props.data}
      onSubmit={handleSubmit}
    >
      {() => (
        <Form>
          <Box sx={{ my: 3 }}>
            <Typography color="textPrimary" variant="h5">
              Personal Informations
            </Typography>
          </Box>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={4}>
              <Field label="Full Name" margin="normal" name="fullName" variant="outlined" className="field" placeholder="Name"/>
              <ErrorMessage name="fullName" />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Field label="Store Name" margin="normal" name="storeName" variant="outlined" className="field" placeholder="Store Name" />
              <ErrorMessage name="storeName" />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Field
                label="Phone Number"
                margin="normal"
                name="phoneNo"
                type="number"
                variant="outlined" className="field" placeholder="Phone No."
              />
              <ErrorMessage name="phoneNo" />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Field
                label="Email Address"
                margin="normal"
                name="email"
                type="email"
                variant="outlined" className="field" placeholder="Email"
              />
              <ErrorMessage name="email" />
            </Grid>
            <Grid item xs={8}>
              <Field
                label="Password"
                margin="normal"
                name="password"
                type="password"
                variant="outlined" className="field" placeholder="Password"
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
            <Grid item xs={12} sm={4}>
              <Field label="StreetName" margin="normal" name="streetName" variant="outlined" className="field" placeholder="Street Name" />
              <ErrorMessage name="streetName" />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Field label="City" margin="normal" name="city" variant="outlined" className="field" placeholder="City" />
              <ErrorMessage name="city" />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Field
                label="Country"
                margin="normal"
                name="countryCode"
                type="text"
                variant="outlined" className="field" placeholder="Country"
              />
              <ErrorMessage name="countryCode" />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Field
                label="Zip Code"
                margin="normal"
                name="pinCode"
                type="number"
                variant="outlined" className="field" placeholder="Pin code"
              />
              <ErrorMessage name="pinCode" />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Field
                label="State"
                margin="normal"
                name="stateCode"
                type="stateCode"
                variant="outlined" className="field" placeholder="State"
              />
              <ErrorMessage name="stateCode" />
            </Grid>
          </Grid>
          <Button color="primary" size="large"  variant="contained" sx={{margin:4}} type="submit">Next</Button>
        </Form>
      )}
    </Formik>
    </Container>
    </Box>
    </>
    
  );
};

// const stepTwoValidationSchema = Yup.object({
//   email: Yup.string().required().email().label("Email"),
//   password: Yup.string().required().label("Password"),
// });

// const StepTwo = (props) => {
//   const handleSubmit = (values) => {
//     props.next(values, true);
//   };

//   return (
//     <Formik
//       validationSchema={stepTwoValidationSchema}
//       initialValues={props.data}
//       onSubmit={handleSubmit}
//     >
//       {({ values }) => (
//         <Form>
//           <Box sx={{ my: 3 }}>
//               <Typography color="textSecondary" gutterBottom variant="h5">
//                 Uploads
//               </Typography>
//             </Box>
//             <Grid container spacing={2}>
//               <Grid item xs={4}>
//                 <label htmlFor="cancelledCheque">
//                   <Button
//                     variant="contained"
//                     component="span"
//                     color="primary"
//                   >
//                     Upload Cancelled Cheque
//                   </Button>
//                   <input
//                     accept="image/*"
//                     id="cancelledCheque"
//                     type="file"
//                     style={{ display: "none" }}
//                     onChange={(e) => {
//                       formik.setFieldValue("cancelledCheque", e.target.files[0]);
//                       console.log(e.target.files[0].name);
//                     }}
//                   />
//                   <Typography variant="body2">
//                     {formik.values.cancelledCheque
//                       ? formik.values.cancelledCheque.name
//                       : "No file chosen"}
//                   </Typography>
//                 </label>
//               </Grid>
//               <Grid item xs={4}>
//                 <label htmlFor="uploadMenu">
//                   <Button
//                     variant="contained"
//                     component="span"
//                     color="primary"
//                     error={Boolean(formik.touched.uploadMenu && formik.errors.uploadMenu)}
//                     helpertext={formik.touched.uploadMenu && formik.errors.uploadMenu}
//                     onChange={formik.handleChange}
//                     fullWidth
//                   >
//                     Upload Menu
//                   </Button>
//                   <input
//                     accept="image/*"
//                     id="uploadMenu"
//                     type="file"
//                     style={{ display: "none" }}
//                     onChange={(e) => {
//                       formik.setFieldValue("uploadMenu", e.target.files[0]);
//                       console.log(e.target.files[0].name);
//                     }}
//                   />
//                   <Typography variant="body2">
//                     {formik.values.uploadMenu ? formik.values.uploadMenu.name : "No file chosen"}
//                   </Typography>
//                 </label>
//               </Grid>
//               <Grid item xs={4}>
//                 <label htmlFor="uploadPan">
//                   <Button
//                     variant="contained"
//                     component="span"
//                     color="primary"
//                     error={Boolean(formik.touched.uploadPan && formik.errors.uploadPan)}
//                     helpertext={formik.touched.uploadPan && formik.errors.uploadPan}
//                     onChange={formik.handleChange}
//                     fullWidth
//                   >
//                     Upload Pan
//                   </Button>
//                   <input
//                     accept="image/*"
//                     id="uploadPan"
//                     type="file"
//                     style={{ display: "none" }}
//                     onChange={(e) => {
//                       formik.setFieldValue("uploadPan", e.target.files[0]);
//                       console.log(e.target.files[0].name);
//                     }}
//                   />
//                   <Typography variant="body2">
//                     {formik.values.uploadPan ? formik.values.uploadPan.name : "No file chosen"}
//                   </Typography>
//                 </label>
//               </Grid>
//               <Grid item xs={4}>
//                 <label htmlFor="licenseImage">
//                   <Button
//                     variant="contained"
//                     component="span"
//                     color="primary"
//                     error={Boolean(formik.touched.licenseImage && formik.errors.licenseImage)}
//                     helpertext={formik.touched.licenseImage && formik.errors.licenseImage}
//                     onChange={formik.handleChange}
//                     fullWidth
//                   >
//                     Upload License
//                   </Button>
//                   <input
//                     accept="image/*"
//                     id="licenseImage"
//                     type="file"
//                     style={{ display: "none" }}
//                     onChange={(e) => {
//                       formik.setFieldValue("licenseImage", e.target.files[0]);
//                       console.log(e.target.files[0].name);
//                     }}
//                   />
//                   <Typography variant="body2">
//                     {formik.values.licenseImage
//                       ? formik.values.licenseImage.name
//                       : "No file chosen"}
//                   </Typography>
//                 </label>
//               </Grid>
//               <Grid item xs={4}>
//                 <label htmlFor="gst">
//                   <Button
//                     variant="contained"
//                     component="span"
//                     color="primary"
//                     error={Boolean(formik.touched.gst && formik.errors.gst)}
//                     helpertext={formik.touched.gst && formik.errors.gst}
//                     onChange={formik.handleChange}
//                     fullWidth
//                   >
//                     Upload GST
//                   </Button>
//                   <input
//                     accept="image/*"
//                     id="gst"
//                     type="file"
//                     style={{ display: "none" }}
//                     onChange={(e) => {
//                       formik.setFieldValue("gst", e.target.files[0]);
//                       console.log(e.target.files[0].name);
//                     }}
//                   />
//                   <Typography variant="body2">
//                     {formik.values.gst ? formik.values.gst.name : "No file chosen"}
//                   </Typography>
//                 </label>
//               </Grid>
//               <Grid item xs={4}>
//                 <label htmlFor="storeImage">
//                   <Button
//                     variant="contained"
//                     component="span"
//                     color="primary"
//                     error={Boolean(formik.touched.storeImage && formik.errors.storeImage)}
//                     helpertext={formik.touched.storeImage && formik.errors.storeImage}
//                     onChange={formik.handleChange}
//                     fullWidth
//                   >
//                     Upload Store Image
//                   </Button>
//                   <input
//                     accept="image/*"
//                     id="storeImage"
//                     type="file"
//                     style={{ display: "none" }}
//                     onChange={(e) => {
//                       formik.setFieldValue("storeImage", e.target.files[0]);
//                       console.log(e.target.files[0].name);
//                     }}
//                   />
//                   <Typography variant="body2">
//                     {formik.values.storeImage ? formik.values.storeImage.name : "No file chosen"}
//                   </Typography>
//                 </label>
//               </Grid>
//             </Grid>

//           <button type="button" onClick={() => props.prev(values)}>
//             Back
//           </button>
//           <button type="submit">Submit</button>
//         </Form>
//       )}
//     </Formik>
//   );
// };
