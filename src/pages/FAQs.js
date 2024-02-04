import React, { useState } from "react";
import "../styles/faq.css";
import Contact from "./../components/Contact";
import Accordion from "../components/Accordion";

export default function FAQs() {
  const [faq, setFaq] = useState("");
  // List of words from their query. If it matches an FAQ's key words the FAQ wil be brought to the top
  const [filterWords, setFilterWords] = useState([]);

  const accordionData = [
    {
      title: "Can I be a Partner and Investor",
      content: "content here",
      keywords: ["Partner", "Investor"],
      id: 1,
    },
    {
      title: "jhggkjgkgkj",
      content: "content here",
      keywords: ["Partner", "Fees"],
      id: 4,
    },
    {
      title: "Title 1",
      content: "content here",
      keywords: ["Partner", "Fees"],
      id: 5,
    },
    {
      title: "Title 2",
      content: "This is my content",
      keywords: ["Partner", "Fees"],
      id: 2,
    },
    {
      title: "Title 3",
      content: "This is my content",
      keywords: ["Partner", "Fees"],
      id: 3,
    },
  ];

  const filterFunction = (data) => {
    for (let element of data.keywords) {
      for (let word of filterWords) {
        if (element.toLowerCase() === word.toLowerCase()) {
          return (
            <Accordion
              key={data.id}
              title={data.title}
              content={data.content}
            />
          );
        }
      }
    }
  };

  return (
    <>
      <Contact />
      <div
        className="center"
        style={{
          flexDirection: "column",
          paddingTop: "5%",
          paddingBottom: "5%",
        }}
      >
        <p className="hero">
          What Are You <br />
          Looking For:
        </p>
        <input
          className="faqs-search"
          id="faqs"
          type="search"
          onChange={(e) => {
            setFaq(e.target.value);
            setFilterWords(faq.split(" "));
            console.log(filterWords);
          }}
        />
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        {faq !== ""
          ? accordionData.map((data) => {
              return filterFunction(data);
            })
          : accordionData.map((data) => {
              return (
                <Accordion
                  key={data.id}
                  title={data.title}
                  content={data.content}
                />
              );
            })}
      </div>
    </>
  );
}
