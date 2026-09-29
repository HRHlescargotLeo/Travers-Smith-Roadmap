/* data.js — sample data for the Travers Smith prototypes.
   People, deals, briefings and past events are taken from traverssmith.com (29 Sep 2026).
   Anything marked sample: true is illustrative content written for the prototype. */

window.TS_PEOPLE = {
  'andrew-gillen': { name: 'Andrew Gillen', role: 'Senior Partner', tel: '+44 20 7295 3369' },
  'aaron-stocks': { name: 'Aaron Stocks', role: 'Head of Transactions', tel: '+44 20 7295 3319' },
  'adrian-west': { name: 'Adrian West', role: 'Head of Corporate M&A and ECM', tel: '+44 20 7295 3419' },
  'will-yates': { name: 'Will Yates', role: 'Head of Private Equity & Financial Sponsors', tel: '+44 20 7295 3460' },
  'emma-havas': { name: 'Emma Havas', role: 'Partner', tel: '+44 20 7295 3294' },
  'william-howard': { name: 'William Howard', role: 'Head of International', tel: '+44 20 7295 3483' },
  'rob-fell': { name: 'Rob Fell', role: 'Partner', tel: '+44 20 7295 3292' },
  'danny-riding': { name: 'Danny Riding', role: 'Partner', tel: '+44 20 7295 3074' },
  'jon-reddington': { name: 'Jon Reddington', role: 'Partner', tel: '+44 20 7295 3413' },
  'sian-keall': { name: 'Siân Keall', role: 'Partner', tel: '+44 20 7295 3357' },
  'david-james': { name: 'David James', role: 'Head of Pensions', tel: '+44 20 7295 3087' },
  'daniel-gerring': { name: 'Daniel Gerring', role: 'Partner', tel: '+44 20 7295 3341' },
  'niamh-hamlyn': { name: 'Niamh Hamlyn', role: 'Partner', tel: '+44 20 7295 3287' },
  'chris-widdison': { name: 'Chris Widdison', role: 'Partner', tel: '+44 20 7295 3604' },
  'catrin-young': { name: 'Catrin Young', role: 'Knowledge Counsel', tel: '+44 20 7295 3876' }
};

/* Events. Real events from traverssmith.com (29 Sep 2026) unless sample: true.
   body: description paragraphs · speakers: profile ids · guests: external speakers
   recording / takeaways on past events are proposals (shown as samples). */
window.TS_EVENTS = [
  { id: 'ukraine-defence', title: "Webinar: Ukraine's wartime defence-industry boom", date: '2026-10-14', start: '15:00', mins: 60,
    format: 'Webinar', where: 'Online. The joining link is sent when you register.', topic: 'Defence, Security & Resilience', cpd: '1 hour',
    summary: "With Ukrainian law firm Arzinger, we unpack Ukraine's wartime defence-industry boom and the legal rules foreign companies need to navigate to do business in it.",
    body: ["In collaboration with Ukrainian law firm Arzinger, our webinar will unpack Ukraine's wartime defence-industry boom and the legal rules foreign companies need to navigate to do business in it.",
      "The session will begin by explaining the current market backdrop, looking at Ukraine's naval drone warfare and the losses inflicted on the Black Sea Fleet, the country's Soviet-era industrial base, and Ukroboronprom's transformation into UDI.",
      "We will explore the shift from a closed $5–6B market to the world's #1 arms importer ($64.8B in 2023), the Brave1-driven boom in drones and electronic warfare, and the surge in foreign investment, with 200+ start-ups and over $1.5B raised.",
      "Finally, the Arzinger Defence Group will walk through the rapidly changing legal framework and what this means in practice, covering merger control and the incoming FDI-screening regime, the temporary MilTech merger exemption, IP and technology licensing, export control, arms procurement and testing."],
    speakers: ['jon-reddington', 'sian-keall'], guests: 'Arzinger Defence Group' },
  { id: 'employment-rights', title: 'GC Programme: the Employment Rights Act, one year on', date: '2026-11-05', start: '08:30', mins: 90,
    format: 'In person', where: 'Travers Smith, 3 Stonecutter Street, London EC4A 4AW. Breakfast from 08:00.', topic: 'Employment', cpd: '1.5 hours',
    summary: 'A breakfast briefing for in-house lawyers and HR leads on the reforms already in force, what arrives in 2027, and the policies to update now.',
    body: ['A breakfast briefing for in-house lawyers and HR leads on the reforms already in force, what arrives in 2027, and the policies to update now.', 'The session is part of our General Counsel and In-house Lawyers’ Programme, with time for questions and networking afterwards.'],
    speakers: [], team: 'Employment team', sample: true },
  { id: 'small-pots', title: 'Small pots, big questions: the consolidation regime explained', date: '2026-11-19', start: '12:30', mins: 45,
    format: 'Webinar', where: 'Online. The joining link is sent when you register.', topic: 'Pensions', cpd: '45 minutes',
    summary: 'Our Pensions team walks through the proposed multiple default consolidator model and what DC schemes, providers and employers should be doing now.',
    body: ['Our Pensions team walks through the proposed multiple default consolidator model and what DC schemes, providers and employers should be doing now.', 'Based on our briefing "Small Pots, Big Questions", with plenty of time for your questions.'],
    speakers: [], team: 'Pensions team', sample: true, hub: true },
  { id: 'building-safety', title: 'Real Estate breakfast: preparing for the building safety levy', date: '2026-12-02', start: '08:30', mins: 75,
    format: 'In person', where: 'Travers Smith, 3 Stonecutter Street, London EC4A 4AW.', topic: 'Real Estate', cpd: '1.25 hours',
    summary: 'Developers and investors: how the levy will be calculated, who pays, and how to reflect it in development agreements.',
    body: ['Developers and investors: how the levy will be calculated, who pays, and how to reflect it in development agreements.'],
    speakers: [], team: 'Real Estate team', sample: true },

  { id: 'frontline', title: 'Frontline: a Travers Smith Defence series', date: '2026-09-16', start: '', mins: 0,
    format: 'Podcast', where: 'Listen online at any time.', topic: 'Defence, Security & Resilience',
    summary: 'Our series addressing the key issues affecting the defence sector.',
    body: ['Welcome to Frontline by Travers Smith, our series addressing the key issues affecting the defence sector.'],
    speakers: [], team: 'Defence, Security & Resilience team', ondemand: true, player: 'Podcast player' },
  { id: 'uk-srs', title: 'Briefing: UK adoption of sustainability reporting standards and mandatory transition plans', date: '2025-07-17', start: '15:30', mins: 30,
    format: 'Webinar', where: 'Recorded webinar', topic: 'ESG and Impact',
    summary: 'The UK government’s plans to adopt international sustainability reporting standards and to mandate Paris-aligned transition plans.',
    body: ['In June 2025 the UK took the next step in its plan to adopt international sustainability reporting standards for UK businesses, publishing a key consultation document. On the same day, it launched a consultation on how to implement its manifesto commitment to mandate credible, Paris-aligned climate transition plans for FTSE 100 companies and UK-regulated financial services firms, including asset managers.',
      'This short briefing explains the government’s plans and how to have your say as they move to the next stage. It was broadcast on 17 July 2025 and is available on demand.'],
    speakers: ['sarah-jane-denton', 'simon-witney'], ondemand: true, player: 'Video player' },

  { id: 'future-fintech', title: 'Future of Fintech 2026', date: '2026-09-16', start: '13:30', mins: 0, format: 'In person', where: 'Central London',
    topic: 'Fintech', summary: 'Over 200 leaders of the fintech ecosystem, gathered for an afternoon of panels, a keynote and networking.',
    body: ['Over 200 leaders of the fintech ecosystem gathered in central London on the afternoon of Wednesday 16 September.',
      "Chaired by Natalie Lewis, Head of the firm's Fintech, Market Infrastructure & Payments practice, the afternoon covered the future of the UK as a hub for digital assets, the use of AI in financial services, financial inclusion, right-sized regulation and geopolitical developments, with speakers from the FCA, Innovate Finance, Circle, CFIT, NatWest, Open Banking Ltd and ACI Worldwide.",
      'The programme featured a keynote, three panels covering payments, digital assets and fintech regulation, and a fireside conversation.'],
    speakers: ['natalie-lewis'], past: true, takeaways: true },
  { id: 'reuk', title: 'Travers Smith at Real Estate:UK Annual Conference 2026', date: '2026-07-07', start: '', mins: 0, format: 'Conference', where: 'Silver sponsor',
    topic: 'Real Estate', summary: 'Travers Smith was a Silver Sponsor of the first Real Estate:UK Annual Conference.',
    body: ['Travers Smith was proud to be a Silver Sponsor of the Real Estate:UK Annual Conference 2026, the first flagship conference since the merger of AREF, BPF and IPF to create Real Estate:UK.',
      'Over 300 senior leaders, investors, policymakers, fund managers, developers, lenders and advisers attended a day of keynotes, capital markets and investment strategy panels and cyber risk sessions.'],
    speakers: ['emma-pereira', 'sarah-walker', 'phil-bartram', 'catherine-odriscoll', 'chris-towland', 'sophie-burns', 'james-oneill', 'jamie-smith'], speakerLabel: 'Travers Smith team at the conference', past: true },
  { id: 'ais-2026', title: 'Alternative Insights Summit 2026', date: '2026-06-18', start: '', mins: 0, format: 'In person', where: 'London',
    topic: 'Alternative Asset Management', summary: 'Our fifth annual Alternative Insights Summit.',
    body: ['Our fifth annual Alternative Insights Summit, with leading lights across the alternative asset management industry in presentations, panels and fireside chats, and plenty of time for networking.'],
    speakers: [], team: 'Alternative Asset Management team', past: true, recording: true, takeaways: true },
  { id: 'hr-ai', title: 'A new era for HR: navigating AI with best practice', date: '2026-01-21', start: '', mins: 0, format: 'In person', where: 'Travers Smith, London. Breakfast briefing.',
    topic: 'Employment', summary: 'A breakfast briefing on how AI is reshaping HR, from legal considerations to practical best practice.',
    body: ['As AI rapidly transforms the workplace, HR professionals need to stay ahead of the legal, ethical and practical developments shaping the future of people management.',
      "Our breakfast briefing explored how AI is reshaping HR, translating legal considerations into practical insights and best practice. We were joined by Ruth Kennedy, Barrister at 11KBW, on what is being seen on the litigious side of AI's use in HR."],
    speakers: ['ailie-murray', 'james-longster'], guests: 'Ruth Kennedy, 11KBW', past: true, takeaways: true },
  { id: 'data-centres', title: 'Making Data Centres Happen', date: '2025-09-30', start: '', mins: 0, format: 'In person', where: 'London, with Celicourt Communications',
    topic: 'Real Estate', summary: 'A panel on the opportunities for data centre investment in the UK, with Cordiant Digital Infrastructure, Goldacre and Savills.',
    body: ['Travers Smith and Celicourt Communications brought together operators, investors and advisers in the data centre industry to discuss the opportunities for data centre investment in the UK.',
      'The panel included representatives from Cordiant Digital Infrastructure, Goldacre and Savills, with an overview of the UK market, trends in capital deployment and the current challenges for real estate investment into the sector.'],
    speakers: [], guests: 'Cordiant Digital Infrastructure, Goldacre and Savills', team: 'Real Estate team', past: true },
  { id: 'future-fintech-2025', title: 'Future of Fintech 2025', date: '2025-09-17', start: '14:00', mins: 0, format: 'In person', where: 'City of London',
    topic: 'Fintech', summary: 'With a keynote from Jessica Rusu of the FCA, on digital assets, payments regulation and financial market infrastructures.',
    body: ['After a summer that brought the Leeds Reforms and the Mansion House speech, Jessica Rusu, Chief Data, Information and Intelligence Officer of the FCA, delivered the keynote.',
      'Speakers represented the Bank of England, the PSR, the House of Lords, Euroclear, London Stock Exchange, Visa, Stripe, Archax, Trustly and Agant, with sessions covering digital assets, payments regulation and financial market infrastructures.'],
    speakers: ['natalie-lewis'], past: true },
  { id: 'ais-2025', title: 'Alternative Insights Summit 2025', date: '2025-06-19', start: '', mins: 0, format: 'In person', where: 'London',
    topic: 'Alternative Asset Management', summary: 'Our fourth annual summit: European Private Capital in a Trump 2.0 World.',
    body: ["Our fourth annual Alternative Insights Summit. This year's theme was European Private Capital in a Trump 2.0 World."],
    speakers: [], team: 'Alternative Asset Management team', past: true },
  { id: 'lidw-2025', title: 'London International Disputes Week 2025', date: '2025-06-02', start: '', mins: 0, format: 'Conference', where: 'London, 2 to 6 June 2025',
    topic: 'Disputes', summary: 'Three Travers Smith events on international arbitration, mass claims and investigations.',
    body: ['London International Disputes Week has become the place to be for those involved in resolving international disputes, with 8,000 attendees from over 100 countries.',
      'As a member of LIDW, we hosted three events with experts from the UK, Europe and the US on key trends and challenges across international arbitration, mass claims and investigations.'],
    speakers: ['caroline-edwards', 'heather-gagen', 'stephanie-lee', 'adam-wyman'], past: true },
  { id: 'emir-3', title: "EMIR 3.0: what's new and what's next?", date: '2024-07-11', start: '', mins: 0, format: 'Webinar', where: 'Online',
    topic: 'Derivatives & Structured Products', summary: 'The incoming changes to the European Market Infrastructure Regulation, adopted by the European Parliament in April 2024.',
    body: ['On 25 April 2024 the European Parliament adopted amendments to the European Market Infrastructure Regulation, known as EMIR 3.0.',
      'EMIR applies directly to EU counterparties, but UK and other non-EU counterparties are affected when they trade derivatives with EU entities subject to its clearing, margining and reporting requirements.'],
    speakers: ['jonathan-gilmour', 'elinor-samuel'], past: true, recording: true },
  { id: 'cs3d', title: "Corporate Sustainability Due Diligence Directive (CS3D): what's new and what's next?", date: '2024-06-26', start: '', mins: 0, format: 'Webinar', where: 'Online',
    topic: 'ESG and Impact', summary: 'The proposed rules on sustainability due diligence and how CS3D interacts with CSRD.',
    body: ['Our experts discussed the proposed rules on sustainability due diligence, the key developments in the latest text and the interaction, and potential mismatch, between CS3D and the Corporate Sustainability Reporting Directive.'],
    speakers: ['john-buttanshaw', 'sarah-jane-denton', 'simon-witney'], past: true },
  { id: 'csrd', title: 'CSRD: The Road to Compliance', date: '2024-05-02', start: '', mins: 0, format: 'Webinar', where: 'Online',
    topic: 'ESG and Impact', summary: "Demystifying the EU's rules on sustainability reporting under the CSRD.",
    body: ['Key steps along the road to compliance with the Corporate Sustainability Reporting Directive, such as value chain definition and materiality assessment, and some common myths about CSRD reporting.'],
    speakers: ['simon-witney', 'sarah-jane-denton', 'john-buttanshaw', 'alexandra-macbean'], past: true }
];

/* International regions. Figures and matters are samples unless real: true. */
window.TS_REGIONS = {
  europe: { name: 'Europe', countries: 29, firms: 71,
    intro: 'Most of our cross-border work touches Europe, from pan-European carve-outs to fund marketing and employment across the EU. We have worked with the same independent firms in many jurisdictions for over a decade.',
    jurisdictions: ['France', 'Germany', 'Netherlands', 'Belgium', 'Luxembourg', 'Ireland', 'Spain', 'Italy', 'Switzerland', 'Sweden', 'Denmark', 'Norway', 'Finland', 'Poland', 'Czech Republic', 'Austria', 'Portugal', 'Channel Islands'],
    matters: [
      { t: 'Pan-European carve-out for a UK-listed industrial group', d: 'Separation and sale of a division with operating companies in 11 jurisdictions, under one engagement letter and a single fee arrangement.', tags: 'Corporate M&A · 11 jurisdictions' },
      { t: "Deepki on its acquisitions of EVORA Global and Metry", d: 'Advising the French ESG data platform on two acquisitions announced in September 2026.', tags: 'Corporate M&A · France, UK, Sweden', real: true },
      { t: 'AIFMD marketing for a UK private equity manager', d: 'Coordinating national private placement filings across 14 EU member states for a new flagship fund.', tags: 'Funds · 14 jurisdictions' }
    ] },
  americas: { name: 'Americas', countries: 9, firms: 38,
    intro: 'US and Canadian investors are among our most active clients in UK deals, and many UK clients take their first steps abroad in North America. We regularly coordinate US, Canadian and Latin American advice alongside our own.',
    jurisdictions: ['United States', 'Canada', 'Mexico', 'Brazil', 'Chile', 'Colombia', 'Argentina', 'Peru', 'Cayman Islands'],
    matters: [
      { t: 'UK sponsor acquiring a US healthcare services group', d: 'Leading the transaction with US counsel on regulatory and employment matters across six states.', tags: 'Private Equity · US' },
      { t: 'Incentive plan roll-out across North and South America', d: 'Extending a UK-listed company’s share plans to employees in the US, Canada and Brazil.', tags: 'Incentives & Remuneration · 3 jurisdictions' },
      { t: 'Canadian pension investor co-investing in a UK platform', d: 'Co-investment and shareholder arrangements alongside a UK mid-market sponsor.', tags: 'Asset Management · Canada, UK' }
    ] },
  apac: { name: 'Asia Pacific', countries: 9, firms: 30,
    intro: 'We act for Japanese, Singaporean and Australian investors coming into the UK and Europe, and for UK clients building operations across the region.',
    jurisdictions: ['Japan', 'Singapore', 'Hong Kong', 'China', 'Australia', 'India', 'South Korea', 'New Zealand', 'Indonesia'],
    matters: [
      { t: 'Mizuho Financial Group on its acquisition of Augusta & Co', d: 'Advising the Japanese banking group on its acquisition of the London-based advisory boutique.', tags: 'Corporate M&A · Japan, UK', real: true },
      { t: 'Singapore investor’s minority stake in a UK fintech', d: 'Investment terms, regulatory change-in-control filings and governance rights.', tags: 'Fintech · Singapore, UK' },
      { t: 'Australian super fund investing in a European infrastructure fund', d: 'Side letter negotiation and tax structuring with Australian counsel.', tags: 'Funds · Australia, Luxembourg' }
    ] },
  mea: { name: 'Middle East and Africa', countries: 8, firms: 24,
    intro: 'Gulf sovereign and family investors are growing sources of capital for UK businesses and funds. We work with independent firms across the Gulf and Africa on inbound investment and cross-border structuring.',
    jurisdictions: ['United Arab Emirates', 'Saudi Arabia', 'Qatar', 'Bahrain', 'Egypt', 'South Africa', 'Nigeria', 'Kenya'],
    matters: [
      { t: 'Gulf sovereign fund taking a minority stake in UK infrastructure', d: 'Acquisition of a significant minority interest with National Security and Investment Act clearance.', tags: 'Infrastructure · UAE, UK' },
      { t: 'Family office investing in a UK real estate portfolio', d: 'Structuring, acquisition finance and asset management arrangements.', tags: 'Real Estate · Saudi Arabia, UK' },
      { t: 'South African group’s restructuring of its UK subsidiaries', d: 'Group reorganisation ahead of a proposed sale process.', tags: 'Corporate · South Africa, UK' }
    ] }
};

window.TS_FMT_DATE = function (iso, opts) {
  var d = new Date(iso + 'T00:00:00');
  return d.toLocaleDateString('en-GB', opts || { day: 'numeric', month: 'short', year: 'numeric' });
};
