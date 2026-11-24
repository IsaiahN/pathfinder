# Structure, order and isomers in a ranking loop

**Mode: `specified`.** This is a simulated derivation checked against the figures, not a ground reading (see `05_what_shape_means.md` §6). No system was instrumented.

## RESIDUAL

The audit's domain census found that "ranking" is a binding of figure-held terms onto a software artifact (Fig 5 correction), not a new primitive. Three questions are owed before the answer can be stated: (1) what is the structure a ranking produces, and is it ordered; (2) what keeps the loop closed, and what would open it; (3) are two recommenders with the same inputs but different objectives isomers under Fig 12, and what would refute that.

## DOMAIN CENSUS (brief, re-derived from the residual line)

Atoms held: Space, Time, Energy (states), Gradient, Network, Spectrum (structures); the seven bonds plus negation; weighting `w`. Relevant bindings from the recommender frame: candidate pool, logged history, ranking function, engagement objective. Currency: predicted engagement. Anchor candidates: the slate log (encounter) and independent human judgment (trust). No new primitive is available without import, and Fig 6 :23 says the wall moves only on contact with a frame whose closure differs.

## DERIVATION

### Q1. Ranking is an ordered comparison over a spectrum, not a bag of ingredients

- Fig 13 :20: "ordering, so more and less can be said." That is the spectrum structure. A ranked slate is an ordering; it produces "more and less" for the user.
- Fig 12 :112: "A plan is a sequence. A goal is a comparison. Progress is a subtraction." The comparison bond ⋛ is ordered: Fig 12 :85 to :89 defines it as *"a threshold relation between two quantities"* with the test *"is it about which is larger, rather than both being present?"*
- Operators table :59 to :62: for symmetric bonds, *"Under a symmetric bond, k operands have k! spellings and one term"*; under an ordered bond *"different orders are different terms, and charging for the sequence is correct."* Swapping two items in a slate changes the thing delivered. So ranking is an ordered bond, not a symmetric one.
- Fig 12 :5: "A set of ingredients is not one. The bond is the rest of the information, and it is the half nothing was recording." A list of candidate items with their scores does not record the ranking function that produced the slate. The bond is the missing half.

**Conclusion Q1:** a slate is a molecule whose atoms are candidate items and whose bonds are the objective and the ordering. Reporting only the items and their scores records the ingredients and drops the arrangement. This is the notation failure Fig 12 names, and it is exactly what an audit that reports only aggregate CTR commits. Triangulated (Fig 13 + Fig 12 + Operators table); mode `specified`.

### Q2. The loop closes on the sign of its own output

- Fig 12 :121: "cycle. The output re-enters as input. The sign of the loop decides whether it closes, and a chain cannot close by construction."
- In a recommender, the output (what was shown and clicked) re-enters as the input (the next ranking). The sign is the objective's relation to its own output: if engagement predicts more of the same engagement, the loop is positive and closes. The system becomes "one long room" (Fig 7 :32) with motion and no progress.
- Fig 2 :33 to :34: "The anchor must not update. If it does, panel 3 turns into panel 1: the anchor becomes another frame, everything drifts together, and the drift is coherent, which is why nobody notices." A loop whose reference is its own output is panel 1.
- To open the loop, the re-entering signal must be referenced to something that does not update on the frames. Fig 2 :45: "Frames range against the ground. They do not negotiate with it." Fig 10 :24: "the ground does not decay, the channel does."

**Conclusion Q2:** the loop is a cycle whose sign is decided by the objective, not by the model architecture. Changing the architecture without changing the sign leaves the loop closed. This is a structural claim from Fig 12 :121 plus Fig 2 :33 to :34; mode `specified`.

### Q3. The ranking model is a catalyst, and the record does not say which kind

- Fig 12 :119: "catalyst. A part that survives its own use. Spent and regenerating parts behave differently across uses, and nothing records which a term is."
- The ranking model is spent (each inference consumes its current parameters and produces a slate) and regenerating (retraining rebuilds it from new logs). Spent and regenerating parts behave differently across uses: one drifts toward its own history, the other is re-grounded. A system that does not record which a term is cannot tell a replay from a fresh fit.
- Fig 4 :25: "A recording carried upward looks like knowledge and is a description of one occasion." Replayed downward, it produces "a system that repeats a past success and cannot produce a new one." A recommender that serves the last successful item is a replay; one that serves a head start is a generator. Both look identical in the slate.

**Conclusion Q3:** the distinction between replay and head start is not in the output artifact; it is in the lineage. This is the provenance claim of How Intelligence Actually Works applied to a feed: a frame from the video and a photograph *"are indistinguishable as artifacts, and they carry different warrants."* Triangulated (Fig 12 + Fig 4 + essay, with the essay framework-authored so high overlap on that axis); mode `specified`.

### Q4. Are two recommenders isomers?

- Fig 12 :117: "isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."
- Let system A optimise predicted engagement and system B optimise an independently grounded objective (for example, exposure diversity measured against a slate log, or a pre-registered accuracy target). Hold fixed: the candidate pool, the user's logged history, the interface, the set of available items. Same atoms, different bond. Under Fig 12 :117 they are isomers, not variants of one system: same ingredients, different substance, and the difference is decisive in behaviour while invisible in an ingredient list.
- If the objectives are instead written over the *full shared atom set* (the same items, the same user, the same ranking machinery, only the comparison bond changed), the isomer claim is at its strongest: both are members of the same functional group (Fig 12 :124: *"the group says what kind; the qualifier says which member"*) with a different bond at the objective slot.
- This is a real, checkable claim, not a metaphor. Two systems can be run on the same candidate set and the same user histories, with only the objective changed, and their per-slot slates compared.

**Falsifier for Q4, written before the run:** if two systems with different objectives produce the same slate over every tested user and every tested candidate set, the isomer claim fails. If they differ only when engagement is high and are otherwise identical, the "decisive in the behaviour" clause narrows to that condition and must be recorded as such. Either outcome is more useful than an assertion that "algorithms are different."

**Conclusion Q4:** the isomer reading survives as a `specified`, falsifiable claim. Its mode is not `grounded`: no two systems were run. Single-source on Fig 12 for the definition, with the falsifier supplied by this derivation rather than by a figure.

### Q5. Dependency order: the objective is link three, and the usual break

- Fig 3 :19: "Optimising a link that already works cannot rescue one that does not."
- Fig 3 :10 (link 3, the objective): "it can say what would count as progress here, in its own terms."
- A recommender generally has links 1 and 2 (perception and vocabulary: logs, embeddings, candidate generation) and link 4 (planning: ranking under uncertainty). Link 3 is occupied by engagement. If engagement is frame-internal (audit F1), link 3 is broken. Effort on links 1, 2 and 4 arrives at a step that cannot use it.
- Fig 3 :27: "A link with no instrument is not a link that works. It is a link nobody has looked at." And Fig 3 :22: "a reading taken below the break is not a weak reading. It is a reading of nothing."
- Order of operations from `THE_FORMULA.md` step 2: refuse before mint. The claim "ranking changes trust" must first be refused as an unbound preference until written down and given a residual (Fig 5 :62 to :66). Then the shape is derived. Then, and only then, the ground is asked.

**Conclusion Q5:** the dependency order is: name the anchor; bind the sought-for shape as an ordinary term; refuse the unbound version; settle the first-order exposure claim; then the second-order trust claim; then magnitude. Working in any other order produces motion, not progress. Triangulated (Fig 3 + `THE_FORMULA.md` step 2, different frameworks but the same framework family); mode `general` for the order, `specified` for the claim that link 3 is the broken one here.

## CONCLUSION

Ranking is an ordered comparison (a spectrum under a comparison bond), not an ingredient list; the ranking loop is a cycle whose sign is the objective, and it closes when the reference updates on its own output; the ranking model is a catalyst whose replay and regenerating states are indistinguishable in the slate and distinguishable only in the lineage; two recommenders that share atoms but differ in objective are isomers under Fig 12 with a stated falsifier; and the objective is link three of Fig 3's dependency chain, which is where the break lies when the metric is frame-internal.

This framing keeps what is checkable without importing a new primitive or claiming a magnitude. It does not rescue "engagement equals trust"; that binding remains unproven. It turns "different objectives make different systems" into a testable isomer claim with a failure condition.

## ANCHOR

Verbatim figure text extracted from `FRAMEWORK/reference/03-FIGURES_TEXT.md` this session. No system measurement was used. The essays How Intelligence Actually Works (2026-09-16) and They're Scanning Books (2026-09-06) were read as structure-only corroboration and are framework-authored, so their agreement is high overlap, not an independent witness.

## FIGURE CENSUS

Fig 3 (dependency order, the objective link), Fig 4 (head start versus replay), Fig 5 (preference as an unbound term, refusal before mint), Fig 6 (closure and the price of import), Fig 11 (habitat, introduced actors), Fig 12 (priced bond, ordered bond, cycle, catalyst, isomer, functional group), Fig 13 (spectrum as ordering), Operators table (symmetry and comparison), Fig 2 (anchor must not update). Strains after re-census: none hidden. The one live strain, "diversity is good" versus Fig 6 :24's price on import, is carried in `01_figure_grounded_audit.md` §6 and is not dissolved here.
