import about from "../assets/images/coding-screen.jpg";

export default function About() {

  return (
    <section id="about">
      <div className="container">
        <div className="heading">
          <h2>About Me</h2>
          <p>Most developers ship features. I ship experiences.</p>
          <p>With 15+ years designing interfaces and writing code, I sit at the intersection most teams struggle to bridge — the point where a great idea becomes a product that actually feels right to use.</p>
          <p>Today, I build full-stack web applications using the <u>MERN stack</u> <em>(MongoDB, Express.js, React.js and Node.js)</em>, bringing every pixel and every API endpoint to the same standard. No design handoff. No lost-in-translation moments. Just clean, purposeful work from concept to deployment.</p>
          <p>Based in Thailand. Available for opportunities worldwide.</p>
          <div className="about-count">
            <div className="frame">
              <h3>15+</h3>
              <p>Years of experience</p>
            </div>
            <div className="frame">
              <h3>6+</h3>
              <p>Companies worked with</p>
            </div>
            <div className="frame">
              <h3>2+</h3>
              <p>Stacks mastered</p>
            </div>
          </div>
        </div>
        <div className="about-present">
          <img src={about} />
        </div>
      </div>
    </section>
  );

};