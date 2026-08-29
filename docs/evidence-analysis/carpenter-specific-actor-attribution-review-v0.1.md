# Carpenter-Specific Actor Attribution Evidence Review

**Version:** 0.1  
**Date:** August 2026  
**Status:** WORKING DRAFT  
**Scope:** Governed evidence review testing whether recurring residual-function components can be attributed specifically to carpenters in residential renovation and existing-building contexts.

---

## Purpose Notice

This review addresses one controlling question:

> Does independent evidence show that carpenters themselves are expected to exercise diagnostic judgement, uncertainty recognition, boundary recognition, stop/refer decisions or escalation in residential renovation and existing-building contexts?

This is **not** advocacy for ARC.  
This is **not** advocacy for RRC.  
This review does **not** assume carpenter-specific attribution exists.

Legitimate null outcomes are retained, including:

- **NO_RELIABLE_CARPENTER_SPECIFIC_ACTOR_ATTRIBUTION_IDENTIFIED**
- **FUNCTION_RECURS_BUT_ACTOR_ATTRIBUTION_REMAINS_SHARED_OR_UNCLEAR**

---

## Preserved Governed Findings

Unless strong independent evidence directly changes them, the following findings are preserved:

- **Functional Distinctiveness:** C — DISTINCT_FUNCTION_IS_PLAUSIBLE_BUT_NOT_SUFFICIENTLY_EVIDENCED (50%)
- **Residual function:** PARTIAL_RESIDUAL_FUNCTION
- **Residual Function Recurrence:** C — REPEATED_RECURRENCE_IS_PLAUSIBLE_BUT_ACTOR_OR_FUNCTION_DISTINCTION_REMAINS_UNCLEAR (60%)
- **Assessability:** B — ASSESSMENT_METHODS_ARE_PLAUSIBLE_BUT_RELIABILITY_IS_UNPROVEN (55%)
- **Canonical ARC:** C — DISTINCT_CAPABILITY_QUESTION_REMAINS_PLAUSIBLE (45%)
- **DB-L:** D — PUBLIC_EVIDENCE_INSUFFICIENT_TO_DETERMINE_ASSESSMENT_DEPTH (75%)
- **Harm:** B — CARPENTRY_ASSOCIATED_HARM_EXISTS_BUT_ATTRIBUTION_IS_WEAK (55%)
- **Population:** B — LARGE_GENERAL_CARPENTRY_WORKFORCE_BUT_RENOVATION_COHORT_NOT_IDENTIFIABLE (65%)

---

## Source and Method Controls

### Source classes used

| Source class | Source type | Use in this review | Limitation |
|---|---|---|---|
| OCCUPATION_PROFILE | ANZSCO/OSCA and Jobs and Skills Australia profile references | Used for occupation-level function wording and role boundaries | Runtime host-resolution prevented direct live retrieval in this run |
| TRAINING | CPC30220 and relevant unit references in controlled project records | Used for unit-level function signals (check/clarify/report/seek instruction) | Full live unit element retrieval unavailable in this run |
| WHS_GUIDANCE | WorkSafe/Safe Work guidance references captured in existing evidence files | Used to separate generic stop-work duty from trade-specific attribution | Stop-work signals are strongly generic worker/PCBU framed |
| BPC_REGULATOR | BPC class/scope/permit references captured in existing evidence files | Used to test builder/DB-L/supervisor assignment and overlap | Public assessment depth remains unresolved (DB-L D/75%) |
| VCAT_CASES | VCAT/AustLII references in existing evidence files | Used as case-level attribution context only | Case-level evidence is not prevalence evidence |
| PROJECT_INTERNAL_CONTROLLED | Existing governed evidence-analysis and policy-analysis files | Used to preserve controlled baselines and source-grounded prior extraction | Not treated as independent proof of unpublished regulator architecture |

### Retrieval limitation

Live retrieval from multiple official hosts was unavailable in this runtime (host-resolution errors). This review therefore uses source-grounded evidence already captured in governed repository documents and preserves uncertainty where direct re-verification could not occur.

---

## Part 1 — Actor Attribution Levels

| Level | Definition |
|---|---|
| **L0** | FUNCTION EXISTS IN PROJECT CONTEXT |
| **L1** | FUNCTION IS CARPENTRY_ASSOCIATED |
| **L2** | CARPENTER IS EXPECTED TO PARTICIPATE |
| **L3** | CARPENTER IS EXPECTED TO EXERCISE INDEPENDENT JUDGEMENT |
| **L4** | CARPENTER IS EXPECTED TO RECOGNISE BOUNDARY / REFER / STOP |
| **L5** | CARPENTER-SPECIFIC RESIDUAL FUNCTION IS DIRECTLY EVIDENCED |

**Control:** L1 does not imply L2. L2 does not imply L3. L3 does not imply L4. L4 does not imply L5.

---

## Part 2 — Actor Groups

| Code | Actor group |
|---|---|
| A | CARPENTER |
| B | EXPERIENCED / SENIOR CARPENTER |
| C | SITE SUPERVISOR / FOREMAN |
| D | DB-L CARPENTRY PRACTITIONER |
| E | DB-U / REGISTERED BUILDER |
| F | ENGINEER |
| G | BUILDING SURVEYOR |
| H | LICENSED PLUMBER |
| I | LICENSED ELECTRICIAN |
| J | EMPLOYER / PCBU |
| K | SHARED_PROJECT_TEAM |
| L | UNKNOWN_ACTOR |

**Control:** A person with carpentry background is not automatically coded as acting in actor group A.

---

## Part 3 — Occupational Evidence (ANZSCO / JSA / CPC30220 Context)

| Source | Evidence point | Actor wording signal | Attribution level | Classification |
|---|---|---|---|---|
| ANZSCO 3312/OSCA 3721 references (as captured in existing files) | Occupation includes construction, repair, alteration, renovation | Carpenter/joiner activity context | L1 | **CARPENTRY_CONTEXT_ONLY** |
| ANZSCO 3312/OSCA 3721 references | No explicit occupational wording found in controlled extracts assigning independent diagnostic authority, stop authority or formal referral duty uniquely to carpenters | Not explicit | L1 | **NOT_CLEARLY_EVIDENCED** |
| Jobs and Skills Australia occupation profile references | Occupation framing supports broad activity context only | Occupation-level context, not boundary authority model | L1 | **CARPENTRY_CONTEXT_ONLY** |
| CPC30220 high-level qualification context (existing controlled records) | Qualification pathway for carpentry capability exists | Carpenter capability development pathway | L1-L2 | **PARTIAL_CARPENTER_ATTRIBUTION** |

### Part 3 finding

Occupational evidence supports **carpentry association (L1)** and some expectation of **participation (L2)** in carpentry work contexts, but does not reliably establish **independent carpenter judgement (L3+)** for the residual-function bundle.

---

## Part 4 — Renovation / Existing-Building Context Test

| Context | Inspect | Identify | Diagnose | Decide | Stop | Refer / escalate | Best-supported actor signal |
|---|---|---|---|---|---|---|---|
| Concealed termite/deterioration | Mixed practitioner roles | Mixed | Often mixed with specialist input | Often builder/specialist influenced | Shared | Shared | **K / L** |
| Hidden services/asbestos/instability | Worker + supervisor | Worker + supervisor | Competent/specialist role | PCBU/supervisor/specialist pathway | Generic worker duty | Specialist escalation | **J / C / K** |
| Permit-affecting scope change | Builder/permit actors | Builder/surveyor | Mixed | Builder + surveyor + engineer | Withhold pending approvals | Formal escalation | **E / G / F** |
| Plan/site mismatch in carpentry work | Carpenter | Carpenter | Limited technical interpretation | Clarification before proceed | Limited/conditional | Report/seek instructions | **A with overlap** |
| Old/new interface and unknown load path | Carpenter observes; engineer interprets structural adequacy | Mixed | Engineer-led for structural adequacy | Builder + engineer + surveyor effects | Shared | Specialist escalation | **F / E / G / K** |

### Part 4 finding

Renovation uncertainty is strongly evidenced at process level. Actor attribution is predominantly shared, with repeated overlap across builder, supervisor, engineer, surveyor, PCBU and trades.

---

## Part 5 — Training Unit Deep Read (Controlled Public-Source Position)

| Evidence question | Position from controlled records | Classification |
|---|---|---|
| Checking site conditions/plan alignment in carpentry work | Evidenced through CPCCCA3025 references in existing review records | **DIRECT_CARPENTER_ATTRIBUTION** |
| Identifying discrepancies and clarifying before proceeding | Evidenced at least as report/clarify pathway in existing review records | **PARTIAL_CARPENTER_ATTRIBUTION** |
| Reporting non-conformity / seeking instructions | Evidenced as report-to-relevant-personnel pathway in existing review records | **PARTIAL_CARPENTER_ATTRIBUTION** |
| Independent boundary decision authority | Not clearly evidenced in controlled public extracts | **NOT_CLEARLY_EVIDENCED** |
| Independent technical diagnostic decision authority (beyond execution) | Not clearly evidenced in controlled public extracts | **NOT_CLEARLY_EVIDENCED** |
| Explicit specialist consultation trigger assigned specifically to carpenter role in public unit text | Not clearly evidenced in controlled public extracts | **UNKNOWN** |

### Required separation

- **REPORT_TO_SUPERVISOR:** Supported in controlled records.  
- **INDEPENDENT_BOUNDARY_DECISION:** Not clearly evidenced.  
- **TECHNICAL_DIAGNOSTIC_DECISION (independent authority):** Not clearly evidenced.

---

## Part 6 — WorkSafe / Safety Evidence Separation

| Function | Classification | Actor signal |
|---|---|---|
| Generic duty to cease unsafe work | **GENERIC_SAFETY_DUTY** | Worker/PCBU/supervisor model |
| Hazard-based stop and specialist input | **PROJECT_ROLE_DUTY** (shared) | Shared actor pathways |
| Carpenter-specific technical boundary judgement | **NOT_CLEARLY_EVIDENCED** in controlled public WHS extracts | Not explicit |

### Part 6 finding

Generic WHS stop-work obligations are not treated as proof of carpenter-specific technical boundary recognition.

---

## Part 7 — BPC / Builder Evidence

| Function area | Classification |
|---|---|
| Permit variation/revision pathway under changed conditions | **BUILDER_FUNCTION / SURVEYOR_FUNCTION** |
| Structural adequacy/escalation for design implications | **BUILDER_FUNCTION + ENGINEERING_FUNCTION** |
| DB-L class scope context (renovation/alteration in carpentry class) | **DBL_FUNCTION** (scope-level) |
| Explicit public evidence of DB-L assessment depth for judgement/boundary | **UNKNOWN** (DB-L D / 75% preserved) |
| Candidate ARC-like functions across project workflow | **SHARED_FUNCTION** |

### Part 7 finding

ARC-like functions visible in regulator/process material are frequently assigned to builder/surveyor/engineer pathways or shared process control, not clearly to carpenter-specific independent authority.

---

## Part 8 — Engineer / Surveyor / Other Regulated Boundaries

| Function | Primary actor |
|---|---|
| Structural design and adequacy determination | ENGINEER |
| Structural certification | ENGINEER |
| Permit determination/statutory inspection/certification pathway | BUILDING_SURVEYOR |
| Plumbing technical authority | LICENSED_PLUMBER |
| Electrical technical authority | LICENSED_ELECTRICIAN |

**Control:** These functions are not attributed to carpenters.

---

## Part 9 — VCAT / Case Evidence (Case-Level Only)

| Case/year | Renovation context | Carpenter present? | Role of carpenter | Role of builder/supervisor | Judgement issue | Stop/refer issue | Actor finding | Attribution level | Alternative explanation |
|---|---|---|---|---|---|---|---|---|---|
| Garrett v Elim House Pty Ltd [2018] VCAT 1862 | Existing-building concealed deterioration dispute | Not clearly established in controlled extract | Not clearly established | Mixed | Yes (case-specific) | Limited | Mixed/unclear | L0-L1 | Inspection and mixed actor causation |
| Narrayen v Emperor Homes Pty Ltd [2025] VCAT 895 | Defect dispute with hidden deterioration themes | Not clearly established in controlled extract | Not clearly established | Builder/mixed | Yes (case-specific) | Limited | Mixed/unclear | L0-L1 | Workmanship/design/maintenance overlap |

### Part 9 finding

VCAT confirms dispute contexts where judgement matters, but does not provide reliable prevalence-level or role-exclusive carpenter attribution.

---

## Part 10 — Practical Function Decomposition

| Candidate function | Observation | Interpretation | Decision | Authority | Communication | Referral | Stopping | Escalation | Best-supported actor model |
|---|---|---|---|---|---|---|---|---|---|
| Diagnostic judgement | Often carpenter-involved | Shared with builder/specialists | Shared | Rarely carpenter-exclusive | Shared | Shared | Shared | Shared | **K (shared)** |
| Uncertainty recognition | Carpenter/supervisor/worker | Shared | Shared | Shared | Shared | Shared | Shared | Shared | **K (shared)** |
| Boundary recognition | Often triggered by carpenter observation | Shared | Often builder/supervisor mediated | Profession-specific where regulated | Shared | Shared | Shared | Shared | **K with E/F/G/H/I boundaries** |
| Stop/withhold | Worker-level immediate stop + supervisory controls | Shared | Shared | Generic WHS + role-specific authority | Shared | Shared | Shared | Shared | **J/C/K** |
| Referral/escalation | Mixed | Mixed | Mixed | Role-dependent | Shared | Shared | Shared | Shared | **K** |
| Sequencing under uncertainty | Observation at trade interface | Mixed | Often builder/supervisor-led | Builder/supervisor authority dominant | Shared | Shared | Shared | Shared | **E/C/K** |
| Scope change decisions | Trade observations | Builder/surveyor/engineer interpretation | Builder/surveyor pathway | Statutory/non-trade authority | Shared | Shared | Withhold pending approvals | Formal | **E/G/F** |

---

## Part 11 — Carpenter-Specific Positive Evidence Table

| Source | Context | Function | Actor wording | Attribution level | Direct or inferred? | Independent judgement? | Boundary recognition? | Limitation | Confidence |
|---|---|---|---|---|---|---|---|---|---|
| CPCCCA3025 references in existing review records | Carpentry plan/site comparison | Identify mismatch and clarify before proceed | Carpenter in carpentry work context | L2 (limited L3 signal) | Partly direct via controlled extract | Partial, constrained | Partial, constrained | Full live unit text not re-opened in this run; no explicit exclusive authority wording confirmed | Medium |
| CPC30220 qualification context in existing records | Trade qualification architecture | Baseline capability participation expectation | Carpenter qualification pathway | L1-L2 | Inferred from qualification structure | Not clearly evidenced | Not clearly evidenced | Qualification pathway ≠ independent boundary authority | Low-Medium |

### Part 11 finding

Positive carpenter-specific attribution evidence is limited and concentrated in participation-level and plan/site-clarification functions, not in strongly evidenced independent boundary authority.

---

## Part 12 — Shared / Multi-Actor Evidence Table

| Source | Function signal | Actors implicated | Classification |
|---|---|---|---|
| BPC permit-amendment pathway references | Scope/condition change requires formal revision before proceed | Builder, surveyor, engineer, permit actors | **SHARED_FUNCTION / BUILDER-SURVEYOR-ENGINEER DOMINANT** |
| WorkSafe/Safe Work stop and hazard pathways (controlled citations) | Stop/reassess/escalate under uncertainty | Worker, supervisor, PCBU, specialist | **SHARED_FUNCTION** |
| VCAT case-level controlled references | Hidden-condition disputes with mixed causation | Mixed actors | **SHARED_FUNCTION / CASE_LEVEL_ONLY** |
| Existing-pathways alternative-cause map | Multiple non-carpenter primary cause pathways with carpentry escalation role | Builder, supervisor, engineer, surveyor, licensed trades, carpenter | **SHARED_MULTI_ACTOR** |

---

## Part 13 — Evidence Against Carpenter-Specific Attribution

| Evidence type | Signal |
|---|---|
| Explicit builder/supervisor process ownership | Sequencing, project coordination and variation pathways are frequently builder/supervisor assigned |
| Mandatory engineer/surveyor pathways | Structural adequacy and permit consequences are assigned outside carpenter role |
| Generic WHS framing | Stop-work obligations are worker/PCBU/supervisor generic rather than carpenter-specific technical authority |
| Training-pathway signal limits | Available controlled unit references show reporting/clarification duties but do not clearly establish independent boundary authority |
| Case-level limitations | VCAT material demonstrates mixed disputes, not carpenter-exclusive role finding |

**Control:** Silence is not treated as negative evidence; only affirmative counter-signals are listed.

---

## Part 14 — Senior / Experienced Carpenter Distinction

**Finding:** **NOT_FORMALLY_DISTINGUISHED**

Current controlled public-source material does not clearly distinguish ordinary carpenter versus experienced/senior carpenter as separate formal actor classes with different independent boundary/judgement authority.

This is not proof the distinction does not exist in practice.

---

## Part 15 — DB-L as Alternative Actor

| Test question | Outcome |
|---|---|
| Is residual-function attribution better supported as DB-L-specific than occupational-carpenter-specific? | **PARTIAL_OVERLAP / UNKNOWN** |
| Is DB-L more likely actor based on current public evidence? | **DBL_MORE_LIKELY_ACTOR** for some authority-linked project controls, but not conclusively proven |
| Is clear occupational vs DB-L difference publicly evidenced? | **NO_CLEAR_DIFFERENCE** |

**Control retained:** DB-L finding remains **D / 75%** (public evidence insufficient to determine assessment depth).

---

## Part 16 — Actor Attribution Matrix

| Function | Carpenter | Senior carpenter | Supervisor | DB-L | Builder | Engineer | Surveyor | Licensed trade | Shared? | Best-supported actor | Confidence |
|---|---|---|---|---|---|---|---|---|---|---|---|
| Diagnostic judgement | Partial | Partial | Partial | Partial/unknown | Partial | Partial | Limited | Limited | Yes | Shared multi-actor | Medium |
| Uncertainty recognition | Yes (contextual) | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Shared multi-actor | Medium-High |
| Boundary recognition | Partial | Partial | Partial | Unknown | Strong | Strong (domain-specific) | Strong (domain-specific) | Strong (domain-specific) | Yes | Shared with profession-specific boundaries | Medium |
| Stop/withhold | Partial (generic safety) | Partial | Yes | Unknown | Yes | Domain-specific stops | Domain-specific holds | Domain-specific stops | Yes | Shared/role-specific | Medium-High |
| Referral/escalation | Partial | Partial | Yes | Unknown | Strong | Strong (technical) | Strong (statutory) | Strong (licensed scope) | Yes | Shared with builder/supervisor coordination | Medium |
| Sequencing decision | Partial | Partial | Strong | Partial/unknown | Strong | Limited | Limited | Limited | Yes | Builder/supervisor dominant | Medium |
| Scope change | Limited | Limited | Partial | Partial/unknown | Strong | Strong where structural | Strong where permit | Partial | Yes | Builder/surveyor/engineer | High |
| Evidence interpretation | Partial | Partial | Partial | Unknown | Strong | Strong (structural) | Strong (statutory compliance) | Partial | Yes | Shared with specialist dominance | Medium |
| Specialist-input trigger | Partial | Partial | Yes | Unknown | Strong | Strong | Strong | Strong | Yes | Shared; builder/supervisor orchestrated | Medium |

---

## Part 17 — Falsification Tests

| Proposition tested | Result |
|---|---|
| 1. Carpenters independently exercise the residual function | **NOT ESTABLISHED** |
| 2. Carpenter role includes diagnostic judgement | **PARTIALLY SUPPORTED** (participation-level; independent authority unresolved) |
| 3. Carpenter role includes boundary recognition | **PARTIALLY SUPPORTED** (mostly shared/process mediated) |
| 4. Carpenter role includes stop/refer beyond generic WHS | **NOT RELIABLY ESTABLISHED** |
| 5. Senior carpenters perform materially different formal functions | **NOT_FORMALLY_DISTINGUISHED** |
| 6. Builder/supervisor role does not fully explain function | **NOT FALSIFIED** (builder/supervisor explanations remain strong) |
| 7. DB-L does not already capture function | **NOT ESTABLISHED** (DB-L uncertainty preserved) |
| 8. Carpenter-specific attribution strengthens ARC distinctiveness | **NOT ESTABLISHED** |

Null outcome remains legitimate.

---

## Part 18 — Attribution Result

**Best-supported attribution:** **SHARED_MULTI_ACTOR**

**Confidence:** **68%**

Rationale: evidence supports recurring function components in renovation contexts, but actor responsibility is predominantly shared and frequently mediated through builder, supervisor, engineer, surveyor, PCBU and licensed-trade pathways.

---

## Part 19 — Final Classification

**Selected classification:**  
**B — CARPENTRY_ASSOCIATION_EXISTS_BUT_INDEPENDENT_CARPENTER_JUDGEMENT_IS_NOT_ESTABLISHED**

**Confidence:** **72%**

---

## Part 20 — Impact on Existing Findings

| Governed finding | Status after this review | Change? |
|---|---|---|
| Recurrence | C / 60% | No change |
| Functional Distinctiveness | C / 50% | No change |
| Residual function | PARTIAL_RESIDUAL_FUNCTION | No change |
| Assessability | B / 55% | No change |
| Canonical ARC | C / 45% | No change |
| DB-L | D / 75% | No change |
| Harm | B / 55% | No change |
| Population | B / 65% | No change |

---

## Part 21 — Biggest Evidence Gap Ranking

| Rank | Gap | Why ranked here |
|---|---|---|
| 1 | **A. DIRECT_CARPENTER_SPECIFIC_JUDGEMENT_EVIDENCE** | Central unresolved question; without direct actor-level evidence L3-L5 cannot be sustained |
| 2 | **B. BOUNDARY_RECOGNITION_ACTOR_EVIDENCE** | Boundary ownership remains the key split between participation and authority |
| 3 | **D. DB-L_ROLE_OVERLAP** | DB-L overlap remains unresolved and materially affects attribution interpretation |
| 4 | **C. SENIOR_CARPENTER_FUNCTION_EVIDENCE** | No formal distinction currently evidenced between ordinary and senior carpenter roles |
| 5 | **E. REAL_WORLD_WORKFLOW_EVIDENCE** | Decomposed workflow evidence exists conceptually but actor-verified process mapping remains sparse |
| 6 | **F. SYSTEMIC_RECURRENCE_BY_ACTOR** | Recurrence exists at process level; actor-specific recurrence prevalence is least developed but downstream of A/B/D |

---

## Part 22 — Consultation-First Control

**Control retained:** **WAIT_FOR_CONSULTATION**

No BPC outreach.  
No DTP outreach.  
No FOI.  
No public advocacy action initiated.

---

## Part 23 — Evidence Register

| Claim | Source | Source type | Context | Actor | Function | Attribution level | Evidence classification | Alternative actor | Limitation | Confidence | Project-use status |
|---|---|---|---|---|---|---|---|---|---|---|---|
| Occupation includes renovation/repair activity | ANZSCO/OSCA references captured in controlled files | Occupation profile | General carpentry | A | Context function | L1 | CARPENTRY_CONTEXT_ONLY | E/C/K | Activity inclusion ≠ authority attribution | Medium | CONTEXT_ONLY |
| Occupation profile does not clearly assign exclusive stop/refer authority to carpenters | ANZSCO/OSCA controlled interpretation | Occupation profile | General carpentry | A | Boundary/stop | L1 | NOT_CLEARLY_EVIDENCED | E/C/J/K | Direct live retrieval unavailable this run | Medium | EVIDENCE_GAP |
| Carpentry plan/site mismatch checking is carpentry-relevant | CPCCCA3025 references in residual-function review | Training source (controlled extract) | Carpentry work | A | Observation + clarification | L2 | PARTIAL_CARPENTER_ATTRIBUTION | C/E/K | Full live unit elements not reopened in this run | Medium | CARPENTER_ATTRIBUTION |
| Reporting and clarification pathways are evidenced in training context | CPC unit references in controlled files | Training source (controlled extract) | Carpentry/site process | A/C | Report upward | L2 | PARTIAL_CARPENTER_ATTRIBUTION | C/E/K | Reporting ≠ independent authority | Medium | SHARED_FUNCTION |
| WHS stop-work pathway is generic worker/PCBU/supervisor framed | WorkSafe/Safe Work controlled citations | Safety guidance | Hazard/unsafe condition | J/C/K | Stop/reassess/escalate | L0-L2 | SHARED_FUNCTION | J/C/E | Generic safety duty not carpenter-specific | High | SUPPORTED_FACT |
| Changed conditions can require permit-amendment pathways before continuation | BPC BP-02 and permits references in controlled files | Regulator guidance | Permit-controlled work | E/G/F | Withhold/revise/seek specialist | L0-L1 | SHARED_FUNCTION | E/G/F | Process attribution stronger than trade attribution | High | SUPPORTED_FACT |
| Structural adequacy and certification boundaries sit with engineers | Existing-pathways controlled matrix and boundary controls | Policy analysis with regulator context | Structural uncertainty | F | Structural judgement authority | L0 | SHARED_FUNCTION | F | Contextual synthesis | Medium-High | SUPPORTED_FACT |
| Permit determination and statutory inspection boundaries sit with surveyors | Existing controlled records | Regulator/process context | Permit and compliance | G | Statutory boundary | L0 | SHARED_FUNCTION | G | Contextual synthesis | Medium-High | SUPPORTED_FACT |
| Licensed-trade authority retained for plumbing/electrical/asbestos-like specialist domains | Existing controlled records | Regulated trade boundary context | Interface work | H/I | Specialist authority | L0 | SHARED_FUNCTION | H/I | Not a prevalence claim | Medium | SUPPORTED_FACT |
| VCAT disputes show mixed hidden-condition judgement contexts, not carpenter-exclusive attribution | Garrett 2018; Narrayen 2025 entries in controlled files | Case material | Defect/hidden condition disputes | L/K | Case-level judgement context | L0-L1 | CASE_EVIDENCE_ONLY | E/F/G/K | Case-level only; no prevalence inference | Medium | CASE_EVIDENCE_ONLY |
| Senior carpenter distinct formal authority not clearly evidenced | Controlled cross-document analysis | Synthesised evidence position | Role distinction | B | Role differentiation | L1-L2 | NOT_CLEARLY_EVIDENCED | C/E/D | Absence in reviewed sources is not proof of non-existence | Medium | EVIDENCE_GAP |
| DB-L may overlap with some authority-adjacent functions but assessment depth remains unclear | DB-L review baseline | Governed baseline | Registration pathway | D | Potential overlap | L1-L3? | UNKNOWN | D/E/K | DB-L D/75% preserved | Medium | EVIDENCE_GAP |

---

## QC Confirmation

| Check | Result |
|---|---|
| 1. carpentry context ≠ carpenter attribution | PASS |
| 2. carpenter participation ≠ independent judgement | PASS |
| 3. reporting ≠ boundary decision | PASS |
| 4. generic WHS ≠ carpenter-specific technical stop | PASS |
| 5. seniority ≠ formally distinguished actor authority | PASS |
| 6. builder/supervisor overlap retained | PASS |
| 7. DB-L retained as alternative | PASS |
| 8. engineer/surveyor boundaries protected | PASS |
| 9. VCAT not prevalence | PASS |
| 10. no case extrapolation | PASS |
| 11. multi-stage workflow decomposed | PASS |
| 12. shared-function evidence preserved | PASS |
| 13. silence ≠ absence | PASS |
| 14. actor attribution separated from recurrence | PASS |
| 15. actor attribution separated from harm | PASS |
| 16. actor attribution separated from regulatory need | PASS |
| 17. null outcome permitted | PASS |
| 18. consultation-first retained | PASS |
| 19. no outreach/FOI | PASS |
| 20. no public HTML or unrelated changes | PASS |

---

## Sources Reviewed (this run; controlled evidence basis)

1. `docs/evidence-analysis/residual-function-recurrence-evidence-review-v0.1.md`  
2. `docs/evidence-analysis/db-l-judgement-boundary-recognition-review-v0.1.md`  
3. `docs/evidence-analysis/practitioner-population-scale-baseline-v0.1.md`  
4. `docs/evidence-analysis/functional-distinctiveness-evidence-baseline-v0.1.md`  
5. `docs/evidence-analysis/assessability-validation-evidence-review-v0.1.md`  
6. `docs/policy-analysis/existing-pathways-alternative-cause-baseline-review-v0.1.md`  
7. `docs/government-engagement/government-engagement-readiness-file-v0.1.md`

Key external source families relied on through those controlled documents:

- ANZSCO/OSCA occupation references
- Jobs and Skills Australia occupational profile references
- CPC30220 and relevant unit references (including CPCCCA3025 and CPCWHS3001)
- WorkSafe/Safe Work guidance references
- BPC domestic builder/permit references
- VCAT case references

---

## Final Output

- **File created:** `docs/evidence-analysis/carpenter-specific-actor-attribution-review-v0.1.md`
- **Sources reviewed:** See “Sources Reviewed (this run; controlled evidence basis)” above
- **Number of independent sources:** 11 source families used in analysis (occupation, training, WHS, regulator/process, case material)
- **Strongest carpenter-specific evidence:** Carpentry-context plan/site discrepancy checking and clarification pathways (participation-level attribution)
- **Strongest shared/multi-actor evidence:** Permit-amendment, WHS stop/reassess and specialist-input workflows distributed across builder/supervisor/PCBU/surveyor/engineer/trades
- **Strongest evidence against carpenter-specific attribution:** Generic WHS framing plus builder/surveyor/engineer assignment of authority-heavy decisions
- **Diagnostic-judgement actor finding:** Shared; carpenter participation plausible but independent carpenter authority not established
- **Boundary-recognition actor finding:** Shared with role-specific professional boundaries; carpenter-exclusive authority not established
- **Stop/refer actor finding:** Shared; strongest direct evidence is generic worker/supervisor/PCBU stop duty
- **Senior-carpenter finding:** NOT_FORMALLY_DISTINGUISHED in reviewed formal sources
- **DB-L overlap finding:** PARTIAL_OVERLAP / UNKNOWN; DB-L remains alternative actor hypothesis (D/75% retained)
- **Attribution result:** SHARED_MULTI_ACTOR
- **Attribution confidence:** 68%
- **Final classification:** B — CARPENTRY_ASSOCIATION_EXISTS_BUT_INDEPENDENT_CARPENTER_JUDGEMENT_IS_NOT_ESTABLISHED
- **Classification confidence:** 72%
- **Impact on Recurrence C / 60%:** No change
- **Impact on Functional Distinctiveness C / 50%:** No change
- **Impact on residual function:** PARTIAL_RESIDUAL_FUNCTION retained (no change)
- **Impact on Assessability B / 55%:** No change
- **Impact on Canonical ARC C / 45%:** No change
- **Biggest evidence-gap ranking:** A, B, D, C, E, F
- **QC 1–20:** PASS
- **Files changed:** `docs/evidence-analysis/carpenter-specific-actor-attribution-review-v0.1.md`
- **Branch:** `copilot/carpenter-specific-evidence-review`
- **Commit:** `bb94058d0315167bf5937a417807953b161858ff` (current at document finalisation)
- **PR link:** Not available in this run (no open PR found for branch)
- **Confirmation not merged:** Confirmed — not merged

---

Stop for Dan and Atlas review.
