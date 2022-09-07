import PropTypes from "prop-types";
import { Avatar, Box, Card, CardContent, Divider, Grid, Typography } from "@mui/material";
import CategoryIcon from "@mui/icons-material/Category";
import { Clock as ClockIcon } from "../../icons/clock";
import { Download as DownloadIcon } from "../../icons/download";

export const ProductCard = ({ product, ...rest }) => (
  <Card
    sx={{
      display: "flex",
      flexDirection: "column",
      height: "100%",
    }}
    {...rest}
  >
    <CardContent>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          pb: 3,
        }}
      >
        <img
          alt="Product"
          src={`https://gravitybites.in${product.image}`}
          width="100px"
          height="100px"
        />
      </Box>
      <Typography align="center" color="textPrimary" gutterBottom variant="h5">
        {product.name}
      </Typography>

      <Typography align="center" color="textPrimary" gutterBottom variant="body1">
        {product.category}
      </Typography>
      <Typography align="center" color="textPrimary" variant="body2">
        {product.subcategory}
      </Typography>
    </CardContent>
    <Box sx={{ flexGrow: 1 }} />
    <Divider />
    <Box sx={{ p: 2 }}>
      <Grid
        containers
        container
        spacing={2}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <CategoryIcon />

        <Grid>
          <Typography color="textSecondary" display="inline" sx={{ pl: 1 }} variant="body2">
            Variables
          </Typography>
          {product.variable.map((variable) => (
            <Grid key={variable._id}>
              <Typography color="textSecondary" display="inline" sx={{ pl: 1 }} variant="body2">
                {variable.variableName}
              </Typography>
              <Typography color="textSecondary" display="inline" sx={{ pl: 1 }} variant="body2">
                {variable.price}
              </Typography>
              <Typography color="textSecondary" display="inline" sx={{ pl: 1 }} variant="body2">
                {variable.qty}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Box>
  </Card>
);

ProductCard.propTypes = {
  product: PropTypes.object.isRequired,
};
