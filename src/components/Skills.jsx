import { SKILL_GROUPS } from '../data/profile';

export default function Skills() {
  return (
    <section className="section" id="skills">
      <div className="container">
        <div className="section-head reveal">
          <p className="eyebrow">Skills</p>
          <h2 className="section-title">My technical toolkit</h2>
          <p className="section-sub">
            Everything I have used to build and deploy the projects on this site.
          </p>
        </div>

        <div className="skills-grid">
          {SKILL_GROUPS.map((group) => (
            <div className="skill-card reveal" key={group.title}>
              <h3>{group.title}</h3>
              <div className="tag-list">
                {group.items.map((item) => (
                  <span className="tag" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
