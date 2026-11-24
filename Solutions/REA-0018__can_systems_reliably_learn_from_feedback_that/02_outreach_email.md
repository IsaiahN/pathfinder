# Outreach draft - check the shape claim before deciding about the framework

**Use:** one-to-one, or as a cover letter attached to a submission through a public venue in `03_public_contact_points.csv`. **Not** for bulk send.

**Hard precondition:** do not send until the reader can see the refuter in the first paragraph. The stage-1 verdict must be recorded before any theory is shown.

---

**Subject:** One checkable claim about learning from sparse, inconsistent, biased feedback

> Hi [name],
>
> I have one specific shape claim I would like you to check against what you already know. I am not asking you to read a theory first, and I am not asking you to agree with anything. If the claim does not survive, there is nothing else to look at.
>
> **The claim (`specified`, not `grounded`):** "feedback" is an observation channel, not the ground that settles a question. Three things usually grouped together as "noisy feedback" are different conditions with different failure mechanisms.
>
> 1. **Sparse** feedback is a per-slot support problem, not a data-volume problem. Fig 1 :19: "The residual is indexed by object slot, not aggregated." Fig 1 :22: "Aggregating across slots is how a live signal disappears into an average." A global score near zero with one live slot is a legal state. Where no instrument anywhere returns a reading, there is no edge to extend from and the term is `unreachable`, not absent.
> 2. **Inconsistent** feedback is a union of conditions, not one noise level. Fig 9 :4-5: "Disagreements that do not shrink with effort, where each rule keeps working well on a different subset, are not one hard question but several well-formed ones. Split it rather than search." Fig 2 :45: "Frames range against the ground. They do not negotiate with it."
> 3. **Biased** feedback is the anchor updating on the frame that reads it. Fig 2 :33: "The anchor must not update." Fig 2 :34 says that when it does, "everything drifts together, and the drift is coherent, which is why nobody notices." Fig 10 :24: "the ground does not decay, the channel does."
>
> The word "reliably" is not a quantity I am asserting. I have bound it as five checkable conditions written in advance: per-slot residual with live mass; a ground that does not update on the frame; two frames ranging against it separately; a channel still reachable; and an operator able to refuse a held term that keeps being wrong. Those are all or nothing per slot. I am **not** offering a reliability percentage, because no figure line returns one and I am not going to manufacture one.
>
> **What would refute it:** (1) a controlled run where a live slot is still found and settled after its residual has been averaged away; (2) a channel that demonstrably updates on the frame's own output nevertheless settling a false held term at a ground outside the frame; (3) two frames drawing on the same evidence producing agreement that predicts a non-updating ground better than either frame alone, out of sample; (4) a saturated or pooled metric still tracking an independent ground on an axis it is known to measure; (5) a system with no negation operator correctly withdrawing a persistently false term at a ground. I wrote these before sending this. A one-line "this fails because..." is more useful to me than agreement. If you would rather not engage, no reply is needed.
>
> **What I am not claiming:** that this settles the question, that a particular noise-robust algorithm is best, that human feedback is worthless, or that the figures are a theory of everything. The essays say an output is "only as good as the validator" and that a theory cannot validate itself. This is a shape and a refuter, not a result, and it is a simulated derivation rather than a ground reading.
>
> **If it survives, and only then:** the source material is below. The figure text, not my summary of it, is the authority.
> - Canonical figure text with line numbers (local in this package): `FRAMEWORK/reference/03-FIGURES_TEXT.md`, cited as `Fig N :line`
> - Full architecture (Medium, 2026-08-19): https://medium.com/@IsaiahNwukor/arrival-of-the-fittest-the-tether-architecture-1de7edf641ec
> - How Intelligence Actually Works (Substack, 2026-09-16): https://adventuresinml.substack.com/p/how-intelligence-actually-works
> - Public figures folder on GitHub: https://github.com/IsaiahN/tether/tree/general-agent/figures
>
> **If you want to reuse the method:** the formula is in the figures link. Run it on a problem you can check against a ground you name yourself. Write down what would refute your result *before* you run it, and state the mode of what you get. A reported failure is more useful to me than a reported success.
>
> - [name]

---

## Why this version is ordered this way

| the move | figure-grounded reason |
|---|---|
| Claim and refuter before any theory | Fig 10 :52: "Bring a characterised residual, never the source." Stage 1 is checked without the framework's interior. |
| Do not ask for agreement | Fig 2 :35: "Alignment is triangulation, not negotiation. A mirror cannot correct you." Fig 2 :42: "Buy independence in proportion to the cost of being wrong." |
| Pre-registered refuter | Seat Map rule quoted in `01`: "a falsifier written before the run is a design instrument, not only an honesty device." |
| Mode on every substantive claim | `THE_FORMULA.md`: "Mode. general · specified · grounded. State which." |
| Refuse the reliability percentage | Fig 9 :32: "you get a kind of thing, never the answer itself"; Fig 13 :134: unreachable is a verdict, not a silence. |
| Separate the three conditions | Fig 9 :54-57: unbundle a union before searching; one lever leaves the intersections standing. |
| Never average verdicts | Fig 1 :22: "Aggregating across slots is how a live signal disappears into an average." Fig 9 :60: filters for the budget, witnesses for the verdict. |
| No request for trust or prestige | *The Recursive Self-Improvement Trap*, opened 2026-11-23: "Prestige can fund an action. It can give an action a budget to be tried. But it cannot settle an action. Only the ground can settle it." |
| Offer the formula as a method, not an answer | Fig 4 :22: "Only methods cross up. Only head starts come down." |
| Ask users to name their own ground and refuter | `THE_FORMULA.md` "Direction": a frame cannot check the direction of its own question. |
| Links only after the verdict | Fig 10 :42: "A verifier that can reconstruct the claim cannot verify it." |

## Two-stage sequence

1. **Stage 1.** Send only the shape claim and the five refuters. Ask what the reader would count as a failure. Record that answer before sending anything else.
2. **Stage 2, opt-in only.** If they are curious, offer the three links with the note that the figures are the authority. Do not pool their later agreement as corroboration: Fig 2 :40 says agreement about the world is worthless when the frames share an evidence pool, and they have now seen the same source we did.
3. **Stage 3, opt-in again.** Offer the formula as a method to reuse, with the instruction that each user writes their own refuter and states their own mode.

No stage asks for trust. No stage asks for agreement. A failure is more useful than an endorsement.
