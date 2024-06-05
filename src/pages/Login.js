import React from "react";
import "./styles/login.css";
import FormLogin from "../components/FormLogin";

export default function Login() {
  return (
    <div className="login">
      <div className="overlay">
        <div className="boxform">
          <FormLogin />
        </div>
      </div>
    </div>
  );
}
