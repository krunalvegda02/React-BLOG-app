import React from "react";
import LoginComponent from "../components/LoginComponent";

function Login() {
  console.log("Login component rendered");
  
  return (
    <div className="py-8">
      <LoginComponent />
    </div>
  );
}

export default Login;
