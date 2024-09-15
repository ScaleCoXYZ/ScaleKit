# 1. Record architecture decisions

Date: 2024-09-15

## Status

Accepted

## Context

In modern, iterative software development projects, architecture evolves over time and not all decisions are made at the project's outset. We need a way to document our architectural decisions that is:

1. Lightweight and easy to maintain
2. Accessible to all stakeholders
3. Versioned alongside the codebase
4. Provides context for both current and future team members

Large, monolithic documents often become outdated and are rarely read. We need a solution that encourages keeping our architectural documentation current and useful.

One of the biggest challenges in long-lived projects is understanding the motivation behind past decisions. New team members often struggle to comprehend why certain choices were made, leading to either blind acceptance of potentially outdated decisions or uninformed changes that might compromise the project's integrity.

## Decision

We will use Architecture Decision Records (ADRs) to document "architecturally significant" decisions: those that affect the structure, non-functional characteristics, dependencies, interfaces, or construction techniques of the project.

We will:

1. Keep ADRs in the project repository under `doc/architecture/decisions`
2. Use Markdown for formatting
3. Number ADRs sequentially and monotonically
4. Retain superseded ADRs with a clear indication of their current status
5. Follow a specific format for each ADR:
   - Title: Short noun phrase
   - Context: Description of forces at play (technical, political, social, project)
   - Decision: Our response to these forces
   - Status: Proposed, Accepted, Deprecated, or Superseded
   - Alternatives Considered: (Optional) Other options that were evaluated
   - Consequences: The resulting context after applying the decision

Each ADR should be concise (one or two pages) and written in full sentences as if conversing with a future developer.

## Alternatives Considered

1. Wiki-based documentation: While easily editable, wikis can become outdated and are not versioned alongside the code.
2. Extensive architecture documents: These tend to become outdated quickly and are often not read thoroughly by team members.
3. No formal documentation: This leads to knowledge loss and makes it difficult for new team members to understand past decisions.

## Consequences

Positive:

- Provides a clear historical record of architectural decisions and their context
- Facilitates better onboarding for new team members
- Encourages thoughtful consideration of architectural changes
- Helps track the evolution of the project's architecture over time
- Can help LLMs generate code aligned to the target architecture

Potential challenges:

- Requires discipline to maintain and update ADRs
- May need to educate team members on the importance and process of creating ADRs

By keeping ADRs with our code in version control:

- They remain easily accessible to developers
- They can be versioned and tagged alongside the code they describe
- Changes to ADRs can be reviewed and discussed just like code changes

We expect ADRs to improve our project's architectural coherence and make it easier for the team to understand and evolve the system over time

## Setup and Usage Notes

Installation instructions: https://github.com/npryce/adr-tools/blob/master/INSTALL.md

This was set up using the command:
`adr init doc/architecture/decisions`

Adding a new ADR is as simple as running the command:
`adr new <name-of-adr>`

Remember to update existing ADRs if decisions change, marking old versions as superseded and linking to new decisions.
