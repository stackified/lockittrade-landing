# LockItTrade Landing Page — Client Meeting Action Plan

**Meeting date transcribed:** (latest client call)
**Doc prepared:** 2026-06-09
**Branch:** `dev`

> This document maps what the client discussed in the call against the **current state of the codebase**, and turns it into an actionable plan. The overarching deal with the client (Eric) was **"improve UI/UX of the existing site"**, but the client lead explicitly wants to **show that more than UI/UX was delivered** (new sections, responsiveness fixes, interactivity, extra pages).

---

## 1. Meeting Summary — What the Client Asked For

The client lead walked through the new site comparing it feature-by-feature against the old/reference site (and a competitor, **Prozonix**). Key takeaways:

- **Feature parity confirmed** for: Violation Tracker, Strategy Compliance, Prop Firm Ready, Trader Intelligence (AI Coach), Hedge Analyzer / Risk app, Affiliate program, Privacy Policy, Enterprise solution. These are considered the same logic/intent as the existing tool.
- **Main targets** for the homepage are **Prop Firm Ready** and **Trader Intelligence** — both confirmed present.
- He **likes the "Powered by OpenAI/ChatGPT" hero badge** — keep it.
- Wants the homepage to look **more premium**, like Prozonix — specifically dashboard screenshots + floating stat widgets in the hero.
- Wants **three things added**: **Leaderboard**, **Backtesting (coming soon)**, and an **Affiliate portal placement** decision (pending Eric).
- **Stripe** must be **functionally tested** before going live (developer to test at night with live trades / MT5).
- General **UI/UX polish** on sign-up, privacy, terms.

---

## 2. Sections — Completed ✅

These are confirmed present in the codebase and match what the client expected.

| Item | Status | Location |
|------|--------|----------|
| Hero section with **"Powered by OpenAI"** badge | ✅ Done — client likes it, keep | `components/hero-section.tsx`, `components/powered-by-openai.tsx` |
| **Prop Firm Ready** page + hero | ✅ Done | `app/prop-firm-ready/page.tsx`, `components/prop-firm-ready-hero.tsx` |
| **Trader Intelligence** (AI Trading Coach) | ✅ Done | `components/bento-features.tsx` |
| **Violation Tracker** | ✅ Done | `components/violations-tracker.tsx` |
| **Strategy Compliance Monitor** | ✅ Done | `components/strategy-compliance-monitor.tsx` |
| **Hedge Analyzer / Risk-Reward** | ✅ Done (integrated, not standalone) | `components/risk-reward-breakdown.tsx` |
| **Pricing page** with Monthly/Yearly toggle + Stripe links | ✅ Built (⚠️ needs functional test — see In-Progress) | `app/pricing/page.tsx`, `components/pricing-plans.tsx` |
| **Enterprise solution** page | ✅ Done | `app/enterprise/page.tsx` |
| **Affiliate program** link (footer → external portal) | ✅ Done | `components/footer.tsx` → `affiliates.lockittrade.com` |
| **Help Center** link | ✅ Done | navbar + footer → `help.lockittrade.com` |
| **Privacy Policy** page | ✅ Done (polish requested) | `app/privacy/page.tsx` |
| **Terms of Service** page | ✅ Done (client noted he updated/added this) | `app/terms/page.tsx` |
| **Community section** (Discord, testimonials, stats) | ✅ Done (stats need lowering + leaderboard add) | `components/community-section.tsx` |
| **Responsiveness / mobile fixes** vs old laggy site | ✅ Done — explicitly called out as value-add | site-wide |
| **Interactivity / modern feel** upgrade | ✅ Done — value-add to highlight to Eric | site-wide |

---

## 3. Sections — In Progress 🔄

| Item | Status | Notes / Owner |
|------|--------|---------------|
| **Stripe checkout — functional testing** | 🔄 ~20% logic verified, full functional test pending | Developer to test at night with live trades + MT5 once market open. Confirm both Monthly (`buy.stripe.com/...Jm00`) and Yearly (`...Jm01`) links complete a real purchase. Report to Eric before go-live. |
| **Hero "premium" upgrade (dashboard screenshot + widgets)** | 🔄 Agreed in concept | Add a dashboard screenshot/image + 3 floating stat widgets (e.g. **AI ratings**, **summary / win-rate analysis**, **monthly PnL / win rate**) à la Prozonix. Keep hero simple — do NOT overload. Shrink the ratings element to fit. |
| **Stats numbers correction** | 🔄 Quick edit | Lower the inflated community metrics (see Task list). |

---

## 4. Sections — Pending ⏳ (New Work)

| Item | Decision | Placement |
|------|----------|-----------|
| **Leaderboard** | ⏳ Add | In **Community section**. Show a **Top 10 leaderboard** with placeholder data (XYZ) for now; wire to live community/affiliate data later (client will signal when live affiliates exist). May carry a "coming soon" treatment. |
| **Backtesting** | ⏳ Add as **"Coming Soon"** | In **Features / Community** area — a "coming soon" card. Competitor (Prozonix) has it; client wants to signal it's on the roadmap. |
| **Affiliate portal on homepage** | ⏳ **Pending Eric's decision** | For now keep the existing **affiliate-program link in the bottom banner/footer**. Possible dedicated homepage placement TBD after Eric confirms (affiliates should know we offer the program). |
| **News section** | ⏳ Candidate add-on | Mentioned as something we can add to homepage to show extra value. Confirm priority with Eric. |
| **Watch Demo button + video** | ⏳ Add | Add a "Watch Demo" CTA in/near hero. **Client will send the video** to embed. |
| **Sign-up page UI/UX** | ⏳ Polish | Improve UI/UX (currently external `app.lockittrade.com/signup` — confirm whether we own/style it or just link). |
| **Privacy & Terms pages polish** | ⏳ Polish | "Let's improve this too" — light UI/UX pass. |
| **Strategy Compliance / hero layout improvement** | ⏳ Pending confirmation | Client asked if the stacked hero element can be made better; decision deferred to Eric. |

---

## 5. Task List / Checklist

### High priority (pre-go-live)
- [ ] **Stripe functional test** — complete real purchase on Monthly + Yearly links; verify success/cancel redirects; confirm no breakage. Report result to Eric.
- [ ] **Lower community stats** in `components/community-section.tsx`:
  - [ ] "Trades Analyzed": `250K+` → **~50K–100K**
  - [ ] "Active Traders": `10,000+` → **500+**
  - [ ] "Capital Protected": `$150M+` → **~$100K+**
- [ ] Final cross-device responsiveness check before live.

### Homepage premium upgrade
- [ ] Add **dashboard screenshot/image** to hero (Prozonix-style).
- [ ] Add **3 floating stat widgets** (AI ratings / summary / win-rate analysis) — keep hero uncluttered.
- [ ] **Shrink hero ratings element** so everything fits cleanly with "Start for free" CTA.
- [ ] Add **"Watch Demo"** button + embed client's video (await video file).

### New sections
- [ ] Build **Leaderboard (Top 10)** in Community section with placeholder data; structure for future live-data wiring.
- [ ] Add **Backtesting "Coming Soon"** card in Features/Community.
- [ ] Add **News section** to homepage (confirm priority).
- [ ] Decide & implement **affiliate portal placement** (await Eric).

### Polish
- [ ] Improve **Sign-up page** UI/UX.
- [ ] Improve **Privacy** + **Terms** page UI/UX.
- [ ] Confirm/improve **Strategy Compliance hero layout** (await Eric).

### Communication
- [ ] Client lead to **discuss scope with Eric** — frame the work as **more than UI/UX** (new sections, responsiveness, interactivity) to reflect the extra effort and the time taken.

---

## 6. Doubts / Queries ❓

These need a decision from **Eric** or the client lead before/while building:

1. **Affiliate portal placement** — Does Eric want a dedicated affiliate section on the homepage, or is the footer/banner link sufficient? (Client wants affiliates to know the program exists.)
2. **Strategy Compliance / hero element layout** — Keep the current stacked design for consistency, or redesign? Eric to confirm.
3. **Stats numbers** — Confirm the exact target metrics. Proposed: Analyzed **50K–100K**, Active Traders **500+**, Capital Protected **$100K+**. Are these acceptable to Eric?
4. **News section** — Is this in scope / desired by Eric, or skip for now?
5. **Sign-up page ownership** — Do we control/style the sign-up page, or is it the external app (`app.lockittrade.com/signup`)? Determines what "improve UI/UX" means here.
6. **Leaderboard data source** — Confirmed placeholder now; when does live community/affiliate data become available to wire in?
7. **Watch Demo video** — Awaiting the video file from client.
8. **Backtesting** — Confirm it's "coming soon" only (no functional build) for now.
9. **Interactive Prop Firm / Live Trading toggle in hero** — Client floated this but agreed it may be "too much." Final call: skip to keep hero simple? (Current recommendation: **skip**, keep hero clean.)

---

## 7. Notes

- **Old vs new site:** the new homepage is considered **better than the old/reference** — the old site lagged on mobile and required zooming; responsiveness and interactivity are now fixed. This is a key selling point to Eric.
- **Hero philosophy** (per developer): keep the hero **simple** so first-time visitors can absorb what the product is — avoid overloading with info up front. Apply this when adding widgets/screenshots.
- **Go-live sequence:** finish polish → Stripe functional test → Eric sign-off → push LockItTrade live.
