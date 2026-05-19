# Portfolio Starter

Starter codebase for a frontend portfolio with React, TypeScript, Vite, Ant Design, and pnpm.

## Getting started

```bash
pnpm install
pnpm dev
```

## Scripts

- `pnpm dev` - start local dev server
- `pnpm build` - type-check and build production bundle
- `pnpm preview` - preview production build
- `pnpm lint` - run ESLint
- `pnpm test` - run Jest unit tests
- `pnpm test:e2e` - run Playwright end-to-end tests

## Next customizations

- Update profile name and content in `src/pages/Home/consts.ts`
- Adjust navigation items in `src/layout/Portfolio/consts.ts`
- Connect contact form submit handler in `src/pages/Contact/index.tsx`

## Unit tests

Run tests for a single area:

```bash
pnpm exec jest Contact
```

## Playwright (E2E)

Install browsers once after dependencies:

```bash
pnpm exec playwright install
```

Run all E2E tests (starts the dev server automatically):

```bash
pnpm test:e2e
```

### Tips

- See the browser window: add `--headed`
- Run a single browser: `--project=chromium`
- Run one file: `pnpm exec playwright test tests/contact.spec.ts`
- Open testing UI: `pnpm exec playwright test --ui`

### HTML reports

```bash
pnpm exec playwright show-report
```
