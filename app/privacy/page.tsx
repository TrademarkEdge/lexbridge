
export default function PrivacyPolicyPage() {
  return (
    <main>
      <header className="site-header">
        <nav className="navbar container">
          <a className="brand" href="/">LexBridge Evaluations</a>
          <div className="nav-links">
            <a href="/">Home</a>
            <a href="/services">Services</a>
            <a href="/pricing">Pricing</a>
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
          </div>
        </nav>
      </header>

      <section className="section-padding">
        <div className="container">
          <p className="eyebrow">LEGAL INFORMATION</p>
          <h1>Privacy Policy</h1>
          <p>Last updated: November 15, 2026</p>

          <h2>1. Introduction</h2>
          <p>
            LexBridge Evaluations LLC ("LexBridge", "we", "our"
            or "us") respects your privacy and is committed to
            protecting personal information collected through
            our website and business operations.
          </p>
          <p>
            This Privacy Policy explains how we collect, use,
            disclose and safeguard information when you visit
            our website or engage our services.
          </p>

          <h2>2. Information We Collect</h2>
          <p>
            Depending on your interaction with us, we may collect:
          </p>
          <ul>
            <li>Name and contact information.</li>
            <li>Email address and telephone number.</li>
            <li>Business and professional information.</li>
            <li>Immigration-related information voluntarily provided.</li>
            <li>Enquiry details and communications.</li>
            <li>Technical information such as browser type, device
            information and website usage data.</li>
          </ul>

          <h2>3. How We Use Information</h2>
          <p>We may use information to:</p>
          <ul>
            <li>Respond to enquiries and service requests.</li>
            <li>Provide immigration research and documentation support.</li>
            <li>Coordinate professional services and expert input.</li>
            <li>Communicate about projects, engagements and payments.</li>
            <li>Maintain business records and improve our services.</li>
            <li>Protect our website and prevent misuse.</li>
            <li>Comply with applicable legal obligations.</li>
          </ul>

          <h2>4. Disclosure of Information</h2>
          <p>
            We do not sell personal information. We may share
            information where reasonably necessary with service
            providers, professional experts, authorised business
            partners and other parties involved in delivering
            an agreed service.
          </p>
          <p>
            Information may also be disclosed where required by
            law, legal process or to protect our legitimate
            business and legal interests.
          </p>

          <h2>5. Third-Party Service Providers</h2>
          <p>
            Our website and business operations may rely on
            third-party providers, including website hosting,
            enquiry processing, payment and communication
            services. These providers may process information
            according to their own privacy terms and policies.
          </p>

          <h2>6. Data Security</h2>
          <p>
            We maintain reasonable administrative, technical
            and organisational safeguards designed to protect
            personal information against unauthorised access,
            disclosure, alteration or destruction.
          </p>
          <p>
            No method of electronic transmission or storage
            is completely secure. We cannot guarantee absolute
            security.
          </p>

          <h2>7. Data Retention</h2>
          <p>
            We retain personal information for as long as
            reasonably necessary to fulfil the purposes
            described in this policy, maintain business
            records, resolve disputes and comply with
            applicable legal obligations.
          </p>

          <h2>8. Your Privacy Rights</h2>
          <p>
            Depending on applicable law, you may have rights
            to request access to, correction of or deletion
            of certain personal information, or to object
            to certain processing activities.
          </p>
          <p>
            Requests may be submitted using the contact
            information below. We may need to verify your
            identity before responding.
          </p>

          <h2>9. Children's Privacy</h2>
          <p>
            Our website and services are intended for adults
            and professional clients. We do not knowingly
            collect personal information directly from
            children under 13.
          </p>

          <h2>10. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy periodically.
            Changes will be published on this page with
            an updated revision date.
          </p>

          <h2>11. Contact Information</h2>
          <p>
            For questions or privacy-related requests,
            contact LexBridge Evaluations LLC:
          </p>
          <a className="email-link"
            href="mailto:info@lexbridgeevaluations.com">
            info@lexbridgeevaluations.com
          </a>

          <p style={{ marginTop: 40, fontSize: 13 }}>
            LexBridge Evaluations LLC | United States
          </p>
        </div>
      </section>

      <footer className="site-footer">
        <div className="container">
          © {new Date().getFullYear()} LexBridge Evaluations LLC.
          All rights reserved.
        </div>
      </footer>
    </main>
  );
}
