# What Repository Manager to Use

## Context and Problem Statement

So since we will have a lot of libraries we need a way to publish them and control their version, all of this automaticaly.

## Considered Options

- turborepo
- lerna

## Decision Outcome

Chosen option: "turborepo", because basically, I only knew these two tools, and I chose Turborepo because it provides task caching. For example, if I update ui-core and react and publish them, then later I only update vue, Turborepo can reuse the cached build results for the packages that haven't changed. It also ensures that tasks are executed in the correct order based on package dependencies.
