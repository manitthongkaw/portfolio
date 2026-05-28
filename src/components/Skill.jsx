import { skills } from "../data/skills";

export default function Skill() {

  return (
    <section id="skill">
      <div className="container">
        <div className="heading">
          <h2>Tech Stack</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            officiis recusandae vel molestias enim.
          </p>
        </div>
        {skills?.length > 0 &&
          skills.map((skill) =>
            skill.items?.length > 0 && (
              <div key={skill.id} className={`frame ${skill.id}`}>
                <h3>
                  <span className="icon-material">{skill.icon}</span>
                  {skill.title}
                </h3>
                <ul>
                  {skill.items.map((item) => (
                    <li key={`${skill.id}-${item}`} className="badge badge-soft badge-content">{item}</li>
                  ))}
                </ul>
              </div>
            )
          )
        }
      </div>
    </section>
  );

};