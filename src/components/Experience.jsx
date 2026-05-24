export default function Experience() {

  return (
    <section id="experience">
      <div className="container">
        <div className="heading">
          <h2>Experience</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam officiis recusandae vel molestias enim.</p>
        </div>
        <div className="experience-list">
          <details className="love" open>
            <summary>
              <div className="title">
                <h6 className="badge">Rewrite my future.</h6>
                <h4>Generation Thailand</h4>
                <h3>Full-Stack Software Developer</h3>
              </div>
              <div className="experience-year">
                <h5>Mar - Jun 2026</h5>
                <span className="badge badge-soft badge-primary">4 months</span>
              </div>
            </summary>
            <ul className="experience-content">
              <li>Developed and deployed robust full-stack web applications utilizing the <u>MERN Stack</u>.</li>
              <li>Collaborated effectively in a team-based environment, applying <u>Agile/Scrum</u> methodologies and strict version control via Git/GitHub.</li>
            </ul>
          </details>
          <details open>
            <summary>
              <div className="title">
                <h4>Freelance</h4>
                <h3>Graphic & Web Designer</h3>
              </div>
              <div className="experience-year">
                <h5>Mar 2023 - Feb 2026</h5>
                <span className="badge badge-soft badge-primary">3 years</span>
              </div>
            </summary>
            <ul className="experience-content">
              <li>Designed intuitive user interfaces and scalable design systems using <u>Figma</u>.</li>
              <li>Developed and customized functional websites utilizing modern <u>WordPress</u> builders.</li>
              <li>Created impactful print marketing materials, including business cards, brochures, and flyers.</li>
            </ul>
          </details>
          <details>
            <summary>
              <div className="title">
                <h4>Moreton Bay Co., Ltd.</h4>
                <h3>Graphic & Web Designer</h3>
              </div>
              <div className="experience-year">
                <h5>Jul 2019 - Feb 2023</h5>
                <span className="badge badge-soft badge-primary">3 years 7 months</span>
              </div>
            </summary>
            <ul className="experience-content">
              <li>Created engaging graphics to drive print and online advertising campaigns.</li>
              <li>Designed and built responsive, user-friendly websites using <u>HTML5, Bootstrap or WordPress</u>.</li>
              <li>Produced cohesive corporate identity materials, including letterheads, newsletters, and email signatures.</li>
            </ul>
          </details>
          <details>
            <summary>
              <div className="title">
              <h4>Graphic Buffet Co., Ltd.</h4>
              <h3>Graphic & Web Designer</h3>
              </div>
              <div className="experience-year">
                <h5>Jan 2017 - Jun 2019</h5>
                <span className="badge badge-soft badge-primary">2 years 6 months</span>
              </div>
            </summary>
            <ul className="experience-content">
              <li>Designed visually appealing graphics for diverse online and print media channels.</li>
              <li>Developed and maintained customized <u>WordPress</u> websites tailored to client needs.</li>
              <li>Designed premium product packaging, corporate brochures, and comprehensive company profiles.</li>
            </ul>
          </details>
          <details>
            <summary>
              <div className="title">
              <h4>Flying Fish Co., Ltd.</h4>
              <h3>Graphic & Web Designer</h3>
              </div>
              <div className="experience-year">
                <h5>Jan 2012 - Dec 2016</h5>
                <span className="badge badge-soft badge-primary">5 years</span>
              </div>
            </summary>
            <ul className="experience-content">
              <li>Spearheaded graphic design for print and digital marketing campaigns for Exocet-Original, a windsurfing and SUP sports brand.</li>
              <li>Designed and developed fully responsive websites using <u>HTML, CSS, Responsive Design and jQuery</u>.</li>
              <li>Designed and laid out comprehensive product catalogs using Adobe InDesign.</li>
            </ul>
          </details>
          <details>
            <summary>
              <div className="title">
              <h4>Huakati Remix Design</h4>
              <h3>Graphic & Web Designer</h3>
              </div>
              <div className="experience-year">
                <h5>Jan 2010 - Dec 2011</h5>
                <span className="badge badge-soft badge-primary">2 years</span>
              </div>
            </summary>
            <ul className="experience-content">
              <li>Executed creative graphic designs for multi-channel advertising campaigns.</li>
              <li>Hand-coded and launched websites using <u>HTML and CSS</u>, focusing on clean structure and layout.</li>
            </ul>
          </details>
        </div>
      </div>
    </section>
  );

};