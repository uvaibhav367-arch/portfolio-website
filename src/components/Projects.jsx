import { PROJECTS } from '../data/profile';
import { ExternalIcon, GithubIcon } from './Icons';

export default function Projects() {
  return (
    <section className="section section-alt" id="projects">
      <div className="container">
        <div className="section-head reveal">
          <p className="eyebrow">Projects</p>
          <h2 className="section-title">Things I have built</h2>
          <p className="section-sub">
            Each project is a separate repository with its own README, and each has a live demo you
            can click through.
          </p>
        </div>

        <div className="projects-grid">
          {PROJECTS.map((project) => (
            <article className="project reveal" key={project.title}>
              <div className="project-top">
                <div>
                  <h3>{project.title}</h3>
                  <p className="project-tech">{project.tech}</p>
                </div>
              </div>

              <p className="project-desc">{project.description}</p>

              <ul className="feature-list">
                {project.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>

              <div className="project-links">
                <a className="link-btn" href={project.repo} target="_blank" rel="noreferrer">
                  <GithubIcon width={16} height={16} /> Code
                </a>
                <a className="link-btn" href={project.live} target="_blank" rel="noreferrer">
                  <ExternalIcon width={16} height={16} /> Live demo
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
