# CLAUDE.md — WateringHub Card

## Git Permissions

- **Developer**: has full git write access (commit, push, tag, release, branch)
- **Claude**: read-only git access. Do NOT run `git commit`, `git push`, `git tag`, `git branch`, or any destructive git command. Claude can use `git status`, `git log`, `git diff` for context.

## Project

Custom Home Assistant card (LitElement + TypeScript) for the `wateringhub` integration.

## Naming

- Entity prefix: `wateringhub_`
- Card element: `wateringhub-card`
- Service: `wateringhub.stop_all`
- Never use `testwatering` anywhere

## Build

```bash
yarn build    # esbuild → dist/wateringhub-card.js
yarn watch    # dev mode with watch
```

`dist/` is committed to git (HACS requirement).

## Language

- Source: TypeScript (`.ts`, not `.tsx`)
- i18n: FR + EN, fallback EN
- LitElement uses tagged template literals (`html`...``), not JSX
