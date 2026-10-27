<script lang="ts">
	import type { Character, SlotId } from '#lib/types';
	import Tianzige from './Tianzige.svelte';

	type Props = {
		character: Character;
		autoplay?: boolean;
	};

	let { character, autoplay = true }: Props = $props();

	let stage = $state(0);
	const labels = ['Picture', 'Ancient hint', 'Modern glyph'];

	const slots = $derived.by(() => {
		const map: Partial<Record<SlotId, string | null>> = {};
		if (character.structure === 'left-right') {
			map.left = character.parts[0] ?? null;
			map.right = character.parts[1] ?? null;
		} else if (character.structure === 'top-bottom') {
			map.top = character.parts[0] ?? null;
			map.bottom = character.parts[1] ?? null;
		} else {
			map.full = character.parts[0] ?? null;
		}
		return map;
	});

	const boardStructure = $derived(
		character.structure === 'triple' ? 'single' : character.structure
	);

	$effect(() => {
		character.id;
		stage = 0;
		if (!autoplay) return;
		const t1 = setTimeout(() => (stage = 1), 1100);
		const t2 = setTimeout(() => (stage = 2), 2300);
		return () => {
			clearTimeout(t1);
			clearTimeout(t2);
		};
	});

	function replay() {
		stage = 0;
		setTimeout(() => (stage = 1), 900);
		setTimeout(() => (stage = 2), 2000);
	}
</script>

<div class="stage panel">
	<div class="labels">
		{#each labels as label, i}
			<span class:on={stage === i}>{label}</span>
		{/each}
	</div>

	<div class="viewport">
		{#if stage === 0}
			<div class="pic">
				<span class="emoji">{character.pictograph ?? '✨'}</span>
				<p>{character.story}</p>
			</div>
		{:else if stage === 1}
			<div class="ancient">
				<span class="han rough">{character.glyph}</span>
				<p>Lines tighten… meaning stays.</p>
			</div>
		{:else}
			<div class="modern">
				<Tianzige structure={boardStructure} {slots} success size={220} />
				<p class="result">
					<span class="han big">{character.glyph}</span>
					<span>{character.pinyin} — {character.meaning}</span>
				</p>
			</div>
		{/if}
	</div>

	<button type="button" class="btn btn-ghost" onclick={replay}>Replay origin</button>
</div>

<style>
	.stage {
		padding: 1.1rem;
		display: grid;
		gap: 1rem;
		justify-items: center;
	}

	.labels {
		display: flex;
		flex-wrap: wrap;
		gap: 0.45rem;
		justify-content: center;
	}

	.labels span {
		padding: 0.3rem 0.7rem;
		border-radius: 999px;
		font-size: 0.78rem;
		font-weight: 700;
		color: var(--ink-soft);
		background: rgba(26, 36, 33, 0.05);
	}

	.labels span.on {
		background: rgba(15, 122, 102, 0.14);
		color: var(--jade-deep);
	}

	.viewport {
		min-height: 280px;
		width: 100%;
		display: grid;
		place-items: center;
	}

	.pic,
	.ancient,
	.modern {
		display: grid;
		justify-items: center;
		gap: 0.75rem;
		text-align: center;
		animation: softIn 0.4s ease;
	}

	.emoji {
		font-size: 4.5rem;
		line-height: 1;
		filter: drop-shadow(0 10px 18px rgba(26, 36, 33, 0.12));
	}

	.rough {
		font-size: 4.8rem;
		line-height: 1;
		color: var(--ink-soft);
		opacity: 0.72;
		transform: skewX(-4deg) rotate(-2deg);
		letter-spacing: 0.08em;
	}

	.modern {
		gap: 1rem;
	}

	.result {
		display: grid;
		gap: 0.15rem;
		margin: 0;
	}

	.big {
		font-size: 2rem;
		font-weight: 700;
	}

	p {
		margin: 0;
		max-width: 28ch;
		color: var(--ink-soft);
	}

	@keyframes softIn {
		from {
			opacity: 0;
			transform: translateY(8px) scale(0.98);
		}
		to {
			opacity: 1;
			transform: none;
		}
	}
</style>
