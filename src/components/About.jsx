import { LINKS, PROFILE } from '../data/profile';

export default function About() {
  const facts = [
    { label: 'Degree', value: 'B.Tech, Electronics & Communication (2025)' },
    { label: 'CGPA', value: '7.8 — JECRC Jaipur' },
    { label: 'Focus', value: 'Full-stack JavaScript (MERN)' },
    { label: 'Projects', value: '4 — AI Blog, Portfolio, Calculator, UI Clone' },
  ];

  return (
    <section className="section section-alt" id="about">
      <div className="container">
        <div className="section-head reveal">
          <p className="eyebrow">About</p>
          <h2 className="section-title">A developer who ships complete, working products</h2>
        </div>

        <div className="about-grid">
          <div className="about-text reveal">
            <p>
              I&apos;m {PROFILE.name}, an aspiring MERN Stack Developer based in {LINKS.location}. I
              specialise in building web applications end to end — designing RESTful APIs with Express
              and Mongoose, modelling data in MongoDB, and turning it into clean, accessible React
              interfaces.
            </p>
            <p>
              My interest in web development started during a Front-End Development training with
              Internzvalley, where I built a responsive UI clone and realised how much I enjoyed
              turning designs into functional pages. A JavaScript course with Learn and Build pushed
              me further into ES6+, DOM manipulation and asynchronous programming, and my final
              project there became a vanilla JavaScript calculator.
            </p>
            <p>
              I am comfortable owning a feature from database schema to deployed interface, and I care
              about the details that make software usable — responsive layouts, semantic markup,
              readable code and honest error handling. I am now looking for an entry-level developer
              role where I can learn from an experienced team and contribute to real products.
            </p>
          </div>

          <dl className="fact-list reveal">
            {facts.map((fact) => (
              <div className="fact" key={fact.label}>
                <dt>{fact.label}</dt>
                <dd>{fact.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
