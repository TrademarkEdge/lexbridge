
const categories = [
  { code: "EB-1A", name: "Extraordinary Ability", detail: "For individuals with extraordinary ability in sciences, arts, education, business or athletics." },
  { code: "EB-1B", name: "Outstanding Professors & Researchers", detail: "Professional opinions supporting outstanding academic and research achievements." },
  { code: "EB-1C", name: "Multinational Executives", detail: "Documentation support for qualifying multinational executives and managers." },
  { code: "EB-2 NIW", name: "National Interest Waiver", detail: "Expert analysis supporting the significance and potential impact of a proposed endeavor." },
  { code: "O-1", name: "Individuals of Extraordinary Ability", detail: "Specialist opinions supporting O-1 extraordinary ability and achievement petitions." },
  { code: "H-1B", name: "Specialty Occupation", detail: "Expert analysis of specialised roles and occupational requirements, where appropriate." },
];

const services = [
  ["01", "Expert Opinion Letters", "Independent, professionally prepared opinions tailored to the individual's background and immigration matter."],
  ["02", "Immigration Petition Support", "Research, evidence mapping, petition documentation and preparation support for complex immigration cases."],
  ["03", "Recommendation Letters", "Structured drafting assistance based on the recommender's genuine knowledge and professional assessment."],
  ["04", "RFE & NOID Support", "Evidence organisation, research and documentation assistance in response to requests for further evidence."],
];

export default function Home() {
  return (
    <main>
      <style>{`
        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body { margin: 0; }
        .lb { color: #17283d; background: #fbfaf7; font-family: Arial, sans-serif; }
        .lb a { text-decoration: none; }
        .lb-header { height: 82px; display:flex; align-items:center; justify-content:space-between; padding:0 7%; background:#fff; border-bottom:1px solid #e9e5dc; }
        .lb-logo { color:#142840; font-family:Georgia,serif; font-size:23px; letter-spacing:2px; font-weight:bold; }
        .lb-logo span { color:#b99a61; }
        .lb-nav { display:flex; gap:28px; align-items:center; font-size:13px; }
        .lb-nav a { color:#34445a; }
        .lb-button { display:inline-block; padding:14px 22px; background:#b7975e; color:#101f31!important; font-size:12px; font-weight:bold; letter-spacing:.5px; border-radius:2px; }
        .lb-hero { min-height:570px; padding:100px 9%; display:flex; align-items:center; background:linear-gradient(100deg,rgba(12,28,47,.98),rgba(17,39,61,.91)),radial-gradient(circle at 80% 40%,#65788c,#10243a); color:white; position:relative; overflow:hidden; }
        .lb-hero:after { content:"LEXBRIDGE"; position:absolute; right:-35px; bottom:20px; font-family:Georgia,serif; font-size:110px; letter-spacing:12px; color:rgba(255,255,255,.035); }
        .lb-hero-inner { max-width:760px; position:relative; z-index:1; }
        .lb-eyebrow { color:#d1b77f; letter-spacing:3px; font-size:11px; font-weight:bold; text-transform:uppercase; }
        .lb-hero h1 { font-family:Georgia,serif; font-size:clamp(42px,6vw,68px); line-height:1.08; font-weight:normal; margin:24px 0; }
        .lb-hero h1 span { color:#d0b47c; }
        .lb-hero p { color:#d5dce4; font-size:16px; line-height:1.9; max-width:590px; }
        .lb-actions { display:flex; gap:14px; flex-wrap:wrap; margin-top:32px; }
        .lb-outline { display:inline-block; padding:14px 22px; border:1px solid #9ba8b6; color:white; font-size:12px; }
        .lb-strip { display:grid; grid-template-columns:repeat(3,1fr); background:#f1eee7; padding:27px 8%; text-align:center; gap:20px; }
        .lb-strip strong { display:block; color:#182e46; font-family:Georgia,serif; font-size:19px; margin-bottom:7px; }
        .lb-strip span { color:#6e7781; font-size:12px; }
        .lb-section { padding:88px 8%; }
        .lb-section h2 { font-family:Georgia,serif; font-size:40px; font-weight:normal; color:#172b43; margin:12px 0 16px; }
        .lb-intro { max-width:680px; color:#697582; line-height:1.8; font-size:15px; }
        .lb-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:20px; margin-top:38px; }
        .lb-card { background:#fff; border:1px solid #e8e3d9; padding:27px; min-height:210px; }
        .lb-card:hover { border-color:#b99a61; transform:translateY(-3px); transition:.2s; }
        .lb-code { color:#b08d50; font-size:13px; letter-spacing:1px; font-weight:bold; }
        .lb-card h3 { font-family:Georgia,serif; font-size:21px; font-weight:normal; margin:15px 0 10px; color:#1b3049; }
        .lb-card p { font-size:13px; color:#727c87; line-height:1.75; }
        .lb-price { background:#142941; color:white; padding:70px 8%; display:grid; grid-template-columns:1fr 1fr; gap:50px; align-items:center; }
        .lb-price h2 { font-family:Georgia,serif; font-weight:normal; font-size:38px; margin:12px 0; }
        .lb-price p { color:#d1d9e1; font-size:14px; line-height:1.8; }
        .lb-amount { font-family:Georgia,serif; font-size:58px; color:#d0b47c; margin:18px 0 5px; }
        .lb-includes { list-style:none; padding:0; color:#e2e7ec; font-size:13px; line-height:2.3; }
        .lb-includes li:before { content:"✓"; color:#d0b47c; margin-right:12px; }
        .lb-attorney { background:#f1eee7; }
        .lb-attorney-grid { display:grid; grid-template-columns:1fr 1fr; gap:40px; align-items:center; }
        .lb-retainer { background:white; padding:36px; border:1px solid #e5dfd3; }
        .lb-retainer .lb-amount { color:#172b43; font-size:46px; }
        .lb-process { display:grid; grid-template-columns:repeat(4,1fr); gap:18px; margin-top:35px; }
        .lb-step { border-top:2px solid #b99a61; padding-top:20px; }
        .lb-step b { color:#b08d50; font-size:12px; }
        .lb-step h3 { font-family:Georgia,serif; font-size:19px; font-weight:normal; }
        .lb-step p { color:#74808b; font-size:13px; line-height:1.7; }
        .lb-contact { background:#142941; color:white; padding:70px 8%; text-align:center; }
        .lb-contact h2 { color:white; font-family:Georgia,serif; font-size:38px; font-weight:normal; }
        .lb-contact p { color:#d2dbe4; line-height:1.8; }
        .lb-footer { padding:30px 8%; display:flex; justify-content:space-between; flex-wrap:wrap; gap:15px; color:#7b838c; font-size:12px; background:#fff; }
        @media(max-width:750px) {
          .lb-header { padding:18px 5%; height:auto; flex-wrap:wrap; gap:18px; }
          .lb-nav { gap:13px; flex-wrap:wrap; }
          .lb-hero { padding:75px 7%; min-height:500px; }
          .lb-grid { grid-template-columns:1fr; }
          .lb-strip { grid-template-columns:1fr; }
          .lb-price,.lb-attorney-grid { grid-template-columns:1fr; }
          .lb-process { grid-template-columns:1fr 1fr; }
          .lb-section { padding:65px 7%; }
          .lb-section h2 { font-size:33px; }
        }
      `}</style>

      <div className="lb">
        <header className="lb-header">
          <a className="lb-logo" href="#">LEXBRIDGE <span>EVALUATIONS</span></a>
          <nav className="lb-nav">
            <a href="#services">Services</a>
            <a href="#categories">Visa Categories</a>
            <a href="#attorneys">For Attorneys</a>
            <a href="#contact" className="lb-button">CONTACT US</a>
          </nav>
        </header>

        <section className="lb-hero">
          <div className="lb-hero-inner">
            <div className="lb-eyebrow">Immigration Research & Professional Support</div>
            <h1>Stronger Cases.<br/><span>Expert Perspectives.</span></h1>
            <p>Specialist immigration documentation, expert opinion letters and dedicated petition preparation support for individuals and US immigration law firms.</p>
            <div className="lb-actions">
              <a className="lb-button" href="#categories">EXPLORE OUR SERVICES</a>
              <a className="lb-outline" href="#attorneys">ATTORNEY PARTNERSHIPS</a>
            </div>
          </div>
        </section>

        <section className="lb-strip">
          <div><strong>Specialist Expertise</strong><span>Immigration-focused documentation support</span></div>
          <div><strong>Transparent Pricing</strong><span>Clear service pricing from the outset</span></div>
          <div><strong>Attorney Collaboration</strong><span>Structured support for immigration practices</span></div>
        </section>

        <section className="lb-section" id="categories">
          <div className="lb-eyebrow">Our Immigration Expertise</div>
          <h2>Expert Opinions by Visa Category</h2>
          <p className="lb-intro">Specialist professional opinions tailored to the requirements and individual circumstances of each immigration matter. Every engagement begins with an assessment of suitability and expert availability.</p>
          <div className="lb-grid">
            {categories.map((item) => (
              <article className="lb-card" key={item.code}>
                <div className="lb-code">{item.code}</div>
                <h3>{item.name}</h3>
                <p>{item.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="lb-price">
          <div>
            <div className="lb-eyebrow">Straightforward Pricing</div>
            <h2>Expert Opinion Letters</h2>
            <div className="lb-amount">$625</div>
            <strong>All-inclusive per letter</strong>
            <p>One transparent price, inclusive of the expert's professional fee. Final acceptance is subject to case assessment and availability of a suitably qualified expert.</p>
            <div className="lb-actions">
              <a className="lb-button" href="mailto:info@lexbridgeevaluations.com?subject=Expert%20Opinion%20Letter%20Enquiry">REQUEST AN ASSESSMENT</a>
            </div>
          </div>
          <div>
            <h3 style={{fontFamily:"Georgia,serif",fontWeight:"normal",fontSize:23}}>What the service includes</h3>
            <ul className="lb-includes">
              <li>Case-specific review and assessment</li>
              <li>Identification of an appropriate expert</li>
              <li>Professional opinion preparation</li>
              <li>Immigration-focused analysis</li>
              <li>Final letter delivery</li>
            </ul>
          </div>
        </section>

        <section className="lb-section" id="services">
          <div className="lb-eyebrow">Documentation & Research</div>
          <h2>More Than a Letter</h2>
          <p className="lb-intro">A broader range of immigration documentation and research services designed to support complex petitions and professional legal workflows.</p>
          <div className="lb-grid">
            {services.map((item) => (
              <article className="lb-card" key={item[0]}>
                <div className="lb-code">{item[0]}</div>
                <h3>{item[1]}</h3>
                <p>{item[2]}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="lb-section lb-attorney" id="attorneys">
          <div className="lb-attorney-grid">
            <div>
              <div className="lb-eyebrow">For US Immigration Law Firms</div>
              <h2>Your Extended Petition Support Team</h2>
              <p className="lb-intro">Work with LexBridge on a case-by-case or ongoing basis for structured immigration documentation and petition preparation support.</p>
              <ul className="lb-includes" style={{color:"#35465a"}}>
                <li>Petition research and drafting assistance</li>
                <li>Evidence review, organisation and indexing</li>
                <li>Recommendation letter coordination</li>
                <li>Expert opinion coordination</li>
                <li>Exhibit preparation and RFE documentation</li>
              </ul>
            </div>
            <div className="lb-retainer">
              <div className="lb-eyebrow">Case Preparation Collaboration</div>
              <h2 style={{fontFamily:"Georgia,serif",fontWeight:"normal"}}>Full Case Packet Preparation</h2>
              <div className="lb-amount">From $1,750</div>
              <p style={{color:"#697582",lineHeight:1.8,fontSize:14}}>A collaborative, attorney-directed service for comprehensive case documentation and preparation support. Scope and final fees are agreed directly with the attorney.</p>
              <a className="lb-button" href="mailto:info@lexbridgeevaluations.com?subject=Attorney%20Collaboration%20Enquiry">DISCUSS A PARTNERSHIP</a>
            </div>
          </div>
        </section>

        <section className="lb-section">
          <div className="lb-eyebrow">Our Approach</div>
          <h2>A Clear, Collaborative Process</h2>
          <div className="lb-process">
            <div className="lb-step"><b>STEP 01</b><h3>Enquire</h3><p>Tell us about the immigration matter and the support required.</p></div>
            <div className="lb-step"><b>STEP 02</b><h3>Assess</h3><p>We assess the scope, documentation and appropriate service pathway.</p></div>
            <div className="lb-step"><b>STEP 03</b><h3>Prepare</h3><p>Work is coordinated with the relevant professionals and attorney.</p></div>
            <div className="lb-step"><b>STEP 04</b><h3>Deliver</h3><p>Receive the agreed documentation for attorney review and use.</p></div>
          </div>
        </section>

        <section className="lb-contact" id="contact">
          <div className="lb-eyebrow">Let's Work Together</div>
          <h2>Move Your Immigration Matter Forward</h2>
          <p>Whether you need an expert opinion or a dedicated petition support partner,<br/> our team is ready to discuss your requirements.</p>
          <div className="lb-actions" style={{justifyContent:"center"}}>
            <a className="lb-button" href="mailto:info@lexbridgeevaluations.com">INFO@LEXBRIDGEEVALUATIONS.COM</a>
          </div>
        </section>

        <footer className="lb-footer">
          <span>© {new Date().getFullYear()} LexBridge Evaluations. All rights reserved.</span>
          <span>Immigration Research & Professional Support</span>
        </footer>
      </div>
    </main>
  );
}
