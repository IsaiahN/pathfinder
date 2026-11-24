# Expert verification packet: species counts alone and ecosystem functions

**What this is:** one claim in a form an ecologist or ecological statistician can check in twenty
minutes. Mode, provenance and refuters are stated before the conclusion, so a reader knows what to
look for and what would settle it. No trust, prestige or agreement is requested.

**Mode: `general` on the structure, `specified` on the empirical reading, not `grounded`.** No
reliability coefficient is claimed. This packet reports a shape and a route, and it is a simulated
derivation checked for internal consistency against the figures, not a ground reading.

## 1. The claim, in one paragraph

"How reliably can species counts alone predict ecosystem functions?" is not one question and does not
have one answer. It is a union compound of at least three overlapping conditions: which species are
present at a fixed count, how identities, traits, abundances and relations are arranged, and what
habitat the community sits in. A count is a symmetric many-to-one projection, so identity-dependent
information is discarded before prediction; the residual is per function, per site and per context,
and a global accuracy can be near zero while one slot stays live. Trait identity, dominance and
complementarity carry information the count loses, and habitat conditions and relations are
load-bearing, so adding more count samples cannot close the gap. The honest report is a matrix of
functions by habitats with per-slot residuals and the worst live slot shown, with counts used only as
a cheap filter for triage. The missing discriminator is characterisable as a shape, not named by the
framework. Four falsifiers were written before this conclusion.

## 2. Three checkable sub-claims

### C1, framework-internal and statistical: reliability is per slot, not one number

- **Statement.** `R` is indexed by object slot. Aggregating across slots is exactly what a single
  count on a community does, and it is how a live signal disappears. A count-only predictor can show
  a small global error while one function slot carries positive unreduced mass.
- **Source, verbatim.** Fig 1 :19 *"The residual is indexed by object slot, not aggregated."*
  Fig 1 :22 *"Aggregating across slots is how a live signal disappears into an average."*
  Fig 1 :13 *"a global R near zero with one live slot residual is a legal state"*
  Symbols table :43: *"One object, region or entity being tracked. R is measured per slot, never as a single global number."*
- **Refuter.** Show a count-only predictor whose per-slot `R` stays small across functions, sites and
  habitats on held-out data, with no single live slot and no context dependence. A small global
  average alone does not refute C1; it is the failure mode C1 names.

### C2, structural and ecology-facing: a count is a symmetric lossy projection

- **Statement.** All orderings and all identity substitutions of a set of `k` species give the same
  integer, so under a symmetric bond there are `k!` spellings and one term. Two communities with the
  same count are different terms under one notation. Where they share a species pool but differ in
  which members are present and in their abundances and relations, they are isomers in the figure's
  sense. The arrangement, not the ingredient list and certainly not its cardinality, carries the
  function-relevant information.
- **Source, verbatim.** Fig 12 :23 *"this bond is symmetric, so the four are one term"*
  Fig 12 :92 *"Under a symmetric bond, k operands have k! spellings and one term"*
  Fig 12 :5 *"A set of ingredients is not one. The bond is the rest of the information, and it is the half nothing was recording."*
  Fig 12 :117 *"same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."*
- **World corroboration, secondary only.** Gagic et al. (2015) found *"greater explanatory power than
  species richness or abundance"* for trait indices and responses due to *"identity and dominance
  patterns of the trait composition rather than the number or abundance of species per se."* Hong et
  al. (2022) found effects *"mainly driven by interspecific complementarity"*. Wikipedia, *Metamerism
  (color)*: *"a perceived matching of colors with different (nonmatching) spectral power
  distributions."*
- **Refuter.** Show that the target functions are invariant under every permutation and identity
  substitution at fixed count, or exhibit a trait and identity model with zero incremental
  out-of-sample explanatory power over `S` for every function in the set. If function really depends
  only on how many, the symmetry is harmless and C2 falls.

### C3, ecological and union-facing: habitat is load-bearing, and more counting cannot clear the union

- **Statement.** Habitat conditions and relations are part of what decides function, and the question
  bundles identity, arrangement and context. A species count is not a habitat. The loss is upstream
  of search, so importing the trait and habitat frames with provenance and a shadow test is the
  constructive move, not collecting more counts.
- **Source, verbatim.** Fig 11 :43 *"The habitat is enumerated, never composed."*
  Fig 11 :46 *"conditions: light, water, temperature, season, terrain"*
  Fig 11 :47 *"relations: pollination, predation, competition, dependency"*
  Fig 11 :48 *"You do not invent the list. You read it off the world, and what you cannot perceive or measure yet is the residual."*
  Fig 9 :57 *"A bundled problem is usually a union of overlapping conditions, not a list of separate ones."*
  Fig 8 :32 *"Closure is idempotent. Composing inside a closed set never leaves it, so no search, however long, adds an atom."*
- **World corroboration, secondary only.** Carrick and Forsythe (2020) found the relation in
  recovering ecosystems *"weak and saturating (directly accounting for only 2% of the variation)"*;
  Hong et al. (2022) found effects *"often not to the same degree"* across environments.
- **Refuter.** Show a count-only predictor with stable, calibrated, context-independent error across
  habitats, or demonstrate that the trait and habitat frames are renamings of the count frame, so
  the union has no surplus. Either would remove habitat as a necessary condition.

## 3. What is explicitly not claimed

- Not that richness has no predictive value. The opened literature finds a general positive
  biodiversity effect. The claim is insufficiency in general, not zero effect.
- Not that traits always beat counts everywhere. That is a `specified` result on the taxa, functions
  and contexts of the studies read.
- Not one numeric reliability for "counts alone" across functions, and not a universal ranking of
  predictors. The framework returns a shape, not a name.
- Not that the framework adds a seventh primitive. Traits and habitat atoms are provenanced bindings
  from frames whose closures differ, not framework decrees.
- Not that a table of agreed experts settles anything. Fig 2 :40 *"agreement about the world is
  worthless when the agreeing frames share an evidence pool"*; the three ecology sources overlap in
  one BEF literature pool, so their agreement is one witness, not three.
- Not `grounded`. A coefficient would need a named function, site set, habitat, model and error
  metric, measured against the ground.

## 4. Provenance

- Figure text: verbatim extract at `FRAMEWORK/reference/03-FIGURES_TEXT.md`, opened 2026-11-23.
  Every `Fig N :line` quote above is checked against it. The figures, not the folder's summaries,
  are the authority.
- Derivation chain: `01_figure_grounded_audit.md` (findings F1 to F10, pre-registered refuter),
  `05_what_shape_means.md` (canonical reading of shape from eight essays), `06_isomers_and_order.md`
  (structure and order). Retractions in those files are kept visible, not erased.
- World sources opened on 2026-11-23: Gagic et al. 2015, Proc Biol Sci; Carrick and Forsythe 2020,
  PLoS One; Hong et al. 2022, Ecol Lett; Wikipedia *Data processing inequality*, *Sufficient
  statistic*, *Metamerism (color)*; eight essays by Isaiah N, adventuresinml (Substack), 2026. All
  are recorded with URLs, authors, venues, years and quotes in `10_source_ledger.csv`.
- Compiled 2026-11-23. All world sources are secondary corroboration. The figures decide.

## 5. What would settle it, and the standing falsifiers

A ground reading, not a further argument or a vote. Fig 2 :29 *"An anchor is whatever settles the
question and does not change its answer because of what any frame thinks."* The four pre-registered
falsifiers, written before the conclusion (see `01_figure_grounded_audit.md` §4):

1. **Symmetry test.** Identity substitution at fixed count never changes the target functions.
2. **Per-slot test.** Count-only per-slot `R` stays small across functions, sites and habitats on
   held-out data.
3. **No-surplus test.** Trait, identity, abundance and habitat variables add no out-of-sample
   improvement for any function in the set.
4. **Sufficiency test.** `S` is a sufficient statistic for the function vector; conditioning on full
   composition adds nothing.

The round trip from full composition to `S` and back must be measured, not assumed zero: Fig 4 :30
*"So take the round trip and measure the gap. Without it you are navigating by dead reckoning:
confident about a position nobody checked."*

## 6. What an expert can check in twenty minutes

1. Read the three figure passages for C1 (Fig 1 :13, :19, :22). Is a global reliability coefficient
   compatible with a per-slot residual? If yes, C1 fails.
2. Apply the symmetry test in your own system: hold `S` fixed, swap species identities, and ask
   whether any target function can change. If none can, C2 fails.
3. Read Carrick and Forsythe (2020) and Hong et al. (2022), then name one function and habitat pair
   where context dependence is absent. If the error is stable and calibrated across habitats, C3
   fails.
4. Run the sufficiency test or the no-surplus test on a dataset you know. A one-line refutation is
   more useful than an endorsement. Record the verdict before reading any framework material.

**Status of this packet:** a simulated derivation checked for internal consistency against the
figures and opened sources, not a ground reading. It cannot settle the claim it reports on.
