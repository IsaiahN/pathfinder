# Outreach draft - check the claim before you decide about the framework

**Use:** one-to-one, or as a cover note attached to a submission through a public venue in `03_public_contact_points.csv`. **Not** for bulk send. No personal emails.

**Hard precondition:** do not send until the stage-1 claim has been checked against a ground you can name. The claim below is `specified` and ungrounded. If it fails the refuter, there is nothing else to offer.

---

**Subject:** One claim about uncertainty messages, checked before any theory

> Hi [name],
>
> I have one specific output I would like you to check against what you already know about uncertainty communication. I am not asking you to read a theory first, and I am not asking you to agree with it. If the output does not survive, there is nothing else to look at.
>
> **The claim (`specified`, not `grounded`):** an AI should communicate uncertainty as a *per-slot shape*, not one confidence score. Each claim in an answer should carry (1) what is committed and the ground it would range against, (2) what is out of reach, stated as `gap` or `unreachable` rather than silently filled in, (3) what observation would change it, and (4) the two costs kept apart: the cost of stating the part, and the cost of checking it. The uncertainty text is the honest report of what the compression from model state to message dropped, not a decoration added after the answer.
>
> The reason it has to be per slot is structural: a single global number averages away the one live slot that is wrong. The reason the two costs stay apart is that words and checks are different currencies; adding words can raise a reader's confidence without raising accuracy, so a single "trust score" would hide exactly the failure it is meant to measure.
>
> **What I am not claiming:** that any particular verbal form (words, percentages, intervals) is the right one. That is an empirical question for your field, and I mark it as a gap. I am not claiming that calibration metrics alone settle usability, that a confidence number is forbidden, or that honest refusal is a failure to answer.
>
> **What would refute the claim, written down before this message:**
> 1. a self-reported confidence, with no outcome and no reader measurement, settles whether an answer is usable for a person;
> 2. a multi-claim answer with one false slot, sent as one scalar, produces no decision change when that slot is flipped;
> 3. the uncertainty text is invariant when the model is forced to drop or add information, or the reader can reconstruct the full internal state from it;
> 4. one scalar trades hedging against accuracy and preserves both failure modes under controlled variation;
> 5. a definite answer is emitted when nothing in the system's reach closes the question and no provenanced import occurred.
>
> I wrote these before sending this. If any one holds, I withdraw the relevant part. A one-line "this fails because..." is more useful to me than agreement. If you would rather not engage, no reply is needed.
>
> **Before you answer:** what would you count as a failure here? I would like your verdict on this claim recorded *before* I show you the framework it came from. A reader who has already absorbed the interior cannot check it from outside.
>
> **If it survives, and only then:** the source material is below. The figures, not my summary, are the authority.
> - Verbatim figure text with line numbers (local framework extract): see `10_source_ledger.csv` row for `03-FIGURES_TEXT.md`.
> - Canonical figures README (public): https://github.com/IsaiahN/tether/blob/general-agent/figures/README.md
> - Arrival of the Fittest: The Tether Architecture: https://medium.com/@IsaiahNwukor/arrival-of-the-fittest-the-tether-architecture-1de7edf641ec
>
> **If you want to reuse the method:** the formula is in the figures link. Run it on a problem you know well and can check against a ground. Write down what would refute your result *before* you run it, and state the mode of what you get. A reported failure is more useful to me than a reported success.
>
> - Isaiah Nwukor

---

## Why this version is ordered this way

| the move | figure-grounded reason |
|---|---|
| Claim and refuter first, theory second | Fig 10 :52 - *"Bring a characterised residual, never the source."* Frames range against the ground separately. |
| Ask what would count as a failure, not for agreement | Fig 2 :35 - *"Alignment is triangulation, not negotiation. A mirror cannot correct you."* |
| Pre-registered refuter | Seat map, failure genera - *"And a falsifier written before the run is a design instrument, not only an honesty device."* |
| Verdict recorded before theory is shown | Fig 10 :42 - *"A verifier that can reconstruct the claim cannot verify it."* Seat 4 must not hold the interiors. |
| Mode on every claim | `THE_FORMULA.md` - *"Mode. general · specified · grounded. State which."* |
| Two costs kept apart, no trust score | Fig 12 :126 - *"Bits price the description. Actions price finding out whether it holds."* |
| No universal verbal form | Fig 9 :32 - *"you get a kind of thing, never the answer itself"*; the canonical limit is a shape, not a name. |
| Honest gap offered as an output | Fig 13 :134 - *"Unreachable is a verdict here, not a silence,"* |
| Provenance required for the conformal-style number | Fig 8 :50-52 - convergent derivation and adopted import look identical in the contents; only the record separates them. |
| No request for trust or prestige | *The Recursive Self-Improvement Trap*: *"Prestige can fund an action. It can give an action a budget to be tried. But it cannot settle an action. Only the ground can settle it."* |
| Offer the method, not a recording | Fig 4 :22 - *"Only methods cross up. Only head starts come down."* |
| Ask users to state their own ground and refuter | `THE_FORMULA.md` "Direction": a frame cannot check the direction of its own question; committing a prediction before a run makes the shape refusable. |
| One-to-one, no bulk list | Fig 2 :40 - *"agreement about the world is worthless when the agreeing frames share an evidence pool"*; a list selected for receptiveness manufactures the disqualifying correlation. |

---

## Two-stage offer (the actual sequence)

1. **Stage 1.** Send the shape claim and its five falsifiers. Ask what the recipient would count as a failure. Record that verdict before any theory is shown.
2. **Stage 2, opt-in only.** If they are curious, offer the three links, with the note that the figures are the authority and the summary is not.
3. **Stage 3, opt-in only.** Offer the formula as a reusable method, with the instruction that each user writes their own refuter and states their own mode.

**Hard precondition restated:** stages 1 to 3 only work if the stage-1 claim can survive a ground check. The world literature says current systems largely fail the claim (PredActBench: models rarely make predictor uncertainty visible; Steyvers et al.: extra length raises confidence without accuracy). That is evidence the claim is *needed*, not evidence it is *true*. Keep the two separate (Fig 9 :60: *"Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."*).
