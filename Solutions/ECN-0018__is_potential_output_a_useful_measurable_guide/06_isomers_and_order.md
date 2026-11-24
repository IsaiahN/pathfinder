# Same reading, different source: latent state estimation, isomers and order

**Mode: `specified`.** This is a simulated derivation checked against the figures, not a ground reading (see `05_what_shape_means.md` §6).

## RESIDUAL

One observed configuration, a given path of output with a given inflation and unemployment reading, is claimed to identify one unobserved quantity, sustainable capacity. Two questions are owed: (1) can that identification hold when several latent sources produce the same observation, and (2) are two capacity estimates with the same published value but different internal arrangements usefully compared as Fig 12's **isomers**?

## DOMAIN CENSUS

Atoms held in the estimating frame: observed output and its vintages, capacity utilisation, unemployment and its alternatives, vacancies, hours, wage growth, prices, productivity. The latent term capacity is not an observed atom; it is inferred. Bonds held include comparison ⋛ and sequence →, but Fig 12's bond set describes composition inside a library, not statistical identification, so those are analogues, not tools here. No new primitive is available without import. The low-overlap frames imported for this derivation are statistics (identifiability), control theory (Kalman filtering), and meteorology (data assimilation), each with a source gate and shadow test recorded in `10_source_ledger.csv`.

## DERIVATION

### Q1 — Can one observation identify one latent source? ANSWER: NOT WITHOUT AN EXTRA ASSUMPTION

- *Identifiability* (statistics, fetched 2026-11-23): a model is identifiable only when different parameter values generate different distributions; otherwise *"two or more parametrizations are observationally equivalent."*
- Its errors-in-variables example shows a latent regressor whose coefficient cannot be learned even with an infinite number of observations unless a normality assumption is abandoned or an extra restriction is added. It calls the weaker case *"partially identifiable"* and the bounded case *"set identifiable."*
- The Wikipedia *Output gap* page (fetched 2026-11-23) says potential GDP *"is not an observable variable, it is instead often derived from past GDP data, which could lead to systemic downward biases."*
- ⇒ A capacity estimate is a **set-identifiable at best** object: a range, conditional on assumptions. Reporting a point value suppresses the identification condition.
- **Falsifier, written before the run:** exhibit a statistic of the observed series that is one-to-one with sustainable capacity under all admissible model assumptions. If one exists, the underdetermination claim fails and a point value may be decisive.

### Q2 — What does the control-theory frame add?

- *Kalman filter* (control theory, fetched 2026-11-23): it *"estimates unknown variables that tend to be more accurate than those based on a single measurement"* by combining a state transition model with sequential noisy measurements.
- But optimality assumes *"the model matches the real system perfectly"* and the noise covariances are known exactly, and *"Practical implementation of a Kalman Filter is often difficult due to the difficulty of getting a good estimate of the noise covariance matrices."* The page also notes that *"unmodeled dynamics can seriously degrade the filter performance"* and can make the estimate diverge.
- ⇒ The shape is not "a latent state cannot be estimated." It is "a latent state is estimated well only when the model and its error structure are right, and the error structure is itself hard to know." That is exactly the revision problem the VoxEU study documents: two-thirds of revision comes from re-estimating potential growth, which is the model-and-covariance part, not the data part.
- **Triangulation status:** single-source for the engineering claim, but its shape is corroborated from a second low-overlap field (below) and by the figure rule on depth versus absence. `general` for the figure rule, `specified` for the mapping.

### Q3 — What does the meteorological frame add?

- *Data assimilation* (meteorology, fetched 2026-11-23): *"When these models are used for forecasting the model output quickly deviates from the real atmosphere. Hence, we use observations of the atmosphere to keep the model on track."*
- It describes the *innovation*, the difference between forecast and observation, and a weighting factor that determines how much correction to apply. It adds: *"Dealing with biased data is a serious challenge in data assimilation."* And where several instruments observe the same variable, intercomparing them can be instructive.
- ⇒ A capacity model that is not repeatedly corrected by observations drifts, and the correction must weight independent observations rather than pool them. This corroborates F1 and F4 of `01_figure_grounded_audit.md` from a field with no contact with the framework. **Very low overlap**, so this is the strongest independent corroboration here, still corroboration only.

### Q4 — Are two capacity estimates isomers?

- Fig 12 :117: **"isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."**
- Fig 12 :124: **"functional group. A substructure whose presence fixes the outcome. The group says what kind; the qualifier says which member."**
- Two published estimates with the same headline value but different internal arrangements (one built from a production function with a given NAIRU, another from a statistical filter over the same sample) share the same "formula" value and differ in arrangement. Under Fig 12's definition they are **isomers**: same reported atoms, different internal bond structure, different behavioural implications when the economy is shocked.
- If they share only the headline number and use different underlying series, they are weaker than isomers: two members of the same **functional group** (a capacity estimate) with different atoms in the slots.
- **Falsifier, written before the run:** if two estimates with the same published value and different methods always respond identically to a named supply shock and a named demand shock, the isomer claim fails and the functional-group reading stands.
- **Strain, named:** these "atoms" are measured series and modelling choices, not the six primitives of Fig 13. The isomer reading is an **analogue**, not a derivation. Fig 12 governs composition inside a library; this is a comparison of estimation procedures. Strained-for-now, single-source for the figure definition, not part of the verdict.

### Q5 — What order do the cuts come in?

- Fig 9 :54: **"And when the split lands on a union rather than a partition, unbundle before you search again."**
- Fig 9 :40-41: *"a wrong cut removes the answer and speeds up so keep every cut ranked and reversible"*.
- The order is: (1) separate the informative question from the precision question; (2) within precision, separate data revision from model revision (the VoxEU two-thirds result makes this cut decisive); (3) within model revision, separate identification from error estimation (Q1 and Q2); (4) only then compare estimates and publish a band. Effort spent refining a point estimate before the union is unbundled is effort above the break (Fig 3 :19).

## CONCLUSION

An observed configuration does not determine one latent source without an extra assumption. Capacity is set-identifiable at best and must be published as a range with its vintage and its identification condition. The control and meteorological frames explain why the range drifts and must be corrected by independent observations, and both corroborate the figure shape from fields with no contact with the framework. Two estimates with the same headline value but different internal arrangements are isomer-like under Fig 12 :117, with a stated falsifier; that reading is an analogue and is recorded as strained, not used as a verdict. The cuts are ordered by dependency and kept reversible.

## ANCHOR

Verbatim figure text from `FRAMEWORK/reference/03-FIGURES_TEXT.md`; the canonical figures README; the eight essays (two fetched directly this run, six via the exemplar mapping); and the public sources listed in `10_source_ledger.csv`, all opened 2026-11-23 except where noted. No vintage-level computation or episode data were used.

## FIGURE CENSUS

Fig 3 (order by dependency), Fig 4 (lossy transform), Fig 6 (depth versus absence), Fig 8 (low-overlap surplus, convergence versus adopted import), Fig 9 (union unbundling, describe the effect), Fig 12 (isomer, functional group; strained as applied here), Fig 13 (rejected as governing, see `01` §4), Operators table (⋛ operand type, strained), Formula (steps 3, 5, 7). Strains after re-census: **two, both named and non-governing** (Fig 13 substrate, Fig 12 isomer analogue).
