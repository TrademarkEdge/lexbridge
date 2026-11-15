
export default function AttorneysPage() {
  const services = [
    {
      title: "Expert Opinion Letter Coordination",
      description:
        "Support with identifying relevant expertise, coordinating professional input and preparing case-specific opinion letter materials.",
    },
    {
      title: "Immigration Research",
      description:
        "Focused research and supporting analysis to help organise the documentary and professional evidence relevant to a matter.",
    },
    {
      title: "Petition Documentation",
      description:
        "Structured preparation and organisation of supporting documentation in accordance with the supervising attorney's instructions.",
    },
    {
      title: "RFE and NOID Documentation Support",
      description:
        "Research and evidence organisation to assist counsel in preparing responses to Requests for Evidence and Notices of Intent to Deny.",
    },
    {
      title: "Recommendation Letter Support",
      description:
        "Assistance with research, evidence review and preparation of case-specific recommendation letter drafts for appropriate review.",
    },
    {
      title: "Ongoing Case Support",
      description:
        "Flexible research and documentation assistance for law firms managing employment-based immigration matters.",
    },
  ];

  return (
    <main>
      <header className="site-header">
        <nav className="navbar container">
          <a className="brand" href="/">LexBridge Evaluations</a>
          <div className="nav-links">
            <a href="/">Home</a>
            <a href="/services">Services</a>
            <a href="/pricing">Pricing</a>
            <a href="/practice-areas">Practice Areas</a>
            <a href="/attorneys">For Attorneys</a>
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
          </div>
        </nav>
      </header>

      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">FOR US IMMIGRATION LAW FIRMS</p>
            <h1>A dependable documentation support partner.</h1>
            <p>
              LexBridge Evaluations provides research,
              professional documentation and case preparation
              support to US immigration law firms handling
              employment-based immigration matters.
            </p>
            <div className="hero-actions">
              <a className="button-primary" href="/contact">
                Discuss a partnership
              </a>
              <a className="button-secondary" href="/services">
                Explore services
              </a>
            </div>
          </div>

          <img
            className="hero-photo"
            src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=85"
            alt="Professionals with visible faces collaborating around a meeting table"
          />
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <p className="eyebrow">OUR SUPPORT SERVICES</p>
          <h2>Practical support for demanding casework.</h2>
          <p>
            Work is undertaken according to the scope and
            instructions agreed with the law firm.
          </p>

          <div className="service-grid" style={{ marginTop: 40 }}>
            {services.map((service) => (
              <article className="service-card" key={service.title}>
                <div className="service-icon">§</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="attorney-section section-padding">
        <div className="container attorney-grid">
          <div>
            <p className="eyebrow">ENGAGEMENT MODEL</p>
            <h2>Structured around your firm's workflow.</h2>
            <p>
              We discuss your firm's requirements, the type of
              matters involved, expected deliverables and
              turnaround expectations before agreeing on an
              engagement.
            </p>
          </div>
          <div>
            <h3>Our working principles</h3>
            <ul>
              <li>Clearly defined scope and deliverables.</li>
              <li>Case-specific research and documentation.</li>
              <li>Communication aligned with your workflow.</li>
              <li>Confidential handling of client materials.</li>
              <li>Retainer arrangements negotiated separately.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="contact-section">
        <div className="container">
          <p className="eyebrow">LET'S WORK TOGETHER</p>
          <h2>Looking for a documentation support partner?</h2>
          <p>
            Tell us about your firm's requirements and the
            support you are looking to outsource.
          </p>
          <a
            className="email-link"
            href="mailto:info@lexbridgeevaluations.com"
          >
            info@lexbridgeevaluations.com
          </a>
        </div>
      </section>

      <div className="container">
        <p style={{ margin: "32px 0", fontSize: 13 }}>
          LexBridge Evaluations is not a US law firm and does not
          provide legal advice or independently determine legal
          strategy. Legal advice, case strategy, final review
          and filing remain the responsibility of the supervising
          US attorney.
        </p>
      </div>

      <footer className="site-footer">
        <div className="container">
          © {new Date().getFullYear()} LexBridge Evaluations.
          All rights reserved.
        </div>
      </footer>
    </main>
  );
}
