
export default function PaymentPage() {
  return (
    <main>
      <header className="site-header">
        <nav className="navbar container">
          <a className="brand" href="/">
            LexBridge Evaluations
          </a>
          <div className="nav-links">
            <a href="/">Home</a>
            <a href="/services">Services</a>
            <a href="/pricing">Pricing</a>
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
            <a href="/payment">Make a Payment</a>
          </div>
        </nav>
      </header>

      <section className="section-padding">
        <div className="container">
          <p className="eyebrow">SECURE CLIENT PAYMENTS</p>
          <h1>Make a Payment</h1>
          <p>
            Select the service you wish to purchase. Payments
            will be processed securely through PayPal.
          </p>

          <div className="price-section">
            <div className="price-grid">

              <article className="price-card">
                <p className="eyebrow">PROFESSIONAL DOCUMENTATION</p>
                <h2>Expert Opinion Letter</h2>
                <p className="price">$625</p>
                <p>
                  Professional expert opinion letter preparation
                  based on the agreed service scope and
                  supporting case materials.
                </p>
                <a
  className="button-primary"
  href="mailto:info@lexbridgeevaluations.com?subject=Request%20for%20Expert%20Opinion%20Letter%20Payment"
>
  Request Payment
</a>
              </article>

              <article className="price-card">
                <p className="eyebrow">COMPREHENSIVE SUPPORT</p>
                <h2>Full Case Packet Preparation</h2>
                <p className="price">$1,750</p>
                <p>
                  Structured immigration documentation and
                  supporting materials prepared according to
                  the service scope.
                </p>
                <a
  className="button-primary"
  href="mailto:info@lexbridgeevaluations.com?subject=Request%20for%20Expert%20Opinion%20Letter%20Payment"
>
  Request Payment
</a>
              </article>

              <article className="price-card">
                <p className="eyebrow">LAW FIRM SERVICES</p>
                <h2>Attorney Payments</h2>
                <p className="price">Invoice-based</p>
                <p>
                  Pay an agreed attorney retainer, professional
                  support fee or outstanding invoice.
                </p>
                <a
                  className="button-primary"
                  href="mailto:info@lexbridgeevaluations.com?subject=Attorney%20Payment%20Enquiry"
                >
                  Request payment instructions
                </a>
              </article>

            </div>
          </div>

          <section className="contact-section">
            <div className="container">
              <h2>Secure payment processing</h2>
              <p>
                Online card payments will be processed through
                PayPal's secure checkout. LexBridge does not
                collect or store your card details on this website.
              </p>
              <p>
                Payment does not guarantee immigration approval,
                USCIS acceptance or a particular case outcome.
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
            Please review the applicable service terms and
            refund policy before completing a purchase.
            LexBridge Evaluations LLC is not a US law firm
            and does not provide legal advice.
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
