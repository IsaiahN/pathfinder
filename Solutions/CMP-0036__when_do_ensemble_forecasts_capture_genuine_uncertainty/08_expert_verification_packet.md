# Expert verification packet: when ensemble spread is genuine uncertainty

**What this is:** a claim in a form an ensemble-forecasting researcher, a verification specialist, or a reliability engineer can check. Mode, derivation and refuters are stated before the conclusion, so a reader knows what to look for and what would settle it.

**Mode: `specified` on the three sub-claims, `general` on the structural framing, `gap` on the universal threshold. Not `grounded`.** No forecast was run and no measurement is claimed. This is a simulated derivation checked for internal consistency against the figures, not a ground reading (`05_what_shape_means.md` §6).

## 1. The claim, in one paragraph

An ensemble captures genuine uncertainty only when four conditions hold together: members draw on different evidence; the variation changes what can be represented rather than only reweighting one representation; each member is ranged separately against a non-updating verifying observation; and the rule for using the spread remains refusable. When members are perturbations of one model family, or nominally different models with shared ancestry and calibration data, their disagreement is one closure respelled and the spread repeats the structural assumptions. The dependence structure, not the member list, is the substance that decides which case applies. No universal dispersion value, member count, or missing model name is asserted; those are owed at the ground.

## 2. Three checkable sub-claims

### C1 — Spread cannot certify itself; the anchor is the observation

- **Statement:** a quantity produced by the generating frame cannot be the evidence that the frame captured the ground. Reliability is a claim about observations, not about internal agreement.
- **Source, verbatim:** Fig 1 :23 — *"The ground enters as the only metric."* Fig 1 :24-27 — *"They are frame-internal. A frame cannot score itself with a quantity it also produces."* Fig 2 :29-30 — *"An anchor is whatever settles the question and does not change its answer because of what any frame thinks."* Fig 2 :35 — *"Alignment is triangulation, not negotiation. A mirror cannot correct you."*
- **What to check:** is the verification target independent of the ensemble's own reported probabilities, or has it been refitted to them? Does a small spread accompany a verifying observation inside the range in past cases, or is there documented underdispersion?
- **Refuter:** exhibit a case where spread predicts ground settlement with no access to observations, or where a consensus that updates on its own reported probabilities still settles the question. If either holds, C1 falls.

### C2 — Independence and reach, not member count, are the variables

- **Statement:** adding members drawn from the same closure is search at fixed reach; it visits more of the same space and adds no atom. Adding a member from a differing closure is an import, and it needs a source gate and a shadow test.
- **Source, verbatim:** Fig 2 :31 — *"Independence, between two frames, is how little they draw on the same evidence."* Fig 2 :40 — *"disqualifying for a verdict: agreement about the world is worthless when the agreeing frames share an evidence pool."* Fig 6 :49 — *"more search at the same reach: is it in here and unfound? The closure does not change. Same atoms, same wall, more of the space actually visited."* Fig 6 :23 — *"No frame escapes its own closure. The bound moves only on contact with a frame whose closure differs."* Fig 8 :32 — *"Closure is idempotent. Composing inside a closed set never leaves it, so no search, however long, adds an atom."* Fig 8 :49 — *"Two frames that overlap almost completely are one frame wearing two names."*
- **What to check:** is there a measured dependence or shared-ancestry metric for the members? Does verification skill improve with member count after conditioning on it? Do nominally different models share parameterisations, calibration data, or a common ancestor (the AR6-based guidance calls such collections *"ensembles of opportunity"* and says their spread is *"rarely a direct measure of uncertainty"*)?
- **Refuter:** show that member count predicts verification skill after conditioning on measured dependence and ancestry, or exhibit a structural difference that changes ground-visible predictions with no provenance or gap explanation owed. If either holds, C2 falls.

### C3 — The dependence structure is a bond; fixed-member ensembles can be isomers

- **Statement:** two ensembles with the same member list and marginal spread can differ in substance because the relation among members is not recoverable from the list. Independent errors and a shared cause are different substances, with different verification behaviour.
- **Source, verbatim:** Fig 12 :5 — *"A set of ingredients is not one. The bond is the rest of the information, and it is the half nothing was recording."* Fig 12 :117 — *"isomer. Same atoms, different bond, different substance. The difference is invisible in the formula and decisive in the behaviour."* Fig 12 :94 — *"The arrangement is the substance."*
- **What to check:** is the dependence structure recorded anywhere in the ensemble metadata? Does removing a shared cause change the verification result? In engineering notation the shared share is priced by a beta factor that puts *"a floor under the system's failure probability that redundancy can't lower"*; in survey statistics the same effect is `n_eff = n / Deff` with `Deff = 1 + (n* - 1) rho`. Are those two accounts applicable here, and if not, why?
- **Refuter:** show that for a fixed member list and fixed marginal distributions, changing the dependence structure never changes ground-visible behaviour. Then the bond carries nothing and C3 falls.

## 3. What is explicitly not claimed

- No universal value of spread, member count, correlation, or skill threshold. Fig 9 :32: *"you get a kind of thing, never the answer itself."*
- No name for the missing structural assumption in a specific forecast system. Fig 13 :134-135: *"It cannot say which primitive is missing, because naming it would mean already holding it."*
- Not that multi-model ensembles are always better. Shared ancestry can give many names and one closure.
- Not that perturbed-parameter ensembles are useless. They are search at fixed reach and have their own uses; they do not add structural reach.
- Not that smaller spread means better reliability. Underdispersion is a documented failure mode in the field's own baseline account.
- Not `grounded`. Every sub-claim is a candidate until a ground pays for it.

## 4. Provenance

- Primary figure text: `FRAMEWORK/reference/03-FIGURES_TEXT.md`, opened and checked this session. Every quoted string in this packet is an exact substring of that file.
- Canonical usage rule: `FRAMEWORK/reference/FIGURES_README_canonical.md`, opened this session.
- Loop and mode rule: `FRAMEWORK/figures/THE_FORMULA.md`, opened this session.
- Derivation and retractions: `01_figure_grounded_audit.md`, `06_isomers_and_order.md`, `07_the_tether_answer.md` in this folder.
- World sources actually opened on 2026-11-22: Wikipedia *Ensemble forecasting*; SimClim AR6-based *The use of Ensembles*; Wikipedia *Design effect*; Wikipedia *Wisdom of the crowd*; the ECSS common-cause-failure handbook; the Reliafy beta-factor guide. Author, venue, year, accessed date, quote, field and overlap are recorded in `10_source_ledger.csv`.
- Eight essays mapped in `05_what_shape_means.md`; their quotes are carried from the completed exemplar's canonical mapping and were not re-opened this session.
- Packet compiled 2026-11-22.

## 5. What would settle it

A ground reading, not agreement. Four discriminating instruments are named in `07` §6: a dependence or ancestry diagnostic; a reach test showing an outcome set change paid for at the ground; a source-discriminating instrument that distinguishes which assumption change produced a given spread; and held-out verification against a target that did not enter calibration. A fixed decision threshold must also be shown to be refusable. Until one of these fires, the sub-claims remain `candidate`.

## 6. What an expert can check in twenty minutes

1. Read Fig 1 :23 and :27, Fig 2 :31/:35/:40, Fig 6 :23/:49, and Fig 12 :5/:117. Eight short passages.
2. Say whether C1 is right for your system: does the verification target update on reported probabilities, and is there documented underdispersion?
3. Say whether C2 is right for your system: is there a measured dependence or ancestry metric, and does member count still predict skill after conditioning on it?
4. Say whether C3 is right for your system: is the dependence structure recorded, and does it change verification when varied?
5. Name one instrument that would distinguish which assumption change produced a given spread, or say why none is available.
6. Send the refutation. A failure is more useful than an endorsement.

**Status of this packet:** a simulated derivation checked for internal consistency against the figures, not a ground reading. It cannot settle the question it reports on.
