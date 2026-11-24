# Figure-grounded audit: do central banks control the money supply?

**Mode of this document: `specified`, not `grounded`.** It states what would have to be measured. Per `THE_FORMULA.md`: *"Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."*

**Status of this derivation: a simulation, not a ground reading.** *The Recursive Self-Improvement Trap* says LLM output is *"simulacra"* and *"the truly testable output would need to be derived from the real architecture or working the formula yourself."* This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on. See `05_what_shape_means.md` section 7.

**Sources.** `FRAMEWORK/reference/03-FIGURES_TEXT.md`, `FRAMEWORK/reference/FIGURES_README_canonical.md`, `FRAMEWORK/figures/THE_FORMULA.md`, `FRAMEWORK/figures/THE_SEAT_MAP_Field_Guide_amended.md`, the eight essays, and the public sources recorded in `10_source_ledger.csv`. All were opened this session.

---

## 0. The claim under audit and the residual in effect terms

The ordinary-language question offers two options:

> "Do central banks control the money supply, or mainly influence interest rates and credit conditions?"

Stated as a residual rather than as a choice between labels:

- Let Γ_cb be the central bank's library: its policy rate, the interest it pays on reserves, its balance sheet and asset purchases, its reserve requirements, its published projections.
- Let Γ_bank be the commercial banking and public library: lending decisions, deposit creation, portfolio choice, currency demand.
- Let s index monetary slots: M0, M1, M2, M3, each with a national definition.
- R_s = |Γ_cb(b,a) - o'_s| is the gap at slot s between what the policy frame predicts and what the published statistics return.

The live residual is at the **contact** between Γ_cb and Γ_bank. It is not one hard question with two opposite answers. It is a **union of overlapping conditions** with different anchors: the policy frame's own instruments, the banking frame's deposit creation, the public's money demand, and the measurement conventions that define an aggregate. Fig 9 :55 says *"A bundled problem is usually a union of overlapping conditions, not a list of separate ones."* One lever aimed at "the money supply" clears the region where only one condition holds and leaves the intersections standing.

Symmetry check. "Control" is an **ordered** relation: an input steers a state from x0 to xf, and the arrow does not reverse. Observed co-movement between a policy rate and money growth is **symmetric** (correlation has no arrow). Fig 2 :39 says *"Correlation has valence."* and Fig 2 :40 distinguishes the verdict from the convention. A pooled correlation cannot choose the arrow; a symmetric reading cannot ground an ordered verb. This is not a side objection; it decides what kind of evidence could count.

---

## 1. Domain census (arity, symmetry, scale, then one line per domain)

**R by arity / symmetry / scale.** Arity: four conditions (policy instruments, bank lending, public demand, measurement convention), so a union, not a binary partition. Symmetry: the control claim is ordered; the readings are symmetric, so the arrow must be imported from a mechanism, not read off a correlation. Scale: base money is one scale (the central bank's own balance sheet), broad money is a composed scale, and the transform between them is lossy, so there is a round-trip gap R_T that must be measured rather than assumed (Fig 4 :30).

One line per domain. A domain needs actors, a currency, and a nameable anchor. No nameable anchor means it is not a domain yet.

| domain | actors | currency | anchor (nameable, non-updating) |
|---|---|---|---|
| **D1 Policy frame** | monetary policy committee, central bank balance sheet desk | reserves, the policy rate, remunerated reserves, purchased assets, reserve requirements | the published policy rate and the central bank's own balance sheet (for example the Fed H.4.1); these do not move because a reader changes their theory |
| **D2 Money-creation habitat** | commercial banks, borrowers, depositors, the non-bank public | loans and the deposits they create, currency holdings | published monetary aggregates (H.6, Bankstats), which do not change when a frame forms an opinion about them |
| **D3 Measurement and verification frame** | statistical agencies, data revisions, researchers | residuals, definitions, revisions, confidence intervals | the released series and its revision history; the series is the ground for the reading, not the reader's preferred definition |
| **D4 Public-discourse frame** | commentators, committees, the audience for an either/or | agreement, prestige, the feeling of control | the ground, never agreement; this domain has a legitimate anchor only when it ranges against D2 and D3 |

**Partition or union.** Union (see Fig 9 at lines 54, 55 and 57). The two phrases about controlling money and influencing rates and credit are not two disjoint mechanisms. They overlap: the policy rate influences bank lending, which composes the money stock, which feeds back into the policy frame's projections. The question asks for one lever where there are intersecting conditions.

**Dependency order (Fig 3).** The chain runs: (1) perception, can the frame read the aggregate at slot s? (2) vocabulary, does it have terms for what its instruments afford and what lies in another closure? (3) objective, can it say what would count as progress at that slot? (4) planning, which lever is chosen? (5) learn and carry, does the result survive a change of regime? Fig 3 :18 says the break can be drawn anywhere as a reading, and Fig 3 :19 says *"Optimising a link that already works cannot rescue one that does not."* Here the break is at the middle link: the policy frame has excellent terms for its own instruments but no term for the banking frame's deposit creation, so "control M2" is an objective stated over a quantity not in its vocabulary. Fig 3 :27: *"A link with no instrument is not a link that works. It is a link nobody has looked at."*

---

## 2. Figure census (read before concluding)

| figure | bearing | verdict |
|---|---|---|
| **1 The Agent** | residual per slot, not aggregated; ground is the only metric | per-aggregate verdicts required |
| **2 The Ground** | anchor must not update; triangulation, not negotiation; correlation has valence | control must be tested against published series, not agreement |
| **3 Dependency Chain** | order by dependency; the middle link has no instrument | the break is at vocabulary, not planning |
| **4 The Membrane** | lossy transform between scales; measure the round trip | base money to broad money is not identity |
| **5 Mint Pipeline** | a term is kept only if it pays; a preference is invisible to its frame | "control" held as a preference cannot be checked from inside |
| **6 Closure / Reachability** | mint composes inside closure; only import moves the wall | the policy lever reaches base money, not broad money, from its own closure |
| **7 Room Chain** | agreement compounds, evidence does not | committee consensus cannot corroborate a verdict |
| **8 Union Surplus** | two frames together reach what neither reaches alone | money supply is a union surplus of policy and banking frames |
| **9 Leave / Arrive** | union versus partition; describe the residual before picking a frame | the either/or is a bundled union; unbundle before searching |
| **10 Ground Maintainer** | ground does not decay, channel does; a convention that decides an outcome stops being one | aggregate definitions and targeting conventions are the live failure mode |
| **11 The Habitat** | capability is agent-and-habitat; enumerate the habitat; valence is relative to the residual | central-bank capability is a property of policy frame plus banking habitat |
| **12 The Bond** | a list of ingredients is not a molecule; comparison is a threshold relation | the rate/money pair needs a typed relation, not a list of tools |
| **13 Minimum Viable Set** | set closed, arrangements not; unreachable is a verdict | no figure line names a monetary primitive; honest-stop role only |
| **Operators table** | ⋛ comparison is a threshold relation between two quantities | "control" is not ⋛ over two aggregates |
| **Symbols table** | R is the aim, always a slice; the ground is the anchor | the question must be indexed per slot |

Strained readings are named as such, not smoothed over.

---

## 3. Findings

### F1 - The question is a bundled union, not a partition (decisive for the framing)

Fig 9 :54: *"And when the split lands on a union rather than a partition, unbundle before you search again."* Fig 9 :55: *"A bundled problem is usually a union of overlapping conditions, not a list of separate ones."* Fig 9 :57: *"What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either."*

The question offers "control the money supply" OR "influence rates and credit conditions" as if one answer must win. But the policy rate influences bank lending, bank lending creates deposits, and deposits are most of the money supply. The conditions overlap. A single lever (set a money target) clears the region where only the policy frame binds and leaves the intersections (bank supply and public demand) standing. The honest first move is to unbundle into four slots and return a verdict per slot.

The world source agrees, and it is the strongest substantive corroboration available: the Bank of England's Monetary Analysis Directorate writes that *"the majority of money in the modern economy is created by commercial banks making loans"* and that *"The amount of money created in the economy ultimately depends on the monetary policy of the central bank. In normal times, this is carried out by setting interest rates."* Both clauses are needed. The first refuses the partition; the second refuses the claim that the central bank is absent. This is one source, counted once (Fig 2 :40).

**Refuter:** show that the conditions are disjoint, that is, that setting a monetary aggregate target moves the aggregate one for one with no dependence on bank lending or public demand, measured against a non-updating series. If that holds, the union reading fails and a partition verdict becomes available.

### F2 - The lever reaches its own closure, not the composed quantity

Fig 6 :21: *"MINT composes inside the closure and can never add an atom."* Fig 6 :23: *"No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs."*

Γ_cb contains the price of reserves and its own balance sheet. It does not contain the loan decisions of commercial banks, which are atoms in Γ_bank. Broad money is composed from those atoms. Therefore, from inside Γ_cb, the quantity "M2" is not reachable as a direct object of composition. The policy frame can condition it; it cannot mint it. "Control the money supply" is, in figure terms, an attempt to compose φ* inside a closure that does not hold its atoms.

The engineering corroboration is low-overlap and unusually crisp. Wikipedia's controllability entry (citing Ogata 1997 and Sontag) defines complete state controllability as *"the ability of an external input (the vector of control variables) to move the internal state of a system from any initial state to any final state in a finite time interval"* and adds *"If there are not enough such vectors to span the state space of x, then the system cannot achieve controllability."* It also warns *"Controllability does not mean that a reached state can be maintained, merely that any state can be reached."* Two consequences: (a) the rank of the available instrument matrix decides the question, not the ambition of the target; (b) reaching M0 is not the same capability as holding M2. This corroborates Fig 6 but is not the source of the verdict.

**Refuter:** demonstrate that the policy frame can drive a chosen broad aggregate to an arbitrary target using only its own instruments, with independence from bank lending and public demand, against a published series that does not update on the demonstration. Falsifies F2.

### F3 - Two frames together reach what neither reaches alone

Fig 8 :45: *"Two frames together reach what neither reaches alone."* Fig 8 :48: *"How much two frames draw on the same evidence decides both whether their agreement means anything and whether their union has any surplus."*

The money supply is a union surplus of Γ_cb and Γ_bank. The central bank supplies base money and the price of reserves; commercial banks compose deposits by lending; the public chooses the currency/deposit split. No one frame holds the whole composition. This is why the world source says money supply is *"ultimately determined by complex interactions between non-banks, commercial banks and central banks"* (Money supply, Wikipedia, citing BIS, ECB and Palgrave sources).

This finding is **triangulated** with F2 at low figure overlap: F2 comes from closure and reachability (Fig 6), F3 from the union surplus (Fig 8). They are not the same line restated. They agree that the lever is local and the target is joint.

**Refuter:** exhibit a single frame whose closure alone composes the entire broad money stock, with the other frame's actions provably irrelevant. Falsifies the union-surplus reading and F3.

### F4 - Capability is agent and habitat, not agent alone

Fig 11 :39: *"capability is a property of agent-and-habitat, never of the agent alone."* Fig 11 :40: *"An improvement that does not change contact changes nothing, however much it improves."* Fig 11 :43: *"The habitat is enumerated, never composed."*

A central bank considered alone cannot be assigned "control" or "no control" as a standing property. The answerable question is which contacts changed and whether the goal required them. Enumerate the habitat: central bank, commercial banks, borrowers, depositors, the government bond market, the payments system, foreign holders, the statistical agencies. Fig 11 :49: *"An actor's valence is relative to the residual, not a property it carries."* The same policy rate is a tightening for one residual (inflation) and a contraction of credit for another (bank funding).

This dissolves the common rhetorical move in which "central banks control money" is defended by pointing at base money and "central banks only influence rates" by pointing at M2. Both are per-slot statements with different habitats. They are not contradictory.

**Refuter:** show an agent-only improvement in the policy frame that moves the broad-money residual without any change in contact with the banking habitat. Falsifies F4.

### F5 - The residual must be indexed by slot, not pooled into "the money supply"

Fig 1 :19: *"The residual is indexed by object slot, not aggregated."* Fig 1 :22: *"Aggregating across slots is how a live signal disappears into an average."* Fig 1 :23: *"The ground enters as the only metric."*

"Money supply" is not one slot. M0, M1, M2, M3 and their national variants behave differently: the Money supply entry states *"Narrow measures include those more directly affected and controlled by monetary policy, whereas broader measures are less closely related to monetary-policy actions."* Pooling them into a single "control" verdict throws away exactly the signal that says where the lever works. A global yes/no is a frame-internal summary, not a ground reading.

The statistics corroboration is low-overlap. Simpson's paradox entry: *"a trend appears in several groups of data but disappears or reverses when the groups are combined."* That is the general form of the error. The remedy is per-group reading plus an explicit causal description, which matches Fig 1 :19 and Fig 9 :27-28. **Refuter:** show that all monetary aggregates move in the same direction under the same policy action, at the same horizon, with no reversal under alternative definitions. Falsifies the need for per-slot indexing.

### F6 - "Control" is an ordered claim; the evidence is commonly symmetric

Fig 2 :39: *"Correlation has valence."* Fig 2 :40: *"disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool"* (the verdict half); Fig 2 :41 *"efficient for a convention: agreement about a shared meaning is the product, not a corruption of it"* (the convention half).

A correlation between the policy rate and money growth is observed from one pooled series, often produced by the same institution that reports the policy action. That is one evidence pool. It is efficient for the convention "we shall call this the monetary transmission mechanism" and worthless as a verdict on the arrow. To ground the verb "control" you need an instrument that discriminates the arrow, which is an import from an identification frame, with provenance and a shadow test (Fig 8 :50-52).

**Refuter:** produce a symmetric reading that nonetheless licenses the ordered verb without an imported instrument. If that is possible, F6 is wrong.

### F7 - A definition is a convention, and a convention that decides an outcome has stopped being one

Fig 10 :47: *"a convention that decides an outcome has stopped being one."* Fig 10 :49: *"Declaring a meaning does not ground it."* Fig 10 :24: *"the ground does not decay, the channel does"*

Which assets count as money is a declared meaning. M1 versus M2 is a convention, useful for shared reference. When a central bank targets an aggregate, the convention starts deciding outcomes: banks and the public alter their behaviour around the measured boundary, and the historical regularity breaks. Goodhart's law is the low-overlap corroborator, and it was originally a statement about monetary control: Goodhart 1975, quoted in the Wikipedia entry, *"Any observed statistical regularity will tend to collapse once pressure is placed upon it for control purposes."* The entry's general form is *"When a measure becomes a target, it ceases to be a good measure"* and it explicitly notes the law was used to criticize UK monetary targeting of broad and narrow money.

This is a figure/World convergence at genuinely low overlap (1975 UK monetary policy, later generalized to accounting and evaluation). It corroborates Fig 10 :47 without deriving it. The figure census stays primary.

**Refuter:** show a monetary aggregate whose relation to its target survives sustained targeting without behavioural adaptation, against a series that is not revised in response to the targeting. Falsifies F7.

### F8 - The anchor must not update on the theory

Fig 2 :29: *"An anchor is whatever settles the question and does not change its answer because of what any frame thinks. A measurement, an experiment, a counter, a market, a patient outcome."* Fig 2 :30: *"you push on it, it is not an anchor."* Fig 2 :35: *"Alignment is triangulation, not negotiation. A mirror cannot correct you."* Fig 10 :52: *"Bring a characterised residual, never the source."*

The anchor here is the released series and its revision history, measured by an agency whose definition may change but whose published number does not change because the policy frame wants a particular verdict. Asking the committee whether it feels in control is mutual update (Fig 2 panel 1), not triangulation. Asking two commentators who read the same central bank statement is one evidence pool (Fig 2 panel 2). Both are collapses the figures name.

The cognition corroboration is low-overlap. Langer's illusion of control is *"the tendency for people to overestimate their ability to control events"*; the Wikipedia entry reports a study of City of London traders in which *"Those who were more prone to the illusion scored significantly lower on analysis, risk management and contribution to profits."* It predicts that a feeling of control is not evidence of control, and that the feeling can be strongest where feedback is noisy. This corroborates the anchor discipline; it does not derive it, and it is one witness from one field.

**Refuter:** exhibit a case where a policy frame's self-report of control tracks the published series better than an independent reading of the same series. Falsifies the need for an external, non-updating anchor.

### F9 - The sought-for shape is a preference until it is bound

Fig 5 :48: *"Its own output is never a measure of success."* Fig 9 :32: *"you get a kind of thing, never the answer itself"*

A policy frame searching for "control" holds that shape as a preference, not as a term. No internal check runs on the direction of the question. The remedy from `THE_FORMULA.md` "Direction" is a discipline: write down what an answer would look like, bind it, let it accrue a residual. That is why section 0 binds the four-slot shape before any verdict, and why the refuter in section 4 was written before the conclusion. This is not an honesty ornament; without the bound shape the derivation could aim the refusal at whichever answer it did not want.

**Refuter:** show that a frame can certify the direction of its own question from its own output. Falsifies F9 and the need for the pre-registered refuter.

### F10 - No figure line governs the quantitative question (declared gap)

Fig 9 :32: *"you get a kind of thing, never the answer itself."* Fig 13 :134: *"It can say the answer is out of reach with the library as it stands"* Fig 8 :39: *"So a search that finds nothing is never a proof of absence."*

After a genuine census no figure line returns a fraction of M2 under central bank control, a coefficient, a horizon, or a universal country-invariant answer. The figures constrain the shape (which quantities are in which closure, what counts as an anchor, per-slot indexing, union structure). They do not return a number. The honest report is `gap`, of the unreachable-at-this-budget kind rather than underivable in principle: an empirical instrument could settle it for a named jurisdiction and aggregate, but this derivation took no measurement. Unreachable is a verdict, not a silence.

The six-term substrate of Fig 13 is **not** applied to monetary quantities. An earlier draft mapped gradient onto the policy rate differential and network onto the interbank market. That was strained and is retracted in section 6. Fig 13 governs what composes at any level (a closed set of kinds, open arrangements), not which economic objects exist.

**Refuter:** produce a figure line that, after re-census, directly governs a monetary magnitude or selects a monetary primitive. Falsifies the gap and upgrades the claim.

### F11 - What survives, with mode attached

| claim | mode | figure / source |
|---|---|---|
| The either/or is a union of overlapping conditions, so verdicts are per slot and never averaged | `general` structural | Fig 9 :54, :55, :57 |
| "Control" must be indexed by aggregate and tested against a non-updating published series | `specified` | Fig 1 :19, :22; Fig 2 :29 |
| The policy frame's own instruments reach base money and the price of reserves, not broad money, from inside its closure | `specified` | Fig 6 :21, :23; triangulated with the engineering controllability source |
| Broad money is composed jointly by the policy and banking frames; it is a union surplus | `specified` | Fig 8 :45, :48; Fig 11 :39 |
| A monetary definition is a convention; using it as a target can break the regularity | `general` | Fig 10 :47, :49; corroborated by Goodhart 1975 |
| In normal times the central bank mainly sets the price of reserves and conditions credit; "controls the money supply" is accurate only for base money and the policy rate | `specified`, ungrounded, candidate | Bank of England 2014 + the figure shape; this is a provenanced binding, not a figure derivation |
| A universal quantitative answer (one coefficient, one fraction, one horizon) | `gap` | Fig 9 :32; Fig 13 :134; Fig 8 :39 |

---

## 4. Pre-registered refuter (written before the conclusion)

Required by the seat map: *"a falsifier written before the run is a design instrument, not only an honesty device."*

The shape claim is refuted if any of the following holds:

1. **Union fails.** The two conditions are shown to be disjoint: a money aggregate target moves the aggregate one for one with no dependence on bank lending or public demand, against a published non-updating series.
2. **Closure fails.** The policy frame drives a chosen broad aggregate to an arbitrary target using only its own instruments, independently of the banking frame, with a non-updating anchor.
3. **Per-slot indexing fails.** All aggregates move in the same direction at the same horizon with no reversal under alternative definitions.
4. **Arrow fails.** A symmetric reading licenses the ordered verb "control" without an imported identification instrument.
5. **Convention fails.** An aggregate's relation to its target survives sustained targeting without behavioural adaptation and without revision of the series in response to the target.
6. **Anchor fails.** The policy frame's own self-report of control predicts the published series better than an independent reading of the same series.
7. **Figure gap closes.** A figure line is found that directly governs a monetary magnitude or selects a monetary primitive after re-census.

If any fires, the corresponding finding is withdrawn and the verdict is re-run from the census. Until one is run, no part of this may be labelled `grounded`.

---

## 5. Recommendation

1. State the union and the per-slot indexing before any verdict; the either/or is the wrong object (F1, F5).
2. Say exactly which closure each verb applies to. "Control" for the policy rate and base money; "condition" or "compose jointly" for broad money (F2, F3, F4).
3. Put the derivation before the binding, with dates, so the import/provenance distinction is checkable (Fig 8 :50-52). The Bank of England 2014 article is an import from the economics frame with a source gate, not a figure result.
4. Test against published series that do not update on the claim; do not use committee self-report or commentator agreement (F8).
5. Record the gap honestly. No figure returns a number (F10).
6. Fig 4 :25: *"A recording carried upward looks like knowledge and is a description of one occasion."* Send the generator, the derivation and the refuter, not a one-occasion verdict about a particular central bank.

---

## 6. Canonical usage check and retraction log

Two usage rules were read after the first four sections and govern how the figures may be used.

- `FRAMEWORK/reference/FIGURES_README_canonical.md`: *"They outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary."* Also *"a reading that makes one contradict another has misidentified its domain, not found a flaw"*, and the limit: the framework returns *"what a missing thing would have to look like (a shape, not a name)"*, then stops where instruments cannot distinguish and records the lineage. *"Indiscernibility is not identity."*
- `FRAMEWORK/figures/THE_FORMULA.md`: mode rule, the refusal-before-mint order, and step 7's three questions SEARCHED / INWARD / OUTWARD, kept distinct.

### Retractions and confirmations

| earlier reading | status after the canonical check |
|---|---|
| First draft: question is a partition, answer one side | **Retracted.** Fig 9 :54-57 governs a bundled union. Kept visible as F1. |
| First draft: mapped Fig 13 six terms onto monetary policy (gradient = policy rate differential, network = interbank market) | **Retracted as a strain.** Fig 13 governs cross-kind composition and level-relative irreducibility; it does not name economic primitives. Re-census assigns it the honest-stop role only. Matches the README's re-census rule. |
| First draft: pooled M2 growth as the verdict | **Retracted.** Fig 1 :19, :22 and the Simpson's paradox source require per-slot reading. Kept as F5. |
| First draft: "the figures forbid saying central banks control anything" | **Narrowed and kept.** The figures constrain closure, not the economics. The world source licenses "control" for the policy rate and base money as a provenanced binding. The prohibition is on naming the broad-money mechanism without provenance. |
| First draft: Goodhart's law is just an economics fact | **Corrected.** It is a low-overlap corroborator of Fig 10 :47 and belongs in the WORLD section with provenance, not in the TETHER section as a figure line. |
| First draft: illusion of control explains the whole question | **Narrowed.** One cognition witness on the anchor discipline only. It cannot derive the figure verdict and is not counted twice. |
| F10 gap reading | **Canonically confirmed.** *"you get a kind of thing, never the answer itself"*; *"Unreachable is a verdict here, not a silence."* |
| F7 convention reading | **Canonically confirmed** by Fig 10 :47 and :49, with Goodhart 1975 as external corroboration, not as authority. |

### The three questions of step 7, kept distinct

- **SEARCHED.** Was a governing figure line merely unfound? A genuine census of all 13 figures, both tables and the formula was run. A line that governs a monetary *magnitude* was not found. The search was not endlessly extended; it was stopped at the census and the gap declared.
- **INWARD.** Can the instrument be sharpened in our own terms? Yes, partially: split M0/M1/M2/M3, name the jurisdiction, name the horizon. That is still within the policy frame's own vocabulary and cannot by itself import the banking frame's deposit-creation atom.
- **OUTWARD.** Can an import from a frame whose closure differs supply the missing mechanism? Yes. The Bank of England 2014 monetary analysis article supplies the atom "commercial banks create deposits by lending" with a source gate (published institutional research) and a shadow test (it explains why the quantity target failed to compose). It is debited against independence because it is one witness in one economics pool. It does not move the figure wall; it moves the policy frame's reach.

INWARD and OUTWARD were run as two tracks and never read against each other. Importing against the budget limit was avoided: the gap is empirical, not underivable in principle, so no extra primitive was minted to fill it.

### Updated verdict

The shape survives: a union of conditions, a non-updating per-slot anchor, a lever local to the policy closure, a broad quantity composed jointly with the banking habitat, and a convention trap around definitions. The specific economic claim (banks create most money, the central bank normally sets the price of reserves) does not come from the figures. It is a provenanced import, corroborated but not established by one low-overlap engineering analogy, one 1975 monetary rule, one cognition result and one statistics result. Strains after re-census: one live type question, whether "control" can be rebuilt as a threshold relation over two quantities (Operators :51 defines ⋛ as *"a goal is a comparison, which is why a vocabulary without it cannot state one"*), which needs an instrument, not an argument. Mode `specified`, ungrounded, candidate.
