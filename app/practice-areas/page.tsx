
export default function PracticeAreasPage() {
  const areas = [
    {
      title: "EB-1A – Extraordinary Ability",
      description:
        "Research and documentation support addressing the applicable extraordinary ability criteria, evidence and professional achievements.",
    },
    {
      title: "EB-1B – Outstanding Professors and Researchers",
      description:
        "Support with academic and research credentials, scholarly contributions and supporting documentation.",
    },
    {
      title: "EB-1C – Multinational Managers and Executives",
      description:
        "Documentation support relating to managerial or executive experience, organisational structures and qualifying employment.",
    },
    {
      title: "EB-2 NIW – National Interest Waiver",
      description:
        "Research and evidence organisation addressing the proposed endeavour, its broader significance and the applicant's qualifications.",
    },
    {
      title: "O-1 – Individuals with Extraordinary Ability",
      description:
        "Professional documentation support highlighting achievements, recognition and evidence relevant to the requested classification.",
    },
    {
      title: "H-1B – Specialty Occupations",
      description:
        "Research and documentation support relating to specialty occupation requirements, professional qualifications and position details.",
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

      <section className="section-padding">
        <div className="container">
          <p className="eyebrow">IMMIGRATION CATEGORIES</p>
          <h1>Specialised support across employment-based immigration.</h1>
          <p>
            LexBridge supports individuals and US immigration law
            firms with research, professional documentation and
            structured case preparation across selected employment-
            based immigration categories.
          </p>

          <div className="service-grid" style={{ marginTop: 40 }}>
            {areas.map((area) => (
              <article className="service-card" key={area.title}>
                <div className="service-icon">§</div>
                <h2>{area.title}</h2>
                <p>{area.description}</p>
              </article>
            ))}
          </div>

          <section className="contact-section" style={{ marginTop: 48 }}>
            <div className="container">
              <h2>Need support with an immigration matter?</h2>
              <p>
                Contact us to discuss the category, documentation
                requirements and scope of support.
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
            LexBridge Evaluations is not a US law firm and does not
            provide legal advice. Legal advice, case strategy,
            final review and filing remain the responsibility of
            the supervising US attorney.
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
