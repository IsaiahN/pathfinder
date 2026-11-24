# Figure-grounded audit: how background assumptions shape notice, record, disregard

**Mode of this document: `general` on the mechanism shape, `specified` on each domain's mechanism, not `grounded`.** Per `THE_FORMULA.md`: "Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."

**Status: SIMULATED DERIVATION, not a ground reading.** LLM output is a simulacrum; the truly testable output would have to be derived from the real architecture or worked by hand against the figures. This document is checked for internal consistency against the figure text only. It cannot settle the historical question it reports on.

**Sources.** Figure quotes are verbatim from `FRAMEWORK/reference/03-FIGURES_TEXT.md`, cited as `Fig N :line`. No quote is taken from a summary. Formula and Symbols citations are from `FRAMEWORK/figures/THE_FORMULA.md` and the Symbols table in the same figure-text extract. Canonical usage is checked against `FRAMEWORK/reference/FIGURES_README_canonical.md` and `FRAMEWORK/reference/60_FIGURES_AS_METALAWS.md`.

---

## 0. The residual stated in effect terms

The question is not "are historians biased" and not "is observation theory-laden" as a slogan. The effect to be explained is a difference in observation reports under a shared ground.

Let the frame be a researcher. Its library `Γ` holds primitives and everything built from them. Its belief `b` is, in the Symbols table's words, "what the system takes to be the case before it acts", formed from history and inherited prior, mixed by `w`. The action `a` is the act of observing or measuring; `o'` is what actually happened. The residual is per slot:

```
R_s = | Γ(b,a) - o' |     for each object slot s
```

Three operations in the question map to three places in this loop:

- **Notice** is a slot with positive live mass. Symbols table, `R⁺_s`: "the part of the residual on slot s that is positive: something happened there the prediction missed." Fig 1 :14-15 names the boundary diff as "where to look: broken vs novel".
- **Record** is what survives the channel from the observation to a durable report.
- **Disregard** is any of three distinct closures: the slot was sorted into the held bin ("held: the model was right, nothing owed", Fig 5 :11), the slot had no tracker at all, or the surrounding pool agreed to treat the datum as artifact or noise.

So the assumption does not add a filter *after* evidence arrives. It sets `Γ(b,a)`, and `Γ(b,a)` determines which slots have residual mass in the first place. Fig 1 :19: "The residual is indexed by object slot, not aggregated." Fig 1 :28: "The gap is measured per object, not per step. A system that averages across objects has thrown away the only signal that says where to look."

What an answer would look like, written down before the search and bound as an ordinary term (THE_FORMULA, "Direction"): **a three-stage mechanism, assumption setting prediction, prediction setting which slots carry residual, channel and peer pool setting which residuals persist as records.** This is a shape. It is not a name of any particular historical assumption.

---

## 1. R by arity, symmetry and scale

- **Arity.** `R` is indexed by slot `s`, so the question has arity `k`, not arity 1. Fig 1 :20-21: "a global residual near zero with one live slot is a legal state and not an inert one." A global "how much evidence was noticed" number is the wrong object. The unit is the slot.
- **Symmetry.** The three operations are not symmetric. A positive residual is noticed; a zero or held residual is not. There is a threshold (the comparison operator ⋛) between "owed" and "nothing owed". More strongly, the valence of a datum is relative to the residual: the same actor or datum can count for or against depending on what the frame holds. Fig 11 :49: "An actor's valence is relative to the residual, not a property it carries." Direction matters; this is not a commutative grouping.
- **Scale.** Two scales, one agent's step-by-step loop and the population of agents over time. Fig 4 :19-20: "The kernel is the part that does not change with size: the same loop and the same rule for naming what worked, whether one agent is running it or a thousand. Only the actors, the currency and the anchor change." There is a membrane between them with a direction: "Only methods cross up. Only head starts come down" (Fig 4 :22). A historian of science studying a community is one scale up from the researcher at the bench; the loop is the same, the cast is not.

**Dependency order (Fig 3).** The chain runs notice, then record, then corroborate. Fig 3 :20-21: "The chain is ordered by dependency, not by importance. Each link consumes what the one above produces." Effort spent improving corroboration cannot rescue a slot that was never noticed, because a reading taken below the break "is a reading of nothing" (Fig 3 :22-23). Within the search itself the order is SEARCHED, then INWARD, then OUTWARD (THE_FORMULA step 7); the cheapest question is asked first.

---

## 2. Domain census (before choosing any figure line)

One line per domain: actors, currency, anchor, question type. A domain without a nameable anchor is not yet a domain.

| domain | actors | currency | anchor | question type |
|---|---|---|---|---|
| **D1. The perceptual slot** (one agent, one step) | researcher as frame, object slots `s`, belief `b`, weighting `w`, library `Γ`, observation `o'` | residual `R_s`, live mass `R⁺_s`, boundary diff | `o'`, the observation, which does not update on what the frame thinks (Fig 2 :25) | partition: which slots carry residual and which are held |
| **D2. The channel and instrument** (the seam between scales) | instruments, metrics, the channel, the ground-maintainer seat | what can be registered at all; contact with the ground | the ground, which does not decay (Fig 10 :24) | partition: what survives to become a record versus what the channel drops |
| **D3. The community and the pool** (population scale) | researchers, frames, rooms, peer groups, the evidence pool | agreement and residuals; independence | the ground via selection between rooms (Fig 7 :35), never agreement | union compound: a shared pool and a divergent closure both bind |

**Partition or union.** D1 and D2 are partition boundaries: a slot either carries residual or is held; a percept either survives the channel or is dropped. D3 is a **union compound**, not one hard question. Fig 9 :54-58: "a case in two conditions is not a harder case of either. It stops being a mixture and becomes a specific compound." A community that shares an evidence pool and a community that shares a closure are two conditions; clearing one leaves the other binding. Each needs its own loop.

**Strain test applied before concluding.** An early reading tried to make Fig 13 (the six-term minimum set) govern "background assumptions" directly. That strains: the six are the substrate the loop assumes, whereas the assumptions in this question are the *contents* of `b`, `w` and `Γ`, which vary between frames. Re-census moved the Fig 13 reading out (see retraction log). Similarly, Fig 2's "correlation disqualifies a verdict" was first applied to individual noticing; it strains there and governs D3 instead. No figure line was smoothed to fit.

---

## 3. Figure census

| figure | bearing | verdict |
|---|---|---|
| Fig 1 The Agent | residual indexed per slot; frame-internal quantities are disqualified; ground is the only metric | governs D1 and the whole package's metric |
| Fig 2 The Ground | anchor must not update; common cause collapse; independence; correlation valence | governs D3 and the anchor for all three |
| Fig 3 Dependency Chain | ordered by dependency; a link with no instrument is not a working link | governs the notice → record → corroborate order |
| Fig 4 The Membrane | same loop at both sizes; only methods cross up | governs scale separation and distribution |
| Fig 5 Mint Pipeline | four bins plus refuted; "held: the model was right, nothing owed" | governs the disregard branch of D1 |
| Fig 6 Closure and Reachability | instruments improved from worse instruments; no sensor for what never registered | governs D2's limit and D1's no-tracker case |
| Fig 7 Room Chain | "agreement compounds, evidence does not" | governs D3's mirror-chain failure |
| Fig 8 Union Surplus | independence is one quantity read twice; residual first, frame second | governs D3's union reading and the audit's method |
| Fig 9 Leave / Arrive | describe the residual before choosing a frame; filters versus witnesses | governs method and the union versus partition split |
| Fig 10 Ground Maintainer | ground does not decay, channel does; saturated metrics, pooled readings | governs D2 |
| Fig 11 The Habitat | valence relative to the residual; enumerate the habitat, never compose | governs the single-source valence sub-claim and habitat enumeration |
| Fig 12 The Bond | the bond carries information the ingredients do not; isomer | governs the same-evidence-different-assumption analogue |
| Fig 13 Minimum Viable Set | substrate, not variable assumptions | re-censused out; no governing line for this residual |
| Operators table | ⋛ comparison: threshold between two quantities | named as the threshold between noticed and held |
| Symbols table | `b`, `w`, `R`, `R⁺_s`, `Γ`, anchor | primary vocabulary for the whole derivation |

---

## 4. Findings

### F1 - Assumptions act before observation, by setting the prediction (D1, decisive, triangulated)

Symbols table, `b`: "what the system takes to be the case before it acts. Formed from its own history and from what it inherited, mixed by w. Not the observation." Symbols table, `R`: the residual is "the gap between prediction and observation", and "it is always a slice: what cannot be perceived yet is residual and simply cannot be read."

Fig 1 :19, :23, :28:

- "The residual is indexed by object slot, not aggregated."
- "The ground enters as the only metric."
- "The gap is measured per object, not per step. A system that averages across objects has thrown away the only signal that says where to look."

Fig 5 :10-14 gives the sorting of the gap:

- "held: the model was right, nothing owed"
- "new: extend perception, aim the probe here"
- "mis-attached: refit what you have, do not invent"
- "mechanism broken: a new term is owed"

**Reading.** An assumption is not a conscious veto applied to a finished observation. It is a term in the prediction. Where the prediction already accommodates the observation, the gap is sorted as held and nothing is owed, so the datum is not noticed as evidence. Where the prediction misses, the slot carries live mass and the boundary diff directs the probe. This is the mechanism the question asks for, and it is **triangulated across low-overlap figure sources**: Fig 1 (per-slot residual), the Symbols table (`b`, `w`, `R`, `R⁺_s`), and Fig 5 (the four-bin sort). They share the framework but not the same quantity.

**Refuter.** Matched `b`, `w`, `Γ` and identical `o'` inputs that still yield systematically different noticing at the same tracked slots would break this finding.

### F2 - Identical architecture diverges because history and `w` diverge (the "how" of the question, triangulated)

Symbols table, `w`: "How far the belief leans on private history versus inherited prior. w_A + w_B = 1, and w is learnable from the outcomes of past weightings. Two frames with identical architecture diverge because their histories and their w diverge."

Fig 4 :19-20: "Only the actors, the currency and the anchor change." Fig 11 :50: "The same actor is a benefactor to one residual and a malfactor to another, so mutualism and parasitism are relations rather than kinds."

**Reading.** This is the cleanest figure-grounded answer to "how". Two researchers with the same training and the same instruments can still diverge because their histories and their weightings differ, and because the valence of a datum is fixed by *their* residual, not carried by the datum. The divergence is structural, not a personal failing. **Triangulated** across the Symbols table (`w`) and Fig 4 (only the cast changes) with Fig 11 as corroboration for valence; low overlap between the weighting rule and the scale rule.

**Refuter.** Two frames with demonstrably identical `b`, `w`, `Γ` and identical contact that diverge anyway would break the weighting mechanism.

### F3 - A slot with no tracker is the deepest form of disregard (D1 limit, triangulated)

Symbols table, `R`: "what cannot be perceived yet is residual and simply cannot be read." Fig 6 :32: "An instrument is not built from a description. It is improved from a worse instrument already returning something." Fig 6 :34-35: "What is unavailable is a sensor for something that has never registered anywhere, at any resolution." Fig 6 :40: "That is the whole of it."

**Reading.** There are two ways a datum is missed. It can arrive at a tracked slot and be sorted as held (F1), or it can have no slot at all. The second is not fixed by trying harder inside the same frame: closure is idempotent. Fig 8 :32: "Closure is idempotent. Composing inside a closed set never leaves it, so no search, however long, adds an atom." This is the figure's answer to the pessimistic reading of the historical question: it distinguishes an assumption that can be refused from an absence that needs an import. **Triangulated** across Fig 6 (instrument rule) and Fig 8 (idempotence), low overlap.

**Refuter.** Showing that a frame can build a sensor for something that has never registered anywhere, from a description alone, would break this.

### F4 - Recording is a channel property, not a verdict (D2, triangulated)

Fig 10 :24: "the ground does not decay, the channel does." Fig 10 :25-26: "stale percepts, dropped transients, saturated metrics, pooled readings." Fig 10 :27-28: "the output is not a verdict, it is you have lost touch." Fig 2 :37-38: "instruments can be wrong on axes they do not measure."

**Reading.** Once a datum is noticed, whether it is recorded depends on the channel. Assumptions enter here as saturated metrics and pooled readings: the instrument returns something, but what it returns has been coarsened by the frame's own categories. The correct report from this failure is "you have lost touch", not a conclusion about the world. This is the figure's own boundary between an observation problem and a verdict. **Triangulated** across Fig 10 (channel decay) and Fig 2 (instrument axes), low overlap: one is a time/contact claim, the other an anchor-legitimacy claim.

**Refuter.** A channel demonstrably saturated on an axis that the ground still varies along, yet returning a verdict the ground pays, would break this.

### F5 - Instruments are extended from worse instruments, and the residual selects them (D2, triangulated)

Fig 6 :29: "inward: is our representation adequate to hold it? The instrument extends access. Fails by refining forever on an axis that cannot carry it. Sharpen in our own terms." Fig 6 :30: "The description travels. Fails by being sharpened into terms only we can read. Cast it in effect terms." Fig 6 :33: "Nobody specified a telescope from an account of Mars. A wandering point in the sky was already a reading, and every sharper instrument was built on the residual the last one produced."

Fig 3 :26-27: "A link with no instrument is not a link that works. It is a link nobody has looked at."

**Reading.** This explains historical change without making it mysterious. A new instrument is not deduced from the assumption; it is built on the residual the old instrument already returned. The assumption shapes which residuals are available to build from, and therefore which instruments get made. "A link nobody has looked at" is the dependency-chain version of the same point. **Triangulated** across Fig 6 (instrument genealogy) and Fig 3 (instrumented links), low overlap.

**Refuter.** An instrument specified from a pure description, with no prior reading returning a residual, would break this.

### F6 - A shared pool makes community agreement worthless as corroboration (D3, triangulated for the pool claim)

Fig 2 :6-7 names "collapse 2: common cause (hidden shared source)". Fig 2 :18-21: "one evidence pool / they never talk, and still agree / so the agreement is the pool talking, not two frames confirming each other." Fig 2 :39-40: "Correlation has valence. disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool." Fig 2 :41: "efficient for a convention: agreement about a shared meaning is the product, not a corruption of it."

Fig 7 :12-13: "same closure, handed along; agreement compounds, evidence does not." Fig 7 :35: "A room's agreement is variation, not a verdict. Selection between rooms is where the ground votes." Fig 8 :47-48: "Independence is one quantity read twice. How much two frames draw on the same evidence decides both whether their agreement means anything and whether their union has any surplus."

**Reading.** At community scale, "background assumptions" operate as a shared source. Researchers in one tradition can agree without ever talking, because the agreement is the pool talking. That agreement is excellent for a convention (shared meaning is the product) and worthless as evidence about the ground. It also explains disregard: the datum that would break the shared assumption is the one the pool has no category for, so it is recorded as artifact or not recorded at all. Note the asymmetry the figures insist on: this is a verdict about *evidence*, not about the people. Fig 2 :42: "Buy independence in proportion to the cost of being wrong." **Triangulated** across Fig 2 (common cause), Fig 7 (mirror chain) and Fig 8 (independence), three different figures with low conceptual overlap.

**Refuter.** A chain of same-closure rooms that increased evidence rather than only agreement would break this.

### F7 - Valence is relative to the residual; what counts as "good evidence" has no standing list (D3 sub-claim, single-source)

Fig 11 :49: "An actor's valence is relative to the residual, not a property it carries." Fig 11 :51: "No standing list of good actors survives a change of residual." Fig 11 :52-54: "Scoping the habitat to direct contact is how DDT reached the eagles: first-order enumeration, second-order effect, and the residual that mattered was three steps out."

**Reading.** A datum is not intrinsically supportive or threatening. Change the residual and the same record changes sides. The habitat must be enumerated, not composed: Fig 11 :43: "The habitat is enumerated, never composed." For this question, the habitat is everything in contact with the residual: instruments, categories, reviewers, journals, funders, and the assumptions read off their public record. The DDT example shows why first-order scoping misses the effect that matters. **Single-source**: this valence claim comes only from Fig 11. It is marked as such and is not averaged with the triangulated findings.

**Refuter.** A standing catalogue of evidence types that kept the same valence across every change of residual would break this.

### F8 - The ground, not agreement, decides in all three domains (triangulated)

Fig 2 :29-30: "An anchor is whatever settles the question and does not change its answer because of what any frame thinks." Fig 2 :33: "The anchor must not update." Fig 2 :45: "Frames range against the ground. They do not negotiate with it." Fig 9 :60: "Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."

**Reading.** The framework's answer is not that evidence is whatever a community says it is. The ground stays pinned, and frames are corrected by it separately. What assumptions change is contact: which slots are tracked, what survives the channel, and whether a community's agreement is a witness or just the pool talking. This keeps the answer from collapsing into relativism. **Triangulated** across Fig 2 and Fig 9, low overlap (anchor rule versus budget/verdict separation).

**Refuter.** A case in which an anchor moved because frames agreed on it, and the moving anchor still settled the question, would break this.

### F9 - Same ingredients, different bond, different conclusion (supporting analogue, single-source for the figure definition)

Fig 12 :5: "A set of ingredients is not one. The bond is the rest of the information, and it is the half nothing was recording." Fig 12 :94: "The arrangement is the substance." Fig 12 :117: "isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."

**Reading.** Two researchers can hold the same recorded items and still produce different findings, because the assumption is the *bond* between them, and the bond is exactly what a record of ingredients omits. Fig 12 :117 makes this a named structure, not a metaphor. **Single-source** for the figure definition; the history-of-science instances in the world sources are corroboration, not a second figure.

**Refuter.** Same recorded ingredients and different assumptions yielding identical behaviour at the ground in every tested case would break the analogue's usefulness (it would reduce the bond to a relabelling).

---

## 5. Pre-registered refuter

Written before the conclusion, per Seat Map :287: "a falsifier written before the run is a design instrument". The shape claim (assumptions act through `b`, `w` and `Γ` on prediction, then on residual slots, channel and corroboration) is refuted if any of the following holds:

1. Two frames with identical `b`, `w`, `Γ` and identical `o'` inputs systematically notice, record or disregard different evidence. This breaks the Symbols table's `b`/`w`/`R` mechanism and F1/F2.
2. A slot with positive live mass `R⁺_s`, tracked by an intact channel, fails to be noticed. This breaks Fig 1 :20-22 and Fig 10 :27-29.
3. A chain of same-closure rooms increases evidence rather than only agreement. This breaks Fig 7 :12-13 and Fig 2 :40.

If any fires, the derivation is withdrawn or sent back to census. Until one is run, no part of this package is `grounded`.

---

## 6. Recommendation

1. Lead with the residual and the refuter, not with the framework. Fig 10 :52: "Bring a characterised residual, never the source."
2. Keep verdicts per domain. Do not average D1, D2 and D3 into a single "assumptions matter" score; Fig 1 :19 forbids aggregation across slots, and the same discipline applies across domains.
3. Describe the case in effect terms before choosing a historical frame. Fig 9 :27-28: "describe it before you go looking, or any frame you pick will seem to fit."
4. Treat world sources as corroboration only, and count pools, not URLs. Two SEP entries are one encyclopedia witness; two Wikipedia pages are one tertiary witness.
5. Ask for a refutation, not for agreement. Fig 2 :35 and Fig 9 :60.
6. State the mode on every substantive claim. Nothing here is a measurement.

---

## 7. Canonical usage check

Read after sections 0 through 6, and allowed to govern how the figures may be used:

- `FRAMEWORK/reference/FIGURES_README_canonical.md`: "They outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary." Also: "a reading that makes one contradict another has misidentified its domain, not found a flaw", and the canonical limit: the framework says "what a missing thing would have to look like (a shape, not a name)", then stops where instruments stop and records the lineage. "Indiscernibility is not identity."
- `FRAMEWORK/reference/60_FIGURES_AS_METALAWS.md`: the figures are metalaws and decide design questions by derivation; the seat reads the ground and does not ask for a ruling the figures already settle. Fig 10: "the ground does not decay, the channel does."

### Retraction and confirmation log

| earlier reading | status after the canonical check |
|---|---|
| Tried to use Fig 13's six-term set as the definition of "background assumptions" | **Retracted.** The six are the substrate the loop assumes; the assumptions in this question are `b`, `w` and `Γ` contents, which vary between frames. Strain sent the reading back to census (README rule: a strain means the wrong domain). |
| Tried to use Fig 2's "correlation disqualifies a verdict" for individual noticing | **Re-censused, not retracted.** It governs community corroboration (D3). Individual noticing is governed by Fig 1 and the Symbols table. |
| "Recording" treated as a neutral transcription | **Retracted.** Fig 10 :25-26 names saturated metrics and pooled readings as channel failures; the correct output is "you have lost touch", not a record of the world. |
| "Disregard" treated as one mechanism | **Split, confirmed.** Three distinct closures: held bin (Fig 5 :11), no tracker (Fig 6 :34-35), and shared-pool artifact labelling (Fig 2 :18-21). They are not one lever. |
| Fig 11 valence claim treated as triangulated | **Downgraded to single-source.** It comes from Fig 11 alone. Kept visible, not averaged. |
| F8 (the ground decides) | **Canonically confirmed.** The README's "Indiscernibility is not identity" and Fig 2 :33 ("The anchor must not update") both hold. |
| Shape-not-a-name limit applied to specific historical assumptions | **Confirmed and narrowed.** The framework returns the mechanism shape, not the name of the 1912 assumption or the 1999 attentional set. Naming one is a binding from the history-of-science or cognition frame, provenanced as such. |

### Round trip note

The condensation of the figures into "assumptions set prediction, prediction sets noticing" is lossy. What it drops: the distinction between `b` and `Γ`, the channel/ground distinction, the valence relativity, and the shape-not-a-name limit. `11_audit.md` measures the gap `R_T` qualitatively. Treating the condensation as identical to the figure set would set `R_T` to zero and would be the dead-reckoning error Fig 4 :30 names.

### Updated verdict

The mechanism shape survives and is figure-governed: assumptions are terms in the prediction, the prediction sets per-slot residual, the channel sets what is recorded, and a shared pool turns agreement into a convention rather than a witness. Verdicts stay separate: D1 triangulated, D2 triangulated, D3 triangulated for the pool claim and single-source for the valence sub-claim. No domain is a `gap`; the specific historical instantiation is a ground question, and this package does not answer it. Strains after re-census: one, the Fig 13 reading, retracted and recorded above; none hidden.
