import React, { useState } from "react";
import Google from "../assets/images/google.svg";
import Facebook from "../assets/images/facebook.svg";
import { Link } from "react-router-dom";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Form submitted successfully!");
  };
  return (
    <div className="w-82 sm:w-110 md:w-130 text-sm sm:text-base  bg-primary p-10 font-family-SatoshiMedium rounded-2xl relative z-10">
      <div>
        <p className="text-secondary font-bold text-2xl sm:text-3xl">
          Login to Hub
        </p>
        <p className="text-primary-text">Continue your ascent.</p>
      </div>

      <div className="space-y-6 my-6">
        <div className="w-full flex flex-col justify-center px-4 py-2 rounded-xl border-2 border-[#D7D7D7] bg-[#F6F6F6] focus:border-white focus:outline-none transition-colors">
          <label className="text-[#8690A4]">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Joeobil@icloud.com"
            className="w-full   placeholder-black border-2  border-none focus:outline-none transition-colors"
          />
        </div>
        <div className="w-full flex flex-col justify-center px-4 py-2 rounded-xl border-2 border-[#D7D7D7] bg-[#F6F6F6] focus:border-white focus:outline-none transition-colors">
          <label className="text-[#8690A4]">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Your Password"
            className="w-full placeholder-black border-2  border-none focus:outline-none transition-colors"
          />
        </div>
      </div>
      <div className="space-y-4">
        <button
          onClick={handleSubmit}
          className="w-full bg-secondary text-primary  px-6 py-3 rounded-4xl  hover:scale-103 transition duration-400 ease-out hover:cursor-pointer "
        >
          Login
        </button>
        <button
          onClick={handleSubmit}
          className=" flex justify-center w-full gap-3 bg-secondary-50 text-secondary px-6 py-3 rounded-4xl hover:text-secondary hover:scale-103 transition duration-400 ease-out hover:cursor-pointer"
        >
          <img src={Google} alt="logo" className=" " />
          Sign in with Google
        </button>
        <button
          onClick={handleSubmit}
          className="flex justify-center gap-3 w-full bg-secondary-50 text-secondary px-6 py-3 rounded-4xl hover:text-secondary hover:scale-103 transition duration-400 ease-out hover:cursor-pointer "
        >
          <img src={Facebook} alt="logo" className=" " />
          Sign in with Facebook
        </button>
      </div>
      <p className="text-primary-text text-center mt-5">
        Don’t have an account?
        <span className="text-secondary font-bold hover:cursor-pointer">
          {" "}
          <Link to="/signup">SignUp</Link>
        </span>
      </p>
    </div>
  );
}

export default Login;
