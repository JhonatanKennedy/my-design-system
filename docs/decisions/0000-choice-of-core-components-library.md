# Choice of Core Components Library

## Context and Problem Statement

This library should be compatible to every javascript frontend framework, so it can't be build on any framework because they don't share the same model of components so they will have they own lifecycles and it's impossible to share.

## Considered Options

- Lit
- Vanilla web components

## Decision Outcome

Chosen option: "Lit", because The DX of Lit is far more superior than the vanilla, and the lit dependency is pretty low.
