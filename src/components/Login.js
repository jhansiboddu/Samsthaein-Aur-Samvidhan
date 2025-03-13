import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import '../styles/Login.css';
import email_icon from './images/email.png'
import password_icon from './images/password.png'

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  async function submit(e) {
    e.preventDefault();
    console.log("Attempting login...");
    try {
      const res = await axios.post("http://localhost:5000/adminlogin", {
        username,
        password,
      });
      console.log("Response from server:", res.data);
      if (res.status === 200) {
        const { message, redirectTo } = res.data;
        alert(message); // Show a message, like "Welcome, Admin!"
        // Navigate based on the user's role
        if (redirectTo) {
          navigate(redirectTo);
        }else {
          console.log("Unexpected role or missing redirect path.");
        }
      }else {
        // Handle other unexpected status codes
        alert("Unexpected response from server.");
      }
    } catch (error) {
      console.error("Error during login:", error);
      alert("An error occurred while logging in. Please check the console for details.");
    }
  }
  return (
    <div className="background">
      <div className="login">
        <div className="header">
          <h1>Login</h1>
          <div className="underline"></div>
        </div>
        <form onSubmit={submit}>
          <div className="inputs">
            <div className="input">
              <img src={email_icon} alt="Email Icon"/>
              <input
                 type="username"
                 onChange={(e) => setUsername(e.target.value)}
                 placeholder="Username"
              />
            </div>
            <div className="input">
              <img src={password_icon} alt="Password Icon"/>
              <input
                 type="password"
                 onChange={(e) => setPassword(e.target.value)}
                 placeholder="Password"
              />
            </div>
            <div className="submit-container">
               <input className="submit" type="submit" value="Login" />
            </div> 
      </div>
    </form>
    </div>
  </div>
  );
}

export default Login;
