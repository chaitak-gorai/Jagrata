import { Avatar, Box, Card, CardContent, Grid, Typography } from "@mui/material";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import MoneyIcon from "@mui/icons-material/Money";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

export const Budget = (props) => (
  
  <Card sx={{ height: "100%" }} {...props}>
    <CardContent>
      <Grid container spacing={3} sx={{ justifyContent: "space-between" }}>
        <Grid item>
          <Typography color="textSecondary" gutterBottom variant="overline">
            {props.text}
          </Typography>
          <Typography color="textPrimary" variant="h4">
            {props.value}
          </Typography>
        </Grid>
        
        <Grid item>
          <Avatar
            sx={{
              backgroundColor: "success.main",
              height: 56,
              width: 56,
            }}
          >
            <MoneyIcon />
          </Avatar>
        </Grid>
      </Grid>
      {/*<Box
      //   sx={{
      //     pt: 2,
      //     display: "flex",
      //     alignItems: "center",
      //   }}
      // >
      //   <ArrowDownwardIcon color="error" />
      //   <Typography
      //     color="error"
      //     sx={{
      //       mr: 1,
      //     }}
      //     variant="body2"
      //   >
      //     12%
      //   </Typography>
      //   <Typography color="textSecondary" variant="caption">
      //     Since last month
      //   </Typography>
          // </Box> */}
    </CardContent>
  </Card>
);
