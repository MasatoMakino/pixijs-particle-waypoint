# .devcontainer

Development container configurations for this project.

## Containers

| Container  | Directory        | Purpose                                                             |
| ---------- | ---------------- | ------------------------------------------------------------------- |
| npm Runner | `.devcontainer/` | Isolated npm execution, Chromium browser testing, iptables firewall |

## Files

| File                | Description                                                   |
| ------------------- | ------------------------------------------------------------- |
| `devcontainer.json` | npm Runner container configuration                            |
| `Dockerfile`        | npm Runner image (Node 26 + Debian Chromium + firewall tools) |
| `firewall-base.sh`  | Shared iptables firewall logic                                |
| `init-firewall.sh`  | npm Runner firewall domain allowlist                          |

## Design Decisions

See [DESIGN.md](DESIGN.md) for the security choices and the worktree setup.
