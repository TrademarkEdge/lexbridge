import Link from "next/link";

export default function Pricing() {
  return (
    <main className="pricing-page">
      <div className="topline">
        PROFESSIONAL IMMIGRATION DOCUMENTATION & EVALUATION SERVICES
      </div>

      <header className="navbar">
        <Link href="/" className="brand">
          <span className="brand-symbol">L</span>
          <span className="brand-text">
            LEXBRIDGE
            <small>EVALUATIONS</small>
          </span>
        </Link>

        <nav className="nav-links">
          <Link href="/">Home</Link>
          <Link href="/#services">Services</Link>
          <Link href="/pricing" className="active-nav">Pricing</Link>
          <Link href="/#practice">Practice Areas</Link>
          <Link href="/#attorneys">For Attorneys</Link>
          <Link href="/#contact" className="nav-contact">Contact Us ↗</Link>
        </nav>
      </header>

      <section className="pricing-hero">
        <p className="eyebrow dark-eyebrow">OUR PROFESSIONAL FEES</p>
        <h1>
          Transparent starting points.
          <br />
          <em>Individual case assessment.</em>
        </h1>
        <p>
          Our services are scoped according to the nature of the matter,
          documentation required and professional expertise involved.
        </p>
      </section>

      <section className="pricing-cards">
        <article className="price-card price-dark">
          <div className="price-icon">✧</div>
          <p className="price-category">EXPERT OPINION SERVICES</p>
          <h2>Expert Opinion Letters</h2>
          <div className="price-amount">$625</div>
          <p className="price-description">
            Starting price for eligible matters, subject to case assessment
            and expert availability.
          </p>
          <div className="price-divider" />
          <h3>Service includes</h3>
          <ul>
            <li>Initial case assessment</li>
            <li>Review of relevant applicant materials</li>
            <li>Identification and coordination of a suitable expert</li>
            <li>Case-specific expert opinion coordination</li>
            <li>Professional document coordination</li>
          </ul>
          <a
            className="button copper-button full-button"
            href="mailto:info@lexbridgeevaluations.com?subject=Expert%20Opinion%20Letter%20Enquiry"
          >
            Enquire About Expert Opinions ↗
          </a>
        </article>

        <article className="price-card price-light">
          <div className="price-icon">▤</div>
          <p className="price-category">IMMIGRATION CASE PREPARATION</p>
          <h2>Full Case Packet Preparation</h2>
          <div className="price-amount">$1,750</div>
          <p className="price-description">
            Professional preparation support for eligible immigration
            matters, with scope confirmed before work begins.
          </p>
          <div className="price-divider" />
          <h3>Service may include</h3>
          <ul>
            <li>Initial case and evidence assessment</li>
            <li>Petition research and drafting assistance</li>
            <li>Evidence mapping and organisation</li>
            <li>Recommendation letter drafting coordination</li>
            <li>Expert opinion coordination where appropriate</li>
            <li>Exhibit preparation and document indexing</li>
          </ul>
          <a
            className="button teal-button full-button"
            href="mailto:info@lexbridgeevaluations.com?subject=Full%20Case%20Packet%20Enquiry"
          >
            Discuss Full Case Preparation ↗
          </a>
        </article>
      </section>

      <section className="pricing-note">
        <h2>Attorney retainer services</h2>
        <p>
          For U.S. immigration law firms seeking ongoing paralegal,
          documentation and petition preparation support, retainer
          arrangements are discussed directly. Fees depend on monthly volume,
          case complexity, turnaround requirements and agreed responsibilities.
        </p>
        <a
          href="mailto:info@lexbridgeevaluations.com?subject=Attorney%20Retainer%20Enquiry"
          className="text-link"
        >
          Request an attorney retainer discussion ↗
        </a>
      </section>

      <section className="pricing-contact">
        <p className="eyebrow">HAVE A CASE IN MIND?</p>
        <h2>Let's establish the right scope for your matter.</h2>
        <p>
          Contact us with a brief description of the service you require.
          We will discuss the documentation, scope and applicable fee.
        </p>
        <a className="button copper-button" href="mailto:info@lexbridgeevaluations.com">
          info@lexbridgeevaluations.com ↗
        </a>
      </section>

      <footer className="footer">
        <div className="footer-top">
          <Link href="/" className="brand footer-brand">
            <span className="brand-symbol">L</span>
            <span className="brand-text">
              LEXBRIDGE
              <small>EVALUATIONS</small>
            </span>
          </Link>
          <p>Immigration Research & Professional Support</p>
          <div className="footer-nav">
            <Link href="/">Home</Link>
            <Link href="/#services">Services</Link>
            <Link href="/pricing">Pricing</Link>
            <Link href="/#contact">Contact</Link>
          </div>
        </div>

        <div className="footer-email">
          <span>GET IN TOUCH</span>
          <a href="mailto:info@lexbridgeevaluations.com">
            info@lexbridgeevaluations.com
          </a>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} LexBridge Evaluations. All rights reserved.</span>
          <span>
            LexBridge Evaluations is a professional support service, not a
            U.S. law firm. Legal advice, strategy and filings remain the
            responsibility of qualified legal counsel.
          </span>
        </div>
      </footer>
    </main>
  );
}
