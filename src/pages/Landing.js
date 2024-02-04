import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";

import "../styles/main.css";
import SwiperLanding from "../components/SwiperLanding";
import LocationBars from "../components/LocationBars";
import Contact from "../components/Contact";
import StepsCard from "../components/StepsCard";

export default function Landing() {
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [waitSubmit, setWaitSubmit] = useState(false);

  const handleWaitList = (e) => {
    e.preventDefault();
    console.log(formData);
    setWaitSubmit(true);
  };

  const waitList = useRef(null);

  const toWaitList = (name) => {
    waitList.current.scrollIntoView();
    console.log(`${name} has been clicked`);
  };

  return (
    <>
      <Contact />
      <div
        style={{
          background: `linear-gradient(0deg, #0a0a0a 0%,#4743ff  100%)`,
          height: "45vw",
          paddingTop: "5%",
          minHeight: "600px",
          paddingLeft: "10%",
        }}
      >
        <p className="hero">
          Build the World <br />
          <span style={{ fontSize: `calc(20px + 1vw)`, fontWeight: "bold" }}>
            Start House Flipping and Cash in on the <br /> Real Estate Market
          </span>
        </p>
        <button className="btn" onClick={() => toWaitList("Hero Button")}>
          Join the Wait List
        </button>
      </div>
      <div style={{ marginBottom: "15%" }}>
        <p className="hero center">
          Invest With <br />
          Peace of Mind
          <br />
          <span className="subHero center">
            Pick a project and we do the rest
          </span>
        </p>
        <div className="center">
          <SwiperLanding />
        </div>
      </div>
      <div style={{ marginBottom: "3vw", padding: "0px 10%" }}>
        <p className="hero">
          Maximize Your <br />
          Investments
          <br />
          <span className="subHero">
            Each project is carefully analyzed to <br />
            optimize development and maximize <br />
            your profits
          </span>
        </p>
        <Link to="/docs" className="link btn action">
          Learn More
        </Link>
      </div>
      <div
        style={{
          marginBottom: "15%",
          padding: "0px 10%",
          position: "static",
          right: "0px",
          textAlign: "right",
        }}
      >
        <p className="hero">
          Minimize <br />
          The Risks
          <br />
          <span className="subHero">
            Get in on the action without <br />
            spending all your savings. Start <br />
            investing for as little as $100
          </span>
        </p>
        <Link to="/docs" className="link btn action">
          Learn More
        </Link>
      </div>

      <div style={{ marginBottom: "15%" }}>
        <p className="hero center">
          How it Works
          <br />
          <span className="subHero center">It's easy</span>
        </p>
        <StepsCard />
      </div>

      <LocationBars />
      <div ref={waitList} style={{ marginBottom: "15%" }}>
        <p className="hero center">
          Join Us
          <br />
          <span className="subHero ">
            Join our Wait List. Get the latest listings and <br /> biggest news
            delivered straight to your inbox.
          </span>
        </p>
        <form className="center" style={{ gap: "20px" }}>
          <input
            style={{ fontSize: "20px" }}
            id="wait_list_name"
            placeholder="Enter Your Name"
            required
            type="text"
            onChange={(e) => {
              setFormData({ ...formData, name: e.target.value });
            }}
          />
          <input
            style={{ fontSize: "20px" }}
            id="wait_list_email"
            placeholder="Enter Your Email"
            required
            type="email"
            onChange={(e) => {
              setFormData({ ...formData, email: e.target.value });
            }}
          />
          <button className=" action" onClick={handleWaitList}>
            Join
          </button>
        </form>
        {waitSubmit && (
          <p className="hero underWait center">{`Welcome, ${formData.name}`}</p>
        )}
      </div>
    </>
  );
}
