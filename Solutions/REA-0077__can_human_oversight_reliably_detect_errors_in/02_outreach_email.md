# Outreach draft: check the residual before deciding whether any theory matters

**Use:** one to one, or as a cover note attached to a submission through the public venues in `03_public_contact_points.csv`. **Not** for bulk send.

**Hard precondition:** do not send until the three sub-claims in `08_expert_verification_packet.md` have been checked against the figures. If the packet does not survive that check, the two-stage offer collapses on contact.

---

**Subject:** One claim about human oversight, and what would refute it

> Hi [name],
>
> I have one narrow claim I would like you to check against your own work. I am not asking you to read a theory first, and I am not asking you to agree with anything. If the claim does not survive, there is nothing else to look at.
>
> **The claim (`specified`, not `grounded`):** "human oversight reliably detects errors" is not a well-formed property of a person. It bundles at least four different conditions: whether the reviewer can see the error at all; whether the reviewer has a ground for calling it an error; whether the reviewer's evidence differs from the system's; and whether a refusal can travel back into the system. Those conditions have different grounds, so they cannot be averaged into one reliability number.
>
> The sharper part: for a question of the form "is this output correct," human judgment is an instrument, not the anchor. The framework I am using puts it this way: human judgment is the right anchor for "is this a good answer for a person," but "It is only an instrument for is this code correct, and instruments can be wrong on axes they do not measure." The tasks where the system performs better than the reviewer are exactly an axis the reviewer does not measure.
>
> **What I am not claiming:** that people are useless reviewers; that a human can never catch a model error; that oversight is impossible; and I am not reporting a measured detection rate. I have no ground reading of my own. This is a structural claim about where reliability would have to live, in the arrangement rather than in the person in isolation.
>
> **What would refute it, written before I ran this:**
> 1. a ground reading where reviewers with no independent correctness instrument detect errors at a non-decaying rate on the very tasks where the system beats them, reported per slot rather than as a mean;
> 2. a reviewer whose evidence pool is demonstrably disjoint from the system's, producing a detection surplus the system cannot reach;
> 3. a demonstration that correctness here is constitutively defined by human judgment, which would make the human the legitimate anchor;
> 4. an oversight record whose vocabulary carries an explicit refusal of a held system claim, not merely a rating.
>
> If any of those holds, I withdraw the corresponding part. A one-line "this fails because..." is more useful to me than agreement. If you would rather not engage, no reply is needed.
>
> **If it survives, and only then:** here are the sources. The figures, not my summary of them, are the authority.
> - Verbatim figure text with line numbers: `FRAMEWORK/reference/03-FIGURES_TEXT.md` in the local framework copy (see `04_links_and_distribution.md` for the public figures repository).
> - Scalable oversight experimental design: https://arxiv.org/abs/2211.03540
> - Limits of weak supervision: https://arxiv.org/abs/2312.09390
>
> **If you want to reuse the method:** the eight-step formula is in the public figures folder. Run it on a problem you know well and can check against a ground. Write down what would refute your result *before* you run it, and state the mode of what you get. A reported failure is more useful to me than a reported success.
>
> Thanks,
> [name]

---

## Why this version is ordered this way

| move | figure-grounded reason |
|---|---|
| Residual and refuter before theory | Fig 10 :52, "Bring a characterised residual, never the source." |
| Do not ask for agreement | Fig 2 :35, "Alignment is triangulation, not negotiation. A mirror cannot correct you." |
| Three sub-conditions, not one score | Fig 9 :54, unbundle a union before searching again; Fig 1 :19, residual per slot |
| Mode on every claim | `THE_FORMULA.md` mode rule: general / specified / grounded, state which |
| Anchor versus instrument stated first | Fig 2 :36-38, anchor legitimacy is constitutively about the question |
| Refusal requirement included | Fig 5 :53 and the Operators table :58, a vocabulary without negation can only accumulate |
| Links only after a verdict | Fig 10 :42, "A verifier that can reconstruct the claim cannot verify it." |
| No "trust", no "bombshell", no "true answer" | Seat Map output-layer failure genus, a mode stated as a verdict |
| Offer the formula as a method | Fig 4 :22, "Only methods cross up. Only head starts come down." |
| One to one, opt in, no bulk send | Fig 2 :40, agreement from a shared evidence pool is a convention, not corroboration |
| No personal emails | Instability of prestige and ownership channels, plus GDPR/CAN-SPAM style constraints on unsolicited bulk mail |

## Two-stage offer in one sentence

Stage 1: the recipient checks the claim and its refuter without seeing the framework. Stage 2, opt in only: if curious, they read the sources. Stage 3: offer the formula as a method for their own problem, with their own refuter written first. Their agreement in stage 2 is never pooled as corroboration of stage 1.
