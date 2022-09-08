import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

export default function BasicRating(rating) {
//   const [value, setValue] = React.useState(rating);
console.log(rating.rating)
  return (
    <Box
      sx={{
        '& > legend': { mt: 2 },
      }}
    >
      <Typography component="legend">Read only</Typography>
      <Rating name="read-only" value={rating.rating} readOnly />
    </Box>
    
  );
}
