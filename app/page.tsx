
import Link from "next/link";

const visaCategories = [
  {
    code: "EB-1A",
    title: "Extraordinary Ability",
    description:
      "Professional documentation and expert opinion support for individuals demonstrating extraordinary ability.",
  },
  {
    code: "EB-1B",
    title: "Outstanding Researchers",
    description:
      "Research-focused professional opinions and supporting documentation for outstanding academics and researchers.",
  },
  {
    code: "EB-1C",
    title: "Multinational Executives",
    description:
      "Documentation and research support for qualifying multinational managers and executives.",
  },
  {
    code: "EB-2 NIW",
    title: "National Interest Waiver",
    description:
      "Expert analysis of proposed endeavors, professional achievements and potential national importance.",
  },
  {
    code: "O-1",
    title: "Individuals of Extraordinary Ability",
    description:
      "Specialist documentation and professional opinion support for O-1 matters.",
  },
  {
    code: "H-1B",
    title: "Specialty Occupation",
    description:
      "Research and documentation support addressing occupational roles and specialty occupation requirements.",
  },
];

const services = [
  {
    icon: "⚖",
    number: "01",
    title: "Expert Opinion Letters",
    description:
      "Professionally developed expert opinions addressing an individual's qualifications, achievements, proposed work and relevant immigration criteria.",
  },
  {
    icon: "▤",
    number: "02",
    title: "Immigration Petition Support",
    description:
      "Structured research, evidence organisation, petition documentation and attorney-directed preparation support.",
  },
  {
    icon: "✍",
    number: "03",
    title: "Recommendation Letters",
    description:
      "Carefully structured recommendation letter drafting assistance based on genuine recommender knowledge and documented achievements.",
  },
  {
    icon: "⌕",
    number: "04",
    title: "RFE & NOID Support",
    description:
      "Research, evidence mapping and documentation assistance responding to specific requests for further evidence or notices of intent to deny.",
  },
  {
    icon: "◎",
    number: "05",
    title: "Credential & Position Evaluations",
    description:
      "Professional evaluation coordination and research addressing academic qualifications, employment positions and relevant requirements.",
  },
  {
    icon: "▣",
    number: "06",
    title: "Evidence Review & Organisation",
    description:
      "Systematic review, categorisation, indexing and presentation of supporting materials for immigration matters.",
  },
];

const attorneySupport = [
  "Petition research and drafting assistance",
  "Evidence review, organisation and indexing",
  "Recommendation letter drafting coordination",
  "Expert opinion sourcing and coordination",
  "Exhibit preparation and documentation",
  "RFE and NOID response support",
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <div className="container navbar">
          <Link href="/" className="brand">
            LEXBRIDGE
            <span>EVALUATIONS</span>
          </Link>

          <nav className="nav-links">
            <Link href="/">Home</Link>
            <Link href="/services">Services</Link>
            <Link href="/pricing">Pricing</Link>
            <Link href="/payment">Make a Payment</Link>
            <Link href="/#practice">Practice Areas</Link>
            <Link href="/#attorneys">For Attorneys</Link>
            <Link href="/about">About</Link>            
          </nav>

          <Link href="/#contact" className="nav-cta">
            Contact Us
          </Link>
        </div>
      </header>

      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">
              IMMIGRATION RESEARCH & PROFESSIONAL SUPPORT
            </p>

            <h1>
              Stronger cases.
              <br />
              <span>Expert perspectives.</span>
            </h1>

            <p>
              Specialist immigration documentation, independent expert
              opinions and dedicated petition preparation support for
              individuals and US immigration law firms.
            </p>

            <div className="hero-actions">
              <Link href="/services" className="button-primary">
                Explore Our Services
              </Link>

              <Link href="/pricing" className="button-secondary">
                View Pricing
              </Link>
            </div>
          </div>

          <div>
            <img
              className="hero-photo"
              src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=85"
              alt="Professional team of people collaborating around a meeting table"
            />
          </div>
        </div>
      </section>

      <section className="stats">
        <div className="container" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)" }}>
          <div className="stat">
            <strong>06</strong>
            <span>Key immigration categories</span>
          </div>
          <div className="stat">
            <strong>02</strong>
            <span>Dedicated service pathways</span>
          </div>
          <div className="stat">
            <strong>01</strong>
            <span>Commitment to case-specific work</span>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">WHAT WE DO</p>
            <h2>Professional immigration support. Built around the evidence.</h2>
            <p>
              Every immigration matter deserves more than a template.
              We approach each engagement with attention to the individual
              facts, supporting evidence and applicable requirements.
            </p>
          </div>

          <div className="service-grid">
            {services.map((service) => (
              <article className="service-card" key={service.number}>
                <div className="service-icon" aria-hidden="true">
                  {service.icon}
                </div>
                <p className="eyebrow">SERVICE {service.number}</p>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </article>
            ))}
          </div>

          <div style={{ marginTop: 35 }}>
            <Link href="/services" className="button-primary">
              View All Services →
            </Link>
          </div>
        </div>
      </section>

      <section className="section-padding" id="practice">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">OUR IMMIGRATION EXPERTISE</p>
            <h2>Support across key visa categories.</h2>
            <p>
              Professional opinions and documentation support across
              selected employment-based immigration pathways.
            </p>
          </div>

          <div className="service-grid">
            {visaCategories.map((category) => (
              <article className="service-card" key={category.code}>
                <p className="eyebrow">{category.code}</p>
                <h3>{category.title}</h3>
                <p>{category.description}</p>
                <div style={{ marginTop: 20 }}>
                  <Link
                    href="/services"
                    style={{
                      color: "var(--copper)",
                      fontWeight: 700,
                    }}
                  >
                    Discuss this category →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="price-section section-padding">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">TRANSPARENT STARTING PRICES</p>
            <h2>Professional support. Clear starting points.</h2>
            <p style={{ color: "#E1E9E6" }}>
              Understand the starting cost of our services before
              beginning an engagement.
            </p>
          </div>

          <div className="price-grid">
            <article className="price-card">
              <p className="eyebrow">EXPERT OPINION SERVICES</p>
              <h3>Expert Opinion Letters</h3>
              <div className="price">$625</div>
              <p>
                Professional expert opinion services across eligible
                EB-1A, EB-1B, EB-1C, EB-2 NIW, O-1 and H-1B matters.
              </p>
              <p style={{ marginTop: 15, fontSize: 13 }}>
                Includes the expert professional fee. Subject to case
                assessment and availability of a suitably qualified expert.
              </p>
              <Link
                href="/pricing"
                className="button-primary"
                style={{ marginTop: 25 }}
              >
                View Pricing Details
              </Link>
            </article>

            <article className="price-card">
              <p className="eyebrow">ATTORNEY COLLABORATION</p>
              <h3>Full Case Package Preparation</h3>
              <div className="price">$1,750</div>
              <p>
                Attorney-directed research, documentation, evidence
                organisation and petition preparation support.
              </p>
              <p style={{ marginTop: 15, fontSize: 13 }}>
                Scope, complexity, timelines and final engagement terms
                are agreed directly with the attorney.
              </p>
              <Link
                href="/pricing"
                className="button-primary"
                style={{ marginTop: 25 }}
              >
                View Pricing Details
              </Link>
            </article>
          </div>
        </div>
      </section>

      <section className="attorney-section section-padding" id="attorneys">
        <div className="container attorney-grid">
          <div>
            <p className="eyebrow">FOR US IMMIGRATION LAW FIRMS</p>
            <h2 style={{ color: "var(--teal)", margin: "15px 0 20px" }}>
              Your extended petition support team.
            </h2>
            <p style={{ color: "var(--muted)" }}>
              Work with LexBridge on a case-by-case or ongoing basis
              for structured immigration documentation and petition
              preparation support.
            </p>

            <ul
              style={{
                margin: "25px 0",
                paddingLeft: 22,
                color: "var(--ink)",
                lineHeight: 2.2,
              }}
            >
              {attorneySupport.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <p style={{ color: "var(--muted)", fontSize: 14 }}>
              Legal strategy, legal advice, final review and filing
              remain the responsibility of the supervising US attorney.
            </p>

            <Link href="/#contact" className="button-primary" style={{ marginTop: 25 }}>
              Discuss an Attorney Partnership
            </Link>
          </div>

          <img
            className="attorney-photo"
            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1100&q=85"
            alt="Professional woman in business attire"
          />
        </div>
      </section>

      <section className="section-padding">
        <div className="container attorney-grid">
          <img
            className="attorney-photo"
            src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1100&q=85"
            alt="Colleagues working together in a professional office"
          />

          <div>
            <p className="eyebrow">OUR APPROACH</p>
            <h2 style={{ color: "var(--teal)", margin: "15px 0 20px" }}>
              Precision in research. Care in documentation.
            </h2>
            <p style={{ color: "var(--muted)" }}>
              We believe strong immigration documentation begins with
              understanding the person, the professional record and the
              specific requirements of the matter.
            </p>
            <p style={{ color: "var(--muted)", marginTop: 18 }}>
              Our work is developed around case-specific facts and
              supporting materials, rather than generic statements or
              unsupported conclusions.
            </p>
          </div>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="container">
          <p className="eyebrow">START A CONVERSATION</p>
          <h2>Let's discuss your immigration documentation needs.</h2>
          <p style={{ color: "#E1E9E6", marginTop: 18 }}>
            Whether you are an individual seeking professional evaluation
            services or an attorney looking for dedicated case support,
            we welcome your enquiry.
          </p>

          <a
            href="mailto:info@lexbridgeevaluations.com"
            className="email-link"
          >
            info@lexbridgeevaluations.com
          </a>
        </div>
      </section>

      <footer className="site-footer">
        <div className="container">
          <Link href="/" className="brand" style={{ color: "white" }}>
            LEXBRIDGE
            <span>EVALUATIONS</span>
          </Link>

          <p>
            Immigration Research & Professional Support
          </p>

          <p>
            © {new Date().getFullYear()} LexBridge Evaluations.
            All rights reserved.
          </p>

          <small>
            LexBridge Evaluations is an independent immigration
            documentation and professional support provider, not a
            US law firm. We do not guarantee immigration outcomes.
          </small>
        </div>
      </footer>
    </main>
  );
}
