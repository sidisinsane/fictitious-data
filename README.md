# npm-package-template

A npm package template with typescript.

[![License: MIT](https://img.shields.io/badge/License-MIT-white.svg?style=flat)](https://github.com/sidisinsane/npm-package-template/blob/main/LICENSE)

## Getting started

|                        | pnpm                    | npm                    | yarn                    |
| ---------------------- | ----------------------- | ---------------------- | ----------------------- |
| Install dependencies   | `pnpm install`          | `npm install`          | `yarn`                  |
| Generate documentation | `pnpm run docs`         | `npm run docs`         | `yarn run docs`         |
| Run unit tests         | `pnpm run test`         | `npm run test`         | `yarn run test`         |
| Build                  | `pnpm run build`        | `npm run build`        | `yarn run build`        |
| Lint                   | `pnpm run lint[:fix]`   | `npm run lint[:fix]`   | `yarn run lint[:fix]`   |
| Format                 | `pnpm run format[:fix]` | `npm run format[:fix]` | `yarn run format[:fix]` |

---

## FYI

[![Language: TypeScript](https://img.shields.io/badge/Language-TypeScript-3178c6.svg?style=flat)](https://www.typescriptlang.org/) [![Bundler: tsup](https://img.shields.io/badge/Bundler-tsup-fde047.svg?style=flat)](https://tsup.egoist.dev/) [![Code Formatter: Prettier](https://img.shields.io/badge/Code_Formatter-Prettier-c596c7.svg?style=flat)](https://prettier.io/) [![Linter: ESLint](https://img.shields.io/badge/Linter-ESLint-4b32c3.svg?style=flat)](https://eslint.org/) [![Documentation: TypeDoc](https://img.shields.io/badge/Documentation-TypeDoc-9600ff.svg?style=flat)](https://typedoc.org/) [![Unit Testing Framework: Jest](https://img.shields.io/badge/Unit_Testing_Framework-Jest-c21325.svg?style=flat)](https://jestjs.io/) [![Unit Testing Framework: ts-jest](https://img.shields.io/badge/Unit_Testing_Framework-ts--jest-98435b.svg?style=flat)](https://kulshekhar.github.io/ts-jest/) [![Workflow: Husky](https://img.shields.io/badge/Workflow-Husky-10b981.svg?style=flat)](https://typicode.github.io/husky/) [![Workflow: lint-staged](https://img.shields.io/badge/Workflow-lint--staged-white.svg?style=flat)](https://github.com/okonet/lint-staged) [![Workflow: Commitizen](https://img.shields.io/badge/Workflow-Commitizen-d5000d.svg?style=flat)](http://commitizen.github.io/cz-cli/) [![Workflow: semantic-release](https://img.shields.io/badge/Workflow-semantic--release-3884ff.svg?style=flat)](https://semantic-release.gitbook.io/semantic-release/)

### Code Language & Bundling

- [TypeScript](https://www.typescriptlang.org/): TypeScript is JavaScript with syntax for types.
- [tsup](https://tsup.egoist.dev/): Bundle your TypeScript library with no config, powered by esbuild.

**Install**

```bash
pnpm add -D typescript tsup
```

**Configure**

`tsconfig.json`:

```json
{
  "compilerOptions": {
    "target": "es2020",
    "module": "commonjs",
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "strict": true,
    "skipLibCheck": true
  }
}
```

`tsup.config.ts`:

```typescript
import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  target: "es2020",
  format: ["cjs", "esm"],
  splitting: false,
  sourcemap: true,
  clean: true,
  dts: true,
});
```

### Code Formatting & Linting

- [Prettier](https://prettier.io/): Prettier is an opinionated code formatter.
- [ESLint](https://eslint.org/): ESLint statically analyzes your code to quickly find problems.

**Install**

```bash
pnpm add -D @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint eslint-config-prettier prettier
```

**Configure**

`.eslintrc.cjs`:

```javascript
/* eslint-env node */
module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
  ],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  root: true,
};
```

`.prettierrc` _(see `.editorconfig`)_:

```json
{}
```

### Documentation

- [TypeDoc](https://typedoc.org/): TypeDoc converts comments in TypeScript source code into rendered HTML documentation or a JSON model.

**Install**

```bash
pnpm add -D typedoc @mxssfd/typedoc-theme
```

**Configure**

`typedoc.config.cjs`:

```javascript
/* eslint-env node */
/** @type {import('typedoc').TypeDocOptions} */
module.exports = {
  entryPoints: ["./src/index.ts"],
  out: "docs",
  plugin: ["@mxssfd/typedoc-theme"],
  theme: "my-theme",
  cleanOutputDir: true,
};
```

### Unit Testing

- [Jest](https://jestjs.io/): Jest is a delightful JavaScript Testing Framework with a focus on simplicity.
- [ts-jest](https://kulshekhar.github.io/ts-jest/): A Jest transformer with source map support that lets you use Jest to test projects written in TypeScript.

**Install**

```bash
pnpm add -D jest ts-jest @types/jest && \
npx ts-jest config:init
```

**Configure**

`jest.config.cjs`:

```javascript
/* eslint-env node */
/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  collectCoverage: true,
  coverageDirectory: "coverage",
  coveragePathIgnorePatterns: ["/node_modules/"],
  coverageProvider: "v8",
  coverageReporters: ["json", "text", "lcov", "clover"],
};
```

### Workflow

- [Husky](https://typicode.github.io/husky/): Modern native git hooks made easy.
- [lint-staged](https://github.com/okonet/lint-staged): Run linters against staged git files.
- [Commitizen](http://commitizen.github.io/cz-cli/): Simple commit conventions for internet citizens.
- [cz-conventional-changelog](https://github.com/commitizen/cz-conventional-changelog): Part of the commitizen family. Prompts for [conventional changelog](https://github.com/conventional-changelog/conventional-changelog) standard.
- [semantic-release](https://semantic-release.gitbook.io/semantic-release/): Automates the whole package release workflow including: determining the next version number, generating the release notes, and publishing the package.

#### Husky & lint-staged

**Install**

**see: https://prettier.io/docs/en/precommit.html#option-1-lint-stagedhttpsgithubcomokonetlint-staged**

```bash
npx mrm@2 lint-staged
```

**Configure**

`.lintstagedrc`:

```json
{
  "*.js": "eslint --cache --fix",
  "*.--check": "prettier --write"
}
```

`.husky/pre-commit`:

```
#!/usr/bin/env sh
. "$(dirname "$0")/_/husky.sh"

npx lint-staged
```

#### Commitizen & semantic-release

**Install**

```bash
npm install commitizen -g && \
commitizen init cz-conventional-changelog --pnpm --save-dev --save-exact && \
pnpm add -D semantic-release conventional-changelog-conventionalcommits
```

Incorporate Commitizen into the existing git commit workflow.

`.husky/prepare-commit-msg`:

```
#!/usr/bin/env sh
. "$(dirname "$0")/_/husky.sh"

exec </dev/tty && npx cz --hook || true
```

**Configure**

`.czrc`:

```json
{
  "path": "cz-conventional-changelog"
}
```

`.releaserc`:

```json
{
  "branches": ["main"],
  "plugins": [
    [
      "@semantic-release/commit-analyzer",
      {
        "preset": "conventionalcommits",
        "releaseRules": [
          {
            "type": "build",
            "scope": "deps",
            "release": "patch"
          }
        ]
      }
    ],
    [
      "@semantic-release/release-notes-generator",
      {
        "preset": "conventionalcommits",
        "presetConfig": {
          "types": [
            {
              "type": "feat",
              "section": "Features"
            },
            {
              "type": "fix",
              "section": "Bug Fixes"
            },
            {
              "type": "build",
              "section": "Dependencies and Other Build Updates",
              "hidden": false
            }
          ]
        }
      }
    ],
    "@semantic-release/npm",
    "@semantic-release/github"
  ]
}
```
