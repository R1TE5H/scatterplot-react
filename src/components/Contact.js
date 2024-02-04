/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaDiscord, FaXTwitter } from "react-icons/fa6";

export default function Contact() {
  return (
    <div
      className="center"
      style={{
        position: "fixed",
        width: "fit-content",
        height: "110px",
        right: "1%",
        bottom: "2%",
        justifyContent: "space-evenly",
        flexDirection: "column",
      }}
    >
      <a href="https://twitter.com/?lang=en" target="_blank">
        <FaXTwitter size={30} className="socialMedia" />
      </a>
      <a href="https://www.linkedin.com/" target="_blank">
        <FaLinkedinIn size={30} className="socialMedia" />
      </a>
      <a href="https://www.instagram.com/" target="_blank">
        <FaInstagram size={30} className="socialMedia" />
      </a>
      <a href="https://www.discord.com/" target="_blank">
        <FaDiscord size={34} className="socialMedia" />
      </a>
    </div>
  );
}
