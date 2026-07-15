# DESIGN.md — Adeyemi & Partners

Design system reference for AI-assisted generation (Google Stitch, Antigravity, or any AI coding/design tool that reads project context). Treat every rule below as a hard constraint, not a suggestion. All generated screens must match this system exactly — same navbar, same button shapes, same palette, same type pairing.

## Brand
- **Project:** Adeyemi & Partners — fictional corporate law firm website (Creative Emman portfolio project)
- **Site type:** Marketing/informational website only. No dashboard, no auth, no backend.
- **Personality:** Authoritative, discreet, established. Confidence expressed through restraint and precision — the deliberate opposite of BrightPath Academy's warm/editorial direction. This project demonstrates the team can do premium/serious as well as warm/approachable.

## Color Palette
Use ONLY these colors. Do not introduce new hues.

| Token | Hex | Usage |
|---|---|---|
| `color-charcoal` | `#1A1A1A` | Primary text, headers, primary buttons |
| `color-ivory` | `#F5F1E8` | Page background — warm off-white, never stark white |
| `color-burgundy` | `#5C2A2A` | Secondary accent — links, highlights, section backgrounds |
| `color-gold` | `#9C7A3C` | Sparingly — dividers, icon strokes, premium accents only |

Rules:
- Never use stark white (`#FFFFFF`) as a background — it reads cheap for this brand. Use ivory.
- Gold is an accent only — never a large fill area (no gold section backgrounds, no gold buttons).
- No bright/saturated colors anywhere. No mustard, teal, or orange (those belong to BrightPath, not this project).

## Typography
- **Display / headings:** a serif with gravitas — Playfair Display, Source Serif, or Freight. Weight 500–600.
- **Body / UI:** a clean, understated sans — Inter. Weight 400–500.
- No playful or rounded display fonts. No script/handwritten fonts anywhere.

## Components

### Navigation bar (must be IDENTICAL across every page)
- Logo/wordmark: left-aligned, "Adeyemi & Partners" in serif, charcoal text
- Nav links: right-aligned — Home, About, Practice Areas, Attorneys, Case Results, Insights, Contact
- Background: ivory
- No CTA button in the nav bar itself; primary CTA lives in the hero
- Do not regenerate this per page — reuse the exact same markup/component everywhere

### Footer (must be IDENTICAL across every page)
- Background: charcoal (`#1A1A1A`), text: ivory (`#F5F1E8`)
- Layout: firm name/logo left, a "Practice Areas" quick-links column, a "Contact" column (address, phone, email)
- Bottom row: copyright text, bar association disclaimer line, separated by a thin gold divider line
- Do not regenerate this per page — reuse the exact same markup/component everywhere

### Buttons
- **Primary:** solid charcoal fill, ivory text, sharp or minimally-rounded corners (4–6px max — never a full pill)
- **Secondary:** transparent fill, charcoal border, charcoal text, same corner radius as primary
- No fully rounded/pill buttons anywhere — that shape language belongs to BrightPath, not this project

### Cards
- Sharp or minimally-rounded corners (4–6px)
- Sit on ivory background, thin charcoal or gold-hairline border rather than drop shadow
- No bright accent fills on cards — keep them neutral, let photography and typography carry the design

## Layout Principles
- Generous whitespace, restrained pacing — do not overload sections with color or motion
- Hero always includes: serif headline, short sans subtext, one primary button ("Request a Consultation")
- Motion: fade-in reveals only on scroll. No bounce, no playful easing, no animated counters with personality — keep any motion clinical and minimal

## Mobile / Responsive Spec
- Nav collapses to a hamburger icon (charcoal), opens a full-width ivory dropdown, links stacked vertically
- Single column layout, cards and sections stack vertically
- Footer stacks vertically: logo, then quick links, then contact details, then copyright row
- Same charcoal/ivory/burgundy/gold palette and typography — only layout direction changes

## Full Page List (for multi-screen generation)
Generate these together in one project/session so shared components (nav, footer, buttons) stay identical:
1. Home
2. About
3. Practice Areas (overview)
4. Practice Area Detail
5. Attorneys (team grid)
6. Attorney Profile
7. Case Results / Track Record
8. Insights / Legal Blog
9. Insight Detail
10. Testimonials / Client Trust
11. Contact / Consultation Request
12. 404 Page

## Consistency Checklist (run before treating any screen as final)
- [ ] Navbar markup is byte-for-byte identical to every other page
- [ ] Footer markup is byte-for-byte identical to every other page
- [ ] Only the 4 palette colors above appear anywhere in the UI
- [ ] No fully rounded/pill buttons — sharp or minimal corner radius only
- [ ] Headlines use the serif font; body/UI uses Inter — no mixing
- [ ] Gold is used only as an accent, never as a large fill
- [ ] Mobile nav collapses to hamburger, same logo lockup as desktop
