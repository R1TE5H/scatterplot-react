import React, { useState } from "react";

export default function Accordion({ title, content }) {
  const [isActive, setIsActive] = useState(false);
  return (
    <>
      <div
        style={{
          textAlign: "left",
          cursor: "pointer",
          minWidth: "200px",
          width: "50%",
          maxWidth: "1000px",
          border: "2px solid white",
          marginBottom: "50px",
          padding: "0.5%",
          borderRadius: "20px",
        }}
      >
        <div
          className="subHero"
          style={{ color: "#fff", fontSize: `calc(14px + 1vw)` }}
          onClick={() => {
            if (isActive) {
              setIsActive(false);
            } else {
              setIsActive(true);
            }
          }}
        >
          {title}
        </div>

        {isActive && <div style={{ color: "white" }}>{content}</div>}
      </div>
    </>
  );
}
