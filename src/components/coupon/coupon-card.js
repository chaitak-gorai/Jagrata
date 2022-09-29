import PropTypes from "prop-types";
import { Avatar, Box, Card, CardContent, Divider, Grid, Typography } from "@mui/material";
import RedeemIcon from "@mui/icons-material/Redeem";
import { Clock as ClockIcon } from "../../icons/clock";
import { Download as DownloadIcon } from "../../icons/download";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import AlertDialog from "../Confirm";
export const CouponCard = ({ coupons, setMsg, ...rest }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  return (
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
        <AlertDialog
          msg={"Are you sure you want to delete this coupon?"}
          onConfirm={async () => {
            const config = {
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${userInfo.token}`,
              },
            };
            const { data } = await axios.post(
              `https://gravitybites.in/api/stores/deleteCoupons/${coupons._id}`,
              {},
              config
            );
            setMsg(` Coupon ${coupons._id} Deleted`);
          }}
        >
          <DeleteIcon />
        </AlertDialog>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            pb: 3,
          }}
        >
          <Avatar alt="coupons" src={`https://gravitybites.in${coupons.image}`} variant="square" />
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
};

CouponCard.propTypes = {
  coupons: PropTypes.object.isRequired,
};
