import { ACTIVITIES, CERTIFICATIONS, EDUCATION } from '../data/profile';

export function Education() {
  return (
    <section className="section" id="education">
      <div className="container">
        <div className="section-head reveal">
          <p className="eyebrow">Education</p>
          <h2 className="section-title">Where I studied</h2>
        </div>

        <div className="timeline">
          {EDUCATION.map((item) => (
            <div className="timeline-item reveal" key={item.degree}>
              <div className="timeline-top">
                <h3>{item.degree}</h3>
                <span className="timeline-meta">{item.year}</span>
              </div>
              <p className="timeline-inst">{item.institution}</p>
              <span className="score">{item.score}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Certifications() {
  return (
    <section className="section section-alt" id="certifications">
      <div className="container">
        <div className="section-head reveal">
          <p className="eyebrow">Certifications &amp; Beyond</p>
          <h2 className="section-title">Training and activities</h2>
        </div>

        <div className="timeline">
          {CERTIFICATIONS.map((cert) => (
            <div className="timeline-item reveal" key={cert.title}>
              <div className="timeline-top">
                <h3>{cert.title}</h3>
                <span className="timeline-meta">{cert.period}</span>
              </div>
              <p className="timeline-inst">{cert.issuer}</p>
              <p className="timeline-desc">{cert.description}</p>
            </div>
          ))}
        </div>

        <div className="activity-list">
          {ACTIVITIES.map((item) => (
            <div className="activity reveal" key={item.text}>
              <b>{item.year}</b>
              <span>{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
