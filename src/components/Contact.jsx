import { useState } from "react";
import Icon from "../utils/Icon";

export default function Contact() {

  const contactInitial = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };
  const [contactForm, setContactForm] = useState(contactInitial);
  const handleContactChange = (event) => setContactForm((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  const handleContactSubmit = (event) => {
    event.preventDefault();
    const payload = {...contactForm};
    console.log(payload);
  };

  return (
    <section id="contact">
      <div className="container">
        <div className="heading">
          <h2>Get in touch</h2>
          <p>Have a project in mind or want to discuss potential opportunities? <em>I'd love to fear from you.</em></p>
        </div>
        <div id="contactForm" className="frame">
          <form onSubmit={handleContactSubmit}>
            <div className="input-row">
              <div className="input-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" value={contactForm.name} onChange={handleContactChange} placeholder="Your name" maxLength="120" />
              </div>
              <div className="input-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" value={contactForm.email} onChange={handleContactChange} placeholder="Your email" maxLength="120" />
              </div>
            </div>
            <div className="input-group">
              <label htmlFor="subject">Subject</label>
              <input type="text" id="subject" name="subject" value={contactForm.subject} onChange={handleContactChange} placeholder="Subject of your message" maxLength="120" />
            </div>
            <div className="input-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="5" value={contactForm.message} onChange={handleContactChange} placeholder="Your message"></textarea>
            </div>
            <div className="button-row sm:pt-4">
              <button type="submit" className="button w-full">
                <span className="text">Send Message</span>
                <span className="icon-material">send</span></button>
            </div>
          </form>
        </div>
        <div id="contactInformation" className="frame">
          <h3>Information</h3>
          <ul id="contactProfile">
            <li>Manit Thongkaw</li>
            <li className="badge badge-ghost badge-content text-sm font-medium">
              <span className="icon-material">mail</span> manitthongkaw(at)gmail.com
              </li>
            <li className="badge badge-ghost badge-content text-sm font-medium">
              <span className="icon-material">location_on</span> Location: Thailand
            </li>
            <li><a className="button button-soft button-primary w-full text-sm font-medium mt-4" href="#download-cv">
              <span className="icon-material">file_save</span> Download CV PDF file</a></li>
          </ul>
          <hr />
          <h3>Professional Profiles</h3>
          <ul className="follow-me">
            <li><a className="tooltip" data-tooltip="LinkedIn" href="https://www.linkedin.com/in/manitthongkaw" target="_blank">
              <Icon icon="linkedin" />
              <span className="text">LinkedIn</span></a></li>
            <li><a className="tooltip" data-tooltip="GitHub" href="https://github.com/manitthongkaw" target="_blank">
              <Icon icon="github" />
              <span className="text">GitHub</span></a></li>
          </ul>
        </div>
      </div>
    </section>
  );

};