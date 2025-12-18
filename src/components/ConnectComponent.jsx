import React, { useState } from "react";

function ConnectComponent() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
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
    <div className="flex flex-col font-family-RoobertMedium lg:flex-row gap-8 max-w-400 px-4 sm:px-6 lg:px-8 m-auto py-12 overflow-hidden">
      <div className="w-full lg:w-1/2 flex flex-col justify-center">
        <p className="mb-4 text-3xl font-bold text-gray-800 md:text-5xl lg:text-6xl">
          Let’s Connect
        </p>
        <p className="text-gray-600 text-base md:text-lg lg:text-xl">
          Have a question about the platform, a partnership idea, or just want
          to say hello? We’d love to hear from you.
        </p>
      </div>

      <div
        className="w-full lg:w-1/2 bg-primary border-b-gray-500 rounded-2xl  p-8 transition-transform duration-700 ease-out hover:scale-103"
        style={{
          boxShadow: "35px 15px 35px 10px rgba(0.3, 0, 0, 0.2)",
        }}
      >
        <div className="space-y-6">
          <div className="w-full flex flex-col justify-center px-4 py-2 rounded-lg border-2 border-[#D7D7D7] bg-[#F6F6F6] focus:border-white focus:outline-none transition-colors">
            <label className="text-[#8690A4]">First Name</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="Joseph"
              className="w-full rounded-lg  placeholder-black border-2  border-none focus:outline-none transition-colors"
            />
          </div>

          <div className="w-full flex flex-col justify-center px-4 py-2 rounded-lg border-2 border-[#D7D7D7] bg-[#F6F6F6] focus:border-white focus:outline-none transition-colors">
            <label className="text-[#8690A4]">Last Name</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Obi"
              className="w-full rounded-lg  placeholder-black border-2  border-none focus:outline-none transition-colors"
            />
          </div>

          <div className="w-full flex flex-col justify-center px-4 py-2 rounded-lg border-2 border-[#D7D7D7] bg-[#F6F6F6] focus:border-white focus:outline-none transition-colors">
            <label className="text-[#8690A4]">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Joeobil@icloud.com"
              className="w-full rounded-lg  placeholder-black border-2  border-none focus:outline-none transition-colors"
            />
          </div>

          <div>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows="4"
              className="w-full px-4 py-3 rounded-lg border-2 border-transparent bg-[#F6F6F6] focus:border-white focus:outline-none transition-colors resize-none"
            />
          </div>

          <button
            onClick={handleSubmit}
            className="w-full bg-secondary text-primary font-semibold px-6 py-3 rounded-4xl hover:text-secondary hover:bg-gray-100 transition-colors duration-300 shadow-md"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default ConnectComponent;
