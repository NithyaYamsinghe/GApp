import React from "react";

const LoginForm = () => {
  return (
    <div>
      <a
        href="https://accounts.google.com/o/oauth2/v2/auth/oauthchooseaccount?redirect_uri=http://localhost:3000/redirect&prompt=consent&response_type=code&client_id=994172784584-j10p790442ks2msidqrseecjtu1lh622.apps.googleusercontent.com&scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fdrive&access_type=offline&flowName=GeneralOAuthFlow"
        target="_blank"
        rel="noreferrer"
      >
        <button>Login With Google</button>
      </a>
      <p>locals{localStorage.getItem("code")}</p>
    </div>
  );
};

export default LoginForm;
