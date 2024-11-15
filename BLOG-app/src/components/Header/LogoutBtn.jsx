import React from "react";
import { useDispatch } from "react-redux";
import authService from "../../appwrite/config_service";
import { logout } from "../../redux/authSlice";

function LogoutBtn() {
  const dispatch = useDispatch();
  const logoutHandler = () => {
    authService.logout().then(() => {
      dispatch(logout());
    });
  };

  return (
    <button className="inline-block px-6 duration-200 hover:bg-blue-100 rounded-full">
      Log out!
    </button>
  );
}

export default LogoutBtn;
