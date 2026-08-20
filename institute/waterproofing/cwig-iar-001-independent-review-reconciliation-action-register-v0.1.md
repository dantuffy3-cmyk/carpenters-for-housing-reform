# CWIG-IAR-001 — Independent Review Reconciliation & Action Register v0.1

**Prepared by:** Carpenters for Housing Reform Victoria  
**Status:** Working Draft — Independent Review Reconciliation v0.1  
**Date:** August 2026  
**Independent Review Reference:** CWIG-IAR-001  
**Purpose:** Formally reconcile the findings of the CWIG-01 Pre-Pilot Independent Assurance Review against the current controlled CWIG pilot architecture. This register preserves accepted findings, modified findings, findings already addressed, rejected recommendations, unresolved specialist-advice matters and resulting pre-pilot actions.

---

## 1. Purpose

CWIG-01 was subjected to an independent technical, governance and pilot-design review before commencement of the first real field case.

The external review concluded:

> **B — PROCEED WITH SPECIFIC MATERIAL REFINEMENTS**

The review considered the architecture conceptually sound and structurally viable but identified operational and governance matters requiring resolution before `CWIG-PILOT-001`.

This reconciliation register exists so that:

- no independent criticism is silently discarded;
- no recommendation is automatically adopted without analysis;
- recommendations already addressed in the current stack are identified;
- recommendations that would introduce unsupported technical rules are not accepted merely because they were externally proposed;
- genuine blockers are converted into controlled actions;
- rejected recommendations remain visible with reasons;
- specialist legal/privacy matters remain explicitly unresolved until competent advice is obtained;
- Pilot 001 cannot commence while a required action remains open.

---

## 2. Source Review

**Review Reference:** CWIG-IAR-001  
**Title:** CWIG-01 Pre-Pilot Independent Assurance Review  
**Reviewer Status:** Independent Technical, Governance and Pilot-Design Reviewer  
**Review Scope:** Eight-document CWIG-01 pilot stack  
**Final Decision:** B — Proceed with Specific Material Refinements

The review identified:

- BLOCKER findings;
- MATERIAL REFINEMENTS;
- MINOR findings;
- NO ISSUE findings;
- matters requiring specialist Victorian legal/privacy advice.

The review itself does not constitute:

- legal advice;
- regulatory guidance;
- government endorsement;
- technical approval of CWIG.

---

# PART A — RECONCILIATION PRINCIPLES

## 3. Review Findings Are Evidence, Not Instructions

An independent review finding is treated as evidence requiring consideration.

It is not automatically binding.

Each recommendation must be tested against:

- the current controlled document stack;
- evidence already developed;
- the defined CWIG responsibility boundary;
- proportionality;
- existing technical verification;
- pilot purpose;
- risk of introducing unsupported requirements.

---

## 4. Reconciliation Dispositions

Every external finding receives one of the following dispositions.

### ACCEPT

The finding identifies a genuine gap and the proposed direction is substantially appropriate.

### ACCEPT WITH MODIFICATION

The underlying problem is accepted, but the proposed solution requires modification to preserve proportionality, technical accuracy or CWIG boundaries.

### PARTIALLY ALREADY ADDRESSED

The current stack already addresses a material portion of the finding, but clarification or strengthening is justified.

### ALREADY ADDRESSED

The current controlled stack already contains the requested control to a sufficient degree for the proposed pilot.

### REJECT AS WRITTEN

The concern may be understandable, but the recommended solution would introduce bias, unsupported requirements, unnecessary burden or architectural distortion.

### SPECIALIST ADVICE REQUIRED

The matter cannot responsibly be resolved internally and requires appropriate external professional advice.

### NO ACTION

The external reviewer found no issue or no further action is currently justified.

---

## 5. Governing Control

External review must not be used to convert CWIG into:

- a general bathroom inspection;
- an upstream-trade certification process;
- a new technical standard;
- a statutory certificate;
- a universal mandatory inspection;
- a licensing mechanism;
- a government-controlled process;
- a guarantee against future waterproofing failure.

The six-domain CWIG architecture remains frozen during this correction cycle unless a material defect requires change.

---

# PART B — BLOCKER RECONCILIATION

## 6. B1 / Finding 3.1 — STOP Thresholds

### External Finding

STOP thresholds are insufficiently defined.

The reviewer recommended minimum automatic STOP conditions, a time threshold for unresolved conditions and an explicit commercial-pressure override rule.

### Disposition

**ACCEPT WITH MODIFICATION**

### Reason

The underlying concern is valid:

A practitioner must not be able to convert a materially unresolved condition into a positive gate outcome merely because of project pressure.

However, CWIG should not invent generic technical tolerances, time limits or dimensional rules unless they have been independently verified against the applicable:

- NCC pathway;
- Australian Standard;
- manufacturer system;
- approved project technical basis.

The pilot therefore requires deterministic **non-PROCEED rules**, rather than an unsupported generic technical threshold list.

### Required Control

A positive gate decision is prohibited while any of the following remains:

- a CWI finding of **NOT ACCEPTABLE**;
- `UNRESOLVED — MATERIAL TO CWIG DECISION`;
- an unresolved REFER condition material to waterproofing;
- an unresolved ESCALATE condition material to waterproofing;
- an unresolved INVESTIGATE condition material to waterproofing;
- an identified incompatibility within CWI-06;
- the applicable waterproofing system has not been identified;
- CWIG status is `REASSESSMENT REQUIRED`;
- a material condition required for the waterproofing decision cannot be established.

Commercial instruction, owner instruction, builder instruction or project scheduling pressure cannot convert one of those states into:

- PROCEED;
- or PROCEED WITH CONTROL.

### Action

Create a controlled:

**CWIG-01 Hard Gate / Non-PROCEED Rules v0.1**

or incorporate the same rule into the bounded Pilot Governance Corrections Sprint.

### Status

**OPEN — REQUIRED BEFORE PILOT 001**

---

## 7. B2 / Finding 5.1 — Pre-Application Status Reconfirmation

### External Finding

Pre-application status reconfirmation exists conceptually but is not sufficiently operationalised as a distinct field event.

### Disposition

**ACCEPT**

### Reason

The Field Pilot Protocol and Evidence Register already require pre-application status reconfirmation.

The remaining gap is an operational instrument that the practitioner can actually complete immediately before membrane application.

### Required Action

Create:

**CWIG-01 Pre-Application Status Reconfirmation Record v0.1**

The record should verify, at minimum:

- identified waterproofing system unchanged;
- substrate not materially changed;
- no material new substrate damage;
- no significant contamination event known;
- no relevant moisture event known;
- water-management geometry materially unchanged;
- waterstop/threshold arrangement materially unchanged;
- drain/interface materially unchanged;
- no new or materially changed penetration;
- relevant junctions materially unchanged;
- no contradictory technical information received;
- no other known material change.

If a material change is identified:

> **CWIG STATUS = REASSESSMENT REQUIRED**

The affected CWI domain or domains must be reassessed before membrane application.

### Timing Principle

The reconfirmation occurs immediately before waterproofing application or sufficiently close to application that the practitioner is confirming the interface actually being waterproofed.

No arbitrary universal number of days is established at v0.1.

### Status

**OPEN — REQUIRED BEFORE PILOT 001**

---

## 8. B3 / Finding 9.1 — False Confidence / Scope Statement

### External Finding

A CWIG pass could be misread as:

- bathroom compliance;
- waterproofing compliance;
- plumbing compliance;
- upstream-trade compliance;
- independent statutory inspection;
- government approval;
- guarantee against future leaks.

### Disposition

**ACCEPT**

### Reason

Although limitations exist throughout the current stack, a single canonical statement would materially reduce the risk of different documents expressing the boundary differently.

### Required Action

Create:

**CWIG-01 Scope & Limitation Statement v0.1**

It must become the canonical participant-facing description of what CWIG is and is not.

### Required Core Meaning

The statement must establish that CWIG:

- is a limited pre-waterproofing interface decision record;
- assesses the observable and reasonably measurable interface presented at the time;
- relates to the identified waterproofing system;
- is not an overall bathroom compliance certificate;
- is not a waterproofing compliance certificate;
- is not a plumbing certificate;
- is not certification of concealed construction;
- is not certification of upstream carpentry or lining work;
- is not a statutory inspection;
- is not government approval or endorsement;
- does not guarantee future waterproofing performance;
- does not remove or transfer another practitioner's existing responsibility.

### Status

**OPEN — REQUIRED BEFORE CONSENT RECORD**

---

## 9. B4 / Finding 12.1 — Pilot HOLD Rules

### External Finding

The pilot pause rules are too discretionary and should contain automatic HOLD triggers.

### Disposition

**ACCEPT WITH MODIFICATION**

### Accepted Principle

Some events should automatically prevent commencement of the next pilot case until review occurs.

### Modification

A legitimate CWIG STOP decision does **not automatically suspend the entire pilot**.

A STOP may demonstrate that the instrument is functioning as intended.

### Proposed Automatic HOLD Triggers

The pilot should enter mandatory HOLD/review where:

1. waterproofing proceeds despite a current unresolved STOP condition;
2. waterproofing proceeds while a material condition remains `UNRESOLVED — MATERIAL TO CWIG DECISION`;
3. an independent reviewer and primary assessor materially disagree between PROCEED and STOP on the same evidence;
4. repeated field use shows practitioners cannot reliably distinguish:
   - `UNRESOLVED — MATERIAL TO CWIG DECISION`
   - from `NOT VERIFIED — OUTSIDE CWIG SCOPE`;
5. a material privacy or evidence-integrity failure occurs;
6. adverse evidence is deleted, overwritten or intentionally excluded from the controlled record;
7. a material responsibility-boundary failure causes the waterproofing practitioner to be treated as certifier of upstream work;
8. a material condition that should reasonably have been identifiable within CWIG is repeatedly missed;
9. another event raises a credible risk that continuing the pilot would generate unreliable or unsafe evidence.

### Ordinary STOP Outcome

A normal STOP decision requires:

**CASE REVIEW**

but does not automatically create:

**PILOT SUSPENSION**

unless the STOP exposes a governance or architecture failure.

### Status

**OPEN — REQUIRED BEFORE PILOT 001**

---

## 10. B5 / Finding 13.1 — Scope Statement Before Consent

### External Finding

The Participant Information & Consent Record should not be finalised until CWIG's scope and limitations are fixed.

### Disposition

**ACCEPT**

### Required Sequence

**CWIG-01 Scope & Limitation Statement v0.1**

↓

**Participant Information & Consent Record v0.1**

↓

**specialist legal/privacy review**

↓

**Pilot Readiness Review**

### Status

**OPEN — SEQUENCE CONTROL**

---

## 11. B6 / Finding 13.2 — STOP Rules and Pre-Application Checklist

### External Finding

Minimum STOP/non-PROCEED controls and pre-application reconfirmation must exist before Pilot 001.

### Disposition

**ACCEPT WITH MODIFICATION**

### Reason

This finding substantially duplicates Findings 3.1 and 5.1.

The underlying requirement is accepted.

The technical implementation is governed by Sections 6 and 7 of this reconciliation register rather than the reviewer's unverified example thresholds.

### Status

**OPEN — RESOLVED THROUGH ACTIONS B1 AND B2**

---

# PART C — RESPONSIBILITY-BOUNDARY FINDINGS

## 12. Finding 2.1 — UNRESOLVED vs OUTSIDE CWIG SCOPE

### External Finding

The distinction is conceptually correct but operationally underspecified.

### Disposition

**PARTIALLY ALREADY ADDRESSED**

### Existing Controls

The Pilot Record Form v0.2 and Assessor Calibration Guide already distinguish:

`UNRESOLVED — MATERIAL TO CWIG DECISION`

from:

`NOT VERIFIED — OUTSIDE CWIG SCOPE`

The Calibration Guide also uses worked examples involving hidden framing and conditions that become material to the waterproofing decision.

### Additional Refinement

Add the controlling rule:

> **Trade responsibility does not determine CWIG decision relevance. A matter originating in another trade may still be material to CWIG if the waterproofing practitioner cannot determine that the presented interface is suitable without resolving it.**

Where an apparently outside-scope issue becomes necessary to the waterproofing decision:

> `NOT VERIFIED — OUTSIDE CWIG SCOPE`

must become:

> `UNRESOLVED — MATERIAL TO CWIG DECISION`

### Builder Disagreement

A builder or project participant disputing the classification does not automatically alter the assessor's recorded finding.

The disagreement should be:

- preserved;
- referred/escalated where necessary;
- recorded as pilot evidence.

### Status

**OPEN — MINOR GOVERNANCE STRENGTHENING**

---

## 13. Finding 2.2 — CWI-01 Responsibility Creep

### External Finding

Substrate acceptance presents the highest risk of the waterproofer being interpreted as certifying upstream framing or lining work.

### Disposition

**ACCEPT**

### Required Statement

Add explicitly to the controlling scope architecture:

> **CWI-01 assesses the substrate as presented for installation of the identified waterproofing system. It does not certify that the framing, lining installation, structural design or other upstream work that produced the substrate was correctly performed or compliant.**

### Status

**OPEN — REQUIRED BEFORE PILOT 001**

---

## 14. Finding 2.3 — Waterproofing Practitioner Definition

### Disposition

**ACCEPT WITH MODIFICATION**

For the pilot, define the functional role without creating a new practitioner category.

Suggested concept:

> **Waterproofing practitioner — the participating practitioner completing the CWIG assessment within their existing competence, authority and actual role on the project. Pilot participation does not create additional statutory authority.**

### Status

**OPEN — INCORPORATE INTO SCOPE/PARTICIPANT DOCUMENTS**

---

## 15. Finding 2.4 — Six-Domain Boundary

### External Finding

The six-domain structure is appropriately bounded.

### Disposition

**NO ACTION**

The six CWI domains remain frozen.

---

# PART D — DECISION ARCHITECTURE FINDINGS

## 16. Finding 3.2 — PROCEED WITH CONTROL

### External Finding

PROCEED WITH CONTROL could become a "near enough" pathway.

### Disposition

**ACCEPT WITH MODIFICATION**

### Rejected Recommendation

Do not establish an arbitrary maximum number of simultaneous controls.

The number of controls does not determine materiality.

One serious unresolved control may be unacceptable while several minor documented controls may remain proportionate.

### Required Rule

PROCEED WITH CONTROL may only be used where:

- the underlying technical basis is resolved;
- no material uncertainty remains;
- no unresolved REFER is required;
- no unresolved ESCALATE is required;
- the condition is compatible with the selected system;
- the specific control is documented before waterproofing proceeds;
- the control does not depend on an unsupported assumption;
- the control can be verified at the appropriate stage.

PROCEED WITH CONTROL must not be used merely to avoid:

- STOP;
- REFER;
- INVESTIGATE;
- ESCALATE.

### Status

**OPEN — GOVERNANCE CORRECTION**

---

## 17. Finding 3.3 — REFER Pathway

### Disposition

**ACCEPT WITH MODIFICATION**

A referral should record:

- condition;
- CWI domain;
- person/role referred to;
- date/time;
- evidence supplied;
- requested resolution;
- response received;
- whether re-presentation/reassessment is required.

If the referral is ignored and remains material:

> waterproofing does not proceed merely because no response was received.

### Status

**OPEN — REGISTER/PROTOCOL ALIGNMENT**

---

## 18. Finding 3.4 — ESCALATE Recipient

### Disposition

**ACCEPT WITH MODIFICATION**

The pilot coordinator is responsible for ensuring the escalation is controlled, but is not automatically the technical decision-maker.

An escalation may require:

- manufacturer technical support;
- designer;
- engineer;
- relevant building surveyor;
- plumber;
- other competent practitioner;
- appropriate regulator or authority where genuinely required.

### Rule

The pilot coordinator manages the escalation pathway.

The competent recipient determines the substantive technical matter.

### Status

**OPEN — PROTOCOL CLARIFICATION**

---

# PART E — TECHNICAL-BASIS FINDINGS

## 19. Finding 4.1 — Technical Basis Traceability

### External Finding

The reviewer considered several technical-reference fields missing.

### Disposition

**PARTIALLY ALREADY ADDRESSED**

### Existing v0.2 Controls

CWIG Pilot Record Form v0.2 already records, among other fields:

- applicable NCC edition;
- compliance pathway;
- project drawing/specification reference;
- shower configuration;
- applicable geometry/detail reference;
- source;
- exact clause/detail/drawing reference where available;
- technical document/version/date;
- assumptions/limitations;
- manufacturer/system documentation;
- system identification.

### Reconciliation

Do not duplicate full technical-basis fields across all six domains merely because they could be repeated.

Instead verify during final readiness QC that:

> a reviewer can reconstruct the basis of every material decision using the project-level and domain-specific fields together.

Where a material conflict exists between:

- project drawing;
- NCC/AS basis;
- manufacturer system;
- Performance Solution;

the conflict must be explicitly recorded.

### Status

**VERIFY DURING GOVERNANCE CORRECTION SPRINT — NO WHOLESALE REDESIGN**

---

## 20. Finding 4.2 — Geometry Competence Ceiling

### Disposition

**ACCEPT**

### Required Principle

Where the assessor cannot identify an applicable and defensible technical pathway within their reasonable competence, they must not create one.

Use:

**INVESTIGATE / REFER / ESCALATE**

as appropriate.

Examples may include:

- unusual/non-standard geometry;
- unresolved Performance Solution;
- conflicting design documents;
- condition requiring design or engineering determination;
- condition outside reasonable waterproofing competence.

### Status

**OPEN — CALIBRATION/PROTOCOL REFINEMENT**

---

## 21. Finding 4.3 — Standard Residential Technical Basis

### External Finding

Technical basis adequate for standard residential configurations.

### Disposition

**NO ACTION**

---

# PART F — CHANGE AND REASSESSMENT FINDINGS

## 22. Finding 5.2 — Product Substitution

### Disposition

**ACCEPT**

### Required Pilot Control

A material waterproofing-system/component substitution known before application must be disclosed to the assessor.

The assessor determines the affected CWI domain or domains.

A substitution does not automatically require complete reassessment of every domain.

At minimum, system compatibility must be reconsidered.

### Legal Boundary

Do not describe this as a new statutory "builder obligation."

It is a participation condition of the controlled pilot, subject to final participant/legal review.

### Status

**OPEN — PARTICIPANT RECORD + RECONFIRMATION RECORD**

---

## 23. Finding 5.3 — Unreported Work After CWIG

### Disposition

**ACCEPT**

### Required Control

The pre-application status reconfirmation must ask whether:

- work has occurred in the assessed area since CWIG;
- penetrations changed;
- waste/interface changed;
- geometry changed;
- substrate changed;
- another material interface condition changed.

Where the project controller/site supervisor can reasonably confirm this information, their acknowledgment may be captured.

The waterproofing practitioner remains responsible only for the interface decision they make, not for certifying the truth of concealed upstream work.

### Status

**OPEN — PRE-APPLICATION RECORD**

---

## 24. Finding 5.4 — SUPERSEDED

### Disposition

**NO ACTION**

Existing treatment is retained.

---

# PART G — CALIBRATION FINDINGS

## 25. Finding 6.1 — Subjective Terminology

### Disposition

**ACCEPT WITH MODIFICATION**

### Principle

Where a technical threshold exists in an applicable authoritative source, the assessor should rely on that source.

Where no universal threshold exists:

- do not invent one;
- use system-specific requirements;
- use explicit observations/measurements;
- use calibration examples;
- escalate material uncertainty.

Terms such as:

- significant;
- acceptable;
- sound;
- stable;

should be connected wherever practical to:

- observed condition;
- measurement;
- manufacturer requirement;
- applicable technical source;
- calibration example.

### Status

**OPEN — BOUNDED CALIBRATION QC**

---

## 26. Finding 6.2 — Independent Comparison Method

### External Finding

The reviewer considered independent comparison insufficiently structured.

### Disposition

**ALREADY ADDRESSED**

The current calibration architecture already requires:

- independent completion before comparison;
- evidence basis;
- technical basis;
- CWI finding;
- gate action;
- agreement classification.

It distinguishes:

- FULL AGREEMENT;
- SUBSTANTIAL AGREEMENT;
- MATERIAL DISAGREEMENT;
- TECHNICAL-BASIS DISAGREEMENT.

### Additional Control

Where a material PROCEED versus STOP disagreement occurs:

> mandatory technical/governance review occurs before the result is used as supporting evidence for CWIG.

### Status

**VERIFY ONLY**

---

## 27. Finding 6.3 — Assessor Drift

### Disposition

**ACCEPT WITH MODIFICATION**

For a 5–10 case cohort, perform calibration comparison:

- before/at initial pilot commencement;
- after early workflow cases where practical;
- if repeated interpretation drift appears;
- before expanding beyond the first cohort.

### Status

**OPEN — PILOT PROTOCOL NOTE**

---

# PART H — PILOT METHODOLOGY FINDINGS

## 28. Finding 7.1 — Cohort Size

### Disposition

**NO ACTION**

The initial 5–10 case cohort remains appropriate for workflow/feasibility testing.

It is not statistically representative.

---

## 29. Finding 7.2 — Case Selection Bias

### Disposition

**ACCEPT WITH MODIFICATION**

### Accepted Concern

The cohort should not contain only convenient, straightforward projects selected because they are likely to produce positive outcomes.

### Rejected Recommendation

Do not require:

> "At least two cases must produce STOP/REFER/INVESTIGATE."

The pilot must not predetermine outcomes.

Selecting cases because they are known to contain adverse conditions would also bias the cohort.

### Required Approach

Create a case-selection matrix seeking reasonable variation in:

- renovation/new construction;
- shower configuration;
- substrate;
- membrane system;
- drainage interface;
- project complexity;
- ordinary straightforward work;
- more challenging but still in-scope work.

Outcomes remain unknown before assessment.

### Status

**OPEN — CASE-SELECTION CONTROL**

---

## 30. Finding 7.3 — Independent Review Scope

### Disposition

**ACCEPT WITH MODIFICATION**

For a 5–10 case feasibility pilot:

- independent review of all cases is desirable where practical;
- if impractical, the minimum review sample must be fixed before recruitment;
- cases involving material disagreement, unusual technical basis or material adverse findings should receive priority review.

The final sampling rule must be preregistered.

### Status

**OPEN — PREREGISTERED PILOT RULE**

---

## 31. Finding 7.4 — Straightforward Cases

### Disposition

**NO ACTION**

Ordinary cases remain important baseline evidence.

---

# PART I — EVIDENCE REGISTER FINDINGS

## 32. Finding 8.1 — Adverse Finding Preservation

### Disposition

**PARTIALLY ALREADY ADDRESSED**

The Pilot Evidence Register already contains:

- adverse finding records;
- commercial-pressure records;
- responsibility-dispute records;
- missed-condition records;
- pilot-governance events.

### Required Strengthening

Adopt an explicit append-only principle:

> **Once a material adverse finding has been entered into the controlled pilot record, correction or reassessment creates a linked later entry. The original finding is not overwritten, deleted or converted into a positive finding.**

### Status

**OPEN — REGISTER GOVERNANCE CLARIFICATION**

---

## 33. Finding 8.2 — Register Outcome Bias

### Disposition

**ALREADY ADDRESSED**

The current register records:

**initial CWI findings**

↓

**initial gate decision**

↓

**adverse findings**

↓

**intervention**

↓

**reassessment**

↓

**pre-application reconfirmation**

↓

**final current position**

The original adverse sequence is therefore preserved before the final result.

No structural rewrite is presently justified.

### Status

**NO FURTHER ACTION EXCEPT APPEND-ONLY CONTROL**

---

## 34. Finding 8.3 — Duplication Between Form and Register

### Disposition

**ACCEPT WITH MODIFICATION**

Clarify:

> **Pilot Record Form = field source record**

> **Pilot Evidence Register = governance/research summary**

The register should link to the source form rather than requiring unnecessary manual re-entry of detailed evidence.

### Status

**OPEN — ADMINISTRATIVE CLARIFICATION**

---

# PART J — PRIVACY AND CONSENT

## 35. Finding 10 — Participant Information

### Disposition

**SPECIALIST ADVICE REQUIRED**

The Participant Information & Consent Record should address, at minimum:

- voluntary participation;
- purpose of pilot;
- information collected;
- photographs;
- technical evidence;
- adverse findings;
- STOP/REFER consequences;
- independent review;
- research/evaluation use;
- de-identification;
- record retention;
- withdrawal process;
- CWIG Scope & Limitation Statement;
- confirmation that participation does not remove existing obligations.

### Important Control

Do not promise:

- absolute confidentiality;
- non-disclosure to regulators;
- specific withdrawal/destruction rights;
- particular retention periods;
- absence of mandatory reporting;

until those matters have been legally verified.

### Status

**DRAFT ALLOWED — NOT APPROVED FOR FIELD USE UNTIL SPECIALIST REVIEW**

---

## 36. Specialist Advice Register

The following remain:

**SPECIALIST ADVICE REQUIRED**

before the consent record is approved for field use:

- Privacy Act 1988 (Cth) applicability;
- relevant Australian Privacy Principles obligations if applicable;
- Victorian privacy-law applicability;
- photograph/privacy requirements in occupied residential property;
- any mandatory disclosure/reporting obligations triggered by adverse findings;
- appropriate retention/destruction approach;
- whether separate builder/project-controller participation acknowledgment is needed;
- whether any formal research-ethics process is applicable or advisable.

### Status

**OPEN — EXTERNAL ADVICE REQUIRED**

---

# PART K — INDEPENDENCE AND CONFLICT

## 37. Finding 11.1 — Proponent / Coordinator / Evaluator Conflict

### Disposition

**ACCEPT**

The conflict is real but proportionate to a small feasibility pilot and can be governed.

### Existing Controls

The current architecture already preserves:

- adverse findings;
- independent reviewer comparison;
- evidence rules;
- pilot pause/termination pathways.

### Additional Controls

Before case selection:

1. preregister evaluation questions;
2. freeze evidence rules;
3. define assessor selection criteria;
4. define independent reviewer nomination/selection method;
5. define independent review sample;
6. preserve external review findings;
7. preserve negative pilot outcomes.

### Status

**OPEN — GOVERNANCE CORRECTION SPRINT**

---

## 38. Finding 11.2 — Assessor Selection

### Disposition

**ACCEPT**

Selection should record:

- relevant role;
- relevant qualifications/registration where applicable;
- waterproofing experience;
- system familiarity;
- independence/conflict considerations;
- calibration completion.

### Status

**OPEN — BEFORE PILOT 001**

---

# PART L — PAUSE AND TERMINATION

## 39. Finding 12.1 — Automatic HOLD Triggers

### Disposition

**ACCEPT WITH MODIFICATION**

See Section 9.

A normal STOP is a case outcome.

A governance/architecture failure may create pilot HOLD.

---

## 40. Finding 12.2 — Termination Criteria

### Disposition

**ACCEPT WITH MODIFICATION**

Do not rely solely on arbitrary event counts.

Pilot termination should be considered where evidence establishes that:

- practitioners cannot apply the responsibility boundary consistently;
- material positive decisions remain unreliable despite calibration;
- waterproofing repeatedly proceeds despite unresolved material conditions;
- CWIG systematically creates responsibility distortion;
- pilot evidence integrity cannot be maintained;
- burden is clearly disproportionate to observed assurance value;
- material safety/governance problems cannot be corrected proportionately.

Specific events may create automatic HOLD and mandatory review.

Termination follows reasoned governance review unless immediate safety/evidence-integrity concerns require suspension.

### Status

**OPEN — GOVERNANCE RULE REQUIRED**

---

# PART M — PREREGISTERED PILOT QUESTIONS

## 41. Finding 13.3 — Preregistered Evaluation Questions

### Disposition

**ACCEPT**

The evaluation questions should be frozen before selecting Pilot 001.

### Initial Questions

1. Can the six-domain CWIG assessment be completed by a competent participating practitioner in a practical pre-waterproofing site workflow?

2. Can assessors distinguish:
   `UNRESOLVED — MATERIAL TO CWIG DECISION`
   from
   `NOT VERIFIED — OUTSIDE CWIG SCOPE`
   without case-by-case coaching from the pilot coordinator?

3. Do STOP, REFER, INVESTIGATE and ESCALATE decisions operate as intended?

4. Can PROCEED WITH CONTROL be applied without becoming a "near enough" pathway?

5. Can the technical basis for material decisions be reconstructed from the record?

6. Does pre-application status reconfirmation identify material changes occurring after the original CWIG assessment?

7. Do independent assessors reach substantially similar practical decisions from substantially similar evidence?

8. Where they disagree, can the cause be classified as:
   - evidence;
   - technical basis;
   - terminology;
   - professional judgement;
   - material decision disagreement?

9. Does CWIG remain within the waterproofing-interface responsibility boundary?

10. Does CWIG identify material interface conditions that change project action before membrane installation?

11. Does the process add proportionate administrative/time burden?

12. Does CWIG duplicate existing supervision without meaningful additional assurance?

13. Does CWIG create or reduce responsibility confusion?

14. Are material adverse findings preserved and reconstructable?

15. Are material conditions later identified that CWIG reasonably should have detected?

16. Is the evidence register sufficient to reconstruct:
   **condition → evidence → decision → intervention → correction → reassessment**?

17. Does the pilot produce evidence that CWIG should be:
   - retained;
   - narrowed;
   - modified;
   - paused;
   - or abandoned?

### Status

**OPEN — FREEZE BEFORE CASE SELECTION**

---

# PART N — NO-ISSUE FINDINGS

## 42. External Findings Retained as NO ISSUE

The following third-party findings require no corrective action:

### Finding 2.4

Six-domain structure correctly limits scope.

### Finding 4.3

Technical basis adequate for standard residential pilot configurations.

### Finding 5.4

SUPERSEDED category appropriately defined.

### Finding 7.1

5–10 case cohort appropriate for workflow/feasibility testing.

### Finding 7.4

Straightforward projects remain eligible and useful.

### Finding 13.4

Pilot Readiness Review and GO/HOLD decision remain appropriate final gates.

These findings remain part of the external evidence record.

---

# PART O — REQUIRED PRE-PILOT ACTIONS

## 43. Action Register

| Action ID | Action | Priority | Status |
|---|---|---|---|
| IAR-A01 | Preserve independent review unchanged in repository | High | OPEN |
| IAR-A02 | Create CWIG-01 Scope & Limitation Statement v0.1 | BLOCKER | OPEN |
| IAR-A03 | Establish Hard Gate / Non-PROCEED rules | BLOCKER | OPEN |
| IAR-A04 | Create Pre-Application Status Reconfirmation Record v0.1 | BLOCKER | OPEN |
| IAR-A05 | Define automatic Pilot HOLD triggers | BLOCKER | OPEN |
| IAR-A06 | Define explicit pilot termination decision framework | High | OPEN |
| IAR-A07 | Add CWI-01 "substrate as presented" responsibility statement | High | OPEN |
| IAR-A08 | Strengthen UNRESOLVED / OUTSIDE SCOPE operational rule | High | OPEN |
| IAR-A09 | Define PROCEED WITH CONTROL limitations | High | OPEN |
| IAR-A10 | Clarify REFER log/follow-up process | Medium | OPEN |
| IAR-A11 | Clarify ESCALATE coordination pathway | Medium | OPEN |
| IAR-A12 | Define geometry/technical competence ceiling | High | OPEN |
| IAR-A13 | Create product/change notification pilot control | High | OPEN |
| IAR-A14 | Add periodic assessor-calibration control | Medium | OPEN |
| IAR-A15 | Define unbiased case-selection matrix | High | OPEN |
| IAR-A16 | Freeze independent-review sampling rule | High | OPEN |
| IAR-A17 | Add explicit append-only adverse evidence rule | High | OPEN |
| IAR-A18 | Clarify Form vs Evidence Register roles | Low | OPEN |
| IAR-A19 | Freeze preregistered evaluation questions | BLOCKER | OPEN |
| IAR-A20 | Define assessor selection criteria | High | OPEN |
| IAR-A21 | Define independent reviewer nomination method | High | OPEN |
| IAR-A22 | Draft Participant Information & Consent Record | High | NOT STARTED |
| IAR-A23 | Obtain specialist Victorian legal/privacy advice | BLOCKER FOR FIELD USE | NOT STARTED |
| IAR-A24 | Conduct Pilot Readiness Review v0.1 | FINAL GATE | NOT STARTED |
| IAR-A25 | Issue formal GO / HOLD for CWIG-PILOT-001 | FINAL GATE | NOT STARTED |

---

# PART P — BOUNDED GOVERNANCE CORRECTION SPRINT

## 44. Recommended Consolidation

Several external findings overlap.

Rather than repeatedly editing individual documents, complete one bounded:

# CWIG-01 Pre-Pilot Governance Corrections Sprint v0.1

The sprint should implement only evidence-supported controls involving:

- hard non-PROCEED rules;
- PROCEED WITH CONTROL limits;
- CWI-01 responsibility boundary;
- UNRESOLVED / OUTSIDE SCOPE rule;
- REFER documentation;
- ESCALATE governance;
- geometry competence ceiling;
- material-change notification;
- assessor drift control;
- case-selection method;
- independent-review sampling;
- append-only adverse evidence;
- automatic HOLD rules;
- termination framework;
- preregistered evaluation questions;
- assessor/reviewer selection.

The sprint must not expand the six-domain technical architecture.

---

# PART Q — DOCUMENTS TO CREATE

## 45. Required New Controlled Documents

The independent-review reconciliation justifies creation of:

### 1. CWIG-01 Scope & Limitation Statement v0.1

Canonical participant-facing boundary document.

### 2. CWIG-01 Pre-Application Status Reconfirmation Record v0.1

Short operational field record immediately before membrane application.

### 3. CWIG-01 Pre-Pilot Governance Corrections Sprint v0.1

Consolidated governance corrections and preregistered evaluation controls.

### 4. CWIG-01 Pilot Participant Information & Consent Record v0.1

Draft participant record.

**Status must remain:**

`WORKING DRAFT — NOT APPROVED FOR FIELD USE`

until required specialist review is completed.

### 5. CWIG-01 Pilot Readiness Review v0.1

Final whole-stack GO/HOLD assessment.

---

# PART R — RECOMMENDATIONS NOT ACCEPTED AS WRITTEN

## 46. Rejected or Modified Recommendations

The following external recommendations are not adopted exactly as proposed.

### Arbitrary Time Threshold for STOP

**Not adopted.**

No evidence currently justifies a universal number of hours/days after which an unresolved matter automatically becomes STOP.

Material status governs the decision.

---

### Unverified Generic Technical STOP Thresholds

**Not adopted as authoritative rules.**

Technical STOP decisions must rely on verified:

- NCC;
- applicable Australian Standards;
- manufacturer requirements;
- project-specific technical basis;
- competent technical determination.

---

### Maximum Number of PROCEED WITH CONTROL Conditions

**Not adopted.**

Materiality is more important than count.

---

### Predetermined Number of Adverse Pilot Cases

**Not adopted.**

The cohort must not be selected to guarantee STOP/REFER outcomes.

Case diversity should be controlled.

Outcomes must remain unknown before assessment.

---

### Any STOP Automatically Suspends Entire Pilot

**Not adopted.**

A legitimate STOP may demonstrate successful operation of the gate.

A STOP receives case review.

Pilot HOLD applies where the event exposes a governance, safety, evidence-integrity or architecture concern.

---

### Automatic Duplication of Technical Basis Fields Across All Six Domains

**Not presently adopted.**

Existing project-level and domain-level traceability fields should first be tested for reconstructability.

Additional fields require evidence that they are necessary.

---

# PART S — STATUS AFTER RECONCILIATION

## 47. Architecture Decision

The external review does not justify redesigning CWIG.

Current position:

**SIX-DOMAIN ARCHITECTURE — RETAIN**

**CWIG PILOT RECORD FORM v0.2 — RETAIN SUBJECT TO BOUNDED GOVERNANCE CORRECTIONS**

**CONTROLLED FIELD PILOT — NOT YET AUTHORISED**

---

## 48. Pilot 001 Status

`CWIG-PILOT-001`

### Current Decision

# HOLD — PRE-PILOT CONTROLS INCOMPLETE

This HOLD does not reflect failure of the CWIG architecture.

It reflects the requirement to complete the independent-review action register before exposing a real project or participant to the pilot.

---

## 49. Conditions Required to Remove HOLD

Pilot 001 may proceed to final GO/HOLD assessment only after:

- [ ] independent review preserved in repository;
- [ ] Scope & Limitation Statement controlled;
- [ ] hard non-PROCEED rules controlled;
- [ ] Pre-Application Status Reconfirmation Record controlled;
- [ ] automatic pilot HOLD rules controlled;
- [ ] termination framework controlled;
- [ ] CWI-01 responsibility boundary strengthened;
- [ ] UNRESOLVED / OUTSIDE SCOPE rule strengthened;
- [ ] PROCEED WITH CONTROL limitations controlled;
- [ ] technical competence ceiling controlled;
- [ ] preregistered evaluation questions frozen;
- [ ] assessor selection criteria established;
- [ ] independent review method/sampling frozen;
- [ ] adverse-evidence append-only rule established;
- [ ] Participant Information & Consent Record drafted;
- [ ] required specialist legal/privacy advice completed;
- [ ] Pilot Readiness Review completed.

Only then should a candidate project and assessor receive a formal:

**GO**

or

**HOLD**

decision.

---

# PART T — CONTROLLING RECONCILIATION CONCLUSION

## 50. Current Position

CWIG-IAR-001 provides meaningful independent challenge.

The review:

- supports the fundamental six-domain architecture;
- confirms the value of the adversarial development approach;
- supports the UNRESOLVED / OUTSIDE SCOPE distinction;
- supports continued controlled pilot preparation;
- identifies operational and governance weaknesses requiring correction.

Some findings duplicate controls already contained in later CWIG documents.

Some recommendations would create unsupported or biased requirements if adopted literally.

The correct response is therefore neither:

> reject the external review

nor:

> implement every recommendation automatically.

The correct response is:

> **preserve every finding, reconcile it against the current evidence base, implement justified corrections, explicitly reject unsupported recommendations, obtain specialist advice where required, and require every material action to close before Pilot 001 receives a GO decision.**

---

## 51. Immediate Next Action

Following governance review and merge of this reconciliation register:

> **Create CWIG-01 Scope & Limitation Statement v0.1.**

That document should be completed before drafting the final Participant Information & Consent Record.

---

## Document Control

**Document:** CWIG-IAR-001 Independent Review Reconciliation & Action Register  
**Version:** v0.1  
**Status:** Working Draft — Pre-Pilot Governance  
**Policy Author:** Carpenters for Housing Reform Victoria  
**Independent Review Reference:** CWIG-IAR-001  
**Primary Field Record:** CWIG-01 Pilot Record Form v0.2  
**Calibration Guide:** CWIG-01 Assessor Calibration Guide v0.1  
**Field Pilot Protocol:** CWIG-01 Field Pilot Protocol v0.1  
**Pilot Evidence Register:** CWIG-01 Pilot Evidence Register v0.1  
**Regulatory Status:** No statutory status. No government endorsement. No final regulatory mechanism prescribed.
