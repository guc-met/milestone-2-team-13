import axios from 'axios';

//login
export const onLogin = payload => {
  const URL = 'http://localhost:4000/general/login';
  return axios(URL, {
    method: 'POST',
    headers: {
      'content-type': 'application/json', // whatever you want
    },
    data: payload,
  })
    .then(response => response.headers['auth-token'])
    .catch(error => {
      throw error;
    });
};

export const onLogout = payload => {
  const URL = 'http://localhost:4000/staff/logout';
  return axios(URL, {
    method: 'POST',
    headers: {
      'content-type': 'application/json', // whatever you want
    },
  })
    .then(response => response)
    .catch(error => {
      throw error;
    });
};

//refresh token
export const onTokenExpire = payload => {
  const URL = 'http://localhost:4000/general/refresh-token';
  return axios(URL, {
    method: 'POST',
    headers: {
      'content-type': 'application/json', // whatever you want
    },
    data: payload,
  })
    .then(response => response.headers['auth-token'])
    .catch(error => {
      throw error;
    });
};