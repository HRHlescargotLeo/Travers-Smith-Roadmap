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

/* Events. Upcoming events other than the Ukraine webinar are samples. */
window.TS_EVENTS = [
  { id: 'ukraine-defence', title: "Webinar: Ukraine's wartime defence-industry boom", date: '2026-10-14', start: '15:00', mins: 60,
    format: 'Webinar', where: 'Online. The joining link is sent when you register.', topic: 'Defence, Security & Resilience', cpd: '1 hour',
    summary: "With Ukrainian law firm Arzinger, we unpack Ukraine's wartime defence-industry boom and the legal rules foreign companies need to navigate to do business in it.",
    speakers: ['jon-reddington', 'sian-keall'], guests: 'Arzinger Defence Group' },
  { id: 'employment-rights', title: 'GC Programme: the Employment Rights Act, one year on', date: '2026-11-05', start: '08:30', mins: 90,
    format: 'In person', where: 'Travers Smith, 3 Stonecutter Street, London EC4A 4AW. Breakfast from 08:00.', topic: 'Employment', cpd: '1.5 hours',
    summary: 'A breakfast briefing for in-house lawyers and HR leads on the reforms already in force, what arrives in 2027, and the policies to update now.',
    speakers: [], team: 'Employment team', sample: true },
  { id: 'small-pots', title: 'Small pots, big questions: the consolidation regime explained', date: '2026-11-19', start: '12:30', mins: 45,
    format: 'Webinar', where: 'Online. The joining link is sent when you register.', topic: 'Pensions', cpd: '45 minutes',
    summary: 'Our Pensions team walks through the proposed multiple default consolidator model and what DC schemes, providers and employers should be doing now.',
    speakers: [], team: 'Pensions team', sample: true, hub: true },
  { id: 'building-safety', title: 'Real Estate breakfast: preparing for the building safety levy', date: '2026-12-02', start: '08:30', mins: 75,
    format: 'In person', where: 'Travers Smith, 3 Stonecutter Street, London EC4A 4AW.', topic: 'Real Estate', cpd: '1.25 hours',
    summary: 'Developers and investors: how the levy will be calculated, who pays, and how to reflect it in development agreements.',
    speakers: [], team: 'Real Estate team', sample: true },
  { id: 'frontline', title: 'Frontline: a Travers Smith Defence series', date: '2026-09-16', start: '', mins: 0,
    format: 'On demand', where: 'Listen online at any time.', topic: 'Defence, Security & Resilience',
    summary: 'Our series addressing the key issues affecting the defence sector.', speakers: [], team: 'Defence, Security & Resilience team', ondemand: true },
  { id: 'future-fintech', title: 'Future of Fintech 2026', date: '2026-09-16', start: '14:00', mins: 240, format: 'In person', where: 'Central London',
    topic: 'Fintech', summary: 'Over 200 leaders of the fintech ecosystem, gathered for an afternoon of panels and networking.', speakers: [], team: 'Fintech team', past: true, takeaways: true },
  { id: 'reuk', title: 'Travers Smith at Real Estate:UK Annual Conference 2026', date: '2026-07-07', start: '09:00', mins: 480, format: 'Conference', where: 'Silver sponsor',
    topic: 'Real Estate', summary: 'Travers Smith was proud to be a Silver Sponsor of the Real Estate:UK Annual Conference 2026.', speakers: [], team: 'Real Estate team', past: true },
  { id: 'ais-2026', title: 'Alternative Insights Summit 2026', date: '2026-06-18', start: '13:30', mins: 300, format: 'In person', where: 'London',
    topic: 'Alternative Asset Management', summary: 'Our fifth annual Alternative Insights Summit.', speakers: [], team: 'Alternative Asset Management team', past: true, recording: true, takeaways: true }
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
