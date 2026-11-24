# Expert verification packet — REA-0022

**What this is:** a claim in a form a logician, theoretical computer scientist or AI-safety researcher can check. Mode, derivation and refuters are stated before the conclusion, so the reader knows what to look for and what would settle it.

**Mode: `specified` on the taxonomy and diagnostic order, `general` on the shape. Not `grounded`.** No measurement of a named system is claimed.

**Status of this packet:** a simulated derivation checked for internal consistency against the figures, not a ground reading. It cannot settle the claim it reports on.

## 1. The claim, in one paragraph

A reasoning failure has three candidate causes that the figures treat as different facts with different instructions: the term is not reachable from what the system holds (algorithmic closure limit), it is reachable but unfound at this budget (compute), or nothing at any resolution is returning a signal for it (data or instrument). Five kinds of reasoning sit on the algorithmic side: self-reference about one's own consistency or complexity; refusal of a held claim; reaching outside one's closure; recovering an arrangement from an ingredient list; and inverting a lossy cross-scale transform or checking one's own question's direction. The usable output is a dependency-ordered diagnostic (search, then instrument, then import), not a ranking of tasks. Fig 8 :40: *"Underivable-in-principle and unreachable-at-this-budget are different facts, and they issue different instructions."*

## 2. Three checkable sub-claims

### C1 — The budget boundary is real and is decided by closure, not by effort (framework-internal, checkable by reading Figure 8 and Figure 6)

- **Statement:** more search cannot add a term that is outside `closure(Γ)`; more search can find a term already inside it. These are different facts with different remedies.
- **Source, verbatim:** Fig 8 :32 — *"Closure is idempotent. Composing inside a closed set never leaves it, so no search, however long, adds an atom. This one is definitional: it is what closure means."* Also Fig 8 :40-42 — *"Underivable-in-principle and unreachable-at-this-budget are different facts, and they issue different instructions"* and *"the remedy is more search, not another atom."* And Fig 6 :21 — *"MINT composes inside the closure and can never add an atom."*
- **What to check:** is the distinction stated as a definitional property of closure, and does the figure really issue different instructions for the two cases? Does any figure license importing against a budget limit? It does not: Fig 8 :42 prices a wrong atom above starting from primitives.
- **Refuter:** show composition inside a closed set adding a new atom without import, or show an import-free speedup fixing a case the figures classify as underivable. Either collapses A into B.

### C2 — Refusal and arrangement are operator/bond facts, not data-volume facts (framework-internal plus logic/chemistry check)

- **Statement:** a vocabulary without the unary negation operator can only accumulate; a recording that drops the bond cannot recover arrangement from ingredients. Neither is repaired by more data.
- **Source, verbatim:** Fig 12 :140 — *"A vocabulary that cannot refuse can only accumulate."* Operators table :58 — *"a refutation is a negation, which is why a vocabulary without it can only accumulate"*. Fig 12 :5 — *"A set of ingredients is not one. The bond is the rest of the information, and it is the half nothing was recording."* Fig 12 :111 — *"A vocabulary without bonds can name a state and cannot name a route to one."*
- **What to check:** Fig 12 :139-140 and the Operators table amendment :70-74 correctly separate unary negation from subtraction (− is absence of an operand, ¬ is refusal of a claim). Fig 12 :117 defines *"isomer. Same atoms, different bond, different substance."* Chemistry corroborates: structural isomers share atom counts but differ in connections.
- **Refuter:** exhibit a system with no negation operator that refuses a held claim from more data of the same kind; or show bond and arrangement fully recoverable from operand sets alone with identical behaviour under every rearrangement.

### C3 — The self-reference barriers are proved, not stipulated, and are structural isomers (mathematics-facing check)

- **Statement:** Godel, Tarski and Chaitin are proved limits on what a system can derive about itself, and under Fig 12 they are isomers: same self-referential atoms, different target, different theorem.
- **Source, verbatim:** Fig 8 :34 — *"A frame cannot reach its own metaframe. Godel’s second theorem: a consistent system cannot prove its own consistency. Tarski: truth for a language is not definable within that language."* Fig 8 :37 — *"A frame cannot certify its own limit. Chaitin: beyond a fixed constant, no system proves that any object exceeds its own complexity."* Fig 8 :56 — *"Rules 1 to 3 are proved theorems."*
- **What to check:** the SEP entry on Gödel states *"the consistency of F cannot be proved in F itself"* and separates Tarski's undefinability result into its own section. The Kolmogorov complexity article gives Chaitin's result its own section and states that a specific string's complexity cannot be formally proven above a threshold. Different quantities, one shared diagonal method.
- **Refuter:** show a consistent system deriving its own consistency or certifying a complexity above the bound in its own terms; or show one of the three theorems derivable from the other two without the diagonal construction (which would merge the isomers into one term).

## 3. What is explicitly not claimed

- Not a diagnosis of any named current system. That requires a ground reading of that system.
- Not that compute and data are irrelevant. Most practical failures may be budget or instrument failures.
- Not that the three causes can be told apart from inside the frame. Fig 6 :27 says depth and absence look the same from inside; the diagnostic is a procedure, not an oracle.
- Not a complete or final taxonomy. Fig 7 :6 names *"the limit: no last room."*
- Not that Godel, Tarski and Chaitin are three independent witnesses. They share a mathematical pool (Fig 2 :40).
- Not `grounded`. Nothing here was settled by an instrument.

## 4. Provenance

- Figure text extracted verbatim from `FRAMEWORK/reference/03-FIGURES_TEXT.md`, read this session.
- `FRAMEWORK/figures/THE_FORMULA.md` (eight-step loop, mode rule, step 7 diagnostic order).
- `FRAMEWORK/reference/FIGURES_README_canonical.md` and `FRAMEWORK/reference/60_FIGURES_AS_METALAWS.md`.
- Eight essays by Isaiah N, 2026; three re-fetched this run (Library of Babel, Hard Problem is About Source, Recursive Self-Improvement Trap), the rest read via the exemplar's curated reading as recorded in `05_what_shape_means.md`.
- World sources opened 2026-11-23: SEP Gödel (Raatikainen, 2025), SEP Negation (Horn and Wansing, 2025), Wikipedia Kolmogorov complexity, Wikipedia Isomer, Wikipedia No free lunch theorem, Wikipedia Abstract interpretation. Each is in `10_source_ledger.csv` with a quote and an overlap note.
- This packet compiled 2026-11-23.

## 5. What would settle it

The decisive test is ground-facing, not another argument:

1. Take a failure in a real system that this taxonomy marks as algorithmic (cause A).
2. Change only data or compute. Do not change the frame, add an operator, add an instrument or import.
3. Observe whether the failure disappears. If it does, the application to current systems is refuted.

Supporting tests: the refuters under C1, C2 and C3 above; and the instrument test from Fig 6 :34, where a data-limit case should have something already returning a failing reading at some resolution.

## 6. What an expert can check in twenty minutes

1. Read Fig 8 :32 and :40-42 and Fig 6 :21. Is the algorithmic/budget distinction definitional and differently instructed? (~4 min)
2. Read Fig 12 :140, the Operators table :58 and :73-74, and Fig 12 :5 and :111. Is refusal a unary-operator fact and arrangement a bond fact? (~4 min)
3. Read Fig 8 :34, :37, :44 and :56. Are the three self-reference results proved theorems over different quantities? (~4 min)
4. Check one world source you know well (SEP Gödel or the isomer article) for whether the quoted sentence is accurate. (~4 min)
5. Name one real system and one failure where you would predict cause B rather than cause A, and say what would change your mind. Send the refutation. A failure is more useful than an endorsement. (~4 min)

**End state:** no reply needed if you would rather not engage. Agreement later is not pooled as corroboration (Fig 2 :40).
