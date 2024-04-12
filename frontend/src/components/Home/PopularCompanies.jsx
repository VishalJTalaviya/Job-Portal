import React from "react";
import { FaMicrosoft, FaApple } from "react-icons/fa";
import { SiTesla } from "react-icons/si";

const PopularCompanies = () => {
  const companies = [
    {
      id: 1,
      title: "Microsoft",
      location: " Tramway Road, Kalina, Santacruz East, Mumbai, Maharashtra 400098",
      openPositions: 10,
      icon: <FaMicrosoft />,
    },
    {
      id: 2,
      title: "Tesla",
      location: "14TH FLOOR, SKAV 909, LAVELLE ROAD, BENGALURU Bangalore ",
      openPositions: 5,
      icon: <SiTesla />,
    },
    {
      id: 3,
      title: "Apple",
      location: "Concorde Tower C,UB City No.24, Vittal Mallya Road , Bangalore 560001",
      openPositions: 20,
      icon: <FaApple />,
    },
  ];
  return (
    <div className="companies">
      <div className="container">
        <h3>TOP COMPANIES</h3>
        <div className="banner">
          {companies.map((element) => {
            return (
              <div className="card" key={element.id}>
                <div className="content">
                  <div className="icon">{element.icon}</div>
                  <div className="text">
                    <p>{element.title}</p>
                    <p>{element.location}</p>
                  </div>
                </div>
                <button>Open Positions {element.openPositions}</button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PopularCompanies;