# Union, slot order and analogues: the supporting derivation

**Mode: `specified` on the separations, `general` on the structural shape, `gap` on the literal inventory.** This is a simulated derivation checked against the figures, not a ground reading (see `05_what_shape_means.md` section 6).

## RESIDUAL

The question "what information do parameters encode" asks for one object. The audit `01` found four overlapping candidates (corpus trace, representational geometry, what pays at deployment, who can check). This file answers the three structural questions the main derivation assumes but does not unfold: (1) is the bundle a union or a partition, (2) what is the order of its parts, and (3) what analogues license the claim that the contents cannot settle the source.

## DOMAIN CENSUS

Atoms held: the six terms of Fig 13 (space, time, energy as states; spectrum, gradient, network as structures), the seven bonds of Fig 12, the slot and the residual from the Symbols table, import and closure from Fig 6, the anchor from Fig 2, and the habitat from Fig 11. Bonds held: all seven, including ⋛ comparison and → sequence. No new primitive is available without import. The verification frame's tools (causal tracing, sparse autoencoders) are bindings onto held terms, not new atoms.

---

## Q1 - Union or partition?

- Fig 9 :55: **"A bundled problem is usually a union of overlapping conditions, not a list of separate ones."**
- Fig 9 :57: **"What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either."**
- Fig 9 :54: **"And when the split lands on a union rather than a partition, unbundle before you search again."**
- The four candidates overlap pairwise: corpus trace and representational geometry are the same weights at two descriptions; corpus and deployment overlap because the corpus samples the ground; the checking frame reads all three. A lever that clears the corpus condition leaves the geometry and settlement conditions standing.
- **Conclusion:** union. Four loops, four verdicts, never averaged. `specified`, triangulated with Fig 1 :19 (per-slot indexing), low overlap between search topology and agent perception.

**Falsifier, written before the run:** if the four candidates can be shown to be mutually exclusive and exhaustive, so that exactly one is present for any parameter set, the union claim is refuted and the partition reading stands.

## Q2 - What is the order of the parts?

- Fig 3 :20: **"The chain is ordered by dependency, not by importance."**
- Fig 3 :19: **"Optimising a link that already works cannot rescue one that does not."**
- The dependency order is: perception (read the weights) -> vocabulary (terms for what a reading affords: feature directions, bonds, slots) -> objective (what would count as progress: a change in ground behaviour under intervention) -> planning (which slot to probe) -> learn and carry (a method, not a recording).
- The break in this field is between perception and objective. We can read every weight and we have rich vocabularies for architecture, yet the objective link, what would count as a settled answer to "what is encoded", has no standard instrument. Fig 3 :27: **"A link with no instrument is not a link that works. It is a link nobody has looked at."** So effort lands above the break: larger probes, more benchmarks, more parameter counts. Fig 3 :29-30: *"Most improvement effort in practice lands above the break, because that is where the measurements already exist."*
- Second order relation: within the union, settlement precedes naming. A binding like "this fact is at this layer" is warranted only after an intervention shows that editing it changes the answer (Meng et al. 2022). Naming before settlement is the inversion Fig 9 :27-28 forbids: **"describe it before you go looking, or any frame you pick will seem to fit"**.
- **Conclusion:** dependency order is perception -> vocabulary -> objective -> probe -> carry; settlement precedes naming inside the last two. `general`, single-source on the figure side (Fig 3 and Fig 9, same framework pool), with the model-editing instance as `specified` world corroboration.

**Falsifier:** a working protocol that settles a content claim purely at the perception or vocabulary link, without an objective/intervention, would collapse the order and make the break claim false.

## Q3 - Are the candidate readings isomers?

- Fig 12 :117: **"isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."**
- Fig 12 :124: **"functional group. A substructure whose presence fixes the outcome. The group says what kind; the qualifier says which member."**
- Consider two trained systems with the same architecture and the same parameter count. Their ingredient lists are the same kind of thing (matrices of the same shape). If their feature geometries differ only in which structure mediates which state pair, they are **isomers** over the fixed atom set: same atoms, different bond, different behaviour. That is the strong form, and it is a checkable structural claim.
- If instead they differ in which atoms are present at all (one has a dedicated feature direction the other lacks), they are not isomers; they are different molecules over different atom sets, and the difference is an import or a missing atom (Fig 6 :23). Fig 13 :115: **"The set is closed. The arrangements are not."**
- The weaker reading: corpus trace and representational geometry are not two substances but two descriptions of one arrangement. They share every ingredient and differ only in the observing frame. That makes them a **functional group** relation rather than isomers: *"the group says what kind; the qualifier says which member."*
- **Conclusion:** the strong isomer claim requires a fixed atom set and is `specified` with a falsifier; the weaker functional-group reading is `general` and is the one the audit actually relies on. This does not contradict F2 of `01`: isomers are invisible in the formula, which is exactly why the contents cannot settle which one you have.

**Falsifier, written before the run:** if two systems with identical parameter ingredients and different arrangements show no difference in any ground-visible behaviour, the isomer claim fails and the flat-formula reading (Fig 12 :14-16) stands instead.

## Q4 - What do the low-overlap analogues license?

Three analogues, each from a different field, each with an explicit limit.

**A. Tolman, animal behaviour (latent learning).** *Goals and Habits in the Brain* (2013) reports that Tolman's rats formed *"a field map of the environment"* rather than stimulus-response chains, and that learning can occur without being expressed in performance until the ground changes (reward introduced). Licence: acquisition and expression are different events, so a reading of current behaviour does not exhaust what was acquired. Limit: a rat's map is not a parameter vector, and the sunburst-maze evidence for shortcutting replicates poorly (a 2025 meta-analysis found only 17% of experiments demonstrated shortcutting). We borrow the shape, not the result.

**B. Loftus, human cognition (reconstructive memory).** APA's summary: memory is not *"waiting to be played back like a recording device"*; post-event information causes *"a contamination, a distortion, an alteration in memory"*. Licence: a stored trace is not a copy of its source, and source confusion is a named failure. Limit: human memory has a biological substrate and social transmission that a forward pass does not.

**C. Metamerism, perception / instrumentation.** *The Hard Problem is About Source*: an instrument that reads green *"cannot comment on the source"*; the spectrometer resolved it, not an argument. Licence: the reading does not determine the source, and the remedy is an instrument. Limit: this is an essay by the framework author, so it corroborates the shape but shares the evidence pool. It is not an independent witness.

**Convergence check.** Huh et al. 2024 report that representations converge across architectures and modalities toward *"a shared statistical model of reality"*. This does not license saying the source was recovered. Fig 13 :121: **"Different routes can arrive at the same substance."** Fig 8 :50: convergence from separate frames is *"corroboration at maximum independence"*, which is a statement about how the atom was reached, not about where it came from. The RSI essay's *"the best you could do is take traces of patterns"* is compatible: convergence of geometry is not reconstruction of lineage. The conflict was returned to the census in `01` F8 and the verdict was not flipped.

**Conclusion:** the analogues license the shape (acquisition different from expression, trace different from source, reading different from instrument), not the ML fact. `general` for the borrowed shape; the specific ML claims stay `specified` on world evidence.

---

## CONCLUSION

The bundle is a union with four separable verdicts; the dependency order runs perception to vocabulary to objective, with settlement before naming; corpus trace and representational geometry are a functional group, and two systems over a fixed atom set can be a genuine isomer claim with a stated falsifier. Low-overlap analogues from animal behaviour and cognitive science corroborate the source-versus-contents shape but do not settle any ML fact. No figure line returns an inventory, so the inventory remains a `gap` reported as unreachable rather than silence (Fig 13 :134). This framing rescues what is checkable without asserting a list of contents, a lossless recording, or a reconstructed world.

## ANCHOR

Verbatim figure text from `FRAMEWORK/reference/03-FIGURES_TEXT.md`; Tishby and Zaslavsky 2015; Zhang et al. 2016/2021; Elhage et al. 2022; Meng et al. 2022; Huh et al. 2024; Tolman via *Goals and Habits in the Brain* 2013; Loftus via APA; the eight essays. No model was run and no measurement was taken.

## FIGURE CENSUS

Fig 3 (dependency order, link with no instrument), Fig 4 (lossy transform, recording versus method), Fig 6 (import, wall, convergence), Fig 8 (convergent derivation versus adopted import, no proof of absence), Fig 9 (union unbundling, describe before looking, shape not answer), Fig 12 (isomer, functional group, flat formula, bonds), Fig 13 (set closed / arrangements not, different routes, unreachable is a verdict), Symbols (slot, residual, ground). Strains after re-census: none. The apparent convergence-versus-source conflict was dissolved by assigning each claim to a different object.
