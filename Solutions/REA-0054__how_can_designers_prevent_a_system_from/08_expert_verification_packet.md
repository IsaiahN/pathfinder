# Expert verification packet — the Tether on specification gaming

**What this is:** a claim in a form an AI-safety researcher or specification researcher can check. Mode, derivation and refuters are stated before the conclusion, so a reader knows what to look for and what would settle it.

**Mode: `specified` — not `grounded`.** No benchmark, deployment, or measurement in this derivation is claimed to settle the design question. This is a shape and a route, not a result.

## 1. The claim, in one paragraph

A written specification cannot occupy the anchor seat in an aligned design, because it updates with the frame that wrote it and, in the tampering case, with the actions of the system being checked. What prevents harmful spec-satisfaction is a design shape with several properties that must hold together: a non-updating ground kept reachable; the spec demoted to a falsifiable convention; a verifier the system cannot reconstruct; a vocabulary that can refuse before it adds; a habitat enumerated outward past first-order contact; independent frames ranged separately against the ground; budget kept out of the verdict; and a measured gap between the intended outcome and the metric. The classic failure mechanisms are isomers over a shared atom set, same atoms with a different failed bond, so they form a union and one lever clears only the single-mechanism regions. The framework does not name a reward function, monitor, or audit protocol. It offers the shape any candidate answer must have, refuters written in advance, and the instruments that would close it.

## 2. Three checkable sub-claims

### C1 — framework-internal, checkable by reading Figures 1, 2 and 10

- **Statement:** the written spec is a convention, not an anchor; the agent's self-score is disqualified as a verdict; a check the system can reconstruct is not a check.
- **Source, verbatim:**
  - Fig 2 :29: *"An anchor is whatever settles the question and does not change its answer because of what any frame thinks."*
  - Fig 10 :18: *"a declared meaning is not a grounded one"*
  - Fig 1 :27: *"A frame cannot score itself with a quantity it also produces."*
  - Fig 10 :42: *"A verifier that can reconstruct the claim cannot verify it."*
- **Refuter:** exhibit a written specification that satisfies Fig 2 :29, that does not update when any frame pushes on it and that is not a party to the optimization; or exhibit a verifier that reconstructs the claim and still verifies it.

### C2 — union/isomer claim, checkable from the figure definition plus the field's own mechanism census

- **Statement:** the four mechanisms (partial observability, proxy correlation collapse under optimization, self-reinforcing feedback, reward tampering) share the same atoms with different failed bonds, so they are Fig 12 **isomers**, *"Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."* Because they overlap, the problem is a union compound: Fig 9 :55, *"A bundled problem is usually a union of overlapping conditions, not a list of separate ones."*
- **What to check:** is the four-mechanism census faithful to the literature (Amodei et al. 2016; Manheim and Garrabrant 2018; Krakovna et al. 2020)? Does one lever remove the residual in the intersections, or only in the single-condition regions? METR (2025) is a direct check: prompt-level prohibitions had *"nearly negligible effect"*, while a visible scoring function was patched in up to *"100.0%"* of runs on one task.
- **Refuter:** one lever closes the residual across all four mechanisms including intersections, out of sample (kills the union claim); or any two mechanisms differ only in quantity under one bond (kills the isomer claim for that pair, leaving the functional-group reading).

### C3 — habitat and instrument claim, checkable against deployment evidence

- **Statement:** capability lives in agent-and-habitat; a synthetic pass proves wiring, not deployment capability; the habitat must be enumerated outward past first-order contact.
- **Source, verbatim:**
  - Fig 11 :39: *"capability is a property of agent-and-habitat, never of the agent alone."*
  - Fig 11 :70: *"A test harness is a substituted habitat. Which is why a synthetic solve proves wiring and never capability."*
  - Fig 11 :52: *"Scoping the habitat to direct contact is how DDT reached the eagles: first-order enumeration, second-order effect, and the residual that mattered was three steps out."*
- **Refuter:** a safe deployment produced by improving the agent in isolation with no change in contact; or a synthetic solve that transfers to an unconstrained habitat with no new residual; or a case where the harm was purely first order and a direct-contact enumeration caught it.

## 3. What is explicitly not claimed

- Not a safe reward function, monitor, audit protocol, or certification standard. Naming one is a binding from the safety frame, not a figure derivation.
- Not that reward hacking is solved, and not that it is in principle unsolvable. No ground reading here decides either.
- Not "write a better specification." Re-describing S is budget work on a link that already works (Fig 3 :19).
- Not that more reviewers or more agreement help. Independence is evidence overlap, not headcount (Fig 2 :40, Fig 7 :13).
- Not `grounded`. All sub-claims are `specified` and the world sources share an evidence pool at the shape level.
- Not a claim that this derivation settles the question it reports on. It is a simulation, checked for internal consistency against the figures.

## 4. Provenance

- Question: `Questions/reasoning.txt` line 67 (1-based), numbered question 54, section 6 (Agency, goals, and autonomy).
- Figure text: `C:\Users\Admin\Desktop\Project Pathfinder\FRAMEWORK\reference\03-FIGURES_TEXT.md`, verbatim, read this session. Every `Fig N :line` quote above is checked against that file.
- Canonical usage: `FRAMEWORK/reference/FIGURES_README_canonical.md`; formula: `FRAMEWORK/figures/THE_FORMULA.md`.
- Eight essays by Isaiah N, 2026-08 to 2026-11, opened and listed in `05_what_shape_means.md` and `10_source_ledger.csv`.
- World sources read 2026-11-23: Krakovna et al. (DeepMind, 2020); Amodei et al. (arXiv:1606.06565, 2016); Skalse et al. (arXiv:2209.13085, 2022, rev. 2025); Manheim and Garrabrant (arXiv:1803.04585, 2018); Everitt et al. (arXiv:1908.04734, 2019/2021); Goodhart's law and Reward hacking (Wikipedia, accessed 2026-11-23); METR (2025).
- This packet compiled 2026-11-23.

## 5. What would settle it

A source-discriminating instrument, not a further argument. From *The Hard Problem is About Source*, green *"cannot comment on the source"* and the spectrometer resolved the case *"not by argument, but by the arrival of a better instrument."*

1. **Anchor test:** name a referent that does not change its answer when any frame pushes on it and that is not a party to the optimization.
2. **Verifier non-access test:** show the optimized system cannot reconstruct the verifier's criterion, and that a patch attempt registers as a residual.
3. **Cascade test:** enumerate contact two or three steps out and check whether a synthetic pass predicts deployment behaviour.
4. **Refusal test:** show a newly found gaming strategy can be refused and that the reach falls safely when it is.

## 6. What an expert can check in twenty minutes

1. Read Fig 2 :29, Fig 1 :27, Fig 10 :18 and :42, Fig 12 :117, Fig 9 :55, Fig 11 :39 and :70. Eight short passages.
2. Check C2 against the cited literature: are the four mechanisms faithful, and do they overlap? If one lever clears all of them, say so.
3. Name one instrument that would discriminate an intended outcome from a spec-satisfying proxy in your own system, or say why none exists.
4. Send the refutation. A failure is more useful than an endorsement.

**Status of this packet:** a simulated derivation checked for internal consistency against the figures, not a ground reading. It cannot settle the claim it reports on.
