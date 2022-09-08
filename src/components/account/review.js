import { useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField,
} from "@mui/material";
import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Rating from "../account/rating";

function createData(name, rating, comment, time) {
  return { name, rating, comment, time };
}

const rows = [createData("Frozen yoghurt", 3, 6.0, 24, 4.0)];

export const Review = (props) => {
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

  return <h1>test</h1>;
};
