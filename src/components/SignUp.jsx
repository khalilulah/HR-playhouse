import React, { useState } from "react";

function SignUp() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
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
    <div className="w-100 text-sm sm:text-base  sm:w-110 md:w-130  bg-primary p-10 font-family-SatoshiMedium rounded-2xl relative z-10">
      <div>
        <p className="text-secondary font-bold text-3xl">Create Your Account</p>
        <p className="text-primary-text">
          Free access. No credit card required.
        </p>
      </div>

      <div className="space-y-6 my-6">
        <div className="w-full flex flex-col justify-center px-4 py-2 rounded-xl border-2 border-[#D7D7D7] bg-[#F6F6F6] focus:border-white focus:outline-none transition-colors">
          <label className="text-[#8690A4]">Full Name</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Enter your name"
            className="w-full placeholder-black border-2  border-none focus:outline-none transition-colors"
          />
        </div>
        <div className="w-full flex flex-col justify-center px-4 py-2 rounded-xl border-2 border-[#D7D7D7] bg-[#F6F6F6] focus:border-white focus:outline-none transition-colors">
          <label className="text-[#8690A4]">Work Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your Email"
            className="w-full   placeholder-black border-2  border-none focus:outline-none transition-colors"
          />
        </div>
        <div className="w-full flex flex-col  justify-center px-4 py-2 rounded-xl border-2 border-[#D7D7D7] bg-[#F6F6F6] focus:border-white focus:outline-none transition-colors">
          <label className="text-[#8690A4]">Create your password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="•••••••••••••••"
            className="w-full placeholder-black border-2  border-none focus:outline-none transition-colors"
          />
        </div>
        <div className="w-full flex flex-col justify-center px-4 py-2 rounded-xl border-2 border-[#D7D7D7] bg-[#F6F6F6] focus:border-white focus:outline-none transition-colors">
          <label className="text-[#8690A4]">Confirm your password</label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="•••••••••••••••"
            className="w-full placeholder-black border-2  border-none focus:outline-none transition-colors"
          />
        </div>
      </div>
      <div className="space-y-4">
        <button
          onClick={handleSubmit}
          className="w-full bg-secondary-50 text-secondary  px-6 py-3 rounded-4xl  hover:scale-103 transition duration-400 ease-out hover:cursor-pointer "
        >
          Signup
        </button>
      </div>
      <p className="text-primary-text text-center mt-5">
        Already have an account?
        <span className="text-secondary font-bold hover:cursor-pointer">
          {" "}
          Login
        </span>
      </p>
    </div>
  );
}

export default SignUp;
