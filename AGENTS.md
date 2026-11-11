# AGENTS.md

This file provides guidance to AI coding agents when working with code in this repository.

## Commands

pnpm runs only in the DevContainer. Git runs on the host.

Each worktree has its own DevContainer. In a new worktree, run `devcontainer up --workspace-folder .` once before the other commands.

```bash
devcontainer up --workspace-folder .
devcontainer exec --workspace-folder . pnpm install --frozen-lockfile
devcontainer exec --workspace-folder . pnpm run buildTS
devcontainer exec --workspace-folder . pnpm test
devcontainer exec --workspace-folder . pnpm run demo
devcontainer exec --workspace-folder . pnpm run server
```

`pnpm run server` serves the demo on container port 3000. `docker port <container> 3000` shows the host port.

The git hooks in `.git/hooks/` run `pnpm run pre-commit` and `pnpm run pre-push` in the DevContainer, and start it when it is stopped.
