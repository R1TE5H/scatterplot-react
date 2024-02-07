import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/landing.css";
import "../styles/main.css";
import SwiperLanding from "../components/SwiperLanding";
import LocationBars from "../components/LocationBars";
import Contact from "../components/Contact";
import StepsCard from "../components/StepsCard";
import toast, { Toaster } from "react-hot-toast";

export default function Landing() {
  const [formData, setFormData] = useState({ name: "", email: "" });

  const handleWaitList = (e) => {
    e.preventDefault();
    console.log(formData);
    toast.success(`Welcome to Scatterplot, ${formData.name}`, {
      style: {
        borderRadius: "10px",
        background: "#212121",
        color: "#fff",
      },
      iconTheme: {
        primary: "#4743ff",
        secondary: "#FFF",
      },
    });
  };

  const waitList = useRef(null);

  const toWaitList = (name) => {
    waitList.current.scrollIntoView();
    console.log(`${name} has been clicked`);
  };

  return (
    <>
      <Contact />
      <Toaster />
      <div className="top-padding gradient-bg">
        <p className="hero">
          Build the World <br />
          <span
            className="subHead"
            style={{ width: "70%", minWidth: "270px", maxWidth: "600px" }}
          >
            Start House Flipping and Cash in on the Real Estate Market
          </span>
        </p>
        <button className="btn" onClick={() => toWaitList("Hero Button")}>
          Join the Wait List
        </button>
      </div>
      <div className="section">
        <p className="hero center">
          Invest With <br />
          Peace of Mind
          <br />
          <span className="subHero">Pick a project and we do the rest</span>
        </p>
        <div className="center">
          <SwiperLanding />
        </div>
      </div>
      <div className="section">
        <p className="hero">
          Maximize Your <br />
          Investments
          <br />
          <span className="subHero" style={{ width: "70%", minWidth: "270px" }}>
            Each project is carefully analyzed to optimize development and
            maximize your profits.
          </span>
        </p>
        <Link to="/docs" className="link btn action">
          Learn More
        </Link>
      </div>
      <div
        className="section"
        style={{
          position: "static",
          right: "0px",
          textAlign: "right",
        }}
      >
        <p className="hero">
          Minimize <br />
          The Risks
          <br />
          <span className="subHero right-text-landing">
            Get in on the action without spending all your savings. Start
            investing for as little as $100.
          </span>
        </p>
        <Link to="/docs" className="link btn action">
          Learn More
        </Link>
      </div>

      <div className="section">
        <p className="hero center">
          How it Works
          <br />
          <span className="subHero center">It's easy</span>
        </p>
        <StepsCard />
      </div>

      <LocationBars />
      <div ref={waitList} className="section" style={{ marginBottom: "5%" }}>
        <p className="hero center">
          Join Us
          <br />
          <span
            className="subHero "
            style={{ width: `clamp(200px, 90%, 1000px)` }}
          >
            Join our Wait List. Get the latest listings and biggest news
            delivered straight to your inbox.
          </span>
        </p>
        <form className="waitList">
          <input
            className="wait-list-input"
            id="wait_list_name"
            placeholder="Enter Your Name"
            required
            type="text"
            onChange={(e) => {
              setFormData({ ...formData, name: e.target.value });
            }}
          />
          <input
            className="wait-list-input"
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
      </div>
    </>
  );
}
