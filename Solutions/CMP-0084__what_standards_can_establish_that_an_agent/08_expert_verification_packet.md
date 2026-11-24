# Expert verification packet - standards for an empirically grounded ABM

**What this is:** a claim in a form a modeller, validator, or philosopher of science can check. Mode, derivation, and refuters are stated before the conclusion, so a reader knows what to look for and what would settle it.

**Mode: `specified` on the substantive claims, `general` on the structural shape. Not `grounded`.** No measurement is claimed to have settled which standard is best. This is a shape and a route, not a result.

## 1. The claim, in one paragraph

"Empirically grounded" is a relation between a model and a non-updating anchor, not a property the model's interior can certify. Code that runs, an ODD document, FAIR metadata, a code archive, a reproduced stylised fact, and a peer-reviewed badge are necessary gates on auditability and insufficient witnesses for grounding. The CoMSES Net computational model peer review criteria are the checkable case: they grade ease of execution, documentation, and code quality, and explicitly state that reviewers are not required to assess the validity of model outputs. A ground-establishing standard must additionally require a non-updating anchor, a per-slot residual, disqualification of self-produced metrics, low-overlap evidence, a discrimination test where mechanisms are observationally equivalent, a pre-registered refuter, and a recorded lineage. No such standard certifies completeness; the verdict stays `candidate` until a ground pays.

## 2. Three checkable sub-claims

### C1 - The field's own review badge is a gate, not a grounding test (checkable by reading one public page)

- **Statement:** the CoMSES Net computational model peer review process verifies execution, documentation, and code quality, and explicitly does not require reviewers to assess the validity of model outputs. Therefore passing it cannot, by itself, establish empirical grounding.
- **Source, verbatim (world source, not a figure):** CoMSES Net peer review criteria, https://www.comses.net/reviews/, read 2026-11-22: "Reviewers are not required to assess the theoretical soundness, scientific merit, or validity of model outputs." The three criteria are "Ease of Execution", "Thorough Documentation", and "Code Quality".
- **Figure ground:** Formula step 5: "the ground settles it. Verified only by what pays. A gate is not the ground." Fig 9 :60 "Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."
- **Refuter:** show that the CoMSES criteria, as published, do require an independent ground reading whose result can change the verdict. If the page has changed since 2026-11-22, that is a legitimate refutation of this sub-claim as dated.

### C2 - Aggregate pattern fit cannot discriminate observationally equivalent models (checkable by a modeller)

- **Statement:** two ABMs with the same atoms (agents, rules, parameters) and different bonds (interaction topology, update order) can produce the same stylised fact while differing under intervention. Fig 12 :117: "Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour." Reporting only the reproduced pattern cannot tell them apart.
- **World corroboration:** Windrum, Fagiolo and Moneta (2007), JASSS 10(2)8: "different models can be consistent with the data that is used for empirical validation," the "under-determination of theory with respect to data," and Haavelmo's "it is impossible for statistical inference to decide between hypotheses that are observationally equivalent."
- **Figure ground:** Fig 1 :19 "The residual is indexed by object slot, not aggregated." Fig 1 :22 "Aggregating across slots is how a live signal disappears into an average."
- **What to check:** is there a pair of models in your field that fit the same target pattern and diverge under an intervention? Pulicka et al. (2016), JASSS 19(2)1, report a case where "Hidden in standard deviation as a single measure... is an important interference effect between our two social reinforcers."
- **Refuter:** exhibit two models equivalent under every feasible intervention where the claim at issue does not depend on which mechanism is real. Then the discrimination requirement is idle for that claim.

### C3 - A verifier shown the model's interior cannot provide an independent check (framework-internal derivation)

- **Statement:** the independent check must see the characterised residual, not the source. Fig 10 :42 "A verifier that can reconstruct the claim cannot verify it." Fig 10 :52 "Bring a characterised residual, never the source." Fig 9 :51 "evidence bearing on the residual is admissible; evidence bearing only on its maker is a stake-inducing channel, and the verifier is denied it".
- **Refuter:** show a verification arrangement where the checker must hold the interior and where that access does not raise correlation with the maker (zero-knowledge proof systems are the counterexample class the seat map itself names). Then non-access relaxes for that arrangement. Also refuted if the verifier's stake is declared and demonstrably irrelevant to the reading.

## 3. What is explicitly not claimed

- Not that ODD, TRACE, FAIR, code peer review, reproducibility, or sensitivity analysis are worthless. They are necessary gates and this packet uses them.
- Not that a published or badged model is ungrounded. It is *not established as grounded by the badge alone*. That is a different claim.
- Not that every modeller is dishonest or every model illustrative. The failure is structural: a frame cannot score itself with a quantity it also produces (Fig 1 :27).
- Not that a single aggregate statistic is always wrong. It is wrong for claims that name a slot; a claim with no live slot is outside C2.
- Not that two pattern-equivalent models are always isomers. They may share only a functional group (Fig 12 :124).
- Not a name for the one true standard. Fig 9 :32 "you get a kind of thing, never the answer itself."
- Not `grounded`. Nothing here was settled by measurement.

## 4. Provenance

- Question: CMP-0084, complexity science.txt line 103, section 9 of the source file. Opened 2026-11-22.
- Figure text: `FRAMEWORK/reference/03-FIGURES_TEXT.md`, verbatim, opened 2026-11-22. All `Fig N :line` quotes in this packet are from it.
- Framework primaries: `FIGURES_README_canonical.md`, `THE_FORMULA.md`, `THE_SEAT_MAP_Field_Guide_amended.md`, all read 2026-11-22.
- Eight essays by Isaiah N, 2026-08 to 2026-11, read 2026-11-22; see `05_what_shape_means.md`.
- Windrum, Fagiolo and Moneta (2007), JASSS 10(2)8, https://www.jasss.org/10/2/8.html, read 2026-11-22.
- Pulicka, Korth, Grima and Jung (2016), JASSS 19(2)1, https://www.jasss.org/19/2/1.html, read 2026-11-22.
- CoMSES Net peer review and standards pages, https://www.comses.net/reviews/ and https://www.comses.net/resources/standards/, read 2026-11-22.
- Frigg and Hartmann, "Models in Science", Stanford Encyclopedia of Philosophy, Fall 2026 Edition, read 2026-11-22.
- Full ledger: `10_source_ledger.csv`. This packet compiled 2026-11-22.

## 5. What would settle it

1. A standard whose passing changes a model's contact with the world and whose criteria contain no self-produced quantity (refutes C1's generality).
2. A claim about a model where a single aggregate statistic is sufficient and no slot carries a live residual (limits C2).
3. A verification arrangement where verifier non-access is unnecessary (refutes C3).
4. A ground reading of real checking arrangements showing which of the six conditions actually discriminates grounded from illustrative models. That would move the verdict from `specified` to `grounded`.

## 6. What an expert can check in twenty minutes

1. Open https://www.comses.net/reviews/ and find the sentence "Reviewers are not required to assess the theoretical soundness, scientific merit, or validity of model outputs." Confirm or refute C1.
2. Read Fig 12 :117 and Fig 1 :19-22 (four short passages). Say whether the pattern-equivalent-models case is a real discriminator in your field, or whether you have a counterexample.
3. Name one observation that would distinguish two mechanisms fitting the same pattern in your domain, or say why none is possible. That is the discrimination test in C2.
4. Say what you would expect to see if the non-access claim (C3) were false, before being shown the framework's reasoning.
5. Send the refutation. A failure is more useful than an endorsement.

**Status of this packet:** a simulated derivation checked for internal consistency against the figures, not a ground reading. It cannot settle the claim it reports on.
