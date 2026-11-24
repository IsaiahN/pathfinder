# Union, order and analogues: the supporting derivation

**Mode: `specified`.** This is a simulated derivation checked against the figures, not a ground reading (see `05_what_shape_means.md` §7).

## RESIDUAL

The headline question reads as one yes/no. The census in `01` shows it is a union of conditions and a chain of dependencies, so a single verdict would be a category error. Two supporting questions are owed: (1) what is the order of the chain, and where does it break for a model; (2) are the candidate mechanisms (calibration, selective prediction, conformal prediction, human feeling-of-knowing) variants of one thing, or different compounds?

## DOMAIN CENSUS

Atoms held: the six substrate terms, residual R, anchor, frame, closure(Γ), bond set plus negation. Operators: seven bonds and ¬. No new primitive is available without import. The world mechanisms are bindings from world frames onto these atoms, not new members of the set.

## DERIVATION

### Q1: Is the question a partition or a union?

- Fig 9 :54: "And when the split lands on a union rather than a partition, unbundle before you search again."
- Fig 9 :57: "a case in two conditions is not a harder case of either".
- The two conditions are (i) detect a live residual, (ii) refuse the answer. A model can satisfy one without the other. A model that detects an anomaly but still answers has not "known when it does not know". A model that refuses at random has not either.
- Fig 9 :55-56: "A bundled problem is usually a union of overlapping conditions, not a list of separate ones. A single lever clears the region where only one condition holds and leaves the intersections standing, because the second condition still binds."
- ⇒ The lever "raise the confidence threshold" clears the region where only calibration holds and leaves the refusal condition standing. This is why threshold tuning alone does not close the residual. Triangulated (Fig 9 + Operators negation).

### Q2: What order is the dependency chain, and where does it break?

Fig 3 :20: "The chain is ordered by dependency, not by importance." The five links were listed in `01` §1. Applied to a model:

| link | model analogue | instrument exists? |
|---|---|---|
| 1 perception | can read its own output and a residual signal | yes |
| 2 vocabulary | has terms for "uncertain", "abstain", "wrong" | yes, verbally |
| 3 objective | can say what would count as progress in its own terms | **no obvious instrument** |
| 4 planning | route to an anchor or peer frame | yes, engineering |
| 5 learn and carry | calibrate and reuse | yes |

Fig 3 :25-27: "The link between them, having terms for what a situation offers and being able to say what would count as progress, has neither, so it attracts the least attention and the fewest instruments. A link with no instrument is not a link that works. It is a link nobody has looked at."

A model can say the words "I am uncertain" (link 2) without link 3 being present, because there is no instrument that distinguishes a grounded "I am uncertain" from a fluent one. This is the observer's defect: Seat Map :275: "A new instrument's first output is a claim about the instrument, not about the system, and a known-positive fixture proves sensitivity, never specificity." A verbalised uncertainty is a sensitivity fixture, not a specificity test.

- **Falsifier, written before the run:** an instrument that distinguishes grounded from ungrounded "I am uncertain" within the model alone, with no external labels, refutes link 3 as the break point.

### Q3: Are the candidate mechanisms isomers?

- Fig 12 :117: "isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."
- Fig 12 :124: "functional group. A substructure whose presence fixes the outcome. The group says what kind; the qualifier says which member."

Write the three engineering mechanisms as molecules over the same atoms:

| mechanism | molecule | bond character |
|---|---|---|
| calibration | prediction ⟶ score ⟶ held-out label (fit) | ordered production + comparison |
| selective prediction | score ⋛ threshold ⟶ answer or "don't know" | comparison + sequence + negation-like refusal |
| conformal prediction | score + calibration quantile ⋛ threshold ⟶ prediction set | conjunction + comparison |

They share the atoms {prediction, score, anchor, threshold, refusal} but differ in the bonds. Under Fig 12 they are **isomers**: same atoms, different arrangement, different substance. This matters because a result from one cannot be assumed to transfer to another just because they are described with the same vocabulary of "uncertainty." As the record writes them they are not the same term.

The weaker claim, which survives without the isomer reading, is that they share a **functional group**: each is a `score → comparison → decision` structure. Fig 12 :124: "the group says what kind; the qualifier says which member." Safe to assert: the functional group. Stronger, and checkable: the isomer claim, with the atoms held fixed.

- **Falsifier:** if one mechanism requires an atom the others do not (for example conformal prediction's exchangeability assumption, which has no counterpart in plain temperature scaling), the isomer claim fails and the functional-group claim stands instead. The exchangeability assumption is a real candidate; this is recorded as an open test, not a hidden exception.

### Q4: Is human feeling-of-knowing an analogue or an instance?

- Fig 8 :50-52: "Convergent derivation and adopted import look identical in the contents. Only the record of where each came from separates them, and the surplus lives only where the closures differ."
- Koriat (1993, 2000) derives, from human experiments, that feeling-of-knowing is an inference from accessible cues and "challenge[s] the view that FOK is based on a direct, privileged access to an internal monitor."
- The framework derives, from Fig 1 :27 and Fig 8 :34, that a frame cannot score itself with its own output or certify its own limit.
- These are **convergent derivations** from different closures (cognitive science and the framework), not an import. By Fig 8 :50 that is the strongest kind of agreement, but only if the provenance is recorded. It is recorded here and in `10_source_ledger.csv`.
- The two Koriat papers are one field and share an evidence pool, so they count as one witness on the human side, not two.

### Q5: Does a settled calibration become an atom for the next level?

- Fig 12 :104: "A settled molecule becomes an atom for whatever composes over it. So irreducible is a fact about a level and never about the world."
- A calibration that has been settled against a ground can be composed over: it becomes a component of a selective predictor, which can itself be composed over by a deployment policy. This is recursion, not import.
- Settling is necessary and not sufficient (Fig 5 :69-70): a settled calibration may not be usable at the next level if the arrangement does not carry over. A calibration on one distribution that does not transfer is the named failure. It is measured, not assumed. Fig 4 :30: "So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked."
- **Falsifier:** a settled calibration that composes over without loss across the distribution shift would remove the need for a measured round trip at that boundary.

## CONCLUSION

The question is a **union** of detection and refusal, unbundled before search. Its dependency chain breaks at link 3, the objective, because a verbalised "I am uncertain" has no instrument that distinguishes a grounded one from a fluent one. The engineering mechanisms are **isomers** over a shared atom set, with a weaker and safer **functional-group** reading; their exchangeability or calibration assumptions are the bond differences that decide which reading holds. Human feeling-of-knowing is a **convergent derivation** from a different closure, not an import, and counts as one witness. A settled calibration becomes an atom for the next level only under a measured round trip.

This framing keeps what is checkable and refuses what is not: no claim is made about how a model implements negation, what a unary refusal costs, or whether any deployed system reliably does this out of distribution.

## ANCHOR

Verbatim figure text extracted from the canonical local SVGs this session; THE_FORMULA.md; the Seat Map; the six world sources in `10_source_ledger.csv`. No measurement was taken for this solution.

## FIGURE CENSUS

Fig 3 (dependency order, middle break), Fig 4 (round trip and gap), Fig 5 (settling necessary not sufficient), Fig 8 (convergent derivation versus import), Fig 9 (union versus partition, unbundle), Fig 12 (isomer, functional group, settled molecule becomes atom, level-relative irreducibility), Operators (negation), Seat Map (observer's defect). Strained after re-census: the exchangeability atom in the isomer test, named and left open.
