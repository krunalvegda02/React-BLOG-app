import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import authService from "../appwrite/auth";
import { login as storeLogin } from "../redux/authSlice";
import { Btn, Input, Logo, Loading } from "./index";

function LoginComponent() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { register, handleSubmit, formState: { errors } } = useForm(); // Destructure errors here
  const [error, setError] = useState("");
  const [loading,setloading] = useState(false);

  const login = async (data) => {
    setloading(true);
    setError("");
    try {
      const session = await authService.login(data);
      if (session) {
        const userData = await authService.getCurrentUser();
        if (userData) {
          dispatch(storeLogin(userData));
          navigate("/");
        }
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="flex items-center justify-center w-full bg-">
      <div
        className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl
             p-10 border border-black/10`}
      >
        <div className="mb-2 flex justify-center">
          <span className="inline-block w-full max-w-[100px]">
            <Logo width="100%" />
          </span>
        </div>
        <h2 className="text-center text-2xl font-bold leading-tight">
          Sign in to your account!
        </h2>
        <p className="mt-2 text-center text-base text-black/60">
          Don&apos; t have any account?&nbsp;
          <Link
            to="/signup"
            className="font-medium text-primary transition-all duration-200 hover:underline"
          >
            Sign Up
          </Link>
        </p>
        {error && <p className="text-red-600 mt-8 text-center"> {error} </p>}

        <form onSubmit={handleSubmit(login)} className="mt-8">
          <div className="space-y-5">
            {/* Email Field with validation */}
            <Input
              label="Email:"
              placeholder="Enter your email"
              type="email"
              {...register("email", {
                required: "Email is required", // Custom error message
                validate: {
                  matchPatern: (value) =>
                    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value) ||
                    "Email address must be a valid address",
                },
              })}
            />
            {/* Display error message for email */}
            {errors.email && <p className="text-red-600">{errors.email.message}</p>}

            {/* Password Field */}
            <Input
              label="Password:"
              type="password"
              placeholder="Enter your password"
              {...register("password", {
                required: "Password is required",
              })}
            />
            {/* Display error message for password */}
            {errors.password && <p className="text-red-600">{errors.password.message}</p>}

            {/* Sign In Button */}
            <Btn type="submit" className="w-full rounded-lg">
              { loading ? <Loading /> : "Sign in" }
            </Btn>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginComponent;
