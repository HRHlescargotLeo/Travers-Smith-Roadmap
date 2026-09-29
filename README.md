# Travers Smith — website improvement prototypes (V1.1)

Six clickable greyscale prototypes for improvements to traverssmith.com, prepared by ClerksWell
following the phase 1 review (29 September 2026). This round is about structure and behaviour;
the Travers Smith design layer will be added in `src/css/theme.css` in the next round.

Site search, navigation and the Client Area are covered by separate projects and are left out.

## View
Live: https://hrhlescargotleo.github.io/Travers-Smith-Roadmap/

Or open `docs/index.html` in a browser. No server or install needed.

GitHub Pages publishes from the `docs/` folder on `main`
(Settings → Pages → Deploy from a branch → `main` / `/docs`).

## Prototypes
1. Service page — `pages/service.html` (Corporate M&A)
2. Profiles — `pages/profile.html?person=<id>` (Emma Havas by default; every named lawyer has a profile)
3. Briefings — `pages/briefing.html`, plus the topic hub at `pages/topic-hub.html`
4. Events — `pages/events.html`, plus the event page at `pages/event.html` (`?event=<id>`)
5. Stay in touch — `pages/stay-in-touch.html`, plus `pages/contact.html` (`?practice=<id>`)
6. International — `pages/international.html`, plus `pages/region.html` (`?r=europe|americas|apac|mea`)

Module library: `modules/library.html`. Requirements: `requirements/requirements.md`.

## Content
People, deals, briefings and past events are from traverssmith.com. Case studies, some upcoming
events and all regional detail are samples written for the prototypes and are tagged "Sample";
unknown facts appear as [placeholders]. Sample data lives in `src/js/data.js`; profile content,
shortened from traverssmith.com, lives in `src/js/profiles.js`.

## Build
```
node build-includes.js && node validate.js
```
Edit files in `src/`; `docs/` is generated (commit it, as GitHub Pages serves it). The prototype
navigator (top bar with the Notes switch), the follow dialog and the previous/next footer live in
`src/includes/`.

## Status
V1, greyscale prototypes for internal review. Notes are off by default; switch "Notes on" in the
top bar to show what each prototype proposes and why, plus in-page annotations.
