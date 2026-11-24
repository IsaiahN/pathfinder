# Public links and distribution

**Fetch status.** The figure text, canonical README and formula are local files, read directly. The four world pages and five venue pages marked verified below were fetched on 2026-11-23. Two venue pages (Entropy, IEEE ITSOC) returned HTTP 403 to the automated fetch and are marked manual-check in `03_public_contact_points.csv`; they are not claimed as fetched.

## Verified local sources

| what | path | verified content |
|---|---|---|
| Figures text with line numbers | `FRAMEWORK/reference/03-FIGURES_TEXT.md` | All `Fig N :line` citations in this folder are checked against this extract. Fig 11 :39 and :40 carry the capability and contact claims. Fig 13 :3 and :48 carry the minimum-set claim. |
| Canonical usage rule | `FRAMEWORK/reference/FIGURES_README_canonical.md` | "They outrank everything else in the repo"; the framework returns "a shape, not a name"; "Indiscernibility is not identity." |
| The formula | `FRAMEWORK/figures/THE_FORMULA.md` | Eight steps, mode rule `general / specified / grounded`, substrate section, direction limit. |

## Verified public world pages actually fetched, 2026-11-23

| source | URL | what it says that bears on this question |
|---|---|---|
| Variety (cybernetics), Ashby | https://en.wikipedia.org/wiki/Variety_(cybernetics) | "only variety can destroy variety"; a perfect regulator "must have at least as many distinguishable states as the phenomenon it is intended to regulate"; "the observer and his powers of discrimination may have to be specified if the variety is to be well defined." A necessary, environment-relative lower bound, not a sufficient one. |
| Good regulator theorem, Conant and Ashby 1970 | https://en.wikipedia.org/wiki/Good_regulator_theorem | "every good regulator of a system must be a model of that system," and the mapping is only a homomorphism, so "the model can lose information about the entity that is modeled." Corroborates the shape-not-a-name limit. |
| Free energy principle, Friston | https://en.wikipedia.org/wiki/Free_energy_principle | Systems coupled through a Markov blanket "minimize surprise or uncertainty by making predictions based on generative models"; the principle is a "mathematical truism," and "to attempt to falsify the free energy principle is a category mistake." Echoes Fig 11's posterior label for intelligence. |
| Chemotaxis | https://en.wikipedia.org/wiki/Chemotaxis | "By repeatedly evaluating their course, and adjusting if they are moving in the wrong direction, bacteria can direct their random walk motion toward favorable locations"; receptor methylation lets the cell "remember chemical concentrations from the recent past" and compare them with current ones. A concrete minimal loop with temporal comparison and no brain. |
| Landauer's principle | https://en.wikipedia.org/wiki/Landauer%27s_principle | "the minimum energy needed to erase one bit of information is proportional to the temperature at which the system is operating"; measured within 44 percent of the bound in nanomagnetic bits in 2016. Prices a physical operation, not adaptive success. |

## Verified venue pages actually fetched, 2026-11-23

| venue | URL | relevant detail |
|---|---|---|
| ISAL | https://alife.org/ | Society home page lists publications and the ALIFE 2027 conference in Prague. |
| ISSOL | https://www.issol.org/ | Society home page lists a Contact Us route, seminars and the ISSOL-IAU Origins 2029 meeting. |
| Discover Life | https://link.springer.com/journal/11084 | Springer page states "Formerly Origins of Life and Evolution of Biospheres" and shows a Submit your manuscript portal. |
| FQxI | https://fqxi.org | Foundation page lists current essay competition "How Quantum is Life?" and a public contact route. |
| FQxI QSpace rules | https://qspace.fqxi.org/competitions/rules | "Each eligible essay will be read and rated (scored between 1 and 10) by at least two Expert Readers"; entries are anonymous. An opt-in, ground-visible venue. |

## What the world literature does and does not support

1. **Ashby and the good regulator theorem** both give *environment-relative necessary conditions*. They corroborate the figure verdict that the minimum is relational (Fig 11) and that a model is a lossy map (Fig 9 shape not a name). They do not supply a universal number. Note the overlap: both come from the same Ashby lineage, so they are one evidence pool in cybernetics, not two independent witnesses.
2. **Chemotaxis** is the strongest concrete instance. A bacterium with a two-state motor and a few seconds of receptor memory already runs a per-slot-style loop: compare past with present, bias the run, read the outcome. It supports Fig 1 and Fig 3 without needing a numeric threshold. It is a case already known, so it is a retrodiction, not a result the framework produced.
3. **Free energy principle** corroborates the contact framing but also warns against reading the principle as an empirical claim: its own entry calls it a mathematical truism. That matches Fig 11's "intelligence is a label applied afterwards."
4. **Landauer** gives a real physical floor per erased bit. It is the clearest example of a *filter for the budget*: it tells you what a candidate implementation costs to try, not whether it adapts. Fig 9 :60 applies.
5. No world source conflicts with the figure verdict, so the conflict rule (back to the census) was not triggered. The sources span cybernetics, biology, neuroscience and physics of computation, so overlap is declared rather than hidden in `10_source_ledger.csv`.

## Distribution: offer, do not push

Figure-grounded reasons:

- **Fig 4 :22-25**: "Only methods cross up. Only head starts come down. A recording carried upward looks like knowledge and is a description of one occasion." Sending the whole framework before anyone has described a residual sends a recording. Lead with the shape claim and its refuter.
- **Fig 10 :42**: "A verifier that can reconstruct the claim cannot verify it." A recipient who has absorbed the interior before giving a verdict has joined the frame being checked.
- **Fig 9 :27-28**: "describe it before you go looking, or any frame you pick will seem to fit." Ask what they would expect to see if the shape claim were true before giving them the links.
- **Fig 2 :40**: "agreement about the world is worthless when the agreeing frames share an evidence pool." A send selected for likely agreement produces a convention, not corroboration.

**Recommended order in a reply:** (1) the residual, the shape claim and its refuter; (2) ask what they would count as a failure; (3) record their verdict; (4) only then the three links, with the note that the figures, not the summary, are the authority.

## The two-stage offer

- **Stage 1 before stage 2** is Fig 10 :52, "Bring a characterised residual, never the source," and Fig 2 :45, "Frames range against the ground. They do not negotiate with it." The recipient checks the shape without holding the framework's interior.
- **Stage 2 is opt-in by construction.** Once a recipient has absorbed the theory, their agreement stops being evidence. The stage-1 verdict must be recorded before any theory is shown, and later agreement is never pooled as corroboration.
- **Stage 3 sends a method, which is permitted.** Fig 4 :22: "Only methods cross up. Only head starts come down." The formula is a generator, so giving it away does not give away an answer.
- **Stage 3 still needs a ground per problem.** `THE_FORMULA.md` "Direction": a frame "cannot check the direction of its own question." Each user must write down what would refute their result before running it, and label the mode of what they get.

**Hard precondition:** stages 1 to 3 work only if stage 1 survives. This folder's stage-1 output is a shape claim with six refuters, not a numeric threshold. If a refuter fires, stop and retract before sending anything further.

## Practical limit

Everything in this folder is text. I can create and host files locally; I cannot upload them, send them, or check anyone's response. Hosting and sending is yours. Prefer an opt-in download page over an attachment pushed to a list, because an opt-in page lets a recipient decline contact.
