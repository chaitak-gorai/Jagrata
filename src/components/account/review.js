import { useState } from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField
} from '@mui/material';
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


function createData(name, rating,comment,time ) {
  return { name, rating,comment,time };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
];

export const Review = (props) => {
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
      <Card>
        <CardContent>
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="center">Name</TableCell>
            <TableCell align="center">Rating</TableCell>
            <TableCell align="center">Comment</TableCell>
            <TableCell align="center">Time</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="center">{row.name}</TableCell>
              <TableCell align="center">{row.comment}</TableCell>
              <TableCell align="center">{row.rating}</TableCell>
              <TableCell align="center">{row.time}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </CardContent>
      </Card>
  );
};
