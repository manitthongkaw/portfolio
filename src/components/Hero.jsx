import avator from "../assets/images/avatar.jpg";

export default function Hero() {

  return (
    <section id="hero">
      <div className="container">
        <div className="hero-intro">
          <em>Hello, <span className="icon-material">waving_hand</span></em>
          <h1>I'm Manit Thongkaw</h1>
          <h2>Full-Stack Developer with a Designer's Eye.</h2>
          <p>I build web applications that work precisely and look intentional.</p>
          <div className="button-row">
            <a className="button" href="#work">View My Work</a>
            <a className="button button-outline" href="#contact">Let's Talk</a>
          </div>
        </div>
        <div className="hero-present">
          <img src={avator} />
        </div>
      </div>
    </section>
  );

};