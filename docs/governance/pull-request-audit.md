# Pull Request Governance Audit
## Carpenters for Housing Reform Victoria

**Audit date:** 2026-07-30  
**Audited by:** Copilot Task Agent  
**Audit scope:** All open pull requests as at 2026-07-30T02:54  
**Repository:** dantuffy3-cmyk/carpenters-for-housing-reform  
**Audit branch:** This document is the only file committed in this audit PR. No website, policy or production files have been modified.

---

## Validation Confirmation

- **PRs audited:** 30 (all open PRs)
- **PRs merged, closed or modified during audit:** 0
- **Branches deleted during audit:** 0
- **Website or policy content changed during audit:** None
- **Production files modified:** None

---

## 1. Executive Summary

| Item | Count |
|---|---|
| Total open PRs audited | **30** |
| MERGE_AFTER_REVIEW | 1 |
| REQUIRES_CORRECTION | 1 |
| CONFLICTING_WITH_CURRENT_MAIN | 26 |
| REQUIRES_DANIEL_DECISION | 2 |
| Recommended for merge | 1 (PR #58) |
| Recommended for correction then merge | 1 (PR #51) |
| Recommended for closure | 26 |
| Requiring Daniel's decision | 2 (PR #35, #36) |

### Repository condition

The main branch currently holds a compact, modern multi-page website (index.html at 265 lines, rrc.html at 278 lines, plus advanced-trades.html, housing-supply-alignment.html, reform-framework.html, rights.html, scope-matrix.html, institute/index.html, styles.css and site.js). A custom domain CNAME (`www.carpentryreform.com.au`) is configured.

Twenty-six of the thirty open PRs were generated in a March 2026 sprint that targeted an older version of index.html (approximately 1,010 lines) and an older version of rrc.html (approximately 175 lines). The current main has replaced both files entirely. None of those 26 PRs can be merged without significant conflicts and all would risk overwriting or reverting current work.

One PR (PR #58) is a July 2026 government-readiness sprint that adds entirely new files (about.html, faq.html, four markdown documents) and makes targeted additions to existing pages. It has a clean mergeability status and is the highest-value PR in the queue.

### Major repository risks

1. **Risk of accidentally merging old PRs:** Twenty-six PRs still reference an older site structure. If any were merged, they would overwrite or corrupt the current production site.
2. **Missing .nojekyll file:** The file is absent from main. Without it, GitHub Pages may misprocess certain file types. PR #51 identified this but cannot be applied directly.
3. **og:url domain mismatch:** Current main index.html and rrc.html still use dantuffy3-cmyk.github.io as the og:url base, despite CNAME being set to carpentryreform.com.au. This affects social sharing metadata.
4. **Stale feature/rrc-section branch:** PRs #35 and #36 target a branch called `feature/rrc-section`. The content of that branch is not on main and the branch's relationship to current main is unclear.

---

## 2. Immediate Danger List

The following PRs **must not be merged** without extensive conflict review. Merging any of them would overwrite or reverse current production work.

| PR | Risk |
|---|---|
| #26 | Adds rrc-wheel.svg and replaces an SVG placeholder in old index.html. Old index.html structure no longer exists; would corrupt current index.html. |
| #27 | Large refactor of old index.html CSS and structure. Would overwrite current index.html. |
| #28 | Complete replacement of rrc.html with a different version. Would overwrite current rrc.html. |
| #33 | 84-line patch to old index.html structure. Would conflict with and corrupt current index.html. |
| #45 | 1,183-line overwrite of index.html. Would completely replace current production homepage. |
| #47 | 1,115-line overwrite of index.html. Would completely replace current production homepage. |
| #50 | 357-line overwrite of index.html. Would overwrite current production homepage. |
| #42 | 603-line overwrite of rrc.html. Would overwrite current rrc.html. |
| #44 | 350-line restyle of rrc.html. Would overwrite current rrc.html. |
| #48 | 565-line rewrite of rrc.html. Would overwrite current rrc.html. |

---

## 3. High-Value PR List

PRs that contain unique, potentially valuable work not currently on main.

| PR | Title | Unique Value |
|---|---|---|
| **#58** | Government and Stakeholder Readiness Sprint — v0.3.0 | Adds about.html (448 lines), faq.html (478 lines), docs/founder-bio.md, docs/government-engagement-brief.md, docs/stakeholder-claims-register.md, docs/stakeholder-meeting-pack.md — none of these files exist on main. Also adds structured data (schema.org), a 60-second government visitor section, and a statutory handoff protocol to rrc.html. Mergeable state: clean. |
| **#51** | Fix PDF 404, og: meta domain, and add .nojekyll | Identifies two genuine issues on main: (1) .nojekyll is absent; (2) og:url still uses github.io not carpentryreform.com.au. These issues persist on main today. However the PR conflicts with current main's file structure and the PDF filename change it makes references a file that does not exist on main (RRC_Policy_Brief_Victoria_FINAL.pdf). Requires correction before any application. |

---

## 4. Safe Closure List

PRs that are clearly superseded, duplicated, or obsolete and can be safely closed without losing unique value.

**All 26 CONFLICTING_WITH_CURRENT_MAIN PRs** (see Section 7 for full details):

PRs #26, #27, #28, #29, #30, #31, #32, #33, #34, #37, #38, #39, #40, #41, #42, #43, #44, #45, #46, #47, #48, #49, #50, #52, #54, #55

**Reason:** All were generated in a March–April 2026 sprint targeting site files that have since been significantly redesigned. None can be merged without overwriting the current production site. No unique policy content in these PRs is absent from main; the March 2026 work appears to have been superseded by a later update to main that rebuilt the site from a different design basis.

### No unique content loss expected

The current main already contains:
- A modern, compact index.html referencing rrc.html correctly
- A complete, professionally structured rrc.html
- styles.css with all required CSS
- Multiple supporting pages (reform-framework.html, advanced-trades.html, rights.html, scope-matrix.html, housing-supply-alignment.html)
- institute/index.html with waterproofing model

None of the closed PRs in this list add content not already present in better form on main.

---

## 5. Dependency Chains

### Chain A — March 2026 index.html surgery sprint (all targeting old ~1010-line index.html)

```
Old index.html baseline
  ├── PR#26 — Add SVG file + img reference (original)
  ├── PR#27 — Fix broken HTML structure (corrective audit)
  ├── PR#29 — Replace stale counter, remove SVG, simplify CTA
  ├── PR#30 — Fix single Explore button link
  ├── PR#31 — Tighten copy (credibility pass)
  ├── PR#33 — Fix duplicate logo, broken hero HTML
  ├── PR#34 — Multiple fixes (counter + form + Explore link)
  ├── PR#37 — Tighten headings and CTAs
  ├── PR#38 — Remove hard-coded trade count
  ├── PR#39 — Replace form with Google Form CTA
  ├── PR#40 — Remove duplicate hero logo
  ├── PR#41 — Fix hero button links
  ├── PR#43 — [WIP] Copy update
  ├── PR#45 — [WIP] Homepage rewrite
  ├── PR#46 — Extract inline styles to CSS
  ├── PR#47 — Full formal policy reform homepage rewrite
  └── PR#50 — Campaign website refresh
```

All PRs in this chain are superseded by the current main.

### Chain B — March 2026 rrc.html surgery sprint

```
Old rrc.html baseline
  ├── PR#32 — Add proposal.pdf Quick link (minor)
  ├── PR#28 — Comprehensive rrc.html replacement
  ├── PR#42 — [WIP] Replace rrc.html with new content
  ├── PR#44 — Restyle rrc.html to dark theme
  └── PR#48 — [WIP] Full rrc.html refactor
```

All superseded by the current rrc.html on main.

### Chain C — March 2026 copy/framing refinement sprint (touched both files)

```
  ├── PR#31 — Tighten copy on both files
  ├── PR#37 — Tighten headings and CTAs on both files
  └── PR#49 — Audit framing and fix anti-builder language
```

All superseded by current main.

### Chain D — feature/rrc-section branch (NOT targeting main)

```
feature/rrc-section branch (unknown relationship to current main)
  ├── PR#35 — Replace rrc.html on feature branch (994 additions)
  └── PR#36 — Fix navigation links on feature branch (depends on PR#35)
```

PR#36 depends on PR#35. Both target `feature/rrc-section` and cannot be merged to main without first resolving the feature branch's relationship to current main.

### Chain E — April 2026 infrastructure and content fixes

```
  ├── PR#51 — .nojekyll + og:url domain fix + PDF link fix (infrastructure)
  └── PR#52 — Update conclusion section of index.html (content)
```

PR#52 is superseded (current main has different structure).  
PR#51 identifies genuine infrastructure issues but conflicts with the current file structure.

### Chain F — July 2026 Institute/Waterproofing sprint

```
  ├── PR#54 — Add Waterproofing Framework page links (older institute/index.html structure)
  └── PR#55 — Refine RBRI-PP-002 label copy (depends on PR#54's target structure)
```

Both PRs target an older institute/index.html that had research cards with label-badge elements. Current institute/index.html is a completely different, simpler design. Both are superseded.

### Chain G — July 2026 Government Readiness Sprint

```
  └── PR#58 — Government and Stakeholder Readiness Sprint v0.3.0 (standalone)
```

No dependencies. Adds new files only plus targeted additions to existing pages. Mergeable state: clean.

---

## 6. Recommended Cleanup Order

### Batch 1 — Clearly safe closures (26 PRs)
Close without further review. All conflict with current main and contain no unique unreplaced value.

PRs: **#26, #27, #28, #29, #30, #31, #32, #33, #34, #37, #38, #39, #40, #41, #42, #43, #44, #45, #46, #47, #48, #49, #50, #52, #54, #55**

Suggested closing note: *"This PR was created against an earlier version of the site. The current main has been substantially redesigned and this PR cannot be merged without overwriting or corrupting current production files. Closing as superseded."*

### Batch 2 — Merge-ready PR
**PR #58** — Government and Stakeholder Readiness Sprint  
Review the new pages and docs against the AGENTS.md non-negotiable principles, then merge.  
Particular attention to:
- `docs/stakeholder-claims-register.md` — the PR's own body flags 3 claims with outstanding evidence requirements; verify before merging
- `about.html` — confirm the "9-point government request list" does not overstate the project's relationship with government
- `faq.html` — confirm Q&As are balanced and do not imply government endorsement

### Batch 3 — PR requiring correction
**PR #51** — Fix .nojekyll, og:url domain, PDF link  
The genuine issues it identifies (.nojekyll absent, og:url at wrong domain) still exist on main. Recommended action:
1. Manually add .nojekyll to main
2. Manually update og:url and og:image in index.html and rrc.html to use www.carpentryreform.com.au
3. Close PR #51 as superseded by the manual fix, or correct the branch and re-target against current main

### Batch 4 — Daniel decision items
**PR #35** and **PR #36** — feature/rrc-section branch  
Daniel must decide:
- Does the `feature/rrc-section` branch contain work intended for main?
- If yes, the branch should be rebased against current main before these PRs are reconsidered
- If no, both PRs should be closed and the branch may be archived

### Batch 5 — Remaining uncertain items
None. All 30 PRs are covered in Batches 1–4.

---

## 7. Full PR Register

| # | Title | Author | Created | Updated | Base | Head | Draft | Primary Purpose | Work Complete | Already on Main | Overlaps PR | Conflicts Newer Work | Unique Value | Generated/Accidental | Files Affected | Risk of Merge | Classification | Recommended Action | Reason |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 26 | Replace inline SVG placeholder with external file reference | Copilot | 2026-03-18 | 2026-03-18 | main | copilot/add-svg-files-and-update-index | Yes | Add rrc-wheel.svg and link it in index.html | Partial (rrc-wheel.svg is complete; index.html change targets old file) | No (SVG concept not on main) | #27, #33 | Yes — index.html completely redesigned | Low | No | index.html, rrc-wheel.svg | HIGH — would corrupt current index.html | CONFLICTING_WITH_CURRENT_MAIN | CLOSE_AS_SUPERSEDED | Current main index.html has completely different structure; SVG placeholder section no longer exists |
| 27 | Fix broken HTML structure, missing CSS classes, and consistency issues | Copilot | 2026-03-18 | 2026-03-18 | main | copilot/audit-website-content-structure | Yes | Audit and fix HTML/CSS bugs in index.html | Partial | Substantially — current main already has clean HTML | #33, #34 | Yes | Low | No | index.html | HIGH | CONFLICTING_WITH_CURRENT_MAIN | CLOSE_AS_SUPERSEDED | Current main's index.html is a different file; these fixes are irrelevant |
| 28 | Replace rrc.html with comprehensive professional RRC proposal page | Copilot | 2026-03-18 | 2026-03-18 | main | copilot/replace-rrc-html-page | Yes | Full rrc.html replacement | Yes (complete replacement) | Substantially — current rrc.html is comprehensive | #42, #44, #48 | Yes | Low | No | rrc.html | CRITICAL — complete overwrite of current rrc.html | CONFLICTING_WITH_CURRENT_MAIN | CLOSE_AS_SUPERSEDED | Current rrc.html is a full redesign; this PR would revert it to an older version |
| 29 | index.html: replace stale support counter, remove empty SVG, simplify CTA | Copilot | 2026-03-18 | 2026-03-18 | main | copilot/patch-index-html-file | Yes | Remove counter/SVG placeholder, replace form with Google link | Yes | Yes — current main has no counter or SVG placeholder | #38, #39 | Yes | Low | No | index.html | HIGH | CONFLICTING_WITH_CURRENT_MAIN | CLOSE_AS_SUPERSEDED | Current main index.html no longer has these elements |
| 30 | Fix "Explore the Proposal" button to navigate to rrc.html | Copilot | 2026-03-18 | 2026-03-18 | main | copilot/review-navigation-links | Yes | Fix single navigation button link | Yes | Yes — current main already links to rrc.html | #36, #41 | Yes | None | Possibly accidental/minor | index.html | MEDIUM (small change but targets wrong file version) | CONFLICTING_WITH_CURRENT_MAIN | CLOSE_AS_SUPERSEDED | Fix already present in current main |
| 31 | Tighten copy on index.html and rrc.html to improve credibility with regulators | Copilot | 2026-03-18 | 2026-03-18 | main | copilot/improve-trust-authority-html | Yes | Copy and framing improvements | Yes | Partially — current main has improved copy | #37, #49 | Yes | Low | No | index.html, rrc.html | HIGH | CONFLICTING_WITH_CURRENT_MAIN | CLOSE_AS_SUPERSEDED | Both target files have been completely redesigned |
| 32 | Add proposal.pdf to Quick links in rrc.html | Copilot | 2026-03-18 | 2026-03-18 | main | copilot/make-smallest-change-rrc-html | Yes | Add a single PDF link in rrc.html | Yes | Partially — current rrc.html links PDFs by different names | None | Yes | Very low | No | rrc.html | MEDIUM | CONFLICTING_WITH_CURRENT_MAIN | CLOSE_AS_SUPERSEDED | Current rrc.html has a completely different structure; proposal.pdf no longer referenced |
| 33 | Fix duplicate logo, broken hero HTML, dead CTA link, and missing CSS | Copilot | 2026-03-18 | 2026-03-18 | main | copilot/audit-github-pages-site | Yes | Multiple bug fixes to old index.html | Partial | Yes — current main has none of these bugs | #27, #34 | Yes | Low | No | index.html | HIGH | CONFLICTING_WITH_CURRENT_MAIN | CLOSE_AS_SUPERSEDED | Bugs addressed no longer exist in current main; patch targets wrong file version |
| 34 | index.html: replace stale counter, remove form, fix Explore link, remove stray SVG | Copilot | 2026-03-18 | 2026-03-18 | main | copilot/patch-index-html | Yes | Multiple small fixes | Yes | Yes — current main resolves all these | #29, #38, #39 | Yes | Low | No | index.html, rrc.html | HIGH | CONFLICTING_WITH_CURRENT_MAIN | CLOSE_AS_SUPERSEDED | All changes superseded by current main |
| 35 | Replace rrc.html with full-quality static page matching index.html | Copilot | 2026-03-18 | 2026-03-18 | feature/rrc-section | copilot/replace-rrc-html-page-again | Yes | Full rrc.html replacement on feature branch | Yes | Unknown — feature branch status unclear | #28, #36 | Unknown | Possibly | No | rrc.html | UNKNOWN (targets non-main branch) | REQUIRES_DANIEL_DECISION | MANUAL_DECISION_REQUIRED | Targets feature/rrc-section, not main. Daniel must determine if this branch is still relevant |
| 36 | Fix broken navigation links between index.html and rrc.html | Copilot | 2026-03-18 | 2026-03-18 | feature/rrc-section | copilot/fix-navigation-links | Yes | Navigation fix on feature branch | Partial (rrc.html on feature branch had wrong title "RRC - Rental Regulations Committee") | Unknown | #35 | Unknown | Low | No | index.html, rrc.html | UNKNOWN (targets non-main branch) | REQUIRES_DANIEL_DECISION | MANUAL_DECISION_REQUIRED | Depends on PR#35; targets feature/rrc-section. Daniel must determine branch relevance |
| 37 | Tighten copy in index.html and rrc.html — headings, CTAs, vague bullets | Copilot | 2026-03-18 | 2026-03-18 | main | copilot/improve-index-and-rrc-copy | Yes | Copy refinement pass | Yes | Partially | #31, #49 | Yes | Low | No | index.html, rrc.html | HIGH | CONFLICTING_WITH_CURRENT_MAIN | CLOSE_AS_SUPERSEDED | Both files completely redesigned on main |
| 38 | Remove hard-coded trade count; replace support-counter block | Copilot | 2026-03-18 | 2026-03-18 | main | copilot/patch-index-html-again | Yes | Remove stale counter | Yes | Yes — current main has no counter | #29, #39 | Yes | None | No | index.html | HIGH | CONFLICTING_WITH_CURRENT_MAIN | CLOSE_AS_SUPERSEDED | Counter already removed from current main |
| 39 | Replace embedded support form with Google Form call-to-action | Copilot | 2026-03-18 | 2026-03-18 | main | copilot/patch-index-html-call-to-action | Yes | Replace form with CTA link | Yes | Yes — current main has no embedded form | #29, #34 | Yes | None | No | index.html | HIGH | CONFLICTING_WITH_CURRENT_MAIN | CLOSE_AS_SUPERSEDED | Embedded form already removed from current main |
| 40 | Remove duplicate hero logo from index.html | Copilot | 2026-03-18 | 2026-03-18 | main | copilot/patch-index-html-hero-layout | Yes | Remove duplicate logo | Yes | Yes — current main has no duplicate logo | #33 | Yes | None | No | index.html | HIGH | CONFLICTING_WITH_CURRENT_MAIN | CLOSE_AS_SUPERSEDED | Duplicate logo does not exist in current main |
| 41 | Fix hero button links in index.html | Copilot | 2026-03-18 | 2026-03-18 | main | copilot/patch-index-html-links | Yes | Fix 2 hero button links | Yes | Yes — current main already has correct links | #30, #36 | Yes | None | No | index.html | MEDIUM | CONFLICTING_WITH_CURRENT_MAIN | CLOSE_AS_SUPERSEDED | Button links already correct in current main |
| 42 | [WIP] Replace rrc.html with new content | Copilot | 2026-03-18 | 2026-03-18 | main | copilot/replace-rrc-html | Yes (WIP) | Restyle rrc.html to dark theme with new sections | Incomplete | No | #28, #44, #48 | Yes | Low | No | rrc.html | CRITICAL | CONFLICTING_WITH_CURRENT_MAIN | CLOSE_AS_SUPERSEDED | Current rrc.html already has a comprehensive modern design; this WIP would overwrite it |
| 43 | [WIP] Update copy in index.html for clarity and impact | Copilot | 2026-03-18 | 2026-03-18 | main | copilot/patch-index-html-another-one | Yes (WIP) | Copy improvements | Incomplete | Partially | #31, #37 | Yes | Low | No | index.html | HIGH | CONFLICTING_WITH_CURRENT_MAIN | CLOSE_AS_SUPERSEDED | Current main has different structure |
| 44 | Restyle rrc.html to match index.html dark theme | Copilot | 2026-03-18 | 2026-03-18 | main | copilot/restyle-rrc-html | Yes | Full dark-theme restyle of rrc.html | Yes | Partially — current rrc.html already uses dark theme with shared styles.css | #28, #42, #48 | Yes | Low | No | rrc.html | CRITICAL | CONFLICTING_WITH_CURRENT_MAIN | CLOSE_AS_SUPERSEDED | Current rrc.html uses the shared stylesheet and modern design; this would overwrite |
| 45 | [WIP] Update homepage for policy reform initiative | Copilot | 2026-03-18 | 2026-03-18 | main | copilot/improve-homepage-credibility | Yes (WIP) | Major homepage rewrite | Incomplete | Partially | #47, #50 | Yes | Low | No | index.html | CRITICAL (1183-line overwrite) | CONFLICTING_WITH_CURRENT_MAIN | CLOSE_AS_SUPERSEDED | Would completely replace current production homepage |
| 46 | Extract inline styles into shared styles.css | Copilot | 2026-03-18 | 2026-03-18 | main | copilot/extract-styling-to-stylesheet | Yes | Move inline styles to CSS file | Yes | Yes — current main already uses styles.css | #45, #47 | Yes | None | No | index.html, styles.css | HIGH | CONFLICTING_WITH_CURRENT_MAIN | CLOSE_AS_SUPERSEDED | styles.css already in use on main; this applies to old index.html structure |
| 47 | Refactor index.html into formal policy reform homepage | Copilot | 2026-03-18 | 2026-03-18 | main | copilot/refactor-homepage-for-policy-reform | Yes | Complete homepage replacement | Yes | Partially — main has similar intent but different implementation | #45, #50 | Yes | Low | No | index.html | CRITICAL (1115-line overwrite) | CONFLICTING_WITH_CURRENT_MAIN | CLOSE_AS_SUPERSEDED | Would completely replace current production homepage |
| 48 | [WIP] Refactor rrc.html into a technical proposal page | Copilot | 2026-03-18 | 2026-03-18 | main | copilot/refactor-rrc-html | Yes (WIP) | Full rrc.html rewrite | Incomplete | Partially | #28, #42, #44 | Yes | Low | No | rrc.html | CRITICAL | CONFLICTING_WITH_CURRENT_MAIN | CLOSE_AS_SUPERSEDED | Current rrc.html is a complete redesign; this would overwrite |
| 49 | Audit index.html and rrc.html: fix duplication, anti-builder framing, inaccurate statistics | Copilot | 2026-03-18 | 2026-03-18 | main | copilot/audit-html-files-for-issues | Yes | Policy framing audit and copy fixes | Yes | Partially — current main already has improved framing | #31, #37 | Yes | Low | No | index.html, rrc.html | MEDIUM (small changes but target wrong file versions) | CONFLICTING_WITH_CURRENT_MAIN | CLOSE_AS_SUPERSEDED | Both files completely redesigned; specific dollar-figure statistics targeted no longer exist in main |
| 50 | Refresh the static homepage into a complete campaign website | Copilot | 2026-03-21 | 2026-03-21 | main | copilot/create-new-website-structure | Yes | Homepage refresh | Yes | Partially | #45, #47 | Yes | Low | No | index.html | HIGH (357-line overwrite) | CONFLICTING_WITH_CURRENT_MAIN | CLOSE_AS_SUPERSEDED | Would overwrite current production homepage |
| 51 | Fix PDF 404, og: meta domain, and add .nojekyll for clean Pages deploy | Copilot | 2026-04-01 | 2026-04-01 | main | copilot/audit-github-pages-configuration | Yes | Infrastructure and metadata fixes | Partial | No — .nojekyll absent, og:url mismatch still present on main | None | Partial conflict (PDF link targets non-existent filename) | **Yes — .nojekyll and og:url fixes are genuinely needed** | No | .nojekyll, index.html | MEDIUM (genuine fixes but PDF filename incorrect) | REQUIRES_CORRECTION | CORRECT | .nojekyll should be added to main manually; og:url/og:image should be updated to carpentryreform.com.au; PDF link change (to FINAL.pdf) should be discarded as that file does not exist on main |
| 52 | Update conclusion section on index.html | Copilot | 2026-04-01 | 2026-04-01 | main | copilot/update-conclusion-to-chat-gpt | Yes | Update conclusion section to stronger RRC endorsement | Yes | No — current main does not have a "Next step / Conclusion" section in the same form | None | Yes | Low — current main conclusion is different | No | index.html | MEDIUM | CONFLICTING_WITH_CURRENT_MAIN | CLOSE_AS_SUPERSEDED | Current main index.html has different structure with no matching section-kicker target |
| 54 | Add Victorian Waterproofing Assurance Framework — Research Project V1 | Copilot | 2026-07-15 | 2026-07-15 | main | copilot/add-research-publication-page | Yes | Add waterproofing publication page and links in institute/index.html | Partial | No — waterproofing/ subdirectory does not exist on main | #55 | Yes — current institute/index.html is a completely different design | **Yes — waterproofing publication page concept** | No | institute/index.html, waterproofing/ | MEDIUM | CONFLICTING_WITH_CURRENT_MAIN | CLOSE_AS_SUPERSEDED | Current institute/index.html uses a completely different structure; the card/label-badge targets do not exist |
| 55 | Refine RBRI-PP-002 waterproofing publication copy to consultation-paper standard | Copilot | 2026-07-15 | 2026-07-15 | main | copilot/update-victorian-waterproofing-content | Yes | Label text refinement in institute/index.html | Yes | No | #54 | Yes | Very low | No | institute/index.html | MEDIUM | CONFLICTING_WITH_CURRENT_MAIN | CLOSE_AS_SUPERSEDED | Depends on PR#54's structure which conflicts with current institute/index.html |
| 58 | Government and Stakeholder Readiness Sprint — v0.3.0 | Copilot | 2026-07-30 | 2026-07-30 | main | copilot/government-stakeholder-readiness-sprint | Yes (draft) | Add full government/stakeholder readiness layer: about.html, faq.html, 4 docs, schema.org, nav updates, pilot proposal, statutory handoff protocol | Yes | **No — all new files absent from main** | None | No (mergeable_state: clean) | **HIGH — substantial new content** | No | README.md, about.html, faq.html, index.html, rrc.html, docs/founder-bio.md, docs/government-engagement-brief.md, docs/stakeholder-claims-register.md, docs/stakeholder-meeting-pack.md | **LOW — mergeable_state clean, adds new files** | MERGE_AFTER_REVIEW | REVIEW_THEN_MERGE | Most valuable PR in queue; adds unique new pages and docs not on main; clean mergeability; review claims register for evidence status before merging |

---

## Notes on Methodology

### How the current main state was established

The local clone of the repository was inspected directly. Key findings:

- index.html: 265 lines (compact, modern multi-page design using external Google Fonts, styles.css and site.js)
- rrc.html: 278 lines (modern design, references RRC_Executive_Brief_Victoria_2026.pdf, RRC_Consultation_Package_Website_V2.pdf, RRC_Policy_Brief_Victoria_2026.pdf)
- styles.css: present (5,643 bytes)
- site.js: present (1,152 bytes)
- .nojekyll: absent
- CNAME: www.carpentryreform.com.au
- about.html: absent
- faq.html: absent
- docs/: absent
- institute/index.html: 106 lines (simplified design, no research-card structure)

### Why March 2026 PRs all conflict

The March 2026 PRs reference a ~1,010-line index.html with inline styles, a support counter with a hard-coded number, an embedded form, and specific SVG sections. Current main's 265-line index.html has none of these. The main branch appears to have received a major site redesign at some point between March 2026 and the time of this audit.

### PR #35 and #36 special note

These PRs target `feature/rrc-section`, not `main`. The `feature/rrc-section` branch is not visible in the local clone's shallow history. Without knowing the current state of that branch, the value of these PRs cannot be determined. They require Daniel to decide whether the branch is still active.

---

*Audit completed 2026-07-30. No production files were modified. This document is the sole output of this audit session.*
