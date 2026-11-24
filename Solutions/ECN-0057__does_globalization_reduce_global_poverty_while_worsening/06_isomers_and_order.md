# Supporting derivation: union, cross-scale order, and the comparator strain

**Mode: `general` on the structural claims, `specified` on the analogue. Simulated derivation checked against the figures, not a ground reading (see `05_what_shape_means.md` §6).**

## RESIDUAL

The question bundles three operations under one "while": (1) a threshold count over a global pooled distribution, (2) a spread measured inside national slots, and (3) a causal attribution to one actor. The supporting questions are: is this a partition or a union; what is the order of the dependencies; what does the cross-scale transform discard; and which bond, if any, joins the two readings.

## DOMAIN CENSUS

Atoms held in the two measurement frames: households, incomes or consumption, a poverty line, an inequality statistic, a time index. Bonds available: the seven typed relations plus negation. No new primitive is needed for either reading. The causal frame has no instrument yet, so no anchor and no settled term.

## DERIVATION

### Q1. Union or partition?

Fig 9 :55 **"A bundled problem is usually a union of overlapping conditions, not a list of separate ones."** Fig 9 :57 **"a case in two conditions is not a harder case of either"**

- Condition A: the global headcount falls. Condition B: the within-country spread rises in some slots.
- They overlap: both are computed from household surveys and both respond to the same growth process. So this is not two independent questions that can be answered and added. It is a **union compound** with its own loop.
- Fig 9 :54 **"And when the split lands on a union rather than a partition, unbundle before you search again."** Unbundle into D1 (headcount), D2 (spread), and the overlap (same data generating process, different statistic).
- **Falsifier, written before the run:** if the two conditions are statistically independent given the same survey data, the union reading fails and a partition is correct.

### Q2. What is the dependency order?

Fig 3 :20 **"The chain is ordered by dependency, not by importance."** Fig 3 :22 **"A step whose input never arrives cannot be diagnosed, only its predecessor can."**

Order: define the absolute line and the national inequality statistic -> state what would count as a causal contribution -> attempt attribution -> carry across countries. The public debate usually runs this backwards, naming globalization before naming the measures. Fig 9 :27-28 **"describe it before you go looking, or any frame you pick will seem to fit"** So an attribution made before the measures are fixed is not a weak attribution; by Fig 3 :22 it is a reading of nothing.

### Q3. What does the cross-scale transform discard?

Symbols table: `R_T = gap(x, (T_E ∘ T_A)(x))`, the gap between what was sent up and what came back down. Fig 4 :27 **"The transform between scales loses information, and that is the point."** Fig 4 :30 **"So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked."**

- **Sent up (x):** national household distributions, each with its own shape.
- **Abstraction (T_A):** one global headcount against an international line.
- **Concretisation (T_E):** read a global claim back onto a national slot.
- **`R_T` is nonzero and locatable.** What does not survive the trip up is the within-country spread, the choice of national line, and the income-versus-consumption distinction the OWID poverty page documents. What survives is a count of people below a fixed threshold.
- `R_T` is recorded here **qualitatively**, as the enumerated set of dropped constraints. It is not measured numerically, because no cross-scale ground reading was run in this simulation. Setting it to zero would be the dead-reckoning error Fig 4 :30 names.

### Q4. Are the two readings isomers?

Fig 12 :117 **"isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."**

- The same household survey microdata can be read under an absolute-line comparison (count below the line) or a relative-line comparison (count below a fraction of the median). Same atoms, different comparison, different substance. That is a genuine isomer pair at the measurement level.
- Fig 12 :124 *"functional group. A substructure whose presence fixes the outcome. The group says what kind; the qualifier says which member."* Both readings belong to the functional group "distributional statistic over household surveys"; the qualifier is which comparison bond is used.
- Global headcount and within-country Gini are **not** isomers of one another: they are not computed over the same operand set at the same scale. They are different members of the same functional family at different scales. This is the honest weaker claim.
- **Falsifier, written before the run:** if the absolute and relative readings can be derived from one another without changing the comparison bond, the isomer claim fails.

### Q5. Which bond joins the two readings? (strain, resolved by re-census)

First attempt: the "while" is ⋛ (comparison). Operators table :51: *"a threshold relation between two quantities"*. **Strain.** ⋛ compares two quantities at one scale; the "while" conjoins two readings at two scales over the same period. Forcing it changes arity and scale.

Re-census: the conjunction is a `+` of two per-slot residuals, not a bond between them. ⋛ is still licensed **inside** D1, where a household income crosses the poverty line: that is the threshold the count sums. Fig 12 :125 **"A composition costs in two currencies, and they do not add."** Headcount is counted in people; spread in Gini points or percentile ratios. Summing them into one welfare index is the flat-form error.

**Retraction retained:** the ⋛ reading is withdrawn, not erased. No figure was changed; the census was.

## CONCLUSION

The question is a union compound, ordered measurement before attribution. The global-to-national transform is lossy with a nonzero, qualitatively enumerated `R_T`. The absolute and relative readings of the same survey data are isomers; the headcount and the Gini are members of one functional family at different scales. The "while" is a conjunction of slots, not a comparison bond; ⋛ belongs one level down at the poverty line. The causal attribution stays `gap` until a source-discriminating instrument exists.

## ANCHOR

Verbatim figure text from `FRAMEWORK/reference/03-FIGURES_TEXT.md`, the Operators and Symbols tables in the same extract, `THE_FORMULA.md`, and the four essays opened for `05_what_shape_means.md`. No measurement was recomputed.

## FIGURE CENSUS

Fig 3 (dependency order), Fig 4 (lossy cross-scale transform, round trip), Fig 8 (union surplus, search not proof of absence), Fig 9 (union versus partition, describe first), Fig 10 (bring the residual), Fig 11 (valence relative to residual), Fig 12 (isomer, functional group, two currencies), Fig 13 (independence, unreachable is a verdict), Operators (⋛ type), Symbols (`R_T`, per-slot R). Strains after re-census: one ⋛ strain named and resolved; no live strain remains.
