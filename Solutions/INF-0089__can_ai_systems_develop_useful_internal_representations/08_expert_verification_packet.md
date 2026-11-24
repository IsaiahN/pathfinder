# Expert verification packet: causal representation from observational data alone

**What this is:** a shape claim in a form a causal representation learning researcher can check. Mode, derivation and refuters are stated before the conclusion, so a reader knows what to look for and what would settle it.

**Mode: `specified` on the domain verdicts, `general` on the structural shape. Not `grounded`.** No intervention reading was taken and no empirical result is asserted as settled here.

**Status of this packet:** a simulated derivation checked for internal consistency against the figures, not a ground reading. It cannot settle the question it reports on.

## 1. The claim, in one paragraph

The question bundles four conditions that must be kept separate. Causal direction is carried by an ordered bond, not by the ingredients of a joint distribution, so fitting observational data does not by itself give a causal representation. A frame searching inside a closed library adds no atom, so a direction atom not already held cannot be found by more passive data; the verdict on that condition is a `gap`, not a universal impossibility. Usefulness is settled at the ground by an intervention or a downstream decision, never by a score the model produces for itself. The only operator that moves the wall is import, and the positive identifiability results in the literature all pay that price (auxiliary variables, environment labels, time order, interventions). The framework returns the shape any answer must have, four refuters written in advance, and the instruments that would close it. Which latent variable is causal stays open until the ground pays.

## 2. Three checkable sub-claims

### C1 - framework-internal; checkable by reading Figures 12 and the Operators table
- **Statement:** a directional and refusable causal claim requires ordered bonds and a unary negation. A vocabulary that holds only ingredient statistics can name states and dependences but cannot name a route or refuse a claim.
- **Source, verbatim:** Fig 12 :5 "A set of ingredients is not one. The bond is the rest of the information, and it is the half nothing was recording." Fig 12 :111 "A vocabulary without bonds can name a state and cannot name a route to one." Operators table :57 "a refutation is a negation, which is why a vocabulary without it can only accumulate"
- **Refuter:** exhibit a directional, refusable causal claim in a vocabulary with only symmetric bonds and no negation, and show it still distinguishes cause from effect and can be refused. If that succeeds, C1 is wrong.
- **Mode:** `general`, triangulated across Fig 12 and the Operators table (low overlap: composition pricing versus operator tests).

### C2 - framework-internal; checkable by reading Figures 6, 8 and 13
- **Statement:** in a closed frame with no imported atom and no ground contact, the causal-direction atom is unreachable in closure(Γ). The verdict is `gap`, not "impossible in the world", because a search that finds nothing proves nothing and underivable is not unknowable.
- **Source, verbatim:** Fig 6 :21 "MINT composes inside the closure and can never add an atom." Fig 8 :32 "Closure is idempotent. Composing inside a closed set never leaves it, so no search, however long, adds an atom. This one is definitional: it is what closure means." Fig 8 :39 "So a search that finds nothing is never a proof of absence." Fig 13 :134 "Unreachable is a verdict here, not a silence,"
- **Refuter:** derive a direction term in closure(Γ) from passive observations alone, with no imported atom and no new instrument, and show it predicts unseen interventions above a correlation baseline. That breaks the idempotence claim.
- **Mode:** `specified`, triangulated across Fig 6 (operator) and Fig 8 (set structure).

### C3 - verification-facing; checkable by a researcher against their own benchmarks
- **Statement:** "useful" is settled at the ground, and frame-internal scores cannot settle it. Observations are the habitat; an intervention outcome or a downstream decision is the anchor.
- **Source, verbatim:** Fig 1 :23 "The ground enters as the only metric." Fig 1 :27 "They are frame-internal. A frame cannot score itself with a quantity it also produces." Fig 11 :73 "The habitat is not the ground. The habitat is where actors come from and it updates; the ground is what settles, and it does not."
- **What to check:** in a claimed causal representation result, identify the quantity that declares success. If it is reconstruction error, disentanglement score or compression, ask what outside ground was ranged against it. If the answer is "the same benchmark", the score is frame-internal.
- **Refuter:** show a frame settling "useful" with a metric it produces itself, where the score stays stable across an intervention that changes the ground outcome. If usefulness survives disagreement with the ground, C3 is wrong.
- **Mode:** `specified`, triangulated across Fig 1 (metric rule) and Fig 11 (capability locus).

## 3. What is explicitly not claimed

- Not that causal representation learning from observations is impossible in the world. The barrier is conditional on a closed Γ, no import and no ground contact.
- Not a name for any causal latent. Which variable is causal is paid for by the ground, not by the framework.
- Not that reconstruction loss, disentanglement scores or compression are evidence for causality.
- Not that more models or more data alone supply the missing atom. Agreement compounds, evidence does not (Fig 7 :13).
- Not that agents generally cannot learn from observation. The claim is about contact with a ground, not about intelligence in the abstract.
- Not `grounded`. No measurement was taken in this derivation.

## 4. Provenance

- Question: Information Theory.txt line 108, section 9, ID INF-0089. Restated as an effect in `01` §0.
- Figure text extracted verbatim from the 13 figures plus the Operators and Symbols tables: `FRAMEWORK/reference/03-FIGURES_TEXT.md`. Cite as `Fig N :line`.
- Canonical usage rule: `FRAMEWORK/reference/FIGURES_README_canonical.md`; metalaw reading: `FRAMEWORK/reference/60_FIGURES_AS_METALAWS.md`, 2026-11-22.
- Eight essays by Isaiah N, 2026-08 to 2026-11, mapped in `05_what_shape_means.md`.
- World sources actually opened: Schölkopf et al. 2021, Khemakhem et al. 2020, Meltzoff et al. 2012, Schulz et al. 2007, Wikipedia Causality and Causal inference. Author, venue, year, accessed date and quote for each are in `10_source_ledger.csv`.
- This packet compiled 2026-11-23.

## 5. What would settle it

A source-discriminating instrument, not a further argument. From *The Hard Problem is About Source*: an instrument that reads green "cannot comment on the source"; the spectrometer resolved it. Here:

1. **Intervention test:** two observationally equivalent graphs presented to the learned representation; intervene on the putative cause; does the representation's predicted effect track the intervention outcome?
2. **Temporal discriminator:** does performance fall to chance when cause and effect are reversed, as Meltzoff et al. observed in children?
3. **Import audit:** for each positive identifiability result, record the imported assumption with provenance. A result with no recorded import and no ground contact would reverse C2.
4. **Standing falsifiers:** those in `01` §4, in particular reachability of the direction atom with no import, and settlement by a self-produced metric stable across ground change.

## 6. What an expert can check in twenty minutes

1. Read Fig 12 :5, :111 and Operators :57 (three short passages). Does C1's bond claim match the figure's own definition?
2. Read Fig 6 :21 and Fig 8 :32, :39 (three short passages). Is the `gap` verdict the honest reading, or does the framework actually assert impossibility?
3. Name one instrument in your own field that would distinguish two observationally equivalent graphs without an intervention, or say why none is possible. That determines whether the import claim is a barrier or a measurement gap.
4. Take one positive identifiability result you know well and name its imported assumption. If you cannot find one, C2 is in trouble.
5. Send the refutation. A failure is more useful to me than an endorsement.
