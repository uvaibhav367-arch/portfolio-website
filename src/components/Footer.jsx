import { LINKS, PROFILE } from '../data/profile';
import { GithubIcon, GlobeIcon, LinkedinIcon, MailIcon } from './Icons';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div>
          <strong style={{ color: 'var(--text)' }}>{PROFILE.name}</strong>
          <div>{PROFILE.role} · {LINKS.location}</div>
        </div>

        <div className="socials">
          <a href={LINKS.github} target="_blank" rel="noreferrer" aria-label="GitHub">
            <GithubIcon />
          </a>
          <a href={LINKS.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <LinkedinIcon />
          </a>
          <a href={LINKS.portfolio} target="_blank" rel="noreferrer" aria-label="Portfolio">
            <GlobeIcon />
          </a>
          <a href={`mailto:${LINKS.email}`} aria-label="Email">
            <MailIcon />
          </a>
        </div>
      </div>
    </footer>
  );
}
