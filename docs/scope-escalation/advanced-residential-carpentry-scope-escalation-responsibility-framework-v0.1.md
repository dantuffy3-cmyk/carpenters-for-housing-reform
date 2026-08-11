# Advanced Residential Carpentry Scope Escalation & Responsibility Resolution Framework v0.1

**Carpenters for Housing Reform Victoria**
Version: 0.1
Date: August 2026
Status: WORKING DRAFT

> **Not legal advice.** This document does not determine legal liability, statutory registration scope, permit requirements, engineering necessity, builder responsibility, insurance coverage or negligence. Where law or regulation is uncertain or has not been independently verified, this document uses `REQUIRES_LEGAL_OR_REGULATORY_REVIEW`.
>
> This document does not imply government endorsement of the Advanced Residential Carpentry initiative or any associated recognition pathway.

---

## 1. Purpose

This framework governs decision-making when residential renovation carpentry work may encounter conditions, uncertainties or boundaries that potentially exceed:

- the agreed or known work scope;
- available evidence about existing conditions;
- the practitioner's demonstrated capability;
- the practitioner's lawful authority;
- the consumer's instructions or expectations;
- current permit or approval boundaries;
- engineering authority;
- licensed-trade boundaries; or
- builder-responsibility boundaries.

The framework establishes how an Advanced Residential Carpenter — a capability classification awarded through independent assessment — should:

- recognise a boundary;
- assess the available evidence;
- decide whether work can safely and lawfully proceed;
- investigate further where required;
- refer to another practitioner;
- escalate operational decision ownership to the appropriate practitioner or authority;
- stop work where necessary;
- communicate the issue clearly to the consumer;
- record the decision and rationale; and
- resume work only when responsibility and authority are sufficiently clear.

**A central principle of this framework is:**

> Advanced competence includes recognising when not to proceed.

Escalation is not failure. A correct decision to stop, investigate, refer or escalate may be a direct demonstration of advanced professional judgement. The framework does not treat conservative, well-reasoned escalation as an adverse competence result.

This framework applies within the capability-first architecture: practitioner function is primary; capability evidence is secondary; any future statutory vehicle is tertiary. The framework does not create new legal authority, define RRC powers, or alter any statutory responsibility under current Victorian law.

---

## 2. Core Principles

### 2.1 Evidence before assumption

Unknown or unverifiable information cannot improve an outcome. Where critical information about a condition, boundary or responsibility is absent, the practitioner should act on what is known, not on what is assumed.

### 2.2 Capability before action

A practitioner should only proceed where the required capability is demonstrated, the condition is sufficiently understood, and the scope of action is proportionate to the evidence available.

### 2.3 Authority before responsibility

Technical capability does not itself create statutory authority. A practitioner may possess the knowledge to identify a structural condition, for example, without possessing the authority to certify, design or approve a structural response. These are distinct matters and must not be conflated.

### 2.4 Boundary recognition is competence

Recognising when another practitioner is required is part of advanced professional performance. Boundary recognition is classified as a full capability domain — not merely a constraint. Practitioners who correctly identify that a condition exceeds their authority, and who act on that recognition appropriately, demonstrate competence.

### 2.5 Proportionate escalation

Not every uncertainty requires stopping. Not every technically complex condition requires a builder. Not every structural issue requires engineering design. The framework supports proportionate, evidence-based judgement calibrated to the nature and severity of the condition identified. Over-escalation is recognised as a possible pilot failure mode alongside under-escalation.

### 2.6 Consumer clarity

The consumer should be informed, in plain language, of:

- what was found;
- what remains unknown;
- why work cannot safely or lawfully proceed (if applicable);
- what additional practitioner, investigation or evidence is required;
- what work is paused and what may continue; and
- what happens next.

Consumer preference cannot override safety requirements or legal authority boundaries.

### 2.7 Traceability

Material escalation decisions should be recorded. The record should capture the condition, the evidence basis, the decision, the reason, and the conditions required for resumption. The Responsibility Handoff Record (Document 3 in this sprint) provides a reusable template.

---

## 3. Evidence Status

The following evidence status classifications apply across this framework. They are consistent with the project's governed evidence architecture.

| Status | Meaning |
|---|---|
| `USER_DECLARED` | Information provided by the consumer or owner. Not independently verified. |
| `PHOTO_SUPPORTED` | A condition is visibly recorded. This is not a professional diagnosis or structural assessment. |
| `DOCUMENT_SUPPORTED` | Supported by a document (plans, permits, prior reports). Does not confirm every conclusion in the document is correct. |
| `EXTERNAL_SOURCE` | From an external reference (standards, published guidance, databases). Quality depends on the source. |
| `SYSTEM_DERIVED` | Derived from a governed system or model output. |
| `PROFESSIONAL_REVIEWED` | Reviewed by a qualified practitioner relevant to the subject matter. |
| `UNKNOWN` | No reliable information is available on this matter. |
| `UNABLE_TO_VERIFY` | Information exists but cannot presently be confirmed from accessible evidence. |

**Important:**

`PHOTO_SUPPORTED` ≠ professional diagnosis.

`DOCUMENT_SUPPORTED` ≠ proof that every conclusion in that document is correct.

`UNKNOWN` and `UNABLE_TO_VERIFY` cannot improve an outcome. They must not be treated as evidence that conditions are satisfactory.

---

## 4. Escalation Decision States

The following controlled states govern the practitioner's decision when a condition is identified.

### PROCEED

The condition is sufficiently understood, within the practitioner's demonstrated capability, and within the practitioner's lawful authority. Work may continue without additional controls.

### PROCEED_WITH_CONTROL

Work may continue subject to documented controls, specific sequencing, temporary measures or monitoring. This state must not be used where authority over the relevant scope is unclear or contested.

### INVESTIGATE

More evidence is required before a reliable assessment of scope or risk can be made. Work on the affected area should pause pending investigation. Other work may continue where it is not dependent on the uncertain condition.

### REFER

Another practitioner's technical input is required. Responsibility for the overall work does not automatically transfer — referral is for specific technical input, not necessarily full scope handoff. The practitioner must record what question is being referred, to whom, and what evidence is provided.

### ESCALATE

Responsibility, authority or control over a scope must move to an appropriately qualified or registered practitioner or decision-maker. This is distinct from REFER in that the receiving party is expected to assume ownership of the relevant scope, not merely provide advice.

### STOP

Work must not continue until a material safety, authority, evidence or responsibility issue is resolved. The affected scope must be made safe before stopping.

**STOP is not automatically an adverse competence result.** A correct STOP decision, supported by sound reasoning and clear communication, is a direct demonstration of professional judgement.

The escalation logic flow is:

```
Condition identified
→ evidence assessed
→ uncertainty classified
→ capability / authority boundary checked
→ decision:
     PROCEED
     PROCEED_WITH_CONTROL
     INVESTIGATE
     REFER
     ESCALATE
     STOP
→ responsible practitioner / authority identified
→ consumer informed
→ decision recorded
→ work resumes only when operational decision ownership is sufficiently clear
```

---

## 5. Escalation Trigger Categories

The following categories describe conditions that may require a decision other than PROCEED. The list is not exhaustive. Each trigger should be assessed proportionately using the Proportionate Escalation Test in Section 6.

### 5.1 Structural uncertainty

Examples:

- unclear or potentially altered load path;
- deteriorated load-bearing elements (rot, termite damage, previous failure);
- removal or alteration of potentially load-bearing construction;
- requirement for temporary propping or support before further work;
- unexpected foundation movement, settlement or structural cracking;
- concealed structural failure;
- major termite damage to structural members.

Where structural uncertainty exists, engineering assessment **may** be required depending on the nature and severity of the condition and the scope of the proposed response. Not every structural uncertainty automatically requires engineering design. Proportionate assessment is required.

### 5.2 Builder-responsibility boundary

Examples:

- project scope expands materially beyond the original agreed carpentry scope;
- work moves beyond an identifiable and bounded trade function;
- consumer asks the practitioner to manage, coordinate or contract broader domestic building work;
- responsibility across multiple regulated scopes becomes unclear;
- contracting, approval or insurance responsibility may change as a result of scope changes.

Where legal responsibility is uncertain, classify as `REQUIRES_LEGAL_OR_REGULATORY_REVIEW`. Do not make legal conclusions without verified evidence.

### 5.3 Permit and surveyor boundary

Examples:

- uncertainty whether a building permit is required for the proposed or discovered work;
- work affects regulated building elements where permit status is unclear;
- existing approvals cannot be verified or located;
- work deviates materially from approved documentation.

Where permit or surveyor authority is uncertain, the practitioner should refer to the relevant building surveyor or statutory authority rather than proceed on assumption.

### 5.4 Licensed-trade boundary

Examples:

- plumbing work, including drainage connections or fixture work, intersects the carpentry scope;
- electrical work, including concealed wiring, is encountered or required;
- waterproofing work that is required to be performed or certified by a licensed tradesperson;
- gas installations or connections are involved;
- any other work that is restricted by Victorian law to a licensed trade.

Authority over restricted work rests with the licensed tradesperson. The practitioner must not infer authority beyond what current law supports.

### 5.5 Hazardous-material boundary

Examples:

- suspected asbestos-containing material, including wall sheeting, ceiling tiles, floor adhesives, insulation and pipe lagging;
- suspected lead-based paint in areas subject to disturbance;
- mould where the extent, cause or classification may require specialist assessment;
- contaminated or hazardous demolition conditions;
- other materials that may require specialist identification or licensed removal.

Where hazardous material is suspected, the practitioner should pause the affected work and seek specialist assessment before continuing. `REQUIRES_LEGAL_OR_REGULATORY_REVIEW` applies where legal obligations are unclear.

### 5.6 Hidden-condition discovery

Examples:

- concealed water damage beyond the previously visible scope;
- subfloor or concealed-space rot affecting structural members;
- live termite activity or evidence of historical termite damage in concealed areas;
- unexpected framing configuration differing from drawings or expectation;
- previous non-compliant alteration to framing or structure;
- concealed services (pipes, conduits, cables) in areas subject to work;
- undocumented structural modification.

Progressive discovery is a normal feature of residential renovation. Its occurrence is not itself evidence of practitioner error. The framework's preferred response to hidden conditions is:

1. Make the area safe.
2. Pause the affected work.
3. Record the discovered condition.
4. Notify the consumer.
5. Obtain the appropriate builder, engineer, building surveyor or licensed-trade input as the condition requires.
6. Revise scope, responsibility and contractual arrangements before continuing.
7. Verify the completed response.

### 5.7 Evidence failure

Examples:

- critical information is unavailable or cannot be located (plans, permits, prior reports);
- documents provide contradictory information;
- an area relevant to the scope cannot be safely accessed for inspection;
- responsibility for prior work is unclear;
- a previous repair cannot be verified as adequate.

Unknown or unverifiable evidence must not be treated as confirmation that conditions are satisfactory. Where evidence failure materially affects safety or scope, INVESTIGATE or STOP is the appropriate initial response.

### 5.8 Consumer-instruction conflict

Examples:

- the consumer asks the practitioner to continue work despite an unresolved safety or authority issue;
- the consumer requests work outside the agreed scope without appropriate adjustment to responsibility and authority;
- the consumer declines a required specialist investigation.

Consumer preference cannot override a genuine safety requirement or legal authority boundary. The practitioner should clearly communicate the reason for the boundary, document the communication, and should not proceed in conflict with safety or authority obligations.

---

## 6. Proportionate Escalation Test

When a condition or uncertainty is encountered, the practitioner should apply the following test before selecting a decision state:

1. **What condition is known?** Describe the specific condition in factual terms.
2. **What is unknown?** Identify what information is missing and why it matters.
3. **What evidence supports the current understanding?** Apply evidence status classifications from Section 3.
4. **Is the condition within the practitioner's demonstrated capability?** Is the practitioner's assessed capability sufficient to interpret and respond to this condition?
5. **Is the work within the practitioner's lawful authority?** Does the practitioner have statutory authority over the relevant scope, or does that authority sit with another regulated practitioner?
6. **Is another professional's judgement required?** Who is the appropriate practitioner to assess or resolve this condition?
7. **Can the risk be controlled without changing responsibility?** Are documented controls, sequencing or temporary measures sufficient to allow safe continuation within existing scope?
8. **Would continuing create unacceptable safety, consumer or regulatory risk?** Is there a credible harm scenario if work continues?
9. **Who must own the next decision?** Where responsibility or authority is in question, who is the appropriate decision-maker?
10. **What evidence is required before work resumes?** What specific information, assessment or approval is needed to resolve the uncertainty?

The result of this test informs the appropriate decision state (Section 4) and, where applicable, the handoff architecture (Section 9).

---

## 7. Structural Understanding vs Engineering Authority

This section addresses one of the most important and most easily misread boundaries in residential renovation carpentry.

### What an Advanced Residential Carpenter may potentially demonstrate

An independently assessed Advanced Residential Carpenter may be capable of demonstrating:

- recognition of load paths and the effect of proposed changes on building structure;
- identification of structural uncertainty, including deterioration, alteration or unexpected condition;
- understanding of temporary propping and support principles relevant to safe sequencing of work;
- identification of deteriorated, damaged or non-compliant structural elements;
- identification that an engineering assessment may be required;
- ability to make an area safe and preserve conditions for appropriate investigation while escalation occurs.

### What an Advanced Residential Carpenter does not gain authority to do

Regardless of assessed capability, an Advanced Residential Carpenter does NOT gain authority to:

- undertake engineering design or calculation;
- certify structural adequacy;
- approve departures from structural requirements that require statutory approval;
- substitute for a registered engineer where engineering input is legally required.

These authorities rest with appropriately registered or licensed practitioners under Victorian law.

**Capability is not authority.** Recognising structural uncertainty is a demonstration of capability. Resolving structural uncertainty by engineering design requires engineering authority.

This distinction must be preserved throughout the framework, assessment scenarios and pilot measurement.

---

## 8. Carpenter vs Builder Responsibility

Current official Building and Plumbing Commission (BPC) evidence confirms substantial physical-work overlap between domestic building work of the type performed under DB-L Carpentry and renovation carpentry more broadly. This has been documented in the DB-L implementation-options analysis completed as part of this initiative.

Therefore:

> **Physical work type alone is not sufficient to determine practitioner-function responsibility.**

The framework tests responsibility using the following considerations:

- **Scope ownership:** Is the practitioner responsible for the total project scope, or a bounded trade function within it?
- **Contracting responsibility:** Who holds the domestic building contract (where one is required)?
- **Project-level coordination:** Does the practitioner carry responsibility for managing multiple scopes, trades or stages?
- **Statutory obligations:** What obligations does Victorian law assign to which party in this configuration?
- **Consumer expectations:** Does the consumer understand who is responsible for what?
- **Complexity and uncertainty:** Does the project carry complexity, interdependence or uncertainty that characterises domestic building work as distinct from trade work?
- **Bounded carpentry function:** Does the work remain a recognisable, bounded carpentry function within a larger project managed by another?

This framework does not conclude that an RRC recognition pathway resolves these questions. It does not conclude that DB-L Carpentry resolves these questions. Where the legal responsibility boundary is unclear on the evidence available:

**Classify: `REQUIRES_LEGAL_OR_REGULATORY_REVIEW`**

---

## 9. Handoff Architecture

A handoff occurs when an ESCALATE or REFER decision is made and responsibility for a question, a scope or an area of authority must move to another practitioner.

A handoff should not merely say "call an engineer" or "call a builder." It should:

- identify why referral is required;
- state precisely what question the receiving practitioner must answer;
- describe what evidence is being provided;
- identify what work is paused;
- identify what work may continue without creating risk or blurring responsibility;
- record who owns the next decision; and
- specify the conditions required for work to resume.

The handoff flow is:

```
Issue identified
→ practitioner records condition and decision
→ consumer informed
→ responsible practitioner type identified
→ referral or escalation issued
→ evidence transferred to receiving practitioner
→ receiving practitioner confirms referred scope or question
→ operational next-decision ownership recorded
→ conditions for resumption recorded
→ work resumes / scope changes / project remains stopped
```

The Responsibility Handoff Record (Document 3 in this sprint) provides the standard template for recording these steps.

A referral or handoff records operational responsibility for the next defined question or scope. It does not itself determine, transfer or extinguish legal liability, statutory responsibility, contractual responsibility or professional obligations. Acceptance by a receiving practitioner means that practitioner has confirmed the defined referred scope or question they will address. It does not by itself establish transfer of legal liability or release another party from existing obligations.

---

## 10. Consumer Communication

### Principles

Escalation communication to the consumer should:

- use plain language appropriate to the consumer's level of technical knowledge;
- clearly distinguish between what is KNOWN, UNKNOWN, UNABLE_TO_VERIFY and REQUIRES_SPECIALIST_INPUT;
- avoid diagnosing conditions without adequate evidence;
- avoid alarming language that is not proportionate to the actual risk;
- avoid implying certainty that does not exist; and
- avoid implying the practitioner holds authority they do not possess.

### Suggested communication structure

| Heading | Content |
|---|---|
| What we found | Describe the condition or discovery in factual terms. |
| What we cannot yet determine | Identify what remains unknown and why. |
| Why this matters | Explain the risk or uncertainty in terms the consumer can understand. |
| Who needs to review it | Identify the type of practitioner or authority required. |
| What work is paused | Specify the affected scope. |
| What can continue | Identify work that is unaffected and may proceed. |
| What evidence is needed before resumption | State the specific assessment, document or approval required. |

Consumer communication should be recorded as part of the escalation record.

---

## 11. Scope Change and Variation Risk

When material new conditions are discovered, the following aspects of the project may be affected:

- work scope and sequencing;
- practitioner involvement (type and number);
- project cost and timeline;
- permit or approval requirements.

This framework does not provide contract-law conclusions. Contractual consequences — including rights, obligations, variation procedures and termination — may require review by the builder (where one is engaged), the consumer, legal counsel or a regulatory body, depending on the nature of the project and the contracting arrangement.

The practitioner should record the discovered condition and its potential effect on scope, and should communicate this to the relevant parties before continuing or altering work.

---

## 12. Responsibility Resolution States

The following controlled states classify the resolution of a responsibility question. They are governance classifications only and do not carry independent statutory meaning.

These states describe operational governance and decision ownership. They do not determine legal liability, negligence, statutory responsibility, contractual responsibility, insurance responsibility, or the release or indemnity of any practitioner.

| State | Meaning |
|---|---|
| `RESPONSIBILITY_CLEAR` | The responsible practitioner and their scope are identified and confirmed. |
| `RESPONSIBILITY_CONDITIONAL` | Responsibility is provisionally clear, subject to conditions or further information. |
| `SPECIALIST_INPUT_REQUIRED` | A practitioner with specific expertise must review before responsibility can be confirmed. |
| `BUILDER_REVIEW_REQUIRED` | A registered builder must assess whether and how they are responsible for the relevant scope. `REQUIRES_LEGAL_OR_REGULATORY_REVIEW` may apply. |
| `ENGINEERING_REVIEW_REQUIRED` | A registered engineer must assess the structural or technical question. |
| `SURVEYOR_OR_PERMIT_REVIEW_REQUIRED` | A registered building surveyor or the relevant authority must clarify permit or approval status. |
| `LICENSED_TRADE_REQUIRED` | A licensed tradesperson must perform or certify the work in question. |
| `LEGAL_OR_REGULATORY_REVIEW_REQUIRED` | The legal or regulatory position is uncertain and requires qualified interpretation. |
| `RESPONSIBILITY_UNRESOLVED` | The responsibility question has not been resolved and the project cannot proceed in the relevant area. |
| `WORK_STOPPED_PENDING_RESOLUTION` | Work is stopped in the affected area and will not resume until the resolution state is updated. |

---

## 13. Work Resumption Test

Work in a paused area should resume only when all of the following conditions that apply to the specific situation are satisfied:

- Relevant evidence has been obtained and reviewed.
- Safety controls are in place and documented.
- Authority over the relevant scope is sufficiently clear.
- Responsibility for the relevant scope is sufficiently clear.
- Required specialist, engineering, surveyor or licensed-trade input has been received.
- Consumer communication has occurred and is recorded.
- Any required scope changes are documented.
- No unresolved critical risk is being ignored in order to resume.

This test does not require certainty beyond what is reasonably necessary. Where residual uncertainty is proportionate to the risk, and appropriate controls are in place, work may resume with documented controls.

---

## 14. Pilot Use

This framework is designed for testing within the Advanced Residential Carpentry governed pilot. During assessment scenarios, candidates' escalation judgement may be observed and measured using the following potential measures.

| Measure | Description |
|---|---|
| Frequency of escalation | How often candidates escalate, investigate or stop across a standard scenario set. |
| Correct escalation identification | Whether the candidate's decision state matches the calibrated expected response for the scenario. |
| False escalation / over-escalation | Whether candidates escalate where a proportionate PROCEED or PROCEED_WITH_CONTROL would have been appropriate. |
| Missed escalation | Whether candidates proceed where a boundary condition required INVESTIGATE, REFER, ESCALATE or STOP. |
| Assessor agreement | The degree to which assessors independently assign the same decision state to the same scenario. |
| Candidate reasoning quality | Whether the candidate can articulate the basis for their decision, identify the unknowns, and identify the required referral. |
| Consumer comprehension | Whether the candidate's consumer communication would be understood by a non-technical person. |
| Boundary communication | Whether the candidate correctly identifies the type of practitioner required and the question to be answered. |
| Evidence traceability | Whether the candidate records the evidence basis for their decision. |

These measures test the framework under controlled conditions. They do not establish statewide impact and should not be represented as doing so.

---

## 15. Limitations

This framework explicitly does NOT determine:

- legal liability for any act or omission;
- statutory registration or licensing scope;
- permit requirements in any specific case;
- engineering necessity in any specific case;
- builder responsibility in any specific case;
- insurance coverage or entitlement;
- contract entitlement;
- negligence or professional misconduct;
- compliance outcome.

Where specialist or legal interpretation is required, that uncertainty is preserved. This framework is a governance and competency assessment instrument. It does not substitute for legal advice, professional certification or regulatory determination.

---

*This document is a working draft for governance and pilot-design purposes. It has not been reviewed by government, endorsed by any regulatory body, or approved for public distribution without further authorisation. Legal and regulatory positions marked `REQUIRES_LEGAL_OR_REGULATORY_REVIEW` should be verified against current Victorian statute and official BPC guidance before any operational use.*
