import { useState } from "react";

export default function Header() {

  const [navMainActive, setNavMainActive] = useState(false);
  const handleNavMainToggle = () => setNavMainActive(!navMainActive);

  return (
    <header>
      <a className="block leading-10 text-shadow-xs px-5 rounded-full hover:bg-white/5 hover:backdrop-blur-sm transition-all" href="#root">&lt; MANIT /&gt;</a>
      <button className="min-[600px]:hidden cursor-pointer text-shadow-xs p-2 rounded-full hover:bg-white/5 hover:backdrop-blur-sm hover:scale-120 transition-all" onClick={handleNavMainToggle}>{!navMainActive ? <span className="icon-material">menu</span> : <span className="icon-material">close</span>}</button>
      <nav className={`${!navMainActive ? "max-[600px]:hidden" : "max-[600px]:absolute max-[600px]:top-full max-[600px]:left-0 max-[600px]:w-full max-[600px]:p-2 max-[600px]:border max-[600px]:border-slate-50/20 max-[600px]:rounded-[27px] max-[600px]:bg-white/5 max-[600px]:backdrop-blur-sm"} transition-all`}>
        <ul className="flex max-[600px]:flex-col">
          <li><a href="#about">About</a></li>
          <li><a href="#work">Work</a></li>
          <li><a href="#skill">Skill</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );

};