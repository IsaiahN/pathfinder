# Isomers, controller order and loop sign in the job guarantee question

**Mode: `specified`.** Simulated derivation checked against the figures, not a ground reading (see `05_what_shape_means.md` §7).

## RESIDUAL

The separator in `01` says the JG-versus-benefits choice is a bond choice, and that the buffer loop's sign is a ground question. Two derivations are owed: (1) are the two instruments and the two inflation anchors isomers over a fixed atom set, and (2) what is the order of the controller and what decides whether its cycle closes.

## DOMAIN CENSUS

Atoms held for the fiscal comparison: public funds, household income, work requirement, wage floor, employment status. Bonds held: the seven, including production (⇒), sequence (→), comparison (⋛), subtraction (−) and negation (¬). No new primitive is available without import.

| object | atoms | bond | status |
|---|---|---|---|
| Job guarantee | public funds, household income, work requirement, wage floor | wage-for-work (production plus comparison) | admitted |
| Unemployment benefit | public funds, household income, work requirement (absent) | unconditional transfer (subtraction of work requirement) | admitted |
| NAIBER | employed buffer, wage floor, price stability | buffer employment ratio as threshold | admitted |
| NAIRU | unemployed buffer, wage demands, price stability | unemployment rate as threshold | admitted |

## DERIVATION

### Q1 Does "shape, not a name" forbid naming the wage rule? CORRECTION TO MY OWN §3 of `05`

- The README phrase is *"what a missing thing would have to look like (a shape, not a name)"*. The subject is a missing primitive, one not held in Γ.
- The wage floor and the buffer rule are **already held** bindings from the policy frame onto the employment and price slots. Fig 1 :19 and Fig 2 :29 give the slots; the wage floor is a policy parameter, not a new kind.
- ⇒ Naming them is **provenance**, not an invented primitive and not a wall-moving import. Fig 6 :21 "MINT composes inside the closure and can never add an atom."
- What is genuinely missing is a source-discriminating instrument plus a regime-valid tuning rule (Fig 6 :32, Fig 9 :32). That remains a `gap`.
- **I overstated this earlier.** Retracted as applied to the wage and buffer; the gap is retained. Triangulated (README + Fig 1 + Fig 6).

### Q2 Are JG and unemployment benefits isomers?

Fig 12 :117 "isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."
Fig 12 :94 "The arrangement is the substance."
Fig 12 :46 "A bond is the typed relation between two operands. There are seven, they are not interchangeable, and which one holds is not recoverable from the operands."

- Over the shared fiscal atom set `{public funds, household income, work requirement, wage floor, employment status}`, both programmes use the same atoms.
- The bonds differ. JG composes funds → income through a work requirement and compares the wage against a floor: `funds ⇒ income` with `wage ⋛ floor`. Unemployment benefit composes funds → income with the work requirement subtracted: `funds ⇒ income − work`.
- Same atoms, different bond, different substance. By Fig 12 :117 they are **isomers**, not points on one spending continuum.
- Behavioural consequence named by the world sources: Sawyer's criticisms concern substitution of regular public jobs and downward pressure on comparable wages, which are bond effects, not amount effects. Mitchell's insistence that "The JG is, categorically, not a more elaborate form of Workfare" is also a bond claim.
- **Falsifier, written before the run:** if both programmes are found to have identical effects on wage demands, job search intensity and public-sector staffing at equal spend, the isomer claim fails and the degree reading stands. Also falsified if either programme requires an atom the other does not (for example a wage floor that only one can use).

### Q3 Are NAIBER and NAIRU isomers too?

Fig 12 :123 "functional group. A substructure whose presence fixes the outcome. The group says what kind; the qualifier says which member."

- Both are thresholds (Operators table :51 "a goal is a comparison, which is why a vocabulary without it cannot state one").
- NAIRU uses an **unemployed** buffer to discipline wage demands. NAIBER uses an **employed** buffer at a fixed wage. Same functional group (a buffer stock that disciplines wage demands), different member (which status is buffered).
- So they are a **functional group**, and over the atom set `{buffer stock, wage demands, price stability}` they are isomers: the atom "buffer" is present in both, the bond to employment status differs.
- The Wikipedia NAIRU article records that the NAIRU "is inferred from levels of inflation and unemployment and the relationship between those variables is acknowledged to vary over time", and that some economists "have questioned whether there is any real empirical evidence for it at all". Mitchell's account says his NAIBER "is a full employment steady state JG level, which is dependent on a range of factors including the path of the economy." The disagreement about which buffer to use is a bond disagreement, which is why it does not reduce to a single slider.
- **Falsifier:** if it is shown that employed and unemployed buffers produce the same wage-demand discipline at the same ratio, the isomer/functional-group distinction collapses and the two are one instrument with a label difference.

### Q4 What order is the controller, and what does the cycle need?

Fig 12 :112 "A plan is a sequence. A goal is a comparison. Progress is a subtraction."
Fig 12 :121 "cycle. The output re-enters as input. The sign of the loop decides whether it closes, and a chain cannot close by construction."
Fig 12 :111 "A vocabulary without bonds can name a state and cannot name a route to one."

- The controller order is: read the employment and price slots (perception) → have terms for what the buffer affords (vocabulary) → state the target as a comparison (objective) → set the buffer rule (planning) → carry the verified result (Fig 3 :20, Fig 12 :112).
- A chain cannot close. The JG wage bill re-enters as demand, so a cycle is required, not a chain: `wage bill → demand → employment → wage bill`.
- The sign of that cycle is not given by the nominal wage. The engineering witness says tuning constants "must be derived for each control application, as they depend on the response characteristics of the physical system, external to the controller", and that the algorithm "does not guarantee optimal control of the system or its control stability." The policy witness says the design hires "off the bottom" to avoid competing for resources, while Sawyer's constraint is that "the programme would require productive capacity in the right quantities and places". Both are statements about where the sign comes from: the ground of real capacity.
- **Falsifier:** a controlled demonstration that the loop sign is fixed by the nominal wage alone regardless of spare capacity, in either direction. If that holds, the resource slot collapses into D2 and the union must be re-censused.

### Q5 What is the round trip from shape to policy number?

Fig 4 :30 "So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked."

1. **Sent up (x):** the figure set, chiefly Fig 1 :19 (per slot), Fig 2 :33 (anchor must not update), Fig 11 :61 (introduction not exclusion), Fig 12 :117 (isomer), Fig 12 :121 (cycle).
2. **Abstraction (T_A):** the separator: two slots, external anchor, habitat introduction, bond choice, ground-decided sign, gap on tuning.
3. **Concretisation (T_E):** an actual policy with a named wage, a named buffer ratio, a named programme size and a named inflation target.

**R_T is nonzero.** At least three things the separator holds do not survive the trip back down: the source-discriminating instrument that would name which buffer produced a reading; the regime-valid tuning rule; and the non-updating status of the price anchor once a government has an electoral interest in the number. The round trip is not measured numerically because no policy ground reading was taken here. It is recorded qualitatively as the enumerated set of dropped constraints. Treating the shape as if it were the policy number would set R_T to zero and would be the dead-reckoning error Fig 4 :30 names.

## CONCLUSION

JG and unemployment benefits are isomers over a fixed fiscal atom set, and NAIBER and NAIRU are a functional group whose members are isomers over a buffer atom set. The controller is an ordered sequence whose objective is a comparison and whose closing structure is a cycle, not a chain. The cycle's sign is decided at the resource ground, not by the declared wage. What survives is the type distinction and the order; what does not survive the round trip is any numerical policy prescription. Both isomer claims carry falsifiers written before the run.

## ANCHOR

Verbatim figure text from `FRAMEWORK/reference/03-FIGURES_TEXT.md`; the opened world pages recorded in `10_source_ledger.csv`; the eight essays as mapped in `05_what_shape_means.md`. No employment or price measurement was used.

## FIGURE CENSUS

Fig 1 (per slot), Fig 2 (anchor), Fig 3 (dependency order), Fig 4 (round trip), Fig 6 (what import adds, instrument improvement), Fig 9 (shape, split, filters), Fig 11 (valence, habitat), Fig 12 (bond, isomer, functional group, sequence, cycle, two currencies), Fig 13 (set closed, arrangements not), Operators table (comparison and negation). Strained after re-census: the functional-group reading of NAIBER versus NAIRU is `single-source` on the figure definition (Fig 12 :123) with the economic identification still unmeasured; named, not hidden.
