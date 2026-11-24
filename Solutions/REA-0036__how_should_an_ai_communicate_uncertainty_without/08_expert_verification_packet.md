# Expert verification packet: how an AI should communicate uncertainty

**What this is:** a shape claim in a form a risk-communication researcher, judgment researcher or UAI researcher can check. The claim, its mode and its refuters are stated before the derivation, so a reader knows what to look for and what would settle it.

**Mode: `specified` on the substantive claims, `general` on the structural shape, not `grounded`.** No reader experiment is claimed. This is a shape and a route, not a UI result.

**Status:** simulated derivation checked for internal consistency against the verbatim figures. It cannot settle the claim it reports on.

---

## 1. The claim, in one paragraph

An AI should communicate uncertainty as a per-slot shape, not as one confidence score. Each claim in an answer should carry (1) what is committed and the ground it would range against, (2) what is out of reach, stated as `gap` or `unreachable` rather than silently filled in, (3) what observation would change it, and (4) two costs kept apart: the cost of stating the part and the cost of checking it. The uncertainty text is the honest report of what the compression from model state to message dropped, not a decoration added after the answer. Human judgment, not the model's self-reported confidence, is the anchor for the question of whether the answer is usable for a person. The two failure modes named in the question, misleading and unusable, are different currencies and are not two ends of one dial. No verbal form is derived; which format maximizes decision quality is an open empirical question.

---

## 2. Three checkable sub-claims

### C1. The anchor and the per-slot requirement (framework-internal, checkable by reading the figures)

- **Statement:** the question has two anchors, outcomes for truth and human judgment for usability; the residual must be reported per slot, never as one global scalar; the model's self-report is an instrument for a different question and cannot certify the message.
- **Source, verbatim:**
  - Fig 2 :36: "An anchor is legitimate when the question is constitutively about it."
  - Fig 2 :37-38: "Human judgment is the right anchor for is this a good answer for a person, because the question is about people. It is only an instrument for is this code correct, and instruments can be wrong on axes they do not measure."
  - Fig 1 :27: "They are frame-internal. A frame cannot score itself with a quantity it also produces."
  - Symbols table :43-44: "R is measured per slot, never as a single global number."
  - Fig 1 :19: "The residual is indexed by object slot, not aggregated."
- **Refuter:** a demonstration that a self-reported confidence, with no outcome measurement and no reader measurement, settles whether an answer is usable for a person; or a controlled case where a multi-claim answer with one false slot is sent as one scalar and a reader's decision is unchanged when that slot is flipped. Either breaks C1.

### C2. The message carries the measured round-trip gap, and `gap` is an output (framework-internal plus a checkable implication for message design)

- **Statement:** a message is a lossy compression of the model state. Its uncertainty content is exactly what the compression dropped, stated in effect terms a reader can check. The gap must be measured rather than assumed zero, and where no term closes R the honest output is `unreachable` or `gap`, not a fabricated definite answer and not silence.
- **Source, verbatim:**
  - Fig 4 :30: "So take the round trip and measure the gap. Without it you are navigating by dead reckoning: confident about a position nobody checked."
  - Fig 4 :31-32: "The gap is not an error to eliminate. It is the measurement of what the coarser description cannot hold, and it is the only honest report of how much was given up."
  - Fig 9 :30-31: "your words are borrowed too, so describe the effect rather than the cause"
  - Fig 9 :32: "you get a kind of thing, never the answer itself"
  - Fig 13 :134: "Unreachable is a verdict here, not a silence,"
  - Fig 8 :39: "So a search that finds nothing is never a proof of absence."
- **Refuter:** a message whose stated uncertainty is invariant when the model is forced to drop or add information (no gap measured), or one that lets the reader reconstruct the full internal state; or a case where a definite answer is emitted while no term in closure(Γ) closes R and no provenanced import occurred. Either breaks C2.

### C3. Two currencies and an agent-and-habitat intervention (structure plus an empirically checkable consequence)

- **Statement:** description cost in bits and checking cost in actions do not add, so no single score may trade them. Hedging everything spends bits without restoring contact and can remove the reader's ability to act. A message-only rewrite is not the whole intervention; changing the reader's habitat is what can move decision accuracy.
- **Source, verbatim:**
  - Fig 12 :126: "Bits price the description. Actions price finding out whether it holds."
  - Fig 12 :130: "Summing them into one figure is the error this names, not the fix for it."
  - Fig 10 :47: "a convention that decides an outcome has stopped being one"
  - Fig 11 :39: "So the answerable question is not what intelligence is, but what makes a system capable. And capability is a property of agent-and-habitat, never of the agent alone."
  - Fig 11 :40: "A system cannot be made more capable by improving the agent in isolation. An improvement that does not change contact changes nothing, however much it improves."
- **Refuter:** a single scalar that trades hedging against accuracy and preserves both failure modes under controlled variation of each; or an answer-text-only intervention that changes decision accuracy with no change in the reader's options, tools or time. The second would not refute the figure line, but it would refute applying it strongly to this case.

---

## 3. What is explicitly not claimed

- Not a UI recommendation. No verbal form, percentage, interval or disclaimer is endorsed or derived. That is a binding from the human-factors frame, to be supplied and tested there, not a figure result.
- Not that calibration is the answer. Calibration is the model-ground domain only; the question is constitutively about people.
- Not that a confidence number is forbidden. A number with a source gate, a shadow test and outcome calibration is a legitimate import (Fig 6 :23: "No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs.").
- Not that usability and accuracy can be balanced on one scale. They are two ledgers.
- Not that an honest refusal is a failure to answer, and not that silence is honest refusal.
- Not `grounded`. This packet carries a shape, a refuter and a check list, not a measured finding.

---

## 4. Provenance

- Question: REA-0036, `Questions/reasoning.txt` line 45, section 4 (Knowledge, uncertainty, and truth).
- Primary authority: verbatim figure text in `FRAMEWORK/reference/03-FIGURES_TEXT.md`, cited as `Fig N :line`. Every quotation above is taken from that extract, not from a summary.
- Canonical usage rule: `figures/README.md`, branch `general-agent`, public on GitHub; local copy `FRAMEWORK/reference/FIGURES_README_canonical.md`.
- Formula and seat rules: `FRAMEWORK/figures/THE_FORMULA.md` and `FRAMEWORK/figures/THE_SEAT_MAP_Field_Guide_amended.md` (local).
- Supporting derivations in this folder: `01_figure_grounded_audit.md` (findings F1-F9, pre-registered refuter), `05_what_shape_means.md`, `06_isomers_and_order.md`, `07_the_tether_answer.md`.
- World sources actually opened, with author, venue, year, accessed date and quote: `10_source_ledger.csv`. Lowest-overlap witnesses for the human-facing half are Steyvers et al. (Nature Machine Intelligence 2025), Devic et al. (arXiv 2025), HEAR (EMNLP 2024) and PredActBench (arXiv 2026).
- Compiled 2026-11-23. No reader experiment was run.

---

## 5. What would settle it

A measurement against a nameable ground, not agreement and not prestige.

1. **Reader study with decision accuracy as ground.** Does a per-slot shape change reliance and decision accuracy versus a single scalar, under controlled variation of claim count and one flipped slot?
2. **Gap-invariance test.** Does the stated uncertainty change when information is forced in or out? If not, the message is not carrying R_T.
3. **Two-ledger test.** Do description cost and checking cost move independently under controlled variation? If one scalar preserves both failure modes, C3 falls.
4. **Import test.** Does a conformal coverage statement with its provenance intact differ in effect from an uncalibrated verbal hedge after provenance is removed? If not, the provenance requirement is doing no work.
5. **Habitat test.** Does a warning-plus-correction intervention move decision accuracy through the reader's options, as HEAR reports, rather than through the wording alone?

A reported failure is more useful than an endorsement.

---

## 6. What an expert can check in twenty minutes

1. Read Fig 2 :36-38, Symbols table :43-44 and Fig 1 :27 (C1, about three minutes). Ask whether a self-report can settle usability without a reader measurement.
2. Read Fig 4 :30-32, Fig 9 :30-32 and Fig 13 :134 (C2, about four minutes). Ask whether the uncertainty text can be honest if the round-trip gap is not measured.
3. Read Fig 12 :126 and :130, Fig 10 :47 and Fig 11 :39-40 (C3, about four minutes). Ask whether one score can carry two currencies and whether a text-only change can move capability.
4. Name one failure mode you would expect to see if the shape claim were false. Write it down before reading the framework links.
5. Send the failure, not the agreement. A one-line refutation is more useful than an endorsement. If you would rather not engage, no reply is needed.

**Order rule:** this claim and its refuters come first. The links in `04_links_and_distribution.md` are offered only after a verdict on this claim is recorded. A verifier who has already absorbed the interior cannot check it from outside (Fig 10 :42: "A verifier that can reconstruct the claim cannot verify it.").
