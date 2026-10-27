<script lang="ts">
	import favicon from '#lib/assets/favicon.svg';
	import '#lib/styles/app.css';
	import { page } from '$app/state';
	import type { LayoutProps } from './$types';

	let { children }: LayoutProps = $props();

	const links = [
		{ href: '/', label: 'Home' },
		{ href: '/puzzle', label: 'Puzzle' },
		{ href: '/craft', label: 'Craft' },
		{ href: '/glyphdex', label: 'Glyphdex' }
	];
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>ChiChaFi — Chinese Character Field</title>
	<meta
		name="description"
		content="ChiChaFi (Chinese Character Field): learn hanzi in the tianzige grid — pictograph origins, radical puzzles, and craft combinations."
	/>
</svelte:head>

<div class="shell">
	<header class="site-header">
		<a class="brand" href="/" title="Chinese Character Field">ChiCha<span>Fi</span></a>
		<nav class="nav" aria-label="Primary">
			{#each links as link}
				<a href={link.href} aria-current={page.url.pathname === link.href ? 'page' : undefined}
					>{link.label}</a
				>
			{/each}
		</nav>
	</header>

	{@render children()}
</div>
