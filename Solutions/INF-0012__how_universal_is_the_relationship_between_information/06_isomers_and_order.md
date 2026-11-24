# Two currencies, noise, and the order of the union

**Mode: `specified`.** This is a simulated derivation checked against the figures, not a ground reading (see `05_what_shape_means.md` section 7).

## RESIDUAL

The word "universal" hides four structural questions that must be separated before any verdict: (1) is the relationship an equality or a price between two currencies? (2) what does noise do to the quantity being priced? (3) is the residual one question or a union? (4) in what order must the domains be settled? Each is derived below with its own falsifier.

## DOMAIN CENSUS (carried from `01_figure_grounded_audit.md` section 1)

Atoms held: the six terms (Space, Time, Energy states; Gradient, Network, Spectrum structures), the seven bonds and negation. Bonds held include `⋛` comparison and `→` sequence. No new primitive is available without import. The question's atoms are *information* (a count of configurations, which the figures license through network: *"no configurations to count"*) and *cost* (a spendable direction, which the figures license through gradient and energy). The constant `kT ln2` is an import, not a held atom of Γ.

## DERIVATION

### Q1 - Why the relationship is a price and not an equality

- Fig 12 :125: **"A composition costs in two currencies, and they do not add."**
- Fig 12 :126: **"Bits price the description. Actions price finding out whether it holds."**
- Fig 12 :127: **"They are in different units, so a system holding one accounting cannot compare them"**.
- Fig 12 :128: **"The two readings come apart in both directions."**

Erasure reduces the number of configurations (a description-length fact, priced in bits) and dissipates heat (an action fact, priced in energy). The figures say the two prices are in different units and do not add. So a claim of the form "one bit *is* `kT ln2`" confuses a rate of exchange with an identity. The relationship is a **bond** between two operands, and the bond carries information neither operand carries. Fig 12 :5: **"A set of ingredients is not one. The bond is the rest of the information, and it is the half nothing was recording."**

- **Falsifier:** if a derivation inside the figures produced a unitless equality between a count of bits and a quantity of energy, the two-currency claim fails and the relationship would have to be re-censused as a single-currency quantity.

### Q2 - What noise does, and why the cost is per slot

- Fig 13 :31: **"And because each turn leaves a remainder (the residual) that re-enters the next"**
- Fig 13 :32: **"the detail a crossing discards reappears above it as noise."**
- Fig 5 :55: **"Nothing leaves the library. What falls is the reach."**
- Fig 1 :19: **"The residual is indexed by object slot, not aggregated."**
- Fig 1 :22: **"Aggregating across slots is how a live signal disappears into an average."**

Erasure is a crossing: a bit's standing as a composable term falls, while the discarded detail reappears above the crossing as heat and fluctuation. Nothing is deleted, so a price is owed. In a noisy ensemble the relevant quantity is the residual of each realisation, because averaging is how the live one disappears. This gives the figure-side prediction that the floor is a mean approached in the reversible limit, with individual trajectories fluctuating around it, including trajectories that dip below it. The fluctuation distribution itself is not in the figures.

- **Falsifier:** if averaging per-realisation residuals preserved the live signal in a noisy erasure ensemble, Fig 1 :19 and :22 would fail for this domain and the per-slot claim would be withdrawn.

### Q3 - Union or partition, and are the domains isomers?

- Fig 9 :4: **"First: is there a fact here?"**
- Fig 9 :54: **"And when the split lands on a union rather than a partition, unbundle before you search again."**
- Fig 9 :55: **"A bundled problem is usually a union of overlapping conditions, not a list of separate ones."**

Speed, bath size, coupling, symmetry and coherence overlap, so D2, D3 and D4 are a union. A single lever (say, "make the protocol slower") clears the region where only speed binds and leaves the intersections standing, because the bath-size condition still binds. Fig 9 :57: *"What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either."*

Under Fig 12 the three domains can also be read as **isomers** of one another:

- Fig 12 :117: **"isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."**

The finite-time bound, the coherent bound and the asymmetric bound share the atoms (a memory, a bath, a protocol) and differ in the bond that dominates (speed, coupling, symmetry). To a flat formula that records only "erasure cost", they look alike; to the bond-aware reading they are different substances with different behaviour. This is the structural reason a single universality number is not just imprecise but categorically wrong.

- **Falsifier:** if two domains are shown to share every atom *and* the same dominant bond, the isomer reading fails for that pair and they collapse into one domain with one verdict.

### Q4 - Order by dependency, not importance

- Fig 3 :20: **"The chain is ordered by dependency, not by importance. Each link consumes what the one above produces, so effort spent above the break arrives at a step that cannot use it."**
- Fig 3 :22: **"A step whose input never arrives cannot be diagnosed, only its predecessor can."**

The order is D1 (what the bound is in its own domain) then D2 (noise and finite time) then D3 and D4 (coherence, asymmetry) then D5 (what could settle it). Asking "how universal" before D1 is settled is effort above the break. Fig 3 :27: *"A link with no instrument is not a link that works. It is a link nobody has looked at."* The middle link here is the domain map: everyone has an instrument for the bound itself and for the corrections, but few for the question of which conditions overlap. That is the link the census supplies.

- **Falsifier:** if a domain is shown to be assessable without the one above it, the dependency order is wrong and must be re-censused (Fig 3 :18 - *"Where a given chain stops is a reading, never a property of the chain."*).

### Q5 - What the round trip drops

- Fig 4 :27: **"The transform between scales loses information, and that is the point."**
- Fig 4 :30: **"So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked."**

Abstraction: the verbatim figure set (two currencies, substrate test, noise as discarded detail, union rule) becomes the shorthand "a priced, substrate-relative, per-slot floor, unbundled by domain". Concretisation back down to the physics question gives: the bound, the finite-time corrections, the quantum forms, the asymmetry conditions. Three things do not survive the trip: the numeric constant, the fluctuation distribution, and any quantum-specific correction. One thing survives cleanly: the shape and the domain order. That asymmetry is the honest measure of what the condensation cost, recorded as R_T in `11_audit.md`.

- **Falsifier:** if a concretisation recovered the numeric constant from the shorthand alone, R_T would be zero and the dead-reckoning warning would not apply.

## CONCLUSION

The four structural questions resolve as follows. The relationship is a **price** between two currencies, not an equality (Q1). Noise makes the cost a **per-slot** quantity whose average approaches a floor in the reversible limit, with discarded detail reappearing as heat (Q2). The universality question is a **union**, and its domains are **isomers** under Fig 12: same atoms, different dominant bond, different behaviour (Q3). The domains must be settled in **dependency order**, with the domain map as the unmeasured middle link (Q4). The condensation to a shorthand is **lossy**, with a nonzero round-trip gap (Q5).

This preserves what is defensible in a "how universal" question without pretending the figures supply a number. The claim that survives is the shape, its per-domain unbundling and its stated refuters. The numeric constant remains an import, provenanced in `10_source_ledger.csv`.

## ANCHOR

Verbatim figure text extracted from the local `03-FIGURES_TEXT.md` this session; the local formula, figures README and metalaws note; the world sources read this session. No measurement was taken by this derivation.

## FIGURE CENSUS

Fig 1 (per-slot residual), Fig 3 (dependency order), Fig 4 (lossy transform, round trip), Fig 5 (nothing leaves the library), Fig 9 (union, split, unbundle), Fig 12 (two currencies, bond, isomer), Fig 13 (noise as discarded detail, configurations to count), Operators (`⋛` as threshold comparison). Strains after re-census: none. The one earlier strain, mapping bits directly onto joules, was retracted in `01_figure_grounded_audit.md` section 7 and in `05_what_shape_means.md` section 5.
