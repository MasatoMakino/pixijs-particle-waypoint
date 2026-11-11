# AGENTS.md

This file provides guidance to AI coding agents when working with code in this repository.

## Commands

npm runs only in the DevContainer. Git runs on the host.

Each worktree has its own DevContainer. In a new worktree, run `devcontainer up --workspace-folder .` once before the other commands.

```bash
devcontainer up --workspace-folder .
devcontainer exec --workspace-folder . npm ci
devcontainer exec --workspace-folder . npm run buildTS
devcontainer exec --workspace-folder . npm test
devcontainer exec --workspace-folder . npm run demo
devcontainer exec --workspace-folder . npm run server
```

`npm run server` serves the demo on container port 3000. `docker port <container> 3000` shows the host port.

The git hooks in `.git/hooks/` run `npm run pre-commit` and `npm run pre-push` in the DevContainer, and start it when it is stopped.
