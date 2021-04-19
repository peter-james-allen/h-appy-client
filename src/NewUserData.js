import {useState, useEffect } from 'react';
import fetch from 'node-fetch';

const sendUserData = async (nameData, usernameData, emailData, passwordData) => {
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
      return json;
    };
    

export default function NewUserData(nameData, usernameData, emailData, passwordData) {
  sendUserData(nameData, usernameData, emailData, passwordData);
}