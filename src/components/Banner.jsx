import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import b from "../../public/b.jpg";

function Banner() {
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleRegister = () => {
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!email) {
      setErrorMessage("Email is required.");
    } else if (!emailRegex.test(email)) {
      setErrorMessage("Please enter a valid email address.");
    } else {
      setErrorMessage("");
      navigate("/Signup"); // Navigate to the signup page
    }
  };

  return (
    <>
      <div className="max-w-screen-2x1 container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10">
        <div className="order-1 md:order-2 w-full md:w-1/2">
          <img src={b} className="w-88 h-82 mt-20 md:ml-9 md:mt-20" alt="Bookverse Banner" />
        </div>
        <div className="order-2 md:order-1 w-full md:w-1/2 mt-12 md:mt-32">
          <div className="space-y-12">
            <h1 className="text-4xl font-bold">
              Welcome to Bookverse where every book opens a new,  
              <span className="text-blue-700">Universe.</span>
            </h1>
            <p className="text-xl">
              Welcome to Bookverse, where every book opens a new universe. At Bookverse, 
              we’re dedicated to expanding your horizons with a rich collection that goes beyond ordinary reading. 
              Dive into a world of research papers by leading computer scientists, cutting-edge books on technology, 
              and insightful guides on personality development.      
              <span className="text-blue-700">Explore Bookverse today and unlock a universe of knowledge and growth.</span>
            </p>
          </div>
          <label className="input input-bordered flex items-center gap-2 mt-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-100"
            >
              <path
                d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z"
              />
              <path
                d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z"
              />
            </svg>
            <input
              type="text"
              className="grow"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>

          {errorMessage && <p className="text-red-500 mt-2">{errorMessage}</p>} {/* Show error message if needed */}

          <button
            className="btn btn-active btn-primary btn-color-blue700 mt-3 md:mt-5"
            onClick={handleRegister}
          >
            Register
          </button>
        </div>
      </div>
    </>
  );
}

export default Banner;
