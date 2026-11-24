# Expert verification packet — what decides the sign of redundancy

**What this is:** a claim in a form a communication engineer, reliability engineer or judgment researcher can check. Mode, derivation and refuters are stated before the conclusion, so the reader knows what to look for and what would settle it.

**Mode: `specified` on the deciding relation, `general` on the structural shape. Not `grounded`.** No measurement of an error rate, failure rate or majority accuracy is claimed here.

## 1. The claim, in one paragraph

Whether a redundant signal improves reliability or wastes capacity is decided by how much the repeated signals draw on the same evidence. If they share one cause or one evidence pool, their agreement is one opinion said several times: it compounds agreement without adding evidence, and the capacity buys a convention rather than a verdict. If they are independent draws, each copy can carry a new observation and their union has a surplus. The second condition is a bargain: the capacity spent plus the residual left must cost less than the residual before the copy, and the bits spent and the actions spent to check the copy are two currencies that do not add. The framework returns that shape, not a code or a critical number.

## 2. Three checkable sub-claims

### C1 — independence of the repeats decides whether agreement carries information

- **Statement:** copies that draw on one evidence pool add agreement, not observations; copies that are independent can add a new observation.
- **Source, verbatim:** Fig 8 :47-49, "Independence is one quantity read twice. How much two frames draw on the same evidence decides both whether their agreement means anything and whether their union has any surplus. Two frames that overlap almost completely are one frame wearing two names." Also Fig 13 :36-37, "If two members drew on the same underlying fact, their agreement would carry no information, and one of them would be redundant rather than minimal."
- **What to check:** in your own domain, can two repetitions fail for the same reason? If yes, counting them as two observations inflates the evidence.
- **Refuter:** an independent, low-overlap scheme that fails to improve the error rate at any capacity cost; or a correlated scheme that improves a *verdict* without any new contact with the ground.

### C2 — the gain is priced by a bargain, in two currencies that do not add

- **Statement:** redundancy is licensed only when `cost(copy) + left(R, copy) < cost(R)`, and bits and actions cannot be summed into one score.
- **Source, verbatim:** Fig 5 :43, "A new term is worth having when stating it, plus what remains unexplained after it, costs less than what was unexplained before." Fig 12 :125-126, "A composition costs in two currencies, and they do not add. Bits price the description. Actions price finding out whether it holds."
- **What to check:** is there a domain where the reliability gain is real but the checking cost makes the scheme net negative? The Universal Scalability Law coherence cost and the common-cause term Q_C are candidate examples.
- **Refuter:** a scheme carrying no new information about the ground that lowers the combined cost in bits and actions; or a demonstration that bits and actions are commensurable with no residual.

### C3 — convention and verdict are different jobs, and the order matters

- **Statement:** high overlap is efficient for a convention and disqualifying for a verdict; the source question must be answered before the cost question.
- **Source, verbatim:** Fig 2 :40, "disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool". Seat Map :163, "High correlation is disqualifying for a verdict and efficient for a convention." Fig 3 :20, "The chain is ordered by dependency, not by importance."
- **What to check:** does the system under review use agreement to settle a claim about the world, or to settle what a shared label means? Those need different designs.
- **Refuter:** a case where a convention that decides an outcome remains a convention in good standing; or a case where the cost calculation alone identifies the correlation with no independent source audit.

## 3. What is explicitly not claimed

- Not a code, a rate, a critical correlation, or a redundancy percentage derived from the figures.
- Not "redundancy always helps" or "redundancy always wastes".
- Not that the figures give Shannon's channel capacity, an error exponent, or a code rate. Those are imported with their own provenance.
- Not `grounded`. No measurement was taken in this derivation.
- Not a claim that agreement is worthless everywhere. For conventions it is the product.
- Not that this simulated derivation can settle its own claim. It is checked for internal consistency only.

## 4. Provenance

- Residual and domain census: `01_figure_grounded_audit.md`, written 2026-11-23, mode `specified`.
- Verbatim figure text extracted from the 13 figures plus the Operators and Symbols tables: local `FRAMEWORK/reference/03-FIGURES_TEXT.md`, checked line by line in `11_audit.md`.
- Formula and seat rules: local `FRAMEWORK/figures/THE_FORMULA.md` and `THE_SEAT_MAP_Field_Guide_amended.md`.
- Canonical usage: local `FRAMEWORK/reference/FIGURES_README_canonical.md` and `60_FIGURES_AS_METALAWS.md`.
- World sources, all opened 2026-11-23: Shannon 1948 full text; SEP Jury Theorems; ECSS reliability handbook; NASA NTRS common-cause record; Morante and Romero Garcia-Rubio 2026; Larrick, Mannes and Soll; eight essays by Isaiah N. Full provenance in `10_source_ledger.csv`.
- This packet compiled 2026-11-23.

## 5. What would settle it

A source-discriminating measurement, not further agreement:

1. **Channel:** vary noise-draw correlation at fixed rate; measure the error curve.
2. **Components:** separate Q_I from Q_C in a common-cause audit; check whether added copies only reduce Q_I.
3. **Committee:** range each judge separately against one fixed ground; measure effective sample size, not head count.
4. **Bargain:** measure bits and actions separately and test the inequality in C2.

## 6. What an expert can check in twenty minutes

1. Read Fig 8 :47-49, Fig 13 :36-37, Fig 5 :43 and Fig 12 :125-126. Four short passages.
2. Check C1 against one system you know: do its repetitions share a cause?
3. Name one instrument that would separate independent noise from a common cause in that system, or say why none exists.
4. Send the refutation. A failure is more useful than an endorsement.

**Status of this packet:** a simulated derivation checked for internal consistency against the figures, not a ground reading. It cannot settle the claim it reports on.
