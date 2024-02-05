import React, { useState } from "react";
import "../styles/faq.css";
import Contact from "./../components/Contact";
import Accordion from "../components/Accordion";

export default function FAQs() {
  const [faq, setFaq] = useState("");

  const accordionData = [
    {
      title: "Can I be a Partner and Investor?",
      quickAns: "Yes. Users can be a Partner and Investor",
      content: "content here",
      keywords: ["Partners", "Investors"],
      id: 1,
    },
    {
      title: "When Can I Liquidate?",
      quickAns: "Users can Liquidate Nearly Anytime",
      content:
        "Users can cash out any amount of your assets that are not currently invested in a project at anytime.",
      keywords: ["Money", "Cash", "When", "Investors", "Partners"],
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
    const list = faq.split(" ");

    for (let element of data.keywords) {
      for (let word of list) {
        if (
          element.toLowerCase().substring(0, word.length) === word.toLowerCase()
        ) {
          return (
            <Accordion
              key={data.id}
              title={data.title}
              quickAns={data.quickAns}
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
      <div className="center faq-header">
        <p className="hero">How Can We Help:</p>
        <input
          className="faqs-search"
          id="faqs"
          onChange={(e) => {
            setFaq(e.target.value);
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
        {faq === ""
          ? accordionData.map((data) => {
              return (
                <Accordion
                  key={data.id}
                  title={data.title}
                  content={data.content}
                  quickAns={data.quickAns}
                />
              );
            })
          : accordionData.map((data) => {
              return filterFunction(data);
            })}
      </div>
    </>
  );
}
