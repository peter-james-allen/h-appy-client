import {useState, useEffect } from 'react';
import { showMessage, hideMessage } from "react-native-flash-message";
import fetch from 'node-fetch';

export default sendUserData = async (nameData, usernameData, emailData, passwordData) => {
      let response = await fetch('http://localhost:3000/user', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: nameData,
        username: usernameData,
        email: emailData,
        password: passwordData,
      })
    });
      let json = await response.json();
      errorMessages(json);
    };
    

 const errorMessages = (response) => {
  if (response.name && response.name === "MongoError") {
    if ("email" in response.keyPattern) {
      showMessage({
        message: "Email in use",
        description: "That email has already been taken",
        type: "error",
      });
    }
    if ("username" in response.keyPattern) {
      showMessage({
        message: "Username in use",
        description: "That username has already been taken",
        type: "error",
      });
    }
  }
  if (response.errors) {
    if (response.errors.email && response.errors.email.name === "ValidatorError") {
      showMessage({
        message: "Email not valid",
        description: "You must submit a valid email",
        type: "error",
      });
    }
    if (response.errors.password && response.errors.password.name === "ValidatorError") {
      showMessage({
        message: "Password too short",
        description: "Your password must be at least 8 characters long",
        type: "error",
      });
    }
  }
 }
