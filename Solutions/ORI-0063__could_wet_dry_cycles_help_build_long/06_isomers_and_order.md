# Chains, sequence isomers and order of composition

**Mode: `specified` on the structural claims, `general` on the analogy, `gap` on which sequences function. Simulated derivation checked against the figures, not a ground reading (see `05_what_shape_means.md` section 6).**

## RESIDUAL

The audit in `01` left three points needing their own derivation: (1) what kind of molecule a polymer is under Fig 12, (2) what "isomer" means for sequences produced by cycling, and (3) what order the composition runs in, including which structure closes a loop and which does not.

## DOMAIN CENSUS

Atoms held: the monomer set actually present in a given experiment (for example glycine, alanine, leucine, glycolic acid). Bonds held: the types the chemistry affords (ester, amide, phosphodiester in the relevant settings). Structures held from Fig 12: isomer, catalyst, cycle, functional group. No new primitive is available without import. Different questions: D1 (one bond), D2 (loop across cycles), D4 (sequence arrangement).

## DERIVATION

### Q1 - What kind of molecule is a polymer?

Fig 12 :48: "A molecule is a bonded arrangement. A chain is the degenerate case: one bond type, no branching. Nothing about a chain is a different kind of object."

So a homopolymer such as poly-glycine is the cheapest chemical molecule there is: one bond type repeated. Fig 12 :43: "one bond type costs nothing; seven cost 2.8 bits each." A chain is not a higher kind of thing than an oligomer; it is the same kind with more bonds. This dissolves the usual framing of "how did short molecules become long polymers" into "how did more bonds of the same type get paid for".

A heteropolymer is not the degenerate case. Once the alphabet has more than one monomer, the identity of the monomer at each slot matters and the bond becomes ordered (→). Fig 12 :92: "Symmetry is what decides whether an arrangement is a new thing." Fig 12 :94: "The arrangement is the substance."

- **Falsifier:** show a chain whose monomers are not related by typed bonds, or show a bond type whose orientation is not recoverable even in principle. Then the degenerate-chain reading fails.

### Q2 - Are the products of cycling isomers?

Fig 12 :117: "isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."

Three levels of answer:

1. **Same composition, different order, different sequence isomer.** Forsythe et al. 2017 (opened, PMC5604043) report "hundreds of proto-peptide sequences were formed over a mere 4 d of reaction" and describe sequence isomers that "have identical precursor ion m/z values which are indistinguishable" by mass alone. This is Fig 12 :117 in the laboratory: the formula is the same, the behaviour can differ, and only a sequence-discriminating instrument sees the difference.
2. **Same monomers, different bond type, different substance.** Depsipeptides contain both ester and amide linkages; the ester is kinetic and hydrolysis-prone, the amide more stable. The same amino and hydroxy acids arranged with a different bond mixture are different oligomers. The laboratory source reports that sequences became progressively enriched in amide bonds over cycling.
3. **Same monomer set, different bond graph, different substance.** The laboratory source reports that malic-acid-containing products cyclised, which reduced further diversification, while linear glycolic- and lactic-acid products kept diversifying. Cyclisation and branching change which bonds are available for the next round, so they change the reachable set. Fig 12 :119: "catalyst. A part that survives its own use." A catalyst that survives its use is a different kind of part from one consumed per cycle, and nothing in a bulk yield records which it is.

So yes, cycling produces isomers in the figure's sense. But the figure's definition is stricter than "different sequences": the difference must be decisive in behaviour. Whether any particular isomer is decisive is exactly the `gap` in F5 of the audit, and it needs a function assay.

- **Falsifier, written before the run:** if sequence isomers produced under the same bulk composition show no difference in any measurable behaviour on a held-out assay, the isomer claim reduces to a naming distinction and the functional reading is withdrawn.

### Q3 - What is the cycle as a structure?

Fig 12 :121: "cycle. The output re-enters as input. The sign of the loop decides whether it closes, and a chain cannot close by construction."

A wet–dry cycle is this structure, not a chain. A chain cannot close: after a fixed number of bonds it ends. A cycle can close, and whether it closes depends on the sign. Three signed cases follow:

- **Positive:** bonds gained in the dry phase exceed bonds lost in the wet phase, and fresh monomers or differential retention keep the input different. Mean length accumulates.
- **Zero:** formation and hydrolysis balance. The system reaches a dynamic steady state with bonds forming and breaking each cycle but no net length gain. Boigenzahn et al. 2023 (opened) describe exactly this: "the overall species concentrations remain constant from cycle to cycle, but there are bonds which form and break during each cycle."
- **Negative:** hydrolysis dominates (overhydration). Campbell et al. 2019 (opened) measured 16.0% oligomer yield with regulated rehydration versus 1.9% when extra water was added each cycle. The added water "reduces yields of glycine oligomerization by increasing the duration of time the oligomers are subjected to hydrolysis and decreasing the duration of time in the cycle where condensation is favorable".

Fig 7 :36: "The next room must differ from the last, and match the residual it surfaced." A perfectly periodic, closed cycle is a mirror chain; variation in monomers, surfaces or retention is what makes the handoff progress rather than motion.

- **Falsifier:** a measured monotonic growth in mean length under a zero or negative loop sign, with mass balance verified, breaks this reading.

### Q4 - What is the order of composition?

Fig 3 :20: "The chain is ordered by dependency, not by importance." The dependency order for this question is:

1. Monomers available and bond vocabulary (perception and vocabulary links).
2. An objective: what counts as progress, length or function (the middle link).
3. Cycle design: period, hydration control, surfaces, replenishment (planning).
4. Accumulated, retained chains (learn and carry).

Fig 3 :27: "A link with no instrument is not a link that works. It is a link nobody has looked at." Step 2 is the unmeasured one. Most of the literature measures step 1 (yields) and step 3 (cycle parameters); step 4 is inferred from bulk distributions. Effort at step 3 cannot rescue a missing step 2 (Fig 3 :19).

A second ordering fact: Fig 12 :104: "A settled molecule becomes an atom for whatever composes over it. So irreducible is a fact about a level and never about the world." A chain that is retained and reused can become an operand at the next level (a template, a catalyst, a compartment component). That is recursion, not a new atom. It requires settlement, that is, the ground must pay for the chain before it can be composed over.

### Q5 - Is there a useful analogue from another field?

The closest low-overlap analogue is a **graph rewrite system with a fixed node alphabet and typed edges**. The monomer set is the node alphabet; bond types are edge types; cycling is repeated application of a rewrite rule with a reverse rate. Three things transfer:

- Rewriting a fixed alphabet can generate an unbounded number of graphs without adding a node type (Fig 13 :115: "The set is closed. The arrangements are not.").
- A rewrite loop has a net direction only if the forward and reverse rates differ; at equality it is a random walk on graph space, not growth (Fig 12 :121).
- Two graphs with the same degree sequence are not the same graph. This is the graph-theoretic version of Fig 12 :117 and it is why a bulk composition cannot identify a functional chain.

As with all analogues here, this is a corroborating shape from a different field, not a figure line. It must not be promoted to a verdict (Fig 9 :60). Its overlap with the chemistry sources is low (mathematics of rewriting versus wet-laboratory chemistry), so if it conflicted it would send us back to the census; it does not conflict.

## CONCLUSION

A polymer is the degenerate molecule of Fig 12, so the polymerisation question is a bond question. Cycling produces sequence isomers under the figure's definition, but whether any isomer is functionally decisive is a `gap` that a bulk yield cannot close. The cycle is Fig 12's signed loop, and the sign, not the existence of cycling, decides whether length accumulates. The composition is ordered by dependency, and the missing instrument sits at the objective link (length versus function). The graph-rewrite analogue corroborates the shape at low overlap and is not a witness for the chemistry.

## ANCHOR

Verbatim figure text from `FRAMEWORK/reference/03-FIGURES_TEXT.md`; Higgs 2016, Campbell et al. 2019, Boigenzahn et al. 2023 and Forsythe et al. 2017, each opened and recorded in `10_source_ledger.csv`. No new measurement was taken.

## FIGURE CENSUS

Fig 1 :22 (aggregation), Fig 3 :19/:20/:27 (dependency and missing instrument), Fig 4 (round trip), Fig 7 :36 (differing rooms), Fig 8 :32 (no new atom), Fig 9 :32/:60 (shape not name; filters not verdicts), Fig 10 :24 (channel), Fig 11 :49 (residual-relative valence), Fig 12 :43/:48/:92/:94/:104/:117/:119/:121, Fig 13 :115. Strained after re-census: none. The functional-sequence gap is named, not hidden.
