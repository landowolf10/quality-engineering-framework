# Quality Engineering Framework

A professional quality engineering framework built with Playwright and TypeScript.

## Technology Stack

- Node.js 24 LTS
- TypeScript
- Playwright Test
- ESLint
- Prettier
- GitHub Actions (planned)

## Prerequisites

- Node.js 24 LTS
- npm compatible with the selected Node.js version
- Git

## Installation

```bash
npm ci
```

Install the Playwright browsers when the Playwright configuration and browser
projects are introduced:

```bash
npx playwright install chromium firefox webkit
```

## Available Commands

| Command                | Purpose                        |
| ---------------------- | ------------------------------ |
| `npm test`             | Run the Playwright test suite  |
| `npm run test:ui`      | Run UI tests                   |
| `npm run test:api`     | Run API tests                  |
| `npm run test:smoke`   | Run tests tagged with `@smoke` |
| `npm run lint`         | Run ESLint                     |
| `npm run typecheck`    | Check TypeScript types         |
| `npm run format`       | Format project files           |
| `npm run format:check` | Check formatting               |

Test commands will become fully usable as the corresponding suites are
implemented.

## Project Status

The framework is being built incrementally. Browser configuration, UI and API
test suites, reporting, diagnostics, and continuous integration will be added
in subsequent implementation phases.
