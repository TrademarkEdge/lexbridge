
import Link from "next/link";

const services = [
  {
    number: "01",
    title: "Expert Opinion Letters",
    description:
      "Independent professional opinions supporting employment-based immigration petitions and other qualifying matters.",
  },
  {
    number: "02",
    title: "Immigration Petition Support",
    description:
      "Research, evidence mapping, petition documentation and preparation support for complex immigration cases.",
  },
  {
    number: "03",
    title: "Credential & Position Evaluations",
    description:
      "Professional evaluations supporting education, employment and specialty occupation requirements.",
  },
  {
    number: "04",
    title: "RFE & NOID Support",
    description:
      "Structured research, evidence organisation and documentation assistance for requests for further evidence.",
  },
];

export default function Home() {
  return (
    <main>
      <header className="navbar">
        <Link href="/" className="brand">
          LEXBRIDGE<span> EVALUATIONS</span>
        </Link>
        <nav>
          <Link href="#services">Services</Link>
          <Link href="#attorneys">For Attorneys</Link>
          <Link href="#about">About</Link>
          <Link href="#contact" className="nav-button">
            Contact Us
          </Link>
        </nav>
      </header>

      <section className="hero">
        <div className="hero-content">
          <p className="eyebrow">IMMIGRATION RESEARCH & PROFESSIONAL SUPPORT</p>
          <h1>
            Precision in Every
            <br />
            <span>Immigration Case.</span>
          </h1>
          <p className="hero-description">
            Specialist immigration documentation, expert opinions and
            dedicated petition support for individuals and immigration
            law firms.
          </p>
          <div className="hero-actions">
            <Link href="#services" className="primary-button">
              Explore Our Services
            </Link>
            <Link href="#attorneys" className="secondary-button">
              Attorney Partnerships
            </Link>
          </div>
        </div>
        <div className="hero-note">
          <span>LEXBRIDGE EVALUATIONS</span>
          <p>Expert Opinions. Immigration Research. Petition Support.</p>
        </div>
      </section>

      <section className="intro" id="about">
        <p className="eyebrow">A SPECIALIST SUPPORT PARTNER</p>
        <h2>
          Bringing clarity and structure to complex immigration matters.
        </h2>
        <p>
          LexBridge Evaluations provides professional research,
          documentation and case preparation support to immigration
          professionals and individuals navigating the U.S. immigration
          process.
        </p>
      </section>

      <section className="services" id="services">
        <div className="section-heading">
          <div>
            <p className="eyebrow">WHAT WE DO</p>
            <h2>Our Services</h2>
          </div>
          <p>
            Thoughtful research. Detailed documentation.
            Professional support.
          </p>
        </div>

        <div className="service-grid">
          {services.map((service) => (
            <article className="service-card" key={service.number}>
              <span>{service.number}</span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="attorneys" id="attorneys">
        <p className="eyebrow">FOR U.S. IMMIGRATION LAW FIRMS</p>
        <h2>Your dedicated immigration documentation partner.</h2>
        <p>
          Extend your firm's capacity with ongoing paralegal and
          petition preparation support, tailored to your caseload,
          workflow and deadlines.
        </p>
        <Link href="#contact" className="primary-button">
          Discuss a Partnership
        </Link>
      </section>

      <section className="contact" id="contact">
        <p className="eyebrow">LET'S WORK TOGETHER</p>
        <h2>Let's discuss your case or firm's needs.</h2>
        <p>
          Contact our team to discuss evaluations, documentation
          support or an attorney retainer arrangement.
        </p>
        <a href="mailto:info@lexbridgeevaluations.com">
          info@lexbridgeevaluations.com
        </a>
      </section>

      <footer>
        <Link href="/" className="brand">
          LEXBRIDGE<span> EVALUATIONS</span>
        </Link>
        <p>
          © {new Date().getFullYear()} LexBridge Evaluations.
          All rights reserved.
        </p>
        <small>
          LexBridge Evaluations is an independent immigration
          documentation and professional support provider,
          not a U.S. law firm.
        </small>
      </footer>
    </main>
  );
}
