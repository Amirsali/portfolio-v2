import React from "react";
import "../styles/portfolio.css";
import IMG1 from "../assets/ecommerce.png";
import IMG2 from "../assets/lux-hotels.png";
import IMG3 from "../assets/aflixs.png";
import IMG4 from "../assets/jive.png";
import IMG5 from "../assets/dropchat.jpg";
import IMG6 from "../assets/sweetdelights.jpg";
import IMG7 from "../assets/anstech.png";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "ASTECH-Ecommerce App (MERN Stack with Paypal API)",
    github: "https://github.com/Amirsali/astech-mern",
    demo: "https://astech-estore-mern.herokuapp.com/",
  },

  {
    id: 2,
    image: IMG2,
    title:
      "Lux Hotels landing page (Class-based React real time filter w/ Contentful) ",
    github: "https://github.com/Amirsali/my-hotel",
    demo: "https://lux-hotels-9141d.web.app/",
  },

  {
    id: 3,
    image: IMG3,
    title: "Streaming App (NextJS with Stipe APi for subscription payments) ",
    github: "https://github.com/Amirsali/Aflixs",
    demo: "https://a-flixs.web.app/",
  },
  {
    id: 4,
    image: IMG4,
    title: "Jive Chat App (ReactJS, Firebase, Sign in with Google)",
    github: "https://github.com/Amirsali/Aflixs",
    demo: "https://a-flixs.web.app/",
  },
  {
    id: 5,
    image: IMG5,
    title:
      "DROP CHAT - React Native App (Firebase, Expo, Register with Profile Photo)",
    github: "https://github.com/Amirsali/Aflixs",
    demo: "https://drop-chat23.web.app/",
  },
  {
    id: 6,
    image: IMG6,
    title: "Sweet Delights - Responsive landing Page (ReactJS)",
    github: "https://github.com/Amirsali/sweet-delights",
    demo: "https://sweet-delights-c84a7.web.app/",
  },
  {
    id: 7,
    image: IMG7,
    title: "ANSTech - landing page (HTML, CSS, VANILLA JAVASCRIPT",
    github: "https://github.com/Amirsali/astech",
    demo: "https://astech-8ac35.web.app/",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>Things That I Can Build For You</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a
                  href={github}
                  className="btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </a>
                <a
                  href={demo}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;