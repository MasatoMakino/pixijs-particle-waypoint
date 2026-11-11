# .devcontainer

Development container configurations for this project.

## Containers

| Container  | Directory        | Purpose                                                             |
| ---------- | ---------------- | ------------------------------------------------------------------- |
| pnpm Runner | `.devcontainer/` | Isolated pnpm execution, Chromium browser testing, iptables firewall |

## Files

| File                | Description                                                   |
| ------------------- | ------------------------------------------------------------- |
| `devcontainer.json` | pnpm Runner container configuration                            |
| `Dockerfile`        | pnpm Runner image (Node 26 + Debian Chromium + firewall tools) |
| `firewall-base.sh`  | Shared iptables firewall logic                                |
| `init-firewall.sh`  | pnpm Runner firewall domain allowlist                          |

## Design Decisions

See [DESIGN.md](DESIGN.md) for the security choices and the worktree setup.
