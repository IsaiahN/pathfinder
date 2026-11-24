# Figure-grounded audit: how could an early RNA replicator copy itself accurately enough to persist but inaccurately enough to evolve?

**Mode of this document: `specified`, not `grounded`.** It states what would have to be measured. Per `THE_FORMULA.md`: *"Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."*

**Status: simulated derivation, not a ground reading.** The framework's own validator rule applies: LLM output is *"simulacra"* and *"the truly testable output would need to be derived from the real architecture or working the formula yourself"* (Recursive Self-Improvement Trap, world source, opened 2026-11-23). This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on.

**Sources.** Verbatim figure text: `FRAMEWORK/reference/03-FIGURES_TEXT.md`, opened and grepped this session. Canonical usage: `FRAMEWORK/reference/FIGURES_README_canonical.md`. Loop: `FRAMEWORK/figures/THE_FORMULA.md`. World sources are listed in `10_source_ledger.csv` and were each opened before being quoted.

---

## 0. The claim under audit

The question is usually answered with a single number: an error rate below "Eigen's threshold." That answer is audited here, in effect terms, before any world source is consulted.

> A self-replicating RNA must copy accurately enough that the sequence which worked survives each generation, and inaccurately enough that heritable variants exist for selection to act on. The two requirements pull in opposite directions. The claim under audit is that the framework can state the *shape* of the resolution (a band with two failure edges) without naming the number, and that the number, when named, is an import from a world frame and must be provenanced as such.

An answer would look like a constraint plus a route: two failure modes named, the quantity that must stay nonzero at each generation identified, the ground that votes between variants identified, and a falsifier written before the run. This is bound as an ordinary term in `README.md`, so the preference can accrue a residual rather than hiding behind the question.

---

## 1. Residual and domain census

### 1a. Residual, in effect terms

An early RNA replicator faces a two-sided failure. If copying is too accurate, each copy is a mirror of its template: the lineage persists but no heritable difference appears, so there is nothing for selection to choose between and the lineage cannot adapt when conditions change. If copying is too inaccurate, the information that made the molecule a replicator disperses into noise: the lineage loses contact with what worked and the population delocalises into random sequences. The residual is the **band** between those two edges. It is not a single hard question about a "right" error rate; it is a union of two conditions that must both be kept from zero.

### 1b. R by arity, symmetry and scale (Fig 9 :22, :27-28)

- **Arity:** two. A copying fidelity and a selection pressure meet at the handoff between generations. One field with two conditions is a compound, not one hard problem (Fig 9 :55-56: *"A bundled problem is usually a union of overlapping conditions, not a list of separate ones. A single lever clears the region where only one condition holds and leaves the intersections standing, because the second condition still binds."*).
- **Symmetry:** asymmetric. The copy is a directed, lossy transform of the template (template to complement to template). Errors are not interchangeable with corrections; a substitution at one site is not the reverse of a substitution at another. Fig 13 :75 (*"Two states never bond directly"*) is not strained here: the transform goes through a structure, the copying machinery, not state to state directly.
- **Scale:** step (one nucleotide incorporation, one per-site residual) to cycle (one replication of the molecule, output re-enters as input) to lineage (generations of variation and selection). The same loop runs at each scale, with different actors, currency and anchor.

### 1c. One line per domain: actors / currency / anchor

No nameable anchor means it is not a domain yet. Each line below has one.

- **Domain 1, the copying channel.** Actors: template, complement, nucleotides, catalytic RNA or mineral surface. Currency: per-site copy fidelity, an error is a residual on one slot. Anchor: the sequence that actually catalyses, settled by whether the copy still works. This is the ground for chemistry, not agreement between copies.
- **Domain 2, the population and habitat.** Actors: variants, resources, other molecules, conditions. Currency: differential persistence, deaths are the ground's votes (Fig 7 :35). Anchor: the environment that settles which variants remain; it does not change its answer because a variant " intends" to survive. This is the unmaintained mode (Fig 11 :56).
- **Domain 3, the verification frame.** Actors: expert readers of a claim. Currency: agreement and residuals. Anchor: an experiment or a dataset, never agreement. In this simulated run all seats draw on one evidence pool, so this domain's independence is zero and its agreement is not a witness.
- **Domain 4, the framing frame (quasispecies theory).** Actors: master sequence, mutant cloud, mutation rate, selective advantage. Currency: information conserved or lost at a threshold. Anchor: the population's localisation about a master sequence, an observable. It is a frame whose closure predicts the residual's shape (Fig 9 :23-24: *"the frame whose closure predicts it"*), entered only after the residual was described (Fig 9 :27-28).

### 1d. Partition or union

**Union.** Domains 1 and 2 overlap in the replication-with-variation loop: one generation is a room with variation inside and selection between (Fig 7 :33). The overlap is a **specific compound** with its own loop and its own ground, not two separate questions with a shared lever. Fig 9 :57-58: *"What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either."* A single lever that changes fidelity alone clears the region where only the channel condition binds and leaves the intersection standing, because selection pressure still binds.

### 1e. Order by dependency (Fig 3)

Fig 3 :20: *"The chain is ordered by dependency, not by importance."*

1. Contact and perception: can the molecule be copied at all (Fig 3 :5)?
2. Vocabulary: are errors representable as per-site residuals rather than an undifferentiated blur (Fig 1 :19)?
3. Objective: what counts as progress at the handoff (Fig 3 :9-10)? This is the middle link, the one with no instrument in much prebiotic discussion. Fig 3 :27: *"A link with no instrument is not a link that works. It is a link nobody has looked at."*
4. Route: hold both factors nonzero, which defines the band.
5. Learn and carry: the surviving variant becomes the template for the next handoff (Fig 3 :15).

Upstream first. Effort spent optimising the molecular machine before the objective is stated lands at a step that cannot use it (Fig 3 :19).

---

## 2. Figure census (verbatim, cited before findings)

| figure | line(s) | bearing on this residual |
|---|---|---|
| Fig 1 | :19, :22, :28 | residual is indexed per object slot, never aggregated |
| Fig 2 | :35, :40, :45 | agreement is not the ground; a mirror cannot correct; frames range against the ground |
| Fig 3 | :5, :9-10, :15, :19, :20, :27 | dependency order; the middle link with no instrument |
| Fig 4 | :22, :25, :30-32, :34-35 | a seed carries what will grow one; round trip and its gap; only methods cross |
| Fig 5 | :18, :47 | seek the gap that is large and compressible; MDL bargain |
| Fig 6 | :22, :23, :27 | import is the only operator that moves the wall; depth versus genuine absence |
| Fig 7 | :13, :26, :30-31, :32, :33, :35, :36, :37-39 | **governing line**: progress per handoff is a product of two factors; variation inside, selection between; one long room is motion without progress |
| Fig 8 | :32, :39, :50-52 | closure is idempotent; search that finds nothing is not proof of absence; provenance separates convergent derivation from adopted import |
| Fig 9 | :27-28, :32, :54-58, :60 | describe residual before frame; union rather than partition; filters for budget, witnesses for verdict |
| Fig 10 | :24, :42, :52 | ground does not decay, channel does; verifier non-access; bring a characterised residual |
| Fig 11 | :36, :39-40, :56, :70 | no maintainer, selection ran; capability is agent-and-habitat; unmaintained mode; harness proves wiring |
| Fig 12 | :94, :104, :112, :117, :119, :121, :125-127 | arrangement is substance; settled molecule becomes atom; progress is a subtraction; isomer, catalyst, cycle; two currencies |
| Fig 13 | :16, :26, :31-32, :65, :74-75 | what is measured / what it would mean; each turn leaves a remainder, source of randomness; finite operations leave a remainder; cross-kind composition |
| Operators table | :48-52, :63-66 | comparison ⋛ is a threshold relation; a goal is a comparison; bond cost is logarithmic |
| Symbols table | :36-40, :42-43, :102-106 | R is the gap per slot, the aim; ground is the anchor |

Strained readings are named in section 7, not smoothed over.

---

## 3. Pre-registered refuter

Written before the findings, per the standing rule that a falsifier written before the run is a design instrument. The shape claim is refuted if any of the following holds:

1. A self-replicating system is demonstrated that keeps its information across generations with bracket fidelity at the identity limit and still accumulates adaptive heritable variation with no external source of novelty (breaks Fig 7 :36, the requirement that the next room differ from the last).
2. A system is demonstrated in which progress per handoff stays positive with either factor at zero: bracket fidelity zero (Fig 10 :24, channel lost) or ground pressure zero (Fig 7 :39).
3. A re-census shows that the "handoff" in Fig 7 governs a different quantity than molecular copying fidelity, so the line strains and the domain was misidentified. The strain would be sent to Isaiah as a gap, not papered over.
4. A world result shows sustained evolvability and information retention inside a regime where the threshold relation predicts dispersal, in a landscape where the threshold's stated preconditions hold. That would qualify or kill the numeric binding, not automatically the shape.

If any fires, the shape claim is withdrawn or narrowed. Until one is run, no part of this may be labelled `grounded`.

---

## 4. Findings

### F1 - The residual is a union compound, not a tuning problem (`general`)

Fig 9 :54: **"And when the split lands on a union rather than a partition, unbundle before you search again."** Fig 9 :55-56: **"A bundled problem is usually a union of overlapping conditions, not a list of separate ones. A single lever clears the region where only one condition holds and leaves the intersections standing, because the second condition still binds."** Fig 9 :57-58: **"What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either."**

The question "accurately enough but inaccurately enough" is not one dial with an optimum. It is two conditions, persistence and evolvability, that share a field. Treating it as a single optimisation is the error the figure names: a lever that raises fidelity clears the accuracy condition and leaves the variation condition standing.

- **Refuter:** show that both failure modes are the same condition under two names, so one lever clears both with no compound residue.
- **Triangulation status:** triangulated across Fig 9 (union/partition) and Fig 7 (two-factor product, F2 below). Low overlap: one governs question type, the other governs progress per handoff.

### F2 - The governing line: progress is a product, and zero either factor stops the chain (`general`, structural; `specified` when applied to copying)

Fig 7 :26: **"Progress per handoff: R = h² × S"**. Fig 7 :37-39: **"Progress per handoff has two factors. Zero either and the chain runs in place:"** **"the bracket's fidelity across the handoff"**, **"the ground's pressure on the room"**. Fig 7 :30-31: **"every room closes some of the gap; no finite number of them ever arrives"**.

This is the line that governs the residual. One factor is the fidelity with which the bracket (the information that worked) survives the handoff from one generation to the next. The other is the pressure the ground applies between rooms. A product, not a sum: raising one cannot compensate for the other at zero. This is the figure's own answer to "how could it copy accurately enough": accuracy is not an end in itself, it is one factor of a product that also requires selection.

- **Refuter:** a demonstrated system with positive progress and one factor measured at zero. That breaks the product law at the ground.
- **Triangulation status:** `single-source` for the exact product formula (Fig 7 alone), triangulated for the qualitative two-factor claim across Fig 7 and Fig 11 (habitat modes supply the pressure side, low overlap).

### F3 - Too much accuracy is a mirror chain: identity produces no new term (`specified`)

Fig 7 :13: **"agreement compounds, evidence does not"**. Fig 7 :32: **"→ one long room: motion, no progress"**. Fig 7 :36: **"A chain of mirrors is one long room. The next room must differ from the last, and match the residual it surfaced."** Fig 7 :35: **"A room's agreement is variation, not a verdict. Selection between rooms is where the ground votes."**

If every copy is identical to its template, the chain is a mirror chain. It can run for many generations and arrive nowhere, because agreement between copies is variation inside a room, not a verdict; the ground votes only between rooms that differ. Operators table :65-67 defines identity (≡) as *"two names, one referent"*, with the test *"substitute one for the other. Is anything lost? No."* A perfect copy is an identity bond: it adds no term to the library. Fig 12 :117: **"isomer. Same atoms, different bond, different substance."** The identity copy and the errorful copy differ in bond, not in atoms.

- **Mode note:** `specified`, not `grounded`. No measurement here shows where the identity edge lies for a real ribozyme.
- **Refuter:** a perfect-copy system that generates adaptive heritable novelty from the copying operation alone, with no external import. That would break the identity reading.
- **Triangulation status:** triangulated across Fig 7 (mirror chain), Fig 12 and the Operators table (identity bond), with low overlap between handoff dynamics and bond definitions.

### F4 - Too little accuracy is channel decay: the information leaves (`specified`)

Fig 10 :24: **"the ground does not decay, the channel does"**. Fig 13 :31-32: **"because each turn leaves a remainder (the residual) that re-enters the next, it is also where the randomness comes from: a remainder compounding through a chain that amplifies is chaos, and the detail a crossing discards reappears above it as noise."** Fig 13 :65: **"no finite operations to leave a remainder"**. Fig 12 :121: **"cycle. The output re-enters as input. The sign of the loop decides whether it closes, and a chain cannot close by construction."**

The information that worked does not fade on its own; the copying channel loses contact with it. Every finite copying operation leaves a remainder, and the remainder re-enters the next turn. Self-replication is a cycle whose output is its own input, and whether the cycle closes is decided by the sign of the loop: too large a remainder and it fails to close, dispersing the population into random sequences. This is the error-catastrophe edge in the figures' own terms, without importing the name.

- **Refuter:** a system with bracket fidelity at zero that still keeps the information that worked. That breaks the channel-decay claim at the ground.
- **Triangulation status:** triangulated across Fig 10 (channel decay), Fig 13 (remainder and finite operations), Fig 12 (cycle closure), and Fig 4 :34-35 (*"A seed carries no small tree: it carries what will grow one"*). Low overlap.

### F5 - Errors are per-site, not a global average (`general`)

Fig 1 :19: **"The residual is indexed by object slot, not aggregated."** Fig 1 :22: **"Aggregating across slots is how a live signal disappears into an average."** Fig 1 :28: **"The gap is measured per object, not per step. A system that averages across objects has thrown away the only signal that says where to look."**

A copy error is a residual on one nucleotide slot. A single global error rate is an average over slots, and the average is exactly the quantity that tells you nothing about which information is being lost. This constrains how the band is to be measured: the live question is which slots carry positive error mass, not only the mean. A mutation in a catalytic site and one in a neutral loop are not the same event.

- **Refuter:** a copy-error distribution in which per-site residuals cannot be indexed and the global average is sufficient to tell where to look.
- **Status:** `single-source` for the slot-indexing rule (Fig 1), corroborated by the world source on mutational robustness (Wilke 2005, section 7).

### F6 - There is no maintainer in the prebiotic case; selection ran (`general`)

Fig 11 :36: **"Where nothing maintains anything, intelligence is a label applied afterwards to a lineage that met its ground. Nothing was intelligent; selection ran."** Fig 11 :56: **"Unmaintained. No maintainer and no live frame in the seat. The habitat is pure contact, nothing selects, and what survives is what the ground kept."** Fig 11 :40: **"A system cannot be made more capable by improving the agent in isolation. An improvement that does not change contact changes nothing, however much it improves."**

An early RNA replicator is in the unmaintained mode. There is no seat distilling impactful actors or introducing what was not there. That matters for the domain census: the pressure factor S in F2 is not a designer choosing variants, it is the habitat's differential persistence. Anyone who answers the question by describing an optimising agent has silently moved to the maintained mode and changed the domain. Fig 11 :70: **"A test harness is a substituted habitat. Which is why a synthetic solve proves wiring and never capability."** A laboratory ribozyme that copies itself in a controlled mix proves the wiring, not that the whole evolutionary system could arise under plausible conditions.

- **Refuter:** show a seat acting on the prebiotic habitat, distilling or introducing actors, which would move the case to maintained mode and require a new census.
- **Status:** triangulated across Fig 11 (habitat modes) and Fig 2 (anchor must not update), low overlap.

### F7 - The question is a threshold comparison, a goal, not a single optimum (`specified`)

Fig 12 :112: **"A plan is a sequence. A goal is a comparison. Progress is a subtraction. A refutation is a negation, and that one is not a bond."** Operators table :48-52: comparison ⋛ is *"a threshold relation between two quantities"*, with the test *"is it about which is larger, rather than both being present? Yes."* Operators table :51: **"a goal is a comparison, which is why a vocabulary without it cannot state one"**. Fig 12 :94: **"The arrangement is the substance."**

"Accurately enough but inaccurately enough" is two threshold comparisons against a bound: fidelity above the dispersal edge and below the identity edge. Fig 12 :125-127: **"A composition costs in two currencies, and they do not add."** **"Bits price the description. Actions price finding out whether it holds."** The fidelity band is priced in bits (how much information a sequence can hold) and in actions (what it costs a population to test a variant against the ground). These are different units; a claim that maximises one while ignoring the other has not answered the question.

- **Refuter:** show that the two edges are a sequence (→) or a conjunction (+) rather than a comparison (⋛) with two bounds. That would kill the goal reading.
- **Status:** `single-source` for the bond typing (Operators table), triangulated with Fig 12 for the two currencies.

### F8 - The number is an import and must be provenanced (`general`)

Fig 6 :23: **"No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs."** Fig 8 :50-52: **"Convergent derivation and adopted import look identical in the contents. Only the record of where each came from separates them, and the surplus lives only where the closures differ."** Fig 9 :32: **"→ you get a kind of thing, never the answer itself"**.

The figures yield the band's shape, not its width in bits or its critical mutation rate. That rate comes from quasispecies theory, a frame whose closure predicts the residual's shape. Under the figures' rule it is an import: it must carry a source gate (provenance) and a shadow test (does it explain a gap the figures left open?), and it is debited against the importing frame's independence. Writing it down as if the figures derived it is the named provenance failure.

- **Refuter:** derive the numeric critical mutation rate from the figures alone. By the figures' own rule this cannot be done; the refuter is structural, and firing it would mean the framework's closure claim is wrong.
- **Status:** `single-source` for the import rule across Fig 6 and Fig 8 as a pair; the pair is low-overlap (wall movement versus surplus origin), so it is reported as triangulated for the rule.

### F9 - World qualification: the threshold is conditional, not universal (`specified`, world)

World source, opened 2026-11-23: Claus O Wilke, "Quasispecies theory in the context of population genetics", BMC Evolutionary Biology 5:44, 2005. Verbatim: *"Eigen described the error threshold in his 1971 paper as a limit to the amount of information a genome can store at a given mutation rate. If the mutation rate is increased beyond this limit, then the population structure breaks down, and the population disperses over sequence space."* And: *"Wagner and Krall have proven mathematically that the condition for the existence of an error threshold is precisely the complete absense of lethal genotypes"* [spelling as published].

This is a genuine qualification. The band's *shape* from F2 to F4 does not depend on which fitness landscape holds: zero either factor still stops the chain. But the *width* of the band, and whether a sharp threshold exists at all, depends on the landscape. With lethal genotypes the sharp Eigen threshold is absent even though high mutation pressure still destroys localisation by other routes (mutational meltdown, Muller's ratchet). This is recorded as a qualification on the numeric binding, not as a conflict that flips the figure verdict. A conflict would send us back to the census; here we went back to the census and the two objects separated: Fig 7 governs the handoff, the threshold relation governs one model of the population inside the room.

- **Refuter:** demonstrate a sharp error threshold in a landscape with lethal genotypes under the stated assumptions. That would refute the qualification.
- **Status:** `single-source` (Wilke 2005), with the underlying Wagner and Krall result cited by Wilke and not independently opened here. Marked as such in the ledger.

### F10 - The middle link has no instrument (`general`)

Fig 3 :26-27: **"The link between them, having terms for what a situation offers and being able to say what would count as progress, has neither, so it attracts the least attention and the fewest instruments."** **"A link with no instrument is not a link that works. It is a link nobody has looked at."** Fig 3 :19: **"Optimising a link that already works cannot rescue one that does not."**

Most effort in origins-of-life chemistry goes into link 1 (can the nucleotide link at all) and link 4 (can a ribozyme copy a template). The question here sits at link 3: what counts as progress across a handoff. Until an instrument says what would count, claims about "accurate enough" are preferences, not terms. Fig 5 :62-65 (the formula's Direction step) names the remedy: write the sought-for shape down as an ordinary term and let it accrue a residual. That is what `README.md` does.

- **Refuter:** name an instrument that measures what counts as progress at the fidelity band in a prebiotic-relevant setting. If one exists and is already returning something, the "no instrument" reading is wrong.
- **Status:** `single-source` (Fig 3), corroborated by world sources that explicitly say known systems are not yet capable of Darwinian evolution (Obermayer and Frey 2010, read 2026-11-23).

### What survives (verdicts kept separate, never averaged)

| claim | mode | figure / source |
|---|---|---|
| The residual is a union of accuracy and variation, not one dial | `general` | Fig 9 :54-58 |
| Progress per handoff is h² × S; zero either factor stops the chain | `general` | Fig 7 :26, :37-39 |
| A perfect copy is an identity bond and adds no new term | `specified` | Fig 7 :36, Operators :65-67 |
| Errors are per-site residuals; the global average hides the live slots | `general` | Fig 1 :19, :22, :28 |
| The prebiotic case has no maintainer; selection ran | `general` | Fig 11 :36, :56 |
| The answer's shape is a bounded band with two failure edges | `specified` | F2 to F4 combined |
| The numeric threshold is an import, and is landscape-conditional | `specified` | Fig 6 :23, Fig 8 :50-52; Wilke 2005 |

These rows are not averaged into a single score. A failure in one row is a failure of that row, not a reason to dilute the others.

---

## 5. Recommendation

1. State the answer as a shape with two named failure edges, not as a single error rate (F1, F2).
2. Quote Fig 7 :26 and :37-39 as the governing lines; they are the only place the figures price fidelity directly.
3. Keep the per-site indexing rule visible; a global error rate alone does not tell you which information is being lost (F5).
4. Provenance the numeric threshold when it is used (F8), and record the landscape conditionality (F9) instead of hiding it.
5. Lead outreach with the shape claim and the pre-registered refuter, not with the theory. Fig 10 :52: **"Bring a characterised residual, never the source."**
6. Fig 4 :22: **"Only methods cross up. Only head starts come down."** Send the derivation and the refuter, not a recording of a conclusion.

---

## 6. Canonical usage check

Two usage rules were applied after the first five sections:

- The figures README (*"They outrank everything else in the repo... the quotes are the authority, not this summary"*) governs citation. Every `Fig N :line` quote above was taken from `03-FIGURES_TEXT.md` this session, not from a summary.
- The README's re-census rule: *"a reading that makes one contradict another has misidentified its domain, not found a flaw."* Applied in section 7 to the apparent conflict between Fig 7 (handoff fidelity) and Wilke's landscape-conditional threshold: different objects, so no contradiction.

No figure line was used as a verdict where it only governs another quantity. Nothing here claims `grounded` status.

---

## 7. Retractions and confirmations

| earlier reading | status after re-census |
|---|---|
| "The answer is Eigen's error threshold number" | **Retracted.** The figures return a shape, not a name (Fig 9 :32). The number is an import with a source gate (F8). |
| Fig 7 :35 *"A room's agreement is variation, not a verdict"* initially read as a claim about molecular copying | **Re-censused.** It governs the population frame (Domain 2), not the channel (Domain 1). Both domains retained with separate verdicts. |
| Fig 13 :31-32 randomness initially read as instrument noise | **Re-censused and confirmed.** It is the heritable remainder that re-enters the next cycle, the raw material of variation, not measurement error. |
| Wilke 2005 seems to conflict with the threshold shape | **Re-censused, not a flip.** Fig 7 governs handoff progress; the error threshold governs population localisation in one model. The shape stands; the numeric binding is qualified (F9). |
| F2 exact formula treated as triangulated | **Narrowed.** The exact product R = h² × S is `single-source` (Fig 7). Only the qualitative two-factor claim is triangulated with Fig 11. |
| "No maintainer" read as meaning no selection | **Corrected.** No maintainer means unmaintained mode: nothing selects in the seat sense, but the habitat still settles which variants remain (Fig 11 :56). Selection ran. |

**Strains after re-census.** One, named: the operators table types ⋛ as a relation between two quantities, while F7 applies it to two bounds (edge distances) of a fidelity band. The bounds are quantities at the population level, so the typing is defensible, but whether a threshold comparison over two edges is one ⋛ or two is not decided by the figure. It is recorded as a strain, not hidden. **No other strain.** Nothing here is claimed as a ground reading.

**Honest stop.** The derivation reaches the shape, the two failure edges, the per-site indexing rule and the no-maintainer condition. It does not reach a critical mutation rate, a particular ribozyme, or a claim that any prebiotic system actually occupied the band. Those require a ground: a serial-transfer experiment with measured per-site fidelity and a habitat that applies pressure. Until one exists, the verdict is `candidate`, `specified`, ungrounded.
