import {
  Box,
  Button,
  Container,
  Grid,
  stepContentClasses,
  TextField,
  Typography,
  Alert
} from "@mui/material";
import React,{useState} from "react";
import NextLink from "next/link";
import router, { useRouter } from "next/router";
import { useFormik } from "formik";
import * as Yup from "yup";
import { DateTimePicker } from "@mui/lab";
import { createVendorCoupons } from "src/store/actions/couponsActions";
import { useDispatch, useSelector } from "react-redux";
import { createProduct } from "src/store/actions/productActions";
const CreateProduct = ({ onclose,sendMessage }) => {
  const dispatch = useDispatch();
  const createnewProduct = useSelector((state) => state.createProduct);
  const { loading, error, message } = createnewProduct;
  const [msg, setMsg] = useState("");
  const formik = useFormik({
    initialValues: {
      category: "",
      subcategory: "",
      name: "",
      image: "/uploads/download.png",
      variableName: "Small-Sized",
      price: "",
      quantity: "",
      variableName2: "Medium-Sized",
      price2: "",
      quantity2: "",
      variableName3: "Large-Sized",
      price3: "",
      quantity3: "",
    },
    validationSchema: Yup.object({
      category: Yup.string().max(255).required("Category is required"),
      image: Yup.mixed().required("Image is required"),
      name: Yup.string().max(255).required("Name is required"),
      subcategory: Yup.string().max(255).required("Sub Category is required"),
      variableName: Yup.string().max(255).required("Variable Name is required"),
      price: Yup.string().max(255).required("Price is required"),
      quantity: Yup.number().max(255).required("Quantity is required"),
      variableName2: Yup.string().max(255).required("Variable Name is required"),
      price2: Yup.string().max(255).required("Price is required"),
      quantity2: Yup.number().max(255).required("Quantity is required"),
      variableName3: Yup.string().max(255).required("Variable Name is required"),
      price3: Yup.string().max(255).required("Price is required"),
      quantity3: Yup.number().max(255).required("Quantity is required"),
    }),
    onSubmit: () => {
      dispatch(createProduct(formik.values));
      onclose();
      sendMessage(message);
    },
  });

  return (
    <Box
      component="main"
      sx={{
        alignItems: "center",
        display: "flex",
        flexGrow: 1,
        paddingTop: "200px",
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
                error={Boolean(formik.touched.subcategory && formik.errors.subcategory)}
                fullWidth
                helpertext={formik.touched.subcategory && formik.errors.subcategory}
                label="Sub Category"
                margin="normal"
                name="subcategory"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.subcategory}
                variant="outlined"
              />
            </Grid>
            <Grid item>
              <TextField
                error={Boolean(formik.touched.name && formik.errors.name)}
                fullWidth
                helpertext={formik.touched.name && formik.errors.name}
                label="Name"
                margin="normal"
                name="name"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.name}
                variant="outlined"
              />
            </Grid>

            <Grid container>
              <TextField
                error={Boolean(formik.touched.variableName && formik.errors.variableName)}
                fullWidth
                helpertext={formik.touched.variableName && formik.errors.variableName}
                label="Variable Name"
                margin="normal"
                name="variableName"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.variableName}
                variant="outlined"
              />

              <Grid item>
                <TextField
                  error={Boolean(formik.touched.price && formik.errors.price)}
                  fullWidth
                  helpertext={formik.touched.price && formik.errors.price}
                  label="Price"
                  margin="normal"
                  name="price"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.price}
                  variant="outlined"
                />
              </Grid>

              <Grid item>
                <TextField
                  error={Boolean(formik.touched.quantity && formik.errors.quantity)}
                  fullWidth
                  helpertext={formik.touched.quantity && formik.errors.quantity}
                  label="Quantity"
                  margin="normal"
                  name="quantity"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.quantity}
                  variant="outlined"
                />
              </Grid>
            </Grid>
            <Grid container>
              <TextField
                error={Boolean(formik.touched.variableName2 && formik.errors.variableName2)}
                fullWidth
                helpertext={formik.touched.variableName2 && formik.errors.variableName2}
                label="Variable Name"
                margin="normal"
                name="variableName2"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.variableName2}
                variant="outlined"
              />

              <Grid item>
                <TextField
                  error={Boolean(formik.touched.price2 && formik.errors.price2)}
                  fullWidth
                  helpertext={formik.touched.price2 && formik.errors.price2}
                  label="Price "
                  margin="normal"
                  name="price2"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.price2}
                  variant="outlined"
                />
              </Grid>

              <Grid item>
                <TextField
                  error={Boolean(formik.touched.quantity2 && formik.errors.quantity2)}
                  fullWidth
                  helpertext={formik.touched.quantity2 && formik.errors.quantity2}
                  label="Quantity"
                  margin="normal"
                  name="quantity2"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.quantity2}
                  variant="outlined"
                />
              </Grid>
            </Grid>
            <Grid container>
              <TextField
                error={Boolean(formik.touched.variableName3 && formik.errors.variableName3)}
                fullWidth
                helpertext={formik.touched.variableName3 && formik.errors.variableName3}
                label="Variable Name"
                margin="normal"
                name="variableName3"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.variableName3}
                variant="outlined"
              />

              <Grid item>
                <TextField
                  error={Boolean(formik.touched.price3 && formik.errors.price3)}
                  fullWidth
                  helpertext={formik.touched.price3 && formik.errors.price3}
                  label="Price"
                  margin="normal"
                  name="price3"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.price3}
                  variant="outlined"
                />
              </Grid>

              <Grid item>
                <TextField
                  error={Boolean(formik.touched.quantity3 && formik.errors.quantity3)}
                  fullWidth
                  helpertext={formik.touched.quantity3 && formik.errors.quantity3}
                  label="Quantity"
                  margin="normal"
                  name="quantity3"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.quantity3}
                  variant="outlined"
                />
              </Grid>
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

export default CreateProduct;
