import { useState } from "react";
import Head from "next/head";
import { Formik, Form, Field, ErrorMessage } from "formik";
import NextLink from "next/link";
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
    pinCode: "",
    countryCode: "",
    stateCode: "",
    bankName: "",
    accountNo: "",
    accountHolder: "",
    ifsc: "",
    upiId: "",
    storeManager: "",
    categories: "",
    services: "",
    liscenseNo: "",
    licenseType: "",
    openingTime: "",
    closingTime: "",
    policy: true,
    cancelledCheque: "/uploads/docu.jpg",
    uploadMenu: "/uploads/docu.jpg",
    uploadPan: "/uploads/docu.jpg",
    licenseImage: "/uploads/docu.jpg",
    expiryDate: "02/05/2022",
    uploadGSTcertificate: "/uploads/docu.jpg",
    storeImage: "/uploads/docu.jpg",
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
    <Uploads key={2} next={handleNextStep} prev={handlePrevStep} data={data} errors={errors} />,
    <BankDetails key={3} next={handleNextStep} prev={handlePrevStep} data={data} errors={errors} />,
    <StoreDetails key={4} next={handleNextStep} prev={handlePrevStep} data={data} />,
  ];

  console.log("data", data);

  return (
    <>
      <Container>
        <Box sx={{ my: 3 }}>
          <Typography color="textPrimary" variant="h4">
            Create a new account
          </Typography>
        </Box>
        {steps[currentStep]}
      </Container>
    </>
  );
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
                    <Field
                      label="Full Name"
                      margin="normal"
                      name="fullName"
                      variant="outlined"
                      className="field"
                      placeholder="Name"
                    />
                    <ErrorMessage name="fullName" />
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <Field
                      label="Store Name"
                      margin="normal"
                      name="storeName"
                      variant="outlined"
                      className="field"
                      placeholder="Store Name"
                    />
                    <ErrorMessage name="storeName" />
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <Field
                      label="Phone Number"
                      margin="normal"
                      name="phoneNo"
                      type="number"
                      variant="outlined"
                      className="field"
                      placeholder="Phone No."
                    />
                    <ErrorMessage name="phoneNo" />
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <Field
                      label="Email Address"
                      margin="normal"
                      name="email"
                      type="email"
                      variant="outlined"
                      className="field"
                      placeholder="Email"
                    />
                    <ErrorMessage name="email" />
                  </Grid>
                  <Grid item xs={8}>
                    <Field
                      label="Password"
                      margin="normal"
                      name="password"
                      type="password"
                      variant="outlined"
                      className="field"
                      placeholder="Password"
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
                    <Field
                      label="StreetName"
                      margin="normal"
                      name="streetName"
                      variant="outlined"
                      className="field"
                      placeholder="Street Name"
                    />
                    <ErrorMessage name="streetName" />
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <Field
                      label="City"
                      margin="normal"
                      name="city"
                      variant="outlined"
                      className="field"
                      placeholder="City"
                    />
                    <ErrorMessage name="city" />
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <Field
                      label="Country"
                      margin="normal"
                      name="countryCode"
                      type="text"
                      variant="outlined"
                      className="field"
                      placeholder="Country"
                    />
                    <ErrorMessage name="countryCode" />
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <Field
                      label="Zip Code"
                      margin="normal"
                      name="pinCode"
                      type="number"
                      variant="outlined"
                      className="field"
                      placeholder="Pin code"
                    />
                    <ErrorMessage name="pinCode" />
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <Field
                      label="State"
                      margin="normal"
                      name="stateCode"
                      type="stateCode"
                      variant="outlined"
                      className="field"
                      placeholder="State"
                    />
                    <ErrorMessage name="stateCode" />
                  </Grid>
                </Grid>
                <Button
                  color="primary"
                  size="large"
                  variant="contained"
                  sx={{ margin: 4 }}
                  type="submit"
                >
                  Next
                </Button>
              </Form>
            )}
          </Formik>
        </Container>
      </Box>
    </>
  );
};

const BankDetailsValidationSchema = Yup.object({
  bankName: Yup.string().max(255).required("Bank Name is required"),
  accountNo: Yup.number().required("AccountNo is required"),
  accountHolder: Yup.string().max(255).required("accountHolder is required"),
  ifsc: Yup.string().max(255).required("ifsc is required"),
  upiId: Yup.string().max(255).required("upiId is required"),
});

const BankDetails = (props) => {
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
            validationSchema={BankDetailsValidationSchema}
            initialValues={props.data}
            onSubmit={handleSubmit}
          >
            {({ values }) => (
              <Form>
                <Box sx={{ my: 3 }}>
                  <Typography color="textPrimary" variant="h5">
                    Bank Details
                  </Typography>
                </Box>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={4}>
                    <Field
                      label="Bank Name"
                      margin="normal"
                      name="bankName"
                      variant="outlined"
                      className="field"
                      placeholder="Bank Name"
                    />
                    <ErrorMessage name="bankName" />
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <Field
                      label="Account Holder Name"
                      margin="normal"
                      name="accountHolder"
                      variant="outlined"
                      className="field"
                      placeholder="Account Holder Name"
                    />
                    <ErrorMessage name="accountHolder" />
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <Field
                      label="Account No"
                      margin="normal"
                      name="accountNo"
                      variant="outlined"
                      className="field"
                      type="number"
                      placeholder="Account No"
                    />
                    <ErrorMessage name="accountNo" />
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <Field
                      label="IFSC Code"
                      margin="normal"
                      name="ifsc"
                      type="string"
                      variant="outlined"
                      className="field"
                      placeholder="IFSC Code"
                    />
                    <ErrorMessage name="ifsc" />
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <Field
                      label="UPI ID"
                      margin="normal"
                      name="upiId"
                      type="upiId"
                      variant="outlined"
                      className="field"
                      placeholder="UPI ID"
                    />
                    <ErrorMessage name="upiId" />
                  </Grid>
                </Grid>
                <Button
                  color="primary"
                  size="large"
                  variant="contained"
                  sx={{ margin: 4 }}
                  type="button"
                  onClick={() => props.prev(values)}
                >
                  Back
                </Button>
                <Button
                  color="primary"
                  size="large"
                  variant="contained"
                  sx={{ margin: 2 }}
                  type="submit"
                >
                  Next
                </Button>
              </Form>
            )}
          </Formik>
        </Container>
      </Box>
    </>
  );
};

const StoreDetailsValidationSchema = Yup.object({
  storeManager: Yup.string().max(255).required("storeManager is required"),
  categories: Yup.string().max(255).required("categories is required"),
  services: Yup.string().max(255).required("services is required"),
  liscenseNo: Yup.string().max(255).required("liscenseNo is required"),
  licenseType: Yup.string().max(255).required("licenseType is required"),
  openingTime: Yup.string().max(255).required("openingTime is required"),
  closingTime: Yup.string().max(255).required("closingTime is required"),
  policy: Yup.string().required("Required"),
});

const StoreDetails = (props) => {
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
            validationSchema={StoreDetailsValidationSchema}
            initialValues={props.data}
            onSubmit={handleSubmit}
          >
            {({ values }) => (
              <Form>
                <Box sx={{ my: 3 }}>
                  <Typography color="textPrimary" variant="h5">
                    Store Details
                  </Typography>
                </Box>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={4}>
                    <Field
                      label="Store Manager"
                      margin="normal"
                      name="storeManager"
                      variant="outlined"
                      className="field"
                      placeholder="Store Manager"
                    />
                    <ErrorMessage name="storeManager" />
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <Field
                      label="Store Category"
                      margin="normal"
                      name="categories"
                      variant="outlined"
                      className="field"
                      placeholder="Store Category"
                    />
                    <ErrorMessage name="categories" />
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <Field
                      label="Services"
                      margin="normal"
                      name="services"
                      type="text"
                      variant="outlined"
                      className="field"
                      placeholder="Services"
                    />
                    <ErrorMessage name="services" />
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <Field
                      label="license No"
                      margin="normal"
                      name="liscenseNo"
                      type="string"
                      variant="outlined"
                      className="field"
                      placeholder="License No"
                    />
                    <ErrorMessage name="liscenseNo" />
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <Field
                      label="License Type"
                      margin="normal"
                      name="licenseType"
                      variant="outlined"
                      className="field"
                      placeholder="License Type"
                    />
                    <ErrorMessage name="licenseType" />
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <Field
                      label="Opening Time"
                      margin="normal"
                      name="openingTime"
                      variant="outlined"
                      className="field"
                      placeholder="Opening Time"
                    />
                    <ErrorMessage name="openingTime" />
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <Field
                      label="Closing Time"
                      margin="normal"
                      name="closingTime"
                      variant="outlined"
                      className="field"
                      placeholder="Closing Time"
                    />
                    <ErrorMessage name="closingTime" />
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
                    // checked={formik.values.policy}
                    name="policy"
                    // onChange={formik.handleChange}
                  />
                  <Typography color="textSecondary" variant="body2">
                    I have read the{" "}
                    <NextLink href="/terms" passHref>
                      <Link color="primary" underline="always" variant="subtitle2">
                        Terms and Conditions
                      </Link>
                    </NextLink>
                  </Typography>
                  <ErrorMessage name="policy" />
                </Box>

                <Button
                  color="primary"
                  size="large"
                  variant="contained"
                  sx={{ margin: 4 }}
                  type="button"
                  onClick={() => props.prev(values)}
                >
                  Back
                </Button>
                <Button
                  color="primary"
                  size="large"
                  variant="contained"
                  sx={{ margin: 2 }}
                  type="submit"
                >
                  Submit
                </Button>
              </Form>
            )}
          </Formik>
        </Container>
      </Box>
    </>
  );
};

const UploadValidationSchema = Yup.object({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().label("Password"),
});

const Uploads = (props) => {
  const handleSubmit = (values) => {
    props.next(values, true);
  };

  return (
    <Formik
      validationSchema={UploadValidationSchema}
      initialValues={props.data}
      onSubmit={handleSubmit}
    >
      {({ values }) => (
        <Form>
          <Box sx={{ my: 3 }}>
            <Typography color="textSecondary" gutterBottom variant="h5">
              Uploads
            </Typography>
          </Box>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <label htmlFor="cancelledCheque">
                <Button variant="contained" component="span" color="primary">
                  Upload Cancelled Cheque
                </Button>
                <input
                  accept="image/*"
                  id="cancelledCheque"
                  type="file"
                  style={{ display: "none" }}
                  onChange={(e) => {
                    setFieldValue("cancelledCheque", e.target.files[0]);
                    console.log(e.target.files[0].name);
                  }}
                />
                <Typography variant="body2">
                  {values.cancelledCheque
                    ? values.cancelledCheque.name
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
                  // error={Boolean(formik.touched.uploadMenu && formik.errors.uploadMenu)}
                  // helpertext={formik.touched.uploadMenu && formik.errors.uploadMenu}
                  // onChange={formik.handleChange}
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
                    setFieldValue("uploadMenu", e.target.files[0]);
                    console.log(e.target.files[0].name);
                  }}
                />
                <Typography variant="body2">
                  {values.uploadMenu ? values.uploadMenu.name : "No file chosen"}
                </Typography>
              </label>
            </Grid>
            <Grid item xs={4}>
              <label htmlFor="uploadPan">
                <Button
                  variant="contained"
                  component="span"
                  color="primary"
                  // error={Boolean(formik.touched.uploadPan && formik.errors.uploadPan)}
                  // helpertext={formik.touched.uploadPan && formik.errors.uploadPan}
                  // onChange={formik.handleChange}
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
                    setFieldValue("uploadPan", e.target.files[0]);
                    console.log(e.target.files[0].name);
                  }}
                />
                <Typography variant="body2">
                  {/* {values.uploadPan ? formik.values.uploadPan.name : "No file chosen"} */}
                </Typography>
              </label>
            </Grid>
            <Grid item xs={4}>
              <label htmlFor="licenseImage">
                <Button
                  variant="contained"
                  component="span"
                  color="primary"
                  // error={Boolean(formik.touched.licenseImage && formik.errors.licenseImage)}
                  // helpertext={formik.touched.licenseImage && formik.errors.licenseImage}
                  // onChange={formik.handleChange}
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
                    // formik.setFieldValue("licenseImage", e.target.files[0]);
                    console.log(e.target.files[0].name);
                  }}
                />
                <Typography variant="body2">
                  {/* {formik.values.licenseImage
                      ? formik.values.licenseImage.name
                      : "No file chosen"} */}
                </Typography>
              </label>
            </Grid>
            <Grid item xs={4}>
              <label htmlFor="gst">
                <Button
                  variant="contained"
                  component="span"
                  color="primary"
                  // error={Boolean(formik.touched.gst && formik.errors.gst)}
                  // helpertext={formik.touched.gst && formik.errors.gst}
                  // onChange={formik.handleChange}
                  fullWidth
                >
                  Upload GST
                </Button>
                <input
                  accept="image/*"
                  id="gst"
                  type="file"
                  style={{ display: "none" }}
                  // onChange={(e) => {
                  //   formik.setFieldValue("gst", e.target.files[0]);
                  //   console.log(e.target.files[0].name);
                  // }}
                />
                <Typography variant="body2">
                  {values.gst ? values.gst.name : "No file chosen"}
                </Typography>
              </label>
            </Grid>
            <Grid item xs={4}>
              <label htmlFor="storeImage">
                <Button
                  variant="contained"
                  component="span"
                  color="primary"
                  // error={Boolean(formik.touched.storeImage && formik.errors.storeImage)}
                  // helpertext={formik.touched.storeImage && formik.errors.storeImage}
                  // onChange={formik.handleChange}
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
                    setFieldValue("storeImage", e.target.files[0]);
                    console.log(e.target.files[0].name);
                  }}
                />
                <Typography variant="body2">
                  {values.storeImage ? values.storeImage.name : "No file chosen"}
                </Typography>
              </label>
            </Grid>
          </Grid>

          <Button type="button" onClick={() => props.prev(values)}>
            Back
          </Button>
          <Button type="submit">Next</Button>
        </Form>
      )}
    </Formik>
  );
};
