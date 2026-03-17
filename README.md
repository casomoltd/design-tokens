# design-tokens

Shared visual design tokens for Casomo products.

## What's included

Colours, spacing, border radii, and font definitions that make up the
Casomo brand palette.

## Consumers

- **hub-site** — product hub at `casomo.co.uk`
- **ltd-site** — consulting site at `casomoltd.com`
- **take-home** — React Native mobile app

## Source of truth

The canonical token values currently live in two places:

- `hub-site/src/app/globals.css` — CSS custom properties (brand palette,
  lines 14–47)
- `take-home/constants.ts` — React Native colour constants

This package will unify them into a single source.

## Current state

Package structure is TBD and will be fleshed out in a dedicated ticket.
