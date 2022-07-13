import fetch from 'node-fetch';

const client_id = process.env.REACT_APP_CLIENT_ID;
const client_secret = process.env.REACT_APP_CLIENT_SECRET;
const baseURL = process.env.REACT_APP_AUTH_DOMAIN;
let accessToken = '';
let expiresIn = 0;

export function useAuth() {
  const getAuthCode = async () => {
    const method = 'POST';
    const endpoint = `${baseURL}/oauth/token`;
    const headers = { 'content-type': 'application/json' };
    const body = {
      client_id,
      client_secret,
      audience: "https://sharkspotterapi.com",
      grant_type: "client_credentials"
    }

    const response = await fetch(endpoint, { method, body, headers });
    const authRequest = await response.json();
    return authRequest;
  };

  const hasTokenExpired = (exp) => {
    return Date.now() >= exp;
  };

  const getAccessToken = async () => { 
    if (hasTokenExpired(expiresIn)) {
      const { access_token, expires_in } = await getAuthCode();
      accessToken = access_token;
      expiresIn = Date.now() + expires_in * 100; // token expire in 24hrs reduced this to hours by * 100
      return accessToken;
    }
    return accessToken;
  };

  return { getAccessToken };
};
