/* eslint-disable*/
import '@babel/polyfill';
import { showAlert } from './alerts';
import axios from 'axios';
export const login = async (email, password) => {
  console.log('-----------------Login triggered-------------');
  try {
    const res = await axios({
      method: 'POST',
      url: 'http://127.0.0.1:3000/api/v1/users/login',
      data: {
        email,
        password,
      },
    });
    console.log('RES:', res);
    console.log('RES DATA:', res.data);
    if (res.statusText === 'OK') {
      showAlert('success', 'Logged in successfully!');
      window.setTimeout(() => {
        location.assign('/');
      }, 1500);
    }
  } catch (err) {
    console.log(err);
    showAlert('error', err.response.data.message);
  }
};

export const logout = async () => {
  console.log('Logout function triggered');
  try {
    const res = await axios({
      method: 'GET',
      url: 'http://127.0.0.1:3000/api/v1/users/logout',
    });
    console.log(res);
    if (res.statusText === 'OK') {
      showAlert('success', 'Successfully logout');
      // window.setTimeout(() => {
      // location.reload(true);
      // }, 1500);
      // window.setTimeout(() => {
      //   location.assign('/');
      // }, 1500);
      window.location.href = '/login';
    }
  } catch (err) {
    console.error('Logout error:', err);
    showAlert('error', 'Error logging out! Try again!');
  }
};
