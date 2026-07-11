# Choice Between Monorepo and Polyrepo

## Context and Problem Statement

This libraries needs to be sync between they own and when i change one all of the others needs to be update without doing the same code.

## Considered Options

- Monorepo with pnpm
- Polyrepo

## Decision Outcome

Chosen option: "Monorepo with pnpm", because it's easier to do this "sync" when all of them are in the same repo, so using pnpm i can have the hot reload building the core components seen the result on the playground. Doing this on the polyrepo was gonna be a lot more work to sync them all.
