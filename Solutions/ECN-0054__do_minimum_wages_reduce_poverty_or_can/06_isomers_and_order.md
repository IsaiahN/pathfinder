# Isomers and order: a wage floor beside an earned income tax credit

**Mode: `specified` on the structural derivation, `general` on the bond types, not `grounded`. Simulated derivation checked against the figures, not a ground reading (see `05_what_shape_means.md` section 7).**

## RESIDUAL

The audit split the question into a worker slot and a household slot and refused the addition of their currencies. Two questions are owed:

1. What is the **order** of the two readings, and is the order a bond or a preference?
2. A wage floor and an earned income tax credit are both offered as anti-poverty tools. Are they **isomers** under Fig 12, or members of a functional group, or neither?

## DOMAIN CENSUS

Atoms available from the two opened frames: worker, hours, wage, job, household, household income, poverty line, transfer, compliance, sector coverage. Bonds available: the seven, including ⋛ comparison, − subtraction, → sequence, ⇒ production; and the unary refusal ¬. No new primitive is available without import. The floor and the credit are both comparisons at a threshold, so ⋛ is load-bearing. The two currencies remain different: the floor prices a job slot, the credit prices a household transfer.

## DERIVATION

### Q1: What order do the two readings have?

- Fig 3 :20 "The chain is ordered by dependency, not by importance." and Fig 3 :19 "Optimising a link that already works cannot rescue one that does not."
- A household cannot be lifted by the wage of a job that does not exist. So the employment reading is upstream of the household income reading: `worker → job → wage → household income ⋛ poverty line`.
- Fig 12 :73 "A then B; B needs A to have happened" gives `→` sequence the order. The order is a **bond**, not a preference added by the researcher. It is not the symmetric `+`, which would let the two readings be swapped without changing the term.
- Fig 3 :27 "A link with no instrument is not a link that works. It is a link nobody has looked at." The objective link, what counts as "reduce poverty", needs the poverty line named before it can be read. The IZA sources opened for this solution both note that a low wage and a low household income are different targets; that is the missing vocabulary at Fig 3's middle link.
- Formula step 2 (attributed to `THE_FORMULA.md`) says refuse before mint. The ordinary answer "minimum wages reduce poverty" is refused before any compromise term is minted. This ordering is a discipline, not a finding of the loop.

**Conclusion Q1:** the order is dependency order with a typed `→` bond, upstream = employment, downstream = household income. Reversing the order commits a type error: it lets a household cross a line on wages from a job that was never read.

### Q2: Are the floor and the credit isomers?

- Fig 12 :117 "isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."
- Fig 12 :123 "functional group. A substructure whose presence fixes the outcome. The group says what kind; the qualifier says which member."
- Over the **full shared atom set** {worker, hours, wage, job, household income, poverty line, transfer, threshold}, the two can be written:

```
floor:   wage ⋛ statutory floor → hours/job → household income ⋛ poverty line
credit:  household income ⋛ eligibility → transfer → household income ⋛ poverty line
```

Same atoms. Different first bond and different operand. The floor acts on the wage before the exchange; the credit acts on household income after it. Their behaviour differs in exactly the way Fig 12 says an isomer's behaviour differs: the floor can withdraw a job slot, the credit cannot; the credit can reach a household with no current worker, the floor cannot.

- Over the **reduced** set {threshold on income}, both are merely "income support". That is the functional group: Fig 12 :123 gives the kind, and the qualifier (before the exchange or after it) gives the member.
- Opened world corroboration: Neumark's IZA article states that minimum wages "do a bad job of targeting poor and low-income families" and that the EITC "appears more effective at helping low-income families"; Gindling's IZA article recommends "enhancing social safety nets" and notes that Brazil's conditional cash transfer was more effective than a higher floor with the same resources. These are two articles in one economics pool, so they are one witness, and they corroborate the behavioural difference, not the figure classification.

**Falsifier, written before the run:** if either policy can be written without an atom the other requires, for example a credit with no wage or job atom, the isomer claim fails and only the functional-group reading stands. If both can be written with the identical first bond and identical operands, they are the same term and the isomer claim also fails. I will withdraw the isomer claim if either holds.

**Verdict:** Isomers over the full shared atom set, functional group over the reduced set. `specified`, triangulated for the figure definition (Fig 12 :117 and :123) and single-source for the policy characterisations (one economics pool).

### Q3: Why the two currencies cannot be composed into one

- Fig 12 :125 "A composition costs in two currencies, and they do not add."
- Fig 12 :126 "Bits price the description. Actions price finding out whether it holds."
- The floor's wage gain is priced in currency units per hour. Its employment loss is priced in job slots. A credit's transfer is priced in currency units per household. None of these share a unit. A social welfare function could price them, but that function is an import with a source gate and a shadow test (Fig 6 :23), not a figure line.
- Fig 12 :92 "Symmetry is what decides whether an arrangement is a new thing." Adding a wage gain to a job loss under `+` would be a symmetric bond that is not justified: swapping the operands does not preserve meaning, because the job must exist before the wage is paid. The correct order is `→`, not `+`.

**Falsifier:** a declared, pre-registered common scale with a published source and a shadow test that explains a gap the two separate readings leave. If such a scale exists and survives independent checking, the no-addition verdict is reversed.

### Q4: What is the bond between the two outcome domains?

- Fig 9 :54 "And when the split lands on a union rather than a partition, unbundle before you search again."
- Fig 9 :57 "What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either. It stops being a mixture and becomes a specific compound."
- The bond between D1 and D4 is `→` (a job precedes its wage). The bond between D4 and D2 is `→` (household income follows from the wage and hours). The overlap of low skill and low household income is not a bond at all; it is the intersection where both conditions bind, and it is enumerated from the habitat (Fig 11 :43-44 "The habitat is enumerated, never composed.").
- A refused term is also present: the claim "one verdict settles the question" is refused with ¬, which is a unary operator and not a bond (Operators table amendment, attributed to the local Operators table). Fig 12 :104 "A settled molecule becomes an atom for whatever composes over it. So irreducible is a fact about a level and never about the world, and there is no bottom" explains why the refusal can be an atom at the next level without deleting anything.

**Falsifier:** showing that the two conditions are nested rather than overlapping, so the intersection is empty, would reduce the union to a chain and make a single verdict possible.

## CONCLUSION

The order is dependency order with `→` bonds, employment upstream of household income. The floor and the earned income tax credit are isomers over a shared atom set and members of one functional group over a reduced set. Their different behaviour is the point of the isomer claim, and the opened economics sources corroborate that difference while sharing one evidence pool. The two currencies do not add under any of the seven bonds; a common scale would be an import requiring a source gate and a shadow test. The union of the two outcome conditions is not a partition, and a refusal term removes the standing of the single-verdict claim without erasing it.

This framing rescues what is defensible in the ordinary debate without inventing a number: the policies differ by arrangement, not by the presence of a single "pro-poor" ingredient, and the question's either/or cannot be repaired by averaging.

## ANCHOR

Verbatim figure text extracted from the local `03-FIGURES_TEXT.md`; the local Operators table; the two opened IZA World of Labor articles. No payroll or household measurement was taken.

## FIGURE CENSUS

Fig 1 (per-slot residual), Fig 2 (anchor and independence), Fig 3 (dependency order and the missing instrument), Fig 4 (methods versus recordings), Fig 6 (what import adds), Fig 8 (provenance and union surplus), Fig 9 (union versus partition), Fig 11 (habitat enumerated), Fig 12 (sequence, comparison, isomer, functional group, two currencies, settled molecule), Operators (¬ is not a bond), Formula (refuse before mint). Strained after re-census: none. The common-scale question is a live `gap`, named in 01 strain S4, not hidden here.
