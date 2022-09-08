import { useState } from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField,
  Typography
} from '@mui/material';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';

export const Wallet = (props) => {
  const [values, setValues] = useState({
  
    phone: '',
    message:''
    
  });

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

  return (
    <form
      autoComplete="off"
      noValidate
      {...props}
    >
      <Card>
        
        <CardContent>
          <Grid
            container
            spacing={3}
          >
            <Grid
              item
              md={6}
              xs={12}
            >
              <AccountBalanceWalletIcon/>
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <Typography>57575</Typography>
            </Grid>
          </Grid>
        </CardContent>
        
      </Card>
    </form>
  );
};
