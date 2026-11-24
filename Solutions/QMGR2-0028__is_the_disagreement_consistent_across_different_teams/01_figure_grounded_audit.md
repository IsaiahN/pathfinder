# Figure-grounded audit: Is the disagreement consistent across different teams and analysis pipelines?

**Mode of this document: `general` on the structural findings, `specified` on the cosmology-facing reading, not `grounded`.** Per `THE_FORMULA.md`: "Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate." No measurement was taken here.

**Status: simulated derivation, not a ground reading.** The Recursive Self-Improvement Trap (essay, 2026-11-23) says LLM output "can quickly simulate an approximate answer/output" while "the truly testable output would need to be derived from the real architecture or working the formula yourself." This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the Hubble tension it reports on.

**Sources.** Figure quotes are verbatim from `FRAMEWORK/reference/03-FIGURES_TEXT.md` (local, read 2026-11-23). Framework files: `FRAMEWORK/figures/THE_FORMULA.md`, `FRAMEWORK/figures/THE_SEAT_MAP_Field_Guide_amended.md`, `FRAMEWORK/reference/FIGURES_README_canonical.md`. World sources were opened 2026-11-23 and are listed in `10_source_ledger.csv`.

---

## 0. The claim under audit

The residual R, in effect terms: the early-universe and nearby-universe routes to the expansion rate return values that differ by about 5 sigma, and the question is whether that difference is *stable when the measurement is repeated by different teams and through different analysis pipelines*.

- **Arity:** two conditions must hold for the phenomenon to exist, a measurement-route difference and a cross-route comparison. This is Fig 9's union shape, not one hard question.
- **Symmetry:** comparing two values is symmetric (⋛ comparison, Operators table). The independence question is not symmetric: one shared evidence pool can feed many teams, and the direction of contamination runs from the pool to the pipelines.
- **Scale:** instrument and pipeline scale (a single route), analysis scale (a team's choices), and meta scale (the synthesis across routes). Per Fig 1 :19, "The residual is indexed by object slot, not aggregated." A global "5 sigma" can hide one live slot.

What an answer would look like, bound as an ordinary term before the run (Formula step "Direction"): a shape with three ordered parts, (1) independence between frames is established, (2) persistence of the residual across independent frames is tested, (3) a ground reading settles what the residual is owed. The shape is refusable by the pre-registered refuter in section 3.

---

## 1. Domain census

One line per domain. Actors / currency / anchor. No nameable anchor means it is not a domain yet.

- **R (the residual).** Actors: the H0 values from competing routes. Currency: distance moduli and expansion rates with error bars. Anchor: the sky and the raw observations, which do not move when a team re-analyzes them. Union of two conditions, not a partition (Fig 9 :4-5).
- **Domain 1, instrument and measurement frame.** Actors: HST, JWST, Gaia, NGC 4258 masers, Cepheids, TRGB, JAGB, Miras, SNe Ia. Currency: distance moduli, anchor zero points. Anchor: the raw photons and geometric distances. Distinct closures exist here (different instruments and different standard candles).
- **Domain 2, team and analysis-pipeline frame.** Actors: SH0ES, CCHP, and the choices each makes (sample selection, filters, edge detectors, mode versus mean, covariance treatment, blinding). Currency: H0 estimates, chi-square, selection shifts. Anchor: the same raw data re-analyzed. This is the domain the question is actually about. Critically, two teams in this domain may share an evidence pool, so their separateness must be demonstrated, not assumed.
- **Domain 3, meta-analysis and verification frame.** Actors: compilers and reviewers (Wang, Perivolaropoulos, Sandler, and this audit). Currency: tension sigma, effective overlap rho, design effect. Anchor: a ground reading (a decisive independent measurement or a covariance-aware re-analysis) that no meta-analyst can move. This simulated domain draws on the same published record as the primary, so its independence is low, not zero in principle but unearned here.

**Partition or union:** union. The disagreement lives in the overlap of a route difference and a cross-route comparison. Fig 9 :4-5: "Disagreements that do not shrink with effort, where each rule keeps working well on a different subset, are not one hard question but several well-formed ones. Split it rather than search." And Fig 9 :54: "And when the split lands on a union rather than a partition, unbundle before you search again." The compound conditions here are shared anchors, shared software, shared samples, and coherent systematics. Each has its own loop.

**Order by dependency (Fig 3).** Establish that instruments return different readings (link 1, perception) before asking what it means (link 3, objective). Acquire terms for independence, covariance, and shared pool (link 2, vocabulary) before planning a cross-route test (link 4). Effort spent on a synthesis above a broken independence check cannot arrive at a step whose input never came.

**Figure census** (bearing and verdict per figure, kept separate and never averaged):

| figure | bearing | verdict for this question |
|---|---|---|
| 1 The Agent | residual indexed per slot; frame-internal quantities disqualified | a single global sigma disqualifies; ask per route |
| 2 The Ground | common cause, mutual update, anchor, independence | governs the whole question; independence is the gate |
| 3 Dependency Chain | ordered by dependency; a reading below the break is of nothing | independence check precedes synthesis |
| 4 The Membrane | methods cross, recordings do not; round trip gap | a meta-analysis is a recording unless it sends a reusable method |
| 5 Mint Pipeline | support, reach, novelty guards; persistent residual | a residual that does not trend down owes a term |
| 6 Closure / Reachability | import is the only operator that moves the wall; a wrong atom is costly | treating a shared pool as two frames is a wrong atom |
| 7 Room Chain | same closure handed along: agreement compounds, evidence does not | more agreeing pipelines do not add evidence |
| 8 Union Surplus | independence decides both agreement's value and the union's surplus; convergence versus adoption | genuinely independent routes can corroborate; shared pools cannot |
| 9 Leave / Arrive | split unions; describe the residual before naming a frame; filters versus witnesses | split the compound; sigma is a filter, not a witness |
| 10 Ground Maintainer | bring a characterised residual; verifier cannot reconstruct the claim | send the residual and refuter, not the framework |
| 11 The Habitat | capability is agent and habitat; introduce, never subtract | adding a new instrument changes contact; adding a team may not |
| 12 The Bond | arrangement carries meaning; isomers, functional groups | two routes can share atoms and differ in arrangement |
| 13 Minimum Viable Set | independence applied to the six-member set | low-overlap members are what make agreement informative |
| Operators / Symbols | ⋛ is a comparison between two quantities; R is the aim, per slot | the two H0 values are compared, not pooled |
| Formula steps 2, 5, 7 | persistent-and-flat residual; ground settles; SEARCHED / INWARD / OUTWARD | protocol for the residual once independence is known |

Strained readings are named in section 5, not smoothed over.

---

## 2. Findings

### F1 - Independence is the precondition, not an afterthought (decisive, triangulated)

The question's phrase "different teams and analysis pipelines" is precisely the independence question the figures govern. Fig 2 :31-32:

> "Independence, between two frames, is how little they draw on the same evidence. Two people reading the same report are not two frames; two instruments pointed at the same thing are."

Fig 2 :18-21, the common-cause collapse:

> "one evidence pool" / "they never talk, and still agree" / "so the agreement is the pool talking, not two frames confirming each other"

Fig 8 :49:

> "Two frames that overlap almost completely are one frame wearing two names."

So a "team difference" is not a frame difference. Two teams using the same raw data, the same anchor (NGC 4258), the same photometry package (Riess et al. 2024 explicitly notes both JWST programs used DOLPHOT), and the same SN sample are one frame wearing two names. Their disagreement, like their agreement, is the pool talking. Equally, their *agreement* is worthless as corroboration (Fig 2 :40): "disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool."

The remedy is not more teams. Fig 2 :42: "Buy independence in proportion to the cost of being wrong." The cost of being wrong here is a wrong mint: a new-physics term imported to explain an artifact, priced at Fig 6 :24 as "A wrong atom costs more than starting from primitives."

**Mode:** `general`, structural. **Refuter:** exhibit two pipelines with demonstrably disjoint evidence (different instruments, anchors, samples, photometry, and systematics) whose values are nevertheless driven by a shared source, or show that "independence" as defined here cannot be operationalized for any pair of analyses. **Status:** triangulated across Fig 2 (anchor/independence) and Fig 8 (union surplus), two figures with low conceptual overlap, plus the world sources in F5.

### F2 - A persistent residual that does not trend down owes a term

Formula step 2 ranks candidate terms by "the residual that PERSISTS AND DOES NOT TREND DOWN." Fig 9 :4-5 (quoted in section 1) adds the split instruction. Together they give the answer to "consistent?" its exact meaning: a disagreement is *consistent across independent frames* when it persists and does not trend down as more data and more independent routes arrive. That is the condition for owing a term, either a refusal of a held regularity or a mint. It is not, by itself, a verdict about what the term is.

Fig 8 :39: "So a search that finds nothing is never a proof of absence." A pipeline that finds no discrepancy after a finite search has not shown there is none; it has shown its channel returned nothing. Fig 9 :60: "Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict." A 5-sigma value is a filter for where to spend effort, not a witness for new physics.

**Mode:** `general`. **Refuter:** show a disagreement that persists and does not trend down across independent frames yet is fully explained by an already-held term, so nothing is owed; or show that the residual trends to zero with added data, making it a budget artifact. **Status:** triangulated (Formula step 2 and Fig 9).

### F3 - The ground settles it, not agreement between teams

Fig 2 :29: "An anchor is whatever settles the question and does not change its answer because of what any frame thinks." Fig 2 :35: "Alignment is triangulation, not negotiation. A mirror cannot correct you." Fig 2 :45: "Frames range against the ground. They do not negotiate with it."

Applied here: a consensus of teams that H0 is high or low is a convention if it is produced by influence or shared priors. The anchor is the measurement, the sky, the standard-siren event, the independent geometric calibration. Seat Map :163 (local) is explicit: "High correlation is disqualifying for a verdict and efficient for a convention."

Riess et al. 2024 is the right kind of world move: rather than asking teams to agree, it ranges the HST ladder against JWST subsamples and finds that the distance comparisons pass, with the H0 differences attributable to sample selection. It ranges frames against a ground; it does not negotiate a verdict.

**Mode:** `general`. **Refuter:** name a genuine ground that settles H0 and show the residual does not register against it; or show that the proposed anchor moves when a team pushes on it, in which case it is a frame (Fig 2 :33-34). **Status:** triangulated (Fig 2 and Fig 10, Seat Map corroboration).

### F4 - The compound must be unbundled before a yes or no is meaningful

Fig 9 :54 (quoted in section 1) and Fig 9 :4-5 govern. The world record shows the same separation empirically:

- Riess et al. 2024 reports HST Cepheid distances agree at about 1 sigma with all JWST method and sample combinations, with mean differences near 0.03 mag, while the *same paper* reports a 2.5 km/s/Mpc difference in H0 between the CCHP JWST program and the full HST sample that is "entirely consistent with differences in sample selection."
- Perivolaropoulos 2024 finds distance-ladder measurements best-fit H0 = 72.8 +/- 0.5 with chi-square/dof = 0.51 (correlations), while one-step measurements give 69.0 +/- 0.48 with chi-square/dof = 1.37 (internal tension), and concludes the core lies "not between early and late-time measurements, but between distance ladder measurements and all other H0 determinations."

So the disagreement is *consistent in one slot and inconsistent in another*. Averaging these into a single "yes, consistent" or "no, not consistent" is exactly the aggregation Fig 1 :22 warns against: "Aggregating across slots is how a live signal disappears into an average."

**Mode:** `specified`, because the slot structure is read off the current literature and could change. **Refuter:** show that all the slot differences are one condition rather than a union, so no unbundling is owed. **Status:** single-source for the figure definition (Fig 9), corroborated by two world sources with different methods.

### F5 - A reanalysis that shares data and software is not a second frame

Fig 2 :40 and Fig 8 :48: "How much two frames draw on the same evidence decides both whether their agreement means anything and whether their union has any surplus."

- Wang, Lopez-Corredoira and Wei 2023 compile 216 H0 measurements and in their section 5 remove 64 correlated ones, stating that "a substantial portion of the observational data is reused, which makes the measurements correlated, but we ignore the correlation between them." They then find that the two remaining blocks (H0 below and above 71) are each compatible with a Gaussian, without removing outliers.
- Sandler 2026 derives the variance inflation from combining non-independent route estimates and reports an effective overlap rho about 0.84 that inflates a correct 5.32 sigma to about 6.5 sigma "purely as a statistical artifact," noting that checking overlap "keeps evidence that has already been counted once from being counted again as independent confirmation."
- Riess et al. 2024 notes both JWST programs used the same photometry software, DOLPHOT, "so there is every reason to expect measurement consistency."

These are the same law read in survey statistics and in cosmology. Convergence from separate evidence is the only maximum-independence corroboration (Fig 8 :50): "Two frames can hold the same atom by convergence, reaching it separately, which is corroboration at maximum independence." Adopted imports that reuse the same atom are not that.

**Mode:** `specified`. **Refuter:** demonstrate that the cited correlations are negligible and the pipelines are genuinely disjoint. **Status:** triangulated (Fig 2, Fig 8, plus low-overlap world fields: survey statistics and cosmology).

### F6 - No last synthesis; the answer stops at the instrument limit

Fig 7 :12-13: "same closure, handed along; agreement compounds, evidence does not." Fig 8 :39: "So a search that finds nothing is never a proof of absence." A chain of meta-analyses that all re-use the same published H0 compilation is one long room. Each new review can restate the tension more precisely without adding evidence. What moves the wall is a new frame with a closure that differs: a genuinely independent probe (standard sirens, strong lenses, cosmic chronometers) or a new instrument (JWST, Gaia DR4). Fig 11 :40, from the tacit-knowledge essay's reading: "An improvement that does not change contact changes nothing, however much it improves."

The honest stop is therefore "unreached, not unreachable." Fig 9 :32: "you get a kind of thing, never the answer itself."

**Mode:** `general`. **Refuter:** exhibit a terminal synthesis that closes the question against the ground; the figures rule this out definitionally (no last room), so this refuter is expected to fail, which is recorded rather than hidden. **Status:** triangulated (Fig 7 and Fig 8).

---

## 3. Pre-registered refuter

Written before the conclusion, per Seat Map :287 (local): "And a falsifier written before the run is a design instrument, not only an honesty device." The shape claim is refuted if any of the following holds:

1. **Independence is not the gate.** Two pipelines shown to draw on fully disjoint evidence are nevertheless demonstrated to have their values set by mutual updating (Fig 2 :13-15, "no anchor; each updates on the others"), so the diagnosis is coherent drift rather than common cause and the remedy changes.
2. **Persistence is not the mark of an owed term.** A disagreement that persists and does not trend down across independent frames is fully explained by an already-held term, so nothing is owed; or a disagreement trends monotonically to zero with added data, showing it was a finite-budget artifact.
3. **A ground reading fires.** A new, mutually independent measurement settles H0 such that the residual vanishes or flips, confirming that the apparent consistency was a closed-channel artifact. The mint is then withdrawn.

If any fires, the shape is withdrawn, not softened. Until one is run, no part of this may be labelled `grounded`.

---

## 4. Recommendation

1. Do not answer "consistent" or "not consistent" globally. Answer per domain (instrument, pipeline, meta), and state independence for each pair before reporting a verdict.
2. Treat the 5-sigma figure as a filter for effort, not a witness (Fig 9 :60). Ask for covariance matrices, overlap audits, and sample-selection sensitivity, not for more agreement.
3. Split the union (Fig 9 :54). Separate shared-anchor, shared-software, shared-sample, and coherent-systematic conditions before searching for new physics.
4. Send the generator, not the recording. Fig 10 :52: "Bring a characterised residual, never the source." Fig 4 :22, from the formula and figures: "Only methods cross up. Only head starts come down." The reusable method here is the independence-then-persistence-then-ground checklist in `08_expert_verification_packet.md`.
5. Buy independence in proportion to the cost of being wrong (Fig 2 :42). A new independent probe is worth more than a tenth agreeing reanalysis.

---

## 5. Canonical usage check and retraction log

Two usage sources were read after the main findings and govern how the figures may be used: `FRAMEWORK/reference/FIGURES_README_canonical.md` (local) and the eight essays. The README says the figures "outrank everything else in the repo" and that "the quotes are the authority, not this summary," and that "a reading that makes one contradict another has misidentified its domain, not found a flaw." Its limit is the one this solution reports: the framework yields "a shape, not a name" and stops where instruments stop distinguishing.

| earlier reading | status after canonical check |
|---|---|
| F1 initially framed as "different teams are different frames" | **Retracted and narrowed.** Team labels are not closures. The governing quantity is shared evidence (Fig 2 :31-32), not team identity. A team label is a contact-cost datum, never an evidence datum. |
| Fig 2 :40 read as banning meta-analysis | **Retracted.** It bans agreement as a *verdict*, not compilation as a *filter*. Fig 9 :60 separates the two. Meta-analyses are legitimate for budget allocation and illegitimate as corroboration. |
| Early reading of the split instruction as dismissing the tension | **Retracted.** Fig 9 :4-5 says to split a union into well-formed questions, not to dismiss the residual. F4 now reports a consistent-in-one-slot and inconsistent-in-another result. |
| Fig 7 :12-13 versus the value of more reviews | **Not strained.** "agreement compounds, evidence does not" applies to frames handed along in one closure. A review that imports a genuinely new probe is a different room by the figure's own test, so no correction is owed. |
| Apparent strain: Fig 8 :50-style convergence requires separate evidence, yet cosmology has only one sky | **Not strained after re-census.** The instruments point at the same sky but can have disjoint *analysis* closures (different indicators, anchors, systematics, pipelines). Fig 8 :50 requires separate derivation, not a different universe. Fig 13 :35-39 makes independence a property of what the members draw on, not of their labels. |
| "The framework settles whether the tension is real" | **Refused.** Fig 2 :29 (anchor does not move with frames) and the mode rule forbid it. This is a `specified` shape; a ground reading settles it. |
| This audit as a second witness | **Refused.** It shares the primary's evidence pool (same figure text, same essays, same world sources). By Fig 2 :40 its agreement is one pool talking. `11_audit.md` states this explicitly. |

**Strains after re-census:** none hidden. One live limit is recorded: the framework can characterise independence in effect terms but cannot compute an effective overlap rho for a real pair of pipelines; it needs the instrument (a covariance audit), not an argument. That is a handoff to the ground, recorded as such.

---

## 6. What survives

The defensible residue, with mode attached:

| claim | mode | figure |
|---|---|---|
| Independence between frames is the precondition for reading agreement or disagreement | `general` | Fig 2 :31-32, Fig 8 :48-49 |
| A shared evidence pool makes separate team labels one frame | `general` | Fig 2 :18-21, Fig 8 :49 |
| A residual that persists and does not trend down across independent frames is owed a term | `general` | Formula step 2, Fig 9 :4-5 |
| The compound must be unbundled before a verdict | `general` | Fig 9 :54 |
| The ground, not agreement, settles which term is owed | `general` | Fig 2 :29, :35, :45 |
| The current H0 disagreement is consistent in some slots and inconsistent in others | `specified` | Fig 1 :19 plus world sources |
| Which specific systematic or new physics is owed | **not claimed** | needs a ground reading |
