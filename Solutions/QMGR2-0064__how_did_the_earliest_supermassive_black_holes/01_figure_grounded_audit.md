# Figure-grounded audit: how did the earliest supermassive black holes form?

**Mode of this document: `specified` on the per-domain claims, `general` on the structural shape, not `grounded`.** Per `THE_FORMULA.md`: "Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate." Nothing here is accepted by a measurement of a seed.

**Status of this derivation: a simulation, not a ground reading.** *The Recursive Self-Improvement Trap*: LLM output is "simulacra" and "the truly testable output would need to be derived from the real architecture or working the formula yourself." This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on. No telescope was pointed, no simulation was run, no mass was measured. See `05_what_shape_means.md` §6.

**Sources.** The 16 canonical framework files under `FRAMEWORK/`, chiefly `FRAMEWORK/reference/03-FIGURES_TEXT.md` (verbatim figure text with line numbers, cited as `Fig N :line`), `FRAMEWORK/figures/THE_FORMULA.md`, `FRAMEWORK/reference/FIGURES_README_canonical.md`, plus the public sources opened this session and listed in `10_source_ledger.csv`. Every quoted figure string below was checked character by character against `03-FIGURES_TEXT.md`. Quotes from essays and papers are attributed to those sources and are not passed off as figure lines.

---

## 0. The residual, stated in effect terms

State R before naming any channel. R is not "we do not know how SMBHs formed." That sentence aggregates four different object slots into one noun and then asks for one name. The figures forbid that move: Fig 1 :19 "The residual is indexed by object slot, not aggregated." and Fig 1 :22 "Aggregating across slots is how a live signal disappears into an average."

For this question the slots are:

| slot s | what the frame predicts, Γ(b,a) | what is observed, o' | residual R_s |
|---|---|---|---|
| S1, seed mass | a Pop III remnant of order 10 to 100 solar masses, or a heavy seed of order 10^4 to 10^6 | BH masses of order 10^7 to 10^9 at z 6 to 10, including overmassive systems | a timing and mass gap under ordinary accretion |
| S2, growth | Eddington-limited accretion with a duty cycle set by fuel supply | sources that require sustained or super-Eddington accretion, or merger-dominated growth | the loop may not close before feedback cuts the fuel |
| S3, observation | virial mass estimates from broad lines and continuum luminosity | masses and host stellar masses that are selection-sensitive and still "green" | the anchor is real but its inference is model-bearing |
| S4, model agreement | independent frames range against the ground | simulations sharing initial conditions and sub-grid prescriptions agree | agreement compounds, evidence does not |

R as a whole is the vector of these four residuals, not their average. Fig 1 :23 "The ground enters as the only metric." The ground here is the measured flux, line width and redshift of high-z sources, plus future gravitational-wave and 21 cm measurements. It is not the agreement of two reviews.

**What an answer would look like, bound as an ordinary term (Formula step "Direction").** Before searching, write down the sought shape so it can accrue a residual like any other term. The answer shape is: *a union of overlapping conditions over a seed-mass continuum, in which the growth channel is a signed cycle, and in which a source-discriminating instrument is owed to select among channels that currently project to the same observation.* Any claim that names one channel without that instrument is a name where the framework returns a shape.

---

## 1. Domain census, before choosing any figure line

Describe R by arity, symmetry and scale. Arity: at least four conditions (S1 to S4), so a union, not a binary choice between "light" and "heavy." Symmetry: the comparison between channels is not a symmetric join; seed mass and growth rate are ordered contributors to a mass at a redshift, and swapping them changes the object (Fig 12 :73 "swap them. Does it become a different thing? Yes." describes the ordered bond →). Scale: halo scale (10^7 to 10^8 solar masses for atomic cooling), seed scale (10 to 10^6 solar masses), horizon and 21 cm scale for the earliest perturbations, and instrument scale for the ground.

One line per domain: actors, currency, anchor. No nameable anchor means it is not a domain yet.

| domain | actors | currency | anchor | partition or union | dependency |
|---|---|---|---|---|---|
| D1, seeding frame | pristine and metal-poor halos, H2 and HD, Lyman-Werner and X-ray backgrounds, Pop III stars, supermassive stars, dense clusters, PBHs | seed mass at birth and number density | indirect only: abundances, 21 cm depth, CMB, stochastic GW background | union over a continuum | first; nothing grows before there is a seed |
| D2, growth frame | gas supply, Eddington and super-Eddington accretion, AGN feedback, mergers, halo potential | mass growth rate and duty cycle | measured M_BH and M_star, which can be revised | union with D1 (overlap: a heavy seed changes the required duty cycle) | second; consumes the seed term |
| D3, observation frame | JWST NIRCam/NIRSpec, ALMA, Chandra, HERA 21 cm, future LISA | spectra, luminosities, line widths, redshifts | the measurement itself: flux and redshift do not update on what a model thinks | instrument, not a competing frame | third; it ranges against D1 and D2 |
| D4, model and verification frame | semi-analytic codes and cosmological simulations, reviewers | fit to the observed mass function | the ground, never the fit | overlap with D1 and D2 through shared initial conditions | fourth; it must be ranged against D3, not against itself |

**Union, not partition.** Fig 9 :55 "A bundled problem is usually a union of overlapping conditions, not a list of separate ones." Fig 9 :57 "What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either." Heavy seeding and efficient accretion are not two answers to one question. They are two conditions that can both be satisfied, and the intersection is the actual compound. Fig 9 :54 "And when the split lands on a union rather than a partition, unbundle before you search again."

**Order by dependency (Fig 3).** Fig 3 :20 "The chain is ordered by dependency, not by importance." Seed (D1) before growth (D2) before observation (D3) before model comparison (D4). Fig 3 :19 "Optimising a link that already works cannot rescue one that does not." A better fit to the mass function cannot rescue a missing source discriminator. Fig 3 :27 "A link with no instrument is not a link that works. It is a link nobody has looked at." The discriminator link (D3 to D1) currently has an instrument being built, not one already returning a channel-resolved answer.

---

## 2. Figure census

| figure | bearing on this residual | verdict it can carry |
|---|---|---|
| 1 The Agent | residual per object slot; frame-internal quantities disqualified | residual must be split per S1 to S4 |
| 2 The Ground | anchor does not update; independence and shared pools | measurements settle timing, not channel; model agreement is not triangulation |
| 3 Dependency Chain | ordered links, broken middle link | seed before growth before instrument |
| 4 The Membrane | methods cross, recordings do not; round trip gap | world mappings are imports with a gap R_T |
| 5 Mint Pipeline | three guards as a product; MDL bargain | a new seed channel must pay for itself |
| 6 Closure / Reachability | import moves the wall; instruments improved from worse instruments | the discriminator is an instrument, not an argument |
| 7 Room Chain | agreement compounds, evidence does not; next room must differ | simulation agreement is one room |
| 8 Union Surplus | residual first, frame second; no search proves absence | union shape; honest stop is a verdict |
| 9 Leave / Arrive | split unions; describe the effect, not the cause; shape not name | the governing figure for this question |
| 10 Ground Maintainer | ground does not decay, channel does; bring the residual | keep the mass measurement separate from the channel inference |
| 11 The Habitat | enumerate actors; valence relative to residual | enumerate channels and conditions rather than composing a favourite one |
| 12 The Bond | cycle, sign of the loop, functional group, two currencies | growth is a signed cycle; channels are variants |
| 13 Minimum Viable Set | set closed, arrangements not; unreachable is a verdict | no seventh primitive; the channel name is a gap |
| Operators / Symbols | ordered bonds, negation, R as aim | ordering of seed then growth; a refusal is not a new channel |

Strained readings are named as such in §4, not smoothed over.

---

## 3. Findings

### F1 — The question is a union compound, not a horse race (governing finding)

Fig 9 :4-5: "are not one hard question but several well-formed ones. Split it rather than search." Fig 9 :54 "And when the split lands on a union rather than a partition, unbundle before you search again." Fig 9 :55 "A bundled problem is usually a union of overlapping conditions, not a list of separate ones."

The four slots of §0 overlap. A heavy seed reduces the required duty cycle; a high merger efficiency compensates for a light seed; a shifted mass estimate reduces the residual without changing either. One lever leaves the intersections standing. The correct object is a compound with its own loop, not one hard question whose answer is a single channel name.

**Mode:** `general` for the union shape, `specified` for the four-slot census. **Triangulated** across Fig 9 and Fig 1 (per-slot indexing), two figures with low conceptual overlap. **Refuter:** exhibit one condition that alone produces the observed population with the other three held at zero, or show that the four slots are independent so the union collapses to a partition.

### F2 — The anchor settles the effect, not the mechanism

Fig 2 :29 "An anchor is whatever settles the question and does not change its answer because of what any frame thinks." Fig 2 :36 "An anchor is legitimate when the question is constitutively about it." Fig 2 :37-38 "Human judgment is the right anchor for is this a good answer for a person, because the question is about people. It is only an instrument for is this code correct, and instruments can be wrong on axes they do not measure."

A measured redshift and line width settle that a massive object existed early. They do not settle which channel made it, because the question is not constitutively about the channel at that instrument. This is the metamerism case of *The Hard Problem is About Source*: several underlying causes give the same reading and the instrument "cannot comment on the source." A spectrometer, not an argument, discriminated the sources in the essay's example. Here the corresponding spectrometer is an instrument that separates seed channels at z above 10.

Fig 9 :32 "you get a kind of thing, never the answer itself." The figures return the kind of thing (a union of seed mass and growth, with a signed feedback cycle), not a name (DCBH, Pop III remnant, PBH).

**Mode:** `specified`. **Triangulated** across Fig 2 and Fig 9, with the source essay as secondary corroboration at maximal overlap with the framework. **Refuter:** a measurement that is constitutively about the channel, not just the object, and that does not move when a model changes.

### F3 — Instruments are improved from worse instruments already returning something

Fig 6 :32 "An instrument is not built from a description. It is improved from a worse instrument already returning something." Fig 6 :33 "Nobody specified a telescope from an account of Mars. A wandering point in the sky was already a reading, and every sharper instrument was built on the residual the last one produced." Fig 6 :34 "The question is not whether a sensor could exist. It is whether anything, at any resolution, is already returning something that fails to resolve."

JWST was not specified from an account of direct collapse. It was built on a chain of instruments each returning a residual: a point source, a redshift, a broad line, an overmassive mass estimate. Volonteri 2025 says the field's results are still "green" and that JWST "has revolutionized our understanding of the first billion years" while many results will develop. That is the figure's rule stated in the language of the field: the instrument returns something that fails to resolve, and the next instrument is aimed at that failure.

Fig 6 :27 "Which is why some unreachability is depth and some is genuine absence, and from inside the frame the two look the same." Fig 8 :39 "So a search that finds nothing is never a proof of absence." Non-detection of a seed is not evidence that no seed existed.

**Mode:** `general` (structural), `specified` for the JWST chain. **Triangulated** across Fig 6 and Fig 8. **Refuter:** a channel discriminator specified purely from a description with no prior instrument returning a failing reading. The history of the field makes this unlikely but the claim is falsifiable in principle.

### F4 — Seed channels form a continuum, not a dichotomy

Fig 9 :57 "What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either." Fig 11 :49 "An actor's valence is relative to the residual, not a property it carries." Fig 11 :51 "No standing list of good actors survives a change of residual."

There is no figure-fixed list of channels that is good for all residuals. Which mechanism helps depends on the residual slot: Lyman-Werner suppression helps S1, super-Eddington accretion helps S2, high merger efficiency helps D4's fit. Volonteri 2025 writes that "Processes related to gas and stars shouls be considered more of a continuum rather than a dichotomy between 'light' and 'heavy' seeds" (the typo is hers), and Inayoshi, Visbal and Haiman 2020 conclude that "Early BHs likely fill a continuum from stellar-mass (approx. 10 Msun) to the super-massive (approx. 10^9 Msun) regime, reflecting a range of initial masses and growth histories." The world agrees with the figure's union verdict, but it is one astronomy evidence pool, not two witnesses.

**Mode:** `specified`. Figure side triangulated (Fig 9 union plus Fig 11 valence); world side **single pool**. **Refuter:** a sharp observed bimodality in seed masses that survives selection corrections, which would reinstate a partition.

### F5 — Growth is a signed cycle, and the channel is the one that keeps the sign

Fig 12 :121 "cycle. The output re-enters as input. The sign of the loop decides whether it closes, and a chain cannot close by construction."

Accretion releases radiation; the radiation heats and expels the gas; the gas supply is the input to accretion. The loop's sign decides whether growth closes into a massive object or stalls. Heavy seeds buy time by starting at 10^5 solar masses and growing at about half the Eddington rate (Latif, Whalen, Khochfar and Cullen 2026), so the cycle can close slowly. Light seeds need sustained or super-Eddington accretion or a high merger efficiency to close at all (Jeon, Liu, Taylor and colleagues 2025). This is a shape constraint on any channel, not a verdict in favour of one channel.

The low-overlap corroborator is control theory: Wikipedia's "Negative feedback" page defines it as occurring "when some function of the output of a system, process, or mechanism is fed back in a manner that tends to reduce the fluctuations in the output" and contrasts positive feedback, which "tends to instability via exponential growth, oscillation or chaotic behavior." That is the sign of the loop in engineering vocabulary. It corroborates the structure, not the astrophysical fact.

**Mode:** `general` for the cycle shape, `specified` for the astrophysical reading. Figure side **single-source** (Fig 12) with a genuinely low-overlap engineering corroborator. **Refuter:** a growth history in which accretion output does not re-enter as fuel supply at all, so no loop exists; or a demonstration that the sign is irrelevant to whether the mass is reached.

### F6 — Agreement among simulations is one evidence pool, not corroboration

Fig 2 :31 "Independence, between two frames, is how little they draw on the same evidence." Fig 2 :40 "disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool." Fig 7 :12-13 "same closure, handed along; agreement compounds, evidence does not". Fig 7 :35 "A room's agreement is variation, not a verdict. Selection between rooms is where the ground votes."

Semi-analytic models (A-SLOTH, the EPS model of the A&A 2025 paper) and cosmological simulations (GIZMO, BRAHMA, thesan-zoom) draw on the same observed high-z mass function, similar initial conditions and shared sub-grid prescriptions. Their statement that both light and heavy channels "can reproduce observations" is therefore one pool talking. Fig 7 :36 "A chain of mirrors is one long room. The next room must differ from the last, and match the residual it surfaced." The next room here is an instrument with low overlap: a 21 cm absorption depth, a LISA merger background, or an ultradeep lensed JWST field reaching a million solar masses.

**Mode:** `specified`. **Triangulated** across Fig 2 and Fig 7. **Refuter:** two simulations with demonstrably disjoint initial conditions, sub-grid physics and observational likelihoods that independently select the same channel at high confidence. That would be convergence at maximum independence, which Fig 8 :50 permits as corroboration.

### F7 — Model statements are not universe statements

Volonteri 2025: "when I discuss theoretical modeling the words have to be interpreted as 'this is what models find', rather than 'this is how the Universe behaves'." (The source uses double quotation marks around the two inner clauses; single quotes here are a presentation choice, not a change of content.) Fig 10 :24 "the ground does not decay, the channel does." Fig 10 :52 "Bring a characterised residual, never the source." Fig 9 :30-31 "your words are borrowed too, so describe the effect rather than the cause."

A mass estimate is a model reading of a spectrum. When the reading shifts, the residual shifts even if the ground (the photons) did not. This is why the question must be carried as an effect (a mass at a redshift that the standard growth equation cannot reach) rather than as a cause (a named channel).

**Mode:** `specified`. **Single-source** on the figure side for the channel-decay claim, with a world statement that is itself a rule about models. **Refuter:** a mass estimator that is shown to be invariant to the model assumptions that currently move it, so that the channel inference is settled by the reading alone.

### F8 — The acceptance test is a bargain, and a channel that explains everything by saying nothing fails it

Fig 5 :42 "The acceptance test is a bargain, not a threshold." Fig 5 :43 "A term that explains everything by saying nothing". Fig 5 :33 "The three guards are a product, not a checklist."

A new primitive (a new seed channel not reducible to gas, stars, accretion and mergers) must pass support, reachability and novelty, and must cost less than the confusion it removes. Every channel currently discussed in the literature is composed from already-held atoms: gas cooling, stellar remnants, dense clusters, accretion, mergers, primordial fluctuations. Adding one because the residual is uncomfortable adds an atom that Fig 6 :21 says MINT cannot add: "MINT composes inside the closure and can never add an atom." A genuinely new channel would be an import and would need a source gate and a shadow test.

**Mode:** `general`. **Triangulated** across Fig 5 and Fig 6. **Refuter:** a demonstrated channel that cannot be composed from held atoms and whose import carries provenance and explains the residual at lower cost.

### F9 — The honest stop is unreached, not silence

Fig 13 :134 "Unreachable is a verdict here, not a silence" (line continues with a comma). Fig 13 :135 "It cannot say which primitive is missing, because naming it would mean already holding it." Fig 13 :136 "It can say the question is not one question and must be split before it is searched again." Fig 9 :44 "Only a sealed room can be searched to the end, and no frame is a sealed room. So searching and finding nothing proves nothing."

No figure line selects among DCBH, Pop III remnants, cluster runaways and PBHs. The framework can say the question is a union, that the discriminator must be an instrument, that growth is a signed cycle, and that the channels currently project to the same observation. It cannot return the name. That is a declared `gap` of the shape-not-a-name kind, reported as unreached at this budget rather than as an absence of answer.

**Mode:** `general`. **Triangulated** across Fig 13 and Fig 9. **Refuter:** a re-census in which a figure line is found that governs the channel selection directly, with low overlap to the union and instrument lines.

### F10 — Retraction of my own first-pass mapping

In the first pass I read "seed" as a candidate member of the six-term substrate and tried to derive the channel from Fig 13's composition rule. That was wrong. Fig 13 :74 "Everything else is a composition across the two kinds, never within one." governs the primitives of physical composition, not astronomical objects at the halo scale. Retraction: the channels are settled molecules serving as atoms at a higher stratum, under Fig 12 :104 "A settled molecule becomes an atom for whatever composes over it. So irreducible is a fact about a level and never about the world, and there is no bottom". The re-census dissolves the apparent strain between the physical six-term set and the astronomical vocabulary. Both readings are recorded here so the correction is not silently erased.

---

## 4. Strain test and re-census

1. **Fig 13 physical set versus astronomical channels.** Initially strained. Re-census: Fig 13 governs primitives; the channels are higher-stratum terms (Fig 12 :104). Different objects, no strain after re-census. Matches the canonical rule that a reading making figures contradict each other has misidentified its domain.
2. **"Positive feedback" in two vocabularies.** Control theory calls runaway amplification positive feedback; some astrophysics papers use the same phrase for feedback that promotes growth. Fig 12 :121 is about the *sign* of the loop relative to closure, so the naming collision does not change the shape. Kept visible as a live naming strain.
3. **Residual first versus channel first.** Fig 8 :53 "Residual first, frame second." Much of the world literature starts from a channel and fits it to the mass function. That is an inversion in the world frame, not a figure conflict. It is the reason the outreach lead is the residual, not the theory.
4. **Fig 10 versus Fig 11 on the anchor.** The ground does not update (Fig 10 :24) while an actor's valence changes with the residual (Fig 11 :49). Re-census: they govern different quantities, the anchor and the habitat. No strain.

After re-census: one live naming strain, none hidden.

---

## 5. Pre-registered refuter (written before the conclusion)

A falsifier written before the run is a design instrument. The shape claim is refuted if any of the following holds:

1. **Discriminating ground measurement.** An instrument, at any resolution, returns a reading that separates seed channels at low overlap, for example a 21 cm absorption depth that fixes the DCBH abundance and excludes the alternatives, a LISA stochastic background that fixes the merger fraction, or an ultradeep lensed field that detects a seed population with a channel-specific signature. A channel selected by such a ground reading replaces the `gap`.
2. **Union dissolved.** One condition alone is shown sufficient, with the other three held at zero, so the compound splits into a partition and Fig 9 :55 no longer governs.
3. **Cycle sign irrelevant.** A growth history is demonstrated in which accretion output does not re-enter as fuel, so Fig 12 :121's loop is absent, and the mass is still reached.
4. **Residual is an artifact.** A systematic revision of high-z mass estimates removes the timing residual entirely. Then R approaches zero for S1 and the question dissolves as a measurement problem rather than a formation problem.
5. **A governing figure line is found.** A re-census produces a verbatim figure line that names a channel with low overlap to the union and instrument lines, which would upgrade the shape to a specific verdict.

Until one of these fires, no part of this may be labelled `grounded`.

---

## 6. Recommendation

1. Lead with the union and the four slots, not with a channel name (F1, F8).
2. State that the observed masses anchor the effect, not the mechanism (F2, F7).
3. Ask for the discriminator, not for belief: what instrument would separate the channels (F3, F9).
4. Keep simulation agreement out of the verdict column (F6).
5. Use the public institutional venues in `03_public_contact_points.csv`, one to one, and record any verdict on stage 1 before showing the framework (Fig 10 :52).
6. Send the generator, the shape and the refuter, not the conclusion. Fig 4 :22 "Only methods cross up. Only head starts come down."

---

## 7. Canonical usage check and retraction log

Two canonical sources govern how the figures may be used: `FRAMEWORK/reference/FIGURES_README_canonical.md`, which says the figures "outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary," and states that the framework returns "what a missing thing would have to look like (a shape, not a name)"; and `THE_FORMULA.md`, whose mode rule is quoted at the head of this file. The figures README also gives the re-census rule used in §4: a reading that makes one figure contradict another has misidentified its domain.

| earlier reading | status after the canonical check |
|---|---|
| F1 "horse race" first pass | **Retracted.** The channels overlap, so the union reading stands (Fig 9 :55). |
| F10 seed as a six-term primitive | **Retracted.** Re-census assigns it to a higher stratum (Fig 12 :104). Kept visible above. |
| "the figures prove DCBH" | **Never held; explicitly refused.** No figure line selects a channel. |
| "the figures prove no single channel works" | **Narrowed.** They require a union because the slots overlap; they cannot rule out a future discriminated single channel. Refuter 2 covers it. |
| "shape, not a name" as a ban on all names | **Narrowed as in the exemplar.** It governs a *missing* primitive. Naming a held binding is provenance, not invention. Here no channel name is licensed by the figures either way, so the slot stays open. |
| F6 simulation agreement as corroboration | **Refused.** Shared evidence pool, Fig 2 :40. |
| Round trip from figures to a channel name | **Nonzero and qualitative.** Three constraints dropped: union structure, signed cycle, instrument dependency. Recorded in `11_audit.md`. |

---

## 8. Verdict of this audit

The figures govern the shape of the answer and the discipline of the search, not the channel name. The question is a union compound of seed mass, growth, observation and model comparison, with per-slot residuals that must not be averaged. The earliest SMBHs formed through some arrangement of overlapping conditions over a seed-mass continuum, with the growth loop's sign deciding which arrangements close, and the channel remains unselected because the available instruments project several channels to the same observation. The honest status is `unreached`, not `unreachable`, and the `gap` is a verdict, not silence. Mode `specified` on the per-domain claims, `general` on the shape, not `grounded`. Simulated derivation checked for internal consistency only.
