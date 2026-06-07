import { useState } from "react";

import { works } from "../data/works";

export default function Work() {

  const isPrimaryLink = (type) => ["Website", "Vercel", "Render"].includes(type);
  const getLinkLabel = (type) => {
    switch (type) {
      case "Website": return "View Project";
      case "Vercel": return "Live Demo";
      case "Render": return "Live Server";
      case "Figma": return "View Design";
      default: return type;
    };
  };

  const itemPerLoad = Number(import.meta.env.VITE_ITEM_PER_PAGE) || 6;

  const [visibleCount, setVisibleCount] = useState(itemPerLoad);
  const handleShowMore = () => setVisibleCount(visibleCount + itemPerLoad);

  const latestWorks = works
    .map((work, index) => ({ ...work, originalIndex: index }))
    .sort((a, b) => b.originalIndex - a.originalIndex);

  return (
    <section id="work">
      <div className="container">
        <div className="heading">
          <h2>Work</h2>
          <p>Selected projects — from concept to shipped product.</p>
        </div>
        <ul className="work-list">
          {latestWorks?.length > 0 &&
            latestWorks.slice(0, visibleCount).map((work) => (
              <li key={`work-${work.originalIndex}-${work.title}`}>
                <img src={work.image} alt={work.title} />
                <div className="work-detail">
                  <div className="work-title">
                    <h3>{work.title} </h3>
                    <p>{work.description}</p>
                  </div>
                  {Object.keys(work.links || {}).length > 0 && (
                    <ul className="work-link">
                      {Object.entries(work.links).map(([type, url]) => (
                        <li key={type}>
                          <a className={`badge ${isPrimaryLink(type) ? "" : "badge-soft"}`} href={url} target="_blank" rel="noopener noreferrer">
                            {getLinkLabel(type)}
                            {isPrimaryLink(type) && <span className="icon-material">arrow_outward</span>}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                  {work.skills?.length > 0 && (
                    <ul className="work-skill">
                      {work.skills.map((skill) => (
                        <li key={skill} className="badge badge-soft badge-content">{skill}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </li>
            ))
          }
        </ul>
        {visibleCount < works.length && (
          <button className="button button-soft button-content" onClick={handleShowMore}>Show More</button>
        )}
      </div>
    </section>
  );

};