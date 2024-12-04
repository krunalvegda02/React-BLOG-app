import React, { useState } from "react";
import authService from "../appwrite/auth";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../redux/authSlice";
import { Btn, Input, Loading, AuthLogo } from "./index";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";

function SignupComponent() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [error, setError] = useState("");
  const [loading, setloading] = useState(false);

  const { register, handleSubmit } = useForm();

  const createAcc = async (data) => {
    setError("");
    setloading(true);
    try {
      const userData = await authService.createAccount(data);
      if (userData) {
        const userData = await authService.getCurrentUser();
        if (userData) dispatch(login(userData));
        navigate("/");
      }
    } catch (e) {
      setError(e?.message);
      setloading(false);
    } finally {
      setloading(false);
    }
  };

  // console.log("error",e.message);

  return (
    <div className="flex items-center justify-center">
      {loading ? (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-10">
          <Loading />
        </div>
      ) : null}
      <div
        className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}
      >
        <div className="mb-2 flex justify-center">
        <Link to="/">
              <AuthLogo  w={200} />
       </Link>
        </div>
        <h2 className="text-center text-2xl font-bold leading-tight">
          SignUp to create an account!
        </h2>
        <p className="text-center mt-2 text-base text-black/60">
          Already have an account?&nbsp;
          <Link
            to="/login"
            className="font-medium text-primary transition-all duration-200 hover:underline"
          >
            Sign In
          </Link>
        </p>
        {error && <p className="text-red-600 mt-8 text-center">{error}</p>}

        <form onSubmit={handleSubmit(createAcc)}>
          <div className="space-y-5">
            <Input
              placeholder="Enter Your Name"
              label="Full Name: "
              {...register("name", {
                required: true,
              })}
            />
            <Input
              label="Email:"
              placeholder="Enter your email"
              type="email"
              {...register("email", {
                required: true,
                validate: {
                  matchPatern: (value) =>
                    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
                      value
                    ) || "Email address must be a valid adddress",
                },
              })}
            />
            <Input
              label="Password:"
              type="password"
              placeholder="Enter your password"
              {...register("password", {
                required: true,
              })}
            />
            <Btn type="submit" className="w-full">
              "Create Account"
            </Btn>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignupComponent;
