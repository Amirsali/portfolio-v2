import React from "react";
import "../styles/education.css";
import { ImHtmlFive } from "react-icons/im";
import {
  SiJavascript,
  SiCss3,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiFirebase,
  SiMysql,
  SiPython,
  SiTypescript,
  SiNextdotjs,
  SiPhp,
  SiDotnet,
} from "react-icons/si";
import { FaReact, FaBootstrap, FaNodeJs } from "react-icons/fa";
import Aos from "aos";
import "aos/dist/aos.css";
Aos.init({ duration: 2000 });

const Education = () => {
  return (
    <section id="education">
      <h5>Educational Background and Programming Skills</h5>
      <h2>Bachelor's Degree in Information Technology</h2>

      <div className="container experience__container">
        <div
          className="experience__frontend"
          data-aos="zoom-in-up"
          data-aos-offset="200"
          data-aos-easing="ease-in-sine"
          data-aos-duration="600"
        >
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <ImHtmlFive className="experience__details-icon" />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <SiCss3 className="experience__details-icon" />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <SiJavascript className="experience__details-icon" />
              <div>
                <h4>JAVASCRIPT</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <FaReact className="experience__details-icon" />
              <div>
                <h4>REACT</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <SiNextdotjs className="experience__details-icon" />
              <div>
                <h4>NextJS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <SiTypescript className="experience__details-icon" />
              <div>
                <h4>Typescript</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <FaBootstrap className="experience__details-icon" />
              <div>
                <h4>BOOTSTRAP</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <SiTailwindcss className="experience__details-icon" />
              <div>
                <h4>TAILWIND</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
          </div>
        </div>

        <div
          className="experience__backend"
          data-aos="zoom-in-up"
          data-aos-offset="200"
          data-aos-easing="ease-in-sine"
          data-aos-duration="600"
        >
          <h3>Backend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <FaNodeJs className="experience__details-icon" />
              <div>
                <h4>NODEJS</h4>
                <small className="text-light">Experienced</small>{" "}
              </div>
            </article>
            <article className="experience__details">
              <SiExpress className="experience__details-icon" />
              <div>
                <h4>EXPRESS</h4>
                <small className="text-light">Experienced</small>{" "}
              </div>
            </article>
            <article className="experience__details">
              <SiMongodb className="experience__details-icon" />
              <div>
                <h4>MONGODB</h4>
                <small className="text-light">Experienced</small>{" "}
              </div>
            </article>
            <article className="experience__details">
              <SiFirebase className="experience__details-icon" />
              <div>
                <h4>FIREBASE</h4>
                <small className="text-light">Experienced</small>{" "}
              </div>
            </article>
            <article className="experience__details">
              <SiPhp className="experience__details-icon" />
              <div>
                <h4>Php</h4>
                <small className="text-light">Intermediate</small>{" "}
              </div>
            </article>
            <article className="experience__details">
              <SiDotnet className="experience__details-icon" />
              <div>
                <h4>DotNet</h4>
                <small className="text-light">Intermediate</small>{" "}
              </div>
            </article>
            <article className="experience__details">
              <SiMysql className="experience__details-icon" />
              <div>
                <h4>MYSQL</h4>
                <small className="text-light">Experienced</small>{" "}
              </div>
            </article>
            <article className="experience__details">
              <SiPython className="experience__details-icon" />{" "}
              <div>
                <h4>PYTHON</h4>
                <small className="text-light">Intermediate</small>{" "}
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
