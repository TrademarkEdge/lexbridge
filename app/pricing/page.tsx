
export default function PricingPage() {
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

      <section className="section-padding">
        <div className="container">
          <p className="eyebrow">TRANSPARENT PRICING</p>
          <h1>Professional support. Clear fees.</h1>
          <p>
            Defined service options for individuals and immigration
            law firms. Every engagement begins with a discussion of
            your requirements, scope and deliverables.
          </p>

          <div className="price-section">
            <div className="price-grid">
              <article className="price-card">
                <p className="eyebrow">EXPERT OPINION</p>
                <h2>Expert Opinion Letters</h2>
                <p className="price">$625</p>
                <p>
                  Professional expert opinion letter preparation
                  based on the case materials, relevant criteria
                  and agreed scope.
                </p>
                <a className="button-primary" href="/contact">
                  Discuss your case
                </a>
              </article>

              <article className="price-card">
                <p className="eyebrow">CASE PREPARATION</p>
                <h2>Full Case Packet Preparation</h2>
                <p className="price">$1,750</p>
                <p>
                  Structured documentation and supporting
                  materials prepared around the agreed case
                  requirements and evidence.
                </p>
                <a className="button-primary" href="/contact">
                  Discuss your case
                </a>
              </article>

              <article className="price-card">
                <p className="eyebrow">LAW FIRM PARTNERSHIPS</p>
                <h2>Attorney Retainer Services</h2>
                <p className="price">Custom</p>
                <p>
                  Ongoing research, documentation and case
                  preparation support for US immigration law firms.
                  Retainer fees are negotiated separately.
                </p>
                <a className="button-primary" href="/contact">
                  Enquire about a retainer
                </a>
              </article>
            </div>
          </div>

          <section className="contact-section">
            <div className="container">
              <h2>Let's discuss your requirements.</h2>
              <p>
                Final scope, timelines and applicable fees are
                confirmed before an engagement begins.
              </p>
              <a
                className="email-link"
                href="mailto:info@lexbridgeevaluations.com"
              >
                info@lexbridgeevaluations.com
              </a>
            </div>
          </section>

          <p style={{ marginTop: 32, fontSize: 13 }}>
            LexBridge Evaluations provides immigration research and
            documentation support. It is not a US law firm and does
            not provide legal advice or guarantee immigration
            outcomes. Legal advice, case strategy, final review and
            filing remain the responsibility of the supervising
            US attorney.
          </p>
        </div>
      </section>

      <footer className="site-footer">
        <div className="container">
          © {new Date().getFullYear()} LexBridge Evaluations.
          All rights reserved.
        </div>
      </footer>
    </main>
  );
}
