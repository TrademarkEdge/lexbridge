
"use client";

import { useState } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

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
          <p className="eyebrow">GET IN TOUCH</p>
          <h1>Let's discuss your requirements.</h1>
          <p>
            Whether you are seeking immigration documentation
            support or represent a law firm interested in a
            professional partnership, we'd be glad to hear from you.
          </p>

          <div className="service-grid" style={{ marginTop: 40 }}>
            <section className="service-card">
              <h2>Send an enquiry</h2>

              {submitted ? (
                <p>
                  Thank you for your enquiry. Please email us
                  directly if you need immediate assistance.
                </p>
              ) : (
                <form
                  action="https://formspree.io/f/xaewkwkj"
                  method="POST"
                  onSubmit={() => setSubmitted(true)}
                  style={{
                    display: "grid",
                    gap: 16,
                    marginTop: 24,
                  }}
                >
                  <label>
                    Full name
                    <input
                      name="name"
                      required
                      type="text"
                      style={{ width: "100%", padding: 12, marginTop: 6 }}
                    />
                  </label>

                  <label>
                    Email address
                    <input
                      name="email"
                      required
                      type="email"
                      style={{ width: "100%", padding: 12, marginTop: 6 }}
                    />
                  </label>

                  <label>
                    I am enquiring as
                    <select
                      name="enquiry_type"
                      required
                      style={{ width: "100%", padding: 12, marginTop: 6 }}
                    >
                      <option value="">Select an option</option>
                      <option value="Individual client">Individual client</option>
                      <option value="US immigration law firm">US immigration law firm</option>
                      <option value="Other">Other</option>
                    </select>
                  </label>

                  <label>
                    Service required
                    <select
                      name="service"
                      required
                      style={{ width: "100%", padding: 12, marginTop: 6 }}
                    >
                      <option value="">Select a service</option>
                      <option value="Expert Opinion Letter">Expert Opinion Letter</option>
                      <option value="Full Case Packet Preparation">Full Case Packet Preparation</option>
                      <option value="Recommendation Letter">Recommendation Letter</option>
                      <option value="RFE or NOID Support">RFE or NOID Support</option>
                      <option value="Attorney Retainer">Attorney Retainer</option>
                      <option value="Other">Other</option>
                    </select>
                  </label>

                  <label>
                    Tell us briefly about your requirements
                    <textarea
                      name="message"
                      required
                      rows={5}
                      style={{ width: "100%", padding: 12, marginTop: 6 }}
                    />
                  </label>

                  <button className="button-primary" type="submit">
                    Submit enquiry
                  </button>
                </form>
              )}
            </section>

            <section className="service-card">
              <p className="eyebrow">EMAIL US DIRECTLY</p>
              <h2>Prefer email?</h2>
              <p>
                You can contact our team directly using the
                address below.
              </p>
              <a
                className="email-link"
                href="mailto:info@lexbridgeevaluations.com"
                style={{ overflowWrap: "anywhere" }}
              >
                info@lexbridgeevaluations.com
              </a>

              <div style={{ marginTop: 32 }}>
                <h3>Before contacting us</h3>
                <p>
                  Please avoid sending passports, identification
                  documents or confidential case records through
                  this general enquiry form. We can discuss
                  appropriate document-sharing arrangements
                  separately.
                </p>
              </div>
            </section>
          </div>
        </div>
      </section>

      <div className="container">
        <p style={{ margin: "32px 0", fontSize: 13 }}>
          LexBridge Evaluations is not a US law firm and does not
          provide legal advice. Legal advice, case strategy,
          final review and filing remain the responsibility of
          the supervising US attorney.
        </p>
      </div>

      <footer className="site-footer">
        <div className="container">
          © {new Date().getFullYear()} LexBridge Evaluations.
          All rights reserved.
        </div>
      </footer>
    </main>
  );
}
