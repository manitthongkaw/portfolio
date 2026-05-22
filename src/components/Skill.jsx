export default function Skill() {
  return (
    <section id="skill">
      <div className="heading">
        <h2>Tech Stack</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam officiis recusandae vel molestias enim.</p>
      </div>
      <div className="frame skill-technical">
        <h3><span className="icon-material">terminal</span> Technical<br />Skills</h3>
        <ul>
          <li className="badge badge-soft badge-content">React.js</li>
          <li className="badge badge-soft badge-content">JavaScript (ES6+)</li>
          <li className="badge badge-soft badge-content">HTML5</li>
          <li className="badge badge-soft badge-content">CSS3</li>
          <li className="badge badge-soft badge-content">Tailwind CSS</li>
          <li className="badge badge-soft badge-content">Bootstrap</li>
          <li className="badge badge-soft badge-content">Responsive Design</li>
          <li className="badge badge-soft badge-content">Node.js</li>
          <li className="badge badge-soft badge-content">Express.js</li>
          <li className="badge badge-soft badge-content">MongoDB</li>
          <li className="badge badge-soft badge-content">PostgreSQL</li>
          <li className="badge badge-soft badge-content">REST API</li>
          <li className="badge badge-soft badge-content">JWT Auth</li>
          <li className="badge badge-soft badge-content">Git</li>
          <li className="badge badge-soft badge-content">GitHub</li>
          <li className="badge badge-soft badge-content">jQuery</li>
          <li className="badge badge-soft badge-content">WordPress</li>
        </ul>
      </div>
      <div className="frame skill-design-tool">
        <h3><span className="icon-material">design_services</span> Design<br />& Tools</h3>
        <ul>
          <li className="badge badge-soft badge-content">Figma</li>
          <li className="badge badge-soft badge-content">Adobe Photoshop</li>
          <li className="badge badge-soft badge-content">Adobe Illustrator</li>
          <li className="badge badge-soft badge-content">Adobe InDesign</li>
          <li className="badge badge-soft badge-content">ClickUp</li>
          <li className="badge badge-soft badge-content">Trello</li>
          <li className="badge badge-soft badge-content">Slack</li>
        </ul>
      </div>
      <div className="frame skill-soft">
        <h3><span className="icon-material">psychology</span> Soft Skills</h3>
        <ul>
          <li className="badge badge-soft badge-content">Time Management</li>
          <li className="badge badge-soft badge-content">Problem Solving</li>
          <li className="badge badge-soft badge-content">Detail Orientation</li>
          <li className="badge badge-soft badge-content">Agile Adaptability</li>
          <li className="badge badge-soft badge-content">Growth Mindset</li>
        </ul>
      </div>
    </section>
  );
};