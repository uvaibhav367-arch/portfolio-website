import { LINKS, PROFILE } from '../data/profile';
import { GithubIcon, GlobeIcon, LinkedinIcon, MailIcon } from './Icons';

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container hero-grid">
        <div className="hero-text-wrap">
          <span className="hero-badge">
            <span className="dot" />
            Open to entry-level MERN roles
          </span>

          <h1 className="hero-title">
            Hi, I&apos;m <span>{PROFILE.name}</span>
          </h1>
          <p className="hero-role">{PROFILE.role} — React, Node.js, Express &amp; MongoDB</p>
          <p className="hero-text">{PROFILE.tagline}</p>

          <div className="hero-actions">
            <a className="btn btn-primary" href="#projects">
              View my work
            </a>
            <a className="btn btn-ghost" href="#contact">
              <MailIcon width={17} height={17} />
              Get in touch
            </a>
          </div>

          <div className="hero-meta">
            <a href={LINKS.github} target="_blank" rel="noreferrer">
              <GithubIcon width={17} height={17} /> GitHub
            </a>
            <a href={LINKS.linkedin} target="_blank" rel="noreferrer">
              <LinkedinIcon width={17} height={17} /> LinkedIn
            </a>
            <a href={LINKS.portfolio} target="_blank" rel="noreferrer">
              <GlobeIcon width={17} height={17} /> Portfolio
            </a>
          </div>
        </div>

        <div className="hero-card">
          <div className="code-window">
            <div className="code-dots">
              <i />
              <i />
              <i />
            </div>
            <div>
              <span className="c">// developer.js</span>
              <br />
              <span className="k">const</span> <span className="k">vaibhav</span> = {'{'}
              <br />
              &nbsp;&nbsp;role: <span className="s">&apos;MERN Stack Developer&apos;</span>,
              <br />
              &nbsp;&nbsp;location: <span className="s">&apos;Jaipur, India&apos;</span>,
              <br />
              &nbsp;&nbsp;education: <span className="s">&apos;B.Tech ECE 2025&apos;</span>,
              <br />
              &nbsp;&nbsp;stack: [<span className="s">&apos;React&apos;</span>, <span className="s">&apos;Node&apos;</span>,{' '}
              <span className="s">&apos;Express&apos;</span>, <span className="s">&apos;MongoDB&apos;</span>],
              <br />
              &nbsp;&nbsp;available: <span className="k">true</span>,
              <br />
              {'}'};
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
