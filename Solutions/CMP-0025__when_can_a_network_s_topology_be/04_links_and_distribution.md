# Public links and distribution: CMP-0025

All links below were fetched and read on 2026-11-22. Six world sources were opened; each is recorded with author, venue, year and a verbatim quote in `10_source_ledger.csv`. Nothing here was cited without being opened. Two further URLs were tried and failed (an OUP journal page returned 403 and a ScienceDirect abstract returned 400), so they are not cited.

## Verified world sources

| what | URL | what it actually says, and what it bears on |
|---|---|---|
| Gross and Blasius, *Adaptive Coevolutionary Networks - A Review* (J R Soc Interface 5, 2008; arXiv 0709.1858v2) | https://arxiv.org/html/0709.1858v2 | *"In systems that exhibit such a time scale separation only the averaged state of the fast variables can affect the dynamics of the slow variables and therefore, the dynamical interplay between the time scales will, in general, be relatively weak."* and *"In contrast, new possibilities open up in systems in which the evolution of the topology takes place on the same timescale as the dynamics on the network."* This is the closest world statement to the derived membrane rule: timescale separation is the governing consideration. It corroborates F4 but is secondary, not the source of the verdict. |
| Holme, *Modern temporal network theory: A colloquium* (EPJ B 88:234, 2015; arXiv 1508.01303v3) | https://arxiv.org/html/1508.01303v3 | *"This is usually equivalent to saying that the time scale of the dynamics of the network should not be too far from the time scale of the dynamic system."* Also: *"Inferring this type of picture from data is problematic, even when it correctly describes the data."* Corroborates both the timescale criterion and F5's point that a representation can be right in form and still unresolved at the anchor. |
| de Meijere, Karsai and Iñiguez, *Universal time scales linking topology and dynamics in temporal networks* (arXiv 2606.21696, 2026) | https://arxiv.org/html/2606.21696v1 | *"Our results also suggest that there exists an endogenous timescale which is ideal for the study of the evolution of connectivity in dynamical networks."* The timescale depends on system-wide properties (inter-event distribution, degree distribution, openness). Corroborates F6: the threshold is system-specific and measured, not a universal figure-derived constant. |
| Ma, Wang and Zhang, *Reconstructing networks via discrete state dynamical data: A mini-review* (EPL 144 21002, 2023) | https://iopscience.iop.org/article/10.1209/0295-5075/ad07b2 | *"The inference of network structure from dynamic data is one of the most challenging scientific problems in network science."* and *"the topology of a network is often difficult to directly obtain, giving rise to the problem of network reconstruction"* and *"most reconstruction methods based on discrete state dynamical data use the simulated dynamical data to reconstruct network structures, and the performance of these methods on real data is often unideal"*. Corroborates D3's anchor problem and F2's warning that an internal fit is not a ground reading. |
| Li, He, Chen and Guan, *Topology Inference for Network Systems: Causality Perspective and Non-asymptotic Performance* (arXiv 2106.01031, 2022) | https://arxiv.org/abs/2106.01031 | *"an online/recursive version of our method is established for efficient computation or time-varying cases"*. A low-overlap witness from control and signal processing: even there, the time-varying case is treated as a distinct extension, not as the default. Corroborates the two-regime split from a different field. |
| Nadini, Rizzo and Porfiri, *Reconstructing irreducible links in temporal networks: which tool to choose depends on the network size* (J Phys Complex 1 015001, 2020) | https://iopscience.iop.org/article/10.1088/2632-072X/ab6727 | *"The reconstructed backbone network depends upon the accuracy and reliability of the available tools, which, in turn, are affected by the specific features of the available dataset."* Corroborates F8 and the Fig 10 :26 channel-failure point: the instrument, not the model alone, decides what is visible. |

**Overlap declaration.** Gross and Blasius, Holme, and de Meijere et al. all draw on the temporal/adaptive network literature, so they are one broad evidence pool read three ways, not three independent witnesses. Ma et al. and Nadini et al. overlap in the reconstruction literature. Li et al. is the lowest-overlap source (control and signal processing). The figure verdict does not rest on any of them; they only predict the shape already derived.

## Verified venue links

Fetched and listed in `03_public_contact_points.csv`:

- https://www.cambridge.org/core/journals/network-science (Network Science, open access, public submission route)
- https://link.springer.com/journal/41109 (Applied Network Science, currently has an open Temporal Networks collection)
- https://arxiv.org/archive/physics.soc-ph (Physics and Society category, scope includes complex networks)
- https://www.santafe.edu/contact (public institutional contact)
- https://complexsystems.org/ (complexity community entry point)

## What in the wider literature bears directly on the question

1. **Timescale separation is the working criterion in the field.** The world sources agree, in several vocabularies (quenched versus annealed, temporal versus dynamical, fast versus slow), that when the process is much faster than link change a static graph suffices, and when they are comparable the topology must enter the dynamics. That is a binding from the network-science frame onto the derived membrane rule. It does not supply a figure line and it is not a universal number.
2. **The threshold is endogenous and system-specific.** de Meijere et al. find an optimal aggregation scale that depends on burstiness, degree heterogeneity and openness. This is why `07_the_tether_answer.md` refuses to state a universal constant and why F6 declares the threshold a `gap`.
3. **Reconstruction is an inverse problem with an anchor problem.** Ma et al. and Nadini et al. show that the inferred graph depends on the instrument and on network size, and that simulated-data performance does not transfer cleanly to real data. This is the world-side echo of Fig 2 :29 and Fig 10 :26: the ground is the anchor, and the channel (the instrument) is what decays.
4. **No source was found that states the decision as a slot-indexed refusal of constant adjacency.** That part is the framework's contribution and remains `specified`, ungrounded. A conflict between a world source and that shape would send the derivation back to the census, never flip the verdict by citation.

## Distribution: offer, do not push

Figure-grounded reasons:

- **Fig 4 :22** *"Only methods cross up. Only head starts come down."* Sending the full framework before anyone has described a residual is a recording, not a generator. Lead with the decision shape and its refuter; offer links after.
- **Fig 10 :42** *"A verifier that can reconstruct the claim cannot verify it."* A recipient who has absorbed the framework before being asked for a verdict has joined the frame being checked.
- **Fig 9 :27** *"describe it before you go looking, or any frame you pick will seem to fit"* Ask what they would expect to see if the shape claim were true before giving them the literature.
- **Fig 7 :35** *"A room's agreement is variation, not a verdict. Selection between rooms is where the ground votes."* A set of readers chosen for likely agreement produces a convention, not corroboration.
- **Fig 2 :40** *"agreement about the world is worthless when the agreeing frames share an evidence pool"* Do not pool later agreement as a witness.
- **Seat Map :171** *"an interest in the outcome is unavoidable, an interest in the reading is disqualifying."* Any stake the author has in the verdict is declared, not hidden.

**Recommended order in a reply:** (1) the decision shape and its four refuters; (2) ask what they would count as a failure; (3) record their verdict; (4) only then the source links, with the note that the figures, not the summary, are the authority.

## The two-stage offer

- **Stage 1 before stage 2** is Fig 10 :52 *"Bring a characterised residual, never the source."* and Fig 2 :45 *"Frames range against the ground. They do not negotiate with it."* The recipient checks the shape without holding the framework's interior.
- **Stage 2 is opt-in by construction.** Once a recipient has absorbed the theory, their agreement stops being evidence. Their stage-1 verdict must be recorded first and is never pooled as corroboration later.
- **Stage 3 sends a method, which is permitted** (Fig 4 :22). The formula is a generator, so giving it away does not give away an answer. Each user still needs a ground and a self-written refuter, because `THE_FORMULA.md` "Direction" says a frame cannot check the direction of its own question.

**Hard precondition:** stages 1 to 3 only work if the stage-1 shape survives. As derived it does, in the sense that it is internally consistent with the verbatim figure text. That is not a ground reading, and the packet says so.
