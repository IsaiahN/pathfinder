# Figure-grounded audit: persistence of chemical cycles under dilution, degradation, and change

**Mode of this document: `specified` on the shape, `general` on the dependency order, `gap` on the
quantitative thresholds.** Per `THE_FORMULA.md`: "Mode. general · specified · grounded. State which.
Accepted means the ground settled it; otherwise candidate." No measurement settles the thresholds
here, so nothing in this document is `grounded`.

**Status of this derivation: a simulation, not a ground reading.** From *The Recursive
Self-Improvement Trap* (opened 2026-11-23): "LLMs can quickly simulate an approximate answer/output
with the formula found in the architecture post" and "the truly testable output would need to be
derived from the real architecture or working the formula yourself." This is a simulated derivation
checked for internal consistency against the figures. It cannot settle the question it reports on.
See `05_what_shape_means.md` §6.

**Sources.** The local canonical files listed in `10_source_ledger.csv`: `03-FIGURES_TEXT.md`,
`FIGURES_README_canonical.md`, `60_FIGURES_AS_METALAWS.md`, `THE_FORMULA.md`. All figure quotations
below are cited as `Fig N :line` against `03-FIGURES_TEXT.md` and were checked verbatim against that
file before use. World sources were fetched and are recorded separately; they never decide a verdict.

---

## 0. The residual, stated in effect terms

A chemical cycle is a composition whose output re-enters as input. The residual is not "why do
cycles stop," which is a chemistry question with a chemistry answer. It is: **what must be true of a
cycle and its surroundings for the loop to keep closing while matter is dispersed, products are
broken, and conditions move?**

State the options and what each leads to:

- **Option A:** persistence is an intrinsic property of the cycle, a robustness it carries. This
  leads to a name (a "resilient cycle"), with no instrument that would discriminate a resilient
  cycle from a fragile one after the fact.
- **Option B:** persistence is a relation among three things: a composition that closes, a
  difference that can be spent, and a habitat that keeps supplying actors and lets selection run.
  This leads to a shape with three separate grounds and a refuter that can fire.

**Direction bound as an ordinary term before the run.** The sought-for shape is written down now so
it can accrue a residual and be refused: "a persistence answer must name, for each erosion, what
enters the loop from outside and what instrument would show that the loop still closes." If the
derivation cannot produce that, the preference is falsified by its own test. This follows Fig 5
:62-63: "a frame searching for an answer of a particular shape holds that shape as a PREFERENCE
rather than as a term. It is not bound, it predicts nothing, and it accrues no residual, so nothing
here can see it."

---

## 1. R by arity, symmetry, and scale

- **Arity: three conditions, conjunctive, not additive.** Dilution removes actors from contact;
  degradation transforms products and bonds; changing conditions move the habitat. Fig 9 :55 says
  "a bundled problem is usually a union of overlapping conditions, not a list of separate ones."
  The three overlap (dilution and change both act through the habitat; degradation is a reaction
  whose rate the gradient sets), so this is a **union compound**, not a partition, and each overlap
  is its own compound with its own loop.
- **Symmetry: not exchangeable.** Fig 12 :121: "cycle. The output re-enters as input. The sign of
  the loop decides whether it closes, and a chain cannot close by construction." Direction is part
  of the object. Dilution (loss of actors) and degradation (transformation of products) are not the
  same operation and cannot be swapped in a model without changing the prediction.
- **Scale: two orders.** One turnover of the cycle is first order, a composition inside the closure
  of the molecule set. Persistence across turnovers and across environments is second order: the
  settled cycle becomes an operand for a habitat-level loop (Fig 12 :104: "A settled molecule
  becomes an atom for whatever composes over it."). Conflating the two orders is a category error,
  not a smaller one.
- **Per-slot, never averaged.** Fig 1 :19: "The residual is indexed by object slot, not aggregated."
  Fig 1 :22: "Aggregating across slots is how a live signal disappears into an average." A single
  "robustness score" over the three erosions would throw away the only signal that says where to
  look. All verdicts below are kept per domain and never averaged.

---

## 2. Domain census

One line per domain: actors / currency / anchor. No nameable anchor means it is not a domain yet.

| domain | actors | currency | anchor (nameable?) | question type |
|---|---|---|---|---|
| **D1: compositional closure** (the cycle itself) | molecule species as atoms, catalyses as bonds, cycle and catalyst as structures | whether the loop closes and whether the catalyst survives its own use | the figure text defining cycle and catalyst (Fig 12 :119, :121) plus a stoichiometric closure test | partition: which compositions close |
| **D2: thermodynamic drive** | energy, gradient, spectrum, network from the six-term substrate | what can be spent | a measured disequilibrium or flux, which does not move because a frame re-describes it (Fig 10 :24) | partition: which differences can be spent |
| **D3: habitat and selection** | the enumerated habitat (actors, conditions, relations), mineral compartments, protocell populations | contact and capability | differential survival / product retention in a coupled-versus-isolated reactor (Fig 7 :35, Fig 11 :36) | union: overlapping conditions unbundled |
| **D4: degradation as a separate domain?** | hydrolysis and bond-breaking reactions | loss rate | considered and declined: no anchor distinct from the D2 flux measurement and the D3 retention measurement. A reaction class without its own instrument is not a new domain. | folded into D2 and D3 |

**Partition or union:** union compound across D1, D2, D3. The overlaps are the interesting objects:
dilution is a habitat condition acting on composition (D1 x D3); degradation is a reaction acting on
composition at a rate the gradient sets (D1 x D2); change is a habitat/ground condition acting on
both. Fig 9 :54: "And when the split lands on a union rather than a partition, unbundle before you
search again." So each overlap gets its own loop rather than being searched as one big problem.

**Order by dependency (Fig 3 :20):** "The chain is ordered by dependency, not by importance. Each
link consumes what the one above produces."

1. **D3 habitat / ground** is upstream. It supplies the actors and the food set; the habitat is
   "enumerated, never composed" (Fig 11 :43).
2. **D2 gradient / drive** consumes the disequilibrium the habitat supplies. Fig 13 :76: "Energy
   and a gradient compose a flow."
3. **D1 cycle / catalyst** composes the habitat's actors into a closure, driven by that flow.

Therefore Fig 3 :19 governs the whole question: "Optimising a link that already works cannot rescue
one that does not." Strengthening bonds inside a cycle (D1) cannot rescue a habitat that has stopped
supplying actors (D3). A reading taken below a broken link is a reading of nothing (Fig 3 :27: "A
link with no instrument is not a link that works. It is a link nobody has looked at.").

---

## 3. Figure census (bearing before conclusion)

| figure | bearing | verdict it can support |
|---|---|---|
| **1 The Agent** | residual per slot, never aggregated | governs the three-slot structure of R |
| **2 The Ground** | anchor must not update; independence from shared pools | governs what may settle D2 and D3 |
| **3 Dependency Chain** | order by dependency; a break cannot be rescued from above | governs D3 -> D2 -> D1 order |
| **4 The Membrane** | methods cross up, head starts down; round-trip gap | governs how this shape may travel |
| **5 Mint Pipeline** | shape as preference, not a term; three guards as product | governs the pre-registration discipline |
| **6 Closure / Reachability** | closure idempotent; instruments improved from worse ones | governs the gap on thresholds |
| **7 Room Chain** | selection between rooms is where the ground votes | governs D3 |
| **8 Union Surplus** | idempotent closure; search finding nothing is no proof of absence | governs union structure and the honest stop |
| **9 Leave / Arrive** | unbundle a union; describe residual before frame | governs the three-way split |
| **10 Ground Maintainer** | ground does not decay, channel does; keep anchor reachable | governs the reframe of "changing conditions" |
| **11 The Habitat** | capability is agent-and-habitat; isolation substitutes a habitat | governs D3 and encapsulation |
| **12 The Bond** | cycle, catalyst, settled molecule becomes atom | governs D1 and the second order |
| **13 Minimum Viable Set** | gradient is a difference that can be spent; energy alone is directionless | governs D2 |
| **Operators / Symbols tables** | → sequence, ⇒ production, ⋛ comparison; R is per slot | governs the notation, not the chemistry |
| **THE_FORMULA.md** | habitat enumerated; ground does not decay, channel does | corroborating framework text, cited as such |

---

## 4. Findings

### F1 - A cycle closes structurally; a chain cannot close

Fig 12 :121: "cycle. The output re-enters as input. The sign of the loop decides whether it closes,
and a chain cannot close by construction." Fig 12 :119: "catalyst. A part that survives its own use.
Spent and regenerating parts behave differently across uses, and nothing records which a term is."

A reaction set is a cycle when its products are among the reactants that regenerate it; a
one-through chain cannot close by construction. Degradation is fought not by making a molecule
harder but by arranging that the part which survives its own use is regenerated. A catalyst that is
spent and not regenerated behaves differently across turnovers, and nothing in a flat ingredient
list records which kind it is.

**Strain test.** Reading "cycle" as one molecule physically going round a loop strains the line: a
hydrolysed molecule does not go round. Re-census the object: the figure defines a structural
relation between atoms and bonds, so the right object is the closure of the reaction set under its
own products, not the trajectory of one molecule. Under that re-census the line fits without strain.

**Verdict:** `single-source` for the structural claim (both quotations are from Fig 12, one evidence
pool). World corroboration from Xavier et al. 2020 and Busseniers et al. 2021 is secondary and does
not upgrade it to triangulated.

**Refuter:** a linear reaction set with no re-entry of output as input and no regenerated catalyst
sustains a steady-state product population indefinitely under the same loss rates as a matched
closed cycle. If that is shown, F1 fails.

### F2 - The ground does not decay; the channel does

Fig 10 :24: "the ground does not decay, the channel does." Fig 10 :29: "keep the anchor reachable."

The question says conditions change. Read plainly, that seems to say the ground moves, which the
figure forbids. Strain test: force the reading and the whole derivation becomes a contradiction.
Re-census: what changes is the **habitat**, the actors, temperature, pH, wet and dry phase, while
what settles remains settled (differential persistence, thermodynamics, a flux that can be
measured). The wrong object was "environment"; the right objects are habitat (updates) and ground
(does not update). So persistence is keeping the anchor reachable, not finding an anchor that never
changes its setting.

Fig 11 :36: "Where nothing maintains anything, intelligence is a label applied afterwards to a
lineage that met its ground. Nothing was intelligent; selection ran." Fig 7 :35: "A room's
agreement is variation, not a verdict. Selection between rooms is where the ground votes."

**Verdict:** `triangulated` across Fig 10, Fig 11, and Fig 7, three figures with low overlap (one on
channel versus ground, one on maintained versus unmaintained habitats, one on selection between
rooms). All three are framework sources, so this is low overlap inside one evidence pool, not
independent world corroboration.

**Refuter:** a measurement in which the thing that settles persistence moves when a frame
re-describes it (an anchor that updates), or a demonstration that selection does not run in an
unmaintained chemical habitat. If either fires, F2 fails.

### F3 - A spendable difference is required; energy alone is directionless

Fig 13 :14: "Conserved, finite, directionless alone." Fig 13 :22: "a difference that can be spent."
Fig 13 :46-47: "What makes a gradient a gradient is that it can be spent, and neither an ordering
nor a span of space has directedness." Fig 13 :76: "Energy and a gradient compose a flow."

A cycle running at steady state against hydrolysis is not a closed equilibrium object; it is a flow
through a difference that can be spent. Supplying energy without a gradient is not enough, because
energy is directionless alone. The world literature agrees on the need for a source but conflicts
on the quantitative form: England 2013 derives a dissipation bound, Kolchinsky 2024 argues no such
universal bound exists. That conflict is recorded in `09` as a conflict. By the figures' rule it
sends us back to the census, not to a flip: the anchor for D2 is a measured flux in the specific
habitat, not a universal inequality. So the qualitative verdict stands while the quantitative
bound is `gap`.

**Verdict:** `single-source` for the requirement (Fig 13), with a genuine world conflict on the
bound. Not triangulated.

**Refuter:** a chemical cycle that maintains closure across repeated turnovers with zero net
spendable gradient from its surroundings, measured with an instrument that would register a flux if
one were present. If that is shown, F3 fails.

### F4 - Persistence is a property of cycle and habitat, not of cycle alone

Fig 11 :39: "capability is a property of agent-and-habitat, never of the agent alone." Fig 11 :40:
"An improvement that does not change contact changes nothing, however much it improves." Fig 11
:43: "The habitat is enumerated, never composed."

Dilution is not a chemical reaction inside the cycle; it is a loss of contact between the cycle and
the actors it needs. The habitat must be read off the world: actors, conditions, relations. Fig 11
:52: "And contact cascades." A mineral surface three steps out can matter more than the immediate
solution, so scoping the habitat to direct contact is how the relevant actor is missed. Fig 11 :61:
"The seat's power is asymmetric. Introduction is available; exclusion is not." In an unmaintained
prebiotic setting there is no seat at all (F2), so what persists is what the ground kept.

**Verdict:** `triangulated` across Fig 11 and Fig 7 :35, with the dependency order of Fig 3 as a
third, lower-overlap route. The three are framework sources sharing an evidence pool.

**Refuter:** persistence measured in an isolated, unchanging habitat equals persistence in a
habitat where actors and conditions are replenished and selection can act, across the same
perturbation schedule and with the same initial chemistry. If they are equal, F4 fails.

### F5 - This is a union of three conditions; unbundle before searching

Fig 9 :54: "And when the split lands on a union rather than a partition, unbundle before you search
again." Fig 9 :57: "a case in two conditions is not a harder case of either." Fig 1 :19: "The
residual is indexed by object slot, not aggregated."

A single search for "the mechanism of persistence under all three erosions" would be aiming at a
compound. The compound has its own loop, but its three intersections must be cleared separately
because a lever that fixes dilution leaves degradation standing. This is why `08` carries three
sub-claims instead of one grand claim.

**Verdict:** `triangulated` for the union structure across Fig 9 and Fig 1 (different figures,
different objects: one on unions, one on per-slot residuals).

**Refuter:** a single intervention that removes all three erosions at once without acting through
the habitat, the gradient, and the closure separately, with each shown to be necessary. If one
lever clears the whole union because the conditions were never distinct, F5 fails.

### F6 - Encapsulation substitutes a habitat; it does not remove one

Fig 11 :66: "Isolation is not removal of the habitat. It is substitution of one habitat for another."
Fig 11 :67-69 give the two silent failure modes: what you failed to reproduce, and what you brought
with you. `THE_FORMULA.md` restates the same law in its Habitat section: "Isolation substitutes a
habitat, it does not remove one."

A protocell membrane is often offered as the answer to dilution. Under Fig 11 it is a habitat
substitution: the cycle now runs inside a new habitat with actors it did not choose, and it inherits
that habitat's conditions. It does not remove dilution from the world; it moves the residual. This
is a structural prediction about where to look for the failure, not a claim that membranes did not
matter.

**Verdict:** `single-source` (Fig 11, restated in `THE_FORMULA.md`, same framework source).

**Refuter:** a cycle inside a substituted habitat that shows no dependence on which actors and
conditions came with the new habitat, across a panel of otherwise identical substitutions. If that
is shown, F6 fails.

### F7 - The second order needs no new primitive

Fig 12 :104: "A settled molecule becomes an atom for whatever composes over it." Fig 12 :106:
"Nothing composes over what was never admitted as a part." Fig 8 :32: "Closure is idempotent.
Composing inside a closed set never leaves it, so no search, however long, adds an atom."

Once a cycle is settled against the ground, it can serve as an operand for a habitat-level loop.
That is why persistence across environments is not a new kind of chemistry and does not require a
new primitive. It is also why no amount of searching inside one chemistry adds a new atom: what
crosses into the next order is a method or a settled term, not a replay.

**Verdict:** `single-source` for the recursion (Fig 12), with Fig 8 governing the separate question
of why closure alone cannot add an atom. Kept separate; not averaged into one claim.

**Refuter:** a demonstration that a settled reaction closure cannot become an operand for a
higher-order selection process, or that the higher-order claim requires a primitive absent from the
lower order. If either fires, F7 fails.

### F8 - The framework returns a shape, not a name

Fig 9 :32: "you get a kind of thing, never the answer itself." Fig 9 :27-28: "describe it before you
go looking, or any frame you pick will seem to fit." The canonical figures README (local copy) says
the framework returns "what a missing thing would have to look like (a shape, not a name)."

So the deliverable is the shape any persisting cycle must have: closed under its own products,
driven by a spendable difference, embedded in a habitat that keeps supplying actors and lets
selection run, with a named instrument for each. Naming a particular molecule, vent, or pool as the
answer would be projection, not derivation. Fig 13 :115: "The set is closed. The arrangements are
not. That gap is why import exists." A particular geochemical setting is an import from the world
frame and must carry provenance (source gate and shadow test) before it earns any weight.

**Verdict:** `single-source` for the shape limit across Fig 9, with canonical corroboration from a
framework document that shares authorship and therefore carries little independent weight.

**Refuter:** a derivation inside the figures that selects a particular molecule or setting as the
unique answer to persistence, with no ground reading and no provenanced import. If that is produced
and survives a re-census, F8 fails.

### F9 - Quantitative thresholds are a gap, unreached not unreachable

Fig 6 :32: "An instrument is not built from a description. It is improved from a worse instrument
already returning something." Fig 8 :39: "So a search that finds nothing is never a proof of
absence." Fig 13 :118: "infinite effort inside a finite reach."

No figure line gives a critical dilution rate, a hydrolysis constant, a minimum flux, or a number
of turnovers. Those are measurements in a specific habitat, and the world literature supplies
candidates (Deamer 2022 on kinetic traps; Kato 2026 on an input-minus-loss mass balance) but not a
settled value. Under Fig 8 :39 this is not proof that the thresholds are unreachable in principle;
it is an honest `gap` at this budget. Fig 9 :60: "Use filters for the budget and witnesses for the
verdict. Never let a filter hand you a verdict."

**Verdict:** `gap`. Unreached, not declared unreachable.

**Refuter:** not applicable in the same form. This finding is withdrawn if a figure line is produced
that governs a quantitative loss rate, or if a measurement settles one; in the latter case the
status moves from `gap` to `grounded` for that threshold only.

---

## 5. Pre-registered refuter

Written before the conclusion, per the standing instruction that a falsifier written before the run
is a design instrument. The shape claim is refuted if any of the following holds:

1. A reaction set with no re-entry of output as input and no regenerated catalyst sustains a steady
   product population indefinitely under the same loss rates as a matched closed cycle (breaks F1).
2. A cycle maintains closure across repeated turnovers with zero net spendable gradient, measured
   with an instrument that would register a flux if one were present (breaks F3).
3. Persistence in an isolated, unchanging habitat equals persistence in a replenished habitat with
   selection acting, across the same perturbation schedule and initial chemistry (breaks F4).
4. The thing that settles persistence moves when a frame re-describes it, so that agreement, not a
   measurement, decides the outcome (breaks F2).

If any fires, the corresponding domain finding is withdrawn and the synthesis in `07` must be
rewritten. Until one is run, no part of this may be labelled `grounded`.

---

## 6. Recommendation

1. Send the three checkable sub-claims of `08`, not the theory. Each names its own erosion and its
   own refuter (F5).
2. Lead with the reframe in F2: changing conditions are habitat changes, not a decaying ground. It
   is the strongest figure-derived move and the one most likely to be useful to a working chemist.
3. Keep the gradient claim qualitative. Record the England/Kolchinsky conflict rather than choosing
   a side; the anchor is a measured flux (F3).
4. Do not present encapsulation as the answer to dilution. Present it as a habitat substitution with
   two named failure modes (F6).
5. Say `gap` on thresholds plainly. "Unreachable is a verdict, not a silence" applies here as
   "unreached is a verdict, not a silence" (F9).
6. Fig 4 :22: "Only methods cross up. Only head starts come down." Send the generator (the shape,
   the refuter, the dependency order), not a recording of a conclusion.

---

## 7. Canonical usage check and retraction/confirmation log

Two local sources were read after the first sections and govern how the figures may be used:
`FRAMEWORK/reference/FIGURES_README_canonical.md` (the quotes are the authority, not the summary; a
reading that makes one figure contradict another has misidentified its domain) and
`FRAMEWORK/reference/60_FIGURES_AS_METALAWS.md` (the figures are metalaws; the seat reads the ground
and does not ask for rulings the figures already decide).

| earlier reading | status after the canonical check |
|---|---|
| "changing environmental conditions" means the ground changes | **Retracted.** Re-census: the habitat changes, the ground does not (Fig 10 :24). This was the central early error and it is preserved here so the correction is visible. |
| "cycle" means one molecule going round | **Narrowed.** The figure defines a structural bond relation, so the object is closure of the reaction set under its own products (Fig 12 :121). |
| Fig 12 :119 and :121 together would triangulate the cycle claim | **Retracted.** Both are from the same figure, one evidence pool. Marked `single-source`. |
| England's dissipation bound could serve as the D2 anchor | **Retracted.** Kolchinsky 2024 conflicts with it, and a universal inequality is not a measurement in this habitat. Anchor is the measured flux. |
| quantitative thresholds could be derived from the six-term set | **Retracted to `gap`.** No figure line governs a rate; the instrument rule (Fig 6 :32) governs how one would be built. |
| the shape-not-a-name limit forbids naming any chemistry | **Narrowed.** It forbids naming the answer from inside the frame. A provenanced world import is allowed but carries zero weight until its source gate and shadow test are shown (F8). |
| F2 triangulated across Fig 10, Fig 11, Fig 7 | **Confirmed.** Three distinct figures with low overlap, all inside one framework evidence pool. |

**After re-census: strains named, none hidden.** Two strains were met. The first, Fig 10 against a
moving ground, was dissolved by re-census (habitat versus ground). The second, cycle as trajectory,
was dissolved by re-census (structural closure). The England/Kolchinsky conflict is a world-level
conflict, not a figure strain, and it was handled by narrowing the anchor rather than by flipping
the figure verdict.

**Honest stop.** The shape survives all four refuters as written. It is `specified`, ungrounded, and
candidate. What would move it to `grounded` is an experiment, not another argument: a
coupled-versus-isolated reactor measuring closure, flux, and product retention under a controlled
loss schedule. See `08` §5 and `09` VERDICT.
