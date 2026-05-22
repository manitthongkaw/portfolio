import logoGeneration from "../assets/svg/logo-generation.svg";
import logoMoretonbay from "../assets/svg/logo-moretonbay.svg";

export default function Experience() {
  return (
    <section id="experience">
      <div className="heading">
        <h2>Experience</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam officiis recusandae vel molestias enim.</p>
      </div>
      <section className="frame">
        <img className="h-10" src={logoGeneration} />
        <h3>Full-Stack Software Developer Trainee |
          Mar - Jun 2026 <span className="badge badge-soft badge-primary">4 months</span></h3>
        <ul>
          <li>Developed and deployed robust full-stack web applications utilizing the <u>MERN Stack</u>.</li>
          <li>Collaborated effectively in a team-based environment, applying <u>Agile/Scrum</u> methodologies and strict version control via Git/GitHub.</li>
        </ul>
      </section>
      <section className="frame">
        <h3>Freelance Graphic & Web Designer |
          Mar 2023 - Present <span className="badge badge-soft badge-primary">
            {`${new Date().getFullYear() - 2023} years ${new Date().getMonth() - 2} months`}</span></h3>
        <ul>
          <li>Designed intuitive user interfaces and scalable design systems using <u>Figma</u>.</li>
          <li>Developed and customized functional websites utilizing modern <u>WordPress</u> builders.</li>
          <li>Created impactful print marketing materials, including business cards, brochures, and flyers.</li>
        </ul>
      </section>
      <section className="frame hidden">
        <img className="h-10" src={logoMoretonbay} />
        <h3>Graphic & Web Designer | Moreton Bay Co., Ltd. |
          Jul 2019 - Feb 2023 <span className="badge badge-soft badge-primary">3 years 7 months</span></h3>
        <ul>
          <li>Created engaging graphics to drive print and online advertising campaigns.</li>
          <li>Designed and built responsive, user-friendly websites using <u>HTML5, Bootstrap or WordPress</u>.</li>
          <li>Produced cohesive corporate identity materials, including letterheads, newsletters, and email signatures.</li>
        </ul>
      </section>
      <section className="frame hidden">
        <h3>Graphic & Web Designer | Graphic Buffet Co., Ltd. |
          Jan 2017 - Jun 2019 <span className="badge badge-soft badge-primary">2 years 6 months</span></h3>
        <ul>
          <li>Designed visually appealing graphics for diverse online and print media channels.</li>
          <li>Developed and maintained customized <u>WordPress</u> websites tailored to client needs.</li>
          <li>Designed premium product packaging, corporate brochures, and comprehensive company profiles.</li>
        </ul>
      </section>
      <section className="frame hidden">
        <h3>Graphic & Web Designer | Flying Fish Co., Ltd. |
          Jan 2012 - Dec 2016 <span className="badge badge-soft badge-primary">5 years</span></h3>
        <ul>
          <li>Spearheaded graphic design for print and digital marketing campaigns for Exocet-Original, a windsurfing and SUP sports brand.</li>
          <li>Designed and developed fully responsive websites using <u>HTML, CSS, Responsive Design and jQuery</u>.</li>
          <li>Designed and laid out comprehensive product catalogs using Adobe InDesign.</li>
        </ul>
      </section>
      <section className="frame hidden">
        <h3>Graphic & Web Designer | Huakati Remix Design |
          Jan 2010 - Dec 2011 <span className="badge badge-soft badge-primary">2 years</span></h3>
        <ul>
          <li>Executed creative graphic designs for multi-channel advertising campaigns.</li>
          <li>Hand-coded and launched websites using <u>HTML and CSS</u>, focusing on clean structure and layout.</li>
        </ul>
      </section>
    </section>
  );
};