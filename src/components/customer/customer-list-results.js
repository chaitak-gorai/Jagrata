import { useState } from "react";
import PerfectScrollbar from "react-perfect-scrollbar";
import PropTypes from "prop-types";
import { format } from "date-fns";
import {
  Avatar,
  Box,
  Button,
  Card,
  Checkbox,
  MenuItem,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
} from "@mui/material";
import { getInitials } from "../../utils/get-initials";
import { SeverityPill } from "../severity-pill";
import { Grid } from "react-bootstrap";
import { ArrowDropDown } from "@mui/icons-material";

import Menu from "@mui/material/Menu";
import { styled, alpha } from "@mui/material/styles";
import EditIcon from "@mui/icons-material/Edit";
import Divider from "@mui/material/Divider";
import ArchiveIcon from "@mui/icons-material/Archive";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color: theme.palette.mode === "light" ? "rgb(55, 65, 81)" : theme.palette.grey[300],
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity),
      },
    },
  },
}));
export const CustomerListResults = ({ products, ...rest }) => {
  const [selectedCustomerIds, setSelectedCustomerIds] = useState([]);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleSelectAll = (event) => {
    let newSelectedCustomerIds;

    if (event.target.checked) {
      newSelectedCustomerIds = products.map((customer) => customer.id);
    } else {
      newSelectedCustomerIds = [];
    }

    setSelectedCustomerIds(newSelectedCustomerIds);
  };

  const handleSelectOne = (event, id) => {
    const selectedIndex = selectedCustomerIds.indexOf(id);
    let newSelectedCustomerIds = [];

    if (selectedIndex === -1) {
      newSelectedCustomerIds = newSelectedCustomerIds.concat(selectedCustomerIds, id);
    } else if (selectedIndex === 0) {
      newSelectedCustomerIds = newSelectedCustomerIds.concat(selectedCustomerIds.slice(1));
    } else if (selectedIndex === selectedCustomerIds.length - 1) {
      newSelectedCustomerIds = newSelectedCustomerIds.concat(selectedCustomerIds.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelectedCustomerIds = newSelectedCustomerIds.concat(
        selectedCustomerIds.slice(0, selectedIndex),
        selectedCustomerIds.slice(selectedIndex + 1)
      );
    }

    setSelectedCustomerIds(newSelectedCustomerIds);
  };

  const handleLimitChange = (event) => {
    setLimit(event.target.value);
  };

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  return (
    <Card {...rest}>
      <PerfectScrollbar>
        <Box sx={{ minWidth: 1050 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Product Name</TableCell>
                <TableCell>Category</TableCell>
                <TableCell>Sub Category</TableCell>
                <TableCell>Variables</TableCell>
                <TableCell>GST</TableCell>
                <TableCell>Veg/Non-veg</TableCell>
                <TableCell>bestSeller</TableCell>
                <TableCell>Chef Special</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {products.map((product) => (
                <TableRow hover key={product._id}>
                  <TableCell>
                    <Box
                      sx={{
                        alignItems: "center",
                        display: "flex",
                      }}
                    >
                      <Avatar src={`https://gravitybites.in${product.image}`} sx={{ mr: 2 }}>
                        {getInitials(product.name)}
                      </Avatar>
                      <Typography color="textPrimary" variant="body1">
                        {product.name}
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>{product.category}</TableCell>
                  <TableCell>{`${product.subcategory}`}</TableCell>
                  <TableCell>
                    {" "}
                    <Button
                      id="demo-customized-button"
                      aria-controls={open ? "demo-customized-menu" : undefined}
                      aria-haspopup="true"
                      aria-expanded={open ? "true" : undefined}
                      variant="contained"
                      disableElevation
                      onClick={handleClick}
                      endIcon={<ArrowDropDown />}
                    >
                      Variable
                    </Button>
                    <StyledMenu
                      id="demo-customized-menu"
                      MenuListProps={{
                        "aria-labelledby": "demo-customized-button",
                      }}
                      anchorEl={anchorEl}
                      open={open}
                      onClose={handleClose}
                    >
                      <Table>
                        <TableHead>
                          <TableRow>
                            <TableCell>Type</TableCell>
                            <TableCell>Price</TableCell>
                            <TableCell>Quantity</TableCell>
                            <TableCell>In stock</TableCell>
                            <TableCell>Discout</TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {product.variable.map((variable) => (
                            <TableRow hover key={variable._id}>
                              <TableCell>{variable.variableName}</TableCell>
                              <TableCell>{variable.price}</TableCell>
                              <TableCell>{variable.qty}</TableCell>
                              <TableCell>{variable.inStock == true ? "Yes" : "No"}</TableCell>
                              <TableCell>{variable.discount}</TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </StyledMenu>
                  </TableCell>

                  <TableCell>{product.gst}</TableCell>
                  <TableCell>
                    {" "}
                    <SeverityPill
                      color={
                        (product.veg == true && "success") ||
                        (product.veg === false && "error") ||
                        "warning"
                      }
                    >
                      {product.veg == true ? "Veg" : "Non-Veg"}
                    </SeverityPill>{" "}
                  </TableCell>
                  <TableCell>
                    <SeverityPill color="warning">
                      {product.bestSeller == true ? "Best Seller" : "No"}
                    </SeverityPill>{" "}
                  </TableCell>
                  <TableCell>
                    <SeverityPill color="warning">
                      {product.chefSpecial == true ? "Special" : "No"}
                    </SeverityPill>{" "}
                  </TableCell>
                  <TableCell>{product.createdAt}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </PerfectScrollbar>
      <TablePagination
        component="div"
        count={products.length}
        onPageChange={handlePageChange}
        onRowsPerPageChange={handleLimitChange}
        page={page}
        rowsPerPage={limit}
        rowsPerPageOptions={[5, 10, 25]}
      />
    </Card>
  );
};

CustomerListResults.propTypes = {
  products: PropTypes.array.isRequired,
};
