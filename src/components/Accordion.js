import React, { useState } from "react";
import { IoIosArrowDropdown, IoIosArrowDropup } from "react-icons/io";

import "../styles/main.css";
import "../styles/faq.css";

export default function Accordion({ title, content, quickAns }) {
  const [isActive, setIsActive] = useState(false);
  return (
    <>
      <div
        className="btn active accordion"
        style={{
          cursor: "pointer",
          minWidth: "200px",
          width: "50%",
          textAlign: "left",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderRadius: "20px",
        }}
        onClick={() => {
          if (isActive) {
            setIsActive(false);
          } else {
            setIsActive(true);
          }
        }}
      >
        <div style={{ width: "90%" }}>
          <p className="accordion">
            {title}
            <br />
            <span className="accordion-sub">
              {quickAns}
              <br />
            </span>
            {isActive && (
              <span
                className="accordion-sub accordion-content"
                style={{ color: "white" }}
              >
                {content}
              </span>
            )}
          </p>
        </div>
        {isActive ? (
          <IoIosArrowDropup className="accordion-btn" size={24} />
        ) : (
          <IoIosArrowDropdown
            className="accordion-btn"
            size={24}
            style={{ fill: "white" }}
          />
        )}
      </div>
    </>
  );
}
