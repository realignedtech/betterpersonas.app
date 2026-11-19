# Personas for Jira — SvelteKit

Static SvelteKit implementation of `betterpersonas.app`, using the Story Mapping
site's shared Realigned architecture and the existing Personas for Jira content
and assets.

## Development

```bash
npm ci
npm run dev
```

## Validation

```bash
npm run check
npm run build          # also regenerates build/sitemap.xml
npm run verify:export  # acceptance checks against build/
```

The generated static site is written to `build/`.

## Deployment

Deploys run from CI. **Push to `main`** and
[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) builds a
`linux/arm64` image, pushes it to GHCR, then runs one forced-command SSH key on
the host to pull that exact commit's tag and restart the service. Pushes to
other branches and pull requests do **not** deploy; use the workflow's manual
`workflow_dispatch` trigger to run it by hand.

- Site key `betterpersonas` · service `betterpersonas-next.service` · image
  `ghcr.io/realignedtech/betterpersonas`
- Host: `core@windshift.sh` (arm64). The CI key is a forced command: it may only
  run `realigned-deploy`, which accepts `<site> <tag>` and nothing else — no
  shell, no port forwarding.
- Rollback: `ssh core@windshift.sh 'realigned-deploy betterpersonas rollback-<timestamp>'`.
  Every deploy logs the rollback tag it created.
- Host-side setup (forced-command script + keys + Traefik router) lives in the
  infra repo: `hetzner/scripts/website-ci-deploy-setup.sh`,
  `hetzner/website/realigned-deploy.sh`, and `hetzner/website/traefik/dynamic.yml`.
  This repo's `deploy/` serves the container on `:8076`.

The manual path still works and builds on the host instead of GHCR:
`deploy/` and `scripts/deploy.sh` mirror the `storymapping-next` container route:
Caddy serving the prerendered export on `:8076` behind Traefik. The deploy script
builds, ships the container to the web host, restarts the service, then runs
`scripts/verify-production.mjs` against https://betterpersonas.app.

## Open item: analytics

The legacy site used Plausible. The shared Realigned analytics stack is the
self-hosted Umami instance on `data.windshift.dev`, which needs a
`betterpersonas.app` website record before a tracker can ship. `src/app.html`
carries the commented-out script tag and `deploy/Caddyfile` already allows the
origin in its Content-Security-Policy. Once the Umami property exists, add its
public website ID to `src/app.html` and uncomment the tag.

## Content sources

- The legacy Next.js site (`stefan-ernst/storymapping-site-2`, `sites/personas`,
  still live on Netlify during rollout) is the content source of record for the
  documentation and homepage copy.
- The older Docusaurus site (`stefan-ernst/personas-site`) holds the original
  images and the bias-free persona guidance.
- This workspace is the new implementation and must not invent capabilities,
  customer claims, or proof that are absent from the product documentation.

## Wiring this site up (infra repo `hetzner`)

The repo is deploy-ready; the host still needs the same three additions the
sibling product sites have. None of these are in this repo:

1. **Traefik router** in `hetzner/website/traefik/dynamic.yml`: a `betterpersonas`
   router for `betterpersonas.app` + `www`, the `www-redirect` middleware, a
   Let's Encrypt certificate block, and a `betterpersonas-next` service pointing
   at `http://betterpersonas-next:8076`.
2. **Forced command** in `hetzner/website/realigned-deploy.sh`: a
   `betterpersonas` case mapping to `ghcr.io/realignedtech/betterpersonas`,
   `betterpersonas-next.service`, and `localhost/betterpersonas-next:1`.
3. **Deploy key** by adding `betterpersonas` to the `SITES` default in
   `hetzner/scripts/website-ci-deploy-setup.sh` and re-running it.

Then create `realignedtech/betterpersonas.app` on GitHub (or push this tree to
it), add the `DEPLOY_SSH_KEY` and `DEPLOY_HOST_KEY` secrets, and cut the
`betterpersonas.app` DNS A record to the Windshift host. The legacy Netlify
origin should stay in place as the rollback route until the migration is
confirmed stable. Finally, create the Umami property and uncomment the tracker
in `src/app.html` (see above).
