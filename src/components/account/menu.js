import { useState } from "react";
import {  Box,  Button,  Card,  CardContent,  CardHeader,  Divider,  Grid,  TextField,} from "@mui/material";
import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import DeleteIcon from "@mui/icons-material/Delete";

function createData(pname, price) {
  return { pname, price };
}

const rows = [createData("Frozen yoghurt", 159)];

export const Menu = (props) => {
  const [values, setValues] = useState({
    phone: "",
    message: "",
  });

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <Card>
      <CardContent>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">Product Name</TableCell>
                <TableCell align="center">Product Price</TableCell>
                <TableCell align="center"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.name} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                  <TableCell align="center">{row.pname}</TableCell>
                  <TableCell align="center">{row.price}</TableCell>
                  <TableCell align="center"><DeleteIcon/></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
      <Divider />
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          p: 2,
        }}
      >
        <Button color="primary" variant="contained">
          Add Product
        </Button>
      </Box>
    </Card>
  );
};
