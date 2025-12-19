import React from "react";
import Navbar from "../components/Navbar";
import PrivacyHero from "../components/PrivacyHero";
import PolicyNote from "../components/PolicyNote";
import ExploreComponent from "../components/ExploreComponent";
import Footer from "../components/Footer";
import CookieHero from "../components/CookieHero";

function Cookie() {
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
      <CookieHero />
      <PolicyNote />
      <div className="bg-secondary">
        <ExploreComponent />
      </div>
      <Footer />
    </div>
  );
}

export default Cookie;
