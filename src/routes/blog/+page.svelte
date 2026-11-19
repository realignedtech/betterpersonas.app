<script>
	import SiteShell from '$lib/components/SiteShell.svelte';
	const marketplaceLink = 'https://marketplace.atlassian.com/apps/1225680/personas-for-jira';

	const posts = [
		{
			href: '/articles/bias-free-personas',
			title: 'Bias-free personas: build profiles that help instead of mislead',
			date: '2022-11-14',
			dateLabel: 'November 14, 2022',
			highlight: '/main/customfields.png',
			description: 'Persona profiles drift into biography when they are written from opinion. Four practical steps to keep them useful and inclusive.'
		}
	];
</script>

<SiteShell headTitle="Personas for Jira blog" description="Guides and practical advice for building and using persona profiles in Jira, from the team behind Personas for Jira." highlight="Blog" {marketplaceLink}>
	<main class="realigned-band min-h-[60vh] px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
		<div class="mx-auto max-w-5xl">
			<p class="text-sm font-bold uppercase tracking-[0.18em] text-[var(--text-muted)]">Personas blog</p>
			<h1 class="mt-3 text-4xl font-semibold tracking-tight text-[var(--text-primary)] sm:text-5xl">Understand your customers, in Jira.</h1>
			<p class="mt-5 max-w-2xl text-lg leading-relaxed text-[var(--text-secondary)]">Guides and practical advice for building persona profiles and connecting them to the Jira issues they describe.</p>
			<div class="mt-12 grid gap-5 sm:grid-cols-2">
				{#each posts as post}
					<a href={post.href} class="realigned-card group flex flex-col overflow-hidden rounded-xl transition hover:-translate-y-1 hover:border-[var(--accent-sky-soft)]">
						<img src={post.highlight} width="1280" height="720" loading="lazy" alt="" class="aspect-video w-full object-cover" />
						<div class="flex flex-1 flex-col p-5">
							<time class="text-xs text-[var(--text-muted)]" datetime={post.date}>{post.dateLabel}</time>
							<h2 class="mt-2 text-lg font-semibold leading-snug text-[var(--text-primary)] group-hover:text-[var(--accent-cyan)]">{post.title}</h2>
							<p class="mt-2 flex-1 text-sm leading-relaxed text-[var(--text-secondary)]">{post.description}</p>
							<span class="mt-4 text-sm font-semibold text-[var(--accent-cyan)]">Read the article <span aria-hidden="true">→</span></span>
						</div>
					</a>
				{/each}
			</div>
		</div>
	</main>
</SiteShell>
