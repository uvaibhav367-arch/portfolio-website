import { useState } from 'react';
import { LINKS } from '../data/profile';
import {
  GithubIcon,
  GlobeIcon,
  LinkedinIcon,
  LocationIcon,
  MailIcon,
  PhoneIcon,
  SendIcon,
} from './Icons';

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const initial = { name: '', email: '', message: '' };

export default function Contact() {
  const [form, setForm] = useState(initial);
  const [status, setStatus] = useState(null);
  const [sending, setSending] = useState(false);

  const update = (field) => (event) =>
    setForm((prev) => ({ ...prev, [field]: event.target.value }));

  const mailtoFallback = () => {
    const subject = `Portfolio enquiry from ${form.name || 'a visitor'}`;
    const body = `${form.message}\n\n— ${form.name} (${form.email})`;
    window.location.href = `mailto:${LINKS.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setStatus({ type: 'ok', text: 'Opening your email client so you can send the message.' });
  };

  const submit = async (event) => {
    event.preventDefault();
    setStatus(null);

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setStatus({ type: 'err', text: 'Please fill in your name, email and message.' });
      return;
    }

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      mailtoFallback();
      return;
    }

    setSending(true);
    try {
      const res = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          service_id: SERVICE_ID,
          template_id: TEMPLATE_ID,
          user_id: PUBLIC_KEY,
          template_params: {
            from_name: form.name,
            reply_to: form.email,
            message: form.message,
          },
        }),
      });

      if (!res.ok) throw new Error(`Request failed with status ${res.status}`);

      setForm(initial);
      setStatus({ type: 'ok', text: 'Thanks! Your message has been sent.' });
    } catch (error) {
      setStatus({ type: 'err', text: `Could not send right now. Email me directly at ${LINKS.email}.` });
    } finally {
      setSending(false);
    }
  };

  const cards = [
    { icon: <MailIcon />, label: 'Email', value: LINKS.email, href: `mailto:${LINKS.email}` },
    { icon: <PhoneIcon />, label: 'Phone', value: LINKS.phone, href: `tel:${LINKS.phone.replace(/\s/g, '')}` },
    { icon: <LocationIcon />, label: 'Location', value: LINKS.location },
    { icon: <GithubIcon />, label: 'GitHub', value: 'View my repositories', href: LINKS.github },
    { icon: <LinkedinIcon />, label: 'LinkedIn', value: 'Connect with me', href: LINKS.linkedin },
    { icon: <GlobeIcon />, label: 'Portfolio', value: 'Live site', href: LINKS.portfolio },
  ];

  return (
    <section className="section" id="contact">
      <div className="container">
        <div className="section-head reveal">
          <p className="eyebrow">Contact</p>
          <h2 className="section-title">Let&apos;s talk</h2>
          <p className="section-sub">
            Whether it&apos;s a job opportunity, a project idea, or just feedback on my work — my
            inbox is open.
          </p>
        </div>

        <div className="contact-grid">
          <div className="contact-info reveal">
            {cards.map((card) => (
              <div className="contact-card" key={card.label}>
                <span className="contact-icon">{card.icon}</span>
                <div>
                  <small>{card.label}</small>
                  {card.href ? (
                    <a href={card.href} target="_blank" rel="noreferrer">
                      <span>{card.value}</span>
                    </a>
                  ) : (
                    <span>{card.value}</span>
                  )}
                </div>
              </div>
            ))}
          </div>

          <form className="form reveal" onSubmit={submit} noValidate>
            <div className="form-row">
              <div className="field">
                <label htmlFor="name">Name</label>
                <input
                  id="name"
                  type="text"
                  placeholder="Your name"
                  value={form.name}
                  onChange={update('name')}
                />
              </div>
              <div className="field">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  value={form.email}
                  onChange={update('email')}
                />
              </div>
            </div>

            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                rows="5"
                placeholder="Tell me about the role or project..."
                value={form.message}
                onChange={update('message')}
              />
            </div>

            {status && <div className={`form-status ${status.type}`}>{status.text}</div>}

            <button className="btn btn-primary" type="submit" disabled={sending}>
              <SendIcon width={17} height={17} />
              {sending ? 'Sending...' : 'Send message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
