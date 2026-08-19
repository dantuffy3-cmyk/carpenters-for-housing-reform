# CWIG-01 Worked Pilot Simulation Sprint v0.1

**Prepared by:** Carpenters for Housing Reform Victoria  
**Status:** Working Draft — Simulation Sprint v0.1  
**Date:** August 2026  
**Purpose:** Adversarial desk-based simulation of the CWIG-01 Pilot Record Form before controlled field testing. This document records both successful and failed scenarios and identifies evidence-based refinements required before a public field-pilot version is released.

---

# 1. Purpose

This sprint pressure-tests the Critical Waterproofing Interface Gate (CWIG-01) against representative residential bathroom scenarios.

The objective is not to demonstrate that CWIG-01 works.

The objective is to identify:

- conditions the gate handles well;
- conditions it handles poorly;
- responsibility-boundary failures;
- uncertainty-management problems;
- circumstances requiring reassessment;
- unnecessary burden;
- assessor-calibration risks;
- reasons the model should be narrowed, modified or rejected.

The controlling question is:

> **Can CWIG-01 consistently identify material pre-waterproofing interface conditions without becoming a broad bathroom-compliance inspection or transferring responsibility for upstream work to the waterproofing practitioner?**

This sprint is simulation evidence only.

It is not field-pilot evidence and does not demonstrate actual defect reduction.

---

# 2. Documents Under Test

The simulation assesses the architecture established through:

- Victorian Waterproofing Assurance Consultation Paper v0.1;
- Wet-Area Technical Verification Sprint v0.1;
- Critical Waterproofing Interface Gate Pilot Instrument v0.1;
- CWIG-01 Pilot Record Form v0.1.

The existing six Critical Waterproofing Interface checks are:

1. **CWI-01 — Substrate Acceptance**
2. **CWI-02 — Water-Management Geometry**
3. **CWI-03 — Drainage and Penetration Interface**
4. **CWI-04 — Junction and Movement Treatability**
5. **CWI-05 — Surface and Moisture Acceptance**
6. **CWI-06 — Waterproofing System Compatibility**

The gate-level decision states are:

- **PROCEED**
- **PROCEED WITH CONTROL**
- **INVESTIGATE**
- **REFER**
- **ESCALATE**
- **STOP**

---

# 3. Simulation Method

Each scenario tests CWIG-01 against four questions:

### A. Detection

Does the form identify the condition?

### B. Decision

Does it produce an appropriate gate decision?

### C. Responsibility Boundary

Can the decision be made without requiring the waterproofing practitioner to certify another practitioner's work?

### D. Assurance Value

Would the decision provide meaningful information or intervention before membrane installation?

Each scenario is classified:

- **STRONG PASS**
- **PASS**
- **PASS WITH GAP**
- **AMBIGUOUS**
- **USABILITY CONCERN**
- **CALIBRATION RISK — REQUIRES TESTING**
- **FAIL — MATERIAL GAP**

---

# 4. Scenario 1 — Straightforward Enclosed Shower

## Condition

A Class 1 residential ensuite is presented for waterproofing.

The following are established:

- shower configuration identified;
- suitable wet-area substrate;
- visible substrate sound and stable;
- required water-management geometry established;
- drainage interface resolved;
- penetrations treatable;
- junction details available;
- surface clean and suitable;
- selected waterproofing system documented;
- no unresolved compatibility issue.

## CWIG Result

**CWI-01:** ACCEPTABLE  
**CWI-02:** ACCEPTABLE  
**CWI-03:** ACCEPTABLE  
**CWI-04:** TREATABLE  
**CWI-05:** ACCEPTABLE  
**CWI-06:** COMPATIBILITY RESOLVED

### Gate Decision

**PROCEED**

## Simulation Finding

CWIG-01 does not create an unnecessary intervention when the presented interface is suitable.

### Classification

**PASS**

---

# 5. Scenario 2 — Dust-Contaminated Substrate

## Condition

Stopping and sanding have occurred before waterproofing.

Significant plaster dust remains on the shower substrate.

The substrate itself appears otherwise suitable.

## CWIG Result

**CWI-05 — Surface and Moisture Acceptance:** NOT ACCEPTABLE

### Gate Decision

**STOP**

## Required Sequence

**STOP**

↓

clean and prepare surface

↓

re-present condition

↓

reassess

↓

**PROCEED** if all material conditions are acceptable

## Simulation Finding

This is a strong use case for CWIG-01.

The condition is:

- observable;
- relevant to membrane installation;
- inexpensive to correct;
- capable of being corrected before concealment.

The record should preserve both the initial adverse finding and later rectification.

### Classification

**STRONG PASS**

---

# 6. Scenario 3 — Water-Management Geometry Does Not Match Applicable Detail

## Condition

An enclosed level-threshold shower is presented.

The waterstop or related containment geometry does not match the technical arrangement believed to apply to that shower configuration.

## CWIG Result

**CWI-02 — Water-Management Geometry:** NOT ACCEPTABLE

### Gate Decision

**STOP**

## Simulation Finding

CWIG identifies the geometry problem.

However, the current Pilot Record Form does not require the assessor strongly enough to record the exact technical/configuration detail upon which the geometry decision was based.

This creates a risk that:

- the wrong shower configuration is selected;
- the wrong technical detail is applied;
- a measurement may appear precise but be assessed against the wrong requirement.

### Required Refinement

CWI-02 should require:

**Applicable geometry/detail reference:**  
**Source:** NCC / AS 3740 / drawing / Performance Solution / other  
**Configuration confirmed from:** OBSERVED / DOCUMENT_SUPPORTED / other

The required reasoning chain should become:

**configuration**

↓

**applicable technical detail**

↓

**measurement**

↓

**decision**

### Classification

**PASS WITH GAP**

---

# 7. Scenario 4 — Drain Interface Cannot Receive Selected Waterproofing Detail

## Condition

The waste is installed and visible.

The waterproofing practitioner cannot form the selected waterproofing system's documented membrane-to-drainage detail using the interface presented.

## CWIG Result

**CWI-03 — Drainage and Penetration Interface:** NOT ACCEPTABLE

### Gate Decision

**REFER / STOP**

## Practitioner Boundary

The waterproofing practitioner does not determine:

> The plumbing installation is non-compliant.

The narrower finding is:

> **The waterproofing interface presented cannot presently receive the identified waterproofing detail.**

## Required Sequence

**REFER / STOP**

↓

appropriate plumber / builder / project controller resolves interface

↓

re-present

↓

reassess

## Simulation Finding

The technical intervention can occur without transferring general plumbing responsibility to the waterproofing practitioner.

### Classification

**STRONG PASS**

---

# 8. Scenario 5 — Hidden Framing Cannot Be Verified

## Condition

Wet-area wall lining is already installed.

No upstream photographic record exists showing:

- stud centres;
- concealed noggings;
- complete sheet-fixing arrangement;
- hidden backing.

The exposed substrate appears stable and suitable.

## Current CWIG Problem

The v0.1 evidence state:

`UNKNOWN / UNABLE TO VERIFY`

does not adequately distinguish between two different situations.

### Situation A

Information is material to the CWIG decision but cannot presently be established.

Example:

The practitioner cannot establish whether the presented substrate is compatible with the selected waterproofing system.

### Situation B

Information has not been verified because it is deliberately outside the CWIG practitioner boundary.

Example:

Complete hidden stud layout after lining has already concealed the frame.

These are not the same evidence state.

## Required Refinement

Replace the single uncertainty concept with at least two distinct states:

### UNRESOLVED — MATERIAL TO CWIG DECISION

Meaning:

> Information necessary to determine whether waterproofing can responsibly proceed has not been established.

This condition cannot support **PROCEED** until resolved.

### NOT VERIFIED — OUTSIDE CWIG SCOPE

Meaning:

> The matter has not been certified because it falls outside the defined CWIG practitioner acceptance boundary.

This does not automatically prevent **PROCEED**, provided the missing information is not necessary to determine suitability of the observable waterproofing interface.

## Simulation Finding

Without this distinction, different competent practitioners could reach different gate outcomes for the same situation.

### Classification

**AMBIGUOUS — MATERIAL REFINEMENT REQUIRED**

---

# 9. Scenario 6 — Unusual Junction Without Documented Treatment

## Condition

A change of substrate or unusual junction exists.

The waterproofing practitioner cannot identify a documented treatment within the selected waterproofing system.

## CWIG Result

**CWI-04 — Junction and Movement Treatability:** UNRESOLVED

**CWI-06 — Waterproofing System Compatibility:** UNRESOLVED

### Gate Decision

**INVESTIGATE / ESCALATE**

## Potential Resolution

- manufacturer technical advice;
- designer direction;
- alternative compatible system;
- interface modification;
- other competent technical determination.

## Simulation Finding

CWIG correctly prevents undocumented improvisation while avoiding a conclusion about broader building compliance.

### Classification

**PASS**

---

# 10. Scenario 7 — Waterproofing Product Changed After CWIG Pass

## Condition

CWIG-01 is completed using one identified waterproofing system.

The gate reaches:

**PROCEED**

Before membrane installation begins, the specified waterproofing product or system is substituted for another system.

The new system has different:

- substrate requirements;
- preparation requirements;
- primers;
- junction treatments;
- application requirements;
- thickness requirements;
- cure periods;
- compatibility limitations.

## Current CWIG Problem

The existing v0.1 record can continue to display:

**PROCEED**

even though the system that was assessed is no longer the system to be installed.

The original gate decision has therefore become unreliable.

### Classification

**FAIL — MATERIAL GAP**

## Required Refinement

CWIG requires a separate record-status control.

### CWIG STATUS

- **VALID**
- **REASSESSMENT REQUIRED**
- **SUPERSEDED**

A gate decision applies only to the interface and waterproofing system actually assessed.

---

# 11. Scenario 8 — Interface Changed After CWIG Assessment

## Condition

CWIG is completed and reaches **PROCEED**.

Before membrane installation begins, another practitioner:

- modifies a plumbing penetration;
- changes the waste;
- damages the substrate;
- changes the waterstop;
- alters shower geometry;
- creates another material change to the assessed interface.

## Current CWIG Problem

The existing v0.1 form does not explicitly invalidate or suspend the previous gate decision.

## Required Refinement

Material change after assessment must automatically cause:

**CWIG STATUS = REASSESSMENT REQUIRED**

until the affected CWI domain is reassessed.

### Candidate Reassessment Triggers

- waterproofing system/product changed;
- substrate changed;
- substrate materially repaired;
- waste/drain interface altered;
- penetration added;
- penetration moved;
- waterstop altered;
- shower geometry altered;
- relevant junction changed;
- contamination event;
- moisture event;
- damage after assessment;
- any other material condition upon which the original gate decision depended changes.

## Simulation Finding

A gate cannot remain valid after a material part of the assessed interface changes.

### Classification

**FAIL — MATERIAL GAP**

---

# 12. Scenario 9 — STOP, Rectification and Reassessment

## Condition

Initial assessment records:

**09:13 — CWI-05 — NOT ACCEPTABLE — significant surface dust**

CWIG decision:

**STOP**

Surface is cleaned.

The area is re-presented.

At:

**10:02 — CWI-05 — ACCEPTABLE**

CWIG reaches:

**PROCEED**

## Simulation Finding

The v0.1 intervention history performs strongly.

The initial adverse condition is preserved rather than erased.

This creates a record showing:

**condition**

↓

**decision**

↓

**correction**

↓

**re-presentation**

↓

**reassessment**

rather than a final checklist containing only positive results.

This feature should be retained.

### Classification

**STRONG PASS**

---

# 13. Scenario 10 — Ordinary Laundry

## Condition

CWIG-01 is applied to a straightforward residential laundry without a shower.

Multiple fields concerning:

- shower configuration;
- shower geometry;
- shower waterstop;
- shower waste;
- shower-specific containment

become not applicable.

## Simulation Finding

The form can technically record multiple `N/A` states, but doing so adds unnecessary complexity during the first pilot.

The pilot has not yet demonstrated that one CWIG form is appropriately calibrated for every internal wet area.

## Required Refinement

The initial controlled field pilot should be limited to:

> **Class 1 residential bathrooms, ensuites and shower areas.**

Laundry should be classified:

`OUTSIDE INITIAL PILOT — FUTURE MODULE / FORM ADAPTATION`

This does not mean the model cannot later apply to laundries.

It means the first pilot population should remain narrow enough to generate interpretable evidence.

### Classification

**USABILITY CONCERN — PILOT SCOPE TOO BROAD**

---

# 14. Scenario 11 — Different Practitioners, Different Judgement

## Condition

Two competent waterproofing practitioners independently assess the same interface.

Terms within the form include:

- stable;
- sound;
- significant;
- treatable;
- compatible;
- acceptable.

The practitioners may legitimately apply different thresholds.

## Simulation Finding

CWIG-01 currently contains enough professional judgement that assessor disagreement must be expected and measured.

The Pilot Record Form already proposes collecting independent-review agreement.

That is appropriate but not sufficient by itself.

## Required Companion Development

Develop:

# CWIG-01 Assessor Calibration Guide v0.1

The guide should contain representative examples of:

- clearly acceptable;
- clearly not acceptable;
- material uncertainty;
- outside-CWIG-scope condition;
- requires referral;
- requires escalation.

The purpose should be practitioner calibration rather than turning every decision into a prescriptive universal rule.

### Classification

**CALIBRATION RISK — REQUIRES TESTING**

---

# 15. Simulation Results Summary

| Scenario | Result |
|---|---|
| Straightforward enclosed shower | PASS |
| Dust-contaminated substrate | STRONG PASS |
| Incorrect/unresolved geometry | PASS WITH GAP |
| Drain interface incompatible | STRONG PASS |
| Hidden framing unavailable | AMBIGUOUS |
| Unusual junction | PASS |
| Waterproofing product substitution | FAIL — MATERIAL GAP |
| Material interface change after gate | FAIL — MATERIAL GAP |
| STOP → rectify → reassess | STRONG PASS |
| Ordinary laundry | USABILITY CONCERN |
| Assessor variation | CALIBRATION RISK — REQUIRES TESTING |

---

# 16. Elements That Survived Pressure Testing

The following parts of CWIG-01 should be retained.

## Six-Domain Architecture

The six CWI domains remain sufficiently distinct and useful for further testing.

## Responsibility Boundary

The practitioner can identify interface conditions without automatically certifying:

- carpentry;
- plumbing;
- structural compliance;
- concealed work;
- overall bathroom compliance.

## STOP / REFER Architecture

The distinction between a technical stop and referral to another practitioner remains useful.

## Adverse-Evidence Preservation

The original adverse condition should remain visible after rectification.

This is one of the strongest features of the proposed evidence architecture.

## System-Specific Approach

CWIG should continue to identify the actual waterproofing system instead of embedding generic rules such as:

- universal primer;
- universal coat numbers;
- universal cure periods;
- universal reinforcement;
- universal membrane thickness.

---

# 17. Four Required Refinements Before Field Pilot

Four changes are justified by the simulation.

## Refinement 1 — Technical Detail Traceability

CWI-02 must require identification of the technical/configuration basis used for geometry assessment.

The chain should be:

**configuration → technical detail → measurement → decision**

---

## Refinement 2 — Split Uncertainty

Replace or refine `UNKNOWN / UNABLE TO VERIFY` so that CWIG distinguishes:

### UNRESOLVED — MATERIAL TO CWIG DECISION

from:

### NOT VERIFIED — OUTSIDE CWIG SCOPE

Unknown information must never improve an outcome.

---

## Refinement 3 — Gate Validity and Reassessment

Add:

**CWIG STATUS**

- VALID
- REASSESSMENT REQUIRED
- SUPERSEDED

Material change to the assessed interface or selected waterproofing system must trigger reassessment.

---

## Refinement 4 — Narrow Initial Pilot Scope

Limit initial controlled field testing to:

**Class 1 residential bathrooms, ensuites and shower areas.**

Other internal wet areas may be considered after the initial instrument has been tested and calibrated.

---

# 18. Changes Not Justified by the Simulation

The sprint does not currently justify:

- increasing the six CWI domains;
- turning CWIG into an inspection of all preceding trades;
- requiring the waterproofer to certify framing;
- requiring the waterproofer to certify plumbing;
- creating a statutory certificate;
- requiring universal independent inspection;
- creating a new practitioner registration class;
- requiring a government digital platform;
- merging CWIG with PCR-01;
- merging CWIG with PMP-01.

Those matters remain outside this simulation decision.

---

# 19. Assessor Calibration Requirement

The simulation identifies practitioner calibration as an unresolved evidence question.

A future:

**CWIG-01 Assessor Calibration Guide v0.1**

should support testing of:

- decision consistency;
- threshold interpretation;
- appropriate use of STOP;
- appropriate use of REFER;
- appropriate use of INVESTIGATE;
- identification of matters outside CWIG scope.

Calibration should not remove legitimate professional judgement.

Its purpose is to determine whether substantially similar conditions produce substantially similar decisions between competent assessors.

---

# 20. Field-Pilot Readiness Decision

## CWIG Architecture

**PASS**

## Practitioner Responsibility Boundary

**PASS**

## STOP / REFER Logic

**PASS**

## Adverse-Evidence History

**STRONG PASS**

## System-Specific Architecture

**PASS**

## Changed Conditions After Gate

**FAIL — CORRECTION REQUIRED**

## Uncertainty Classification

**PARTIAL — CORRECTION REQUIRED**

## Initial Pilot Scope

**TOO BROAD — NARROW BEFORE FIELD PILOT**

## Assessor Reproducibility

**UNKNOWN — MUST BE TESTED**

---

# 21. Overall Simulation Decision

# PASS WITH MATERIAL REFINEMENTS BEFORE FIELD PILOT

The simulation does not justify abandoning CWIG-01.

It does justify revising the current Pilot Record Form before field testing.

The next version should therefore be:

# CWIG-01 Pilot Record Form v0.2

and should introduce only the four evidence-supported refinements identified in this sprint unless subsequent review identifies another material defect.

---

# 22. Relationship to Future Field Evidence

This simulation must not be represented as evidence that CWIG-01:

- prevents waterproofing failures;
- reduces water ingress;
- reduces defects;
- improves consumer outcomes;
- reduces disputes;
- improves practitioner performance.

Those claims require actual pilot evidence.

The simulation establishes only that:

> **The narrowed CWIG architecture remains sufficiently coherent to justify further controlled development, while four material weaknesses should be corrected before field testing.**

A failed future field pilot remains a legitimate outcome.

---

# 23. Next Development Step

Following governance review and merge of this simulation record:

1. create **CWIG-01 Pilot Record Form v0.2**;
2. implement only the four justified refinements;
3. conduct a second adversarial simulation;
4. assess readiness for controlled field testing;
5. develop assessor calibration alongside, rather than inside, the field form.

PCR-01 development should remain separate from this immediate correction cycle.

---

## Document Control

**Document:** CWIG-01 Worked Pilot Simulation Sprint  
**Version:** v0.1  
**Status:** Working Draft — Adversarial Simulation  
**Policy Author:** Carpenters for Housing Reform Victoria  
**Related Instrument:** Critical Waterproofing Interface Gate Pilot Instrument v0.1  
**Related Field Record:** CWIG-01 Pilot Record Form v0.1  
**Regulatory Status:** No statutory status. No government endorsement. No final regulatory mechanism prescribed.
