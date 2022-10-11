import { Avatar, Box, Card, CardContent, Grid, Typography } from "@mui/material";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import MoneyIcon from "@mui/icons-material/Money";
import CircularProgress from "@mui/material/CircularProgress";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Icon from "@mui/material/Icon";

export const Budget = (props) => (
  <Card sx={{ height: "100%" }} {...props}>
    <CardContent>
      <Grid container spacing={2} sx={{ justifyContent: "space-between" }}>
        <Grid item>
          <Typography color="textSecondary" gutterBottom variant="overline">
            {props.text}
          </Typography>
          <Typography color="textPrimary" variant="h4">
            {props.value}
          </Typography>
        </Grid>

        <Grid item>
          <Box sx={{ position: "relative", display: "inline-flex", height:70,width:70}}>
            <CircularProgress variant="determinate" {...props} sx={{color:"orange"}}size={70}/>
            <Box
              sx={{
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
    
                position: "absolute",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {/* <Typography variant="caption" component="div" color="text.secondary">
                {`${Math.round(props.value)}`}
              </Typography> */}
              <Icon sx={{position: "absolute",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",fontSize:"70px"}} >{props.icon}</Icon>
            </Box>
          </Box>
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
