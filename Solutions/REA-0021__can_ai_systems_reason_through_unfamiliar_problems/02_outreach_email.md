# Outreach draft: check the shape claim before deciding about the framework

**Use:** one-to-one, or as a cover letter attached to a submission through a public venue in `03_public_contact_points.csv`. **Not** for bulk send.

**Hard precondition:** do not send until the first contact contains only the residual, the shape claim and the refuter. Links and the framework come after a verdict is recorded. Fig 10 :52: *"Bring a characterised residual, never the source."*

---

**Subject:** One checkable claim about "reasoning vs pattern matching" in AI systems

> Hi [name],
>
> I have one narrow claim I would like you to check against what you already know. I am not asking you to read a theory first, and I am not asking you to agree with anything. If the claim does not survive, there is nothing else to look at.
>
> **The claim (`general` on the shape, `specified` per case, not `grounded`):** the question "do AI systems reason through unfamiliar problems or only extend prior patterns?" is a union of two conditions, not a partition with opposite answers. A successful answer on a novel problem can be one of three things: (1) more search inside a closed library, using the same atoms; (2) a genuinely new combination of those same atoms, never instantiated in the examples; or (3) an import of a primitive from a different frame. Case 2 is a new composition and a reuse of the same atoms at once. That is why the original either/or cannot describe it.
>
> The figure-level reason is that a library's set of kinds is closed while its arrangements are not, so new combinations do not require new primitives, and only a contact with a differing frame moves the wall. "Novel" is relative to what a particular system holds, not a property of the problem.
>
> **What I am not claiming:** that current systems do or do not reason; that any benchmark score identifies a mechanism; that this settles the Chinese-room or understanding debate. An accuracy reading does not comment on its own source. Convergent derivation and an imported answer look identical in their contents, and only the record separates them. I am also not claiming capability belongs to a model in isolation. It belongs to a system and its habitat.
>
> **What would refute the claim, written before this message:**
> 1. A definition of "pattern" and "novel" under which reuse and novel composition form a clean, non-overlapping partition across three different fields.
> 2. A case where a system composes a term from an atom its library never held, with no import from a differing frame and with provenance to show it.
> 3. A behavioural reading that identifies whether a success came from derivation or import, across two low-overlap frames, without provenance or a change of instrument.
> 4. An agent-only improvement that changes no contact and still transfers to a genuinely novel habitat.
>
> If any of these holds, I withdraw the corresponding part of the claim. A one-line "this fails because..." is more useful to me than agreement. If you would rather not engage, no reply is needed.
>
> **If it survives, and only then:** here are the source links. The figures are the authority, not my summary of them.
> - Figures and formula, canonical branch (SVG, README, THE_FORMULA): https://github.com/IsaiahN/tether/tree/general-agent/figures
> - Canonical usage rule: https://github.com/IsaiahN/tether/blob/general-agent/figures/README.md
> - Worked architecture essay: https://adventuresinml.substack.com/p/arrival-of-the-fittest-the-tether
>
> **If you want to use the machinery:** run it on a problem you know well and can check against a ground. Write down what would refute your result *before* you run it. A reported failure is more useful to me than a reported success.

---

## Why this version is ordered this way

| the move | figure-grounded reason |
|---|---|
| Claim and refuter first, theory later | Fig 10 :52, *"Bring a characterised residual, never the source."* A reader who has absorbed the framework before answering has joined the frame being checked. |
| Do not ask for agreement | Fig 2 :35, *"Alignment is triangulation, not negotiation. A mirror cannot correct you."* |
| State mode on the substantive claim | `THE_FORMULA.md`, *"Mode. general · specified · grounded. State which."* A claim with no mode is a verdict in disguise. |
| Say the binary is a union | Fig 9 :54, *"And when the split lands on a union rather than a partition, unbundle before you search again."* |
| Declare what is not claimed | Fig 8 :50, convergent derivation and adopted import look identical in the contents; only the record separates them. |
| Do not name a model as the reasoner | Fig 9 :32, *"you get a kind of thing, never the answer itself"*; Fig 13 :135, *"It cannot say which primitive is missing, because naming it would mean already holding it."* |
| Refuter before conclusion | The standing project rule: a falsifier written before the run is a design instrument. R1 to R4 in `01_figure_grounded_audit.md` were written before this email. |
| One-to-one, public venue, no personal addresses | Fig 7 :35, *"A room's agreement is variation, not a verdict"*; Fig 2 :40, agreement from a shared evidence pool is disqualifying for a verdict. |
| Offer the method after the verdict, never the recording first | Fig 4 :25, *"A recording carried upward looks like knowledge and is a description of one occasion."* |
| Ask the recipient to write their own refuter | `THE_FORMULA.md` "Direction": a frame cannot check the direction of its own question; the sought-for shape must be made an ordinary term. |
| No prestige framing | *The Recursive Self-Improvement Trap*: *"Prestige can fund an action. It can give an action a budget to be tried. But it cannot settle an action. Only the ground can settle it."* |

## Two-stage offer, restated

1. **Stage 1:** send the claim in effect terms and its four refuters. Ask what the recipient would count as a failure. Record that answer before any theory is shown.
2. **Stage 2, opt-in only:** if they are curious, send the three links. Fig 8 :50 says the contents cannot separate derivation from import, so the record and the source, not the summary, are the authority.
3. **Stage 3, method only:** offer the formula as a generator to reuse, with the instruction that each user states their own ground and writes their own refuter first.

Any later agreement from a stage-2 recipient is never pooled as corroboration (Fig 2 :40). A stage-1 refutation is copied into `11_audit.md` with provenance and re-evaluated by the auditor seat as if it came from any other source.
