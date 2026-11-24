# Figure-grounded audit: what evidence should count most when economic theories disagree

**Mode of this document: `specified` on the per-evidence-kind verdicts, `general` on the structural
shape. Not `grounded`.** Per `THE_FORMULA.md`: "Mode. general · specified · grounded. State which.
Accepted means the ground settled it; otherwise candidate."

**Status of this derivation: a simulation, not a ground reading.** *The Recursive Self-Improvement
Trap* (essay, fetched 2026-11-23) says LLM output is "simulacra" and "the truly testable output would
need to be derived from the real architecture or working the formula yourself." This document is a
simulated derivation checked for internal consistency against the figures. It cannot settle the
question it reports on. See `05_what_shape_means.md` §6.

**Sources.** Local: `FRAMEWORK/reference/03-FIGURES_TEXT.md`, `FIGURES_README_canonical.md`,
`FRAMEWORK/figures/THE_FORMULA.md`, the seat map field guide. Public pages fetched 2026-11-23 are
listed in `10_source_ledger.csv`. Figure citations are verbatim substring quotes from
`03-FIGURES_TEXT.md` and cited as `Fig N :line`.

---

## 0. The residual in effect terms

Two or more economic theories disagree. Each is a frame: a bounded system with a library, a
prediction and a closure. The question asks which of five evidence kinds should carry **verdict
weight** in that disagreement: historical cases, natural experiments, randomized trials,
mathematical consistency, predictive accuracy.

Arity: at least two frames plus a meta-question about ranking evidence kinds. Symmetry: the five
kinds are not interchangeable, and which one bears is a function of what the disagreement is about,
not an intrinsic rank. Scale: theory choice is second order relative to inference inside one theory.

**The sought-for shape is bound as an ordinary term before the run** (`THE_FORMULA.md` "Direction"):

> **decisive evidence** = evidence whose standing does not depend on which theory holds it, whose
> source is independent of the competing frames, and which registers contact with the ground for
> the specific question.

Without this binding the check would run on the mechanism (which evidence is easier to collect)
and not on the direction of the question (which evidence is entitled to decide). Committing the
definition before the run makes it refusable.

---

## 1. Domain census

R by arity / symmetry / scale is given in §0. One line per domain, with actors, currency and anchor.
A domain with no nameable anchor is not yet a domain.

| domain | actors | currency | anchor | question type |
|---|---|---|---|---|
| **D1 Ground / anchor** | the world; measurement, experiment, market, outcome | residual `R` against the ground; the anchor does not update | the ground itself | **partition**: which candidate is ground for this question and which is frame-internal |
| **D2 Independence / frames** | the competing theories and their evidence pools | independence = how little the frames draw on the same evidence | independence, never agreement | **union collapse** when frames share one pool (Fig 2 collapse 2) |
| **D3 Prediction / settlement** | models, predictions `Γ(b,a)`, observations `o'`, held-out data | `R = |Γ(b,a) − o'|` out of sample; in-sample fit is frame-internal | the ground via out-of-sample contact | **partition**: ground contact vs frame-internal coherence |
| **D4 Instrument design** | interventions, assignment mechanisms, records | causal identification; comparison conditions | the world's actual response to the instrument | **union**: RCT, natural experiment and historical case are different instruments, not one scale |

**Order by dependency (Fig 3).** Establish what the question is constitutively about (D1, anchor
legitimacy) before judging independence (D2); judge independence before scoring ground contact (D3);
choose an instrument last (D4). Fig 3 :19: "Optimising a link that already works cannot rescue one
that does not." An RCT with excellent randomization cannot rescue a question about which the trial
measures the wrong axis.

**Describe before selecting (Fig 9).** Fig 9 :27: "describe it before you go looking, or any frame
you pick will seem to fit." The five evidence kinds are not picked first and then justified; the
disagreement is described in effect terms and the eligible kind is then looked up.

---

## 2. Figure census

Figures that bear, with the verdict each returns. Strained readings are named in §3, not smoothed.

| figure | bearing | verdict |
|---|---|---|
| **1 The Agent** | ground is the only metric; frame-internal quantities do not count | consistency and in-sample fit disqualified as verdict |
| **2 The Ground** | anchor test; independence; agreement from one pool disqualifies | the decisive item must be an unmoving, independent anchor |
| **3 Dependency Chain** | ordered by dependency; below the break is a reading of nothing | anchor legitimacy before independence before instrument |
| **4 The Membrane** | round trip and its gap must be measured | a summary ranking is a lossy condensation, not the figure set |
| **5 Mint Pipeline** | MDL bargain; "explains one occasion perfectly" fails | a historical case that fits one occasion is not a verdict |
| **6 Closure / Reachability** | instruments improved from worse instruments | evidence kinds are instruments, not a fixed hierarchy |
| **7 Room Chain** | agreement is variation, not a verdict | pooled expert agreement cannot decide a disagreement |
| **8 Union Surplus** | convergent derivation vs adopted import separated only by record | independent corroboration requires separate derivation, not a shared pool |
| **9 Leave / Arrive** | describe before looking; filters vs witnesses | no universal ranking licensed; case ranking is determinate |
| **10 Ground Maintainer** | verifier non-access; declare stakes | send the residual and refuter, not the framework interior |
| **11 The Habitat** | capability is agent-and-habitat; contact cascades | enumeration of the disagreement's habitat before choosing evidence |
| **12 The Bond** | the arrangement carries the meaning; isomer vs functional group | the five kinds are not one ordered chain (see `06`) |
| **13 Minimum Viable Set** | independence applied to a set: overlap means fewer members | low overlap between evidence kinds is the resource |
| **Operators / Symbols tables** | `R` is the aim; the ground is the anchor; `o'` is the observation | terms used consistently with their definitions |

---

## 3. Findings

### F1 - The ground settles it, not agreement (governs D1)

Fig 2 :29: "An anchor is whatever settles the question and does not change its answer because of what any frame thinks."
Fig 2 :30: "If it moves when you push on it, it is not an anchor."
Fig 2 :29: "A measurement, an experiment, a counter, a market, a patient outcome."
Fig 1 :23: "The ground enters as the only metric."

The anchor test is a filter, not a name. A candidate evidence kind earns verdict weight only if, for
the specific disagreement, it does not move when either theory pushes on it. Mathematical
consistency fails the test when the two theories are each internally consistent: it cannot move,
but it cannot discriminate either. Fig 2 :36: "An anchor is legitimate when the question is
constitutively about it." So an RCT is an anchor for a question constitutively about the effect of
that intervention; a historical record is an anchor for a question constitutively about that
history.

**Mode:** `general` structural claim, `specified` per case. **Status: triangulated.** Low overlap:
Fig 1 (agent metric) and Fig 2 (alignment geometry) are separate figures, and the Nobel 2019 press
release (economics) plus the SEP entry (philosophy of science) corroborate from outside the
framework. **Refuter:** show a candidate that settles a disagreement while changing its answer when
one theory pushes on it, or show that consistency between two rival theories discriminates between
them without any ground contact.

### F2 - Mathematical consistency is frame-internal and cannot be a verdict (governs D1, D3)

Fig 1 :27: "They are frame-internal. A frame cannot score itself with a quantity it also produces."
Fig 1 :26: "predicates minted, and credibility accrued"
Fig 1 :25: "coverage, and compression achieved"

A theory's internal consistency is a property the producing frame also scores. Under Fig 1 it is
the same genus as "coverage, and compression achieved": a frame-internal measure that cannot be the
ground. The MDL bargain sharpens this. Fig 5 :26: "does the new term cost less to state than the
confusion it removes?" Simplicity and coherence price the description, not the contact. Box's
aphorism, from the statistics page fetched 2026-11-23: "models should be judged based on their
utility rather than their absolute correctness."

Consistency is not worthless. It is a validity constraint and a convention, the thing that makes a
claim statable, not the thing that makes it true. Fig 2 :41: "efficient for a convention: agreement
about a shared meaning is the product, not a corruption of it." Confusing the two is the named
output-layer defect.

**Mode:** `specified`; universal across economic disagreements within the framework.
**Status: triangulated** (Fig 1 + Fig 5 + SEP on falsification and "what counts as evidence" + Box).
**Refuter:** exhibit an economic disagreement settled by a purely consistency-based argument whose
outcome changes when an independent ground is consulted. If one exists, Fig 1 :27 has been applied
to the wrong quantity and the census must be redone.

### F3 - Predictive accuracy counts only against an independent ground (governs D3)

Fig 1 :23: "The ground enters as the only metric."
Fig 5 :43: "and so does a term that explains one occasion perfectly"
Fig 6 :32: "An instrument is not built from a description. It is improved from a worse instrument already returning something."

Predictive accuracy is the closest of the five to a ground metric, because a prediction can be
range-checked against an observation. But in-sample accuracy is just "compression achieved" (Fig 1
:25) and is disqualified with it. Accuracy counts when the data were not available to the theory
that is being tested and the source is independent of that theory's pool. The SEP entry (fetched
2026-11-23) states the Popperian limit precisely: "The confirmation of a test implication does not
verify a hypothesis." So predictive accuracy earns corroboration, not verification; it is a
witness, never a proof.

**Mode:** `specified`. **Status: triangulated** (Fig 1 + Fig 5 + Fig 6 + SEP + Box on incompatible
models making accurate predictions). **Refuter:** show in-sample fit carrying verdict weight across
two low-overlap instruments, or show a confirmed prediction that verifies a theory.

### F4 - Independence, not agreement, is what makes evidence count (governs D2)

Fig 2 :31: "Independence, between two frames, is how little they draw on the same evidence."
Fig 2 :32: "is what makes agreement mean something."
Fig 2 :40: "agreement about the world is worthless when the agreeing frames share an evidence pool"
Fig 2 :42: "Buy independence in proportion to the cost of being wrong."
Fig 7 :35: "A room's agreement is variation, not a verdict. Selection between rooms is where the ground votes."

Agreement between two theories that were trained on, or selected by, the same data set is the pool
talking. It is Fig 2's collapse 2 (hidden shared source), not corroboration. Two studies using the
same data and the same specification are one witness spelled twice. Independence is bought in
proportion to the cost of being wrong, which is why "count most" cannot be answered by counting
heads.

Fig 8 :50: "Two frames can hold the same atom by convergence, reaching it separately, which is corroboration at maximum independence." The record distinguishes convergent derivation from adopted import; contents alone do not. An expert consensus formed by reading the same literature is an adopted import, not convergent derivation.

**Mode:** `general`. **Status: triangulated** (Fig 2 + Fig 7 + Fig 8 + AEA 2010 on research design).
**Refuter:** demonstrate a valid verdict produced by two frames known to draw on one evidence pool,
with the verdict unchanged when the pool is removed.

### F5 - Experiments are anchors only for questions about the axis they measure (governs D4)

Fig 2 :36: "An anchor is legitimate when the question is constitutively about it."
Fig 2 :37: "It is only an instrument for is this code correct, and instruments can be wrong on axes they do not measure."
Fig 6 :32: "An instrument is not built from a description. It is improved from a worse instrument already returning something."

Randomized trials are the anchor archetype for a question constitutively about the effect of a
randomized intervention. The Nobel 2019 press release (fetched 2026-11-23) describes the
field-experiment method: "often best answered via carefully designed experiments among the people
who are most affected." AEA 2010 (fetched 2026-11-23): "the primary engine driving improvement has
been a focus on the quality of empirical research designs."

But an instrument can be wrong on axes it does not measure (Fig 2 :37-38). An RCT with perfect
internal validity says nothing about external validity, general equilibrium effects, or the
mechanism the rival theory disputes. Natural experiments gain world contact when assignment is
outside investigator control; the natural-experiment page (fetched 2026-11-23) notes the gain: "the
former includes a comparison of conditions that pave the way for causal inference, but the latter
does not." Fig 2 :6-7 names the corresponding failure genus, "collapse 2: common cause" and
"(hidden shared source)": an unenumerated confounder is a shared source hiding inside the design.

**Mode:** `specified`, conditional on the question. **Status: triangulated** for the shape (Fig 2 +
Fig 6 + Nobel + AEA + natural-experiment source). Each individual trial or natural experiment is
`single-source` until independently replicated. **Refuter:** show an RCT whose randomized axis is
demonstrably not the axis in dispute still settling the disagreement without import.

### F6 - Historical cases count when the question is about that history (governs D4)

Fig 9 :27: "describe it before you go looking, or any frame you pick will seem to fit."
Fig 5 :43: "and so does a term that explains one occasion perfectly"

A historical case is a record in the world and can be an anchor for a question constitutively about
that case. For a general theory, fitting a case after the theory is in hand is projection: any frame
will seem to fit. *The Hard Problem is About Source* (essay, fetched 2026-11-23): "If several paths
create the same behavior, then behavior is a projection with lossy information." The right response
is a discriminating instrument, not a better story. A case that discriminates between two theories
on a prediction committed before the case is examined is corroboration; the same case used to
accommodate both afterwards is not.

**Mode:** `specified`. **Status: single-source** for the figure support (Fig 9, with Fig 5 as a
second framing). **Refuter:** exhibit a historical case that discriminates between two theories on
a pre-registered prediction and is then confirmed by an independent instrument, while keeping the
two theories' evidence pools separate.

### F7 - No universal ranking is licensed; the case ranking is determinate (governs all)

Fig 2 :36: "An anchor is legitimate when the question is constitutively about it."
Fig 9 :4: "are not one hard question but several well-formed ones. Split it rather than search."
Fig 9 :60: "Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."

If a ranking of the five kinds were needed for every economic disagreement, the ranking would have
to be a single anchor independent of what the questions are about. Fig 2 :36 forbids that: anchor
legitimacy is question-constitutive. Fig 9 :4 permits that a "disagreement" is actually several
well-formed questions and should be split before any evidence is ranked. Fig 9 :60 bars letting a
methodological preference (randomization is gold standard, prediction is king) hand you the verdict.

So the universal-ranking claim is a **gap**, plainly stated: the figures do not license one fixed
ordering of the five. The per-case ranking is **determinate**: for a given disagreement, whichever
candidate is the independent, unmoving, ground-contacting anchor for what that question is about
counts most. The SEP entry's pluralism corroborates: "The lack of a singular method across all
disciplines of science is a reason for its reliability as a practice, not a mark against it."

**Mode:** `general`. **Status: triangulated** (Fig 2 + Fig 9 + SEP). **Refuter:** show a figure line
that licenses one fixed ordering of all five kinds for every economic disagreement, or show that a
methodological preference can be a witness for the verdict.

---

## 4. Pre-registered refuter

Written before the conclusion, per the standing instruction that a falsifier written before the run
is a design instrument. The shape claim is refuted if any of the following holds:

1. One evidence kind is demonstrated to be an anchor for every economic disagreement regardless of
   what the questions are about (breaks Fig 2 :36 anchor legitimacy).
2. Mathematical consistency is shown to change contact with an independent ground (breaks Fig 1
   :27 frame-internal disqualification).
3. Agreement between frames sharing one evidence pool is shown to carry verdict weight (breaks Fig 2
   :40 and Fig 7 :35).
4. A case is found where a theory judged by out-of-sample prediction on an independent ground loses
   to a rival judged only by internal consistency (breaks the D3 verdict).
5. The five kinds reduce to one scale in which more of one compensates for less of another (breaks
   the partition/union reading; see `06_isomers_and_order.md`).

If any fires, the census is wrong and the claim is withdrawn. Until one is run, nothing here is
`grounded`.

---

## 5. Recommendation

1. State the disagreement in effect terms before ranking anything (Fig 9 :27).
2. Ask what the question is constitutively about (Fig 2 :36). That selects the anchor family.
3. Check independence of the source from both frames (Fig 2 :31, :40); discard pooled agreement.
4. Check ground contact: out of sample, against data unavailable to the theory being tested (Fig 1
   :23, Fig 5 :43).
5. Choose the instrument last and name the axis it measures (Fig 6 :32, Fig 2 :37).
6. Keep verdicts per domain separate. Never average "evidence strength" across D1 to D4.
7. Use methodological preferences as filters for the research budget only (Fig 9 :60).

Record what was unreachable, what was imported and what would reverse the result.

---

## 6. Canonical usage check and retraction / confirmation log

Two local canonical sources were read after the first five sections and govern usage:
`FRAMEWORK/reference/FIGURES_README_canonical.md` ("the quotes are the authority, not this
summary"; "a reading that makes one contradict another has misidentified its domain, not found a
flaw") and `FRAMEWORK/figures/THE_FORMULA.md` (mode rule; step 7 SEARCHED / INWARD / OUTWARD).

| earlier reading | status after the canonical check |
|---|---|
| "Randomized trials should be ranked first universally" | **Retracted.** Fig 2 :36 makes anchor legitimacy question-constitutive.Ranked first only for questions constitutively about the randomized effect. |
| "Predictive accuracy is the same as ground contact" | **Narrowed.** In-sample accuracy is "coverage, and compression achieved" (Fig 1 :25) and is frame-internal. Only out-of-sample accuracy against an independent source counts. |
| "Consistency is worthless" | **Narrowed.** It is disqualified as verdict, but legitimate as convention (Fig 2 :41). Both claims are kept so neither is silently lost. |
| "Natural experiments are just weaker RCTs" | **Retracted.** Fig 6 :32 makes them different instruments improved from different predecessors, not points on one scale. |
| "The five kinds form a hierarchy" | **Refused.** Fig 9 :60 + Fig 2 :36. The universal ranking is a gap; the case ranking is determinate. |
| Apparent strain Fig 9 :4 (split) vs the union reading of a disagreement | **Not strained after re-census.** Fig 9 :4 governs a disagreement made of several well-formed questions; the union reading governs a single compound with two conditions. Different objects, resolved by asking whether one ground settles all parts. |

### Which question the formula would ask next

SEARCHED: is a governing line already in the figure set and simply unfound? Yes, Fig 2 :36 closes
the universal-ranking question, so no import is owed. INWARD: sharpen the anchor test with a
discriminating instrument for a specific economics disagreement. OUTWARD: not needed for the shape;
only a case-specific ground reading would import a new atom, and importing against a budget limit
adds an atom that was not needed.

### Updated verdict

The shape survives: decisive evidence is an independent, unmoving, question-constitutive anchor that
registers ground contact. Mathematical consistency and pooled agreement are disqualified as verdict;
predictive accuracy counts only out of sample; experiments and historical cases count when they are
the anchor for what the question is about. Strains after re-census: none hidden. The universal
ranking remains an honest `gap`.
