import React from "react";
import Map from "../components/GetStartedMap";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function GetStartedPage() {
  return (
    <div>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
        linear-gradient(to right, rgba(71, 85, 105, 0.08) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(71, 85, 105, 0.09) 1px, transparent 1px)
      `,
          backgroundSize: "60px 60px",
          maskImage:
            "linear-gradient(to bottom, rgba(1, 1, 1, 1) 0%, rgba(0, 0, 0, 0.3) 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, rgba(1  , 1, 1, 1) 0%, rgba(0, 0, 0, 0.3) 100%)",
        }}
      />
      <Navbar />
      <Map />
      <Footer />
    </div>
  );
}

export default GetStartedPage;
