# Isomers, metamers and the order of the comparison

**Mode: `specified` on the isomer reading, `general` on union and dependency order.** This is a simulated derivation checked against the figures, not a ground reading (see `05_what_shape_means.md` section 8).

## RESIDUAL

Two models reproduce one pattern. What kind of thing are they relative to each other, and in what order must the comparison be run? Three questions are owed:

1. Are the two models **isomers**, **metamers**, or merely members of one **functional group** under Fig 12's definitions?
2. Is the comparison a **partition** or a **union**, and what is the dependency order of its links (Fig 3)?
3. What is the **round-trip gap R_T** between the figure-level shape and a concrete comparison protocol?

## DOMAIN CENSUS (supporting derivation)

Atoms and bonds are not named from the world; they are read off the comparison as the models themselves define them. For each model Γ_i: its atoms are the state variables, parameters, modules or entities it treats as primitives; its bonds are the typed relations it asserts among them (production, sequence, network edge, threshold). No new primitive is available without import.

The figure definitions used here:

- Fig 12 :117 *"isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."*
- Fig 12 :124 *"functional group. A substructure whose presence fixes the outcome. The group says what kind; the qualifier says which member."*
- Fig 12 :94 *"The arrangement is the substance."*
- Fig 12 :14 *"the ingredients are recorded and the arrangement is not"*
- Fig 13 :121 *"Different routes can arrive at the same substance."*
- Fig 13 :123 *"Two chains built from different links may compose functionally identical terms"*

## DERIVATION

### Q1 — Isomer, metamer, or functional group?

- **Isomer (strong form).** Both models are written over the same atom set and differ only in which bond arranges which atoms. Then Fig 12 :117 applies exactly: same atoms, different bond, different substance. The observed pattern is the flat formula in which the ingredients are recorded and the arrangement is not (Fig 12 :14). The difference is invisible in the fit and decisive in behaviour elsewhere.
- **Metamer (instrument term).** *The Hard Problem is About Source* gives this name to the general condition: several sources produce one reading. Metamerism is the observational relation; isomerism is its composition-theoretic form when a shared atom set can be written. Every isomer pair is a metamer pair at the current instrument, but not every metamer pair is an isomer pair.
- **Functional group (weak form).** The models share a substructure that fixes the outcome class but not the full atom set. Fig 12 :124: *"the group says what kind; the qualifier says which member."* In model-comparison terms, both might be `state -> structure -> state` maps (agent-based and equation-based implementations of the same qualitative dynamic), which puts them in one functional group without making them isomers.
- **Analogue, low overlap.** Wikipedia *Convergent evolution*: *"Convergent evolution is the independent evolution of similar features in species of different lineages."* Wikipedia *Multiple realizability*: *"the same mental property, state, or event can be implemented by different physical properties, states, or events."* Both corroborate the shape at different strata; neither decides the model pair.

**Falsifier, written before the run:** if the two models can be written over no common atom set and share no functional substructure, both the isomer and functional-group readings fail for that pair and the pair must be described only as behaviourally equivalent. Conversely, if the observed pattern actually determines the bond, the pair is not metameric and the whole question dissolves for that case.

### Q2 — What is the order of the union?

- Fig 9 :54 *"And when the split lands on a union rather than a partition, unbundle before you search again."* Fig 9 :57 *"What remains is smaller and it is also categorically different: a case in two conditions is not a harder case of either."*
- The conditions are C1 (pattern fit) and C2 (source identity), from `01` section 1.3. Their instruments differ: C1 uses fit scores on o'; C2 uses a discriminating bearing.
- Fig 3 :20 *"The chain is ordered by dependency, not by importance."* Dependency order: perception (can the instrument tell them apart? no) -> vocabulary (does either Γ have terms for the proposed intervention?) -> objective (state what counts as a discriminator) -> planning (design or locate it) -> learn and carry (record the method, not the occasion).
- Fig 3 :27 *"A link with no instrument is not a link that works. It is a link nobody has looked at."* The objective link is the one with no instrument in the usual workflow. Most effort lands above it where the fit measurements already exist (Fig 3 :29-30).
- **Falsifier:** a single intervention that clears both C1 and C2 at once, with no categorically different residue, on two independent grounds. That would show the problem was one hard partition, not a union.

### Q3 — What is the round-trip gap R_T?

The Symbols table defines R_T as `gap(x, (T_E ∘ T_A)(x))`, the gap between what was sent up and what came back down. Fig 4 :30: *"So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked."*

1. **Sent up (x):** the verbatim figure set, chiefly Fig 12 :117, :124, :14 and Fig 2 :40, :31.
2. **Abstraction (T_A):** the shorthand used in this folder's answer: "two fitting models are metamers; the difference is in the arrangement; a source-discriminating bearing is owed."
3. **Concretisation (T_E):** a concrete protocol for a particular pair: name the shared atoms, name the differing bonds, choose an intervention, predict divergent readings, run it.

**R_T is nonzero.** Three things the shorthand holds do not survive the trip back down:

- which atoms are genuinely shared between the two models (that is a domain fact, not a figure fact);
- whether a given intervention is answerable to a ground that does not move when the modelers argue (that is an anchor test, not a fit test);
- whether the difference is an isomer difference or only a functional-group difference (Fig 12 :117 versus :124).

One thing survives cleanly: a source-discriminating bearing is owed, and a fit ranking cannot supply it. That is the residue worth sending. R_T is not measured numerically here, because no ground reading was taken. It is recorded qualitatively as the enumerated set of dropped constraints. Treating "the formula is the condensed version of the figures" as identity would set R_T to zero and would be the dead-reckoning error Fig 4 :30 names.

### Q4 — Do the two currencies add?

Fig 12 :125 *"A composition costs in two currencies, and they do not add."* Fig 12 :126 *"Bits price the description. Actions price finding out whether it holds."*

A fit score prices bits: description length, parameter count, penalized likelihood. A discriminating intervention prices actions: runs, samples, cost of being wrong (Fig 2 :42). A model can be cheap to state and expensive to settle, or expensive to describe and cheap to refute. Summing them into one leaderboard is the error this names, not the fix. Fig 9 :60: *"Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."*

**Falsifier:** a validated criterion in which bits and actions are exchanged at a fixed rate across domains, with the exchange rate settled by a ground. None was found; the claim is held as `general` and unmeasured.

## CONCLUSION

The two models are **metamers** at the current instrument. If they are written over a shared atom set they are **isomers** under Fig 12 :117; if they share only a substructure they are members of one **functional group** under Fig 12 :124. The comparison is a **union** of fit and source identity, ordered by dependency (Fig 3), and it carries a nonzero round-trip gap between the figure-level shape and any concrete protocol. The two currencies, description and action, are held apart. The isomer reading rescues what is checkable without naming a winner or importing a new primitive.

## ANCHOR

Verbatim figure text extracted from the canonical local SVGs this session; the eight essays; the Stanford Encyclopedia entries and the Wikipedia pages listed in `04_links_and_distribution.md`. No measurement was used.

## FIGURE CENSUS

Fig 2 (anchor, independence, cost of wrong), Fig 3 (dependency order, middle link), Fig 4 (round trip R_T), Fig 8 (provenance, convergence versus import), Fig 9 (union, filters), Fig 12 (isomer, functional group, arrangement, two currencies), Fig 13 (different routes, honest stop), Operators (bond types), Symbols (R_T). Strains after re-census: none live. Scope narrowing S1 and census obligation S2 from `01` section 4 are recorded, not hidden.
