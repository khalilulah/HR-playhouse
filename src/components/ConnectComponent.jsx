import React, { useState, useEffect, useRef } from "react";

function ConnectComponent() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

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
    <div
      id="contact-us"
      ref={sectionRef}
      className="flex flex-col font-family-RoobertMedium lg:flex-row gap-8 max-w-400 px-4 sm:px-6 lg:px-8 m-auto py-12 overflow-hidden"
    >
      <div
        className={`w-full lg:w-1/2 flex flex-col justify-center transition-all duration-700 ${
          isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
        }`}
      >
        <p className="mb-4 text-3xl font-bold text-gray-800 md:text-5xl lg:text-6xl">
          Let's Connect
        </p>
        <p className="text-gray-600 text-base sm:text-lg">
          Have a question about the platform, a partnership idea, or just want
          to say hello? We'd love to hear from you.
        </p>
      </div>

      <div
        className={`w-full lg:w-1/2 bg-primary border-b-gray-500 rounded-2xl p-8 transition-all duration-700 delay-200 hover:scale-103 ${
          isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
        }`}
        style={{
          boxShadow: "35px 15px 35px 10px rgba(0.3, 0, 0, 0.2)",
        }}
      >
        <div className="space-y-6">
          <div
            className={`w-full flex flex-col justify-center px-4 py-2 rounded-lg border-2 border-[#D7D7D7] bg-[#F6F6F6] focus-within:border-gray-400 transition-all duration-300 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-5"
            }`}
            style={{ transitionDelay: "400ms" }}
          >
            <label className="text-[#8690A4]">First Name</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="Joseph"
              className="w-full placeholder-black bg-transparent border-none focus:outline-none transition-colors"
            />
          </div>

          <div
            className={`w-full flex flex-col justify-center px-4 py-2 rounded-lg border-2 border-[#D7D7D7] bg-[#F6F6F6] focus-within:border-gray-400 transition-all duration-300 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-5"
            }`}
            style={{ transitionDelay: "500ms" }}
          >
            <label className="text-[#8690A4]">Last Name</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Obi"
              className="w-full placeholder-black bg-transparent border-none focus:outline-none transition-colors"
            />
          </div>

          <div
            className={`w-full flex flex-col justify-center px-4 py-2 rounded-lg border-2 border-[#D7D7D7] bg-[#F6F6F6] focus-within:border-gray-400 transition-all duration-300 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-5"
            }`}
            style={{ transitionDelay: "600ms" }}
          >
            <label className="text-[#8690A4]">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Joeobil@icloud.com"
              className="w-full placeholder-black bg-transparent border-none focus:outline-none transition-colors"
            />
          </div>

          <div
            className={`transition-all duration-300 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-5"
            }`}
            style={{ transitionDelay: "700ms" }}
          >
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows="4"
              className="w-full px-4 py-3 rounded-lg border-2 border-[#D7D7D7] bg-[#F6F6F6] focus:border-gray-400 focus:outline-none transition-colors resize-none"
            />
          </div>

          <button
            onClick={handleSubmit}
            className={`w-full bg-secondary text-primary font-semibold px-6 py-3 rounded-4xl hover:text-secondary hover:bg-gray-100 transition-all duration-300 shadow-md hover:shadow-lg ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-5"
            }`}
            style={{ transitionDelay: "800ms" }}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default ConnectComponent;
