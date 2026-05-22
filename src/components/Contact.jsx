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
    <>
    <section id="contact">
      <div className="heading">
        <h2>Get in touch</h2>
        <p>Have a project in mind or want to discuss potential opportunities? <em>I'd love to fear from you.</em></p>
      </div>
      <div id="contactInformation" className="frame">
        <h3>Information</h3>
        <ul id="contactProfile">
          <li><a href="mailto:manitthongkaw@gmail.com" target="_blank">
            <span className="badge badge-ghost badge-content text-sm font-medium"><span className="icon-material icon-fill">mail</span> Email</span>
            <br />
            manitthongkaw(at)gmail.com
            </a></li>
          <li><a href="#soon" target="_blank">
            <span className="badge badge-ghost badge-content text-sm font-medium"><span className="icon-material icon-fill">call</span> Phone</span>
            <br />
            Available upon request</a></li>
          <li><a href="#location">
            <span className="badge badge-ghost badge-content text-sm font-medium"><span className="icon-material icon-fill">location_on</span> Location</span>
            <br />
            Thailand</a></li>
        </ul>
        <hr />
        <h3>Professional Profiles</h3>
        <ul id="contactFollow">
          <li><a className="tooltip" data-tooltip="LinkedIn" href="https://www.linkedin.com/in/manitthongkaw" target="_blank">
            <Icon icon="linkedin" />
            <span>LinkedIn</span></a></li>
          <li><a className="tooltip" data-tooltip="GitHub" href="https://github.com/manitthongkaw" target="_blank">
            <Icon icon="github" />
            <span>GitHub</span></a></li>
        </ul>
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
              <input type="email" id="email" name="email" value={contactForm.email} onChange={handleContactChange} placeholder="Yuor email" maxLength="120" />
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
            <button type="submit" className="button w-full">Send Message</button>
          </div>
        </form>
      </div>
    </section>
    </>
  );

};