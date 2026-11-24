# Figure-grounded audit: comparing theories with partial stage coverage

**Mode of this document: `specified`, not `grounded`.** It states what a comparison would have to look like and what would settle each cell. It does not decide which origin-of-life theory is true. Per `THE_FORMULA.md`: "Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."

**Status of this derivation: a simulation, not a ground reading.** *The Recursive Self-Improvement Trap*: LLM output is "simulacra"; "the truly testable output would need to be derived from the real architecture or working the formula yourself." This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on. See `05_what_shape_means.md` §6.

**Sources.** Figure text: `FRAMEWORK/reference/03-FIGURES_TEXT.md` (verbatim, cited `Fig N :line`). Canonical usage: `FRAMEWORK/reference/FIGURES_README_canonical.md`. Loop and mode rule: `FRAMEWORK/figures/THE_FORMULA.md`. World sources actually opened on 2026-11-23 are listed in `10_source_ledger.csv`.

---

## 0. The residual in effect terms

The source question sits in section 9, "Evidence, experiments, and competing explanations", of `origins of life.txt`. Its neighbours are about reconstructing a connected sequence of steps, scaling laboratory results, and telling biological from nonbiological signatures. So "stages" means the ordered transitions from prebiotic chemistry to an evolving system. RNA-first, metabolism-first, lipid-first and coevolutionary accounts each cover some of these transitions and not others.

Restated as an effect, the comparison has two options:

- **Option A, the aggregate ranking.** Treat the partial theories as rival answers to one question and score them by total explanatory scope. Leads to: averaging across stage slots (Fig 1 :22), a false partition of what is a union (Fig 9 :55), and agreement among proponents counted as evidence (Fig 2 :40).
- **Option B, the per-stage shape.** Unbundle the stage chain, index the residual per slot, range each theory against the ground separately, and allow composition only where closures differ and a residual has been described. Leads to: a checkable coverage map, a declared unreachable where no theory covers a stage, and a named import path.

What an answer would look like is written down now and bound as an ordinary term (formula step "Direction"): **a per-stage, ground-ranged comparison with an open slot**. Because it is bound, it can accrue a residual and be refused by the same test as everything else.

---

## 1. Domain census (before choosing any figure line)

**R by arity, symmetry and scale.** Arity: N slots, one per stage, plus a comparison over theories at each slot. Not one scalar. Symmetry: the stage links are ordered (`→` sequence, `⇒` production), and the comparison at each slot is `⋛`, an ordered threshold relation, not a symmetric merge (Fig 12 :87, Operators :49). Scale: first order within a stage, second order across the chain where a settled stage becomes an atom for the next (Fig 12 :104).

One line per domain. A nameable anchor is required; where there is none, the item is not a domain yet.

| domain | actors | currency | anchor | status |
|---|---|---|---|---|
| D1 Stage chain, framework-internal composition | stage slots, six-term set, bonds, negation | residual per slot `R_s`, cost `|φ|`, leftover `left(R,phi)` | the figures as metalaws, plus the ground for any measurement | admitted |
| D2 Theory frames (RNA-first, metabolism-first, lipid-first, coevolution) | chemical models, experiments, instruments, observations | predictions and the residual each leaves on a stage | experiment: prebiotic synthesis, protocell behaviour, ancient signatures (Fig 2 :29) | admitted |
| D3 Comparison and verification frame | expert readers, reviewers, rival closures | agreement and residual | the ground, never agreement (Fig 2 :35) | admitted, independence zero in this simulated run |
| X1 "the one true theory of life's origin" | none nameable | none | none nameable | **not a domain yet** |
| X2 "the most cited theory" / author reputation | prestige | votes | a popularity count that is not the ground | absorbed into D3 as a contact-cost proxy, excluded from verdict weight |

**Partition or union.** Union, not partition. Fig 9 :54 "And when the split lands on a union rather than a partition, unbundle before you search again." Fig 9 :55 "A bundled problem is usually a union of overlapping conditions, not a list of separate ones." Fig 9 :57 "What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either." D1 and D2 form a compound with its own loop and its own ground, so their overlap is not an error to be averaged away.

**Dependency order (Fig 3).** Fig 3 :20 "The chain is ordered by dependency, not by importance." A stage whose input never arrives cannot be diagnosed; only its predecessor can (Fig 3 :22-23). Order of operations: describe the residual before choosing a frame (Fig 9 :27-28), refuse before mint (formula step 2), settle each first-order stage before composing the second-order comparison (Fig 12 :104).

Strain test applied before concluding: Fig 5's MDL bargain prices a term by description length, while Fig 12 :125-130 prices a composition in two non-additive currencies (bits and actions). These look contradictory only if both are read as one score. Re-census: Fig 5 governs whether a single new term is worth minting; Fig 12 governs the arrangement of an already-held molecule. Different objects, so no strain after re-census.

---

## 2. Figure census (grepped from the verbatim extract, quoted before concluding)

| figure | bearing on this question | preliminary verdict |
|---|---|---|
| Fig 1 residual per slot | per-stage indexing, anti-averaging | governs D1 directly |
| Fig 2 ground and alignment | anchor must not update; agreement across one pool is worthless | governs D2, D3 |
| Fig 3 dependency chain | stage order by dependency; unmeasured link is unexamined, not broken | governs D1 |
| Fig 4 membrane | only methods cross up; a lossy round trip `R_T` | governs the outreach artifacts |
| Fig 5 mint pipeline | the acceptance bargain; shape as a preference invisible to the loop | governs what a "winner" would have to be |
| Fig 6 closure / reachability | import only from a differing closure; inward and outward opposed | governs D2 composition |
| Fig 7 room chain | agreement compounds, evidence does not; no last room | governs D3 |
| Fig 8 union surplus | undirected union adds nothing; surplus needs low overlap plus a described residual | decisive for Option B |
| Fig 9 leave / arrive | split a multi-subset disagreement; unbundle a union; describe before looking | decisive for Option B |
| Fig 10 ground maintainer | bring a characterised residual, never the source; verifier non-access | governs outreach ordering |
| Fig 11 habitat | capability is agent-and-habitat; no standing list survives a residual change | governs the treatment of acclaimed models |
| Fig 12 bond | comparison is ordered threshold; isomers, functional groups, second-order atoms | governs the comparison itself |
| Fig 13 minimum set | closed set, unbounded arrangements; unreachable is a verdict; question may be several | governs F7, F8 |
| Operators table | `⋛` type and test; negation | confirms Fig 12 |
| Symbols table | `R` is the aim and always a slice; `s` is one slot | confirms Fig 1 |

No figure was accepted on the strength of a summary. Each quote below was checked against `03-FIGURES_TEXT.md`.

---

## 3. Findings

### F1 - The disagreement is a union of stage conditions, so split it before searching (decisive)

Fig 9 :4-5, verbatim:

> **"Disagreements that do not shrink with effort, where each rule keeps working well on a different subset, are not one hard question but several well-formed ones. Split it rather than search."**

Fig 13 :136:

> **"It can say the question is not one question and must be split before it is searched again."**

Fig 9 :54 and :55, quoted in §1, add the union reading. This is the exact structure the question describes: each theory keeps working on a different subset of stages. The figure instructs a split, not a longer contest between whole theories.

Status: **triangulated** across Fig 9 (leave/arrive) and Fig 13 (minimum set, decidability), two figures with low overlap in subject matter. Refuter: show that the stage disagreements do shrink under a single shared mechanism that preserves every theory's successful subset, and that no partition of the chain improves prediction. Until such a mechanism is measured, the split stands as `specified`.

### F2 - Index the residual per stage; never rank by an aggregate score

Fig 1 :19:

> **"The residual is indexed by object slot, not aggregated."**

Fig 1 :22:

> **"Aggregating across slots is how a live signal disappears into an average."**

Fig 1 :13:

> **"a global R near zero with one live slot residual is a legal state"**

A single "explanatory scope" number is exactly the aggregation Fig 1 forbids. A theory can score well overall and leave one live stage unexplained; that live slot is where the comparison has to look. The correct artifact is the stage-by-theory table named in the README.

Status: **triangulated** across Fig 1 and the Symbols table definition of `s` ("One object, region or entity being tracked. R is measured per slot, never as a single global number"). Refuter: a published comparison whose aggregate ranking is unchanged after the worst-covered stage is removed. If it is unchanged, the score was not tracking the live signal.

### F3 - Order stages by dependency, not by importance

Fig 3 :20:

> **"The chain is ordered by dependency, not by importance."**

Fig 3 :27:

> **"A link with no instrument is not a link that works. It is a link nobody has looked at."**

Fig 12 :72 gives `→` as "A then B; B needs A to have happened" and Operators :37 gives `⇒` as "A produces B; B did not exist before". The origin-of-life chain is not a bag of achievements. A stage that needs monomers before replication cannot be assessed before the monomer stage settles. A stage with no instrument is not a failure of the theory that omits it; it is an unexamined link (Fig 3 :22-23: "A reading taken below the break is not a weak reading. It is a reading of nothing").

Status: **single-source** for the dependency rule (Fig 3), with the bond typology from Fig 12 and Operators as a distinct confirmation of orderedness. Refuter: reorder the stages without changing any prediction and show the comparison is unaffected. If it is unaffected, the claimed order was rhetorical.

### F4 - Range each theory against the ground separately; agreement is not a verdict

Fig 2 :29:

> **"An anchor is whatever settles the question and does not change its answer because of what any frame thinks. A measurement, an experiment, a counter, a market, a patient outcome."**

Fig 2 :35:

> **"Alignment is triangulation, not negotiation. A mirror cannot correct you."**

Fig 2 :40:

> **"agreement about the world is worthless when the agreeing frames share an evidence pool"**

Fig 10 :24:

> **"the ground does not decay, the channel does"**

The ground here is the experiment: a synthesis under plausible conditions, a ribozyme that copies, a protocell that grows and divides, an ancient chemical signature. Two theories do not become more correct by being endorsed by the same reviewers, and a review panel is not an anchor (Fig 2 :47: "A ground listed as one of the parties has already become a frame").

Status: **triangulated** across Fig 2 and Fig 10 (anchor rule vs ground-maintainer rule, low overlap). Refuter: a comparison whose ranking changes when the identities of the endorsers are hidden but their arguments are unchanged. If it changes, prestige entered the verdict.

### F5 - An undirected union of overlapping theories adds nothing; a surplus needs low overlap and a described residual

Fig 8 :14:

> **"their union adds nothing"**

Fig 8 :19-21:

> **"closures differ, so a surplus exists"**
> **"but no residual is described"**
> **"nothing was aimed; the union is mute"**

Fig 8 :45:

> **"Two frames together reach what neither reaches alone."**

Fig 8 :48:

> **"How much two frames draw on the same evidence decides both whether their agreement means anything and whether their union has any surplus."**

Fig 8 :53:

> **"Residual first, frame second."**

Fig 6 :23:

> **"No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs."**

This is the precise error in the common answer "combine the theories." A blend of two accounts that cite the same experiments and share the same chemical vocabulary is Fig 8's collapse 5: interdisciplinarity, no mint. A real surplus requires two closures that do not draw on the same evidence, and a residual described before the frames are chosen. Without the residual, the union is mute.

Status: **triangulated** across Fig 8 and Fig 6 (union surplus vs what moves the wall, low overlap). Refuter: a combined model built from two frames that share their entire evidence pool, with no new prediction and no described residual, that nonetheless extends reach. Under Fig 8 :32 ("Closure is idempotent. Composing inside a closed set never leaves it, so no search, however long, adds an atom") it cannot.

### F6 - The comparison itself is an ordered threshold, not a symmetric merge

Fig 12 :46:

> **"A bond is the typed relation between two operands."**

Fig 12 :87 and Operators :49:

> **"a threshold relation between two quantities"**

Fig 12 :94:

> **"The arrangement is the substance."**

Fig 12 :112:

> **"A plan is a sequence. A goal is a comparison. Progress is a subtraction."**

Operators :52:

> **"a goal is a comparison, which is why a vocabulary without it cannot state one"**

Comparing theories is `⋛`, which the figures define as an ordered threshold between two quantities. It is not `+` (both hold) and not `≡` (two names, one referent). "RNA-first and metabolism-first are both partly right" is a conjunction, not a comparison; it carries no information about which is larger on the axis in question.

Status: **triangulated** across Fig 12 and the Operators table (figure vs notation table, low overlap). Refuter: show that the comparison is symmetric, so swapping the two theories changes nothing, or that the operands are not quantities on a shared axis. If so, `⋛` is mistyped and an honest comparison owes a different operator (Operators :68: "A relation that fails all seven is not an operator you are missing; it is a claim that has not been made yet").

### F7 - A stage no theory covers is `unreachable`, a verdict and not a silence

Fig 13 :134:

> **"Unreachable is a verdict here, not a silence,"**

Fig 8 :39:

> **"So a search that finds nothing is never a proof of absence."**

Fig 9 :32:

> **"you get a kind of thing, never the answer itself"**

The honest cell in the coverage table is "no theory currently predicts this stage, and here is the effect-term description of what an instrument would have to detect", not a forced winner. Underivable in principle and unreachable at this budget are different facts with different instructions (Fig 8 :40-43). A budget-limited search owes more search, not a new atom.

Status: **triangulated** across Fig 13 and Fig 8 (verdict of unreachability vs scope of search, low overlap). Refuter: a source-discriminating instrument that resolves the uncovered stage, or a derivation that brings the stage inside an existing closure. Either converts `unreachable` to `candidate` or `grounded`.

### F8 - Naming the winning theory is `gap`; the framework returns a shape

Fig 13 :135 (full line):

> **"It cannot say which primitive is missing, because naming it would mean already holding it."**

Fig 9 :32, quoted in F7. The canonical usage rule adds: the framework reports "what a missing thing would have to look like (a shape, not a name)". For this question the shape is: a per-stage coverage map, ordered by dependency, ranged against the ground, with `⋛` comparisons and an open slot. Which named theory fills the open slot is not derivable from the figures. A ranking that claims otherwise is the author's own binding and must be recorded as such, with provenance.

Status: **single-source** for the prohibition (Fig 13 plus the canonical README, which share an author; counted as one witness). Refuter: a figure-derived derivation that selects one named origin-of-life theory without an import from the chemistry frame and without a ground reading.

### F9 - Prestige and agreement carry zero verdict weight

Fig 7 :13:

> **"agreement compounds, evidence does not"**

Fig 7 :35:

> **"A room's agreement is variation, not a verdict. Selection between rooms is where the ground votes."**

Fig 11 :51:

> **"No standing list of good actors survives a change of residual."**

Fig 2 :42:

> **"Buy independence in proportion to the cost of being wrong."**

From *The Recursive Self-Improvement Trap* (essay, not a figure line): "Prestige can fund an action. It can give an action a budget to be tried. But it cannot settle an action. Only the ground can settle it." A famous proponent gives a claim a budget to be tried; the claim is not thereby true. The public contact routes in `03` are channels for refutation, not a jury to be stacked.

Status: **triangulated** across Fig 7 and Fig 11 (room chain vs habitat valence, low overlap). Refuter: a verdict that flips when the same arguments are attributed to unknown authors. If it flips, prestige was doing the work.

### F9b - What actually survives, with mode attached

| claim | mode | figure |
|---|---|---|
| The disagreement is a union of stage conditions and should be split before search | `general` (structural) | Fig 9 :4-5, :54-57; Fig 13 :136 |
| The residual is indexed per stage, never aggregated into one score | `general` | Fig 1 :19, :22 |
| Stages are ordered by dependency, not importance | `general` | Fig 3 :20; Fig 12 :71 |
| Each theory must be ranged against the ground separately | `specified` | Fig 2 :29, :35, :40 |
| A union of high-overlap frames adds nothing; a surplus needs low overlap plus a described residual | `general` | Fig 8 :14, :19-21, :45, :48 |
| The comparison is an ordered threshold `⋛`, not a symmetric merge | `general` | Fig 12 :87; Operators :49 |
| Naming the winning theory is `gap` until a ground reads it | `specified` | Fig 13 :135; Fig 9 :32 |
| Which origin-of-life theory is actually correct | `grounded`, **not reached** | no figure line; needs experiment |

---

## 4. Pre-registered refuter (written before the conclusion and before outreach)

Per the Seat Map: "a falsifier written before the run is a design instrument, not only an honesty device." The shape claim is refuted if any of the following holds:

1. A single mechanism is measured that shrinks the stage disagreements without splitting the chain, and no partition of the stages improves prediction. (Breaks F1.)
2. A published comparison's ranking is unchanged after its worst-covered stage is removed. (Breaks F2.)
3. The stage order can be permuted with no change to any prediction, or a stage with no instrument is scored as if it had been tested. (Breaks F3.)
4. The comparison is shown to be symmetric, or its operands are not quantities on a shared axis, so `⋛` is mistyped and no other figure-defined operator fits. (Breaks F6.)
5. A combined model built entirely from one shared evidence pool, with no described residual, extends reach and makes a new prediction. (Breaks F5.)
6. A figure-derived derivation selects a named theory without import or ground reading. (Breaks F8.)

If any fires, the shape is withdrawn or repaired in this file with the earlier reading preserved. Until one is run, no part of this may be labelled `grounded`.

---

## 5. Recommendation

1. Replace the "which theory wins" question with the stage-by-stage coverage table of §1. One row per stage, one column per theory, cells carrying prediction, residual, and the instrument that would settle them.
2. Fix the stage order by dependency before filling cells (F3). Mark unmeasured links as unexamined, not as failures.
3. Range each theory against the ground separately and declare the evidence pool of every supporting citation (F4, F5).
4. Aim any combination at a described residual drawn from a frame with a genuinely different closure. Otherwise record the union as mute (F5).
5. Write the comparison as `⋛` on stated quantities, not as a conjunction (F6).
6. Leave the winning-theory slot open, label it `gap` or `unreachable` honestly, and say what instrument would close it (F7, F8).
7. Send the refuter with the claim. Do not ask for agreement (F9).

Fig 4 :22: "Only methods cross up. Only head starts come down." Send the method, the coverage table and its falsifiers, not a conclusion.

---

## 6. Canonical usage check and correction log

Two framework sources were read after sections 0 to 5 and govern how the figures may be used.

- `FRAMEWORK/reference/FIGURES_README_canonical.md`: the figures "outrank everything else in the repo"; they are "self-consistent", so "a reading that makes one contradict another has misidentified its domain, not found a flaw"; and they return "a shape, not a name", stopping "at the limit of what the available instruments can distinguish, and records the lineage so the stop is honest." Also: "Indiscernibility is not identity."
- `FRAMEWORK/figures/THE_FORMULA.md`: mode rule; step 7's three distinct questions SEARCHED, INWARD, OUTWARD; "Use filters for the budget and witnesses for the verdict" is Fig 9, but the same discipline appears in the formula's guards.

### Retractions and confirmations, kept visible

| earlier reading in this run | status after the canonical check |
|---|---|
| First pass framed the question as one about inference to the best explanation, with abduction as the central comparison rule | **Retracted.** Fig 9 :4-5 governs the exact phrase "each rule keeps working well on a different subset". Re-census moved the question from a single-domain IBE problem to a union of stage conditions. The SEP *Abduction* source is retained only as a caution about candidate sets, not as the governing frame. |
| Fig 8 :14 "their union adds nothing" read as a ban on combining theories | **Retracted.** It governs the undirected union of high-overlap frames only. Fig 8 :45 permits a surplus where closures differ and a residual is described. Both readings are recorded so the correction is checkable. |
| F6 initially treated `⋛` as a symmetric "compare for similarity" | **Retracted.** Operators :49 defines it as "a threshold relation between two quantities" and marks it asymmetric. The symmetric reading was a spelling of my own question, not a figure line. |
| F4 initially allowed reviewer consensus as a weak witness | **Retracted.** Fig 2 :40 disqualifies agreement from a shared evidence pool for a verdict; it is a convention at best. Reviewers are a channel for refutation, not a witness. |
| F1 split instruction | **Canonically confirmed.** Fig 13 :136 and the canonical README's "narrowing" both support splitting and effect-term description. |
| F7 `unreachable` as a verdict | **Canonically confirmed.** Fig 13 :134 and Fig 8 :39. |
| Mode of the whole package | **Confirmed `specified`.** No measurement settles any cell, so nothing is `grounded`. |
| Apparent strain Fig 5 MDL vs Fig 12 two-currency pricing | **Not strained after re-census.** Fig 5 prices a single term; Fig 12 prices an arrangement of held terms. Different objects. |

### SEARCHED / INWARD / OUTWARD kept distinct

- **SEARCHED** (cheapest, asked first): is a theory covering the uncovered stage already in the current chemical vocabulary and merely unfound? Fig 6 :49: "more search at the same reach: is it in here and unfound? The closure does not change." Fig 9 :44 ("Only a sealed room can be searched to the end, and no frame is a sealed room") means a null search is not proof of absence.
- **INWARD**: extend the instrument from one already returning something (Fig 6 :32: "An instrument is not built from a description. It is improved from a worse instrument already returning something"). Sharpen in our own terms.
- **OUTWARD**: characterise the residual in effect terms and find the frame whose closure predicts its shape (Fig 8 :53, Fig 6 :30). Source gate, shadow test, debited against independence.

These are three questions, not one. INWARD and OUTWARD are opposed and never read against each other (Fig 6 :31).

---

## 7. Honest stop

The shape stops where the instruments stop. The stage-by-stage map, the dependency order, the union split, the `⋛` comparison, and the open slot are figure-derived and checkable. The cells themselves are not filled by this derivation: filling them requires experiments, and experiments are the ground. From *The Hard Problem is About Source*: "The answer is unreached until a better instrument exists", and "An instrument that can't distinguish these cases demonstrates its own inadequacy". Several chemical pathways can produce the same ancient reading; the reading does not name the source. The lineage is recorded so the stop is checkable. Nothing here settles which theory of life's origin is correct.
