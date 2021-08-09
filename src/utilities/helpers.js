import { LOGIN } from "../config/paths";

export const goToLogin = () => {
  return (window.location.href = LOGIN);
};

export const handleLogout = () => {
  return goToLogin();
};

export const numberWithCommas = (e) => {
  return e != null || e != undefined ? e.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : e;
};

export const removeCommas = (e) => {
  const hasComma = /,/;

  return hasComma.test(e) ? e.replace(/,/g, "") : e;
};

export const removeUnderscore = (e) => {
  return e.replace(/[_-]/g, " ");
};

/*eslint no-useless-escape: "error"*/
export const emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; //eslint-disable-line

export const passwordPattern = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/; //eslint-disable-line
