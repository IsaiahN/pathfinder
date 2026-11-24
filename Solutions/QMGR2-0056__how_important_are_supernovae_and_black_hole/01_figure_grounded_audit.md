# Figure-grounded audit: how important are supernovae and black-hole activity in pushing gas out of galaxies?

**Mode of this document: `specified`, not `grounded`.** It states what would have to be measured. Per `THE_FORMULA.md`: *"Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."*

**Status of this derivation: a simulation, not a ground reading.** *The Recursive Self-Improvement Trap*: LLM output is *"simulacra"* and *"the truly testable output would need to be derived from the real architecture or working the formula yourself."* This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the claim it reports on. See `05_what_shape_means.md` section 7.

**Sources.** All figure quotes taken verbatim from `FRAMEWORK/reference/03-FIGURES_TEXT.md` this session. Canonical usage rule from `FRAMEWORK/reference/FIGURES_README_canonical.md`. World sources listed in `10_source_ledger.csv`, each opened 2026-11-23.

---

## 0. The claim under audit and the residual in effect terms

The question asks for an attribution: how much of the gas expelled from galaxies is due to supernovae (SN) and how much to black-hole (AGN) activity. It is tempting to answer with one number. The figures forbid that before the domain census is done.

Restated as an effect:

> R_s = |Γ(b,a) - o′|, measured per galaxy-slot s (halo mass, redshift, gas geometry), where
> Γ = the galaxy's gas-regulatory library (its predicted reservoir and outflow given feedback),
> a = feedback injections (SN energy and momentum; AGN winds, jets and radiation),
> o′ = observed gas mass, SFR, molecular/ionised outflow rate, metallicity, baryon inventory.
>
> "How important" asks what share of the fall in R_s is attributable to each action channel.
> It is a **union compound**, not one hard question (Fig 9 :55).

The sought-for shape, written down and bound as an ordinary term before the run (Formula, "Direction"): *a per-slot attribution function with a union structure and a source-discriminating instrument*. Until it is bound it predicts nothing and no check in the loop can see it (Fig 5 :62-66).

Options and what each leads to:

- **Option A (one universal dominant channel):** predicts an importance coefficient that transfers across all slots. Fig 11 :49 says an actor's valence is relative to the residual, so this option is already suspect before any world reading.
- **Option B (slot-relative union, non-additive overlap):** predicts that the attributable share flips with the residual and that the intersection of the two channels needs its own loop. This is the option the figures shape.

---

## 1. Domain census (before choosing figure lines)

Describe R by arity, symmetry, scale.

- **Arity:** a multi-place relation (galaxy library Γ, feedback action a, observed gas state o′), indexed by slot s and ordered by cosmic time. It carries an ordered production bond (SN/AGN produces outflow, Fig 12 :76) and a comparison bond (importance is "which is larger", Fig 12 :87). It is not a symmetric conjunction.
- **Symmetry:** not symmetric. The measured gas reservoir does not update on the model's opinion of it (Fig 2 :29). "Important" is a threshold comparison between channels, not a quantity both carry.
- **Scale:** the slot is one galaxy; "importance in transforming the galaxy population" exists only at the population scale; the time index crosses the membrane between a galaxy's step loop and population selection (Fig 4 :21). The residual is intrinsically cross-scale.

One line per domain: actors, currency, anchor. **No nameable anchor means it is not a domain yet.**

| domain | actors | currency | anchor | status |
|---|---|---|---|---|
| D1 Supernova / stellar channel | massive stars, clustered SNe, superbubbles, ISM | mechanical energy and momentum (about 10^51 erg per SN), mass-loading η | observed mass-loading, SFR, molecular outflow rate | admitted |
| D2 Black-hole / AGN channel | SMBH, accretion disc, winds, radio jets | accretion power, jet kinetic energy, coupling efficiency | BH mass, AGN luminosity, outflow energetics | admitted |
| D3 Galactic gas habitat and CGM | cold disc, halo gas, inflows, environment, metals | gas mass flows, metallicity | baryon inventory, mass-metallicity relation | admitted |
| D4 Measurement and selection channel | telescopes, spectrographs, simulations, instruments | contact, spectral resolution | the ground, which does not decay while the channel does (Fig 10 :24) | admitted |
| X1 "Feedback" as one undifferentiated cause | none distinct | none | no anchor separate from D1 plus D2 | not a domain yet, absorbed as union |
| X2 "Dark-matter halo sets everything" | halo | structural potential | already inside D3 | absorbed |

**Partition or union.** Union, not partition. SN and AGN overlap: SN fuels or starves the SMBH, AGN entrains the SN-driven fountain. A single lever (SN only, or AGN only) clears the region where one condition holds and leaves the intersections standing (Fig 9 :55, Fig 9 :57). The overlap is a compound with its own loop.

**Dependency order (Fig 3).** perception (measure the gas) → vocabulary (terms for outflow and mass-loading) → objective (define what "important" counts as) → planning → learn and carry. Fig 3 :27 warns that a link with no instrument is not a link that works; the attribution link (D4) is the one most often assumed rather than measured.

---

## 2. Findings

### F1 "How important" is per-slot, not a cosmic average (decisive against Option A)

Fig 1 :19:

> **"The residual is indexed by object slot, not aggregated."**

Fig 1 :22:

> **"Aggregating across slots is how a live signal disappears into an average."**

An "importance of supernovae in galaxies" averaged over all galaxies is exactly the aggregation the figure forbids. Low-mass galaxies can be SN dominated while massive haloes are AGN dominated, and an average erases where the signal lives. The world literature agrees this is mass dependent, but that is secondary corroboration (Biernacki and Teyssier 2018, D1/D2). **Mode `general` for the indexing rule, `specified` for the galaxy application. Refuter:** a single importance coefficient that predicts the residual across slots after the slots are stratified by halo mass and redshift.

### F2 The two channels are a union, not a list (governs the structure)

Fig 9 :54 and :55:

> **"And when the split lands on a union rather than a partition, unbundle before you search again."**
> **"A bundled problem is usually a union of overlapping conditions, not a list of separate ones."**

Fig 9 :57:

> **"What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either."**

SN plus AGN is not "SN feedback plus AGN feedback" summed. It is a compound. A world source states the point in the field's own terms: Biernacki and Teyssier report *"a non-linear coupling"* when both act in tandem. The ecology literature independently finds that combined effects are frequently non-additive (Crain et al. 2008, Birk et al. 2020, low overlap with astrophysics). **Mode `specified`. Refuter:** a single channel that accounts for all gas removal across all slots with no interaction term.

### F3 Actor valence flips with the residual (governs D1 and D2)

Fig 11 :49 and :51:

> **"An actor’s valence is relative to the residual, not a property it carries."**
> **"No standing list of good actors survives a change of residual."**

Supernovae are not "the important feedback" in the abstract. In a dwarf galaxy they can drive a strong outflow; in a massive halo the escape velocity is too high for them to matter and AGN feedback takes over (Biernacki and Teyssier 2018; Veilleux et al. 2005 review). The same is true of AGN: strong AGN feedback is seen only in the most powerful systems (Heckman and Best 2014). The framework's rule and the field's data point the same way. **Triangulated** (Fig 11 valence rule plus Fig 2 anchor rule, low overlap). **Mode `specified`. Refuter:** an invariant channel ranking across a documented change of halo mass or gas geometry.

### F4 The habitat must be enumerated, not composed (governs D3)

Fig 11 :43 and :52:

> **"The habitat is enumerated, never composed."**
> **"And contact cascades."**

Gas removal is not just "explosion hits gas". It is a cascade: SN metals enhance cooling, cooling changes inflow, inflow feeds the SMBH, AGN entrains the fountain, fountain gas falls back (Biernacki and Teyssier 2018, section 4.2 and 5.2). A first-order census misses the residual that matters three steps out, the same structure Fig 11 :52-54 names for DDT and the eagles. And the seat's power is asymmetric (Fig 11 :61: *"Introduction is available; exclusion is not."*): one cannot subtract the halo from the problem. **Triangulated** (Fig 11 enumeration plus Fig 4 membrane rule). **Mode `specified`. Refuter:** a direct-contact-only census that predicts the observed gas removal as well as a cascaded, enumerated one.

### F5 Attribution needs an instrument, not an argument (governs D4)

Fig 6 :32 and :33:

> **"An instrument is not built from a description. It is improved from a worse instrument already returning something."**
> **"Nobody specified a telescope from an account of Mars."**

Fig 6 :34 (substring):

> **"the search for a proto-instrument is a search for one that is already there."**

Different channels produce the same observed outflow: a metameric reading. The field says so directly. Buchner (2024): *"It is observationally difficult to distinguish the proposed feedback mechanisms and establishing causality for most systems."* Harrison (2013): *"which physical process is responsible for the most extreme ionised gas kinematics?"* is raised and left open. Fig 5 :14 names the bin: *"mechanism broken: a new term is owed"*, and the owed thing is an instrument that discriminates sources, not another review. **Triangulated** (Fig 6 instrument rule plus Fig 12 two-currency rule). **Mode `specified`. Refuter:** a single observable that uniquely assigns an outflow to SN or AGN at all halo masses, with the discriminating resolution demonstrated rather than asserted.

### F6 Two currencies, not one (refines the verdict)

Fig 12 :126:

> **"Bits price the description. Actions price finding out whether it holds."**

A short statement ("AGN drives the outflow") is cheap in bits and may take a whole observing budget to settle; a long chain of cheap parts may be expensive to describe and cost one action to refute. The literature's disagreement about importance is partly an actions/bits confusion: scaling relations are cheap descriptions whose channel assignment costs telescope time. **Mode `general`. Refuter:** a case where the bit-cost and the action-cost are the same quantity in the same units.

### F7 Isomers or functional group (supporting, see `06_isomers_and_order.md`)

Fig 12 :117:

> **"isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."**

Fig 12 :124:

> **"functional group. A substructure whose presence fixes the outcome."**

As written in the literature, SN and AGN share few atoms (massive stars versus accretion), so the weaker claim is that both belong to a functional group "feedback that ejects gas". Over the full shared six-term substrate they can be written as isomers. The isomer claim is checkable and has a falsifier; it is not a ground reading. **Mode `specified`.**

### F8 The numerical magnitude is a `gap`, not a hidden answer

Fig 9 :32:

> **"you get a kind of thing, never the answer itself."**

Fig 13 :134 and :135:

> **"Unreachable is a verdict here, not a silence,"**
> **"It cannot say which primitive is missing, because naming it would mean already holding it."**

Fig 8 :39:

> **"So a search that finds nothing is never a proof of absence."**

No figure line returns a fraction "SN 60 percent, AGN 40 percent", and the world sources openly disagree on the attribution. The figures return the shape (per slot, union, source-discriminator owed) and stop. Crucially this is **unreachable at this instrument budget**, not declared underivable in principle: Fig 8 :40 distinguishes the two, and the remedy is SEARCHED first, then INWARD (extend the instrument), then OUTWARD (import a frame with a differing closure). **Status `gap` for the magnitude, `triangulated` for the shape.**

### F9 Filters are not witnesses

Fig 9 :60:

> **"Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."**

Mass-loading factors, outflow rates, coupling efficiencies and survey detection limits are filters for the observing budget. They do not decide the verdict about the shape. Several published yuan values are estimates of coupling, not measurements of attribution. **Mode `general`.**

---

## 2b. Figure census (which lines bear and with what status)

| figure | bearing | status |
|---|---|---|
| Fig 1 | residual per slot; no aggregation | triangulated with Fig 2 |
| Fig 2 | anchor and independence; triangulation not negotiation | triangulated with Fig 11 |
| Fig 3 | instrumented middle link; dependency order | single-source, structural |
| Fig 4 | lossy membrane, cross-scale | single-source, structural |
| Fig 5 | mechanism broken owes a term; three guards as product | triangulated with Fig 6 |
| Fig 6 | instrument improved from a worse one; import moves wall | triangulated with Fig 12 |
| Fig 7 | agreement compounds, evidence does not | triangulated with Fig 2 |
| Fig 8 | idempotent closure; absence not disproved; two kinds of unreachability | triangulated with Fig 13 |
| Fig 9 | union before search; a kind of thing, never the answer | decisive for F2 and F8 |
| Fig 10 | ground does not decay; verifier non-access | triangulated with Fig 11 |
| Fig 11 | habitat enumerated; valence relative to residual; cascades | decisive for F3 and F4 |
| Fig 12 | two currencies; isomer and functional group; settled molecule as atom | decisive for F6 and F7 |
| Fig 13 | cross-kind composition; unreachable is a verdict | triangulated with Fig 8 |

Strained readings are named in `11_audit.md` section 5, not smoothed over.

---

## 3. Pre-registered refuter

Required before any outreach: Seat Map :287: *"a falsifier written before the run is a design instrument, not only an honesty device."*

The shape claim is refuted if any of the following holds.

1. A single importance coefficient predicts the residual after galaxy-slots are stratified by halo mass, redshift and gas geometry (breaks F1, Fig 1 :19).
2. One channel alone accounts for all gas removal across all slots, with no interaction term, and the second channel's removal is zero where it is activated alone (breaks F2, Fig 9 :55).
3. Channel ranking is invariant across a documented change of residual, for example the same SN/AGN importance in a dwarf and in a massive halo at the same redshift (breaks F3, Fig 11 :49 and :51).
4. A direct-contact-only census predicts observed gas removal as well as a cascaded enumeration of the CGM and inflow (breaks F4, Fig 11 :43 and :52).
5. A single observable uniquely assigns an outflow to SN or AGN across halo masses with demonstrated discriminating resolution (closes F5 and the `gap` in F8, in which case the numerical verdict becomes reachable and this solution is updated).

If any fires, the shape is wrong and the claim is withdrawn or revised. Until one is run, no part of this may be labelled `grounded`.

---

## 4. Recommendation

1. Do not answer with a single cosmic importance fraction. Answer per slot: halo mass, redshift, gas geometry (F1).
2. Treat SN and AGN as a union compound with its own loop; unbundle before searching for a dominant channel (F2).
3. State that valence flips with the residual and cite the mass dependence as corroboration, not as a figure line (F3).
4. Enumeration of the habitat is mandatory; a first-order "explosion pushes gas" story is a reading of nothing (F4).
5. Lead outreach with the owed instrument (a source discriminator) and the pre-registered refuter, not with a preferred channel (F5, F8).
6. Fig 4 :22: *"Only methods cross up. Only head starts come down."* Send the generator, the derivation and the refuter. Never send a recording of one occasion.

---

## 5. Canonical usage check (figures README, 2026-11-23)

Two rules from `FRAMEWORK/reference/FIGURES_README_canonical.md` govern the use above.

- *"They outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary."* All Fig N :line strings in this file were re-opened in `03-FIGURES_TEXT.md` before use.
- *"a reading that makes one contradict another has misidentified its domain, not found a flaw"* The apparent tension between F1 (per-slot) and the literature's population-level importance claims was resolved by re-census: population importance is a filter for the budget, per-slot attribution is the verdict shape. No figure was softened.

A second rule from the same README limits the answer: the framework reports *"what a missing thing would have to look like (a shape, not a name)"* then *"stops at the limit of what the available instruments can distinguish, and records the lineage so the stop is honest."* This is why F8 is a `gap` with a characterised missing instrument rather than a number.

### Retractions and confirmations

| earlier reading | status after the canonical check |
|---|---|
| "the question has a numerical answer the field has not agreed on" | **Retracted.** The figures never license a magnitude. The disagreement is about a shape with an instrument gap, not an unsettled constant. |
| "SN and AGN are two independent causes to be weighted" | **Retracted at census.** They are a union compound with non-additive overlap (Fig 9 :55), confirmed by low-overlap ecology sources. |
| "the ground is the observed outflow rate" | **Narrowed.** The anchor is the gas reservoir and baryon inventory that settle whether gas was removed; an outflow rate is a channel reading, not the ground (Fig 2 :29). |
| F3 valence flip | **Canonically confirmed.** Fig 11 :49-51 plus the README re-census rule. |
| F8 magnitude as `gap` | **Canonically confirmed.** Fig 9 :32 and Fig 13 :134-135; *"Unreachable is a verdict here, not a silence."* |
| Apparent strain Fig 1 (per slot) vs population importance statements | **Not strained.** Re-census: population statements are filters (Fig 9 :60), per-slot indexing is the verdict. |

### Updated verdict

The shape survives: *gas removal is a per-slot union of two channels whose relative importance flips with the residual, embedded in an enumerated habitat, and attribution is owed a source-discriminating instrument that is not yet held.* What does not survive is any single cosmic importance coefficient, any claim that one channel is always dominant, and any numeric attribution presented as figure-derived. Strained after re-census: none in the figure reading; one honest open item remains, the source-discriminating instrument, recorded as a `gap` with five refuters and a route to closure (SEARCHED, INWARD, OUTWARD).
