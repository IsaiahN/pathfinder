# Figure-grounded audit: how financial institutions distribute risk, credit and economic power

**Mode of this document: `general` on structural shape, `specified` on the institutional mapping, not `grounded`.** Per `THE_FORMULA.md`: "Mode. general · specified · grounded. State which. Accepted means the ground settled it; otherwise candidate."

**Status of this derivation: a simulation, not a ground reading.** *The Recursive Self-Improvement Trap* (Isaiah N, Adventures in Machine Learning, 2026-11-19): "the truly testable output would need to be derived from the real architecture or working the formula yourself." This document is a simulated derivation checked for internal consistency against the figures. It cannot settle the question it reports on. See `05_what_shape_means.md` section 6.

**Sources.** Figure text quoted verbatim from `FRAMEWORK/reference/03-FIGURES_TEXT.md` (cited `Fig N :line`). Loop and mode rule from `FRAMEWORK/figures/THE_FORMULA.md`. Canonical usage from `FRAMEWORK/reference/FIGURES_README_canonical.md`. World sources opened 2026-11-23 and listed in `10_source_ledger.csv`.

---

## 0. The residual, in effect terms

The question asks how financial institutions distribute three quantities across society. The naive model is the neutral pipe: banks take deposits from savers and lend them to borrowers, so the pattern of who gets credit and who bears loss should mirror the pattern of prior saving. The observed pattern does not. Lending creates the deposit (McLeay, Radia and Thomas, Bank of England, 2014). Losses do not stop at the direct counterparty; they cascade through interlinkages (systemic risk literature). The capacity to set terms concentrates (financialization and redlining literatures).

State the residual as an effect, not a cause:

> R = the gap between what the neutral-pipe prediction puts in each social slot and what is actually observed in that slot, indexed per household, firm, neighbourhood and nation.

- **Arity.** Three quantities (risk, credit, economic power) with three different currencies. This is not one residual. Fig 9 :55 "A bundled problem is usually a union of overlapping conditions, not a list of separate ones." The three must be unbundled before searching.
- **Symmetry.** All three allocate asymmetrically: creditor versus debtor, seller versus bearer of risk, setter versus taker of terms. The bonds that carry them are ordered (→), productive (⇒) and comparative (⋛), not the symmetric conjunction (+). Operators table :11 "both hold at once" (the symmetric case) does not describe a transfer from one party to another.
- **Scale.** A single loan contract (micro) and a system-wide distribution (macro) are separated by a lossy membrane. Fig 4 :20 "it or a thousand. Only the actors, the currency and the anchor change."

Directing the question: Fig 9 :27 "describe it before you go looking, or any frame you pick will seem to fit." The residual is described in effect terms above, before any frame (banking, economics, finance) is selected.

---

## 1. Domain census (before choosing any figure line)

One line per domain: actors, currency, anchor. A domain with no nameable anchor is not a domain yet.

| domain | actors | currency | anchor | status |
|---|---|---|---|---|
| D1 Credit creation and allocation | commercial banks, borrowers, depositors, central bank | credit and debt, a claim on future repayment | the balance sheet and the repayment record, a counter or market (Fig 2 :29) | admitted |
| D2 Risk transfer and concentration | banks, insurers, investors, rating agencies, taxpayers | risk as probability times loss | defaults, realised losses, bailout payments, market prices (Fig 2 :29) | admitted |
| D3 Economic power and concentration | financial institutions, regulators, households, firms | capacity to set or refuse terms | measurable concentrations: market share, lending by neighbourhood, wealth holdings, political contributions | admitted, anchor is proxied and weaker |
| D4 Verification and outreach | expert readers, this derivation | residual versus agreement | the ground, never agreement | admitted, independence zero in a simulated run |
| X1 "Power as a free-floating property of an institution" | the institution | influence | none nameable apart from its effects | not a domain yet, absorbed into D3 relations |

**Partition or union.** Union, not partition. D1, D2 and D3 overlap: a credit decision is also a risk placement and a power act. Fig 9 :57 "What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either." A single lever (for example, more disclosure) clears the region where only one condition holds and leaves the compounds standing. They get separate loops.

**Dependency order.** D1 (credit must exist before anything can attach to it) then D2 (risk attaches to created credit) then D3 (power accumulates from control of credit and risk). Fig 3 :20 "The chain is ordered by dependency, not by importance." Fig 3 :27 "A link with no instrument is not a link that works. It is a link nobody has looked at." The middle link here is the bond between a created claim and the social slot it lands in; it is the least instrumented of the three.

**Strain check applied during census.** My first reading assigned Fig 11 :61 "The seat's power is asymmetric. Introduction is available; exclusion is not" to D1 and D3, and it appeared to conflict with redlining, where denial of credit is plainly available. Re-census: Fig 11 :61-62 governs the habitat (you can add an actor, you cannot subtract contact with the world), not access to a ledger product. Withholding a loan is not removing the habitat. The credit-access phenomenon is governed by Fig 11 :49 (valence relative to the residual) and Fig 10 :47 (a convention that decides an outcome). The apparent conflict was a domain error, not a figure conflict. Recorded in the retraction log below.

---

## 2. Figure census (quoted verbatim before concluding)

| figure verbatim line | bearing | domains |
|---|---|---|
| Fig 1 :19 "The residual is indexed by object slot, not aggregated." | distribution is per slot | D1 D2 D3 |
| Fig 1 :22 "Aggregating across slots is how a live signal disappears into an average." | aggregate risk and wealth metrics hide live slots | D2 D3 |
| Fig 2 :29 "An anchor is whatever settles the question and does not change its answer because of what any frame thinks. A measurement, an experiment, a counter, a market, a patient outcome." | what can count as the ground | D1 D2 D4 |
| Fig 2 :35 "Alignment is triangulation, not negotiation. A mirror cannot correct you." | agreement among institutions is not evidence | D4 |
| Fig 2 :42 "Buy independence in proportion to the cost of being wrong." | source design for the verification frame | D4 |
| Fig 4 :20 "it or a thousand. Only the actors, the currency and the anchor change." | micro to macro transfer | D1 D3 |
| Fig 6 :21 "MINT composes inside the closure and can never add an atom." | credit instruments are arrangements, not new primitives | D1 |
| Fig 6 :23 "No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs." | regulatory capture as closure contact | D3 |
| Fig 7 :13 "agreement compounds, evidence does not" | repeated ratings and models do not add evidence | D2 D4 |
| Fig 8 :32 "Closure is idempotent. Composing inside a closed set never leaves it, so no search, however long, adds an atom. This one is definitional: it is what closure means." | unbounded derivatives add no primitive | D1 |
| Fig 8 :39 "So a search that finds nothing is never a proof of absence." | honest stop | all |
| Fig 9 :32 "you get a kind of thing, never the answer itself" | shape, not a specific policy | all |
| Fig 9 :55 "A bundled problem is usually a union of overlapping conditions, not a list of separate ones." | unbundling the three quantities | all |
| Fig 10 :24 "the ground does not decay, the channel does" | ratings and scores are channels, not ground | D2 |
| Fig 10 :26 "stale percepts, dropped transients, saturated metrics, pooled readings" | failure modes of systemic-risk metrics | D2 |
| Fig 10 :47 "a convention that decides an outcome has stopped being one" | a score used to decide allocation stops being a measure | D2 D3 |
| Fig 10 :93 "A ground with a reputation to protect is a ground someone benefits from, and its keeper is thereby disqualified." | issuer-pays rating agencies | D2 |
| Fig 11 :49 "An actor's valence is relative to the residual, not a property it carries." | a bank is benefactor to one residual, malfactor to another | D1 D3 |
| Fig 11 :52 "And contact cascades. Scoping the habitat to direct contact is how DDT reached the eagles: first-order enumeration, second-order effect, and the residual that mattered was three steps out." | systemic loss reaches third-order slots | D2 |
| Fig 12 :104 "A settled molecule becomes an atom for whatever composes over it. So irreducible is a fact about a level and never about the world, and there is no bottom" | settled claims become operands for claims about claims | D1 D2 |
| Fig 12 :117 "isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour." | same underlying loans, different tranching | D1 D2 |
| Fig 13 :115 "The set is closed. The arrangements are not. That gap is why import exists." | the generator of financial claims is closed, its arrangements are not | D1 |
| Fig 13 :118 "still not arrive: infinite effort inside a finite reach." | more instruments do not add a primitive | D1 D2 |
| Fig 13 :135 "So the system can report that it lacks something rather than producing an answer anyway. Unreachable is a verdict here, not a silence," | honest verdict field | all |

No figure line was accepted on a strain. The one apparent strain (Fig 11 :61) was sent back to census and resolved as recorded in section 1.

---

## 3. Findings F1 to F9, with refuters

### F1. The question is a union to be unbundled, not one hard question (governs all domains)

Fig 9 :55 and Fig 9 :57, quoted above. The three quantities have different currencies and different anchors. A reform that changes who gets credit (D1) need not change who bears the final loss (D2) or who sets terms (D3). The union is overlapping, so Fig 9's instruction "unbundle before you search again" applies. Verdict mode `general` for the unbundling rule, `specified` for its application to these three quantities. Triangulated across Fig 9 (union split) and the three separate world literatures (money creation, systemic risk, financialization), which have low overlap with each other.

**Refuter:** if one instrument moved all three allocations together, with no categorically different residue after the lever, the union claim fails and a single loop is the right shape.

### F2. Credit is a minted arrangement, not an import that moves the wall (D1)

Fig 6 :21 "MINT composes inside the closure and can never add an atom." Fig 8 :32 "Closure is idempotent. Composing inside a closed set never leaves it, so no search, however long, adds an atom. This one is definitional: it is what closure means." Fig 13 :115 "The set is closed. The arrangements are not. That gap is why import exists."

The bank's library holds primitive claims (a promise to pay, a dated repayment, a collateral relation). A loan composes them. When the loan is made, the deposit appears; this is a composition inside the closure, not the arrival of a new primitive from outside. The world source (Bank of England, 2014) reports exactly this: "the majority of money in the modern economy is created by commercial banks making loans" and "banks do not act simply as intermediaries, lending out deposits that savers place with them." A derivative, a securitisation or a credit default swap is a further arrangement over the same claims. Fig 13 :118 "still not arrive: infinite effort inside a finite reach."

Mode `general` for closure idempotence, `specified` for the banking binding. Triangulated across Fig 6 and Fig 13, two figures with distinct roles (operator limit versus generator structure) and low overlap. The Bank of England page corroborates the institutional fact; it does not derive the figure claim.

**Refuter:** if a financial instrument required a genuinely new primitive not recomposable from held claims, Fig 13 :115 breaks for this domain and the arrangement claim fails.

### F3. Distribution is per slot; the average is where the live signal dies (D1, D2, D3)

Fig 1 :19 "The residual is indexed by object slot, not aggregated." Fig 1 :22 "Aggregating across slots is how a live signal disappears into an average." Fig 10 :26 "stale percepts, dropped transients, saturated metrics, pooled readings."

"Across society" is a set of slots, not a scalar. A system-wide VaR or an aggregate credit-growth figure is a pooled reading. The world sources corroborate from low-overlap fields: the systemic risk article notes that SRISK "can be easily aggregated across firms to provide industry and even country specific aggregates" and reports Jon Danielsson's criticism that measured systemic risk does not correspond to actual systemic risk because financial crises happen roughly once in 43 years. Statistics provides a clean analogue: Simpson's paradox is "a trend appears in several groups of data but disappears or reverses when the groups are combined." Redlining supplies the per-slot fact: "For every $100 in white family wealth, black families hold just $5.04."

Mode `general` for the indexing rule, `specified` for the finance application. Triangulated across Fig 1 (measurement indexing) and Simpson's paradox (statistics), genuinely low overlap; and across Fig 1 and the redlining record, low overlap.

**Refuter:** if the distribution of credit, risk or power were fully captured by one aggregate statistic with no live per-slot residual, Fig 1 :19-22 breaks and this finding is withdrawn.

### F4. Risk reaches third-order slots; first-order scoping is the failure mode (D2)

Fig 11 :52 "And contact cascades. Scoping the habitat to direct contact is how DDT reached the eagles: first-order enumeration, second-order effect, and the residual that mattered was three steps out."

A loan is made to a borrower; the claim is pooled; the pool is tranched; a pension fund holds a tranche; a household's retirement depends on it. The loss that matters lands three steps out from the lending decision. The systemic risk article describes the same structure in its own field: "the failure of a single entity or cluster of entities can cause a cascading failure, which could potentially bankrupt or bring down the entire system or market," and reports that beyond a tipping point "interconnections might serve as a shock-amplifier." Fig 12 :104 "A settled molecule becomes an atom for whatever composes over it. So irreducible is a fact about a level and never about the world, and there is no bottom" explains why the tranche can be settled and then composed over again.

Mode `specified`. Triangulated across Fig 11 (ecological cascade, DDT) and the finance network literature (cascading failure), low overlap between ecology and financial network science. The financial crisis record is a single historical pool, not two witnesses.

**Refuter:** if losses demonstrably stop at first-order direct counterparties with no cascade into third-order slots, the cascade finding fails.

### F5. When the score becomes the decision, it stops being a measure (D2, D3)

Fig 10 :47 "a convention that decides an outcome has stopped being one." Fig 10 :24 "the ground does not decay, the channel does." Fig 10 :93 "A ground with a reputation to protect is a ground someone benefits from, and its keeper is thereby disqualified." Fig 2 :29 "An anchor is whatever settles the question and does not change its answer because of what any frame thinks. A measurement, an experiment, a counter, a market, a patient outcome."

A credit rating or score begins as a reading of creditworthiness. When regulation makes it the threshold for what a bank may hold, and when the rated party pays the rater, it is a convention deciding an outcome and a keeper with a reputation to protect. The world sources corroborate from two independent pools: the credit rating agency article reports that "the paying customers of CRAs have primarily not been buyers of securities but their issuers, raising the issue of conflict of interest" and that the Big Three control approximately 94 percent of the business; Goodhart's law states "When a measure becomes a target, it ceases to be a good measure," with the financial-risk corollary "A risk model breaks down when used for regulatory purposes."

Mode `specified`. Triangulated across Fig 10, Fig 2, the rating-agency institutional record and Goodhart's law (economics of regulation). The Goodhart and rating-agency sources share a broad economics pool, so they count as one witness for the mechanism, not two.

**Refuter:** if a rating agency changed its opinion under commercial pressure and no allocation changed anywhere, the "disqualified keeper" claim fails at the ground. Equally, if the measure kept its discriminating power after being made a regulatory threshold, Goodhart's law and Fig 10 :47 would both be contradicted here.

### F6. Power accumulates through contact with a differing closure, not by improving an isolated agent (D3)

Fig 6 :23 "No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs." Fig 11 :49 "An actor's valence is relative to the residual, not a property it carries." Fig 4 :25 "A recording carried upward looks like knowledge and is a description of one occasion."

The financialization record corroborates: the Pujo Committee found in 1912 that "control of credit in America was concentrated in the hands of a small group of Wall Street firms that were using their positions to accumulate vast economic power"; Marie Gottschalk (2025) writes that financialization "facilitated an astounding upward redistribution of wealth and political power." The mechanism named in the same source, regulatory capture through campaign contributions, lobbying and a revolving door, is contact between the regulator's closure and the industry's closure. A bank's valence is not fixed: the same lender is a benefactor to the borrower who receives credit and a malfactor to the neighbourhood starved of it.

Mode `specified`. Triangulated across Fig 6 and Fig 11 (distinct roles) and the financialization and redlining records (distinct historical pools). The historical sources are descriptive, not a derivation of the figure claim.

**Refuter:** if a financial institution's standing to set terms grew with no change in its contact with any other closure (no lending relation, no regulatory contact, no dependency), the closure claim fails.

### F7. Settled claims become operands, so the same atoms yield different substances (D1, D2)

Fig 12 :117 "isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour." Fig 12 :124 "functional group. A substructure whose presence fixes the outcome. The group says what kind; the qualifier says which member." Fig 12 :104 quoted above.

A pool of mortgages held to maturity and the same pool sliced into senior and junior tranches share every underlying atom. They are not variants of one thing; they are different substances whose behaviour under default differs. That is an isomer claim, not an analogy. The three quantities under study share a functional group: each is a per-slot allocation over a created claim (Fig 12 :124, the group says what kind, the qualifier says which member). Worked out in `06_isomers_and_order.md`.

Mode `general` for the bond definition, `specified` for the finance binding. Triangulated across Fig 12 (bond structure) and Fig 13 (recursive composition), with the chemical isomer case cited inside Fig 12 itself as the precedent, not as an outside witness.

**Refuter:** if tranching an identical pool changed no allocation of loss and no behaviour, the isomer claim fails and the functional-group reading stands instead.

### F8. Naming a policy is not deriving an answer (all domains)

Fig 9 :32 "you get a kind of thing, never the answer itself." Fig 13 :135 "So the system can report that it lacks something rather than producing an answer anyway. Unreachable is a verdict here, not a silence,"

The canonical usage rule in `FRAMEWORK/reference/FIGURES_README_canonical.md` says the framework returns "what a missing thing would have to look like (a shape, not a name)." What survives here is a shape: per-slot allocation, cascading contact, a ground that does not update, a closed generator with unbounded arrangements, and a disqualified keeper wherever a score decides an outcome. Which named policy produced a given distribution is a binding from the world frame with its own provenance; it is not produced by the figures.

**Refuter:** if a figure line were found that names a specific institutional arrangement as the unique output of the generator, this finding would be withdrawn. None was found after re-census.

### F9. What is owed when no line closes the empirical distribution (all domains)

Fig 8 :39 "So a search that finds nothing is never a proof of absence." Fig 3 :27 "A link with no instrument is not a link that works. It is a link nobody has looked at." Fig 13 :135 quoted above.

After the census, no figure line yields the numerical distribution of credit, loss or power across actual households, nor a normative ranking of that distribution. That is a declared `gap`, not a hidden answer. The missing thing can be characterised in effect terms: an instrument that resolves, per slot and per step of the cascade, who received a claim, who bore the loss and who could set the terms, without that instrument updating when the measured institution pushes on it. The public datasets in `03_public_contact_points.csv` (HMDA, CRA, bank balance sheets) are candidate ground instruments; they are not themselves the ground until they are shown not to move with the measured party.

Mode `general` for the gap verdict, `specified` for the characterisation of the missing instrument.

**Refuter:** if a figure line is shown to determine the actual per-slot numbers, this gap finding is withdrawn.

---

## 4. Pre-registered refuter (written before the conclusion)

Required before the conclusion: "a falsifier written before the run is a design instrument." The shape claim is refuted for the relevant domain if any of the following holds:

1. The distribution of credit, risk or power is fully captured by a single aggregate statistic with no live per-slot residual (breaks Fig 1 :19-22).
2. Losses stop at first-order direct counterparties with no cascade into third-order slots (breaks Fig 11 :52-53).
3. A rating or score keeps its discriminating power after being made the regulatory threshold and the decision to change it is unaffected by commercial pressure (breaks Fig 10 :47 and Fig 10 :93).
4. A financial instrument requires a genuinely new primitive not recomposable from held claims (breaks Fig 13 :115 and Fig 6 :21).
5. Standing to set terms grows with no change in contact with any differing closure (breaks Fig 6 :23).
6. Tranching an identical pool changes no allocation of loss (breaks Fig 12 :117).

If any fires, the corresponding domain finding is withdrawn and the union is re-censused. Until one is run, nothing here is labelled `grounded`.

---

## 5. Recommendation

1. Send the shape and the refuter first, not a policy conclusion (F8, Fig 10 :52 "Bring a characterised residual, never the source.").
2. Keep the three domains separate; do not let a disclosure lever stand in for the compound (F1).
3. Ask the checker to name the instrument that would resolve the per-slot, per-step allocation, and whether it updates under pressure (F3, F5, F9).
4. Use the public institutional venues in `03_public_contact_points.csv`, one to one, and never pool later agreement as corroboration (Fig 2 :35, Fig 2 :42).
5. Report the gap as a verdict, not a silence (F9).

---

## 6. Canonical usage check

Two local framework files govern how the figures may be used, read after the first four sections of this audit.

- `FRAMEWORK/reference/FIGURES_README_canonical.md`: the figures "outrank everything else in the repo: the code, the rulings and the docs answer to them... the quotes are the authority, not this summary." A reading that makes two figures contradict one another has misidentified its domain. The framework reports "what a missing thing would have to look like (a shape, not a name)" and stops at "the limit of what the available instruments can distinguish."
- `FRAMEWORK/figures/THE_FORMULA.md`: the mode rule, the three distinct questions of step 7 (SEARCHED, INWARD, OUTWARD), and the warning that underivable-in-principle and unreachable-at-this-budget are different facts with different instructions.

Applied here: the empirical distribution is not underivable in principle, so OUTWARD import of a new primitive is the wrong remedy. It is unreached at this budget and with these instruments, so SEARCHED (use existing records better), then INWARD (sharpen per-slot instruments), are the orders of business. Importing a new theoretical primitive against a budget limit would add an atom that was not needed.

### Retraction and confirmation log

| earlier reading | status after the canonical check |
|---|---|
| Fig 11 :61 "exclusion is not" appeared to conflict with credit denial | **Retracted and re-censused.** The line governs the habitat (contact cannot be subtracted), not access to a ledger product. Credit access is governed by Fig 11 :49 and Fig 10 :47. No figure strain remains. |
| The three quantities were first treated as one residual with three labels | **Retracted.** Fig 9 :55 makes it a union of overlapping conditions with its own loops. F1 now governs. |
| "Banks create money" was first read as an import moving the wall | **Retracted.** Fig 6 :21 and Fig 13 :115 make it a mint inside closure, adding no primitive. F2 now governs. |
| The word "distribution" first suggested an aggregate statistic | **Retracted.** Fig 1 :19-22 index R per slot; aggregates erase the live signal. F3 now governs. |
| Naming deregulation or financialization as "the answer" | **Refused, not merely unsupported.** Fig 9 :32 and the canonical usage rule return a shape, not a name. |
| F8 (shape not a name) | **Canonically confirmed** by the figures README phrase "a shape, not a name." |
| F9 (gap as verdict) | **Canonically confirmed.** Fig 13 :135 "Unreachable is a verdict here, not a silence," and Fig 8 :39 "So a search that finds nothing is never a proof of absence." |
| Fig 10 :93 versus rating agency issuer-pays record | **Not strained.** The figure governs disqualification of a keeper with a stake; the record supplies an instance. Agreement from one historical pool is one witness. |

### Step 7 questions, kept distinct

- **SEARCHED:** are existing per-slot records (HMDA, CRA, bank balance sheets, rating histories) already sufficient to resolve who received, who lost and who set terms? Not yet run. The 20-minute check in `08_expert_verification_packet.md` is the first pass.
- **INWARD:** what sharper instrument would resolve the second- and third-order cascade and keep its reading stable under commercial pressure? Characterised in F9, not built.
- **OUTWARD:** is there a frame whose closure already predicts this shape? Candidates are systemic risk network models and ecological cascade theory; both are corroborating, neither is imported as a new primitive, and importing one against a budget limit would be the dead-reckoning error Fig 4 :30 names.

### Updated verdict

The shape survives across all three domains and is kept separate: credit is a minted arrangement over a closed generator; risk reaches third-order slots through cascading contact; power accumulates through closure contact and a keeper with a stake is disqualified as a ground. The specific numerical distribution and any normative ranking are a declared gap. Strains after re-census: none hidden, one historical reading retracted and one domain error corrected, both recorded above. Mode `general` on the shape, `specified` on the institutional mapping, nothing `grounded`.
