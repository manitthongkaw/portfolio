import { useState } from "react";

export default function Header() {

  const cvLink = import.meta.env.VITE_CV_LINK;

  const [navMainActive, setNavMainActive] = useState(false);
  const handleNavMainToggle = () => setNavMainActive(!navMainActive);

  const handleSmoothScroll = (event, targetId) => {
    event.preventDefault();
    const el = document.getElementById(targetId);
    const targetY = targetId === "home" ? 0 : el ? el.getBoundingClientRect().top + window.scrollY - 60 : null;
    if (targetY !== null) {
      const startY = window.scrollY;
      const start = performance.now();
      const step = (time) => {
        const p = Math.min((time - start) / 600, 1);
        window.scrollTo(0, startY + (targetY - startY) * (p * (2 - p))); 
        if (p < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    };
    setTimeout(() => setNavMainActive(false), 300);
  };

  return (
    <header>
      <div className="container">
        <a className="nav-brand" href="#home" onClick={(event) => handleSmoothScroll(event, "home")}>&lt; MANIT /&gt;</a>
        <button className="nav-toggle" onClick={handleNavMainToggle}><span className="icon-material">{!navMainActive ? "menu" : "close"}</span></button>
        <nav className={!navMainActive ? "" : "active"}>
          <ul>
            <li><a href="#about" onClick={(event) => handleSmoothScroll(event, "about")}>About</a></li>
            <li><a href="#work" onClick={(event) => handleSmoothScroll(event, "work")}>Work</a></li>
            <li><a href="#skill" onClick={(event) => handleSmoothScroll(event, "skill")}>Skill</a></li>
            <li><a href="#experience" onClick={(event) => handleSmoothScroll(event, "experience")}>Experience</a></li>
            <li><a href="#contact" onClick={(event) => handleSmoothScroll(event, "contact")}>Contact</a></li>
            <li><a href={cvLink} target="_blank" rel="noopener noreferrer">
              <span className="icon-material">file_save</span> CV</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );

};