
export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container">
        <h3>LexBridge Evaluations LLC</h3>
        <p>
          Immigration Research & Professional Documentation Support
        </p>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 20,
            margin: "24px 0",
          }}
        >
          <a href="/about">About Us</a>
          <a href="/privacy">Privacy Policy</a>
          <a href="/cookies">Cookie Policy</a>
          <a href="/terms">Terms & Conditions</a>
        </div>
        <p>
  <a href="mailto:info@lexbridgeevaluations.com">
    info@lexbridgeevaluations.com
  </a>
</p>

        <p style={{ fontSize: 13 }}>
          © {new Date().getFullYear()} LexBridge Evaluations LLC.
          All rights reserved.
        </p>
      </div>
    </footer>
  );
}
