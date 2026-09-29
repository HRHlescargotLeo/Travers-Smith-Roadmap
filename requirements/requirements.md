# Travers Smith — prototype requirements (V2)

Source: ClerksWell phase 1 review of traverssmith.com and four competitor sites (29 Sep 2026).
Idea numbers (#nn) refer to the Opportunities page. These are ClerksWell proposals, not client
requirements; Travers Smith has not yet reviewed them. Site search, navigation and the Client
Area are out of scope (separate projects).

## Global
- R01 A prototype navigator replaces the firm's header; a previous/next pager replaces the footer.
- R02 Every template works at 320px, 768px and 1024px+ with no horizontal scrolling.
- R03 All interactive components are keyboard operable and dismissible with Escape (WCAG 2.2 AA target) (#42).
- R04 Every date shows the year (#11).
- R05 Following a topic persists across pages in the session and pre-ticks the sign-up form (#26).

## Prototype 1 — Service page (ideas #1, #3–#7)
- R10 A case study module per practice, with challenge, approach, outcome and headline facts (#1).
- R11 Every statistic shows an as-at date and source; every directory quote shows its edition year (#3).
- R12 A scannable "what we do" list replaces the long overview (#7).
- R13 The deal feed is driven by the Deal content type only and can be filtered by deal type (#4).
- R14 Four key contacts, with the full team one click away (#5).
- R15 A short practice enquiry form, pre-set to the practice, with a confirmation (#6).
- R16 The visible page title is the only H1 (#39).

## Prototype 2 — Profiles (ideas #8–#10)
- R20 Selected deals are records with date, type and link to the press release, filterable on the profile (#8).
- R21 "Latest from" lists deals, briefings, podcasts and events where the person is named (#9).
- R22 An at-a-glance panel: role, practices, recognition, admission, languages, education (#10).
- R23 Every lawyer named anywhere in the prototypes links to their own profile (`profile.html?person=<id>`). (V1.1 feedback)

## Prototype 3 — Briefings and topic hubs (ideas #11–#16, #26)
- R30 Briefing header shows content type, full date, reading time and topic (#11, #12).
- R31 A key points box with "what to do now" under the headline (#13).
- R32 Chapters have real anchors with copy-link buttons; the chapter list highlights the current section (#14).
- R33 After the contacts: related reading, the topic hub, the next event and a follow button (#15).
- R34 Topic hubs have a timeline of stages, opening on the current one (#16).
- R35 Topic hubs list every briefing, podcast, event and infographic on the topic, filterable by format (#16).
- R40 "Follow <topic>" asks for an email the first time, then works in one click (#26).

## Prototype 4 — Events (ideas #19–#23)
- R50 Upcoming, on-demand and past events are separate; past events link to recordings or takeaways (#20, #24).
- R51 The homepage module shows the next three upcoming events (#19).
- R52 Promotions carry an end date (#21).
- R53 Event cards and pages show full date, time with time zone, duration, format and add to calendar (.ics and Google) (#22).
- R54 Registration is a short native form with a confirmation that offers the calendar file (#23).
- R55 The event page has an essentials panel: date, time, duration, format, where, CPD (#22).
- R56 Every event in the listing has its own page: upcoming (register), on demand (player) and past (catch up, speakers, more events). (V1.1 feedback)

## Prototype 5 — Sign-up and contact (ideas #25, #27–#29)
- R60 Sign-up starts with topics: named series, practice areas and events (#25).
- R61 Details step needs only name and email; organisation and job title optional; no "How did you hear about us?" (#29).
- R62 Readers choose "as published" or a weekly digest.
- R63 Confirmation lists the chosen topics and frequency.
- R64 Contact asks the reason first; six reasons replace the 12 query types (#27).
- R65 New matters route to a practice with a short form.
- R66 Media, careers and existing clients see direct contacts without a form; data requests have their own form.
- R67 Every route says what happens next and when (#28).

## Prototype 6 — International (ideas #30–#32)
- R70 The International page links to one page per region (#30).
- R71 The relationship-firm model is explained in three steps.
- R72 Headline figures come from one source and add up across regions (#31).
- R73 Cross-border deals show their jurisdictions and feed the International and regional pages (#32).
- R74 Regional pages list jurisdictions, recent matters and who to call; the region can be switched in place (#30).

## Change log
- V1.1 (29 Sep 2026), from Leo's review:
  1. Clicking a person jumped to the top of the page. Every named lawyer now opens a profile, using shortened content from their traverssmith.com profile (R23).
  2. Event cards for on-demand and past events went nowhere. Every event now has a page, and the listing carries eleven real past events from 2024 to 2026 (R56).
- V2 (29 Sep 2026): Travers Smith design layer added in `theme.css` from the phase 1 design system; portraits and illustrations from traverssmith.com via `photos.js`. No structural changes.
