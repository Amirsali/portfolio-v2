import React, { useRef } from "react";
import "../styles/contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { RiWhatsappLine } from "react-icons/ri";
import emailjs from "emailjs-com";
import Aos from "aos";
import "aos/dist/aos.css";
Aos.init({ duration: 2000 });

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_afxuso8",
        "template_ovvaske",
        form.current,
        "yURlCMFdLhGY8HEyU"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    alert("Email Sent. Thank you!");
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article
            className="contact__option"
            data-aos="flip-right"
            data-aos-offset="200"
            data-aos-easing="ease-in-sine"
            data-aos-duration="600"
          >
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>muhallimir23@gmail.com</h5>
            <a
              href="mailto:muhallimir23@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>
          <article
            className="contact__option"
            data-aos="flip-right"
            data-aos-offset="200"
            data-aos-easing="ease-in-sine"
            data-aos-duration="600"
          >
            <RiMessengerLine className="contact__option-icon" />
            <h4>Messenger</h4>
            <h5>Amir Mhlli</h5>
            <a
              href="https://m.me/amir.muhalli"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>
          <article
            className="contact__option"
            data-aos="flip-right"
            data-aos-offset="200"
            data-aos-easing="ease-in-sine"
            data-aos-duration="600"
          >
            <RiWhatsappLine className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>+639668151371</h5>
            <a
              href="https://api.whatsapp.com/send?phone+639668151371"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>
        </div>
        <form
          ref={form}
          onSubmit={sendEmail}
          data-aos="fade-down"
          data-aos-offset="200"
          data-aos-easing="ease-in-sine"
          data-aos-duration="600"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="10"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
