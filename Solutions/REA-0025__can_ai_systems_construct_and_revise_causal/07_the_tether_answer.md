# The Tether's answer: can AI systems construct and revise causal models through intervention?

**Mode: `specified` on the shape and on the per-domain verdicts, `general` on the structural rules. Not `grounded`.** This is a simulated derivation checked against the figures (`05_what_shape_means.md` §5), not a ground reading. It cannot settle the capability of any named AI system.

## 1. The residual it answers

An agent perceives and predicts but may or may not act. Observation supplies co-variation and temporal order, which support association and sequence. Intervention supplies a changed world, which is the only input that can discriminate an ordered production relation from a prediction that merely fits. The question bundles two verbs and one input source: construct, revise, and intervene rather than observe. Fig 9 :54 requires a bundle to be unbundled before it is searched, so the three are answered in separate domains below and never averaged.

## 2. One loop per domain, verdicts kept separate

**D1, the control loop. Verdict: intervention is structurally required; triangulated.**
Fig 1 :9 "perceive · plan · act · predict" and Fig 1 :23 "The ground enters as the only metric." Acting is in the loop, so an observation-only system runs an incomplete loop. A global prediction score near zero can coexist with one live causal slot (Fig 1 :13), and Fig 1 :28 throws away the locating signal if the gap is averaged. So the answer to "rather than observation alone" is that observation alone is not a complete loop. Refuter: show that the action is frame-internal bookkeeping.

**D2, causal composition. Verdict: cause is an ordered bond, intervention is its discriminator; triangulated.**
Fig 12 :77 "A produces B; B did not exist before" is production, an ordered bond. Fig 12 :111 "A vocabulary without bonds can name a state and cannot name a route to one." Two graphs over the same variables are different substances when the bond differs (Fig 12 :117). Observation cannot select among them unless an assumption is imported; intervention can. Refuter: derive the ordered bond from a symmetric one without intervention or import.

**D3, the revision operator. Verdict: revision is negation, not reweighting; triangulated.**
Fig 5 :53 "refuted: a term we hold is wrong; a term is owed that says so" and Operators table :58 "a refutation is a negation, which is why a vocabulary without it can only accumulate". Refusal adds a term and removes the held term's standing to be composed over, so the reach falls while the record grows (Fig 6 :42). A posterior that shifts but never refuses is correction, not revision. Refuter: show standing withdrawn with no refusal term.

**D4, the habitat of capability. Verdict: the capacity is agent and habitat; single-source for the figure, with low-overlap world corroboration.**
Fig 11 :39 "And capability is a property of agent-and-habitat, never of the agent alone." Fig 11 :40 "A system cannot be made more capable by improving the agent in isolation. An improvement that does not change contact changes nothing, however much it improves." A model with no way to act on a habitat has no intervention channel. The psychology sources corroborate from a different field; the ML sources instantiate the loop. Refuter: an agent-only change that moves the ground.

**D5, verification of the claim. Verdict: agreement is not a witness; triangulated.**
Fig 2 :35 "Alignment is triangulation, not negotiation. A mirror cannot correct you." and Fig 2 :40 "disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool". This solution's second seat shares its evidence pool, so it is not corroboration. Only a ground reading decides.

No verdict above is averaged with another. D4 is explicitly weaker in source status than D1 to D3.

## 3. What the answer is, in one shape

A system that can do this has the following form. It tracks a residual per object slot rather than a global average; its loop includes acting as well as perceiving; it ranges the residual against a ground that does not change when the system argues with it; it composes causal claims with an ordered production bond that intervention can discriminate from association; it can refuse a held claim so that the claim loses standing to be composed over; and it is assessed as an agent together with the habitat it can act on, not as a standalone model. The framework returns this shape and stops. It does not name an architecture, a benchmark, or a system, because Fig 9 :32 gives "you get a kind of thing, never the answer itself".

World sources show that pieces of this shape have been built. Interventional equivalence classes are finer than observational ones (Hauser and Bühlmann 2012), active methods choose which variable to intervene on (He and Geng 2008), reinforcement-learning agents learn intervention policies (Méndez-Molina et al. 2022, Sauter et al. 2024), and children select informative interventions (Sobel and Sommerville 2010). These are instances and corroboration, not the verdict, and six of them share one evidence pool.

## 4. What it explicitly does not say

- Not "yes, and here is the system". No architecture is derived by the figures.
- Not "observation is useless". Observation supplies the slots and the first residual; it is the sufficiency claim that is refused.
- Not that every apparent structure update is a revision. Reweighting without refusal is not.
- Not that an imported functional-form assumption is free. Fig 6 :25 "An import adds no atom to the world." It buys access, at a cost.
- Not that a synthetic benchmark result demonstrates capability. Fig 11 :70 "A test harness is a substituted habitat. Which is why a synthetic solve proves wiring and never capability."
- Not grounded. No measurement was taken and no system was tested.

## 5. What would settle it, and the honest stop

The ground settles it, not agreement. A source-discriminating reading would have to show one of the following: a system acting on an unauthored habitat and closing a causal slot that observation left open, with the slot and its residual specified before the run; a direct demonstration that a held causal relation lost standing to be composed over through a refusal; or a counter-reading in which an agent-only change moved the anchor without changing contact, which would break the shape. The existing refuters are written in `01_figure_grounded_audit.md` §4.

The stop is honest because the instrument is missing, not because the search was tedious. Fig 8 :39 "So a search that finds nothing is never a proof of absence." I searched and found no figure line naming a system and no world source that tests the full shape in an unauthored habitat. That is a `gap` at the ground, reported as a verdict. Fig 13 :134: "Unreachable is a verdict here, not a silence".

## 6. One-paragraph version for outreach

> The framework does not pick a winner among AI systems. It says that intervention is not an optional extra: acting is already a first-class operator in the loop, and a system that only observes cannot range a per-slot residual against a ground that does not move. Cause is an ordered production bond, which intervention can discriminate from a prediction that merely fits, and revision is a refusal, not a reweight, so a revised model loses reach where a merely reweighted one does not. Capability belongs to the agent and the habitat it can act on together, so a benchmark solve proves wiring rather than capability. What is offered is the shape any candidate answer must have, the refuters written in advance, and the instruments that would close it. No system is named, and nothing here is settled by measurement.

## 7. Cost, undoability, reversal

- **cost if wrong:** bounded and locatable. The packet names its mode and its refuters before the conclusion, so an error can be found rather than felt. The real cost is spending a checker's independence by sending a theory before a residual (Fig 10 :42 "A verifier that can reconstruct the claim cannot verify it."). That cost is avoidable and is the reason the two-stage offer exists.
- **undoable:** yes. The per-domain verdicts are independent, so the habitat claim can be withdrawn without touching the bond claim, and the shape can be superseded by a corrected packet. No primitive has to be withdrawn.
- **reversed by:** a ground reading, not agreement. An unauthored-habitat demonstration, a genuine refusal test, or an agent-only change that moves the ground would each move a specific domain. Prestige and agreement are not such instruments.
