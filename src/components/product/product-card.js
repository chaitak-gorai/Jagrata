import PropTypes from 'prop-types';
import { Avatar, Box, Card, CardContent, Divider, Grid, Typography } from '@mui/material';
import { Clock as ClockIcon } from '../../icons/clock';
import { Download as DownloadIcon } from '../../icons/download';
import { CardImg } from 'react-bootstrap';
// import { useTheme } from '@mui/material/styles';
import CardMedia from '@mui/material/CardMedia';


export const ProductCard = ({ product, ...rest }) => {
  // const theme = useTheme();
 
  return (
  <Card sx={{ display: 'flex', boxShadow: "5px 5px black"}} 
  style={{backgroundColor: "#F8F0E3"}}>
    <CardMedia
        component="img"
        sx={{ width: 200 }}
        image={product.image}
        alt="Live from space album cover"
      />
      <Box sx={{ display: 'flex', flexDirection: 'column' ,width:'80%'}}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" 
          variant="h4">
            {product.name}
          </Typography>
          <Typography variant="subtitle" 
          color="blue" 
          component="div">
            {product.subcategory}
          </Typography>
          <Typography component="div" 
          variant="subtitle" sx={{mt:4}}>
            {product.variableName}
          </Typography>
        </CardContent>
        <Divider sx={{borderColor:"orange"}}/>
        <Box sx={{ p: 2 }}>
      <Grid
        container
        spacing={2}
        sx={{ justifyContent: 'space-between' }}
      >
        <Grid
          item
          sx={{
            alignItems: 'center',
            display: 'flex'
          }}
        >
          <Typography
            color="black "
            display="inline"
            sx={{ pl: 1 }}
            variant="h5"
          >
            <b>Rs. {product.price} </b>
          </Typography>
        </Grid>
        <Grid
          item
          sx={{
            alignItems: 'center',
            display: 'flex'
          }}
        >
          <Typography
            color="black"
            display="inline"
            sx={{ pl: 1 }}
            variant="h5"
          >
            {product.qty}
            {' '}
            {product.unit}
          </Typography>
        </Grid>
      </Grid>
    </Box>
      </Box>
    </Card>
)};

ProductCard.propTypes = {
  product: PropTypes.object.isRequired
};
