import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import reportWebVitals from "./reportWebVitals";
import Landing from "./pages/Landing";
import FAQs from "./pages/FAQs";
import BasicNavBar from "./components/BasicNavBar";
import Documentation from "./pages/Documentation";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <BasicNavBar />
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/faqs" element={<FAQs />} />
      <Route path="/docs" element={<Documentation />} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
