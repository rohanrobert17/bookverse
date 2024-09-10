import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    document.getElementById("my_modal_3").close();
  };

  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box p-8 bg-white shadow-xl rounded-lg max-w-md">
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Close button */}
            <button
              type="button"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-gray-400 hover:text-red-600"
              onClick={() => document.getElementById("my_modal_3").close()}
            >
              ✕
            </button>
            <h3 className="font-bold text-2xl text-gray-800 mb-4">Welcome Back to Bookverse</h3>
            <p className="text-gray-600 mb-6">Log in to explore the Universe of wisdom</p>
            
            <div className="space-y-4">
              <div>
                <label className="block text-gray-700 font-medium">Email</label>
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <span className="text-red-600 text-sm">Email is required</span>
                )}
              </div>

              <div>
                <label className="block text-gray-700 font-medium">Password</label>
                <input
                  type="password"
                  placeholder="Enter Your Password"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  {...register("password", { required: true })}
                />
                {errors.password && (
                  <span className="text-red-600 text-sm">Password is required</span>
                )}
              </div>
            </div>

            <div className="mt-6 flex items-center justify-between">
              <button
                type="submit"
                className="bg-blue-600 text-white rounded-md px-6 py-2 hover:bg-blue-800 transition-colors duration-300"
              >
                Login
              </button>
              <p className="text-sm text-gray-600">
                Not registered?{" "}
                <Link to="/Signup" className="underline text-blue-600 hover:text-blue-800">
                  Signup!
                </Link>
              </p>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
}

export default Login;
