import React from "react";
import { Button } from "@mui/material";
import Box from "@material-ui/core/Box";
import GoogleIcon from "@mui/icons-material/Google";

export default function LoginPage() {
  return (
    <React.Fragment>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
        component="div"
      >
        <Button variant="outlined" color="error">
          <GoogleIcon style={{ marginRight: ".6rem" }} /> LOGIN WITH GOOGLE{" "}
        </Button>
      </Box>
    </React.Fragment>
  );
}
