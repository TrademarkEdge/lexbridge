
const categories = [
  {
    code: "EB-1A",
    title: "Extraordinary Ability",
    description: "For individuals seeking to demonstrate extraordinary ability through sustained national or international acclaim."
  },
  {
    code: "EB-1B",
    title: "Outstanding Researchers",
    description: "Professional opinion support addressing outstanding academic or research achievements."
  },
  {
    code: "EB-1C",
    title: "Multinational Executives",
    description: "Documentation support for qualifying multinational managers and executives."
  },
  {
    code: "EB-2 NIW",
    title: "National Interest Waiver",
    description: "Expert analysis supporting the proposed endeavor and its potential national importance."
  },
  {
    code: "O-1",
    title: "Individuals of Extraordinary Ability",
    description: "Professional opinions supporting individuals with extraordinary ability or achievement."
  },
  {
    code: "H-1B",
    title: "Specialty Occupation",
    description: "Specialist analysis of occupational roles, qualifications and specialty occupation requirements."
  }
];

const services = [
  {
    number: "01",
    title: "Expert Opinion Letters",
    description: "Independent professional opinions prepared by suitably qualified experts and tailored to the facts and requirements of each matter."
  },
  {
    number: "02",
    title: "Immigration Petition Support",
    description: "Research, evidence mapping, petition documentation and attorney-directed preparation support for complex immigration matters."
  },
  {
    number: "03",
    title: "Recommendation Letters",
    description: "Structured drafting assistance based on the recommender's genuine knowledge, experience and professional assessment."
  },
  {
    number: "04",
    title: "RFE & NOID Support",
    description: "Research, evidence organisation and documentation assistance in response to requests for further evidence and notices of intent to deny."
  }
];

export default function Home() {
  return (
    <main>
      <header className="navbar">
        <a className="brand" href="#">
          LEXBRIDGE <span>EVALUATIONS</span>
        </a>

        <nav>
          <a href="#services">Services</a>
          <a href="#categories">Visa categories</a>
          <a href="#attorneys">For attorneys</a>
          <a href="#process">Our process</a>
          <a className="nav-cta" href="#contact">Contact us</a>
        </nav>
      </header>

      <section className="hero">
        <div className="hero-image">
          <img
            src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1600&q=85"
            alt="Professional reviewing documents at a desk"
          />
        </div>
        <div className="hero-overlay" />

        <div className="hero-content">
          <p className="eyebrow">IMMIGRATION RESEARCH & PROFESSIONAL SUPPORT</p>
          <h1>
            Stronger cases.
            <br />
            <em>Expert perspectives.</em>
          </h1>
          <p className="hero-description">
            Specialist immigration documentation, independent expert
            opinions and dedicated petition preparation support for
            individuals and US immigration law firms.
          </p>
          <div className="hero-actions">
            <a className="button button-light" href="#services">
              Explore our services
            </a>
            <a className="button button-outline" href="#attorneys">
              Attorney partnerships
            </a>
          </div>
        </div>

        <div className="hero-caption">
          RESEARCH-LED. CASE-SPECIFIC. PROFESSIONAL.
        </div>
      </section>

      <section className="intro">
        <p className="eyebrow">A MORE CONSIDERED APPROACH</p>
        <h2>
          Every immigration matter deserves
          <br />
          <em>more than a template.</em>
        </h2>
        <p>
          We support complex immigration matters through carefully
          researched documentation, professional opinion coordination
          and structured case preparation. Every engagement is approached
          with attention to the individual facts, evidence and applicable
          requirements.
        </p>
      </section>

      <section className="proof-strip">
        <div>
          <strong>06</strong>
          <span>Immigration categories</span>
        </div>
        <div>
          <strong>$625</strong>
          <span>Expert opinion letters</span>
        </div>
        <div>
          <strong>02</strong>
          <span>Ways to work with us</span>
        </div>
        <div>
          <strong>US</strong>
          <span>Immigration law firm support</span>
        </div>
      </section>

      <section className="categories section" id="categories">
        <div className="section-heading">
          <div>
            <p className="eyebrow">OUR IMMIGRATION EXPERTISE</p>
            <h2>Support across key visa categories.</h2>
          </div>
          <p>
            Professional opinions and documentation support across
            selected employment-based immigration pathways.
          </p>
        </div>

        <div className="category-grid">
          {categories.map((item) => (
            <article className="category-card" key={item.code}>
              <span className="category-code">{item.code}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <a href="#contact">Discuss this category <span>↗</span></a>
            </article>
          ))}
        </div>
      </section>

      <section className="image-break">
        <img
          src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1800&q=85"
          alt="Professionals collaborating around a table"
        />
        <div className="image-break-text">
          <p className="eyebrow">BUILT AROUND THE CASE</p>
          <h2>Thoughtful research. Clear documentation. Professional collaboration.</h2>
        </div>
      </section>

      <section className="services section" id="services">
        <div className="section-heading">
          <div>
            <p className="eyebrow">WHAT WE DO</p>
            <h2>More than a letter.</h2>
          </div>
          <p>
            A broader range of immigration documentation and research
            services designed to support complex petitions and professional
            legal workflows.
          </p>
        </div>

        <div className="service-grid">
          {services.map((service) => (
            <article className="service-card" key={service.number}>
              <span className="service-number">{service.number}</span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="pricing" id="pricing">
        <div className="pricing-photo">
          <img
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=85"
            alt="Research and professional document preparation"
          />
        </div>

        <div className="pricing-content">
          <p className="eyebrow">STRAIGHTFORWARD PRICING</p>
          <h2>Professional support. Clear starting points.</h2>
          <p className="pricing-intro">
            Understand the starting cost of our services before beginning
            an engagement.
          </p>

          <div className="price-item">
            <div>
              <span className="price-label">EXPERT OPINION SERVICES</span>
              <h3>Expert Opinion Letters</h3>
              <p>
                Across eligible EB-1A, EB-1B, EB-1C, EB-2 NIW, O-1
                and H-1B matters.
              </p>
              <small>
                Includes expert professional fee. Subject to case
                assessment and availability of a suitably qualified expert.
              </small>
            </div>
            <strong>$625</strong>
          </div>

          <div className="price-item">
            <div>
              <span className="price-label">ATTORNEY COLLABORATION</span>
              <h3>Full Case Packet Preparation</h3>
              <p>
                Attorney-directed research, documentation, evidence
                organisation and petition preparation support.
              </p>
              <small>
                Scope, complexity, timelines and final fees are agreed
                directly with the attorney.
              </small>
            </div>
            <strong>From $1,750</strong>
          </div>

          <a className="button button-green" href="#contact">
            Request an assessment
          </a>
        </div>
      </section>

      <section className="attorneys" id="attorneys">
        <div className="attorneys-copy">
          <p className="eyebrow">FOR US IMMIGRATION LAW FIRMS</p>
          <h2>Your extended petition support team.</h2>
          <p>
            Work with LexBridge on a case-by-case or ongoing basis for
            structured immigration documentation and petition preparation
            support. We collaborate with attorneys according to their
            workflows and agreed case requirements.
          </p>

          <ul>
            <li>Petition research and drafting assistance</li>
            <li>Evidence review, organisation and indexing</li>
            <li>Recommendation letter coordination</li>
            <li>Expert opinion coordination</li>
            <li>Exhibit preparation and RFE documentation</li>
          </ul>

          <a className="button button-light" href="#contact">
            Discuss an attorney partnership
          </a>
        </div>

        <div className="attorneys-image">
          <img
            src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=85"
            alt="Modern professional office and meeting space"
          />
        </div>
      </section>

      <section className="process section" id="process">
        <div className="section-heading">
          <div>
            <p className="eyebrow">HOW WE WORK</p>
            <h2>A considered process, from enquiry to delivery.</h2>
          </div>
        </div>

        <div className="process-grid">
          <div>
            <span>01</span>
            <h3>Enquire</h3>
            <p>Tell us about the immigration matter and the support required.</p>
          </div>
          <div>
            <span>02</span>
            <h3>Assess</h3>
            <p>We review the scope, documentation and suitability of the requested service.</p>
          </div>
          <div>
            <span>03</span>
            <h3>Prepare</h3>
            <p>Work is coordinated with the relevant professional and, where applicable, the instructing attorney.</p>
          </div>
          <div>
            <span>04</span>
            <h3>Deliver</h3>
            <p>Receive the agreed documentation for professional review and use.</p>
          </div>
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="contact-image">
          <img
            src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1400&q=85"
            alt="Quiet, contemporary professional workspace"
          />
        </div>
        <div className="contact-panel">
          <p className="eyebrow">LET'S WORK TOGETHER</p>
          <h2>Move your immigration matter forward.</h2>
          <p>
            Whether you require an expert opinion or a dedicated petition
            support partner, tell us what you are working on.
          </p>
          <a className="button button-green" href="mailto:info@lexbridgeevaluations.com">
            Email LexBridge
          </a>
          <p className="contact-email">info@lexbridgeevaluations.com</p>
        </div>
      </section>

      <footer>
        <a className="brand footer-brand" href="#">
          LEXBRIDGE <span>EVALUATIONS</span>
        </a>
        <p>Immigration Research & Professional Support</p>
        <div className="footer-links">
          <a href="#services">Services</a>
          <a href="#categories">Visa categories</a>
          <a href="#attorneys">For attorneys</a>
          <a href="#contact">Contact</a>
        </div>
        <small>
          LexBridge Evaluations is an independent immigration research and
          documentation support provider, not a US law firm. Legal advice,
          legal strategy, attorney supervision and filing remain the
          responsibility of the instructing US immigration attorney.
          Expert opinions are subject to case suitability and expert
          availability. No immigration outcome is guaranteed.
        </small>
        <small className="copyright">
          © {new Date().getFullYear()} LexBridge Evaluations. All rights reserved.
        </small>
      </footer>
    </main>
  );
}
