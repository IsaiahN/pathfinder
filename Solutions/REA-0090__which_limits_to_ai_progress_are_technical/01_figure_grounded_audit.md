# Figure-grounded audit: which limits to AI progress are technical?

**Mode of this document: `specified`, not `grounded`.** It states what would have to be observed to place a named limit in a domain. It does not claim to have observed it. Per `THE_FORMULA.md`: *"Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."*

**Status: simulated derivation, not a ground reading.** *The Recursive Self-Improvement Trap* (Isaiah N, 2026-11-19, fetched 2026-11-24): LLM output can *"simulate an approximate answer/output with the formula"* but *"the truly testable output would need to be derived from the real architecture or working the formula yourself."* This audit is checked for internal consistency against the figures. It cannot settle the question it reports on. See `05_what_shape_means.md` section 6.

**Figure authority.** All figure quotes are taken verbatim from `FRAMEWORK/reference/03-FIGURES_TEXT.md`, cited `Fig N :line`. Line numbers are the SVG text element numbers in that file, not the markdown file's line numbers. No figure quote was taken from a summary.

---

## 0. The claim under audit

The question arrives with a hidden partition: "technical" on one side, "economic incentives, regulation, or social choices" on the other. The first job of the census is to test whether that partition is the figure's partition. It is not (F1).

The residual in effect terms:

> Candidate brakes on AI progress are being discussed as if they were members of one list whose entries can be compared and counted. We need to decide, per candidate, what kind of thing is actually binding: what the frame can compose and measure, what the budget can pay for, what the habitat and its conventions permit, or what the checking arrangement can see. The options are: keep the one-list partition and label entries, or re-census into domains with separate anchors and refuse to average.

What a correct answer would look like is written down and bound in `README.md`: a mapping from each candidate limit to (slot, governing domain, anchor, currency, reversal condition). This is the formula's "Direction" discipline applied before the run, so the sought-for shape is an ordinary term that can be refused.

---

## 1. The residual R by arity, symmetry, scale

- **Arity: many slots, not one.** "Limits to AI progress" is not a single quantity. Fig 1 :19: *"The residual is indexed by object slot, not aggregated."* Fig 1 :22: *"Aggregating across slots is how a live signal disappears into an average."* The slot here is the individual candidate limit, for example a data ceiling, a compute bill, a prohibited practice under a statute, a verification convention.
- **Symmetry: not symmetric.** The four domains do not commute. Spending more actions cannot change what is in `closure(Γ)` (Fig 8 :32), and installing a convention cannot add a primitive to the world (Fig 6 :25: *"An import adds no atom to the world."*). A symmetric "they are all just limits" reading fails the bond test: swapping the operands changes the thing.
- **Scale: two levels.** Some limits bind inside one frame's closure (first order). Others bind at the membrane between frames, in the habitat, or in the checking arrangement (second order). Fig 4 :19-20: *"The kernel is the part that does not change with size: the same loop and the same rule for naming what worked, whether one agent is running it or a thousand. Only the actors, the currency and the anchor change."*

The first four sections of the formula sort R by what is missing. The fifth sorts by what is wrong. Here the question's own partition is the candidate wrong term: it is not that some limits are technical and others are not; it is that the two-bin partition misdescribes a union of compound conditions (F1).

---

## 2. Domain census

One line per domain: actors, currency, anchor. No nameable anchor means it is not a domain yet. All four below have one.

| domain | actors | currency | anchor | partition or union | status |
|---|---|---|---|---|---|
| **D1 Technical reach and instrument** | the library Γ, atoms(Γ), closure(Γ), instruments, the ground | composition and settlement | the ground: a measurement, experiment, counter or outcome | partition boundary (what composes across kinds) | domain, anchor nameable |
| **D2 Economic or budget** | the composer, actions, the action budget | actions (not bits) | the budget decides how much of the space is reached (Fig 12 :127); a budget is a currency, not an anchor in the Fig 2 sense | not a closure boundary, a reach-within-closure question | domain, anchor nameable as a decision rule, not as ground |
| **D3 Habitat, regulation, social choice** | habitat actors, conditions, relations, the seat, conventions, regulators | contact and agreement | the ground, never agreement (Fig 11 :73: *"The habitat is not the ground. The habitat is where actors come from and it updates; the ground is what settles, and it does not."*) | union compound: habitat + convention + a second condition | domain, anchor nameable |
| **D4 Verification and public checking** | external frames, expert readers, the ground maintainer | residuals and agreement | the ground, never agreement | selection between rooms, not a room's internal agreement | domain, anchor nameable |

**Order by dependency (Fig 3).** The chain is perception, vocabulary, objective, planning, learn and carry. Fig 3 :19: *"Optimising a link that already works cannot rescue one that does not."* Fig 3 :27: *"A link with no instrument is not a link that works. It is a link nobody has looked at."* Many candidate "limits" are actually the middle link, having terms for what a situation affords and being able to say what would count as progress. They are not technical in the closure sense, and throwing budget at them is effort above the break. Order further: refuse the false partition before minting a classification (formula step 2), and describe the residual before choosing a frame (Fig 8 :27).

**Triangulation note.** The D1/D2 split is derived from two figures with low overlap: Fig 8's metaframe/budget distinction (logic) and Fig 12's bits/actions pricing (compositional economics). The D3/D4 split is derived from Fig 11's habitat and Fig 10's conventions (ecology and checking arrangements), again low overlap. Within this simulated run all four seats draw on one evidence pool, so the agreement is internal consistency, not independent corroboration (Fig 2 :40).

---

## 3. Findings

### F1: The question's two-bin partition is a union, not a partition (re-census trigger)

Fig 9 :57: **"a case in two conditions is not a harder case of either. It stops being a mixture and becomes a specific compound."**

Fig 13 :115: **"The set is closed. The arrangements are not. That gap is why import exists."**

Fig 9 :54: **"And when the split lands on a union rather than a partition, unbundle before you search again."**

The question assumes that "technical" and "non-technical" are two lists whose entries can be sorted once. But a real brake is often a compound: a data ceiling is partly a reach question (are the required regularities representable from the held atoms?) and partly a habitat question (is the corpus still being produced and legally usable?). Fig 9 :55-56: *"A bundled problem is usually a union of overlapping conditions, not a list of separate ones. A single lever clears the region where only one condition holds and leaves the intersections standing, because the second condition still binds."*

**Strain, named not smoothed:** the question's binary frame strains against Fig 9's union rule. Per the canonical usage rule, a reading that makes figures contradict one another has misidentified its domain. The re-census is to treat the question as a set of slots with separate anchors, not as one partition. **Verdict: triangulated** (Fig 9 + Fig 13 + Fig 8). Refuter: show that every candidate limit's reversal condition is identical, which would collapse the union back into one list.

### F2: What "technical" means: closure and instrument limits (decides D1)

Fig 6 :23: **"No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs."**

Fig 8 :32: **"Closure is idempotent. Composing inside a closed set never leaves it, so no search, however long, adds an atom. This one is definitional: it is what closure means."**

Fig 6 :32: **"An instrument is not built from a description. It is improved from a worse instrument already returning something."**

Fig 13 :41: **"Each is indivisible: no arrangement of the other five yields it."**

A limit is technical in the strict sense when the term required to close the residual is not in `closure(Γ)` and no instrument already returning something can be sharpened into it. Two opposed instruments, never read against each other (Fig 6 :31): *"Neither answer tells you much about the other. Run them as two tracks, and never read one against the other."*

- Inward (Fig 6 :29): *"inward: is our representation adequate to hold it? The instrument extends access. Fails by refining forever on an axis that cannot carry it. Sharpen in our own terms."*
- Outward (Fig 6 :30): *"outward: does another frame already hold it? The description travels. Fails by being sharpened into terms only we can read. Cast it in effect terms."*

Fig 8 :39: **"So a search that finds nothing is never a proof of absence."** A technical verdict of "not reachable" is a verdict, not a silence: Fig 13 :134: **"Unreachable is a verdict here, not a silence"**. It cannot name the missing primitive (Fig 13 :135: *"It cannot say which primitive is missing, because naming it would mean already holding it."*).

**Refuter:** exhibit a term outside `closure(Γ)` produced by search alone with no import and no instrument extension; or exhibit an instrument specified from a description with no prior returning signal. Either breaks the technical verdict. **Verdict: triangulated** (Fig 6 instrument rule + Fig 8 closure theorem + Fig 13 minimality). Low overlap: instrument epistemology versus formal closure versus the six-term set.

### F3: The decisive discriminator: underivable versus unreachable-at-budget (decides D1 against D2)

Fig 8 :40-41: **"Underivable-in-principle and unreachable-at-this-budget are different facts, and they issue different instructions."**

Fig 8 :42: **"Unreachable-at-budget: the term is already in the closure and was not found, so the remedy is more search, not another atom."**

Fig 6 :49: **"more search at the same reach: is it in here and unfound? The closure does not change. Same atoms, same wall, more of the space actually visited."**

This is the sharpest figure-grounded answer to the literal question. "Technical" and "economic" are not two substances; they are two answers to the verdict question of Fig 9 :6 (*"the verdict: is φ* in here at all?"*).

- If the term is outside the closure, the limit is technical: the remedy is import or a new instrument, and budget spent on search is spent on a region that cannot contain the answer.
- If the term is already in the closure and was not found, the limit is economic in the relevant sense: the remedy is more search, distributed among independent searchers (Fig 6 :50: *"Distribute the search, and keep the searchers independent."*).

Fig 8 :43: *"Importing against a budget limit adds an atom that was not needed, and Figure 6 prices a wrong atom above starting from primitives."* So misclassifying an economic limit as technical is not merely a labeling error; it is a paid error, the wrong-atom error.

**Refuter:** show a case where increasing the action budget changes the membership of `closure(Γ)`, that is, where money adds a primitive rather than visiting more of the same space. That would collapse Fig 8's distinction. **Verdict: triangulated** (Fig 8 scope rules + Fig 12 two currencies + Fig 6 third reach question). This is the primary verdict of the whole solution.

### F4: Economic limits are a second currency, not a smaller technical limit (decides D2)

Fig 12 :125: **"A composition costs in two currencies, and they do not add."**

Fig 12 :126: **"Bits price the description. Actions price finding out whether it holds. They are in different units, so a system holding one accounting cannot compare them and will not notice the shortfall."**

Fig 12 :127: **"It proposes arrangements it cannot afford to test, and the budget is what decides how much of the space is reached at all."**

Fig 12 :130: **"Summing them into one figure is the error this names, not the fix for it. A price in bits and a price in actions are two readings, held apart."**

An economic incentive is not a weak technical limit. It is a price in actions. A system that holds only the bits accounting *"will not notice the shortfall"*: it will propose arrangements it cannot afford to test. Conversely, a large action budget cannot pay for a term the closure cannot compose (Fig 13 :118: *"infinite effort inside a finite reach."*). Fig 2 :42: **"Buy independence in proportion to the cost of being wrong."** Buying independence is an action expenditure with a figure-given purpose; it is not a verdict.

**Refuter:** demonstrate a single accounting in which bits and actions are commensurable, so that the two-currency claim fails. **Verdict: triangulated** (Fig 12 pricing + Fig 2 cost-of-being-wrong + Fig 13 finite reach). Low overlap between compositional economics and the grounding rule.

### F5: Regulatory and social limits change contact or install conventions; they add no primitive (decides D3)

Fig 11 :40: **"A system cannot be made more capable by improving the agent in isolation. An improvement that does not change contact changes nothing, however much it improves."**

Fig 11 :39: **"capability is a property of agent-and-habitat, never of the agent alone."**

Fig 10 :46: **"A convention makes no claim about the world; a verdict and an atom both do."**

Fig 10 :47: **"a convention that decides an outcome has stopped being one"**

A statute or a social choice is a change to the habitat or a declared convention. Fig 10 :18: **"a declared meaning is not a grounded one"**. Hence the common phrasing "regulation blocks AI progress" is a category report: it says the contact surface changed, not that the closure shrank. Fig 11 :66: *"Isolation is not removal of the habitat. It is substitution of one habitat for another."* A test harness or a sandboxed deployment is a substituted habitat: Fig 11 :70: *"A test harness is a substituted habitat. Which is why a synthetic solve proves wiring and never capability."*

But regulation can matter to what counts as settled. Fig 10 :43-44: *"Soundness requires the checker to be unable to produce what it is checking. Never a player, never a proxy, never the author of a verdict or an atom. It transmits verdicts and issues none."* A rule that changes who may check, or that installs a prohibition nothing can satisfy (Fig 10 :53: *"And a prohibition nothing can satisfy is a prohibition stated wrong."*), changes the ground's reachability through the channel. That is a real effect, but it is a channel effect, not a closure effect.

**Refuter:** exhibit a regulation that adds a primitive to `closure(Γ)`, or a convention that decides a ground verdict while remaining a convention. Either would break the D3 verdict. **Verdict: triangulated** (Fig 11 capability claim + Fig 10 convention rules + Fig 2 anchor definition). Low overlap between habitat ecology and checking-arrangement design.

### F6: Frame-internal success metrics cannot decide the classification (D4 hygiene)

Fig 1 :27: **"They are frame-internal. A frame cannot score itself with a quantity it also produces."**

Fig 5 :48: **"Its own output is never a measure of success. A system can be enthusiastically curious and produce nothing."**

Fig 1 :26: *"predicates minted, and credibility accrued"* are named as quantities that do not count. Applying this to the question: "the field publishes many papers on AI limits" and "many labs agree that data is the bottleneck" are frame-internal. Fig 7 :13: *"same closure, handed along; agreement compounds, evidence does not"*. Fig 2 :40: **"agreement about the world is worthless when the agreeing frames share an evidence pool"**.

**Refuter:** show a frame scoring itself with a quantity it also produces that nevertheless settles a verdict. **Verdict: single-source for the metric ban (Fig 1), corroborated by Fig 5 and Fig 7 at low overlap, so triangulated in aggregate.**

### F7: The answer shape is a decision procedure, not a ranked list

Fig 9 :32: **"you get a kind of thing, never the answer itself"**

Fig 13 :134: **"Unreachable is a verdict here, not a silence"**

Fig 9 :60: **"Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."**

A ranked list of "top limits" is a filter for the budget. It decides what gets tried first; it does not decide what is true. The figure-licensed output is the per-slot mapping (domain, anchor, currency, reversal) with a recorded stop. Fig 9 :43: *"The verdict tells you to leave. The lookup tells you where to go. Elimination is what you do after you arrive."*

**Refuter:** exhibit a case where a budget ranking, by itself, settles which domain governs a limit. **Verdict: triangulated** (Fig 9 + Fig 13 + Fig 2 :42).

### F8: What survives, with mode attached

| claim | mode | figure / basis |
|---|---|---|
| A single technical/non-technical list is a union misdescribed as a partition | `general` (structural) | Fig 9 :54, :57 |
| A limit is technical iff the closing term is outside `closure(Γ)` and no instrument can be sharpened into it | `specified`, falsifiable | Fig 6 :23, :32; Fig 8 :32 |
| Underivable and unreachable-at-budget are different facts with different remedies | `specified`, decisive | Fig 8 :40-42 |
| Actions and bits are two currencies that do not add | `general` (structural), `specified` in application | Fig 12 :125-130 |
| Regulation and social choice change contact or install conventions, not the closure | `specified`, falsifiable | Fig 11 :39-40; Fig 10 :46-47 |
| The correct output is a per-slot decision procedure with reversal conditions | `general` + `specified` | Fig 9 :32, :60; Fig 13 :134 |
| Any particular named limit (compute, data, a named statute) is in this or that bin | **refused without ground** | Fig 9 :32; simulated status |

---

## 4. Pre-registered refuter

Written before the conclusion, per Seat Map :287: *"And a falsifier written before the run is a design instrument, not only an honesty device."*

The classification procedure is refuted if any of the following holds:

1. Some term outside `closure(Γ)` is produced by search alone, with no import and no instrument extension (breaks F2, Fig 8 :32).
2. Increasing the action budget changes the membership of `closure(Γ)`, so that underivable and unreachable-at-budget are the same fact (breaks F3, Fig 8 :40-42).
3. Bits and actions are commensurable in one accounting (breaks F4, Fig 12 :125-130).
4. A regulation or convention adds a primitive to a frame's closure, or a convention decides a ground verdict while remaining a convention (breaks F5, Fig 10 :46-47).
5. The four domains turn out to share one anchor, so the per-slot residual can be aggregated without loss (breaks F1, Fig 1 :22 and Fig 9 :57).
6. A simulated derivation of this kind is shown to settle a real-world classification without a ground reading (breaks the status line, *The Recursive Self-Improvement Trap*).

If any fires, the procedure is withdrawn or rewritten. Until one is run, no part of this may be labelled `grounded`.

---

## 5. Recommendation

1. Lead with F3, the underivable/unreachable-at-budget discriminator. It is the only figure line set that answers the literal question directly.
2. Do not output a ranked list of named limits. Output the per-slot mapping with reversal conditions (F7).
3. Keep the two currencies apart (F4). Never present an action-budget fix as if it added a primitive, or a closure import as if it were just more spending.
4. Report regulation and social choice as contact and convention changes (F5), and state explicitly that this is a channel effect and not a closure effect.
5. Fig 4 :22: **"Only methods cross up. Only head starts come down."** Send the discriminator and its refuter, not a recording of which limits are currently fashionable.

---

## 6. Canonical usage check and retraction/confirmation log

Two usage sources were consulted after the first five sections: the canonical figures README (`FRAMEWORK/reference/FIGURES_README_canonical.md`) and the seat map field guide. Their governing sentences:

- The figures *"outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary."*
- *"a reading that makes one contradict another has misidentified its domain, not found a flaw."*
- The framework reports *"what a missing thing would have to look like (a shape, not a name)"*, then stops at the instrument limit and records the lineage.
- Seat Map :163: *"High correlation is disqualifying for a verdict and efficient for a convention."*
- Seat Map :287, pre-registered refuter (quoted in section 4).

### Retractions and confirmations

| earlier reading in this run | status after the usage check |
|---|---|
| I initially intended to name real limits (compute, training data, the EU AI Act) and assign each to a bin | **Retracted.** The framework returns a shape, not a name (Fig 9 :32), and naming a slot requires a ground reading this run does not have. The named items survive only as examples of slots, never as classified results. |
| I initially read "budget" as an anchor | **Retracted at re-census.** A budget is not an anchor in the Fig 2 sense: Fig 2 :29 requires an anchor to *"not change its answer because of what any frame thinks"*. A budget is a currency (Fig 12 :126). D2's anchor is the decision rule about how much space is searched, not the budget itself. |
| I initially read "regulation" as a wall on the closure | **Retracted.** Re-census: regulation changes habitat or convention (Fig 11 :66, Fig 10 :46). It adds no atom (Fig 6 :25). The wall moves only on import (Fig 6 :23). |
| Apparent conflict: Fig 8 says importing is the only fix for underivability, while the question wants more spending to fix limits | **Not strained.** Re-census: they govern different facts. Underivable needs import; unreachable-at-budget needs more search (Fig 8 :40-43). Different objects, different instructions. |
| F3 called "technical versus economic" | **Narrowed.** It is not a claim about two substances. It is a claim about two answers to the reach verdict, with different remedies. Retained under that narrowed form. |
| The four-domain census as a clean partition | **Narrowed.** D1 and D2 are distinguished by the reach verdict; D3 and D4 by anchor and seat. This is a working partition of the census for derivation, not a claim that real limits are partitioned so cleanly. F1 stands. |

### Round-trip note

The condensation of the figures into the bound answer shape in `README.md` is **lossy**, not identity. `THE_FORMULA.md` step 6 requires `R_T = gap(x, (T_E ∘ T_A)(x))` and Fig 4 :30 requires it be measured rather than assumed. The round trip is carried out qualitatively in `11_audit.md`; what is dropped is the type of the D2 anchor and the fact that a convention can change the channel without changing the closure. Treating the shape as the full figure set would set `R_T` to zero, which is the dead-reckoning error Fig 4 :30 names.
