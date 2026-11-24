# Expert verification packet: the Tether on causal explanation versus correlation

**What this is:** a claim in a form a statistician, causal-inference researcher or philosopher of science can check. Mode, derivation and refuters are stated before the conclusion, so a reader knows what to look for and what would settle it.

**Mode: `specified` on the verdict, `general` on the operator shape. Not `grounded`.** No intervention was run for this derivation. It is a shape and a route, not a result.

**Status:** a simulated derivation checked for internal consistency against the figures, not a ground reading. It cannot settle the claim it reports on.

## 1. The claim, in one paragraph

A causal explanation is more informative than a predictive correlation in three defined ways and not in a fourth. It carries a typed, ordered bond where the correlation has symmetric co-occurrence; it is a generator that supports intervention and transfer rather than a recording of one occasion; and it ranges against an anchor, an intervention outcome or a source-discriminating instrument, rather than against fit inside one evidence pool. Because the bond is the information the operands do not carry, two causal readings over the same observations are isomers: identical in the flat formula and decisive under intervention. The fourth way is excluded by the figures themselves: inside a fixed context, correlation is efficient for prediction and convention, and description bits and intervention actions are two currencies that do not add. Therefore "more informative" is domain-scoped, not a scalar victory. A causal label with no discriminating instrument behind it is an unpaid bond, not extra information.

## 2. Three checkable sub-claims

### C1 - framework-internal; checkable by reading Figures 12 and 1

- **Statement:** the operator difference is symmetric versus ordered. A correlation is recorded as conjunction (both hold); a causal explanation is recorded as sequence or production. Fit is a frame-internal magnitude and cannot certify the claim.
- **Source, verbatim:** Fig 12 :59 "swap the operands. Does the meaning change? No." (symmetric) and Fig 12 :74 "swap them. Does it become a different thing? Yes." (ordered). Fig 12 :46-47 "A bond is the typed relation between two operands. There are seven, they are not interchangeable, and which one holds is not recoverable from the operands. A recipe that names only its ingredients has recorded half of itself." Fig 1 :27 "They are frame-internal. A frame cannot score itself with a quantity it also produces."
- **Refuter:** show that a symmetric co-occurrence relation determines `P(Y | do(X))` for all interventions of interest with no extra assumptions, or that held-out accuracy with no intervention settles which of two causal structures is true.

### C2 - cross-frame; checkable by a statistician or causal-inference researcher

- **Statement:** competing causal readings that produce the same correlation are isomers under the figure's definition, differing in bond arrangement and in behaviour under intervention. The framework's claim is a shape, not a name: it does not pick the correct model.
- **What to check:** do the structural-equation formulations of confounding, reverse causation and direct production agree on observed correlations while disagreeing on `do(X)`? Is the do-operator a genuinely different conditioning operator from Bayes conditioning? SEP *Causal Models* section 4.7 and Pearl (1995) state exactly this; Kinney (2023) formalizes explanatory power using `Pr(e | do(c)) - Pr(e)`.
- **Source, verbatim:** Fig 12 :117 "isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour." Fig 9 :32 "you get a kind of thing, never the answer itself."
- **Refuter:** exhibit two competing readings with the same correlation that also agree on every intervention that can be run, or show one reading requires an atom the other cannot express (which breaks "same atoms").

### C3 - framework-internal derivation about the ground and the currencies

- **Statement:** the extra information is real only when the causal bond is settled at a ground that does not update on the frame; correlation has a legitimate convention role; and the two currencies do not add.
- **Source, verbatim:** Fig 2 :29 "An anchor is whatever settles the question and does not change its answer because of what any frame thinks. A measurement, an experiment, a counter, a market, a patient outcome." Fig 2 :41 "efficient for a convention: agreement about a shared meaning is the product, not a corruption of it." Fig 12 :125 "A composition costs in two currencies, and they do not add." Fig 12 :126 "Bits price the description. Actions price finding out whether it holds."
- **Refuter:** show a case where agreement among readers sharing one evidence pool settles a causal verdict with no intervention; or exhibit a single currency in which bond cost and intervention cost add without loss and reproduce the ranking; or show a causal label that discriminates sources with no instrument and no recorded ground reading.

## 3. What is explicitly not claimed

- Not that causation always beats correlation. Correlation is efficient for convention (Fig 2 :41).
- Not that more informative means more mutual information, higher fit or lower description length alone (Fig 1 :27; Fig 12 :125-126).
- Not that any labelled causal story is informative. Without source discrimination the label is unpaid (Fig 8 :51-52).
- Not which causal model is right for a given X and Y. The framework returns a shape, not a name (Fig 9 :32).
- Not that a room of experts can settle it. Fig 2 :35 "Alignment is triangulation, not negotiation. A mirror cannot correct you."
- Not grounded. No intervention, instrument or measurement was used in this derivation.

## 4. Provenance

- Derivation: `01_figure_grounded_audit.md`, `06_isomers_and_order.md`, `07_the_tether_answer.md`, compiled 2026-11-23.
- Figure text extracted verbatim from Isaiah's 13 SVGs plus the Operators and Symbols tables: local `FRAMEWORK/reference/03-FIGURES_TEXT.md`. Cited as `Fig N :line` against the SVG line numbers printed there.
- Canonical usage rule: local `FRAMEWORK/reference/FIGURES_README_canonical.md` and `60_FIGURES_AS_METALAWS.md`.
- Eight essays by Isaiah N, 2026-08-19 to 2026-11-19, opened 2026-11-23 and listed in `05_what_shape_means.md`.
- World sources actually opened, 2026-11-23: SEP *Causal Models*, SEP *Causal Approaches to Scientific Explanation*, SEP *Causation and Manipulability*, SEP *Causation in Physics*, Pearl (1995, PMLR), Kinney (2023, Philosophy of Science), Williamson (2013, Erkenn), Woodward (2004, OUP), Civelek/Call/Seed (2020, Frontiers in Psychology), Taylor et al. (2014, PMC abstract), Wikipedia. Full details and quotes in `10_source_ledger.csv`.
- Stake declared: this packet was written inside a project that uses the figures; by Seat Map :171 "an interest in the outcome is unavoidable, an interest in the reading is disqualifying." A reader should treat the figure reading as owned by an interested party and check it against the verbatim text.

## 5. What would settle it

1. **Intervention test:** does `P(Y | do(X))` differ from the observational conditional as the causal claim predicts, with intervention and outcome recorded?
2. **Transfer test:** in a new environment, does the causal model support a successful action where the correlation-only model fails?
3. **Source test:** is there an instrument that discriminates among the hidden structures producing the same correlation?
4. **Currency test:** is there one unit in which bond cost and intervention cost add without loss?
5. Standing refuters in §2 above. A failure is more useful than an endorsement.

## 6. What an expert can check in twenty minutes

1. Read Fig 12 :59, :74, :46-47, :117 and Fig 1 :27. Five short passages. Are the quotes exact?
2. Check C2 against your own field: do same-correlation causal readings actually disagree under `do(X)`? If not, the isomer claim is empty.
3. Name one intervention or instrument that would discriminate the sources in a case you know, or say why none is possible.
4. Try the currency test. If you can produce a scalar that reproduces the ranking, sub-claim C3 fails.
5. Send the refutation. No agreement is requested, and later agreement is never pooled as corroboration (Fig 2 :40).

**Status of this packet:** simulated derivation, internal consistency only. It cannot settle the question it reports on.
