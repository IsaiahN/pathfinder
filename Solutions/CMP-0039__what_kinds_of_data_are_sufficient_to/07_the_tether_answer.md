# The Tether's answer: what data suffice to identify causal influence under feedback, confounding and hidden variables?

**Mode: `specified`, not `grounded`.** This is a shape and a route, not a result. Simulated derivation checked against the figures (`05_what_shape_means.md` section 6), not a ground reading.

## 1. The residual it answers

An observer has a joint distribution over variables in a system with feedback, a hidden common cause, and unmeasured variables. The observer wants to settle "X causally influences Y". The problem is not estimation inside a fixed model; it is that the data do not carry the typed relation that would make the claim a verdict. Fig 12 :5: "A set of ingredients is not one. The bond is the rest of the information, and it is the half nothing was recording." The three obstructions form a union compound (Fig 9 :55: "A bundled problem is usually a union of overlapping conditions, not a list of separate ones"), so they cannot be fixed one at a time on the same dataset.

## 2. The shape: a four-part sufficient set

1. **An anchor.** Some variable must be set from outside the system, and the setting mechanism must not change when the system changes. Fig 2 :29: "An anchor is whatever settles the question and does not change its answer because of what any frame thinks. A measurement, an experiment, a counter, a market, a patient outcome. If it moves when you push on it, it is not an anchor." Randomized assignment and a surgical do-operation are the canonical instances. An "instrument" whose value is driven by the hidden confounder is not an anchor.

2. **Independent evidence.** The frames supplying data must not draw on the same hidden source. Fig 2 :31: "Independence, between two frames, is how little they draw on the same evidence." Fig 2 :40: "agreement about the world is worthless when the agreeing frames share an evidence pool." Ten datasets contaminated by one latent are one witness with ten names. Buy independence in proportion to the cost of being wrong (Fig 2 :42).

3. **Loop-resolving data.** Feedback must be represented as a cycle, not flattened into a longer chain. Fig 12 :121: "cycle. The output re-enters as input. The sign of the loop decides whether it closes, and a chain cannot close by construction." The data must carry a temporal asymmetry separating the passes of the loop, or an edge held severed by intervention. A single time slice cannot do it.

4. **An imported atom for the latent.** The unmeasured variable must be measured by a discriminating instrument or replaced by a design (multiple environments, valid instruments) in which its effect is not invariant. Fig 6 :14 names "the only operator that moves the wall"; Fig 6 :23: "No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs." The framework returns a shape for the missing operand, not a name.

Plus the **lineage condition**: provenance for each import, a pre-registered refuter, and a verifier that cannot reconstruct the claim (Fig 10 :42: "A verifier that can reconstruct the claim cannot verify it.").

## 3. What observational data alone can and cannot do

It can narrow the space. Fig 9 :32: "you get a kind of thing, never the answer itself." Two graphs inducing the same distribution are isomers (Fig 12 :117): "isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour." More rows describe the ingredients more precisely and leave the bond unrecorded (Fig 12 :5). Fig 6 :21: "MINT composes inside the closure and can never add an atom." So observational data are a **filter for the budget**, never a **witness for the verdict** (Fig 9 :60: "Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict.").

This is not a claim of eternal unknowability. A spectrometer-style instrument splits the class; Fig 6 :29 describes the inward instrument, extended from one already returning something, and Fig 6 :30 the outward cast in effect terms. The honest report is: narrowed now, split when a discriminating atom is imported.

## 4. What it explicitly does not say

- Not that a large sample is sufficient. Sample size is a budget filter.
- Not that a significant coefficient, a low p-value, or a good cross-validation score is an anchor.
- Not that any named latent is *the* latent. "A shape, not a name" governs the missing slot.
- Not that all causal systems require the same four data properties in the same degree. The set is a shape; the ground decides each case.
- Not a universal identification algorithm. The framework returns what sufficient data must be like, not which estimator to run.
- Not `grounded`. No measurement here settles any pair X,Y.

## 5. What would settle it, the ground

A source-discriminating instrument, not a further argument. *The Hard Problem is About Source*: an instrument that reads green "cannot comment on the source"; "It was proven wrong not by argument, but by the arrival of a better instrument." Here the corresponding tests are:

- **Anchor test:** does the setting of the alleged intervention stay fixed when the system is pushed? If it moves, it is not an anchor (Fig 2 :29-30).
- **Independence test:** do the two frames share the hidden source? If they do, their agreement is the pool talking (Fig 2 :18-21).
- **Loop test:** does the data separate the two passes of the cycle, or is the sign unreadable (Fig 12 :121)?
- **Source test:** does a new instrument discriminate among the members of the equivalence class, as the spectrometer did for green?
- **Standing refuters from the audit:** a direction recovered from a joint distribution alone; an intervention confounded by the latent that still identifies; a cycle signed from one time slice.

## 6. The honest stop

**Unreached, not unreachable.** Which specific dataset suffices for a given X,Y depends on instruments that do not yet exist or have not been pointed at the right residual. Fig 8 :39: "So a search that finds nothing is never a proof of absence." Fig 6 :27: "Which is why some unreachability is depth and some is genuine absence, and from inside the frame the two look the same." The answer stops at the limit of the available instruments and records the lineage so the stop is checkable. "Indiscernibility is not identity."

## 7. One-paragraph version for outreach

> The Tether does not offer an identification algorithm and does not say that more data always help. It says that a joint distribution records the ingredients and not the arrangement, so observational data alone can narrow a system to a class of observationally equivalent structures but cannot pick one. Four properties are what sufficient data must have: an anchor, meaning a setting mechanism that does not update on the system; independence, meaning frames that do not share the hidden source; loop resolution, meaning time or intervention that separates the two passes of a feedback cycle; and an imported atom that measures or replaces the unmeasured variable, with its provenance recorded. The framework returns that shape, not a named instrument or a named latent, and it stops where the instruments stop. It writes its refuters in advance: a direction recovered from a distribution alone, a confounded "intervention" that still identifies, or a cycle signed from one time slice would each break the claim. What is offered is the shape any sufficient dataset must have, the falsifiers, and the tests that would close it.
