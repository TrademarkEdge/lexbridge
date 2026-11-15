
const categories = [
  { code: "EB-1A", title: "Extraordinary Ability", text: "Professional opinion support for individuals demonstrating extraordinary ability in their field." },
  { code: "EB-1B", title: "Outstanding Researchers", text: "Opinion support addressing outstanding academic and research achievements." },
  { code: "EB-1C", title: "Multinational Executives", text: "Documentation support for qualifying multinational managers and executives." },
  { code: "EB-2 NIW", title: "National Interest Waiver", text: "Expert analysis supporting the significance and potential impact of a proposed endeavor." },
  { code: "O-1", title: "Individuals of Extraordinary Ability", text: "Professional opinions supporting extraordinary ability in business, science, education and the arts." },
  { code: "H-1B", title: "Specialty Occupation", text: "Specialist analysis of roles, qualifications and specialty occupation requirements." },
];

const services = [
  { number: "01", title: "Expert Opinion Letters", text: "Independent professional opinions prepared by suitably qualified experts, tailored to the facts and requirements of each case." },
  { number: "02", title: "Immigration Petition Support", text: "Research, evidence mapping, petition documentation and preparation support for complex immigration matters." },
  { number: "03", title: "Recommendation Letters", text: "Structured drafting assistance based on the recommender's genuine knowledge and professional assessment." },
  { number: "04", title: "RFE & NOID Support", text: "Evidence organisation, research and documentation assistance in response to requests for further evidence." },
];

const process = [
  ["01", "Tell us about your case", "Share the immigration category, background and support required."],
  ["02", "Case assessment", "We review the scope, documentation and suitability of the requested service."],
  ["03", "Research & preparation", "The work is coordinated with the relevant professional or attorney."],
  ["04", "Review & delivery", "The completed work is delivered for review and use within the appropriate legal process."],
];

export default function Home() {
  return (
    <main>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&family=Playfair+Display:wght@500;600;700&display=swap');

        :root { --navy:#101d31; --navy2:#172943; --gold:#c9a45e; --cream:#f7f5f0; --ink:#182235; --muted:#687386; }
        * { box-sizing:border-box; }
        html { scroll-behavior:smooth; }
        body { margin:0; font-family:'DM Sans',sans-serif; color:var(--ink); }
        a { text-decoration:none; }
        .site { overflow:hidden; background:#fff; }
        .container { width:min(1160px, calc(100% - 44px)); margin:auto; }
        .topbar { height:82px; display:flex; align-items:center; justify-content:space-between; gap:25px; }
        .brand { color:var(--navy); font-family:'Playfair Display',serif; font-size:22px; letter-spacing:2px; font-weight:700; white-space:nowrap; }
        .brand span { color:var(--gold); }
        .nav { display:flex; align-items:center; gap:27px; }
        .nav a { color:#344156; font-size:12px; font-weight:700; }
        .nav a:hover { color:var(--gold); }
        .nav .nav-cta { background:var(--navy); color:white; padding:14px 19px; }
        .hero { background:var(--navy); color:white; position:relative; }
        .hero-inner { min-height:570px; display:grid; grid-template-columns:1.05fr .95fr; align-items:center; gap:45px; padding-top:55px; padding-bottom:55px; }
        .eyebrow { color:var(--gold); font-size:10px; font-weight:800; letter-spacing:3px; text-transform:uppercase; }
        h1,h2,h3 { font-family:'Playfair Display',serif; }
        .hero h1 { font-size:clamp(43px,5.5vw,69px); line-height:1.08; font-weight:500; margin:22px 0; letter-spacing:-1.5px; }
        .hero h1 span { color:var(--gold); }
        .hero-copy { max-width:540px; color:#d4dce6; line-height:1.85; font-size:15px; }
        .actions { display:flex; flex-wrap:wrap; gap:13px; margin-top:32px; }
        .btn { display:inline-flex; align-items:center; justify-content:center; padding:15px 22px; font-size:11px; letter-spacing:.8px; font-weight:800; text-transform:uppercase; transition:.2s; }
        .btn-gold { background:var(--gold); color:#172235; }
        .btn-outline { border:1px solid #718096; color:white; }
        .btn:hover { transform:translateY(-2px); }
        .hero-visual { min-height:405px; position:relative; background:linear-gradient(180deg,rgba(16,29,49,.05),rgba(16,29,49,.55)),url('https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1200&q=85') center/cover; }
        .visual-label { position:absolute; left:-22px; bottom:28px; background:#fff; color:var(--navy); padding:22px 25px; max-width:260px; box-shadow:0 15px 40px #0002; }
        .visual-label strong { display:block; font-family:'Playfair Display',serif; font-size:20px; margin-bottom:6px; }
        .visual-label span { font-size:11px; color:var(--muted); line-height:1.6; }
        .trust-strip { background:#f3f0e9; padding:23px 0; }
        .trust-grid { display:grid; grid-template-columns:repeat(3,1fr); text-align:center; gap:20px; }
        .trust-item { color:var(--navy); font-size:12px; font-weight:800; letter-spacing:1px; }
        .trust-item span { display:block; color:#7a8491; font-size:10px; font-weight:500; letter-spacing:.3px; margin-top:5px; }
        .section { padding:88px 0; }
        .section-head { max-width:700px; margin-bottom:38px; }
        .section h2 { font-size:clamp(32px,4vw,46px); line-height:1.15; font-weight:500; margin:13px 0; color:var(--navy); }
        .section-intro { color:var(--muted); font-size:14px; line-height:1.85; }
        .category-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:16px; }
        .category { padding:27px 25px; border:1px solid #e7e8eb; background:white; min-height:205px; transition:.2s; }
        .category:hover { border-color:var(--gold); transform:translateY(-4px); box-shadow:0 12px 30px #15243a0c; }
        .code { color:#a17b39; font-size:10px; font-weight:800; letter-spacing:2px; }
        .category h3 { color:var(--navy); font-size:22px; font-weight:500; margin:13px 0 9px; }
        .category p,.service p { color:var(--muted); font-size:12px; line-height:1.8; margin:0; }
        .text-link { display:inline-block; margin-top:17px; color:#9a773c; font-size:10px; font-weight:800; letter-spacing:1px; text-transform:uppercase; }
        .cream { background:var(--cream); }
        .service-grid { display:grid; grid-template-columns:repeat(4,1fr); gap:14px; }
        .service { padding:27px 22px; background:white; border-top:3px solid var(--gold); min-height:225px; }
        .service .number { font-size:11px; color:#ad8747; letter-spacing:2px; font-weight:800; }
        .service h3 { color:var(--navy); font-size:21px; line-height:1.25; font-weight:500; margin:19px 0 12px; }
        .pricing { background:var(--navy); color:white; }
        .pricing h2 { color:white; }
        .pricing .section-intro { color:#c5ced9; }
        .price-grid { display:grid; grid-template-columns:1fr 1fr; gap:22px; margin-top:38px; }
        .price-card { padding:35px; border:1px solid #536177; background:#172943; }
        .price-card.featured { background:#f7f5f0; color:var(--navy); border:0; }
        .price-card .label { color:var(--gold); font-size:10px; font-weight:800; letter-spacing:2px; text-transform:uppercase; }
        .price-card.featured .label { color:#987438; }
        .price-card h3 { font-size:28px; font-weight:500; margin:14px 0; }
        .price { font-family:'Playfair Display',serif; font-size:57px; color:var(--gold); margin:12px 0; }
        .featured .price { color:var(--navy); }
        .price-card p { color:#c7d0dc; font-size:12px; line-height:1.8; }
        .featured p { color:var(--muted); }
        .price-card ul { padding:0; margin:22px 0 27px; list-style:none; }
        .price-card li { padding:9px 0; border-bottom:1px solid #ffffff20; font-size:12px; color:#e3e8ef; }
        .featured li { color:#435064; border-color:#e2dfd7; }
        .price-card li:before { content:'✓'; color:var(--gold); margin-right:10px; font-weight:800; }
        .price-note { font-size:10px!important; opacity:.85; }
        .attorney { display:grid; grid-template-columns:1fr .85fr; gap:55px; align-items:center; }
        .attorney-panel { background:var(--navy); padding:39px; color:white; }
        .attorney-panel h3 { font-size:30px; line-height:1.2; font-weight:500; margin:12px 0; }
        .attorney-panel p { color:#c7d0dc; font-size:13px; line-height:1.8; }
        .checklist { padding:0; list-style:none; margin:25px 0; }
        .checklist li { padding:11px 0; border-bottom:1px solid #ffffff20; font-size:12px; color:#e1e6ed; }
        .checklist li:before { content:'✓'; color:var(--gold); margin-right:12px; }
        .process-grid { display:grid; grid-template-columns:repeat(4,1fr); gap:18px; }
        .step { border-top:1px solid #d8d4ca; padding-top:20px; }
        .step strong { color:#a17b39; font-size:11px; letter-spacing:2px; }
        .step h3 { color:var(--navy); font-size:21px; font-weight:500; margin:13px 0 8px; }
        .step p { color:var(--muted); font-size:12px; line-height:1.8; }
        .final-cta { background:var(--cream); text-align:center; padding:76px 20px; }
        .final-cta h2 { color:var(--navy); font-size:clamp(32px,4vw,45px); font-weight:500; margin:14px auto; max-width:700px; }
        .final-cta p { color:var(--muted); font-size:13px; line-height:1.8; max-width:620px; margin:0 auto; }
        .footer { background:#0b1525; color:#dbe1e8; padding:48px 0 25px; }
        .footer-grid { display:grid; grid-template-columns:1.4fr 1fr 1fr; gap:35px; }
        .footer h3 { font-family:'DM Sans',sans-serif; font-size:11px; text-transform:uppercase; letter-spacing:1.5px; color:var(--gold); }
        .footer p,.footer a { color:#aeb9c7; font-size:11px; line-height:1.9; }
        .footer a { display:block; margin:7px 0; }
        .copyright { border-top:1px solid #ffffff20; margin-top:35px; padding-top:20px; color:#8794a5; font-size:10px; line-height:1.8; }
        @media(max-width:850px) {
          .nav { gap:12px; }
          .nav a { font-size:10px; }
          .hero-inner { grid-template-columns:1fr; }
          .hero-visual { min-height:300px; }
          .category-grid { grid-template-columns:repeat(2,1fr); }
          .service-grid { grid-template-columns:repeat(2,1fr); }
          .attorney { grid-template-columns:1fr; }
        }
        @media(max-width:600px) {
          .container { width:min(100% - 30px,1160px); }
          .topbar { height:auto; min-height:75px; flex-wrap:wrap; padding:16px 0; }
          .brand { font-size:18px; }
          .nav { width:100%; overflow-x:auto; padding-bottom:5px; }
          .nav a { white-space:nowrap; }
          .hero-inner { padding-top:45px; padding-bottom:45px; }
          .hero h1 { font-size:43px; }
          .hero-visual { min-height:250px; }
          .visual-label { left:10px; bottom:10px; }
          .trust-grid { grid-template-columns:1fr; gap:16px; }
          .section { padding:65px 0; }
          .category-grid,.service-grid,.price-grid,.process-grid,.footer-grid { grid-template-columns:1fr; }
          .price-card { padding:27px; }
          .price { font-size:48px; }
        }
      `}</style>

      <div className="site">
        <header className="container topbar">
          <a className="brand" href="#">LEXBRIDGE <span>EVALUATIONS</span></a>
          <nav className="nav">
            <a href="#services">Services</a>
            <a href="#categories">Visa Categories</a>
            <a href="#attorneys">For Attorneys</a>
            <a href="#process">Our Process</a>
            <a className="nav-cta" href="#contact">Contact Us</a>
          </nav>
        </header>

        <section className="hero">
          <div className="container hero-inner">
            <div>
              <div className="eyebrow">Immigration Research & Professional Support</div>
              <h1>Stronger Cases.<br /><span>Expert Perspectives.</span></h1>
              <p className="hero-copy">Specialist immigration documentation, expert opinion letters and dedicated petition preparation support for individuals and U.S. immigration law firms.</p>
              <div className="actions">
                <a className="btn btn-gold" href="#services">Explore Our Services</a>
                <a className="btn btn-outline" href="#attorneys">Attorney Partnerships</a>
              </div>
            </div>
            <div className="hero-visual">
              <div className="visual-label">
                <strong>Research-led. Case-specific.</strong>
                <span>Professional documentation and immigration support, shaped around the requirements of each matter.</span>
              </div>
            </div>
          </div>
        </section>

        <section className="trust-strip">
          <div className="container trust-grid">
            <div className="trust-item">CASE-SPECIFIC APPROACH<span>Every matter begins with an individual assessment</span></div>
            <div className="trust-item">PROFESSIONAL COORDINATION<span>Work aligned with relevant experts and attorneys</span></div>
            <div className="trust-item">CLEAR SERVICE SCOPE<span>Defined deliverables and transparent pricing</span></div>
          </div>
        </section>

        <section className="section container" id="categories">
          <div className="section-head">
            <div className="eyebrow">Our Immigration Expertise</div>
            <h2>Support across key visa categories.</h2>
            <p className="section-intro">Explore our immigration documentation and professional opinion support across selected employment-based immigration pathways.</p>
          </div>
          <div className="category-grid">
            {categories.map((item) => (
              <article className="category" key={item.code}>
                <div className="code">{item.code}</div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <a className="text-link" href="#contact">Discuss this category →</a>
              </article>
            ))}
          </div>
        </section>

        <section className="section cream" id="services">
          <div className="container">
            <div className="section-head">
              <div className="eyebrow">What We Do</div>
              <h2>More than a letter.</h2>
              <p className="section-intro">A broader range of immigration documentation and research services designed to support complex petitions and professional legal workflows.</p>
            </div>
            <div className="service-grid">
              {services.map((item) => (
                <article className="service" key={item.number}>
                  <div className="number">{item.number}</div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section pricing" id="pricing">
          <div className="container">
            <div className="section-head">
              <div className="eyebrow">Straightforward Pricing</div>
              <h2>Professional support. Clear starting points.</h2>
              <p className="section-intro">Our services are scoped around the nature of the matter, the documentation required and the availability of suitable professionals.</p>
            </div>
            <div className="price-grid">
              <article className="price-card">
                <div className="label">Expert Opinion Services</div>
                <h3>Expert Opinion Letters</h3>
                <div className="price">$625</div>
                <p>Per letter. One transparent starting price for eligible matters, subject to case assessment and expert availability.</p>
                <ul>
                  <li>Initial case assessment</li>
                  <li>Identification of a suitable expert</li>
                  <li>Professional opinion preparation</li>
                  <li>Immigration-focused analysis</li>
                  <li>Final letter delivery</li>
                </ul>
                <p className="price-note">The service is subject to expert suitability, availability and acceptance of the engagement.</p>
                <a className="btn btn-gold" href="#contact">Request an Assessment</a>
              </article>
              <article className="price-card featured">
                <div className="label">Attorney Collaboration</div>
                <h3>Full Case Packet Preparation</h3>
                <div className="price">From $1,750</div>
                <p>Collaborative, attorney-directed documentation and petition preparation support for complex immigration matters.</p>
                <ul>
                  <li>Petition research and drafting assistance</li>
                  <li>Evidence review and organisation</li>
                  <li>Exhibit preparation and indexing</li>
                  <li>Recommendation letter coordination</li>
                  <li>Expert opinion coordination</li>
                  <li>RFE documentation support</li>
                </ul>
                <p className="price-note">Final scope and fees are discussed directly with the attorney based on case complexity and deliverables.</p>
                <a className="btn btn-gold" href="#attorneys">Discuss a Case</a>
              </article>
            </div>
          </div>
        </section>

        <section className="section container attorney" id="attorneys">
          <div>
            <div className="eyebrow">For U.S. Immigration Law Firms</div>
            <h2>Your extended petition support team.</h2>
            <p className="section-intro">Work with LexBridge on a case-by-case or ongoing basis for structured immigration documentation and petition preparation support. We collaborate with attorneys to support their workflows and agreed case requirements.</p>
            <ul className="checklist" style={{color:"var(--ink)"}}>
              <li style={{color:"var(--ink)",borderColor:"#e5e5e5"}}>Petition research and drafting assistance</li>
              <li style={{color:"var(--ink)",borderColor:"#e5e5e5"}}>Evidence review, organisation and indexing</li>
              <li style={{color:"var(--ink)",borderColor:"#e5e5e5"}}>Recommendation letter coordination</li>
              <li style={{color:"var(--ink)",borderColor:"#e5e5e5"}}>Expert opinion coordination</li>
              <li style={{color:"var(--ink)",borderColor:"#e5e5e5"}}>Exhibit preparation and RFE documentation</li>
            </ul>
            <a className="btn btn-gold" style={{background:"var(--navy)",color:"white"}} href="#contact">Discuss an Attorney Partnership</a>
          </div>
          <div className="attorney-panel">
            <div className="eyebrow">Case Preparation Collaboration</div>
            <h3>Full Case Packet Preparation</h3>
            <div className="price">From $1,750</div>
            <p>A collaborative service for comprehensive case documentation and preparation support. Scope, timelines and final fees are agreed directly with the attorney.</p>
            <a className="btn btn-gold" href="#contact">Start a Conversation</a>
          </div>
        </section>

        <section className="section cream" id="process">
          <div className="container">
            <div className="section-head">
              <div className="eyebrow">How It Works</div>
              <h2>A considered process from enquiry to delivery.</h2>
              <p className="section-intro">A clear workflow helps define the scope of work, coordinate the right professionals and maintain focus on the requirements of each matter.</p>
            </div>
            <div className="process-grid">
              {process.map((item) => (
                <article className="step" key={item[0]}>
                  <strong>{item[0]}</strong>
                  <h3>{item[1]}</h3>
                  <p>{item[2]}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="final-cta" id="contact">
          <div className="eyebrow">Let's Work Together</div>
          <h2>Move your immigration matter forward.</h2>
          <p>Whether you require an expert opinion letter or a dedicated petition support partner, start by telling us about your requirements.</p>
          <div className="actions" style={{justifyContent:"center"}}>
            <a className="btn btn-gold" href="mailto:info@lexbridgeevaluations.com">Email LexBridge</a>
            <a className="btn" style={{background:"var(--navy)",color:"white"}} href="#attorneys">Attorney Services</a>
          </div>
        </section>

        <footer className="footer">
          <div className="container">
            <div className="footer-grid">
              <div>
                <a className="brand" style={{color:"white"}} href="#">LEXBRIDGE <span>EVALUATIONS</span></a>
                <p>Immigration research, professional opinions and petition support.</p>
              </div>
              <div>
                <h3>Explore</h3>
                <a href="#services">Services</a>
                <a href="#categories">Visa Categories</a>
                <a href="#pricing">Pricing</a>
                <a href="#process">Our Process</a>
              </div>
              <div>
                <h3>For Attorneys</h3>
                <a href="#attorneys">Attorney Partnerships</a>
                <a href="#contact">Discuss a Case</a>
                <a href="mailto:info@lexbridgeevaluations.com">Contact</a>
              </div>
            </div>
            <div className="copyright">
              © {new Date().getFullYear()} LexBridge Evaluations. All rights reserved.
              <br />LexBridge Evaluations is an independent immigration documentation and professional support provider, not a U.S. law firm. It does not provide legal advice or legal representation. Legal strategy, advice, review and filing remain the responsibility of the client's licensed immigration attorney. No approval or immigration outcome is guaranteed. Expert opinion services are subject to case assessment and expert availability.
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}
