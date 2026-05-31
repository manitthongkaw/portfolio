import { useState } from "react";

export default function Header() {

  const [navMainActive, setNavMainActive] = useState(false);
  const handleNavMainToggle = () => setNavMainActive(!navMainActive);
  const handleNavMainClose = () => setTimeout(() => setNavMainActive(false), 300);

  return (
    <header>
      <div className="container">
        <a className="nav-brand" href="#root">&lt; MANIT /&gt;</a>
        <button className="nav-toggle" onClick={handleNavMainToggle}><span className="icon-material">{!navMainActive ? "menu" : "close"}</span></button>
        <nav className={!navMainActive ? "" : "active"}>
          <ul>
            <li><a href="#about" onClick={handleNavMainClose}>About</a></li>
            <li><a href="#work" onClick={handleNavMainClose}>Work</a></li>
            <li><a href="#skill" onClick={handleNavMainClose}>Skill</a></li>
            <li><a href="#experience" onClick={handleNavMainClose}>Experience</a></li>
            <li><a href="#contact" onClick={handleNavMainClose}>Contact</a></li>
            <li><a href="https://drive.google.com/file/d/1Y_ysPl9JTJ4lE0KR2dWP5pv_D7KktHo7/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
              <span className="icon-material">file_save</span> CV</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );

};