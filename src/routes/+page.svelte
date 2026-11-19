<script>
	import SiteShell from '$lib/components/SiteShell.svelte';
	import DottedClouds from '$lib/components/DottedClouds.svelte';
	import { softwareApplicationSchema } from '$lib/seo/schema.js';

	const MARKETPLACE_LINK = 'https://marketplace.atlassian.com/apps/1225680/personas-for-jira';
	const HEAD_TITLE = 'Personas for Jira - Keep Personas Beside Your Jira Work';

	// Stated in machine-readable form so search engines and AI systems attribute
	// the product to the right developer. Mirrors the Organization node on realigned.io.
	const softwareApplicationJson = JSON.stringify(
		softwareApplicationSchema({
			name: 'Personas for Jira',
			description:
				'Manage persona profiles directly in Jira: build profiles with custom images and fields, link them to the issues they care about, and keep customer context beside the work.',
			url: 'https://betterpersonas.app/',
			image: 'https://betterpersonas.app/realignedOG.png',
			operatingSystem: 'Atlassian Jira',
			sameAs: [MARKETPLACE_LINK],
			featureList: [
				'Persona profiles inside Jira projects',
				'Custom images or colours for each persona',
				'Custom fields per project or globally',
				'Link one or many personas to a Jira issue',
				'Generated JQL queries for persona issues',
				'Persona filters in Story Maps for Jira'
			]
		})
	);

	const capabilities = [
		{ title: 'Link your Jira issues', text: 'Link one or many personas to a Jira issue with custom fields or the built-in issue picker, then see every relevant issue in seconds.', href: '/docs/linking-issues' },
		{ title: 'Customise personas', text: 'Build profiles with real images or colours, and add the custom fields that matter to your team, per project or globally.', href: '/docs/building-persona' },
		{ title: 'Build better personas', text: 'Follow our guide to bias-free persona profiles: skip real names, use non-photographic images, and start from real data.', href: '/docs/bias-free-personas' }
	];

	const details = [
		{ title: 'Fully integrated', text: 'Enrich Jira issues with persona profiles and give your team and stakeholders added context for requirements.' },
		{ title: 'Edit on the fly', text: 'Edit personas in a few clicks and manage all customer requirements in one place.' },
		{ title: 'Fits your needs', text: 'Create custom fields to capture anything you want, scoped to a project or available everywhere in Jira.' },
		{ title: 'Communicate personas', text: 'Align your team and stakeholders around customer profiles and the functionality they want.' },
		{ title: 'Use in a story map', text: 'Compatible with Story Maps for Jira and Advanced Story Maps for Jira, so you can filter the map by persona.' },
		{ title: 'A better visual experience', text: 'Use real photos to illustrate your profiles or use colours to communicate intent.' }
	];
</script>

<SiteShell
	headTitle={HEAD_TITLE}
	description="Manage your customer personas directly in Jira: build persona profiles, link them to the issues they care about, and keep customer context beside the work."
	marketplaceLink={MARKETPLACE_LINK}
>
	<main class="bg-[var(--bg-base)] text-[var(--text-primary)]">
		<section aria-labelledby="hero-title" class="realigned-hero relative isolate overflow-hidden pb-20 pt-20 sm:pb-28 sm:pt-24">
			<DottedClouds opacity={0.18} />
			<div class="wave-glow" aria-hidden="true"></div>
			<div class="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
				<div class="mx-auto max-w-4xl text-center">
					<div class="mb-7 flex items-center justify-center gap-5">
						<img src="/PersonaAppIcon.svg" width="72" height="72" alt="" class="h-16 w-16 flex-none drop-shadow-lg sm:h-[4.5rem] sm:w-[4.5rem]" />
						<p class="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-100/80">Personas for Jira</p>
					</div>
					<h1 id="hero-title" class="text-[clamp(40px,6vw,68px)] font-bold leading-[1.04] tracking-tight text-white">
						Keep your customer personas beside the Jira work they describe.
					</h1>
					<p class="mx-auto mt-6 max-w-3xl text-xl leading-relaxed text-white/85 sm:text-2xl">
						Build persona profiles directly in Jira, link them to the issues they care about, and give your team the customer context behind every requirement.
					</p>
					<div class="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
						<a href={MARKETPLACE_LINK} target="_blank" rel="noreferrer" data-umami-event="marketplace_click" data-umami-event-product="personas" data-umami-event-listing-id="1225680" data-umami-event-intent="trial" data-umami-event-source-page="/" data-umami-event-placement="homepage_hero" class="realigned-primary-button text-base">Start a free trial</a>
						<a href="/docs" class="realigned-secondary-button text-base">Read the documentation</a>
					</div>
					<div class="mt-8 flex flex-col items-center justify-center gap-2 text-sm text-white/80">
						<span>Available on</span>
						<a href={MARKETPLACE_LINK} target="_blank" rel="noreferrer" aria-label="Atlassian Marketplace listing" data-umami-event="marketplace_click" data-umami-event-product="personas" data-umami-event-listing-id="1225680" data-umami-event-intent="trial" data-umami-event-source-page="/" data-umami-event-placement="homepage_hero_badge">
							<img src="/atlassian-marketplace-inverse.svg" width="266" height="22" alt="Atlassian Marketplace" class="h-5 w-auto" />
						</a>
					</div>
				</div>

				<div class="relative mx-auto mt-12 max-w-6xl sm:mt-16">
					<img
						src="/main/personasapp3.png"
						width="2324"
						height="1422"
						alt="Persona profiles in Personas for Jira"
						class="w-full drop-shadow-2xl"
					/>
				</div>
			</div>
		</section>

		<section aria-label="Product highlights" class="border-b border-[var(--border-subtle)] bg-[var(--bg-base)] py-10">
			<div class="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-9 gap-y-4 px-4 text-sm font-semibold text-[var(--text-secondary)] sm:px-6 sm:text-base lg:px-8">
				<span class="inline-flex items-center gap-2"><i class="status-check">✓</i> Runs inside Jira</span>
				<span class="inline-flex items-center gap-2"><i class="status-check">✓</i> Custom images and fields</span>
				<span class="inline-flex items-center gap-2"><i class="status-check">✓</i> Link issues to personas</span>
				<span class="inline-flex items-center gap-2"><i class="status-check">✓</i> Free trial on Marketplace</span>
			</div>
		</section>

		<section aria-labelledby="capabilities-title" class="realigned-band border-b border-[var(--border-subtle)] py-24">
			<div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
				<div class="mx-auto max-w-3xl text-center">
					<p class="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[var(--text-muted)]">Customer context where the work happens</p>
					<h2 id="capabilities-title" class="text-3xl font-semibold tracking-tight text-[var(--text-primary)] sm:text-4xl">Deliver value with a customer-centric backlog.</h2>
					<p class="mt-5 text-lg leading-relaxed text-[var(--text-secondary)]">Keep persona profiles in Jira, connect them to real issues, and help the whole team understand who the work is for.</p>
				</div>
				<div class="mt-14 grid gap-5 md:grid-cols-3">
					{#each capabilities as capability}
						<article class="realigned-card capability-card flex flex-col rounded-lg p-7">
							<div class="mb-6 flex h-11 w-11 items-center justify-center rounded-md bg-[var(--action-soft)] text-[var(--accent-cyan)]">
								<svg aria-hidden="true" class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m5 12 4 4L19 6" /></svg>
							</div>
							<h3 class="text-xl font-semibold text-[var(--text-primary)]">{capability.title}</h3>
							<p class="mt-3 flex-1 leading-relaxed text-[var(--text-secondary)]">{capability.text}</p>
							<a href={capability.href} class="mt-6 font-semibold text-[var(--accent-cyan)] hover:text-[var(--action-hover)]">Read the guide <span aria-hidden="true">→</span></a>
						</article>
					{/each}
				</div>
			</div>
		</section>

		<section aria-labelledby="link-title" class="bg-[var(--bg-base)] py-24">
			<div class="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
				<div>
					<p class="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[var(--text-muted)]">Fully integrated</p>
					<h2 id="link-title" class="text-3xl font-semibold tracking-tight text-[var(--text-primary)] sm:text-4xl">See every relevant issue in seconds.</h2>
					<p class="mt-5 text-lg leading-relaxed text-[var(--text-secondary)]">Link one or many personas to a Jira issue using the Personas custom field or the built-in issue picker. Open a persona profile to see the issues it is connected to, or copy the generated JQL query into your own Jira searches.</p>
					<a href="/docs/searching-issues" class="realigned-secondary-button mt-8">See how search works</a>
				</div>
				<img src="/main/personasapp2.png" width="1162" height="695" loading="lazy" alt="Issues linked to a persona profile in Jira" class="w-full drop-shadow-2xl" />
			</div>
		</section>

		<section aria-labelledby="customise-title" class="bg-[var(--bg-base)] pb-24">
			<div class="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:px-8">
				<img src="/main/issueview.png" width="1162" height="671" loading="lazy" alt="A persona shown on the Jira issue view" class="w-full drop-shadow-2xl" />
				<div>
					<p class="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[var(--text-muted)]">Adapts to your company</p>
					<h2 id="customise-title" class="text-3xl font-semibold tracking-tight text-[var(--text-primary)] sm:text-4xl">Create the attributes that matter to you.</h2>
					<p class="mt-5 text-lg leading-relaxed text-[var(--text-secondary)]">Personas ship with motivation, goals and blockers, and you can add custom fields per project or globally. Use a photo or a colour to make each profile recognisable on the issues it is linked to.</p>
					<a href="/docs/building-persona" class="realigned-secondary-button mt-8">Build your first persona</a>
				</div>
			</div>
		</section>

		<section aria-labelledby="details-title" class="realigned-band border-y border-[var(--border-subtle)] py-24">
			<div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
				<div class="mx-auto max-w-3xl text-center">
					<p class="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[var(--text-muted)]">More details</p>
					<h2 id="details-title" class="text-3xl font-semibold tracking-tight text-[var(--text-primary)] sm:text-4xl">Persona management that fits your Jira.</h2>
				</div>
				<ul class="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
					{#each details as detail}
						<li class="realigned-card rounded-lg p-7">
							<h3 class="text-lg font-semibold text-[var(--text-primary)]">{detail.title}</h3>
							<p class="mt-3 leading-relaxed text-[var(--text-secondary)]">{detail.text}</p>
						</li>
					{/each}
				</ul>
			</div>
		</section>

		<section aria-labelledby="final-cta-title" class="realigned-hero relative overflow-hidden py-20">
			<DottedClouds opacity={0.12} />
			<div class="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
				<h2 id="final-cta-title" class="text-3xl font-semibold tracking-tight text-white sm:text-4xl">Put your customers on the same page as your backlog.</h2>
				<p class="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-white/80">Try Personas for Jira on the Atlassian Marketplace.</p>
				<div class="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
					<a href={MARKETPLACE_LINK} target="_blank" rel="noreferrer" data-umami-event="marketplace_click" data-umami-event-product="personas" data-umami-event-listing-id="1225680" data-umami-event-intent="trial" data-umami-event-source-page="/" data-umami-event-placement="homepage_footer" class="realigned-primary-button">Start a free trial</a>
					<a href="/docs" class="realigned-secondary-button">Read the documentation</a>
				</div>
			</div>
		</section>
	</main>
</SiteShell>

<svelte:head>
	{@html `<script type="application/ld+json">${softwareApplicationJson}</script>`}
</svelte:head>

<style>
	.wave-glow { position: absolute; left: -10%; right: -10%; bottom: -24%; height: 45%; background: radial-gradient(ellipse at center, rgba(255,255,255,.25) 0%, rgba(255,255,255,.06) 42%, transparent 72%); filter: blur(16px); pointer-events: none; }
	.status-check { display: inline-grid; width: 1.25rem; height: 1.25rem; place-items: center; border-radius: 999px; background: var(--action-soft); color: var(--accent-cyan); font-size: .7rem; font-style: normal; }
	.capability-card { transition: transform 180ms ease, border-color 180ms ease, background 180ms ease; }
	.capability-card:hover { transform: translateY(-4px); border-color: rgba(3, 105, 161, 0.34); background: var(--bg-surface-hover); }
</style>
