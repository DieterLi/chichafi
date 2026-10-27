<script lang="ts">
	import type { Character } from '#lib/types';

	type Props = {
		character: Character;
		locked?: boolean;
		href?: string;
	};

	let { character, locked = false, href }: Props = $props();
</script>

{#if href && !locked}
	<a class="card" {href}>
		<span class="han glyph">{character.glyph}</span>
		<span class="pinyin">{character.pinyin}</span>
		<span class="meaning">{character.meaning}</span>
	</a>
{:else}
	<div class="card" class:locked aria-disabled={locked}>
		<span class="han glyph">{locked ? '？' : character.glyph}</span>
		<span class="pinyin">{locked ? 'locked' : character.pinyin}</span>
		<span class="meaning">{locked ? 'Solve a puzzle to unlock' : character.meaning}</span>
	</div>
{/if}

<style>
	.card {
		display: grid;
		gap: 0.2rem;
		justify-items: center;
		text-align: center;
		padding: 1rem 0.7rem;
		border-radius: 16px;
		border: 1px solid var(--line);
		background: rgba(255, 255, 255, 0.72);
		box-shadow: 0 10px 24px rgba(26, 36, 33, 0.05);
		transition:
			transform 0.15s ease,
			border-color 0.15s ease;
	}

	a.card:hover {
		transform: translateY(-2px);
		border-color: rgba(15, 122, 102, 0.35);
	}

	.glyph {
		font-size: 2.4rem;
		line-height: 1.1;
	}

	.pinyin {
		font-weight: 700;
		font-size: 0.92rem;
	}

	.meaning {
		color: var(--ink-soft);
		font-size: 0.82rem;
		text-transform: capitalize;
	}

	.locked {
		opacity: 0.55;
		filter: grayscale(0.35);
	}
</style>
