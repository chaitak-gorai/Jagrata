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
      image: "/uploads/download.png",
      couponCode: "",
      isPercent: true,
      amountOff: 0,
      expiryDuration: "",
    },
    validationSchema: Yup.object({
      category: Yup.string().max(255).required("Category is required"),
      image: Yup.mixed().required("Image is required"),
      couponCode: Yup.string().max(10).required("Coupon Code is required"),
      amountOff: Yup.string().max(255).required("Amount off is required"),
      expiryDuration: Yup.string().max(255).required("Expiry date  is required"),
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
              Create Vendor Coupon
            </Typography>
          </Box>
          <Grid container spacing={2}>
            <Grid item>
              <TextField
                error={Boolean(formik.touched.couponCode && formik.errors.couponCode)}
                fullWidth
                helpertext={formik.touched.couponCode && formik.errors.couponCode}
                label="Coupon Code"
                margin="normal"
                name="couponCode"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.couponCode}
                variant="outlined"
              />
            </Grid>

            <Grid item>
              <TextField
                error={Boolean(formik.touched.category && formik.errors.category)}
                fullWidth
                helpertext={formik.touched.category && formik.errors.category}
                label="Category"
                margin="normal"
                name="category"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.category}
                variant="outlined"
              />
            </Grid>

            <Grid item>
              <TextField
                error={Boolean(formik.touched.amountOff && formik.errors.amountOff)}
                fullWidth
                helpertext={formik.touched.amountOff && formik.errors.amountOff}
                label="Amount Off (in %)"
                margin="normal"
                name="amountOff"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.amountOff}
                variant="outlined"
              />
            </Grid>

            <Grid item>
              <DateTimePicker
                error={Boolean(formik.touched.expiryDuration && formik.errors.expiryDuration)}
                label="Expiry Date"
                onChange={(value) => formik.setFieldValue("expiryDuration", value)}
                value={formik.values.expiryDuration}
                renderInput={(params) => <TextField {...params} />}
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
