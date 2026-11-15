
export default function AboutPage() {
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
            <p className="eyebrow">ABOUT LEXBRIDGE</p>
            <h1>Thoughtful research. Structured documentation. Professional support.</h1>
            <p>
              LexBridge Evaluations provides immigration research,
              expert opinion letter coordination and professional
              documentation support for individuals and US
              immigration law firms.
            </p>
            <a className="button-primary" href="/contact">
              Speak with our team
            </a>
          </div>

          <img
            className="hero-photo"
            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1100&q=85"
            alt="Professional woman with a clearly visible face"
          />
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <p className="eyebrow">WHO WE ARE</p>
          <h2>Supporting the work behind a well-prepared case.</h2>
          <p>
            Employment-based immigration matters often require
            extensive research, carefully organised evidence and
            professional documentation. LexBridge exists to help
            make that work more structured and manageable.
          </p>
          <p>
            We work with individuals and immigration law firms
            to identify documentation needs, coordinate relevant
            professional input and prepare materials within an
            agreed scope of work.
          </p>
        </div>
      </section>

      <section className="attorney-section section-padding">
        <div className="container">
          <p className="eyebrow">OUR APPROACH</p>
          <h2>Four principles guide our work.</h2>

          <div className="service-grid" style={{ marginTop: 36 }}>
            <article className="service-card">
              <div className="service-icon">01</div>
              <h3>Case-specific work</h3>
              <p>
                We approach each engagement according to its
                particular facts, documentation and requirements.
              </p>
            </article>

            <article className="service-card">
              <div className="service-icon">02</div>
              <h3>Research-led preparation</h3>
              <p>
                We prioritise relevant research, clear reasoning
                and organised supporting materials.
              </p>
            </article>

            <article className="service-card">
              <div className="service-icon">03</div>
              <h3>Professional collaboration</h3>
              <p>
                We coordinate with relevant professionals and
                work within the instructions and scope agreed
                with each client or supervising attorney.
              </p>
            </article>

            <article className="service-card">
              <div className="service-icon">04</div>
              <h3>Clear communication</h3>
              <p>
                We aim for transparent expectations, defined
                deliverables and practical communication
                throughout an engagement.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="contact-section">
        <div className="container">
          <p className="eyebrow">CONNECT WITH LEXBRIDGE</p>
          <h2>Let's discuss how we can support your work.</h2>
          <p>
            Contact us to discuss your documentation or
            professional support requirements.
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
          provide legal advice. Legal advice, case strategy,
          final review and filing remain the responsibility of
          the supervising US attorney.
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
