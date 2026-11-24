# Outreach draft - check the claim against a crossing before you decide about the framework

**Use:** one-to-one, or as a cover letter attached to a submission through the public venues in `03_public_contact_points.csv`. **Not** for bulk send.

**Hard precondition:** do not send until the stage-1 claim below survives the recipient's check. If the output does not survive, there is nothing else to look at.

---

**Subject:** One checkable claim about early-warning signals, before any theory

> Hi [name],
>
> I have one specific claim I would like you to check against your own work. I am not asking you to read the framework first, and I am not asking you to agree with me. If the claim does not survive, there is nothing else to look at.
>
> **The shape claim (`general`, not `grounded`):** early-warning signals such as slower recovery after disturbances are useful, but "reliably" cannot be a single property of the statistic. A signal is an instrument reading; the thing it must be checked against is an actual threshold crossing. So an admissible reliability claim has four parts: it names the system class, it ranges against crossings, it reports a false-alarm rate and a miss rate as an ordered pair, and it discloses the sampling interval, window, detrending, and how cases were selected. A warning threshold decides how much attention to spend. It does not settle that a threshold is approaching.
>
> **What this does not claim:** that early-warning signals never work, that they are merely fashion, or that a null signal means there is no approaching threshold. The literature contains real cases where slowing preceded a shift, and real cases where a signal fired in a system that was merely unlucky. Both belong in the same account. Absence of a signal is a report of "not detected at this resolution," not a proof of absence.
>
> **The refuter I wrote down before writing this.** I will withdraw the claim if any of the following holds:
> 1. a replicated, prospectively registered multi-system study shows both error rates at zero with finite data, so the observation channel does not decay;
> 2. a single aggregate reliability across system classes preserves the per-class false-alarm and miss rates to within the decision tolerance;
> 3. two indicators computed from one time series are shown to draw on disjoint measurement channels with independent calibration, so their agreement is two witnesses rather than one;
> 4. a null early-warning result at a stated resolution is shown to entail the absence of an approaching threshold.
>
> I wrote these before running the derivation. A one-line "this fails because..." is more useful to me than agreement. If you would rather not engage, no reply is needed.
>
> **What I would like from you:** what would you count as a failure of this claim in your system? In particular, which crossing would you use as the ground, and what false-alarm rate would make the warning useless for your decision?
>
> **If it survives, and only then:** the sources are below. The figures are the authority, not my summary of them.
> - Verbatim figure text with line numbers (local copy): `FRAMEWORK/reference/03-FIGURES_TEXT.md`
> - Five world sources actually read, with quotes and dates: `10_source_ledger.csv` in the attached packet
> - Canonical usage rule: `FRAMEWORK/reference/FIGURES_README_canonical.md`
>
> **If you want to use the machinery:** the formula is in the figures folder. Run it on a problem you know well and can check against a ground. Write down what would refute your result *before* you run it, and state the mode of what you get. A reported failure is more useful to me than a reported success.
>
> - [name]

---

## Why this version is ordered this way

| the move | figure-grounded reason |
|---|---|
| Shape claim and refuter before theory | Fig 10 :52 - *"Bring a characterised residual, never the source."* Frames range against the ground separately (Fig 2 :45). |
| Do not ask for agreement | Fig 2 :35 - *"Alignment is triangulation, not negotiation. A mirror cannot correct you."* |
| Pre-registered refuter | Seat Map :287 - *"a falsifier written before the run is a design instrument, not only an honesty device."* |
| Mode stated on the claim and the non-claims | `THE_FORMULA.md` - *"Mode. general · specified · grounded. State which."* |
| False-alarm and miss rates as an ordered pair, not one score | Fig 1 :19 - *"The residual is indexed by object slot, not aggregated."* |
| "Reliably" treated as a filter, not a verdict | Fig 9 :60 - *"Use filters for the budget and witnesses for the verdict. Never let a filter hand you a verdict."* |
| Agreement among shared-data studies withheld as evidence | Fig 2 :40 - *"agreement about the world is worthless when the agreeing frames share an evidence pool"* |
| No request for trust or prestige | *The Recursive Self-Improvement Trap* (essay): *"Prestige can fund an action. It can give an action a budget to be tried. But it cannot settle an action. Only the ground can settle it."* |
| No claim that a null signal proves no threshold | Fig 8 :39 - *"So a search that finds nothing is never a proof of absence."* |
| Offer the formula as a method to reuse | Fig 4 :22 - *"Only methods cross up. Only head starts come down."* |
| Ask each user to name their own ground and refuter | `THE_FORMULA.md` "Direction": a frame cannot check the direction of its own question. The RSI Trap essay adds that *"the truly testable output would need to be derived from the real architecture or working the formula yourself."* |

## Distribution rule

Stage 1: send the shape claim, the four-part test, and the refuter. Record the verdict before showing anything else.
Stage 2, opt-in only: if they are curious, offer the three links. Their later agreement is never pooled as corroboration.
Stage 3: offer the formula as a method to reuse, with the instruction that each user writes their own refuter and states their own mode.

No follow-up to non-responders. No reminder that says "many researchers now agree." A reminder of that kind converts the check into a convention (Seat Map :163: *"High correlation is disqualifying for a verdict and efficient for a convention."*).
