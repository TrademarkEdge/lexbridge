
export default function TermsPage() {
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
          <h1>Terms and Conditions</h1>
          <p>Last updated: November 15, 2026</p>

          <h2>1. Acceptance of Terms</h2>
          <p>
            These Terms and Conditions govern your access to
            and use of the LexBridge Evaluations LLC website
            and services. By accessing our website or engaging
            our services, you agree to these Terms.
          </p>

          <h2>2. About Our Services</h2>
          <p>
            LexBridge Evaluations LLC provides immigration
            research, professional documentation support,
            expert opinion letter coordination and related
            case preparation services.
          </p>
          <p>
            The specific scope of each engagement will be
            agreed separately with the client.
          </p>

          <h2>3. No Legal Advice or Attorney-Client Relationship</h2>
          <p>
            LexBridge Evaluations LLC is not a law firm and
            does not provide legal advice, legal representation
            or attorney services.
          </p>
          <p>
            Our services do not create an attorney-client
            relationship. Legal advice, immigration strategy,
            legal determinations, final review and filing
            decisions remain the responsibility of the
            client's licensed US immigration attorney.
          </p>

          <h2>4. Expert Opinions and Professional Materials</h2>
          <p>
            Expert opinion letters and other professional
            materials are prepared or coordinated according
            to the agreed scope and the information supplied
            for the engagement.
          </p>
          <p>
            Expert opinions represent the professional
            assessment of the relevant expert. LexBridge
            does not guarantee that any expert opinion,
            recommendation or supporting document will
            result in approval of an immigration petition.
          </p>

          <h2>5. Client Responsibilities</h2>
          <p>Clients agree to:</p>
          <ul>
            <li>Provide accurate and complete information.</li>
            <li>Supply relevant documents in a timely manner.</li>
            <li>Ensure that information provided is authentic.</li>
            <li>Respond to reasonable requests for clarification.</li>
            <li>Review deliverables and raise concerns promptly.</li>
          </ul>

          <h2>6. Fees and Payment</h2>
          <p>
            Fees are communicated before an engagement begins.
            Payment terms, applicable milestones and any
            additional charges will be agreed with the client.
          </p>
          <p>
            Work may be suspended where agreed payments
            remain outstanding, subject to applicable law
            and the engagement agreement.
          </p>

          <h2>7. Cancellations and Refunds</h2>
          <p>
            Cancellation and refund arrangements will depend
            on the agreed scope, work already performed,
            third-party professional fees incurred and
            applicable law. Any specific refund terms will
            be communicated before engagement.
          </p>

          <h2>8. Confidentiality</h2>
          <p>
            We treat client information as confidential and
            use reasonable safeguards to protect it.
            Information may be shared with authorised experts
            and service providers where reasonably necessary
            to deliver an agreed service or comply with law.
          </p>

          <h2>9. Intellectual Property</h2>
          <p>
            Website content, branding, designs, text and
            materials belonging to LexBridge may not be
            reproduced or commercially used without
            permission, except where permitted by law.
          </p>
          <p>
            Ownership and permitted use of client-specific
            deliverables will be governed by the applicable
            engagement agreement.
          </p>

          <h2>10. Limitation of Liability</h2>
          <p>
            To the extent permitted by applicable law,
            LexBridge will not be liable for indirect,
            incidental, special or consequential losses
            arising from use of the website or services.
          </p>
          <p>
            Nothing in these Terms excludes liability that
            cannot lawfully be excluded or limits rights
            that cannot lawfully be restricted.
          </p>

          <h2>11. Third-Party Services and Websites</h2>
          <p>
            Our website may contain links to third-party
            websites or rely on third-party service providers.
            We are not responsible for the independent
            content, policies or practices of third parties.
          </p>

          <h2>12. Changes to These Terms</h2>
          <p>
            We may revise these Terms from time to time.
            Updated Terms will be published on this page
            with a revised date.
          </p>

          <h2>13. Governing Law</h2>
          <p>
            These Terms shall be governed by the laws of
            the State of [STATE OF FORMATION], United States,
            without regard to conflict-of-law principles,
            subject to applicable federal law.
          </p>

          <h2>14. Contact</h2>
          <p>
            Questions concerning these Terms may be sent to:
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
