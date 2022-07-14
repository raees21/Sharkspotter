import fetch from 'node-fetch';

const client_secret = process.env.REACT_APP_CLIENT_SECRET;
let accessToken = '';
let expiresIn = 0;

export function useAuth() {
  const getAuthCode = async () => {
    const method = 'GET';
    const endpoint = `https://localhost:7213/Authorization/Token/${client_secret}`
    const headers = {'content-type': 'application/json' };

    const response = await fetch(endpoint, { method, headers });
    const authRequest = await response.json();
    return authRequest;
  };

  const hasTokenExpired = (exp) => {
    return Date.now() >= exp;
  };

  const getAccessToken = async () => { 
    if (hasTokenExpired(expiresIn)) {
      const authCode = await getAuthCode();
      accessToken = Object.keys(authCode)[0];
      const expires_in = Object.values(authCode)[0];
      expiresIn = Date.now() + expires_in; 
      console.log(accessToken, expires_in);
      return accessToken;
    }
    return accessToken;
  };

  return { getAccessToken };
};
