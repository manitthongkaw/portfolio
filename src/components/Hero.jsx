import avator from "../assets/images/avatar.jpg";

export default function Hero() {

  return (
    <section id="hero">
      <div className="hero-intro">
        <em>Hello, <span className="icon-material">waving_hand</span></em>
        <h1>I'm Manit Thongkaw</h1>
        <h2>I'm a Full-Stack Software Developer</h2>
        <div className="button-row pt-3">
          <a className="button" href="#contact">Touch me</a>
          <a className="button button-outline border-2 bg-transparent" href="#work">Work</a>
        </div>
      </div>
      <div className="hero-present">
        <img src={avator} />
      </div>
    </section>
  )

}
