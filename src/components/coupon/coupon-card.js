import PropTypes from "prop-types";
import { Avatar, Box, Card, CardContent, Divider, Grid, Typography } from "@mui/material";
import RedeemIcon from "@mui/icons-material/Redeem";
import { Clock as ClockIcon } from "../../icons/clock";
import { Download as DownloadIcon } from "../../icons/download";
import DeleteIcon from "@mui/icons-material/Delete";
export const CouponCard = ({ coupons, ...rest }) => (
  <Card
    sx={{
      display: "flex",
      flexDirection: "column",
      height: "100%",
    }}
    {...rest}
    style={{ backgroundColor: "#fff" }}
  >
    <CardContent>
      <DeleteIcon style={{ width: "200%", textAlign: "right" }} fontSize="large" />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          pb: 3,
        }}
      >
        <Avatar alt="coupons" src={`https://gravitybites.in/${coupons.image}`} variant="square" />
      </Box>
      <Typography align="center" color="textPrimary" gutterBottom variant="h5">
        {coupons.category}
      </Typography>
      <Typography align="center" color="textPrimary" gutterBottom variant="h5">
        {coupons.code}
      </Typography>
      <Typography align="center" color="textPrimary" variant="body1">
        {coupons.amountOff} %
      </Typography>
      <Typography align="center" color="textPrimary" variant="body1">
        Offered By : {coupons.offeredBy}
      </Typography>
    </CardContent>
    <Box sx={{ flexGrow: 1 }} />
    <Divider />
    <Box sx={{ p: 2 }}>
      <Grid container spacing={2} sx={{ justifyContent: "space-between" }}>
        <Grid
          item
          sx={{
            alignItems: "center",
            display: "flex",
          }}
        >
          <ClockIcon color="action" />
          <Typography color="textPrimary " display="inline" sx={{ pl: 1 }} variant="body2">
            Expiry Duration: {coupons.expiryDuration}
          </Typography>
        </Grid>
        <Grid
          item
          sx={{
            alignItems: "center",
            display: "flex",
          }}
        >
          <RedeemIcon color="action" />
          <Typography color="textPrimary" display="inline" sx={{ pl: 1 }} variant="body2">
            {coupons.timesredeemed} Redeemed
          </Typography>
        </Grid>
      </Grid>
    </Box>
  </Card>
);

CouponCard.propTypes = {
  coupons: PropTypes.object.isRequired,
};
