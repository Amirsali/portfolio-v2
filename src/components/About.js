import React from "react";
import "../styles/about.css";
import Me from "../assets/pic1.png";
import { AiFillTrophy } from "react-icons/ai";
import { BsAwardFill } from "react-icons/bs";

const About = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={Me} alt="mypic" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <BsAwardFill className="about__icon" />
              <h5>Experience</h5>
              <small>3+ years of IT Industry Professional Exposure</small>
            </article>
            <article className="about__card">
              <BsAwardFill className="about__icon" />
              <h5>Freelance</h5>
              <small>2+ years of Web Development</small>
            </article>
            <article className="about__card">
              <BsAwardFill className="about__icon" />
              <h5>Projects</h5>
              <small>50+ Projects Completed</small>
            </article>
          </div>
          <p>
            Full Stack MERN Developer with 2+ years of hands-on experience
            designing, developing, and implementing applications and solutions
            using a range of technologies and programming languages. Seeking to
            leverage broad development experience and hands-on technical
            expertise in a challenging role as a Full-stack Developer.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
