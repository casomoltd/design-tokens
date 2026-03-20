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

## Consumer setup

This package is published to GitHub Packages. Consumers need two things:

### 1. `.npmrc` in the consumer repo

```
@casomoltd:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=${NPM_TOKEN}
```

### 2. `NPM_TOKEN` in the environment

GitHub Packages requires authentication even for public packages.
The token needs the `read:packages` scope.

**Local dev** — add to `~/.bashrc` (or `~/.zshrc`):

```bash
export NPM_TOKEN=$(gh auth token)
```

Requires `gh auth refresh -h github.com -s read:packages` once to
grant the scope.

**Vercel** — set `NPM_TOKEN` as an environment variable on each
project in the Vercel dashboard (Settings > Environment Variables).

**EAS (Expo)** — set `NPM_TOKEN` in EAS secrets.

### 3. Add the dependency

```bash
npm install @casomoltd/design-tokens
```

## Publishing

Pushes to `main` trigger a GitHub Actions workflow that builds and
publishes to GitHub Packages. Bump `version` in `package.json`
before pushing to release a new version — `npm publish` will skip
if the version already exists.

## Consumers

- **hub-site** — product hub at `casomo.co.uk`
- **ltd-site** — corporate site at `casomoltd.com`
- **take-home** — React Native mobile app
