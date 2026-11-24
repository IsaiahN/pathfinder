# Figure-grounded audit: standards for an empirically grounded agent-based model

**Mode of this document: `specified`, not `grounded`.** It states what would have to be measured and what would count as a failure. Per `THE_FORMULA.md`: "Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."

**Status of this derivation: a simulation, not a ground reading.** *The Recursive Self-Improvement Trap* (read 2026-11-22): "the output is only as good as the validator. The agent, or the tool, or the frame, or the theory, cannot validate itself. An external validator, or ground, is always needed to tether the veracity of the output to reality. Anything else is drift." And: "LLMs can quickly simulate an approximate answer/output with the formula found in the architecture post... However, the truly testable output would need to be derived from the real architecture or working the formula yourself." This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on. See `05_what_shape_means.md` §6.

**Source of quotes.** All figure lines are quoted verbatim from `C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\reference\03-FIGURES_TEXT.md`, opened this session. Cited as `Fig N :line`. Local framework files: `FIGURES_README_canonical.md`, `THE_FORMULA.md`, `THE_SEAT_MAP_Field_Guide_amended.md`. World sources were fetched and read on 2026-11-22 and are listed in `10_source_ledger.csv`.

---

## 0. The residual under audit

> **Question:** What standards can establish that an agent-based model is empirically grounded rather than an illustrative story?

**In effect terms.** A model M produces outputs. A claim C says M is *grounded*, meaning its outputs are corrected by something outside M that does not change its answer because of what M's author thinks. The alternative reading of C is *illustrative story*: M is a self-consistent narrative that reproduces a pattern the author wanted, where the reproduction is scored by quantities M itself produces (coverage, fit to a stylised fact, rule count, plausibility of the story). The residual R is the gap between M's predictions and the world's returns, indexed by what the model claims to say something about. The question asks which standards narrow R in a way that distinguishes the first reading from the second.

**What an answer would look like, bound as an ordinary term (Formula, "Direction").** A standard S is *ground-establishing* iff (i) it names an anchor that does not move when M is pushed, (ii) it measures R per slot rather than as an aggregate, (iii) it disqualifies quantities M produces about itself, (iv) it requires evidence that does not share a pool with M's construction, (v) it leaves a refuter stated before the run, and (vi) it remains revisable. I write this down now, before deriving, so it can accrue a residual like any other term rather than survive as an invisible preference.

**Why this is a union, not one hard question.** Windrum, Fagiolo and Moneta (2007), read this session, identify "the under-determination of theory with respect to data" and note that "different models can be consistent with the data that is used for empirical validation." An illustrative story and a grounded model can produce the same fit to a stylised fact. Fig 9 :54: "And when the split lands on a union rather than a partition, unbundle before you search again." "Empirically grounded" bundles reproducibility, documentation, calibration, independent validation, and mechanism discrimination. A single standard clears the region where only one condition holds and leaves the intersections standing.

---

## 1. Domain census (before choosing any figure line)

**R by arity, symmetry, scale.** Arity: a vector, not a scalar, because the residual attaches to slots (Fig 1 :19). Symmetry: not symmetric; a miss on one slot is not exchangeable with a hit on another, and the comparison that matters is between model output and an external reading, not between two internal frames. Scale: the model runs at the agent scale, the ground returns at the observation or experiment scale, so a membrane with a lossy transform sits between them (Fig 4). Question type: a union compound (Fig 9 :54), with its own loop and its own ground.

| domain | actors | currency | anchor | partition/union | order |
|---|---|---|---|---|---|
| D1, the model frame (M as Γ) | agents, rules, parameters, initial conditions, stochastic seeds | outputs, "coverage, and compression achieved", "predicates minted, and credibility accrued" (Fig 1 :25-26) | should be the ground; in an illustrative story it is a frame-internal metric | partition boundary: what composes and what may be admitted as a term | 1 |
| D2, the ground (data, experiment, observation) | measurements, datasets, field records, interventions | observations o' | the ground itself, which must not update on M | the other side of the boundary; no anchor here means this is not yet a domain to score | 2 |
| D3, the verification/validation frame | reviewers, repositories, auditors, the reader of the packet | residuals and provenance | the ground, never agreement among reviewers | low-overlap frame; in a simulated run its independence is zero | 3 |

**No nameable anchor means it is not a domain yet.** D2 is admitted only because a real instrument or observation can be named (the CoMSES review criteria name "Ease of Execution" but explicitly decline to assess "validity of model outputs"; Windrum et al. name the real-world data-generating process; the SEP entry names the fitted curve and the target system). If none of these existed, D2 would be a placeholder and no standard could be derived for it.

**Dependency order (Fig 3).** Perception (can M represent the relevant slots?) -> vocabulary (are there terms for what the data affords?) -> objective (what counts as progress, the residual) -> planning (which validation design?) -> learn and carry (reproducibility, lineage). The chain is ordered by dependency, not importance: "Optimising a link that already works cannot rescue one that does not" (Fig 3 :19). The middle link, having terms for what a situation affords and saying what would count as progress, is where such chains usually break and where there are the fewest instruments (Fig 3 :24-27). "A link with no instrument is not a link that works. It is a link nobody has looked at" (Fig 3 :27). This is the structural reason "empirically grounded" is contested: it is an objective with no agreed instrument.

---

## 2. Figure census (quoted before concluding)

| figure | verbatim line | bearing on this question |
|---|---|---|
| Fig 1 | :19 "The residual is indexed by object slot, not aggregated." | grounds must be reported per slot |
| Fig 1 | :22 "Aggregating across slots is how a live signal disappears into an average." | a fitted aggregate can hide a live miss |
| Fig 1 | :23 "The ground enters as the only metric." | anything else is a substitute |
| Fig 1 | :27 "They are frame-internal. A frame cannot score itself with a quantity it also produces." | disqualifies self-scored "realism" |
| Fig 1 | :28 "A system that averages across objects has thrown away the only signal that says where to look." | pattern fit at the mean is not grounding |
| Fig 2 | :29 "An anchor is whatever settles the question and does not change its answer because of what any frame thinks." | the anchor test |
| Fig 2 | :31 "Independence, between two frames, is how little they draw on the same evidence." | calibration data is not validation data |
| Fig 2 | :35 "Alignment is triangulation, not negotiation. A mirror cannot correct you." | reviewer agreement cannot ground |
| Fig 2 | :40 "agreement about the world is worthless when the agreeing frames share an evidence pool" | the common-cause collapse |
| Fig 2 | :42 "Buy independence in proportion to the cost of being wrong." | how much validation effort to buy |
| Fig 3 | :27 "A link with no instrument is not a link that works. It is a link nobody has looked at." | the missing instrument at the objective link |
| Fig 4 | :22 "Only methods cross up. Only head starts come down." | publish the generator, not the run |
| Fig 4 | :30 "So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked." | a condensed checklist needs a measured gap |
| Fig 5 | :42 "The acceptance test is a bargain, not a threshold." | a standard is a trade, not a badge |
| Fig 5 | :48 "Its own output is never a measure of success. A system can be enthusiastically curious and produce nothing." | a running ABM is not a grounded ABM |
| Fig 6 | :23 "No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs." | new evidence must come from outside M |
| Fig 7 | :13 "agreement compounds, evidence does not" | a larger reviewer pool adds no anchor |
| Fig 8 | :39 "So a search that finds nothing is never a proof of absence." | failure to falsify is not confirmation |
| Fig 8 | :50 "Convergent derivation and adopted import look identical in the contents. Only the record of where each came from separates them" | provenance separates tuning from discovery |
| Fig 9 | :27-28 "describe it before you go looking, or any frame you pick will seem to fit" | describe R before choosing the standard |
| Fig 9 | :32 "you get a kind of thing, never the answer itself" | a shape, not a name |
| Fig 9 | :44 "Only a sealed room can be searched to the end, and no frame is a sealed room." | no standard certifies completeness |
| Fig 9 | :51 "evidence bearing on the residual is admissible; evidence bearing only on its maker is a stake-inducing channel, and the verifier is denied it" | what a verifier may see |
| Fig 9 | :54 "And when the split lands on a union rather than a partition, unbundle before you search again." | grounding is a compound |
| Fig 9 | :60 "Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict." | submission venues are filters |
| Fig 10 | :42 "A verifier that can reconstruct the claim cannot verify it." | verifier non-access |
| Fig 10 | :47 "a convention that decides an outcome has stopped being one" | a checklist that certifies is no longer a checklist |
| Fig 10 | :49 "Declaring a meaning does not ground it." | ODD alone cannot ground |
| Fig 10 | :52 "Bring a characterised residual, never the source." | lead with the residual |
| Fig 10 | :59 "an interest in the outcome is unavoidable, an interest in the reading is disqualifying." | declare the stake |
| Fig 11 | :40 "An improvement that does not change contact changes nothing, however much it improves." | adding rules is not grounding |
| Fig 11 | :70 "A test harness is a substituted habitat. Which is why a synthetic solve proves wiring and never capability." | a synthetic reproduce proves wiring, not grounding |
| Fig 12 | :94 "The arrangement is the substance." | same agents, different wiring, different model |
| Fig 12 | :104 "A settled molecule becomes an atom for whatever composes over it." | a validated submodel can be composed over |
| Fig 12 | :117 "Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour." | observationally equivalent models are isomers |
| Fig 12 | :125 "A composition costs in two currencies, and they do not add." | bits to describe, actions to test |
| Fig 13 | :115 "The set is closed. The arrangements are not. That gap is why import exists." | no amount of tuning adds an external anchor |
| Fig 13 | :127 "The array cannot be checked by inspection, so the record is what makes it verifiable." | provenance is the check |
| Fig 13 | :134 "Unreachable is a verdict here, not a silence" | an ungrounded verdict may be stated |
| Fig 13 | :141 "The composition is white box because the lineage is, and every claim in this figure is checkable the same way." | white-box checkability |

Strain test applied as each line was chosen. No line was kept by forcing it. The one live strain is named in §9.

---

## 3. Findings

### F1 - A standard that scores only what the model produces cannot establish grounding (governs D1)

Fig 1 :23 "The ground enters as the only metric." Fig 1 :24-27: "These do not count: coverage, and compression achieved / predicates minted, and credibility accrued / They are frame-internal. A frame cannot score itself with a quantity it also produces." Fig 5 :48: "Its own output is never a measure of success. A system can be enthusiastically curious and produce nothing."

An ABM can be impeccably documented, executable, well-coded, and reproduce its target pattern, and still be an illustrative story. Those are properties of M's interior and of its output, not of contact. This is the decisive figure-grounded point for the question as asked: most of what the field calls "verification and validation" is Fig 1's excluded set.

**World corroboration (secondary).** Frigg and Hartmann, *Models in Science*, Stanford Encyclopedia of Philosophy (2026): "the availability of more computational power can also have adverse effects: it may encourage scientists to swiftly come up with increasingly complex but conceptually premature models, involving poorly understood assumptions or mechanisms and too many additional adjustable parameters... This can lead to an increase in empirical adequacy... but not necessarily to a better understanding of the underlying mechanisms." This is the same warning from a low-overlap field (philosophy of science), corroborating, not deciding. **Mode: `general`** for the figure shape, `specified` for the world claim.

**Refuter:** exhibit a case where a frame-internal quantity (coverage, fit, rule count, reviewer approval) *is* the ground for the claim being made. The figures allow this for conventions about shared meanings (Fig 2 :41, "efficient for a convention"), so the refuter would require the claim to be constitutively about the model itself rather than about the world. For a claim about the world, the refuter fails.

### F2 - Aggregate pattern reproduction hides the live residual (governs D1, D2)

Fig 1 :19 "The residual is indexed by object slot, not aggregated." Fig 1 :22 "Aggregating across slots is how a live signal disappears into an average." Fig 1 :28 "A system that averages across objects has thrown away the only signal that says where to look."

A standard built on "does the model reproduce the stylised fact?" scores a global or mean statistic. That is exactly the operation Fig 1 forbids. An illustrative story typically fits the mean and is silent about which agents or which time slices it fails on. A ground-establishing standard must report residual per slot (per agent, per subgroup, per time window, per outcome) and must keep a global near-zero with one live slot visible as a legal, non-inert state (Fig 1 :20).

**World corroboration.** Pulicka, Korth, Grima and Jung (2016), JASSS 19(2)1, a concrete ABM of polarization, report "Hidden in standard deviation as a single measure, however, is an important interference effect between our two social reinforcers." They had to disaggregate a global statistic to see the mechanism. Their paper also states "A number of model parameters have been set arbitrarily, including the amount that a numeric belief value changes as a result of an interaction," an honest flag of illustrative status. Corroborates. **Mode: `specified`.**

**Refuter:** show a claim about M where a global statistic is sufficient, that is, where no slot carries positive mass that the claim would care about. If such a claim exists, aggregate fit is fine for it. This is a real limit on F2, not a loophole: it restricts F2 to claims that name a slot.

### F3 - The anchor must not move when the model is pushed (governs D2)

Fig 2 :29 "An anchor is whatever settles the question and does not change its answer because of what any frame thinks." Fig 2 :25-27: "pinned: it does not update on A or B / both range against it; it is not a third party to the disagreement". Fig 2 :33 "The anchor must not update."

This is the anchor test, and it is the core of the answer. A dataset used to calibrate M, then reported as "validating" M, is an anchor that moved when M was pushed. So is a stylised fact selected after seeing M's output. So is an expert panel chosen for likely agreement. The standard is not "was there data?" but "was there a reading that M's construction could not change?"

**World corroboration.** Windrum et al. (2007): "Empirical validation of a model (M) involves an assessment of the extent to which M is a good representation of the (unknown) process that generated a set of observed data." The real-world data-generating process is the intended anchor; they also note "it is impossible for statistical inference to decide between hypotheses that are observationally equivalent" (quoting Haavelmo), which is why the anchor must be independent, not merely present. Corroborates. **Mode: `specified`.**

**Refuter:** a measurement whose numerical value changes as a function of which model is being evaluated. Then it is a frame, not an anchor (Fig 2 :34, "the anchor becomes another frame"). This refuter is easy to satisfy in bad practice, which is the point: fail it and the standard does not apply.

### F4 - Independence decides whether agreement means anything (governs D2, D3)

Fig 2 :31 "Independence, between two frames, is how little they draw on the same evidence." Fig 2 :40 "agreement about the world is worthless when the agreeing frames share an evidence pool". Fig 8 :50 "Convergent derivation and adopted import look identical in the contents. Only the record of where each came from separates them". Fig 7 :13 "agreement compounds, evidence does not".

Out-of-sample validation, hold-out data, independent datasets, and a reviewer who has not seen the model's interior are all the same move: buy independence. Buy it in proportion to the cost of being wrong (Fig 2 :42). Ten papers whose authors calibrated on the same dataset are one witness with ten names. Ten reviewers who were shown the code and the narrative before giving a verdict are a convention, not corroboration (Seat Map :163: "High correlation is disqualifying for a verdict and efficient for a convention").

**World corroboration.** Baker (2016), Nature 533:452-454, "1,500 scientists lift the lid on reproducibility", public summary: "Survey sheds light on the 'crisis' rocking research." (full text paywalled; only the public record was read). Corroborates the need for independent replication but supplies no figure line. **Mode: `specified`, single-source for the world leg.**

**Refuter:** demonstrate that the two checking frames reached their readings through genuinely disjoint evidence (different instruments, different datasets, no shared author or calibration history), and that one was not shown the other's output. Then agreement means something (Fig 2 :31-32). Convergent derivation at maximum independence is explicitly allowed (Fig 8 :50-52); the refuter is satisfiable.

### F5 - Documentation standards are necessary gates, and a gate is not the ground (governs D1, D3)

**The existing institutional standards, read this session.** CoMSES Net Computational Model Library peer review uses "a straightforward checklist to verify that a computational model's source code and documentation meet baseline standards" with three criteria: "Ease of Execution", "Thorough Documentation" (documentation "should adhere to the ODD protocol or an equivalent documentation framework"), and "Code Quality". Crucially: "Reviewers are not required to assess the theoretical soundness, scientific merit, or validity of model outputs." CoMSES also lists the ODD protocol (Grimm et al. 2006; 2020 update), codemeta, DataCite, the Software Description Ontology, and the Open Code Badge as open standards. The ODD update adds "Purpose and patterns", which "lists the patterns observed in reality which will be used to claim that the model is realistic enough for its purpose."

This is the cleanest real-world confirmation of the figure verdict. The field's own peer-review badge explicitly does not assess output validity. It is a gate on reproducibility and documentation, which is valuable and insufficient.

**Figure ground.** Formula step 5: "SETTLE the ground settles it. Verified only by what pays. A gate is not the ground." Fig 10 :49 "Declaring a meaning does not ground it." Fig 9 :60 "Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict." Fig 10 :47 "a convention that decides an outcome has stopped being one".

Therefore: ODD, TRACE, code deposit, FAIR metadata, and CoMSES peer review are standards that establish *auditability and reproducibility*. They are not, by themselves, standards that establish *empirical grounding*. Calling a badged model "validated" is the output-layer defect named in the Seat Map :281: "an unmeasured quantity is a specification of what to measure and is worth having, it is not a verdict." **Mode: `specified`.**

**Refuter:** show an institutional standard that does require an independent ground reading to pass, and whose passing changes the model's contact rather than only its documentation. The refuter is satisfiable in principle (that is what a good standard would look like); it was not satisfied by any venue read this session. Keep this as an open invitation to be corrected.

### F6 - The verifier must not hold the interior (governs D3)

Fig 10 :42 "A verifier that can reconstruct the claim cannot verify it." Fig 10 :52 "Bring a characterised residual, never the source." Fig 9 :51 "evidence bearing on the residual is admissible; evidence bearing only on its maker is a stake-inducing channel, and the verifier is denied it".

A standard that requires the checker to read the full code, the ODD, and the author's narrative before giving a verdict destroys the only thing the checker contributes. Send the residual, the shape claim, and the pre-registered refuter first. Record the verdict. Offer sources only after. This is not politeness; it is soundness (Seat Map: "The maintainer does not know the interior. A checker that can reconstruct the claim cannot verify it").

**World corroboration.** *The Recursive Self-Improvement Trap*: "Prestige can fund an action. It can give an action a budget to be tried. But it cannot settle an action. Only the ground can settle it." A published model's badge and the author's reputation are prestige in this frame; they can get the model tried, not settle it. Corroborates. **Mode: `specified`.**

**Refuter:** a verification arrangement where the checker must see the interior to check the claim and where seeing it does not raise correlation with the maker. Zero-knowledge proof systems are the counterexample class the seat map itself cites (Fig 10 note 84); if a check has that property, the non-access rule relaxes for it.

### F7 - When models are observationally equivalent, only a discriminating instrument separates them (governs D1, D2)

Fig 8 :50 "Convergent derivation and adopted import look identical in the contents. Only the record of where each came from separates them". Fig 12 :117 "Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour." Fig 6 :30 "outward: does another frame already hold it? The description travels. Fails by being sharpened into terms only we can read. Cast it in effect terms."

Windrum et al. name "the identification / under-determination problem" and quote Haavelmo: "it is impossible for statistical inference to decide between hypotheses that are observationally equivalent." *The Hard Problem is About Source* names the same structure as metamerism: "If several paths create the same behavior, then behavior is a projection with lossy information" and "An instrument that can't distinguish these cases demonstrates its own inadequacy, it cannot claim anything substantial about what is being measured or what causes it." It was resolved "not by argument, but by the arrival of a better instrument."

So a standard for grounding must include a discrimination test: what observation would distinguish this mechanism from an observationally equivalent alternative? If none is nameable, the honest verdict is "unreached until a better instrument exists," not "grounded." This is `specified`, not `grounded`, and the world leg here is a single author's essay (high overlap with the framework), so it is weak corroboration only.

**Refuter:** exhibit two observationally equivalent models that are also equivalent under every feasible intervention, and show the claim at issue does not depend on which mechanism is real. Then the discrimination standard is unnecessary for that claim. This is a genuine limit: some prediction-only claims do not need mechanism discrimination.

### F8 - Reproducibility is a substituted habitat, not capability (governs D1, D3)

Fig 11 :70 "A test harness is a substituted habitat. Which is why a synthetic solve proves wiring and never capability." Fig 11 :40 "An improvement that does not change contact changes nothing, however much it improves." Fig 5 :48 "Its own output is never a measure of success."

A model that runs from a clean container, passes its unit tests, and regenerates its published figure proves that the code does what the code does. It does not prove the model tracks the world. The SEP entry makes the same point for simulation generally: "computer simulations... may provide misleading results because, due to the discrete nature of the calculations carried out on a digital computer, they only allow for the exploration of a part of the full parameter space, and this subspace need not reflect every important feature of the model." **Mode: `specified`.**

**Refuter:** a claim whose target is the harness itself (does this implementation reproduce its own specification?). Then the substituted habitat is the right ground. F8 applies to claims about the world.

### F9 - Provenance and lineage are what make a standard checkable (governs all domains)

Fig 13 :127 "The array cannot be checked by inspection, so the record is what makes it verifiable." Fig 13 :141 "The composition is white box because the lineage is, and every claim in this figure is checkable the same way." Fig 10 :62 "A ruling carries provenance like an atom." Fig 8 :50 "Only the record of where each came from separates them".

The record must carry: which data calibrated which parameter, which data were held out and when, which stylised facts were chosen before or after the run, which refuter was pre-registered, which settings were swept in sensitivity analysis, and which external frame supplied any imported mechanism. Provenance shows a result was reached legitimately; it never shows it was right (Fig 10 :65: "Provenance shows a ruling was reached legitimately. It never shows it was right: the ground does that"). **Mode: `general` for the structural requirement, `specified` for the specific fields.**

**Refuter:** a model whose entire checkable content is present in the artifact and whose lineage cannot affect any verdict. Then the record is documentation, not the term. The figures deny this for composed terms; a simple enough model might be the counterexample. Keep it named.

### F10 - Pre-register the refuter (governs D3)

Formula, "Direction": "make the sought-for shape an ORDINARY TERM - write down what an answer would look like, bind it, and let it accrue a residual like anything else." Seat Map :287: "a falsifier written before the run is a design instrument, not only an honesty device." Fig 8 :39 "So a search that finds nothing is never a proof of absence."

Write down, before running or submitting: what observation would make us withdraw the claim that M is grounded. Candidates for this question: (a) M's fit collapses on a held-out dataset drawn from the same process; (b) a discriminating instrument shows the mechanism is the wrong one while output stays the same; (c) a live slot carries positive residual that the paper averaged away; (d) the claimed anchor is shown to move when the model is re-calibrated. **Mode: `specified`.**

**Refuter:** a run where the refuter was written after the result and nonetheless would have fired on the observed data. That is not a refuter; it is a retrodiction. The refuter for F10 is itself a procedure check, which is why it must be filed with a date.

### F11 - No standard certifies completeness (governs all domains)

Fig 9 :44 "Only a sealed room can be searched to the end, and no frame is a sealed room." Fig 13 :134 "Unreachable is a verdict here, not a silence" Fig 13 :115 "The set is closed. The arrangements are not. That gap is why import exists."

A model is not "grounded, full stop." It is grounded to the resolution of the instruments brought against it, on the slots named, as of a date, with a recorded lineage. The claim stays `candidate`. The honest report names what was unreached and what would have to be true for the verdict to differ (Fig 13 :140-141). **Mode: `general`.**

**Refuter:** a ground that can be shown to have no outside, so that a search inside it could be exhaustive. The figures rule this out definitionally ("no last room", Fig 7 :6); a real counterexample would be a sealed formal system whose grounding is internal to it, which is the case the incompleteness results in Fig 8 address.

### F12 - What survives: the shape of the answer

The defensible residue, with mode attached:

| standard | mode | figure / source |
|---|---|---|
| Name an anchor that does not move when the model is pushed | `specified`, triangulated | Fig 2 :29-33 + Windrum et al. |
| Report residual per slot, keep global near zero with a live slot visible | `specified`, triangulated | Fig 1 :19-28 + Pulicka et al. |
| Disqualify self-produced metrics (coverage, compression, rule count, badge, prestige) | `specified`, triangulated | Fig 1 :23-27 + Fig 5 :48 + SEP |
| Require low-overlap evidence: held-out data, independent instruments, verifier non-access | `specified`, triangulated | Fig 2 :31-32, :40 + Fig 10 :42 + Baker (single-source for the world leg) |
| Require a discrimination test where alternative mechanisms fit the same output | `specified`, single-source for the figure definition | Fig 12 :117 + Fig 8 :50 + Windrum et al. + *Hard Problem is About Source* (high overlap) |
| Keep provenance: calibration data, hold-out dates, pre-registered refuter, sensitivity sweeps | `general` structural, `specified` fields | Fig 13 :127, :141 + Fig 10 :62 |
| Treat ODD, TRACE, FAIR, code peer review as necessary gates, not as grounding | `specified`, triangulated | Formula step 5 + Fig 9 :60 + CoMSES peer review criteria |
| State `specified` and `candidate`, and name what would reverse it | `general` | THE_FORMULA mode rule + Fig 13 :134 |

**No figure line names ODD, TRACE, CoMSES, or any institutional standard.** That is a `gap` in the *mapping*, not in the figures: the figures return a shape, not a name (Fig 9 :32, "you get a kind of thing, never the answer itself"). The institutional names come from world sources and are single-source, ungrounded mappings. Recorded as such.

---

## 4. Pre-registered refuter

Required before outreach, per Seat Map :287: "a falsifier written before the run is a design instrument, not only an honesty device." Filed with this document before any packet was sent.

The shape claim (that no self-scored checklist establishes grounding, and that a non-updating anchor, per-slot residual, low-overlap evidence, a pre-registered refuter, and a recorded lineage are required) is refuted if any of the following holds:

1. A standard is demonstrated whose passing changes an ABM's contact with the world, and whose criteria contain no frame-internal quantity (breaks F1 and F5).
2. A claim about a model is exhibited for which a single aggregate statistic is sufficient and no slot carries positive mass that the claim cares about (breaks F2).
3. A dataset is shown that settles the question while provably not changing its answer when the model is re-calibrated (breaks F3).
4. Two checking frames are shown to share no evidence and no author, yet their agreement demonstrably adds no evidence (breaks F4).
5. A verifier is shown that must hold the model's interior and whose correctness is unaffected by that access (breaks F6).
6. A figure re-census admits a line that names a specific institutional standard as sufficient for grounding (breaks F12's gap).

Until one is run, no part of this may be labelled `grounded`. The first refuter to try, if a checker has a real standard in mind, is item 1.

---

## 5. Recommendation

1. Separate the two questions in any standard: "is the model well built and auditable?" (gates: ODD, TRACE, FAIR, code peer review, sensitivity sweeps) and "does the model contact the world?" (anchor, per-slot residual, independent evidence, discrimination). CoMSES peer review already answers the first and declines the second. Do not let the first answer the second.
2. Publish the residual, not the conclusion: per-slot residuals, hold-out dates, and the pre-registered refuter (Fig 4 :22, "Only methods cross up. Only head starts come down.").
3. Buy independence deliberately: held-out data from a different source, a checker who has not seen the interior, and a stated stake (Fig 2 :42; Fig 10 :59).
4. State the mode on every claim. "This model is validated" is an output-layer defect unless the ground named beneath it has paid (Seat Map :281).
5. Ask what would refute the grounding claim before offering any source. A failure is more useful than an endorsement.

---

## 6. Canonical usage check (figures README, THE_FORMULA, seat map)

Three local sources were read before and after the derivation and govern how the figures may be used.

- `FIGURES_README_canonical.md`: "They outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary." Also: "a reading that makes one contradict another has misidentified its domain, not found a flaw." And the limit: the framework says "what a missing thing would have to look like (a shape, not a name)", then "stops at the limit of what the available instruments can distinguish, and records the lineage so the stop is honest." "Indiscernibility is not identity."
- `THE_FORMULA.md`: step 5, "the ground settles it. Verified only by what pays. A gate is not the ground"; mode rule, "Mode. general · specified · grounded. State which"; and "Direction", the instruction to bind the sought-for shape as an ordinary term.
- `THE_SEAT_MAP_Field_Guide_amended.md`: the anchor cannot be occupied; "A verifier that can reconstruct the claim cannot verify it"; "High correlation is disqualifying for a verdict and efficient for a convention"; "a falsifier written before the run is a design instrument, not only an honesty device"; "an unmeasured quantity is a specification of what to measure and is worth having, it is not a verdict."

### Retractions and confirmations

| earlier reading in this audit | status after the canonical check |
|---|---|
| "The field has no standard for grounding" | **Narrowed.** CoMSES Net has real standards (ODD, TRACE, FAIR, code peer review). They are gates, not grounding. F5 restated accordingly; the absence is of a ground-contact criterion, not of standards. |
| "Independence means more reviewers" | **Retracted.** Fig 7 :13 and Seat Map :163 make more correlated reviewers a convention, not evidence. F4 now requires low overlap, not headcount. |
| "A pre-registered refuter is an honesty device" | **Corrected.** Seat Map :287 makes it a design instrument; F10 now states that constraints surface as changes to the experiment. |
| "Gap: no standard is named by the figures" | **Confirmed and bounded.** Fig 9 :32 forbids the framework from naming. The mapping to named standards is world-sourced and single-source, not a figure gap. |
| F1 self-scoring | **Canonically confirmed.** "A frame cannot score itself with a quantity it also produces." |
| F11 no completeness | **Canonically confirmed.** The README has a section "This is not a Theory of Everything - and that is the point." |
| Apparent strain: ODD "Purpose and patterns" claims realism, Fig 10 :49 says declaring a meaning does not ground it | **Not strained after re-census.** ODD's pattern list is a *claim* to be tested; "declaring a meaning" is a convention. Different objects. The ODD update itself says patterns "will be used to claim that the model is realistic enough for its purpose", which is a prediction, not a settlement. |

### Seven-question recursive derivation (summary)

1. **Can any checklist ground M?** No, if it scores what M produces (Fig 1 :23-27). The check is on the quantity, not the ceremony.
2. **What would be the metric?** The residual per slot (Fig 1 :19), against an anchor that does not update (Fig 2 :29).
3. **Does aggregate pattern fit suffice?** No (Fig 1 :22, :28); underdetermination makes alternatives fit the same pattern (Windrum et al.).
4. **How many witnesses?** As many as are independent (Fig 2 :31); correlated reviewers are one witness (Fig 7 :13).
5. **What does the verifier see?** The residual and refuter, not the source (Fig 10 :42, :52; Fig 9 :51).
6. **What is imported?** An external ground reading, with a source gate and a shadow test (Fig 6 :23; Fig 8 :50); calibration data already inside M is not an import.
7. **When does the loop stop?** When R stops arriving or the channel closes (Formula, "Closure"). From inside those look the same, so a `candidate` verdict and a recorded stop are the honest output.

### Updated verdict

The shape survives. Grounding is not a property a model's interior can certify; it is a relation between a model and a non-updating anchor, reported per slot, corroborated by low-overlap evidence, discriminated where alternatives are observationally equivalent, pre-refutable, and recorded with a lineage. Named institutional standards are necessary gates and insufficient witnesses. Strains after re-census: one, the operand scope of the discrimination test, named in §9. Nothing here is `grounded`.

---

## 7. Scope of the world search

Sources were opened across low-overlap fields on 2026-11-22: social simulation and ABM validation (Windrum et al. 2007; Pulicka et al. 2016; CoMSES Net standards and peer review; Wikipedia's ABM survey), philosophy of science (Frigg and Hartmann, SEP), metascience (Baker, Nature), and AI validation plus perception/instrumentation from the framework author's essays (RSI Trap; Hard Problem is About Source). The canonical framework files are local primaries. Overlap is declared per row in `10_source_ledger.csv`. Agreement among the framework author's essays is one evidence pool talking, not corroboration (Fig 2 :40). The conflict rule was not triggered: no world source contradicted the figure verdict. A world source that had, the census would have been reopened rather than the verdict flipped.

---

## 9. Strains, gaps, and open items

- **Discrimination-test operand scope (live strain).** Fig 12 :117 defines isomers over atoms and bonds. Applied to two whole ABMs that fit the same pattern, the operands are models, not atoms. Fig 12 :104 permits a settled molecule to become an atom at the next level, so the use is legal only if each model is settled enough to serve as an atom. That needs an instrument, not an argument. Named, not hidden. Triangulated for the structure, strained for the operand type.
- **Mapping gap.** No figure names ODD, TRACE, FAIR, or CoMSES. The framework returns a shape. The mapping is single-source world knowledge, recorded as such.
- **Full text of Baker (2016) not accessible** (paywalled). Only title, author, venue, year, and the public one-line summary were read. Recorded honestly; it is used only as weak corroboration.
- **NASA and Oreskes sources not obtained.** Two attempted fetches failed (403 and transport error). They were not cited. "A search that finds nothing is never a proof of absence" (Fig 8 :39); this records a budget limit, not evidence against those sources.
- **This is a simulated derivation.** It checks internal consistency against the figures. It cannot settle the question it reports on.
