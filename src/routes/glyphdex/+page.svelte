<script lang="ts">
	import GlyphCard from '#lib/components/GlyphCard.svelte';
	import { characters } from '#lib/data/characters';
	import { progress } from '#lib/stores/progress.svelte';

	const tiers = [
		{ tier: 1 as const, title: 'Foundation glyphs', blurb: 'Pictographs & core radicals.' },
		{ tier: 2 as const, title: 'First combinations', blurb: '会意 / simple compounds.' },
		{ tier: 3 as const, title: 'Qing family', blurb: 'Sound + meaning — 形声 logic.' }
	];

	const unlockedCount = $derived(progress.unlocked.length);
</script>

<div class="page">
	<div class="page-head">
		<h1>Glyphdex</h1>
		<p>
			{unlockedCount} characters collected. Each card links to origin replay when unlocked.
		</p>
	</div>

	{#each tiers as group}
		<section class="tier">
			<div class="tier-head">
				<h2>{group.title}</h2>
				<p>{group.blurb}</p>
			</div>
			<div class="grid-cards">
				{#each characters.filter((c) => c.tier === group.tier) as character}
					{@const unlocked = progress.isUnlocked(character.id)}
					<GlyphCard
						{character}
						locked={!unlocked}
						href={unlocked ? `/origin/${character.id}` : undefined}
					/>
				{/each}
			</div>
		</section>
	{/each}
</div>

<style>
	.tier {
		margin-bottom: 1.8rem;
	}

	.tier-head {
		margin-bottom: 0.75rem;
	}

	.tier-head h2 {
		margin: 0;
		font-family: var(--font-brand);
		font-size: 1.25rem;
		letter-spacing: -0.02em;
	}

	.tier-head p {
		margin: 0.2rem 0 0;
		color: var(--ink-soft);
		font-size: 0.92rem;
	}
</style>
