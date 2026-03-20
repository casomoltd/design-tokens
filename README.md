# @casomoltd/design-tokens

Shared visual design tokens for Casomo products.

## What's included

Brand colour palette, font definitions, and spacing constants.

## Build

```bash
npm install
npm run build
```

Produces:

- `dist/tokens.js` + `dist/tokens.d.ts` — JS/TS consumers
- `dist/tokens.css` — CSS custom properties (`:root` block)

## Usage

**CSS** (web apps):

```css
@import '@casomoltd/design-tokens/css';
```

**JS/TS**:

```ts
import { palette, fonts } from '@casomoltd/design-tokens';
```

## Consumers

- **hub-site** — product hub at `casomo.co.uk`
- **ltd-site** — corporate site at `casomoltd.com`
- **take-home** — React Native mobile app
