import {
  Box,
  Button,
  Card,
  CardContent,
  TextField,
  InputAdornment,
  SvgIcon,
  Typography,
  Alert
} from "@mui/material";
import Modal from "@mui/material/Modal";
import React,{useState} from "react";
import { Download as DownloadIcon } from "../../icons/download";
import { Search as SearchIcon } from "../../icons/search";
import { Upload as UploadIcon } from "../../icons/upload";
import CreateProduct from "../addProductInput";
import ProductInput from "../addProductInput";
export const ProductListToolbar = (props) => {
  const [msg,setMsg]=useState("")
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",

    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  console.log(props);
  return (
    <Box {...props}>
      <Box
        sx={{
          alignItems: "center",
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          m: -1,
        }}
      >
        <Typography sx={{ m: 1 }} variant="h4">
          Products
          {msg != "" ? <Alert severity="success">{msg}</Alert> : ""}
        </Typography>
        <Box sx={{ m: 1 }}>
          <Button color="primary" variant="contained" onClick={handleOpen}>
            Add products
          </Button>
          <Modal
            style={{
              position: "absolute",
              marginTop: "30px",
              overflow: "scroll",
              height: "100vh",
            }}
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <CreateProduct onclose={handleClose} sendMessage={setMsg}/>
            </Box>
          </Modal>
        </Box>
      </Box>
    </Box>
  );
};
