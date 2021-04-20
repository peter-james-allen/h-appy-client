import {useState, useEffect } from 'react';
import { showMessage, hideMessage } from "react-native-flash-message";
import fetch from 'node-fetch';

export default sendAuthenticationData = async (emailData, passwordData, navigation) => {
      let response = await fetch('http://localhost:3000/user/login', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: emailData,
        password: passwordData,
      })
    });
      let json = await response.json();
      validation(json, navigation);
    };
    
 const validation = (response, navigation) => {
   if (response.user) {
     showMessage({
       message: "Sign in successful",
       description: `Welcome back to H-Appy, ${response.user.name}!`,
       type: "success",
     });
     navigation.navigate('Menu')
   } else {
      showMessage({
        message: "Authentication failed",
        description: "Those details don't match our records",
        type: "error",
      });
    }
  };
 