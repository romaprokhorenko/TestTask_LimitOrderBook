import React from "react";
import "./Login.css";

export const LoginPage: React.FC = ({}) => {
  const loginByUsername = () => {
    const username = (
      document.getElementById("username") as HTMLInputElement | null
    )?.value;
    localStorage.setItem("username", username ? username : "");
  };
  return (
    <>
      <label htmlFor="">Username</label>
      <input type="text" id="username" />
      <button onClick={loginByUsername}>Log in</button>
    </>
  );
};
