import React from "react";
import { Button } from "@mui/material";
import Box from "@material-ui/core/Box";
import GoogleIcon from "@mui/icons-material/Google";

const LoginForm = () => {
  return (
    <div>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
        component="div"
      >
        <a
          href="https://accounts.google.com/o/oauth2/v2/auth/oauthchooseaccount?redirect_uri=http://localhost:3000/redirect&prompt=consent&response_type=code&client_id=994172784584-j10p790442ks2msidqrseecjtu1lh622.apps.googleusercontent.com&scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fdrive&access_type=offline&flowName=GeneralOAuthFlow"
          target="_blank"
          rel="noreferrer"
        >
          <Button variant="outlined" color="error">
            <GoogleIcon style={{ marginRight: ".6rem" }} /> LOGIN WITH GOOGLE{" "}
          </Button>
        </a>
      </Box>

      <p>locals{localStorage.getItem("code")}</p>
    </div>
  );
};

export default LoginForm;
