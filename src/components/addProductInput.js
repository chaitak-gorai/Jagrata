import {
  Box,
  Button,
  Container,
  Grid,
  stepContentClasses,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import NextLink from "next/link";
import router, { useRouter } from "next/router";
import { useFormik } from "formik";
import * as Yup from "yup";
import { DateTimePicker } from "@mui/lab";
import { createVendorCoupons } from "src/store/actions/couponsActions";
import { useDispatch, useSelector } from "react-redux";
const CouponInput = ({ onclose }) => {
  const dispatch = useDispatch();
  const createCoupon = useSelector((state) => state.createVendorCoupons);
  const { loading, error, message } = createCoupon;
  const formik = useFormik({
    initialValues: {
      category: "",
      subcategory:"",
      name:"",
      image: "/uploads/download.png",
      variableName:"",
      price:"",
      quantity:""
    },
    validationSchema: Yup.object({
      category: Yup.string().max(255).required("Category is required"),
      image: Yup.mixed().required("Image is required"),
      name: Yup.string().max(255).required("Name is required"),
      subcategory: Yup.string().max(255).required("Sub Category is required"),
      variableName: Yup.string().max(255).required("Variable Name is required"),
      price: Yup.string().max(255).required("Price is required"),
      quantity: Yup.number().max(255).required("Quantity is required"),
    }),
    onSubmit: () => {
      dispatch(createVendorCoupons(formik.values));
      onclose();
    },
  });

  return (
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
              Create Products
            </Typography>
          </Box>
          <Grid container spacing={2}>
            <Grid item>
              <TextField
                error={Boolean(formik.touched.couponCode && formik.errors.category)}
                fullWidth
                helpertext={formik.touched.couponCode && formik.errors.category}
                label="Category"
                margin="normal"
                name="category"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.couponCode}
                variant="outlined"
              />
            </Grid>

            <Grid item>
              <TextField
                error={Boolean(formik.touched.category && formik.errors.subcategory)}
                fullWidth
                helpertext={formik.touched.category && formik.errors.subcategory}
                label="Sub Category"
                margin="normal"
                name="subcategory"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.category}
                variant="outlined"
              />
            </Grid>
            <Grid item>
              <TextField
                error={Boolean(formik.touched.category && formik.errors.name)}
                fullWidth
                helpertext={formik.touched.category && formik.errors.name}
                label="Name"
                margin="normal"
                name="name"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.category}
                variant="outlined"
              />
            </Grid>

            <Grid item>
              <TextField
                error={Boolean(formik.touched.category && formik.errors.variableName)}
                fullWidth
                helpertext={formik.touched.category && formik.errors.variableName}
                label="Variable Name"
                margin="normal"
                name="variableName"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.category}
                variant="outlined"
              />
            </Grid>

            <Grid item>
              <TextField
                error={Boolean(formik.touched.category && formik.errors.price)}
                fullWidth
                helpertext={formik.touched.category && formik.errors.price}
                label="Price"
                margin="normal"
                name="price"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.category}
                variant="outlined"
              />
            </Grid>

            <Grid item>
              <TextField
                error={Boolean(formik.touched.category && formik.errors.quantity)}
                fullWidth
                helpertext={formik.touched.category && formik.errors.quantity}
                label="Quantity"
                margin="normal"
                name="quantity"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.category}
                variant="outlined"
              />
            </Grid>

            

            <Grid item xs={4}>
              <label htmlFor="image">
                <Button
                  variant="contained"
                  component="span"
                  color="primary"
                  error={Boolean(formik.touched.image && formik.errors.image)}
                  helpertext={formik.touched.image && formik.errors.image}
                  onChange={formik.handleChange}
                  fullWidth
                >
                  Upload Image
                </Button>
                <input
                  accept="image/*"
                  id="image"
                  type="file"
                  style={{ display: "none" }}
                  onChange={(e) => {
                    formik.setFieldValue("image", e.target.files[0]);
                    console.log(e.target.files[0].name);
                  }}
                />
                <Typography variant="body2">
                  {formik.values.image ? formik.values.image.name : "No file chosen"}
                </Typography>
              </label>
            </Grid>
          </Grid>
          <Box sx={{ py: 2 }}>
            <Button
              color="primary"
              disabled={formik.isSubmitting}
              fullWidth
              size="large"
              type="submit"
              variant="contained"
            >
              Create Now
            </Button>
          </Box>
        </form>
      </Container>
    </Box>
  );
};

export default CouponInput;
