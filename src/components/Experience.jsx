import { experiences } from "../data/experiences";

export default function Experience() {

  const latestExperiences = [...experiences].sort((a, b) => Number(b.id) - Number(a.id));

  return (
    <section id="experience">
      <div className="container">
        <div className="heading">
          <h2>Experience</h2>
          <p>15+ years of professional work — from pixels to production code.</p>
        </div>
        <div className="experience-list">
          {latestExperiences?.length > 0 &&
            latestExperiences.map((experience) =>
              experience.descriptions?.length > 0 && (
                <details key={experience.id} className={experience.label ? "star" : ""} open={experience.isOpen}>
                  <summary>
                    <div className="title">
                      {experience.label && <h6 className="badge">{experience.label}</h6>}
                      <h4>{experience.company}</h4>
                      <h3>{experience.position}</h3>
                    </div>
                    <div className="experience-year">
                      <h5>{experience.year}</h5>
                      <span className="badge badge-soft badge-primary">{experience.time}</span>
                    </div>
                  </summary>
                  <ul className="experience-content">
                    {experience.descriptions.map((description, index) => (
                      <li key={`${experience.id}-${index}`} dangerouslySetInnerHTML={{ __html: description }} />
                    ))}
                  </ul>
                </details>
              )
            )
          }
        </div>
      </div>
    </section>
  );

};