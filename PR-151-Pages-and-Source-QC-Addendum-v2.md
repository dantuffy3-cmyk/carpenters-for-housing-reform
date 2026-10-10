# PR 151 — Pages publication and source locator addendum

10 October 2026 | Prepared for controlled branch review | No merge or deployment approval

## Checkpoint

Repository: dantuffy3-cmyk/carpenters-for-housing-reform.
Branch: copilot/controlled-consultation-submission-v04.
Reviewed head: 558e6540b4f7bfafd033de01b3380275c2a9390f.
Approved base: 5ffbc77b172938f3a4fda316d552a34b2ceb04c4.
PR 151 remains a draft. Government submission is complete, receipt ID 1535134.

## Pages finding

Dan supplied a screenshot of Settings → Pages showing Deploy from a branch, main, / (root). The repository contains .nojekyll. This configuration has no demonstrated archive exclusion. Merging the PR into main would place the archive within the website publishing source and can trigger deployment. Treat every added archive file as potentially website-downloadable; no post-merge URL test has been performed.

The 46-file PR includes the genuine v0.3 pair; Reviews 3–7 and decision/QC records; government correspondence and slides; the receipt record/screenshot; transfer ZIPs, manifest, handoff instructions and a Git bundle. Excluding only an email directory would not address the ZIPs containing source records. Public repository visibility and website distribution are separate decisions; keeping files off Pages would not make existing GitHub copies private.

Publication approval for the exact package on the controlled branch and creation of a draft PR is recorded. Approval to merge or deploy is not recorded.

Recommendation for Dan's review: preserve the complete archive on GitHub; publish only an explicitly selected website file set. A dedicated website branch or a deployment workflow with an allowlist could implement that separation, but requires a scoped proposal, dependency checks, preview and deployment approval. Do not change Pages settings, remove archive files, switch to /docs or add an assumed exclusion under .nojekyll without checking the resulting site. Until a publication decision and its controls are verified, retain draft status and the merge hold.

Official implementation guidance: https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site

## Budget source locator clarification

Historical Review-7-Interview-and-Alignment-Review.md lists:
https://www.2026.budget.vic.gov.au/making-life-more-affordable

Use this verified current official locator in subsequent source references:
https://www.budget.vic.gov.au/making-life-more-affordable

On 10 October 2026 the official page was retrieved as “Making life more affordable | Victorian Budget 26/27”. The fairer property market section states $16 million for implementation of registration and licensing requirements. This supports the existing funding statement; it does not establish an allocation to Dan, an RRC pilot, an appointment or a final carpenter-scheme design.

Copilot reported that the historical URL failed. The search service returned page content for both URL requests in this check; that is not a direct HTTP availability test and does not establish that the historical hostname works for every visitor. Record the current official locator without asserting universal failure of the old address.

This is a subsequent source/QC clarification. Preserve the submitted Review 7 PDF, its Word counterpart, historical QC records, package and manifest bytes. Do not replace an archived source record or silently recompute its original manifest.

Submitted PDF SHA-256: db0bd5b46dca94bc6f45ccdb86a340a8226622275817c23622cf4ca441330405.

## Reviewed PR file inventory

- `Carpenters-for-Housing-Reform-Victoria-Consultation-Submission-v0.3.docx`
- `Carpenters-for-Housing-Reform-Victoria-Consultation-Submission-v0.3.pdf`
- `Controlled-v04-Review-3-Transfer.zip`
- `Controlled-v04-Submitted-Review-7-GitHub-Package.zip`
- `DECISION_REGISTER.md`
- `GitHub-Agent-Controlled-v04-Handoff.txt`
- `GitHub-Agent-Submitted-Review-7-Handoff.txt`
- `TRANSFER-MANIFEST.json`
- `consultation-v03-source-baseline.bundle`
- `docs/consultation/v04-review-3/review/Carpenters-for-Housing-Reform-Victoria-Consultation-Submission-v0.4-Review-3.docx`
- `docs/consultation/v04-review-3/review/Carpenters-for-Housing-Reform-Victoria-Consultation-Submission-v0.4-Review-3.pdf`
- `docs/consultation/v04-review-3/review/Consultation-v0.4-Drafting-Decision-Record-v0.1.pdf`
- `docs/consultation/v04-review-3/review/Consultation-v0.4-Residential-Scope-Decision-v0.1.pdf`
- `docs/consultation/v04-review-3/review/Consultation-v0.4-Role-Requirements-Decision-v0.1.pdf`
- `docs/consultation/v04-review-3/sources/Consultation-Submission-v04-Controlled-Change-Map-v01.md`
- `docs/consultation/v04-review-3/sources/Trades Registration - Slidedeck.pdf`
- `docs/consultation/v04-review-3/sources/email-2026-10-06/074a2dba-4f96-441b-bfdd-79876e3839e5.jpg`
- `docs/consultation/v04-review-3/sources/email-2026-10-06/6ae8780c-5417-422e-bee3-87c4775c90b3.jpg`
- `docs/consultation/v04-review-3/sources/email-2026-10-06/b57126dc-1743-4de8-8d7a-9b2e62996bf5.jpg`
- `docs/consultation/v04-review-3/sources/email-2026-10-06/c5aec4e0-44ad-44f5-808d-663c87a52bd7.jpg`
- `docs/consultation/v04-review-3/sources/email-2026-10-06/e556f4f3-c9a0-40a7-b749-c0f1243b73d6.jpg`
- `docs/consultation/v04-review-4/qc/review4-changes.json`
- `docs/consultation/v04-review-4/review/Carpenters-for-Housing-Reform-Victoria-Consultation-Submission-v0.4-Review-4.docx`
- `docs/consultation/v04-review-4/review/Carpenters-for-Housing-Reform-Victoria-Consultation-Submission-v0.4-Review-4.pdf`
- `docs/consultation/v04-review-4/review/Consultation-v0.4-Review-4-Change-Record.docx`
- `docs/consultation/v04-review-4/review/Consultation-v0.4-Review-4-Change-Record.pdf`
- `docs/consultation/v04-review-5/qc/Review-5-Exact-Changes.json`
- `docs/consultation/v04-review-5/review/Carpenters-for-Housing-Reform-Victoria-Consultation-Submission-v0.4-Review-5.docx`
- `docs/consultation/v04-review-5/review/Carpenters-for-Housing-Reform-Victoria-Consultation-Submission-v0.4-Review-5.pdf`
- `docs/consultation/v04-review-5/review/Consultation-v0.4-Review-5-Change-Record.docx`
- `docs/consultation/v04-review-5/review/Consultation-v0.4-Review-5-Change-Record.pdf`
- `docs/consultation/v04-review-6/qc/DECISION_REGISTER.md`
- `docs/consultation/v04-review-6/qc/Review-6-Changes.json`
- `docs/consultation/v04-review-6/qc/Submission-Readiness-and-GitHub-Steps.md`
- `docs/consultation/v04-review-6/review/Carpenters-for-Housing-Reform-Victoria-Consultation-Submission-v0.4-Review-6.docx`
- `docs/consultation/v04-review-6/review/Carpenters-for-Housing-Reform-Victoria-Consultation-Submission-v0.4-Review-6.pdf`
- `docs/consultation/v04-review-6/sources/DTP-Courtney-Gleeson-Reply-Supplied-2026-10-08.txt`
- `docs/consultation/v04-review-7/qc/Consultation-v0.4-Review-7-Interview-and-Alignment-Review.pdf`
- `docs/consultation/v04-review-7/qc/DECISION_REGISTER.md`
- `docs/consultation/v04-review-7/qc/Final-GitHub-Handoff-Readiness.md`
- `docs/consultation/v04-review-7/qc/Review-7-Exact-Changes.json`
- `docs/consultation/v04-review-7/qc/Review-7-Interview-and-Alignment-Review.md`
- `docs/consultation/v04-review-7/review/Carpenters-for-Housing-Reform-Victoria-Consultation-Submission-v0.4-Review-7.docx`
- `docs/consultation/v04-review-7/review/Carpenters-for-Housing-Reform-Victoria-Consultation-Submission-v0.4-Review-7.pdf`
- `docs/consultation/v04-review-7/submission/Government-Submission-Receipt-1535134.md`
- `docs/consultation/v04-review-7/submission/engage-victoria-submission-1535134.jpg`

## Closure conditions

The source issue can be reviewed with this clarification once imported and cited in the PR. The Pages finding is established. Dan approved the archive/website separation below; implementation and verification remain outstanding. Do not mark both findings resolved simply because this note exists. Recheck current HEAD and baseline/submitted hashes before import, retain original history and request fresh review after the scoped change. No merge, deployment or government resubmission is authorised by this note.

## Dan's publication decision — 10 October 2026, 22:30 Australia/Sydney

Dan explicitly agreed to keep the full archive on GitHub while publishing only selected documents on the website. Preserve all original archive and submission bytes. The selected website documents and deployment mechanism have not yet been approved or implemented. Existing GitHub copies remain public; this decision does not imply confidentiality.

Next authorised preparation: inspect current website dependencies and links, propose an explicit website publication list and a scoped deployment mechanism, and verify that archive-only files are absent from the proposed website artifact. Keep PR 151 in draft. Do not merge, deploy, switch Pages settings or resubmit to government on the basis of this decision alone.

## Initial website dependency inspection

The PR file inventory shows no existing HTML, CSS or JavaScript modifications. The local approved-base website was inspected for HTML href/src dependencies; this is an initial dependency inventory, not a deployed-site crawl or complete build validation.

Preserve the existing HTML pages, site.js, styles.css, logo.png, the evaluation-pathway image, CNAME and .nojekyll. Existing HTML links identify six public PDF dependencies: RRC_Consultation_Package_Website_V1.pdf; RRC_Consultation_Package_Website_V2.pdf; RRC_Executive_Brief_Victoria_2026.pdf; RRC_Housing_Supply_Alignment_Paper_2026.pdf; RRC_Policy_Brief_Victoria_2026.pdf; Registered_Residential_Carpenter_Pathway_Victoria_One_Page_Explainer.pdf. docs/founder-bio.md is also linked. These are existing dependencies to preserve during migration; this inspection does not re-endorse the policy wording in historical documents.

No new consultation archive member was found among those HTML links. Absence of a link does not exclude a file from the Pages artifact. Proposed additional website document for Dan's review: the exact submitted Review 7 PDF, identified as the submission lodged on 10 October 2026 and as a proposal rather than government-endorsed policy. It has not been approved for website publication in this decision.

Recommended mechanism for a scoped implementation proposal: a custom Pages workflow that stages only an explicit, checked publication list, rather than copying the whole repository. The implementation must validate local links, required assets and exact published-document hashes, reject archive-only files from the staged artifact, and produce a reviewable preview before any settings change or deployment. A dedicated website branch remains an alternative. No workflow or repository setting was changed in this preparation.
