import React from "react";

//Style Import
import "../styles/main.css";

//Image imports
import miami from "../assets/miami2.jpg";
import toronto from "../assets/toronto.jpeg";
import nyc from "../assets/nyc.jpg";
import woods from "../assets/cottage.jpg";
import la from "../assets/la.jpg";
import winter from "../assets/winter.jpg";
import desert from "../assets/desert.jpg";
import regular from "../assets/regular.jpg";
import mountain from "../assets/mountain.jpg";
import niceH from "../assets/nicehouse.jpg";

export default function LocationBars() {
  const locations = [
    {
      id: "miami",
      url: miami,
      height: `calc(300px + 15vw)`,
    },
    {
      id: "toronto",
      url: toronto,
      height: `calc(150px + 15vw)`,
    },

    {
      id: "woods",
      url: woods,
      height: `calc(290px + 15vw)`,
    },
    {
      id: "la",
      url: la,
      height: `calc(265px + 15vw)`,
    },
    {
      id: "winter",
      url: winter,
      height: `calc(190px + 15vw)`,
    },
    {
      id: "desert",
      url: desert,
      height: `calc(150px + 15vw)`,
    },
    {
      id: "niceHouse",
      url: niceH,
      height: `calc(270px + 15vw)`,
    },
    {
      id: "nyc",
      url: nyc,
      height: `calc(200px + 15vw)`,
    },
    {
      id: "regular",
      url: regular,
      height: `calc(110px + 15vw)`,
    },
    {
      id: "mountain",
      url: mountain,
      height: `calc(290px + 15vw)`,
    },
  ];

  return (
    <div
      className="center"
      style={{
        justifyContent: "center",
        gap: "2vw",
      }}
    >
      {locations.map((element) => (
        <div
          key={element.id}
          style={{
            width: "10%",
            height: `${element.height}`,
            borderRadius: "200px",
            background: `url(${element.url})`,
            backgroundSize: "cover",
          }}
        ></div>
      ))}
    </div>
  );
}
