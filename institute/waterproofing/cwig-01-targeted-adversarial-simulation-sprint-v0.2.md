1. Targeted test — can the wrong technical detail still be used?
Attack

An assessor correctly fills in CWI-02 but chooses the wrong shower configuration and therefore records the wrong technical detail.

For example:

Configuration selected: enclosed level threshold
Technical reference: recorded
Measurement: accurately taken
Result: apparently acceptable

But the actual shower configuration was different.

What v0.2 fixes

v0.1 could leave us with little record of why the practitioner made the geometry decision.

v0.2 forces the chain:

configuration → applicable technical detail → measurement → decision

So an incorrect technical basis is now visible and auditable.

An independent reviewer can reconstruct:

“The measurement wasn't the problem — the assessor selected the wrong configuration.”

That is a meaningful improvement.

What v0.2 does NOT do

CWIG cannot magically guarantee that a practitioner selects the correct NCC/AS/project detail.

That is an assessor competence/calibration issue.

Verdict
PASS WITH CALIBRATION DEPENDENCY

No additional CWI field is presently justified.

The forthcoming Assessor Calibration Guide should contain examples of:

enclosed shower;
unenclosed shower;
level threshold;
hob;
preformed base;
ambiguous configuration;
when technical advice is required.
2. Attack — project drawing conflicts with technical requirement

This was a harder version of Test 1.

Scenario

The project drawing shows a particular waterstop/detail.

The practitioner records:

Source: Project Drawing

and the construction matches the drawing.

But suppose the drawing itself is inconsistent with the applicable technical pathway.

Risk

CWIG must not convert:

“matches drawing”

into:

“therefore compliant.”

Result

The v0.2 architecture can handle this because the form separately requires the applicable technical basis, but the distinction needs to be reinforced during assessor calibration.

For pilot purposes:

A project drawing can document the project detail being presented, but a drawing alone should not automatically be treated as the technical authority establishing the requirement.

Where there is a conflict:

INVESTIGATE / REFER / ESCALATE

rather than allowing the waterproofer to redesign the bathroom.

Verdict
PASS — PROTOCOL/CALIBRATION CONTROL REQUIRED

This does not justify another redesign of the form.

3. Targeted test — hidden framing genuinely outside CWIG scope
Scenario

Sheeting is installed.

The waterproofing practitioner cannot see every:

stud;
nogging;
hidden fixing;
backing member.

The visible substrate is stable and the selected waterproofing system can be assessed from the presented interface.

v0.1 problem

UNKNOWN / UNABLE TO VERIFY

could accidentally imply:

“Unknown = automatic failure”

or:

“Unknown = ignore it.”

v0.2 result

The practitioner records:

NOT VERIFIED — OUTSIDE CWIG SCOPE

That explicitly says:

“I have not certified this.”

It does not say:

“It complies.”

And provided the information is genuinely unnecessary to determine the waterproofing-interface decision, the gate can still proceed.

Verdict
STRONG PASS

The new uncertainty architecture works considerably better.

4. Attack — misuse OUTSIDE CWIG SCOPE to hide a material unknown

Now we deliberately try to game the new category.

Scenario

The practitioner cannot determine whether the drain interface can actually receive the selected membrane connection.

They attempt to classify the issue:

NOT VERIFIED — OUTSIDE CWIG SCOPE

because the drain relates to plumbing.

That would be wrong.

Although general plumbing compliance is outside CWIG, the waterproofing-to-drain interface is directly material to whether waterproofing can proceed.

v0.2 requires it to become:

UNRESOLVED — MATERIAL TO CWIG DECISION

Then:

INVESTIGATE / REFER / STOP

as appropriate.

Verdict
STRONG PASS

This is probably the most important success of the uncertainty split.

The principle now survives attack:

Trade responsibility and decision relevance are different questions.

A plumber may own the originating work while the visible interface remains material to the waterproofer's decision.

Excellent.

5. Targeted test — known product substitution
Scenario

CWIG passes using:

Waterproofing System A

Before application someone substitutes:

Waterproofing System B

with different preparation, compatibility or installation requirements.

v0.1

The old CWIG could still appear to say:

PROCEED

v0.2

Product/system change is an explicit reassessment trigger.

The sequence becomes:

CWIG decision: PROCEED

↓

system changed

↓

CWIG STATUS: REASSESSMENT REQUIRED

↓

affected CWI domains reassessed

↓

new gate decision

Only after reassessment can the record return to:

VALID

Verdict
STRONG PASS

The new validity layer works.

6. Targeted test — penetration altered after CWIG

Same attack, different cause.

CWIG passes.

A plumber changes a penetration before waterproofing.

v0.2 explicitly captures:

penetration added / moved / enlarged / interface altered

as a reassessment trigger.

So again:

REASSESSMENT REQUIRED

The original evidence remains preserved.

Verdict
STRONG PASS
7. Harder attack — nobody tells the waterproofer something changed

This exposed an important limitation, but not a flaw that the form itself can solve.

Scenario

CWIG occurs Monday.

Another trade modifies something Tuesday.

The waterproofing practitioner returns Wednesday and nobody tells them.

A paper or digital form cannot detect a change it has never been informed about.

That means validity control needs an operational requirement.

Before membrane application the practitioner should reconfirm:

Has any material condition or selected system changed since the recorded CWIG assessment?

If yes:

REASSESSMENT REQUIRED

If no:

current status can be relied upon.

Verdict
PASS — FIELD-PILOT PROTOCOL CONTROL REQUIRED

I would put this into the pilot protocol rather than create another CWIG version.

Something as simple as:

PRE-APPLICATION STATUS RECONFIRMATION

 No material change known since CWIG
 Material change identified — reassessment required
date/time
practitioner

That's enough.

8. Attack — moisture or contamination changes after CWIG

This tests the same mechanism against site conditions rather than another trade.

CWIG records a clean/dry acceptable substrate.

Then:

rain enters;
plaster sanding occurs nearby;
substrate is contaminated;
water is spilled;
significant site moisture occurs.

v0.2 already identifies contamination/moisture events as reassessment triggers.

Result:

REASSESSMENT REQUIRED

Relevant domain:

CWI-05

No need to reassess every CWI domain if only one condition changed.

Verdict
STRONG PASS

That selective reassessment is important because it keeps burden proportionate.

9. Targeted test — SUPERSEDED evidence history
Scenario

CWIG Record 001 reaches STOP.

Rectification occurs.

Conditions change enough that a replacement assessment is issued as Record 002.

The concern is whether Record 001 disappears.

v0.2 specifically says:

SUPERSEDED

does not mean:

DELETE

The previous record remains part of the evidence history.

That preserves:

bad condition → decision → correction → later assessment

rather than creating a sanitised final record.

Verdict
STRONG PASS

No change.

10. Small usability risk — VALID does not mean PROCEED

This is worth explicitly recognising.

Because record status and gate decision are intentionally separate, a record could legitimately be:

CWIG STATUS: VALID

and

CWIG DECISION: STOP

That means:

the STOP assessment remains the current valid assessment.

It does not mean waterproofing is approved.

This is logically correct, but practitioners could misread the word VALID.

Decision

I would not change the form again.

Instead the calibration/protocol should always display the two fields together:

ASSESSMENT STATUS: VALID
GATE DECISION: STOP

and explain:

VALID describes whether the assessment is current. It does not mean the technical outcome is positive.

Verdict
PASS WITH CALIBRATION NOTE
11. Targeted test — narrowed pilot scope
Scenario A

Class 1 ensuite with shower.

IN SCOPE.

Scenario B

Class 1 bathroom with shower-over-bath.

Potentially IN SCOPE, subject to configuration being identified appropriately.

Scenario C

Standalone laundry without shower.

OUTSIDE INITIAL PILOT.

Scenario D

Apartment bathroom — Class 2.

OUTSIDE INITIAL v0.2 PILOT.

Scenario E

External balcony.

OUTSIDE CWIG INTERNAL-WET-AREA PILOT.

The narrowed scope significantly reduces irrelevant N/A fields and prevents us from pretending the first field trial covers all waterproofing situations.

Verdict
PASS

For the very first real pilot cohort I would go narrower still operationally:

Class 1 bathroom/ensuite cases containing a shower.

But I would define that in the pilot protocol, not rewrite v0.2 again.

12. The four v0.2 corrections — final scorecard
v0.2 refinement	Targeted result
Technical-detail traceability	PASS WITH CALIBRATION DEPENDENCY
Split material uncertainty / outside-scope non-verification	STRONG PASS
Validity / reassessment / superseded controls	STRONG PASS
Narrow Class 1 pilot population	PASS
13. Did v0.2 create any new material architectural defect?
NO.

I found two things that must be controlled operationally:

A. Assessor calibration

The form makes the technical basis visible, but competence is still needed to choose the correct basis.

B. Change notification / pre-application reconfirmation

A form cannot react to an unreported change.

Those belong naturally in:

CWIG-01 Assessor Calibration Guide v0.1

and:

CWIG-01 Field Pilot Protocol v0.1

They do not justify adding more CWI domains or creating a v0.3 field form at this stage.

14. Targeted falsification result

We actively attempted to demonstrate that v0.2:

still permits hidden uncertainty to become a positive result;
cannot respond to material change;
allows system substitution without reassessment;
still confuses upstream responsibility with CWIG relevance;
remains too broad for a first pilot;
requires another major redesign.

We did not establish any of those propositions strongly enough to reject v0.2.

Two limitations remain:

CWIG depends on competent configuration/technical-detail selection.

and

CWIG depends on material changes being disclosed or detected before waterproofing.

Those are now pilot questions.

15. Final targeted simulation decision
CWIG-01 Pilot Record Form v0.2
PASS — READY FOR CONTROLLED FIELD-PILOT PREPARATION

Not:

PROVEN

Not:

REGULATOR-READY

Not:

MANDATORY-IMPLEMENTATION READY

Not:

DEFECT-REDUCTION VALIDATED

But:

Technically and procedurally mature enough to prepare a small controlled real-world pilot.

That is a meaningful maturity step.

16. What I would freeze now

I recommend we freeze the six-domain CWIG field-form architecture at v0.2 while field-pilot preparation occurs.

No more checklist additions simply because someone thinks of another possible issue.

Any further change to the form should need:

pilot evidence;
assessor calibration evidence;
technical verification;
or a genuinely material defect.

Otherwise this could turn into the exact giant compliance checklist we've been trying to avoid.

17. Next three development documents

The next order should now be:

1. CWIG-01 Assessor Calibration Guide v0.1

Teach consistent application of:

acceptable / unacceptable / material uncertainty / outside scope / refer / escalate / stop

and configuration selection.

2. CWIG-01 Field Pilot Protocol v0.1

Define:

pilot eligibility;
who assesses;
when CWIG occurs;
pre-application status reconfirmation;
change notification;
reassessment;
independent reviewer process;
privacy/evidence controls;
pilot success/failure measures.
3. CWIG-01 Pilot Evidence Register v0.1

Capture comparable evidence across actual pilot cases.

Then we can begin with a very small controlled cohort, rather than suddenly declaring CWIG live across the industry.
