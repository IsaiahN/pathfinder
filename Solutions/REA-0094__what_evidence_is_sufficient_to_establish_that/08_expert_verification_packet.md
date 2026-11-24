# Expert verification packet: safety evidence at a level of autonomy

**What this is:** a claim in a form a safety-evaluation specialist can check. Mode, derivation and refuters are stated before the conclusion, so a reader knows what to look for and what would settle it.

**Mode: `general` on the shape, `specified` on the falsifiable predictions, not `grounded`.** No measurement is claimed. This is a shape and a route, not a result. Simulated derivation checked against the figures, not a ground reading.

## 1. The claim, in one paragraph

Safety is a property of agent and habitat, never of the agent alone (Fig 11 :39-40). A test harness is a substituted habitat, so a benchmark pass proves wiring and never deployment safety (Fig 11 :70). Evidence said to be sufficient for autonomy level L must therefore range against outcomes at the ground, be indexed by the live slots where harm can hide, come from instruments that do not share an evidence pool, state the acceptable-risk threshold before the run as a comparison, and be maintained as a channel. A single aggregate score, a larger test suite, or agreement among reviewers who read the same report does not close the residual. The framework returns this shape, not a named checklist, and the threshold slot stays open until a ground reading settles it.

## 2. Three checkable sub-claims

### C1 : Framework-internal; checkable by reading Figures 11, 1 and 8

- **Statement:** an evaluation-only certificate is not sufficient, because safety is agent-and-habitat and a harness is a substituted habitat. Errors can hide in live slots that an aggregate hides further.
- **Source, verbatim:** Fig 11 :39 "And capability is a property of agent-and-habitat, never of the agent alone." Fig 11 :70 "A test harness is a substituted habitat. Which is why a synthetic solve proves wiring and never capability." Fig 1 :19 "The residual is indexed by object slot, not aggregated." Fig 8 :39 "a search that finds nothing is never a proof of absence."
- **What to check:** does the claimed evidence range against deployment behavior at L, or against a substitution? Are the live slots identified, or only an aggregate? Is non-detection being reported as absence?
- **Refuter:** a harness shown to reproduce every causally relevant contact, including cascades three steps out (Fig 11 :52-53), with deployment outcomes matching it under the stated threshold; or an aggregate that tracks the live slot across a habitat change. If either holds, this sub-claim is withdrawn.

### C2 : Safety-engineering-facing; checkable against practice

- **Statement:** "safe at L" is a goal with a comparison bond ⋛ between realized risk and acceptable risk at L, and the threshold must be written down before the run; assurance is maintained work, not a one-time certificate.
- **Source, verbatim:** Operators table :52 "a goal is a comparison, which is why a vocabulary without it cannot state one." Fig 5 :65-66 "make the sought-for shape an ORDINARY TERM. Write down what an answer would look like, bind it, and let it accrue a residual like anything else." Fig 10 :24 "the ground does not decay, the channel does." Fig 11 :63-64 "Which is why a managed ecosystem is permanent work rather than a solved state."
- **What to check:** is the acceptable-risk threshold explicit, scoped to L, and prior to the evaluation? Is there a maintenance rule for model, prompt, tool and habitat changes? A practice check: Lee, Zhu et al. (arXiv 2026) write that "evidence must be continually refreshed as model behaviour and deployment contexts evolve", and describe assurance as "a process of continuous learning rather than static certification."
- **Refuter:** a threshold-free invariant claim that settles at the ground and remains composable, or a frozen configuration whose evidence stays decisive after its deployment context changes with an intact channel. Either would break this sub-claim and force a re-census of the bond.

### C3 : Verification-arrangement-facing; checkable by an outside frame

- **Statement:** agreement among evaluators who share an evidence pool is one witness, not corroboration; evidence about the maker is inadmissible for a verdict about the residual.
- **Source, verbatim:** Fig 2 :31-32 "Independence, between two frames, is how little they draw on the same evidence." Fig 2 :35 "Alignment is triangulation, not negotiation. A mirror cannot correct you." Fig 2 :40 "disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool." Fig 9 :51 "evidence bearing on the residual is admissible; evidence bearing only on its maker is a stake-inducing channel, and the verifier is denied it."
- **What to check:** do the independent evaluations draw on different instruments and different experience, or the same benchmark, threat model and lab? Does the case cite maker properties (reputation, budget, pedigree) as if they settled the residual?
- **Refuter:** a demonstration that two frames drawing on one pool are two witnesses for a verdict about the world, overturning the effective-sample-size law in Fig 2 :44, or that maker-only evidence can settle the residual. Note the legitimate alternative: Fig 8 :50 "Two frames can hold the same atom by convergence, reaching it separately, which is corroboration at maximum independence."

## 3. What is explicitly not claimed

- Not that no evidence can ever be sufficient. A scoped, ground-ranged, per-slot, low-overlap, threshold-bound and maintained account can be sufficient for a specific deployment.
- Not that any named system, lab, benchmark or incident shows this framework is right. No measurement was taken in this run.
- Not that benchmarks, red teams or safety cases are worthless. They are evidence about a substituted habitat and about wiring; they are not the ground verdict.
- Not a certification, not a standard, not a regulation, and not a claim about a specific acceptable-risk number.
- Not `grounded`. Every claim is `general` or `specified`, and the threshold slot is marked open.
- Not a claim that the comparison bond is settled. The invariant alternative is a live strain, named in `01` §6 and in C2's refuter.

## 4. Provenance

- Figure text extracted verbatim from Isaiah's 13 SVGs plus the Operators and Symbols tables, read locally at `FRAMEWORK/reference/03-FIGURES_TEXT.md` on 2026-11-24.
- Canonical usage rule: `FRAMEWORK/reference/FIGURES_README_canonical.md`, local copy, read 2026-11-24.
- Loop, mode rule and seat rules: `FRAMEWORK/figures/THE_FORMULA.md` and `FRAMEWORK/figures/THE_SEAT_MAP_Field_Guide_amended.md`, read 2026-11-24.
- Essays by Isaiah N, three opened this session (Library of Babel, Hard Problem is About Source, Recursive Self-Improvement Trap); five others inherited from the calibrated exemplar and marked as such in `05_what_shape_means.md`.
- World sources actually fetched: METR time-horizon paper (Kwa, West et al., NeurIPS 2025); Hidden Stratification (Oakden-Rayner et al., CHIL 2020); Structured Safety Case Construction (Lee, Zhu et al., arXiv 2026); Underspecification (D'Amour et al., JMLR 2022); Evaluating Frontier Models for Dangerous Capabilities (Phuong et al., arXiv 2024); NIST AI RMF page; International AI Safety Report 2026. Full URLs, dates and quotes in `10_source_ledger.csv`.
- This packet compiled 2026-11-24.

## 5. What would settle it

A ground reading, not further agreement. Specifically:

1. **Contact test:** does the evidence reproduce the habitat at L, including cascades three steps out (Fig 11 :52-53)?
2. **Slot test:** is there an instrument that exposes the persistently failing slot rather than the aggregate? Oakden-Rayner et al. report 0.94 AUC with chest drains versus 0.77 without, against an aggregate of 0.87.
3. **Threshold test:** is `acceptable(L)` written down before the run and settled or refused at the ground (Fig 5 :65-66, Fig 10 :47)?
4. **Independence test:** are the instruments low-overlap, per Fig 2 :31-32 and Fig 8 :50-52?
5. **Channel test:** is the channel still ranging against the ground, per Fig 10 :25-28?

## 6. What an expert can check in twenty minutes

1. Read Fig 11 :39-40, :70 and Fig 1 :19-22. Four short passages.
2. Take one safety case you know. Identify the habitat the evidence was gathered in and the habitat it will be deployed in. Name one actor, condition or relation in the second that is absent from the first.
3. Identify the live slot that an aggregate score would hide. If none exists, say so; that is the refuter.
4. Find the acceptable-risk threshold for the claimed level. If it was written after the results, mark the case as unbindable under Fig 5 :65-66.
5. Name one instrument that would discriminate the live slot, or say why none is possible (Fig 6 :34-35).
6. Send the refutation. A failure is more useful than an endorsement.

**Status of this packet:** a simulated derivation checked for internal consistency against the figures, not a ground reading. It cannot settle the question it reports on.
