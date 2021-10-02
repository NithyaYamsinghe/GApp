import React from "react";
import GoogleLogin from "react-google-login";
import { useAuth } from "../../context/Context";

const LoginForm = () => {
  // const responseGoogle = (response) => {
  //   console.log(response);
  //   console.log(response.profileObj);
  // };
  const { responseGoogle, email } = useAuth();
  return (
    <div>
      <GoogleLogin
        clientId="994172784584-j10p790442ks2msidqrseecjtu1lh622.apps.googleusercontent.com"
        buttonText="LoginWithGoogle"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={"single_host_origin"}
      />
      <p>{email}</p>
    </div>
  );
};

export default LoginForm;
