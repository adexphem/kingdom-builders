import { LOGIN } from "../config/paths";

export const goToLogin = () => {
  return (window.location.href = LOGIN);
};

export const handleLogout = () => {
  console.log("here");
  return goToLogin();
};

export const numberWithCommas = (e) => {
  return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export const removeCommas = (e) => {
  const hasComma = /,/;

  return hasComma.test(e) ? e.replace(/,/g, "") : e;
};

export const removeUnderscore = (e) => {
  return e.replace(/[_-]/g, " ");
};

export const emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const passwordPattern = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
