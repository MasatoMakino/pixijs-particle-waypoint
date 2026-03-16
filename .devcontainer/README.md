# .devcontainer

Development container configurations for this project.

## Containers

| Container  | Directory        | Purpose                                                           |
| ---------- | ---------------- | ----------------------------------------------------------------- |
| npm Runner | `.devcontainer/` | Isolated npm execution, Chrome browser testing, iptables firewall |

## Files

| File                  | Description                                                  |
| --------------------- | ------------------------------------------------------------ |
| `devcontainer.json`   | npm Runner container configuration                           |
| `Dockerfile`          | npm Runner image (Node 24 + Chrome + xvfb + firewall tools)  |
| `firewall-base.sh`    | Shared iptables firewall logic                               |
| `init-firewall.sh`    | npm Runner firewall domain allowlist                         |
| `seccomp-chrome.json` | Custom seccomp profile for Chrome sandbox without SYS_ADMIN  |

## Design Decisions

See [DESIGN.md](DESIGN.md) for rationale on security choices, including the custom seccomp profile.
