<script lang="ts">
	import RadicalChip from '#lib/components/RadicalChip.svelte';
	import { characterById } from '#lib/data/characters';
	import { failMessage, recipeByKey, recipeKey } from '#lib/data/recipes';
	import { radicals } from '#lib/data/radicals';
	import { progress } from '#lib/stores/progress.svelte';

	const starterIds = [
		'ren',
		'mu',
		'ri',
		'yue',
		'shui',
		'san_dian_shui',
		'huo',
		'tian',
		'cao',
		'qing',
		'mian',
		'zi_child',
		'xin',
		'yan'
	];

	let bench = $state<string[]>([]);
	let toast = $state<{ text: string; kind: 'ok' | 'bad' } | null>(null);
	let lastResult = $state<string | null>(null);
	let toastTimer: ReturnType<typeof setTimeout> | undefined;

	const benchGlyphs = $derived(
		bench.map((id) => radicals.find((r) => r.id === id)?.glyph ?? '?').join(' + ')
	);

	function showToast(text: string, kind: 'ok' | 'bad') {
		toast = { text, kind };
		clearTimeout(toastTimer);
		toastTimer = setTimeout(() => (toast = null), 2800);
	}

	function add(id: string) {
		if (bench.length >= 3) {
			showToast('Bench is full (max 3). Craft or clear.', 'bad');
			return;
		}
		bench = [...bench, id];
	}

	function clearBench() {
		bench = [];
		lastResult = null;
	}

	function craft() {
		if (bench.length < 2) {
			showToast(failMessage(bench), 'bad');
			return;
		}
		const key = recipeKey(bench);
		const hit = recipeByKey[key];
		if (!hit) {
			lastResult = null;
			showToast(failMessage(bench), 'bad');
			return;
		}
		const char = characterById[hit.resultId];
		progress.unlock(hit.resultId);
		lastResult = hit.resultId;
		showToast(`Crafted ${char.glyph} — ${char.meaning}!`, 'ok');
		bench = [];
	}
</script>

<div class="page">
	<div class="page-head">
		<h1>Character Craft</h1>
		<p>
			Combine radicals like Doodle God. Try 日+月, 木+木, or the 青 family with 氵 / 日 / 忄 / 讠.
		</p>
	</div>

	<div class="layout">
		<section class="panel bench-panel">
			<p class="label">Crafting bench</p>
			<div class="bench han" class:empty={bench.length === 0}>
				{#if bench.length === 0}
					<span class="placeholder">Tap pieces below</span>
				{:else}
					{benchGlyphs}
				{/if}
			</div>

			{#if lastResult}
				{@const char = characterById[lastResult]}
				<div class="result">
					<span class="han big">{char.glyph}</span>
					<div>
						<strong>{char.pinyin}</strong>
						<p>{char.meaning} — {char.story}</p>
						<a href={`/origin/${char.id}`}>Replay origin →</a>
					</div>
				</div>
			{/if}

			<div class="actions">
				<button class="btn btn-ghost" type="button" onclick={clearBench}>Clear</button>
				<button class="btn btn-primary" type="button" onclick={craft}>Craft</button>
			</div>
		</section>

		<section class="palette">
			<p class="label">Base pieces</p>
			<div class="chips">
				{#each starterIds as radicalId}
					<RadicalChip {radicalId} onclick={() => add(radicalId)} />
				{/each}
			</div>
		</section>
	</div>
</div>

{#if toast}
	<div class="toast {toast.kind}" role="status">{toast.text}</div>
{/if}

<style>
	.layout {
		display: grid;
		grid-template-columns: 0.9fr 1.1fr;
		gap: 1rem;
		align-items: start;
	}

	.bench-panel {
		padding: 1.2rem;
		display: grid;
		gap: 1rem;
	}

	.label {
		margin: 0;
		font-weight: 700;
		color: var(--ink-soft);
		text-transform: uppercase;
		letter-spacing: 0.06em;
		font-size: 0.78rem;
	}

	.bench {
		min-height: 5.5rem;
		display: grid;
		place-items: center;
		border-radius: 14px;
		border: 2px dashed rgba(15, 122, 102, 0.35);
		background: #fffdf7;
		font-size: 2rem;
		padding: 0.8rem;
	}

	.bench.empty {
		font-size: 1rem;
		font-family: var(--font-ui);
	}

	.placeholder {
		color: rgba(26, 36, 33, 0.4);
		font-weight: 600;
	}

	.result {
		display: grid;
		grid-template-columns: auto 1fr;
		gap: 0.85rem;
		align-items: center;
		padding: 0.85rem;
		border-radius: 14px;
		background: rgba(15, 122, 102, 0.1);
	}

	.big {
		font-size: 2.8rem;
		line-height: 1;
	}

	.result p {
		margin: 0.15rem 0 0.35rem;
		color: var(--ink-soft);
		font-size: 0.92rem;
	}

	.result a {
		font-weight: 700;
		color: var(--jade-deep);
	}

	.actions {
		display: flex;
		gap: 0.6rem;
	}

	.palette {
		display: grid;
		gap: 0.7rem;
	}

	.chips {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(210px, 1fr));
		gap: 0.55rem;
	}

	@media (max-width: 860px) {
		.layout {
			grid-template-columns: 1fr;
		}
	}
</style>
