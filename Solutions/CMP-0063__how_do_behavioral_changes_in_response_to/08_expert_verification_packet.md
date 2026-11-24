# Expert verification packet: behavioral response in an epidemic (CMP-0063)

**What this is:** a claim in a form an epidemiologist or infectious-disease modeller can check. Mode, derivation and refuters are stated before the conclusion, so the reader knows what to look for and what would settle it.

**Mode: `specified` on the substantive claims, `general` on the structural shape. Not `grounded`.** No measurement of a real outbreak is claimed here. This is a shape and a route, not a result.

## 1. The claim, in one paragraph

An epidemic and the behavioral response to it form one union compound, not an epidemic with an external perturbation. Cases produce information and perceived risk; perceived risk drives protective action; protective action changes contact and transmission; transmission changes cases again. That coupling is a cycle whose sign and delay decide whether it damps, oscillates, or amplifies, and it keys on belief held per group and per region rather than on ground-truth prevalence. Behavior can alter the epidemic only by changing the field of contact. Waves reopen because a part of the response survives its own use. The framework gives the shape, four refuters written in advance, and the kind of instrument that would settle the sign; it does not name the sign or magnitude for any particular outbreak.

## 2. Three checkable sub-claims

### C1: Behavior acts on the epidemic only through contact

- **Statement:** a behavioral response that leaves measured contact unchanged cannot change the epidemic trajectory.
- **Source, verbatim:** Fig 11 :40, "An improvement that does not change contact changes nothing, however much it improves." Triangulated with Fig 4 :20, "Only the actors, the currency and the anchor change." Fig 11 :39 adds: "capability is a property of agent-and-habitat, never of the agent alone."
- **What to check:** is "contact" being read as the full contact process, who meets whom, for how long, and under what transmission conditions? Mask use changes per-contact conditions and therefore counts as a change of contact. Declared intent with no behavioral correlate does not.
- **Refuter:** in a controlled comparison where measured contact is unchanged, a change in protective intent still shifts peak timing, peak size, final size, or R_t. That breaks the claim at the ground.

### C2: The coupling is a cycle whose sign and delay are distinct quantities

- **Statement:** cases feed information, information feeds protective action, action feeds contact, contact feeds transmission, transmission feeds cases. The sign of the return decides damping versus amplification; the delay decides wave spacing. A chain cannot express this.
- **Source, verbatim:** Fig 12 :121, "cycle. The output re-enters as input. The sign of the loop decides whether it closes, and a chain cannot close by construction." Fig 13 :31-32, "a remainder compounding through a chain that amplifies is chaos, and the detail a crossing discards reappears above it as noise." Fig 12 :119, "catalyst. A part that survives its own use. Spent and regenerating parts behave differently across uses, and nothing records which a term is."
- **What to check:** in your own model, reverse the behavior-to-contact sign while holding the delay fixed. Do peak timing, wave count, and bistability change? Then remove the delay and check whether oscillation survives. The two operations answer different questions; conflating them is a category error this packet refuses.
- **Refuter:** reversing the sign or removing the feedback leaves the qualitative dynamics unchanged, with the same wave count and no bistability. That breaks Fig 12 :121.

### C3: The compound keys on perceived risk held per slot, not on aggregate truth

- **Statement:** the behavioral loop takes belief about prevalence as input, and that input is group- and region-specific.
- **Source, verbatim:** Symbols table :20-21, "What the system takes to be the case before it acts. Formed from its own history and from what it inherited, mixed by w. Not the observation." Fig 1 :19, "The residual is indexed by object slot, not aggregated." Fig 9 :57, "a case in two conditions is not a harder case of either. It stops being a mixture and becomes a specific compound."
- **What to check:** does a model driven by reported or perceived risk fit observed behavior better than one driven by true prevalence? Do per-group behavioral states predict waves that a national average misses?
- **Refuter:** ground-truth prevalence predicts behavior as well as perceived prevalence, and aggregate counts predict the epidemic as well as per-group counts. That breaks both the Symbols-table claim and Fig 1 :19.

## 3. A fourth refuter, kept with the other three

The disease and behavior loops solve independently and recombine with no residual left at the intersection. If so, Fig 9 :57 is broken and the compound claim is withdrawn. This is stated here so a reader can test the union claim even if they accept C1 to C3.

## 4. What is explicitly not claimed

- Not a sign, delay, or magnitude for any named disease or population. The framework returns a shape, not a name; those require an instrument.
- Not that "awareness" or "risk perception" is a framework primitive. Both are bindings from the epidemiology frame onto held terms, provenanced as such.
- Not that distancing, masking, vaccination, and information sharing are interchangeable. They are isomers at the level of contact (Fig 12 :117) and a functional group at the level of the cycle (Fig 12 :124).
- Not that a vaccine or any single lever clears the compound (Fig 9 :55).
- Not that a case curve determines its own source. That is the metamerism error named in *The Hard Problem is About Source*: "If several paths create the same behavior, then behavior is a projection with lossy information."
- Not `grounded`. Nothing here has been settled by experiment.

## 5. Provenance

- Question: CMP-0063, complexity science.txt line 78, section 7 (Epidemics, information, and social dynamics).
- Figure text: verbatim extract from Isaiah's 13 SVGs plus the Operators and Symbols tables, `FRAMEWORK/reference/03-FIGURES_TEXT.md`, checked this session. All citations use `Fig N :line` against that file.
- Formula and mode rule: `FRAMEWORK/figures/THE_FORMULA.md`.
- Canonical usage rule: `FRAMEWORK/reference/FIGURES_README_canonical.md`.
- Eight essays by Isaiah N, 2026, listed in `05_what_shape_means.md`; six opened directly this session.
- World corroboration only: Funk et al., PNAS 2009; Gross and Blasius, J R Soc Interface 2008; Just et al., arXiv 2017; Wikipedia's negative-feedback entry; Bleicher, PeerJ 2017. Full provenance and quotes in `10_source_ledger.csv`.
- This packet compiled 2026-11-22.

## 6. What an expert can check in twenty minutes

1. Read Fig 11 :39-40, Fig 12 :119 and :121, Fig 13 :31-32, Fig 9 :55 and :57, Fig 1 :19, and the Symbols-table entry for `b`. These are eight short passages.
2. Check C1 against your own contact data: does any behavioral effect you know of survive with contact held fixed?
3. Check C2 against your own model: does reversing the feedback sign change wave count or bistability? Does removing the delay change wave spacing?
4. Name one instrument that would distinguish a belief-driven response from a ground-driven response in your surveillance data, or say why none is possible.
5. Send the refutation. A failure is more useful than an endorsement.

**Status of this packet:** a simulated derivation checked for internal consistency against the figures, not a ground reading. It cannot settle the claim it reports on.
