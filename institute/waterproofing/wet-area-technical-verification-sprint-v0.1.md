# Critical Waterproofing Interface Gate v0.1

**Prepared by:** Carpenters for Housing Reform Victoria  
**Status:** Working Draft — Technical Verification Sprint v0.1  
**Date:** August 2026  
**Purpose:** Internal evidence-governed technical development. Not a final regulatory proposal or external government submission.

---

## 1. First control: identify the applicable technical pathway

For Victorian work commencing under the current regime, National Construction Code (NCC) 2025 took effect on 1 May 2026. Projects whose design had already substantially progressed may potentially remain under the earlier NCC arrangements, depending on the Victorian transitional provisions and relevant building surveyor (RBS) decision.

That means the first field in any future assurance record should actually be:

APPLICABLE_TECHNICAL_BASIS

NCC edition
building class
DTS / Performance Solution pathway
AS 3740 pathway where used
specified membrane system
relevant manufacturer instructions

That prevents a future digital checklist from blindly applying the same rule to every job.

For houses, the ABCB identifies two DTS approaches: full Housing Provisions Part 10.2, or specified provisions of Part 10.2 together with AS 3740:2021.

2. CWI-01 — Substrate Acceptance
Question

Is the exposed substrate suitable for this particular waterproofing system to be installed?

This survives strongly.

The current BPC waterproofing guidance requires membrane substrates to be smooth, clean, dry and free of dust, and advises checking substrate moisture because excess residual moisture can affect membrane curing and premature performance.

The BPC's own DB-L Waterproofing competency expectations are particularly useful: a practitioner is expected to prepare different surfaces and report or rectify faults or damage before applying waterproofing.

That gives us a legitimate practitioner function.

Practitioner may check
substrate identity;
visible stability;
damaged/loose areas;
obvious voids or protrusions;
contamination;
suitability for the selected membrane;
visible areas that cannot reliably receive the system.
Practitioner does NOT certify
hidden stud construction;
structural compliance;
complete sheet-fixing compliance where hidden;
builder compliance;
unseen work.
Evidence

PHOTO_SUPPORTED + DOCUMENT_SUPPORTED

Potentially:

room/location;
substrate type;
representative photographs;
product/system selected;
visible defect record.
Decision

KEEP — HIGH VALUE

3. CWI-02 — Water-Management Geometry

This is probably the strongest measurable pre-waterproofing item.

The established Housing Provisions require a shower floor waste, and where a floor waste is installed the floor plane must have a continuous fall between 1:80 and 1:50.

The shower configuration also matters.

For example, the established DTS details distinguish:

hob;
stepdown;
level threshold;
unenclosed shower;
preformed shower base.

And BPC's NCC 2025 update specifically says clause 10.2.14 was clarified to distinguish enclosed and unenclosed shower configurations.

Practitioner checks
shower configuration identified correctly;
waste present where required;
measurable falls;
threshold/hob/setdown arrangement;
relevant waterstop location;
geometry capable of managing water as designed.
Evidence

Measurement is more important than a photograph here.

Example:

SHOWER_TYPE: Enclosed level threshold
FALL_MEASURED: 1:X
WATERSTOP_CONFIGURATION: identified
WATERSTOP_POSITION: measured
RESULT: Accept / reject

STOP triggers
reverse fall;
insufficient/excessive fall where prescribed;
threshold geometry inconsistent with required detail;
required waterstop absent;
shower geometry cannot physically achieve the applicable detail.
Decision
KEEP — CRITICAL

This is exactly the kind of defect we want to catch before somebody puts membrane over it.

4. CWI-03 — Drainage and Penetration Interface

Another strong survivor.

The Housing Provisions require waterproof membrane-to-drainage connections, including drainage-flange arrangements for applicable floors, and require penetrations in shower areas to be waterproofed using appropriate sealing or proprietary flange arrangements.

But the waterproofer should not certify:

“The plumbing is compliant.”

Instead:

“The waterproofing-to-plumbing interface presented to me is capable of receiving the selected waterproofing detail.”

That's a much safer boundary.

Practitioner checks
waste location;
drainage flange/interface;
membrane connection accessible;
penetration size/location;
penetration stable enough to detail;
no unresolved clash preventing the membrane detail.
Practitioner does NOT certify
pipe sizing;
drainage system design;
plumbing installation as a whole;
concealed plumbing;
plumbing compliance certificate.
STOP / REFER

If a pipe or waste is positioned in a way that prevents a reliable waterproofing detail:

STOP

→ photograph/interface record

→ REFER TO PLUMBER / BUILDER

→ correction

→ re-present interface

→ accept/reject.

Decision
KEEP — CRITICAL
5. CWI-04 — Junction and Movement Treatability

This survives — but we need to avoid specifying one universal solution.

For bonded membranes, the Housing Provisions require bond breakers at wall/wall, wall/floor, hob/wall and relevant movement joints, compatible with the membrane flexibility class.

But manufacturers legitimately use different architectures.

For example, ARDEX's WPM 155 Rapid Plus uses its STB tape system in a way that eliminates the need for the conventional bond-breaker arrangement used by other systems.

That proves our checklist should not say:

“Bond breaker installed? YES/NO.”

It should say:

“Can every relevant junction/movement condition be treated using the selected waterproofing system's documented detail?”

Check
wall/floor;
wall/wall;
hob/wall;
changes in material;
movement joints;
niches;
transitions.
STOP
cracking/movement unresolved;
proprietary detail cannot be constructed;
selected system does not address observed geometry;
installer is improvising outside the documented system.
Decision

KEEP — HIGH VALUE

6. CWI-05 — Surface and Moisture Acceptance

This one has become stronger as we've researched it.

BPC specifically identifies poor surface preparation as a contributor to poor adhesion and pinholing and says substrate moisture should be assessed before membrane application.

And manufacturer requirements illustrate why this must remain system dependent.

For example, one Sika moisture-seal system specifies particular moisture-barrier application, cure intervals and surface preparation requirements; another membrane has its own separate preparation/application requirements.

Check
dust;
plaster residue;
loose material;
oil/contamination;
voids;
protrusions;
visible moisture;
moisture measurement where the selected system requires it;
required preparation completed.
The plaster-dust sequencing example illustrates this failure pathway

The important question isn't:

“Did somebody sweep?”

It is:

“Is this actual surface suitable for adhesion of this actual membrane?”

STOP

SURFACE_NOT_ACCEPTABLE

No membrane.

Clean/prepare/remediate.

Re-present.

Decision
KEEP — CRITICAL

This could be one of the cheapest defect-prevention controls in the entire proposal.

7. CWI-06 — Waterproofing System Compatibility

This is the sixth survivor and may be the most important professional-judgement control.

BPC says compatibility needs to be considered between:

substrates → primers → sealants → membranes → overlays.

Different manufacturer systems demonstrate how significant that difference can be.

ARDEX WPM 155 Rapid Plus is a liquid membrane system with a four-hour stated tiling timeframe under its conditions, while other ARDEX sheet systems allow different timelines and details.

SikaTile 111 Rapid Proof, by comparison, requires a minimum two-coat application, specifies its own wet/dry film requirements and drying time, and gives separate instructions if flood testing is required.

Another Sika membrane specifies two 680-micron wet-film coats to achieve its stated dry-film build.

So there can be no credible Victorian assurance rule saying simply:

“Two coats.”

or:

“Primer first.”

or:

“Wait 24 hours.”

The actual rule is:

Identify the selected system and verify its relevant requirements.

Future digital possibilities

The record could eventually know:

MEMBRANE_PRODUCT

→ required substrate

→ required primer

→ required junction system

→ required application rate

→ required DFT/WFT

→ cure/recoat window

→ compatible adhesive/overlay

Then compare those values against recorded installation evidence.

Decision
KEEP — CRITICAL
8. The six-condition gate is therefore
CRITICAL WATERPROOFING INTERFACE GATE — CWIG-01
1 — SUBSTRATE

Can this substrate reliably receive the selected system?

2 — WATER-MANAGEMENT GEOMETRY

Are falls, drainage and containment geometry suitable?

3 — DRAINAGE & PENETRATIONS

Can the membrane reliably connect to wastes and penetrations?

4 — JUNCTIONS & MOVEMENT

Can relevant junction/movement conditions be treated using the selected system?

5 — SURFACE & MOISTURE

Is the exposed surface suitable for membrane application?

6 — SYSTEM COMPATIBILITY

Are the selected components and construction conditions compatible?

Then:

PROCEED

or

PROCEED WITH CONTROL

or

INVESTIGATE

or

REFER

or

ESCALATE

or

STOP
9. What the waterproofer is actually accepting

This sentence could become one of the most important statements in the reform:

Acceptance at the Critical Waterproofing Interface Gate means only that the practitioner has determined that the observable and reasonably measurable conditions presented at the waterproofing interface are suitable for installation of the identified waterproofing system. It does not certify concealed construction, structural compliance, plumbing compliance, design compliance or work outside the practitioner's competence and scope.

This establishes the intended responsibility and liability boundary.

10. What gets deliberately excluded

An independent third-party technical red-team review conducted during development challenged the proposed model for overreach, duplication, responsibility distortion and unsupported technical assumptions. The red-team review was right that our original proposal was too broad.

So these are out of CWIG-01:

full framing certification;
hidden stud-spacing certification;
full plaster/lining certification;
structural adequacy;
plumbing compliance;
builder supervision;
design certification;
future movement prediction;
future-trade behaviour.

They can still have evidence elsewhere.

But they are not being certified by the waterproofer.

11. What about your framing concern?

We don't lose it.

We move it upstream.

For example:

Upstream Wet-Area Construction Record
Carpenter/liner evidence

Before framing/sheeting becomes hidden:

framing configuration;
backing/noggings where required by selected system;
niche construction;
shower-screen backing where specified;
substrate identity;
representative sheet fixing;
base/upturn interface.

The selected lining manufacturer determines its installation rules.

CSR expressly says Aquachek meets wet-area lining requirements when installed according to the Gyprock installation guidance; James Hardie similarly supplies dedicated Villaboard installation and Wet Area Construction documentation.

That is where things such as stud centres and sheet fixing belong.

Not in a universal “waterproofing law”.

12. Then we need Gate B

The research confirms that readiness alone isn't enough.

The red team identified later damage, chemical incompatibility, moisture entrapment, later penetrations and later movement as failure mechanisms that survive a readiness gate.

So:

PRE-CONCEALMENT RELEASE — PCR-01

Before the tiler hides the membrane, verify the things that now exist:

membrane extent;
waterstop connection;
drainage termination;
junction details;
penetration treatment;
visible pinholes/damage;
application/thickness evidence appropriate to system;
cure status;
deviations;
unresolved defects.

BPC specifically identifies pre-finish inspection as useful for observing matters including pinholes, dry-film thickness, transitions, bonding and terminations.

Then:

SAFE_TO_CONCEAL

or

STOP

13. And then a third control
POST-MEMBRANE PROTECTION CONTROL — PMP-01

This is not another full inspection.

It deals with one very practical problem:

the membrane was right when the waterproofer left — then somebody drilled through it.

Record material later penetrations or repairs from:

shower-screen installer;
plumber;
cabinet/joinery installer;
grab-rail installer;
fixtures;
later alterations.

The red-team review specifically identified this as a missing failure pathway.

14. Bathroom and balcony now separate

We should formally split them.

For Class 1 external balconies/terraces over internal spaces, the NCC DTS pathway references AS 4654.1 for materials and AS 4654.2 for design/installation, subject to the scope/exceptions of the relevant provision.

For Class 2–9 buildings, NCC 2025 has strengthened the broader water-management architecture, and BPC specifically identifies stronger apartment-building requirements for exposed surfaces such as balconies.

So:

Internal Wet-Area Assurance Module

and

External / Balcony Waterproofing Assurance Module

should now be distinct.

That's another strong refinement.

15. Sprint decision
Original broad readiness certificate

REJECT

Waterproofer certification of other trades

REJECT

Universal framing checklist inside waterproofing certification

REJECT

Six-condition Critical Waterproofing Interface Gate
RETAIN FOR PILOT DEVELOPMENT
Pre-Concealment Release
RETAIN
Post-Membrane Protection Control
RETAIN FOR TESTING
Separate balcony/external module
REQUIRED

My assessment at this point:

Technical basis for the narrowed internal wet-area architecture: 90% confidence.

Evidence that it will materially reduce real-world Victorian failures: approximately 74% confidence.

The difference matters: the first question is increasingly well supported technically; the second still needs actual comparative pilot evidence.

The architecture we have now

UPSTREAM TRADE WORK

↓

optional/required upstream evidence where justified

↓

CWIG-01 — CRITICAL WATERPROOFING INTERFACE GATE
substrate
water-management geometry
drainage & penetrations
junction/movement treatability
surface/moisture acceptance
system compatibility

↓

WATERPROOFING INSTALLATION

↓

PCR-01 — PRE-CONCEALMENT RELEASE

↓

TILING / FINISHES

↓

PMP-01 — POST-MEMBRANE PROTECTION

↓

PERMANENT WATERPROOFING ASSURANCE RECORD

↓

RISK-BASED INDEPENDENT VERIFICATION / BPC AUDIT WHERE JUSTIFIED
