

import React from "react";


import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

const projectList = [
  {
    title: "Wedding Management Website 🎉",
    description:
      "Creating a dream wedding is easy with our Wedding Management Website. Our platform offers comprehensive planning tools, vendor management, budget tracking, and customizable templates to simplify every detail, ensuring your special day is perfect and stress-free. Tailor your celebration effortlessly and enjoy seamless collaboration with your loved ones and vendors.",
    url: "https://ratanlodhi.github.io/Wedding-Managemnet/",
  },
  {
    title: "Car Rental Website",
    description:
      "Rent your ideal vehicle effortlessly with our Car Rental Website. Offering a wide range of cars, from economy to luxury, we provide easy online booking, real-time availability, and competitive prices. Enjoy convenient pickup and drop-off locations, excellent customer service, and flexible rental options tailored to your needs. Experience hassle-free car rentals for every journey.",
    url: "https://car-rental-website-delta-three.vercel.app/",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;