import { getLandingPageData } from "../lib/site-content";

function FounderQuote({ founder }) {
  return (
    <article className="founder-card">
      <span className="quote-mark">“</span>
      <div className="founder-meta">
        <div className="avatar" aria-hidden="true">
          {founder.initials}
        </div>
        <div>
          <h3>{founder.name}</h3>
          <p>{founder.role}</p>
        </div>
      </div>
      <p className="founder-quote">{founder.quote}</p>
    </article>
  );
}

function PortfolioTile({ item }) {
  return (
    <article className="portfolio-card">
      <div className={`portfolio-visual ${item.visualClass}`} aria-hidden="true" />
      <div className="portfolio-copy">
        <p className="kicker">{item.category}</p>
        <h3>{item.title}</h3>
        <p>{item.summary}</p>
      </div>
    </article>
  );
}

function JobCard({ job }) {
  return (
    <article className="job-card">
      <div>
        <p className="kicker">{job.team}</p>
        <h3>{job.title}</h3>
        <p>{job.location}</p>
      </div>
      <p className="job-card__summary">{job.summary}</p>
      <a href={job.href} className="text-link">
        View role
      </a>
    </article>
  );
}

export default async function HomePage() {
  const page = await getLandingPageData();

  return (
    <main className="page-shell">
      <section className="hero section">
        <div className="hero-copy">
          <p className="eyebrow">{page.hero.eyebrow}</p>
          <h1>{page.hero.title}</h1>
          <p className="hero-description">{page.hero.description}</p>
          <div className="hero-actions">
            <a href={page.hero.primaryCta.href} className="button button--primary">
              {page.hero.primaryCta.label}
            </a>
            <a href={page.hero.secondaryCta.href} className="button button--ghost">
              {page.hero.secondaryCta.label}
            </a>
          </div>
        </div>

        <div className="hero-media">
          <div className="hero-media__glow" aria-hidden="true" />
          <div className="hero-media__panel">
            <div className="hero-media__badge">RWA</div>
            <div className="hero-media__frame hero-media__frame--main" />
            <div className="hero-media__row">
              <div className="hero-media__frame hero-media__frame--small" />
              <div className="hero-media__frame hero-media__frame--small alt" />
            </div>
          </div>
        </div>
      </section>

      <section className="section section--narrow">
        <div className="section-heading">
          <p className="eyebrow">{page.founders.eyebrow}</p>
          <h2>{page.founders.title}</h2>
        </div>
        <div className="founder-grid">
          {page.founders.items.map((founder) => (
            <FounderQuote key={founder.name} founder={founder} />
          ))}
        </div>
      </section>

      <section className="section section--narrow">
        <div className="logo-strip" aria-label="Backed by and partnered with">
          {page.logoStrip.map((logo) => (
            <span key={logo}>{logo}</span>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <p className="eyebrow">{page.portfolio.eyebrow}</p>
          <h2>{page.portfolio.title}</h2>
          <p>{page.portfolio.description}</p>
        </div>
        <div className="portfolio-grid">
          {page.portfolio.items.map((item) => (
            <PortfolioTile key={item.title} item={item} />
          ))}
        </div>
      </section>

      <section className="section thesis-section" id="thesis">
        <div className="thesis-copy">
          <p className="eyebrow">{page.thesis.eyebrow}</p>
          <h2>{page.thesis.title}</h2>
          <p>{page.thesis.description}</p>
        </div>
        <div className="thesis-list">
          {page.thesis.points.map((point) => (
            <article key={point.title} className="thesis-item">
              <h3>{point.title}</h3>
              <p>{point.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section section--narrow jobs-section" id="jobs">
        <div className="section-heading">
          <p className="eyebrow">{page.jobs.eyebrow}</p>
          <h2>{page.jobs.title}</h2>
          <p>{page.jobs.description}</p>
        </div>
        <div className="job-list">
          {page.jobs.items.map((job) => (
            <JobCard key={job.slug} job={job} />
          ))}
        </div>
      </section>

      <footer className="site-footer">
        <div>
          <p className="eyebrow">{page.footer.tagline}</p>
          <h2>{page.footer.title}</h2>
        </div>
        <div className="footer-columns">
          {page.footer.columns.map((column) => (
            <div key={column.title}>
              <h3>{column.title}</h3>
              <ul>
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </footer>
    </main>
  );
}
