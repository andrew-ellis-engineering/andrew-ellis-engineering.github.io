import React, { useEffect, useState } from "react";
import headShot from "./assets/images/headshot.jpg";
import "./App.css";

type CaseStudy = {
  title: string;
  context: string;
  outcome: string;
};

type TimelineItem = {
  period: string;
  title: string;
  detail: string;
};

type PersonalItem = {
  title: string;
  detail: string;
};

type ThemePreference = "system" | "light" | "dark";

const caseStudies: CaseStudy[] = [
  {
    title: "Project Destination at Capital One",
    context:
      "I joined about 75 days before Legal Day One of Project Destination, before Capital One legally owned the Hopper-built tech assets we were preparing to absorb.",
    outcome:
      "I now own test automation strategy, code coverage, static analysis, infrastructure as code, and observability across an integration effort spanning 350+ repositories, roughly 130 deployables, 2.8 million lines of application code, and petabytes of data moving from GCP to AWS."
  },
  {
    title: "Indeed monolith modernization",
    context:
      "At Indeed, I inherited a Django and RabbitMQ monolith on Python 2.7, years past end of life, with zero tests, no reliable local build, and production as the only place it really ran.",
    outcome:
      "I helped turn it into a Spring Boot and AWS microservice architecture with full test coverage, CI/CD, and observability, so dependency upgrades and operational changes stopped taking months of caution and guesswork."
  },
  {
    title: "The long route here",
    context:
      "My path was mathematics and computer science at Transylvania, cryptography research at NC State and MIT Lincoln Laboratory, a stretch working at a Kentucky micro-distillery, then QA, then software engineering.",
    outcome:
      "That sequence taught me to care less about polished narratives and more about how systems actually behave under strain, whether the system is distributed software, a production deployment, or a fermentation process."
  }
];

const timeline: TimelineItem[] = [
  {
    period: "Right now",
    title: "Making a large migration legible",
    detail:
      "My current work is making a very large integration effort understandable and operable: how it builds, how it is tested, how it is observed, and how teams know a change is safe."
  },
  {
    period: "At Capital One",
    title: "Owning the quality bar across the platform",
    detail:
      "I focus on CI/CD, test automation strategy, code coverage, static analysis, IaC, and observability because those are the controls that keep a migration from becoming a pile of exceptions and heroics."
  },
  {
    period: "Why this fits me",
    title: "The job is understanding the system, not just the code",
    detail:
      "The useful part of my work is not writing one more service. It is understanding what the system is for, how it fails, who depends on it, and where weak process turns into operational risk."
  }
];

const principles = [
  "I do not care about story points. I care whether a team understands the work, the risk, and the actual sequence required to ship it well.",
  "Testing is not cleanup work. If the business logic matters, the tests, coverage requirements, and static analysis around it matter too.",
  "Noisy monitors are not harmless. Alert fatigue is its own failure mode, and a system that cries wolf trains people to miss the real fire.",
  "Bad infrastructure decisions compound quietly. If production safety depends on manual Terraform applies and tribal knowledge, that is not process. It is liability."
];

const capabilities = [
  "Taking large, messy systems and making their quality bar explicit",
  "Designing CI/CD, test strategy, and observability for teams that cannot afford guesswork",
  "Modernizing brittle legacy platforms without pretending the migration risk away",
  "Working across architecture, infrastructure, and application code when the seams are where the problems live"
];

const personal: PersonalItem[] = [
  {
    title: "Family first, in the literal sense",
    detail:
      "My wife, daughter, and dogs are the center of my life. Everything I have built in my career is in service of taking care of them. That is the real answer to why any of this matters to me."
  },
  {
    title: "Kentucky stays with me",
    detail:
      "I was born and raised in Kentucky and I am a lifelong University of Kentucky athletics fan. Before software became my career, I worked at a micro-distillery making bourbon and spirits, leading tours and tastings, and handling sales and marketing. It is also where I met my wife."
  },
  {
    title: "The specifics are the good part",
    detail:
      "I am a Certified Bourbon Steward, and my wife and I later helped hand-select a private barrel for a Lexington-area group. After our daughter was born, I bought a home espresso machine because I needed faster caffeine and ended up loving the whole ritual. It is now my favorite part of the morning."
  }
];

const contactLinks = [
  {
    label: "Email",
    href: "mailto:andrew.ellis.engineering@gmail.com",
    value: "andrew.ellis.engineering@gmail.com"
  },
  {
    label: "GitHub",
    href: "https://github.com/andrew-ellis-engineering",
    value: "github.com/andrew-ellis-engineering"
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/andrew-ellis-833920103",
    value: "LinkedIn profile"
  }
];

const THEME_STORAGE_KEY = "andrew-ellis-theme";

function getInitialThemePreference(): ThemePreference {
  if (typeof window === "undefined") {
    return "system";
  }

  const savedPreference = window.localStorage.getItem(THEME_STORAGE_KEY);
  if (savedPreference === "light" || savedPreference === "dark" || savedPreference === "system") {
    return savedPreference;
  }

  return "system";
}

export default function App() {
  const [themePreference, setThemePreference] = useState<ThemePreference>(getInitialThemePreference);

  useEffect(() => {
    const root = document.documentElement;

    if (themePreference === "system") {
      root.removeAttribute("data-theme");
      window.localStorage.setItem(THEME_STORAGE_KEY, "system");
      return;
    }

    root.setAttribute("data-theme", themePreference);
    window.localStorage.setItem(THEME_STORAGE_KEY, themePreference);
  }, [themePreference]);

  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>

      <header className="site-header">
        <div className="container masthead">
          <div className="masthead-copy">
            <div className="masthead-topline">
              <p className="kicker">Andrew Ellis</p>
              <div className="theme-toggle" role="group" aria-label="Color theme">
                {(["system", "light", "dark"] as ThemePreference[]).map((theme) => (
                  <button
                    key={theme}
                    type="button"
                    className={`theme-toggle-button${themePreference === theme ? " is-active" : ""}`}
                    onClick={() => setThemePreference(theme)}
                    aria-pressed={themePreference === theme}
                  >
                    {theme}
                  </button>
                ))}
              </div>
            </div>
            <h1>I build the quality bar for systems too large to fake.</h1>
            <p className="intro-statement">
              I am a Lead Software Engineer at Capital One working on Project Destination, the integration of the tech
              assets built by Hopper for Capital One Travel.
            </p>
            <p className="intro-support">
              Most of my work sits where reliability, migration risk, and organizational ambiguity meet. I tend to be
              most useful when the system is sprawling, the ownership is messy, and someone needs to make testing,
              delivery, infrastructure, and observability coherent enough that other engineers can trust what they are
              changing.
            </p>
          </div>

          <aside className="identity-panel" aria-label="Professional profile">
            <img src={headShot} alt="Portrait of Andrew Ellis" className="portrait" />
            <div className="identity-meta">
              <p>Lead Software Engineer</p>
              <p>Capital One</p>
              <p>Test strategy, IaC, observability, modernization</p>
            </div>
          </aside>
        </div>
      </header>

      <main id="main-content">
        <section className="section surface-band" aria-labelledby="signal-title">
          <div className="container signal-grid">
            <div>
              <p className="section-label">Selected signal</p>
              <h2 id="signal-title">Named work, real constraints.</h2>
            </div>
            <div className="case-study-list">
              {caseStudies.map((study) => (
                <article key={study.title} className="case-study-card">
                  <h3>{study.title}</h3>
                  <p>{study.context}</p>
                  <p>{study.outcome}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" aria-labelledby="approach-title">
          <div className="container split-section">
            <div>
              <p className="section-label">Approach</p>
              <h2 id="approach-title">I care how the system fails.</h2>
              <p className="section-intro">
                My background was not a straight line, and that helps. I spent time in cryptography research, in a
                distillery, in QA, and in platform work. The through line is paying attention to failure modes, weak
                assumptions, and the cost of leaving someone else a brittle system.
              </p>
            </div>
            <div className="text-panel">
              <ul className="principles-list">
                {principles.map((principle) => (
                  <li key={principle}>{principle}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="section timeline-section" aria-labelledby="timeline-title">
          <div className="container split-section">
            <div>
              <p className="section-label">Current focus</p>
              <h2 id="timeline-title">What I am doing now.</h2>
            </div>
            <div className="timeline-list">
              {timeline.map((item) => (
                <article key={item.title} className="timeline-item">
                  <p className="timeline-period">{item.period}</p>
                  <h3>{item.title}</h3>
                  <p>{item.detail}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" aria-labelledby="capabilities-title">
          <div className="container split-section">
            <div>
              <p className="section-label">Capabilities</p>
              <h2 id="capabilities-title">Where I tend to be most useful.</h2>
            </div>
            <div className="text-panel">
              <ul className="capability-list">
                {capabilities.map((capability) => (
                  <li key={capability}>{capability}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="section surface-band" aria-labelledby="personal-title">
          <div className="container signal-grid">
            <div>
              <p className="section-label">Personal</p>
              <h2 id="personal-title">The reason any of this matters.</h2>
              <p className="section-intro">
                Work is important to me, but it is not the center. My family is. The rest of this only makes sense in
                relation to them.
              </p>
            </div>
            <div className="case-study-list">
              {personal.map((item) => (
                <article key={item.title} className="case-study-card">
                  <h3>{item.title}</h3>
                  <p>{item.detail}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section contact-section" aria-labelledby="contact-title">
          <div className="container contact-block">
            <div>
              <p className="section-label">Contact</p>
              <h2 id="contact-title">Reach out if the work is real.</h2>
              <p className="section-intro">
                If you are dealing with a legacy platform, a migration that has gotten bigger than expected, or a team
                that needs a higher engineering bar than it has today, I am happy to talk.
              </p>
            </div>
            <ul className="contact-links" aria-label="Contact links">
              {contactLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                    className="contact-link"
                    aria-label={`${link.label} ${link.value}`}
                  >
                    <span>{link.label}</span>
                    <strong>{link.value}</strong>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <p>Built with care. Last updated May 2026.</p>
        </div>
      </footer>
    </div>
  );
}
