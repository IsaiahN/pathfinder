# Isomers, order and the round trip in cross-modal transfer

**Mode: `specified` on the structural claims, `general` on the bond and round-trip rules.** This is a simulated derivation checked against the figures, not a ground reading (see `05_what_shape_means.md` section 7).

## RESIDUAL

Two modality-specific terms, φ_vision and φ_touch, are settled in their own frames. Are they (1) isomers over a shared atom set, (2) members of a functional group, or (3) one term held by convergence? And what does the round trip up to a shared abstraction and back down to a specific modality lose?

## DOMAIN CENSUS

Atoms held: the six of Fig 13 (space, time, energy, spectrum, gradient, network) as the substrate, plus whatever representation atoms the ML frame has already settled (features, bonds between features, an alignment). Bonds held: the seven of Fig 12, including → sequence, ⋛ comparison and ≡ identity. No new primitive is available without import. The operand of the transfer is a molecule, not an atom list.

## DERIVATION

### Q1 - Isomer or functional group?

- Fig 12 :117: **"isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."**
- Fig 12 :124: **"functional group. A substructure whose presence fixes the outcome. The group says what kind; the qualifier says which member."**
- Fig 12 :46: **"A bond is the typed relation between two operands. There are seven, they are not interchangeable, and which one holds is not recoverable from the operands."**

Reading the two terms as they are usually reported, φ_vision = `{edges, colour-statistics, object}` and φ_touch = `{pressure, texture, object}`. They share only the object-level qualifier. By Fig 12's definition they are **not isomers**; they are two members of the same **functional group**, where the shared substructure is `modality-specific features → object term` and the qualifiers pick which modality.

The stronger reading: if both are written over a full shared atom set `{modality-specific features, shared alignment, object term, task objective}`, differing only in which features bond to the shared alignment, then they **are** isomers, same atoms, different bond, different substance. That is the claim worth testing, because it predicts that swapping the bond changes behaviour even though the formula (the atom list) looks identical.

- **Falsifier, written before the run:** if either term can be written without an atom the other requires (for example, a visual object term with no shared alignment, or a tactile term with no task objective), the isomer claim fails and the functional-group reading stands.
- Status: `specified`, triangulated (Fig 12 :117 + :124 + :46 for the bond), with the fixed-atom condition named as live.

### Q2 - Convergent derivation or adopted import?

- Fig 8 :50-52: **"Convergent derivation and adopted import look identical in the contents. Only the record of where each came from separates them, and the surplus lives only where the closures differ."**
- Fig 8 :50: *"Two frames can hold the same atom by convergence, reaching it separately, which is corroboration at maximum independence."* (line 50)
- Fig 2 :31-32: *"Independence, between two frames, is how little they draw on the same evidence."*

If vision and language models independently arrive at the same discrete cluster for the same semantic concept (Liu et al. 2022), that is convergent derivation at maximum independence, and the shared atom is genuine corroboration. If they arrive at it because they were trained on the same paired corpus (CLIP), the surplus lives in the differing closures only if the two frames actually differed in evidence. The contents cannot decide it.

- **Falsifier:** show that the two frames drew on the same evidence and still produced a surplus that neither could derive alone. That would break the independence condition and force a re-census of the surplus.
- Status: `specified`, triangulated (Fig 8 + Fig 2), with the provenance requirement carried from F4.

### Q3 - The round trip R_T: what is lost going up and coming down?

Fig 4 :27: **"The transform between scales loses information, and that is the point."**

Fig 4 :30: **"So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked."**

Fig 4 :31-32: **"The gap is not an error to eliminate. It is the measurement of what the coarser description cannot hold, and it is the only honest report of how much was given up."**

- **T_A, going up:** carry the two modality-specific settled molecules to a one-sentence shared abstraction. Result: *a term that reduces a per-slot residual in either modality by bonding modality-specific features to a shared object term under a task objective.*
- **T_E, coming back:** put that abstraction into a specific tactile situation. Result: *reweight the pressure and texture features against the object term and the task objective.*
- **R_T = gap(x, (T_E ∘ T_A)(x)).** The gap is what the abstraction cannot hold:
  1. **The bond type.** The abstraction says "bond features to object." Coming down, it does not say whether the bond is conjunction (+), sequence (→) or production (⇒). A tactile sequence of pressures and a visual conjunction of edges are different substances.
  2. **The per-slot residual.** The abstraction cannot hold which modality-channel is failing; coming down it suggests more of the same training (effort above the break, Fig 3 :29-30).
  3. **The provenance.** The abstraction cannot say whether the shared atom was reached by convergence or import; coming down it treats a name as a derivation.
  4. **The ground.** The abstraction names a task objective, but not the non-updating anchor that would settle it in the new habitat.

This gap is not an error to eliminate. It is the measurement of what the coarser description cannot hold, and it is why the outreach packet sends the generator and the refuter, not the one-sentence version.

### Q4 - Dependency order and where the chain breaks

Fig 3 :19: **"Optimising a link that already works cannot rescue one that does not."**

Fig 3 :27: **"A link with no instrument is not a link that works. It is a link nobody has looked at."**

The chain is perception → vocabulary → objective → planning → learn and carry. Cross-modal work is strong at perception (a reading exists per modality) and vocabulary (a shared embedding), and weak at the objective link: what would count as progress in the target frame, stated in effect terms both frames can check. Fig 3 :25-27 names this as the link that attracts the least attention and the fewest instruments. A cross-modal benchmark is usually a perception test, so it cannot diagnose a broken objective link. A reading taken below the break is a reading of nothing (Fig 3 :22-23).

### Q5 - The F transform strain

The Symbols table (line 81) defines F: *"The map between allocentric and egocentric at one scale. Distinct from T_A and T_E, which run between scales. Cannot be run without a pose."*

Cross-modal translation looks like a between-frames transform at one scale, so "cannot be run without a pose" is suggestive: an alignment between frames is required. But F is defined for the allocentric/egocentric case. **Re-census:** F is excluded as a verdict witness. What survives, already governed by Fig 2 :29 and Fig 6 :30, is the shape *an alignment must exist and be describable in effect terms*. Recorded as a live, single-source strain in F10 of `01`; not hidden.

### Q6 - Two currencies, and why a benchmark score is not a settlement

Fig 12 :125-126: **"A composition costs in two currencies, and they do not add. Bits price the description. Actions price finding out whether it holds."**

A compact shared representation is cheap in bits and may be expensive in actions to settle against a real habitat; a verbose modality-specific rule is expensive to describe and may be cheap to refute. Neither figure predicts the other, so both must be read. A leaderboard reports one currency (usually accuracy on a fixed set) and silently drops the other (the actions needed to test transfer in a new habitat). Summing them is the error Fig 12 names, not the fix.

## CONCLUSION

The two modality-specific terms are members of a **functional group** as usually reported; they are **isomers** only under the stronger fixed-atom reading, with a stated falsifier. A convergent shared atom is corroboration at maximum independence, while an adopted import is only a surplus where the closures differ; the record decides which. The round trip R_T is non-zero in at least four named ways, and that gap is the honest report of what the shared abstraction cannot hold. The chain usually breaks at the objective link, where no instrument exists. F is a live strain, excluded from the verdict. No new primitive, no import that moves the wall, and no name for the winning representation is needed for any of this.

## ANCHOR

Verbatim figure text extracted from `FRAMEWORK/reference/03-FIGURES_TEXT.md` this session; the two framework essays opened in full; no measurement was used.

## FIGURE CENSUS

Fig 2 (independence, anchor), Fig 3 (dependency order, middle link), Fig 4 (membrane, round trip, gap), Fig 6 (effect terms, import), Fig 8 (convergence versus import), Fig 11 (valence relative to residual), Fig 12 (isomer, functional group, bond, two currencies), Fig 13 (six held atoms), Symbols table (F transform). Strained after re-census: F only, named in Q5 and F10 of `01`.
