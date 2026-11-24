# Expert verification packet: partial network correlations and causal influence

**What this is:** a claim in a form a researcher in causal inference on networks can check. Mode, derivation and refuters are stated before the conclusion, so a reader knows what to look for and what would settle it.

**Mode: `specified`, not `grounded`.** No measurement is claimed. This is a shape and a route from a simulated derivation checked for internal consistency against the figures.

## 1. The claim, in one paragraph

From a correlation reading over a partially measured network, a unique directed causal graph is not recoverable. What is recoverable is a narrowed class of structures compatible with the observed independence constraints over the measured nodes, plus an explicit list of the additional readings that would discriminate within that class. The reasons are structural: a correlation reading is symmetric where a causal bond is ordered; two graphs with the same readings are isomers whose difference is decisive only under intervention; and a hidden common cause makes two nodes agree without a causal link. Agreement among correlation-only estimators sharing one matrix is one evidence pool, not corroboration. The ground is a known-target intervention, a newly measured latent node, or a time-resolved reading that supplies the missing state. This is not a claim that observational causal discovery is impossible.

## 2. Three checkable sub-claims

### C1  -  framework-internal; checkable by reading Figures 12 and the Operators table

- **Statement:** a symmetric co-variation reading cannot determine an ordered causal bond; two graphs with the same readings are isomers under the figure's definition.
- **Source, verbatim:** Fig 12 :117 "isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour." Also Fig 12 :5 "A set of ingredients is not one. The bond is the rest of the information, and it is the half nothing was recording." And Fig 12 :95 "Two entries with an identical ingredient set are not variants of one thing. They are different things whose notation cannot tell them apart, and the difference is carried entirely by the bond."
- **What to check:** is the symmetry claim correct as stated about the reading, and does the isomer label apply when the operand sets are the measured nodes and the bond differs only by orientation? Note the correction in `05` §5b: naming a member of the class is a binding onto held concepts, not the invention of a new primitive.
- **Refuter:** exhibit a case where a symmetric reading determines a unique ordered bond with no intervention, no extra measurement and no imported assumption, or exhibit two graphs in the same class with identical behaviour under every available intervention (which makes the difference idle).

### C2  -  causal-inference-facing; checkable against the literature on identifiability

- **Statement:** the reachable object is a class of structures plus a discriminator list, not a unique graph; partial measurement adds a hidden common cause that can create agreement without influence.
- **Source, verbatim:** Fig 9 :32 "you get a kind of thing, never the answer itself". Fig 2 :21 "not two frames confirming each other". Fig 2 :40 "disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool".
- **What to check:** does this understate the field? The SEP entry on causal models states that without time order or other substantive assumptions "it will not always be possible to identify the causal structure from probability alone" and that only a Markov equivalence class is identifiable. Jaber, Zhang and Bareinboim (ICML 2019) note that "a PAG can be learned directly from data, and the scientist does not need to commit to a particular, unique diagram." These agree with the shape claim. A refutation would be a complete identification result that returns a unique graph from the partial reading under assumptions that the claim wrongly excludes.
- **Refuter:** show that adding a formerly latent common cause to the measured set leaves both the equivalence class and all interventional predictions unchanged, or that a correlation-only panel predicts holdout interventional outcomes better than chance and better than its own calibration while sharing one evidence pool.

### C3  -  framework-internal plus instrument-facing

- **Statement:** more search at the same reach cannot supply the missing direction; the owed thing is contact or a provenanced import.
- **Source, verbatim:** Fig 6 :21 "MINT composes inside the closure and can never add an atom." Fig 8 :32 "Closure is idempotent. Composing inside a closed set never leaves it, so no search, however long, adds an atom. This one is definitional: it is what closure means." Fig 11 :40 "An improvement that does not change contact changes nothing, however much it improves."
- **What to check:** is the interventions-as-new-contact reading consistent with the benchmark result of Secilmis et al. (2022), who conclude that "Targeted gene perturbations combined with inference methods that use the perturbation design are indispensable for accurate GRN inference"? And is the re-census in `01` §6 correct that an intervention is an instrument extension, not a mint inside the correlation frame's closure?
- **Refuter:** exhibit a setting where adding a known-target intervention or a formerly latent node leaves discriminating power unchanged across all tested graphs, or an algorithm using only the same reading and node set that reduces the class to a unique graph without an assumption hidden in its objective.

## 3. What is explicitly not claimed

- Not that observational causal discovery is impossible. Constraint-based methods, equivalence-class identification and multivariate-information methods can narrow the class from observational data.
- Not that absence of a correlation proves absence of an edge. Fig 8 :39 "So a search that finds nothing is never a proof of absence."
- Not that a unique graph is universally unidentifiable. Time order, functional-form assumptions or no-unmeasured-confounding can identify a query. Those are imports with source gates and shadow tests.
- Not that consensus among inference methods corroborates a causal claim. Siegenthaler and Gunawan (2014) write that "network inferability depends on the available information contained in the data, but not on the inference method."
- Not `grounded`. Nothing here was settled by an intervention.

## 4. Provenance

- Figure text extracted verbatim from the canonical SVG set, local path `FRAMEWORK/reference/03-FIGURES_TEXT.md`, read 2026-11-22.
- Canonical usage rule: `FRAMEWORK/reference/FIGURES_README_canonical.md`.
- Eight essays by Isaiah N, 2026-08 to 2026-11, opened 2026-11-22 and cited in `05_what_shape_means.md`.
- World sources actually opened, with author, venue, year and quote: `10_source_ledger.csv`.
- This packet compiled 2026-11-22.

## 5. What would settle it

A discriminator, not an argument. From *The Hard Problem is About Source*, an instrument that reads green "cannot comment on the source"; the spectrometer resolved it. Here:

1. **Intervention test:** does intervening on `X` change `Y` as the chosen graph predicts, or as a rival in the class predicts?
2. **Latent-source test:** does adding the formerly unmeasured common cause collapse the apparent edge between two nodes?
3. **Cycle test:** does the system close a feedback loop that a directed acyclic representation excluded by construction? Fig 12 :121 "cycle. The output re-enters as input. The sign of the loop decides whether it closes, and a chain cannot close by construction."
4. The four pre-registered falsifiers in `01` §4.

## 6. What an expert can check in twenty minutes

1. Read Fig 12 :117, Fig 12 :5, Fig 9 :32 and Fig 2 :40, four short passages in the local figure extract.
2. Check C2 against their own knowledge: is the shape claim an accurate description of what Markov equivalence and partial identification deliver, or does it understate the field?
3. Name one discriminator that would cut an equivalence class in their own system, or say why none is available.
4. Send the refutation. A failure is more useful than an endorsement.

**Status of this packet:** a simulated derivation checked for internal consistency against the figures, not a ground reading. It cannot settle the claim it reports on.
