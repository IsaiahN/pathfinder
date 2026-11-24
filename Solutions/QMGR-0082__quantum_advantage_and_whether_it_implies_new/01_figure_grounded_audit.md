# Figure-grounded audit: does quantum advantage imply new physical principles?

**Mode of this document: `specified`, not `grounded`.** It states what would have to be measured.
Per `THE_FORMULA.md`: *"Mode. general · specified · grounded. State which. Accepted means the ground
settled it; otherwise candidate."*

**Status of this derivation: a simulation, not a ground reading.** *The Recursive Self-Improvement
Trap* (read 2026-11-23): LLM output is *"simulacra"* and *"the truly testable output would need to be
derived from the real architecture or working the formula yourself."* This document is a simulated
derivation checked for internal consistency against the figures. It cannot settle the claim it
reports on. No quantum experiment was run, no circuit was sampled, no complexity proof was checked.
See `05_what_shape_means.md` section 6.

**Sources.** `FRAMEWORK/reference/03-FIGURES_TEXT.md` (all figure quotes), `FIGURES_README_canonical.md`,
`60_FIGURES_AS_METALAWS.md`, `FRAMEWORK/figures/THE_FORMULA.md`, the eight essays by Isaiah N, and the
world sources opened on 2026-11-23 and listed in `10_source_ledger.csv`.

---

## 0. The residual, in effect terms

> A physical device completes a task in resources that the best known classical procedure cannot
> match. The event is registered. What is contested is the *kind* of explanation it owes. One reading
> says the device is doing something the existing quantum account cannot contain, so a new physical
> principle must be added. Another says the device is a new arrangement of the existing quantum
> account, and the barrier lives in the classical description, not in physics.

Stated as an effect, with no cause named: **a separation in accessible resources is observed between
two descriptions of one event, and the explanation of that separation is claimed to require a new
element in the physical inventory.** The question is not whether the speedup happens. It is whether
the speedup is a term inside `closure(Γ_quantum)` or a term that forces an import into physics.

What an answer would look like, bound as an ordinary term before the run (Formula "Direction"):
*either* "advantage is a composed term of the quantum closure, and no physical atom is owed",
*or* "advantage is a term out of that closure, and a principle P is owed such that P reproduces all
settled quantum predictions and additionally predicts a deviation at the untested complexity
frontier". The second sentence is a shape until a deviation is measured; it is bound here so it can
accrue residual like anything else rather than stay an invisible preference.

---

## 1. Domain census, written before any figure line was chosen

### 1a. R by arity, symmetry and scale

- **Arity:** one observed separation relates three things: the device output, the cost of the best
  classical account, and the physical theory that predicts the output. That is a two-frame seam with
  a shared event, not a single field with two readers. It becomes a **union compound** (Fig 9 :54-58):
  a physics-anchored half and a complexity-anchored half, each with its own ground.
- **Symmetry:** not interchangeable. Swapping the frames is not a symmetry operation, because the
  classical side is an absence-of-algorithm claim rather than a positive construction, while the
  quantum side is a positive prediction with a measured distribution. Two reports of the same speedup
  from the same experiment are one report, not two witnesses (Fig 2 :18-21).
- **Scale:** four distinct scales, and the residual changes between them. Circuit step (gates,
  depth). Device (qubits, fidelity, sampling run). Complexity class (asymptotic BPP versus BQP,
  where a finite experiment cannot decide the claim). Theory (the closure of quantum mechanics versus
  a closure with an added physical principle). A verdict taken at one scale does not transfer to
  another without an explicit bracket.

### 1b. One line per domain: actors, currency, anchor

| domain | actors | currency | anchor (nameable?) |
|---|---|---|---|
| D1, the device experiment | qubits, gates, noise, measurement, verification protocol | samples, fidelity, circuit depth, wall time | yes: the observed output distribution and its agreement with quantum predictions |
| D2, the physics frame (standard QM) | Hilbert space, amplitudes, unitary dynamics, Born rule, entanglement, contextuality | predicted probabilities, fidelity, conserved quantities | yes: experiment, the same ground as D1 for the same event |
| D3, the complexity frame | algorithms, simulators, BPP/BQP/PH, conjectures such as BPP not equal to BQP, one-way functions | runtime, sample complexity, asymptotic resources | yes but different in kind: proofs and reductions, not a laboratory measurement |
| D4, the metatheory frame (Tether) | Γ, atoms(Γ), bonds, closure(Γ), R, ground, seats | residuals and imports | yes: the figures as metalaws, plus the ground for any measurement claim |
| D5, the verification and outreach frame | expert readers, referees, submission venues | agreement and residual | yes: the ground, never agreement (Fig 2 :35) |

A domain with no nameable anchor is not yet a domain. All five have one. D1 and D2 share an anchor
but are not one frame: D1 reads it as an instrument outcome, D2 reads it as a theory prediction. D3
has a proof anchor, which is why an asymptotic claim cannot be settled by a finite D1 reading.

### 1c. Partition or union

D2 and D3 form a **union compound**: "quantum advantage" is the intersection of a physical claim
(the device follows quantum predictions) and a complexity claim (no efficient classical account is
known or provable under assumptions). A single lever that clears the region where only one condition
holds leaves the intersection standing (Fig 9 :55-58). This is the exact shape of the common error:
clearing the complexity condition ("no classical simulator found") is treated as if it cleared the
physics condition ("quantum mechanics fails"). It does not. The compound needs its own loop, with
both anchors read separately and never averaged (Fig 1 :19, :22).

### 1d. Order by dependency (Fig 3)

1. Verify the device output against the quantum prediction (D1 anchor).
2. Only then assert the classical hardness of simulating that output (D3 anchor), and mark whether
   it is a theorem, a conjecture, or a failure of known methods.
3. Only if step 1 returns a deviation does the "new physical principle" question arise at all.
4. Decide import into physics (D4), with a source gate and a shadow test.

Effort spent at step 4 before steps 1 and 3 arrive is effort above a break: a reading taken there is
not a weak reading, it is a reading of nothing (Fig 3 :20-23). The dependency order is the main
structural result of this census.

---

## 2. Figure census

| figure | bearing on this question | verdict it governs |
|---|---|---|
| 1 The Agent | residual per slot, never aggregated; frame-internal quantities disqualified | the speedup metric is a frame-internal score until a ground reads it |
| 2 The Ground | anchor does not update; two frames sharing a pool are one witness | the device output is the anchor, not the agreement about it |
| 3 Dependency Chain | order by dependency, not importance | verify before hardness, hardness before import |
| 4 The Membrane | only methods cross up, round trip has a gap | "advantage implies new physics" is a recording carried across a scale, not a method |
| 5 Mint Pipeline | three guards as a product; the fifth bin is REFUTED | a new principle needs support from a real residual; advantage alone has none |
| 6 Closure / Reachability | mint adds no atom; import is the only operator that moves the wall | advantage is a composition inside QM; it cannot add a physical atom |
| 7 Room Chain | agreement is variation, not a verdict; no last room | a consensus of advantage claims cannot settle physics |
| 8 Union Surplus | closure is idempotent; search finding nothing is not absence | no classical simulator found is not a proof that none exists |
| 9 Leave / Arrive | describe the residual before choosing a frame; filters not witnesses | budget figures are filters, they cannot hand a physics verdict |
| 10 Ground Maintainer | bring a characterised residual, never the source; verifier cannot reconstruct | first contact must be the residual and refuter, not the framework |
| 11 The Habitat | capability is agent-and-habitat; introduce, never subtract | more qubits without a new contact do not change evidence |
| 12 The Bond | arrangement is priced; irreducibility is level-relative | a new arrangement is not a new atom |
| 13 Minimum Viable Set | the set is closed, the arrangements are not; unreachable is a verdict | larger circuits rearrange the six; they do not add a seventh |
| Operators / Symbols | `R` is per slot; `R_T` is the round trip gap | the residual must be stated per domain, with a measured round trip |

---

## 3. Findings, each with a verbatim quote and a refuter

Quotes are checked against `FRAMEWORK/reference/03-FIGURES_TEXT.md` before use. A strained reading is
named and sent back to the census, not smoothed.

### F1: The residual is a union compound, and the common inference treats one half as the other (decisive for the question's shape)

Fig 9 :54-58:

> **"And when the split lands on a union rather than a partition, unbundle before you search again."**
> **"A bundled problem is usually a union of overlapping conditions, not a list of separate ones."**

Fig 9 :57-58 adds:

> **"What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either."**

"Quantum advantage" bundles (a) the device matches quantum predictions and (b) no efficient classical
simulation is known. Clearing (b) does not clear (a). The claim "advantage implies new physical
principles" is exactly the move of treating a cleared complexity condition as a failed physics
condition.

*Refuter:* exhibit a case where the classical condition is fully cleared (a proved, unrelativized,
unconditional separation) and the physics condition still returns agreement with standard QM. That
is not a refutation of the compound reading, it is its confirmation. The compound reading is refuted
only if the two conditions turn out to be the same condition under one anchor, which would require
showing that "classically hard to simulate" and "quantum prediction fails" are the same event.

### F2: Advantage is a composition inside the quantum closure; no new atom is owed (triangulated)

Fig 6 :21:

> **"MINT composes inside the closure and can never add an atom."**

Fig 8 :32:

> **"Closure is idempotent. Composing inside a closed set never leaves it, so no search, however long, adds an atom. This one is definitional: it is what closure means."**

Fig 13 :115:

> **"The set is closed. The arrangements are not. That gap is why import exists."**

A larger circuit, a deeper sampling run, a new algorithm for preparing a state: all are arrangements
inside the quantum closure. Fig 13 :116-118 is exact on this point:

> **"Six members, and no amount of arranging produces a seventh: a new member would have to be a new kind, and composition only ever rearranges the kinds already held. Meanwhile the arrangements over those six do not run out. So a frame can search without end and still not arrive: infinite effort inside a finite reach."**

If the device output is what QM predicts, the advantage is a reached composition, not a new physical
kind. Verdict per D2: `specified`, **triangulated** across Fig 6 (the operator that cannot add an
atom), Fig 8 (idempotence of closure) and Fig 13 (closed set, open arrangements), which govern
different quantities and have low overlap.

*Refuter:* show a term that is (i) required to explain a measured device output, (ii) not derivable
from the quantum closure, and (iii) not merely a new arrangement of it. Clause (ii) is the hard one:
an unproven separation of complexity classes does not establish it.

### F3: "No classical simulator found" is search or budget, not proof of absence (triangulated)

Fig 8 :39:

> **"So a search that finds nothing is never a proof of absence."**

Fig 9 :44:

> **"Only a sealed room can be searched to the end, and no frame is a sealed room. So searching and finding nothing proves nothing."**

Fig 9 :20:

> **"→ \"it is not in here\" cannot be proved from inside"**

The classical half of the compound is a *failure to find*, plus conjectures that make the failure
expected. It is not a ground reading that the classical account is impossible, and still less that
physics has failed. Fig 8 :40-43 separates the two facts that are routinely merged here:

> **"Scope. These prove the metaframe is underivable. They do not prove any particular atom is far away. Underivable-in-principle and unreachable-at-this-budget are different facts, and they issue different instructions."**

At the asymptotic scale (BPP versus BQP), the claim is underivable by any finite experiment, so the
right instruction is "go outside the finite experiment to a proof or a conjecture". At the device
scale, a failed simulator is budget-limited, so the right instruction is more search or a better
simulator, not a new physical atom. Importing against a budget limit adds an atom that was not
needed (Fig 8 :42-43). Verdict per D3: `specified`, triangulated (Fig 8 plus Fig 9).

*Refuter:* produce an unconditional, unrelativized proof that the observed behaviour is outside BQP.
That would convert the budget fact into a closure fact and would move the verdict to "import owed".

### F4: The speedup numbers are filters for the budget, never witnesses for the verdict

Fig 9 :60:

> **"Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."**

Qubit count, circuit depth, runtime ratio and cross-entropy benchmarking score are all budget
figures. They decide which experiment gets tried and how much compute is spent. They do not decide
whether a new physical principle exists. The world literature agrees at the asymptotic scale:
Aaronson and Chen (2016) note that the Extended Church-Turing Thesis is an asymptotic claim that no
finite experiment could decisively render, however dramatic the observed gap. This is corroboration
from a low-overlap frame (mathematics and complexity), not an override of the figure verdict.

*Refuter:* show a budget quantity that is also a ground reading on the physics slot. Until an
instrument discriminates QM from its alternatives at the complexity frontier, no such quantity exists.

### F5: A new physical principle would be an import, and imports need a source gate and a shadow test

Fig 6 :14 calls IMPORT **"the only operator that moves the wall"**, and Fig 6 :23:

> **"No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs."**

Fig 8 :12-13 names the gates: **"source gate: provenance"** and **"shadow test: explains a gap"**. Fig 6 :25:

> **"An import adds no atom to the world."**

So adding a physical principle changes what our frame can express, not what the world contains. The
only residual that licenses such an import is the fifth kind in Fig 5 :53:

> **"refuted: a term we hold is wrong; a term is owed that says so"**

advantage produces a NOVEL-bin residual (a new capability), not a REFUTED-bin residual (a failed
prediction). A new capability does not owe a correction to the theory that predicted it. Verdict per
D4: `general` for the topology of imports, `specified` for which residual would license one.

*Refuter:* exhibit a case where a frame added an atom on the strength of a novel capability alone,
the atom paid its MDL bargain, and the ground later settled it. That would show the REFUTED gate is
too narrow. None of the sources read on 2026-11-23 supplies such a case.

### F6: The framework returns a shape, not a name, for the missing principle

Fig 9 :32:

> **"→ you get a kind of thing, never the answer itself"**

Fig 13 :134-135:

> **"Unreachable is a verdict here, not a silence,"**
> **"It cannot say which primitive is missing, because naming it would mean already holding it."**

So this solution must not name a candidate replacement for quantum mechanics. It can state the shape:
a principle that matches every settled quantum prediction and additionally predicts a deviation in
the high-complexity regime, with a specified circuit depth and fidelity signature. Fig 5 :61-63 warns
why the shape must be bound explicitly: *"BUT THE TERM MOST WORTH REFUSING MAY NOT BE IN THE LIBRARY AT
ALL. A frame searching for an answer of a particular shape holds that shape as a PREFERENCE rather
than as a term."* Section 0 binds it accordingly.

*Refuter:* a derivation from the figures that names a specific new physical principle. That would
contradict Fig 13 :135 and would send the framework itself back to census.

### F7: Irreducibility is a fact about a level, not about the world

Fig 12 :104:

> **"A settled molecule becomes an atom for whatever composes over it. So irreducible is a fact about a level and never about the world, and there is no bottom"**

An advantage may be irreducible *at the complexity level*: you cannot get the speedup by composing
the classical primitives you hold. That is a statement about that level's closure. Reading it as
"the world has a new primitive" repeats the level error the figure names. This is the single most
important distinction for this question: *barrier at a level* is not *novelty in nature*.

*Refuter:* show that a level-relative irreducibility survives a change of level in which the operand
is settled and recomposed, contrary to Fig 12 :104. That would break the recursion claim, not the
physics verdict.

### F8: A test of new physics needs an instrument already returning something

Fig 6 :32-33:

> **"An instrument is not built from a description. It is improved from a worse instrument already returning something."**
> **"Nobody specified a telescope from an account of Mars. A wandering point in the sky was already a reading, and every sharper instrument was built on the residual the last one produced."**

Fig 6 :34-35 continues:

> **"Where nothing is, there is no edge to extend from, and the search for a proto-instrument is a search for one that is already there."**

This is where the world sources bite. Slagle's 2021 proposal (read 2026-11-23) is precisely an
instrument upgraded from randomized benchmarking: run a random non-Clifford circuit and its inverse,
then check that the state returns to the initial one. Standard QM predicts exponential fidelity decay
with depth from ordinary noise; emergent-quantum-mechanics predicts a much faster decay beyond a
depth threshold. It is a proto-instrument already returning a reading, so it satisfies Fig 6 :32-35.
Huang, Choi, McClean and Preskill (2025/2026) make the same point from the verification side: a
deviation from quantum predictions at the complexity frontier could signal new physics, but verifying
it is harder there. Fig 6 :36-39 must be honoured at the same time: *"It tells a question that nothing
could ever answer apart from one that is merely hard. It is not a rule about theory. theory routinely
precedes its instrument"*. So this solution does **not** claim that QM cannot be tested at high
complexity. It claims that the test is a different residual from the advantage claim.

Fig 11 :40 adds the budget-side rule:

> **"An improvement that does not change contact changes nothing, however much it improves."**

More qubits and deeper circuits do not, by themselves, change contact with the physics ground. An
echo test or a verification protocol does.

*Refuter:* an instrument that registers a deviation from QM at the complexity frontier with noise
accounted for. That fires the pre-registered refuter below and reverses the verdict.

### F9: The anchor is the device output, not the agreement about it

Fig 2 :29-30:

> **"An anchor is whatever settles the question and does not change its answer because of what any frame thinks. A measurement, an experiment, a counter, a market, a patient outcome. If it moves when"** ... **"you push on it, it is not an anchor."**

Fig 2 :33: **"The anchor must not update."** Fig 2 :35:

> **"Alignment is triangulation, not negotiation. A mirror cannot correct you."**

Fig 5 :32: **"then check it against the ground, then carry it up"**. A claim that "everyone agrees
quantum advantage means new physics" is a room, not an anchor (Fig 7 :35: *"A room's agreement is
variation, not a verdict. Selection between rooms is where the ground votes."*). Verdict per D1 and
D5: the only admissible settlement is a measurement or a proof, read separately by each frame.

*Refuter:* show an agreement between frames that changes the device output. If one exists, the
anchor is not an anchor and Fig 2 fails.

### F10: Round trip gap between the question as posed and the figure-level account

Fig 4 :30:

> **"So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked."**

Sent up (`T_A`): "does quantum advantage imply new physical principles?" becomes "is the observed
term inside the quantum closure, and what would license an import?" Brought back down (`T_E`): the
concrete claim "a specific principle P beyond QM is required". Three constraints do not survive the
trip: (i) the union structure of F1 (one anchor per half), (ii) the level-relativity of F7, and (iii)
the shape-not-a-name limit of F6. Conversely, what survives cleanly is: no import is owed by a speedup
alone, and a deviation would be the licensing event. `R_T` is recorded qualitatively here because no
ground reading exists; it is not set to zero. This is carried into `11_audit.md`.

*Refuter:* a round trip that loses nothing, showing the condensation is lossless. Fig 4 :27-29 says
the transform between scales loses information, so a lossless trip would break the membrane claim.

### F11: Scope check on the word "advantage"

Aaronson and Chen (2016, read 2026-11-23) define the relevant separation relative to the **classical**
Extended Church-Turing Thesis, not relative to QM: the goal of the experiments is "overturning the
Extended Church-Turing Thesis as confidently as possible". Huang et al. (2025/2026) distinguish
computational advantages (conjecture-backed) from learning and sensing advantages ("physics-based
foundation"), and explicitly separate pseudo-advantages from genuine ones. So "quantum advantage"
does not mean "QM failed"; it means "the classical account is beaten under stated assumptions".
If the question intends a different definition (for example, an advantage over what QM itself
predicts), that is a different residual and needs a new census.

*Refuter:* a source in which "quantum advantage" is defined as a violation of a quantum prediction
rather than a classical simulation barrier. The sources read here all use the classical-relative
definition. This finding is `specified` and single-source for the definition, corroborated by two
low-overlap papers but not settled for every author.

---

## 4. Pre-registered refuter (written before the conclusion)

Per `THE_FORMULA.md` step 2 and Fig 5 :65-66: commit the sought-for shape before the run so it can be
refused by the same test as everything else. The verdict "no new principle is owed by advantage alone"
is refuted if any of the following holds:

1. **Deviation at the ground.** A device in the high-complexity regime returns an output whose
   disagreement with standard QM predictions exceeds what the accounted noise model permits, under a
   protocol such as Slagle's circuit-inverse echo test or an equivalent verification scheme. This is
   a positive-mass residual on the device slot, `|R⁺_s| > 0` before the search, so the SUPPORT guard is
   satisfied and the REFUTED bin fires (Fig 5 :53). A principle is then owed.
2. **Closure proof.** An unconditional, unrelativized proof that the observed behaviour cannot be
   produced by any circuit in BQP, with the experimental output fixed. Then the term is outside
   `closure(Γ_quantum)` and the wall must move (Fig 6 :14, :23).
3. **Definition reversal.** A demonstration that "quantum advantage" is constitutively about QM
   failing, so that the physics and complexity halves of F1 are one condition under one anchor. Then
   the union census is wrong and every per-domain verdict must be re-derived.
4. **Framework failure.** A derivation of one of the six substrate terms from the other five, or an
   arrangement that adds a seventh kind (Fig 13 :41-44). That breaks the closure claim that makes
   "no new atom from advantage" possible, so the metatheoretical support for the verdict falls.

If any fires, the answer in `07_the_tether_answer.md` is withdrawn, not softened. Until one is run,
nothing here is `grounded`.

---

## 5. Recommendation

1. Keep the two halves of the compound separate in every statement. Say "classically hard under
   stated conjectures", never "QM cannot explain it", unless finding 1 fires.
2. Lead with the dependency order (Fig 3): verify the output, then price the classical barrier, then
   ask whether any physics residual remains.
3. Treat qubit counts, depth and runtime as budget filters (Fig 9 :60). Do not let them hand a
   verdict about physical kinds.
4. Bind the sought-for principle as an ordinary term with the shape in F6, and record its residual.
   It stays at zero mass until a deviation is measured.
5. Offer the echo test and verification protocols as the instruments that would close the question.
   Do not claim that the absence of such a test today proves QM untestable there (Fig 6 :36-39).
6. State mode on every substantive sentence. This is `specified` on the shape, `general` on the
   topology, never `grounded`.

---

## 6. Canonical usage check and retraction/confirmation log

Two local sources were read after the first five sections and govern how the figures may be used.

- `FRAMEWORK/reference/FIGURES_README_canonical.md`: *"They outrank everything else in the repo: the
  code, the rulings and the docs answer to them... the quotes are the authority, not this summary."*
  It also says a reading that makes one figure contradict another has misidentified the domain, and
  that the framework reports *"a shape, not a name"*, stopping *"at the limit of what the available
  instruments can distinguish, and records the lineage so the stop is honest."*
- `FRAMEWORK/reference/60_FIGURES_AS_METALAWS.md`: the figures are metalaws for design questions, so
  "this needs a human ruling" is the signal that derivation stopped too early. Fig 11's capability
  claim and Fig 9's filter claim are listed there as metalaws. This supports F4 and F8 without
  escalating the question to any authority.

### Retractions and confirmations applied to this audit

| earlier reading during the run | status after canonical check |
|---|---|
| "Closure is idempotent, so no quantum speedup could ever need new physics" | **Retracted as over-strong.** Fig 8 :39 and Fig 6 :36-39 explicitly allow a genuine deviation and forbid treating "not found" as "absent". The correct claim is "advantage alone does not owe an import"; a measured deviation still can. |
| "The classical barrier is a theorem, so the physics question is settled" | **Retracted.** Aaronson and Chen call the ECT an asymptotic conjecture; the barrier is assumption-backed. Fig 9 :20 also bars proving absence from inside. |
| "Fig 6 :36 says a sensor for something never registered cannot exist, so QM cannot be tested at high complexity" | **Retracted.** Fig 6 :37-39 says the rule is not about theory; theory routinely precedes its instrument. Slagle's echo test is an instrument improved from one already returning readings. |
| "Advantage is a seventh primitive" | **Refused.** Fig 13 :116: no amount of arranging produces a seventh. This is the level error of F7. |
| F1 union compound | **Canonically confirmed.** Fig 9 :54-58 has a dedicated section on unions and unbundling. |
| F2 no atom from composition | **Canonically confirmed.** Fig 6 :21, Fig 8 :32, Fig 13 :115 three separate statements, low overlap. |
| F6 shape not a name | **Canonically confirmed.** The figures README states it verbatim and Fig 13 :135 gives the reason. |
| Apparent strain: Fig 8 :32 (search adds no atom) versus the world claim that deeper circuits probe new physics | **Not strained after re-census.** Fig 8 governs composition inside a closure; the high-complexity test governs a measurement at the boundary. Different quantities. See `11_audit.md`. |

---

## 7. The three search branches, kept distinct (Formula step 7)

- **SEARCHED, asked first.** Is the new-principle term already in the quantum closure and merely
  unfound? A large part of the field's work is exactly this: improved classical simulators and new
  algorithms repeatedly convert apparent advantages into compositions (Huang et al., Examples 1 and 2,
  read 2026-11-23). Closure does not change; the space visited grows. Distribute this search and keep
  searchers independent, because simulators drawing on the same evidence are one searcher with many
  names (Fig 6 :53).
- **INWARD.** Extend the instrument from one already returning something: randomized benchmarking to
  circuit-inverse echo tests (Slagle 2021), Bell tests and Shor output verification to delegated
  verification protocols (Huang et al., section II.4). Sharpen in our own terms. Fails by refining
  forever on an axis that cannot carry the deviation.
- **OUTWARD.** Characterise a deviation in effect terms, then find the frame whose closure predicts
  its shape. Source gate and shadow test are mandatory (Fig 8 :12-13). Fails by being sharpened into
  terms only the importing frame can read. Note the asymmetry: OUTWARD is not triggered by an
  advantage, only by a deviation.

INWARD and OUTWARD are opposed and are never read against one another. Underivable-in-principle and
unreachable-at-this-budget remain different facts (Fig 8 :40-43).

---

## 8. Strains and final status

- **Apparent tension between Fig 8 :32 and the claim that deeper circuits probe new physics.**
  Resolved by re-census at the end of section 6. One governs composition, the other measurement at
  the boundary. No strain remains.
- **Fig 6 :14 (import moves the wall) versus Fig 6 :25 (import adds no atom to the world).** Not a
  strain: the wall is a frame's closure, the world is unchanged. This distinction carries F5.
- **Open, not hidden:** the operand type of a would-be new principle. The framework says a missing
  primitive is a shape, not a name, so no predicate for it exists yet. The echo test supplies an
  effect-level predicate (fidelity decay faster than the noise model predicts). Whether that is a
  primitive or a composition at the next level is a question for the ground, not an argument.
- **Status:** all four domains have separate verdicts, none averaged. D2 and D3 are triangulated
  across figures with low overlap; D1 and D4 are single-source for the specific figure line but
  triangulated at the level of the discipline. The affirmative proposition "advantage implies new
  physical principles" is a **gap** after a genuine re-census. Unreachable is a verdict, not a silence
  (Fig 13 :134).
