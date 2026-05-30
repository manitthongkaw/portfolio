import { skills } from "../data/skills";

export default function Skill() {

  return (
    <section id="skill">
      <div className="container">
        <div className="heading">
          <h2>Tech Stack</h2>
          <p>Tools I use to take a product from idea to production.</p>
        </div>
        {skills?.length > 0 &&
          skills.map((skill) =>
            skill.items?.length > 0 && (
              <div key={skill.id} className={`frame ${skill.id}`}>
                <h3>
                  <span className="icon-material">{skill.icon}</span>
                  <span className="text">{skill.title}</span>
                </h3>
                <ul>
                  {skill.items.map((item, index) => (
                    <li key={`${skill.id}-${index}`} className={`badge badge-soft ${item?.highlight ? "badge-primary" : "badge-content"}`}>{item.name}</li>
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