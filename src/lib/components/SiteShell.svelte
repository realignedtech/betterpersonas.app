<script>
	import Header from './Header.svelte';

	let {
		headTitle,
		description,
		ogType = 'website',
		publishedTime = '',
		modifiedTime = '',
		image = undefined,
		jsonLd = [],
		navTitle = 'Personas for Jira',
		highlight = '',
		marketplaceLink = 'https://marketplace.atlassian.com/apps/1225680/personas-for-jira',
		headingInNav = false,
		wide = false,
		subnav,
		children
	} = $props();
</script>

<div class="bg-[var(--bg-base)] text-[var(--text-primary)]">
	<Header
		title={headTitle}
		{description}
		{ogType}
		{publishedTime}
		{modifiedTime}
		{image}
		{jsonLd}
	/>
	{#if subnav}{@render subnav()}{/if}
	{@render children()}
</div>
