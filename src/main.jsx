import { StrictMode, lazy, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

import ScrollToTop from "./components/ScrollToTop.jsx";

// Lazy load all page components
const Home = lazy(() => import("./pages/Home.jsx"));
const About = lazy(() => import("./pages/AboutPage.jsx"));
const Privacy = lazy(() => import("./pages/PrivacyPage.jsx"));
const Terms = lazy(() => import("./pages/TermsAndConditions.jsx"));
const Cookie = lazy(() => import("./pages/Cookie.jsx"));
const CaseStudies = lazy(() => import("./pages/CaseStudies.jsx"));
const Solutions = lazy(() => import("./pages/Solutions.jsx"));
const Resources = lazy(() => import("./pages/Resources.jsx"));
const Login = lazy(() => import("./pages/LoginPage.jsx"));
const SignUpPage = lazy(() => import("./pages/SignUpPage.jsx"));

// Loading component
const LoadingFallback = () => (
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
    }}
  >
    Loading...
  </div>
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <Suspense fallback={<LoadingFallback />}>
        <Routes>
          <Route path="/" element={<Home />} />
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
      </Suspense>
    </BrowserRouter>
  </StrictMode>
);
