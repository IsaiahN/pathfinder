# The Tether's answer on few-shot robust learning

**Mode: `specified` on the per-domain claims, `general` on the structural shape, `gap` on the winning
architecture. Not `grounded`.** This is a shape and a route, not a result. Simulated derivation
checked against the figures (`05_what_shape_means.md` section 6), not a ground reading.

## 1. The residual it answers

A learner's residual is `R = |Γ(b,a) − o′|` per slot `s`, never a single global number. Fig 1 :19:
*"The residual is indexed by object slot, not aggregated."* The question asks how to drive that
per-slot residual down and keep it down after only a few examples. That is a union of four conditions
with different anchors, not one problem with a single lever (Fig 9 :54, :57). D1 support and
settlement, D2 the head start, D3 habitat contact, D4 independent checking. One lever clears where a
single condition holds and leaves the intersections standing.

## 2. The shape

1. **Data efficiency is first a support question, per slot.** Most slots carry no live signal after
   few examples. Fig 5 :33: *"The three guards are a product, not a checklist."* Fig 5 :41:
   *"Any one of them at zero stops the mint entirely. Which is why a system that is minting nothing may have nothing wrong with its minting."* An average accuracy throws away the only signal
   that says where to look (Fig 1 :22).

2. **Few examples select among held atoms; they do not supply new ones.** Fig 6 :21:
   *"MINT composes inside the closure and can never add an atom."* Fig 4 :12: *"a head start, never a
   recording"* and Fig 4 :24: *"downward: something that makes the next search cheaper. Never a replay
   of what worked once."* A prior, an inductive bias or a meta-learned initialization is a **head
   start**. What descends is a method; a replay of one success is a recording and makes the next
   search no cheaper.

3. **Robustness is agent-and-habitat contact.** Fig 11 :39: *"So the answerable question is not what
   intelligence is, but what makes a system capable. And capability is a property of agent-and-habitat,
   never of the agent alone."* Fig 11 :70: *"A test harness is a substituted habitat. Which is why a
   synthetic solve proves wiring and never capability."* A few-shot benchmark tests wiring; a
   robust learner keeps a channel to a ground that does not decay (Fig 10 :24).

4. **Absence and budget are different failures.** Fig 6 :27: *"Which is why some unreachability is
   depth and some is genuine absence, and from inside the frame the two look the same."* If the atom
   is absent, import is owed; if it is present but unfound, the remedy is more independent search,
   not more data (Fig 8 :32, :39). Simply adding examples confuses the two.

5. **Agreement inside one evidence pool cannot settle it.** Fig 2 :35: *"Alignment is triangulation,
   not negotiation. A mirror cannot correct you."* Fig 2 :31-32: *"Independence is what makes
   agreement mean something."* Fig 8 :45: *"Two frames together reach what neither reaches alone."*
   Independence is one quantity read twice: it governs both the union surplus and the value of
   agreement (Fig 8 :47).

6. **The winning architecture is not named.** Fig 9 :32: *"you get a kind of thing, never the answer
   itself."* Fig 13 :134: *"Unreachable is a verdict here, not a silence,"* The framework returns
   the shape an answer must have and the instruments that would close it, not the name of the method.

## 3. What it explicitly does not say

- Not "use meta-learning" or "use a Bayesian prior" or "pretrain longer." Those are bindings from
  the ML frame, licensed by a ground reading or a provenanced import, not derived by the figures.
- Not that more data never helps. Sample count is a budget filter, not a witness (Fig 9 :60). It
  can fix an unreachable-at-budget failure and cannot fix an absent atom.
- Not that a high few-shot benchmark score establishes robustness. A harness proves wiring, not
  capability (Fig 11 :70).
- Not that an average score locates the failure. The residual is per slot (Fig 1 :19, :22).
- Not `grounded`. No measurement in this derivation settles any of the six points.

## 4. What would settle it: the ground

A ground reading, not more argument. From *The Hard Problem is About Source*: a reading "cannot
comment on the source"; several mechanisms can produce the same few-shot score, so the score is a
projection. The corresponding discriminators are:

- **Per-slot audit:** report the residual on each held-out slot, not a mean. Does one live slot
  remain while the average is near zero (Fig 1 :13)?
- **Habitat substitution:** move the task to a different distribution with a non-updating ground.
  Does `R` stay small, or was the original result wiring (Fig 11 :70)?
- **Atom probe:** can the required atom be found in `Γ` and traced by provenance? If absent, did an
  import occur with a source gate and a shadow test (Fig 8 :52)?
- **Independent frame:** does a checker whose evidence pool differs predict the ground result
  (Fig 2 :31, :35, :40)?
- **Standing refuters:** the six in `01` section 4, written before this answer.

## 5. The honest stop

**Unreached, not unreachable.** The missing thing is a source-discriminating instrument that can
tell a head start from a replay, a held atom from an import, and wiring from capability, at the slot
level. It is characterized in effect terms but not held. *"Indiscernibility is not identity"* (canonical
README). The lineage is recorded so the stop is checkable. A verdict of `gap` here is a verdict,
not a silence (Fig 13 :134).

## 6. One-paragraph version for outreach

> The Tether does not name a winning few-shot algorithm. It says that data efficiency is first a
> per-slot support question, so an average accuracy hides the live slot; that a few examples select
> among atoms the learner already holds, supplied as a head start that makes the next search cheaper
> rather than as a replay of one success; that robustness is a property of learner and habitat, so a
> benchmark harness proves wiring and not capability; that an absent atom needs an import while an
> unfound atom needs more independent search; and that agreement inside one evidence pool cannot
> settle any of this. What it offers is the shape any answer must have, six refuters written in
> advance, and the instruments that would close it. The slot for the specific method stays open
> until a ground settles it.
