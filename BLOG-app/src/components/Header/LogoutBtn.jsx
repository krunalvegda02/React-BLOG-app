import React from "react";
import { useDispatch } from "react-redux";
import authService from "../../appwrite/auth";
import { logout } from "../../redux/authSlice";
import { useNavigate } from "react-router";

function LogoutBtn({ setLoading }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = async () => {
    try {
      setLoading(true);
      await authService.logout();
      dispatch(logout());
      navigate("/");
    } catch (error) {
      console.log("Error during logout:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={logoutHandler}
      className="inline-block px-3 duration-200  hover:bg-red-200 rounded-full text-red-600 text-2xl font-medium"
    >
      Log out!
    </button>
  );
}

export default LogoutBtn;
