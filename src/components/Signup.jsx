import React from "react";
import { Link } from "react-router-dom";
import Login from "./Login";
import { useForm } from "react-hook-form";

function Signup() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  // Watching the password field to compare with confirmPassword
  const password = watch("password");

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <div className="border-2 shadow-lg p-6 rounded-lg bg-white max-w-md">
        <h3 className="font-bold text-xl text-center text-gray-800">Welcome to Bookverse</h3>
        <p className="py-2 text-center text-gray-600">Create your account and enter the universe of wisdom</p>

        {/* Correctly use form and onSubmit */}
        <form onSubmit={handleSubmit(onSubmit)}>

          <div className="mt-6">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              placeholder="Enter Your Email"
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              {...register("email", { required: "Email is required" })}
            />
            {errors.email && (
              <span className="text-red-600 text-sm">{errors.email.message}</span>
            )}
          </div>

          <div className="mt-4">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              placeholder="Enter Your Password"
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              {...register("password", { required: "Password is required" })}
            />
            {errors.password && (
              <span className="text-red-600 text-sm">{errors.password.message}</span>
            )}
          </div>

          <div className="mt-4">
            <label className="block text-gray-700">Confirm Password</label>
            <input
              type="password"
              placeholder="Confirm Your Password"
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              {...register("confirmPassword", {
                required: "Confirm your password",
                validate: (value) => value === password || "Passwords do not match",
              })}
            />
            {errors.confirmPassword && (
              <span className="text-red-600 text-sm">{errors.confirmPassword.message}</span>
            )}
          </div>

          <div className="flex justify-between items-center mt-6">
            <button type="submit" className="bg-blue-700 text-white py-2 px-4 rounded-lg hover:bg-blue-800 transition duration-300">
              Signup
            </button>
            <p className="text-sm text-gray-600">
              Already have an account?{" "}
              <button
                type="button"
                className="underline text-blue-700 hover:text-blue-900"
                onClick={() => document.getElementById("my_modal_3").showModal()}
              >
                Login!
              </button>
            </p>
          </div>
        </form>
      </div>

      <Login />
    </div>
  );
}

export default Signup;
