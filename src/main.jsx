import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

import Home from "./pages/Home.jsx";
import About from "./pages/AboutPage.jsx";
import Privacy from "./pages/PrivacyPage.jsx";
import Terms from "./pages/TermsAndConditions.jsx";
import Cookie from "./pages/Cookie.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import CaseStudies from "./pages/CaseStudies.jsx";
import Solutions from "./pages/Solutions.jsx";
import Resources from "./pages/Resources.jsx";
import Login from "./pages/LoginPage.jsx";
import SignUpPage from "./pages/SignUpPage.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Add more routes here */}
        <Route path="/about" element={<About />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/cookie" element={<Cookie />} />
        <Route path="/case" element={<CaseStudies />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
