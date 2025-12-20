import React from "react";
import Navbar from "../components/Navbar";
import SignUp from "../components/SignUp";
function SignUpPage() {
  return (
    <div className="min-h-screen relative">
      <div
        className="absolute inset-0 pointer-events-none -z-10"
        style={{
          backgroundColor: "#8690A4",
          backgroundImage: `
        linear-gradient(to right, white 1px, transparent 1px),
        linear-gradient(to bottom, white 1px, transparent 1px)
      `,
          backgroundSize: "60px 60px",
          maskImage:
            "linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(1, 1, 1, 1) 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, rgba(0, 0, 0, 0) 10%, rgba(1, 1, 1, 1) 100%)",
        }}
      />
      <Navbar />
      <div className="min-h-screen w-full flex justify-center items-center">
        <SignUp />
      </div>
    </div>
  );
}

export default SignUpPage;
