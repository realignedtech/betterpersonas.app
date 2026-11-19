# Personas for Jira

## Product

Personas for Jira lets a team maintain customer persona profiles inside Jira
projects. A profile is built from a name, a description, an image or colour, and
any custom fields the team needs, scoped per project or globally. Personas are
linked to the Jira issues they describe, so the customer context is available
where the work is planned.

The Atlassian Marketplace listing is `1225680`
(https://marketplace.atlassian.com/apps/1225680/personas-for-jira).
Installation, evaluation, licensing, and updates are handled through Atlassian
Marketplace.

## Site architecture

- SvelteKit 2 and Svelte 5
- Static generation with `@sveltejs/adapter-static`
- Tailwind CSS 3
- mdsvex documentation routes
- Shared Realigned navigation, footer, Trust Center, SEO, and Umami patterns from
  the Story Mapping site

The legacy Next.js site (source `stefan-ernst/storymapping-site-2`,
`sites/personas`, still live on Netlify during rollout) is the content source of
record. This workspace is the new implementation and must not invent
capabilities, customer claims, or proof that are absent from the product
documentation.

## Brand and URLs

- Product: **Personas for Jira**
- Site: `https://betterpersonas.app`
- Marketplace: `https://marketplace.atlassian.com/apps/1225680/personas-for-jira`
- Product icon: `/PersonaAppIcon.svg`
- Social image: `/realignedOG.png`
- Publisher: Realigned Technologies Ltd.

The product name is exactly "Personas for Jira". The homepage title is the
approved snippet rewrite: "Personas for Jira - Keep Personas Beside Your Jira
Work". Do not re-introduce the legacy "for Jira for Jira" title template.

## Principles

1. Keep Jira as the source of truth; persona profiles live beside the issues.
2. Show the product with real screenshots rather than unsupported claims.
3. Make documentation and privacy information easy for existing customers to
   find.
4. Preserve the exact product name and the existing documentation URLs.
