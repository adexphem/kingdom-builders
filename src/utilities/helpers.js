import { LOGIN } from "../config/paths";

export const goToLogin = () => {
  return (window.location.href = LOGIN);
};

export const handleLogout = () => {
  console.log("here");
  return goToLogin();
};
