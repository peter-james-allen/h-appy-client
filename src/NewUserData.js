import useState from 'react';
import fetch from 'node-fetch';

export default function NewUserData(props) {
  const { nameData, usernameData, emailData, passwordData } = props;

  fetch('https://happy-haddocks.herokuapp.com/user', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: { nameData },
      username: { usernameData },
      email: { emailData },
      password: { passwordData },
    })
  });
}