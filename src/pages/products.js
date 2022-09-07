import Head from "next/head";
import { Box, Container, Grid, Pagination, ToggleButton, ToggleButtonGroup } from "@mui/material";

import { ProductListToolbar } from "../components/product/product-list-toolbar";
import { ProductCard } from "../components/product/product-card";
import { DashboardLayout } from "../components/dashboard-layout";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getProducts, getProductSubcategory } from "src/store/actions/productActions";
import axios from "axios";

const Products = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const productList = useSelector((state) => state.products);
  const { loading, error, products } = productList;
  const subCat = useSelector((state) => state.productSubcat);
  const [subcat, setSubcat] = useState([]);
  // const { loading: subcatLoading, error: subcatError, subcat } = subCat;
  const { userInfo } = userLogin;
  const [subcatType, setSubcatType] = useState("Fruits");

  const handleChange = (event, newSubcatType) => {
    if (newSubcatType !== null) {
      setSubcatType(newSubcatType);
      dispatch(getProducts(newSubcatType));
    }
  };
  useEffect(() => {
    if (!userInfo) {
      router.push("/login");
    }
    dispatch(getProducts("Fruits"));
    const getSubcat = async () => {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userInfo.token}`,
        },
      };
      const { data } = await axios.get(
        `https://gravitybites.in/api/products/getSubcategories`,
        config
      );
      setSubcat(data.mess);
    };
    getSubcat();
  }, [userInfo, dispatch, router]);
  return (
    <>
      <Head>
        <title>Products | Material Kit</title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
        }}
      >
        <Container maxWidth={false}>
          <ProductListToolbar />
          <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <ToggleButtonGroup
              color="primary"
              value={subcatType}
              exclusive
              onChange={handleChange}
              aria-label="Platform"
            >
              {" "}
              {subcat?.map((item) => (
                <ToggleButton value={item.subcategory} key={item._id} aria-label={item.subcategory}>
                  {item.subcategory}
                </ToggleButton>
              ))}
            </ToggleButtonGroup>
          </Box>
          <Box sx={{ pt: 3 }}>
            <Grid container spacing={3}>
              {products.map((product) => (
                <Grid item key={product._id} lg={4} md={6} xs={12}>
                  <ProductCard product={product} />
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
      </Box>
    </>
  );
};

Products.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Products;
