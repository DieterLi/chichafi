<script lang="ts">
	import RadicalChip from '#lib/components/RadicalChip.svelte';
	import Tianzige from '#lib/components/Tianzige.svelte';
	import { characterById } from '#lib/data/characters';
	import { puzzles } from '#lib/data/puzzles';
	import { radicalById } from '#lib/data/radicals';
	import { progress } from '#lib/stores/progress.svelte';
	import type { SlotId, Structure } from '#lib/types';
	import { shuffle } from '#lib/utils/shuffle';

	let index = $state(0);
	let selected = $state<string | null>(null);
	let placed = $state<string | null>(null);
	let success = $state(false);
	let tray = $state<string[]>(shuffle(puzzles[0].tray));
	let toast = $state<{ text: string; kind: 'ok' | 'bad' } | null>(null);
	let toastTimer: ReturnType<typeof setTimeout> | undefined;

	const level = $derived(puzzles[index]);
	const target = $derived(characterById[level.targetId]);
	const structure = $derived(target.structure as Structure);

	const slots = $derived.by(() => {
		const map: Partial<Record<SlotId, string | null>> = { ...level.given };
		if (placed) map[level.answerSlot] = placed;
		else map[level.answerSlot] = null;
		return map;
	});

	function showToast(text: string, kind: 'ok' | 'bad') {
		toast = { text, kind };
		clearTimeout(toastTimer);
		toastTimer = setTimeout(() => (toast = null), 2400);
	}

	function resetPlacement() {
		placed = null;
		success = false;
		selected = null;
		tray = shuffle(puzzles[index].tray);
	}

	function go(delta: number) {
		index = Math.max(0, Math.min(puzzles.length - 1, index + delta));
		resetPlacement();
	}

	function tryPlace(radicalId: string) {
		if (success) return;
		placed = radicalId;
		if (radicalId === level.answerRadicalId) {
			success = true;
			progress.clearPuzzle(level.id, level.targetId);
			showToast(`Solved! ${target.glyph} — ${target.meaning}`, 'ok');
		} else {
			const wrong = radicalById[radicalId];
			showToast(`${wrong?.glyph ?? '?'} doesn’t fit here. Reread the clue.`, 'bad');
			setTimeout(() => {
				if (!success) placed = null;
			}, 650);
		}
	}

	function onSelect(id: string) {
		selected = id;
		tryPlace(id);
	}

	function onDropSlot(slot: SlotId) {
		if (slot !== level.answerSlot || !selected) return;
		tryPlace(selected);
	}
</script>

<div class="page">
	<div class="page-head">
		<h1>Tianzige Puzzle</h1>
		<p>
			Level {index + 1} / {puzzles.length} — drag or tap the missing radical into the highlighted
			slot.
		</p>
	</div>

	<div class="layout">
		<section class="panel play">
			<div class="meta">
				<p class="eyebrow">{level.title}</p>
				<p class="clue">{level.clue}</p>
				{#if success}
					<p class="win">
						<span class="han">{target.glyph}</span>
						{target.pinyin} · {target.meaning}
						<a href={`/origin/${target.id}`}>See origin →</a>
					</p>
				{/if}
			</div>

			<Tianzige
				{structure}
				{slots}
				{success}
				activeSlot={success ? null : level.answerSlot}
				highlight={[level.answerSlot]}
				ondropSlot={onDropSlot}
				size={300}
			/>

			<div class="pager">
				<button class="btn btn-ghost" type="button" onclick={() => go(-1)} disabled={index === 0}
					>Previous</button
				>
				<button
					class="btn btn-primary"
					type="button"
					onclick={() => go(1)}
					disabled={index >= puzzles.length - 1 || !success}
				>
					{success ? 'Next level' : 'Solve to continue'}
				</button>
			</div>
		</section>

		<aside class="tray">
			<p class="tray-label">Piece tray</p>
			<div class="chips">
				{#each tray as radicalId}
					<RadicalChip
						{radicalId}
						selected={selected === radicalId}
						disabled={success}
						onclick={() => onSelect(radicalId)}
						ondragstart={() => (selected = radicalId)}
					/>
				{/each}
			</div>
			<p class="hint">Tip: radicals have “thing-ness” — 氵 is water droplets, 艹 is grass on top.</p>
		</aside>
	</div>
</div>

{#if toast}
	<div class="toast {toast.kind}" role="status">{toast.text}</div>
{/if}

<style>
	.layout {
		display: grid;
		grid-template-columns: 1.15fr 0.85fr;
		gap: 1rem;
		align-items: start;
	}

	.play {
		padding: 1.25rem;
		display: grid;
		justify-items: center;
		gap: 1.1rem;
	}

	.meta {
		width: 100%;
		text-align: center;
	}

	.eyebrow {
		margin: 0;
		font-weight: 800;
		font-family: var(--font-brand);
		font-size: 1.2rem;
	}

	.clue {
		margin: 0.35rem 0 0;
		color: var(--ink-soft);
		font-size: 1.02rem;
	}

	.win {
		margin: 0.75rem 0 0;
		display: flex;
		flex-wrap: wrap;
		gap: 0.45rem;
		align-items: baseline;
		justify-content: center;
		font-weight: 600;
	}

	.win .han {
		font-size: 1.5rem;
		color: var(--jade-deep);
	}

	.win a {
		color: var(--jade);
		font-weight: 700;
	}

	.pager {
		display: flex;
		flex-wrap: wrap;
		gap: 0.6rem;
		justify-content: center;
	}

	.tray {
		display: grid;
		gap: 0.7rem;
	}

	.tray-label {
		margin: 0;
		font-weight: 700;
		color: var(--ink-soft);
		text-transform: uppercase;
		letter-spacing: 0.06em;
		font-size: 0.78rem;
	}

	.chips {
		display: grid;
		gap: 0.55rem;
	}

	.hint {
		margin: 0.2rem 0 0;
		color: var(--ink-soft);
		font-size: 0.88rem;
	}

	@media (max-width: 860px) {
		.layout {
			grid-template-columns: 1fr;
		}
	}
</style>
