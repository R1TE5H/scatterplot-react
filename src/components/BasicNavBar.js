import React from "react";
import "../styles/main.css";
import { Link } from "react-router-dom";

export default function BasicNavBar() {
  return (
    <div
      className="center"
      style={{
        height: "70px",
        width: "100%",
        position: "fixed",
        alignContent: "center",
        justifyContent: "space-between",
        zIndex: "10",
        transition: "top 0.3s",
      }}
    >
      <div>
        <Link
          to="/"
          translate="no"
          lang="en"
          style={{
            fontSize: "18px",
            fontWeight: "bold",
            paddingLeft: "30px",
            color: "#fff",
            textDecoration: "none",
          }}
        >
          scatterplot
        </Link>
      </div>

      <div
        className="center"
        style={{
          gap: "30px",
          color: "#fff",
          fontSize: `calc(14px + 0.1vw)`,
          paddingRight: "30px",
        }}
      >
        <Link to="/docs" style={{ color: "white", textDecoration: "none" }}>
          Documentation
        </Link>
        <Link to="/faqs" style={{ color: "white", textDecoration: "none" }}>
          FAQ
        </Link>
      </div>
    </div>
  );
}
