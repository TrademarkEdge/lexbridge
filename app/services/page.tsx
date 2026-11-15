
import Link from "next/link";

const categories = [
  {
    code: "EB-1A",
    title: "Extraordinary Ability",
    description:
      "Expert opinion support addressing professional achievements, recognition, original contributions and the applicant's field of expertise.",
  },
  {
    code: "EB-1B",
    title: "Outstanding Researchers and Professors",
    description:
      "Professional opinion support addressing research contributions, academic standing and recognition within the relevant field.",
  },
  {
    code: "EB-1C",
    title: "Multinational Executives and Managers",
    description:
      "Documentation and research support concerning managerial and executive experience and relevant organisational roles.",
  },
  {
    code: "EB-2 NIW",
    title: "National Interest Waiver",
    description:
      "Expert opinion and research support addressing the proposed endeavor, professional qualifications and relevant considerations under the Dhanasar framework.",
  },
  {
    code: "O-1",
    title: "Individuals of Extraordinary Ability or Achievement",
    description:
      "Professional opinions and supporting documentation addressing an individual's record of achievement and recognition.",
  },
  {
    code: "H-1B",
    title: "Specialty Occupation",
    description:
      "Position-related research and documentation support addressing occupational duties, qualifications and specialty occupation considerations.",
  },
];

const deliverables = [
  "Initial review of the information and supporting materials provided",
  "Case-specific research and professional documentation",
  "Coordination with relevant experts where appropriate",
  "Evidence organisation and supporting document preparation",
  "Quality review and delivery of agreed documentation",
];

export default function ServicesPage() {
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
            <Link href="/#practice">Practice Areas</Link>
            <Link href="/#attorneys">For Attorneys</Link>
          </nav>

          <Link href="/#contact" className="nav-cta">
            Contact Us
          </Link>
        </div>
      </header>

      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">OUR PROFESSIONAL SERVICES</p>
            <h1>
              Documentation
              <br />
              <span>with purpose.</span>
            </h1>
            <p>
              Immigration research, expert opinion coordination and
              structured petition support for individuals and US
              immigration law firms.
            </p>
            <div className="hero-actions">
              <Link href="/pricing" className="button-primary">
                View Our Pricing
              </Link>
              <Link href="/#contact" className="button-secondary">
                Make an Enquiry
              </Link>
            </div>
          </div>

          <img
            className="hero-photo"
            src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=85"
            alt="Professionals with visible faces collaborating in an office"
          />
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">OUR CORE SERVICES</p>
            <h2>Specialist support for complex immigration matters.</h2>
            <p>
              Each engagement is assessed individually. The service,
              documentation and scope of work are agreed before preparation
              begins.
            </p>
          </div>

          <div className="service-grid">
            <article className="service-card">
              <div className="service-icon">⚖</div>
              <p className="eyebrow">01 · EXPERT ANALYSIS</p>
              <h3>Expert Opinion Letters</h3>
              <p>
                Expert opinions provide professional analysis of an
                applicant's qualifications, achievements, work or proposed
                endeavor. Where appropriate, we coordinate with suitably
                qualified experts whose opinions are grounded in the
                materials reviewed and their genuine professional expertise.
              </p>
              <p><strong>Starting price: $625</strong></p>
              <Link href="/pricing" className="text-link">
                View expert opinion pricing →
              </Link>
            </article>

            <article className="service-card">
              <div className="service-icon">▤</div>
              <p className="eyebrow">02 · PETITION DOCUMENTATION</p>
              <h3>Full Case Packet Preparation</h3>
              <p>
                Attorney-directed support involving case research, petition
                documentation, evidence mapping, supporting letters,
                exhibit organisation and preparation of an organised
                case packet for attorney review.
              </p>
              <p><strong>Starting price: $1,750</strong></p>
              <Link href="/pricing" className="text-link">
                View case preparation pricing →
              </Link>
            </article>

            <article className="service-card">
              <div className="service-icon">✍</div>
              <p className="eyebrow">03 · PROFESSIONAL TESTIMONY</p>
              <h3>Recommendation Letters</h3>
              <p>
                Drafting assistance for recommendation letters based on
                genuine recommender knowledge, documented achievements
                and the specific purpose of the immigration petition.
              </p>
              <Link href="/pricing" className="text-link">
                Discuss your requirements →
              </Link>
            </article>

            <article className="service-card">
              <div className="service-icon">⌕</div>
              <p className="eyebrow">04 · RESPONSE DOCUMENTATION</p>
              <h3>RFE & NOID Support</h3>
              <p>
                Research, issue identification, evidence mapping and
                supporting documentation assistance for requests for
                evidence and notices of intent to deny.
              </p>
              <Link href="/pricing" className="text-link">
                Discuss your requirements →
              </Link>
            </article>

            <article className="service-card">
              <div className="service-icon">◎</div>
              <p className="eyebrow">05 · QUALIFICATIONS</p>
              <h3>Credential Evaluations</h3>
              <p>
                Coordination of academic credential evaluation services
                and supporting documentation for relevant employment-based
                immigration matters.
              </p>
              <Link href="/pricing" className="text-link">
                Discuss your requirements →
              </Link>
            </article>

            <article className="service-card">
              <div className="service-icon">▣</div>
              <p className="eyebrow">06 · OCCUPATIONAL ANALYSIS</p>
              <h3>Position Evaluations</h3>
              <p>
                Research and documentation support examining occupational
                duties, position requirements and qualifications in
                relevant employment-based matters.
              </p>
              <Link href="/pricing" className="text-link">
                Discuss your requirements →
              </Link>
            </article>
          </div>
        </div>
      </section>

      <section className="attorney-section section-padding">
        <div className="container attorney-grid">
          <div>
            <p className="eyebrow">SPECIALISED CASE CATEGORIES</p>
            <h2 style={{ color: "var(--teal)", margin: "15px 0 20px" }}>
              Immigration pathways we support.
            </h2>
            <p style={{ color: "var(--muted)" }}>
              Our research and documentation services cover selected
              employment-based immigration categories. The specific
              deliverables depend on the case and the agreed scope.
            </p>
            <Link href="/pricing" className="button-primary" style={{ marginTop: 25 }}>
              Explore Pricing
            </Link>
          </div>

          <img
            className="attorney-photo"
            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1100&q=85"
            alt="Professional woman with a visible face in a business setting"
          />
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">IMMIGRATION CATEGORIES</p>
            <h2>Our areas of focus.</h2>
          </div>

          <div className="service-grid">
            {categories.map((category) => (
              <article className="service-card" key={category.code}>
                <p className="eyebrow">{category.code}</p>
                <h3>{category.title}</h3>
                <p>{category.description}</p>
                <a
                  href={`mailto:info@lexbridgeevaluations.com?subject=${encodeURIComponent(category.code + " enquiry")}`}
                  style={{
                    color: "var(--copper)",
                    fontWeight: 700,
                    display: "inline-block",
                    marginTop: 18,
                  }}
                >
                  Enquire about this category →
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="price-section section-padding">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">OUR DELIVERY APPROACH</p>
            <h2>What goes into the work.</h2>
            <p style={{ color: "#E1E9E6" }}>
              Depending on the service and agreed scope, our engagements
              may involve:
            </p>
          </div>

          <div className="price-card">
            <h3>Professional preparation and coordination</h3>
            <ul style={{ paddingLeft: 22, marginTop: 20, lineHeight: 2.2 }}>
              {deliverables.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="contact-section">
        <div className="container">
          <p className="eyebrow">LET'S DISCUSS YOUR MATTER</p>
          <h2>Find the right support for your case.</h2>
          <p style={{ color: "#E1E9E6", marginTop: 18 }}>
            Contact us with a brief description of the service you require.
            We will discuss suitability, scope, timing and applicable fees.
          </p>
          <a
            className="email-link"
            href="mailto:info@lexbridgeevaluations.com"
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
          <p>Immigration Research & Professional Support</p>
          <p>© {new Date().getFullYear()} LexBridge Evaluations.</p>
          <small>
            LexBridge Evaluations is a professional support provider,
            not a US law firm. Legal advice, strategy and filing remain
            the responsibility of qualified legal counsel.
          </small>
        </div>
      </footer>
    </main>
  );
}
