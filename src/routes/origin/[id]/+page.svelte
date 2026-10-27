<script lang="ts">
	import OriginStage from '#lib/components/OriginStage.svelte';
	import { radicalById } from '#lib/data/radicals';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
	const character = $derived(data.character);
</script>

<div class="page">
	<div class="page-head">
		<h1>
			<span class="han">{character.glyph}</span>
			{character.pinyin}
		</h1>
		<p>{character.meaning} — {character.story}</p>
	</div>

	<div class="layout">
		<OriginStage {character} />

		<aside class="panel parts">
			<h2>Parts</h2>
			<ul>
				{#each character.parts as partId, i}
					{@const radical = radicalById[partId]}
					<li>
						<span class="han">{radical?.glyph ?? '?'}</span>
						<div>
							<strong>{radical?.nameEn ?? partId}</strong>
							<p>{radical?.hint ?? ''}</p>
						</div>
						{#if i < character.parts.length - 1}
							<span class="plus">+</span>
						{/if}
					</li>
				{/each}
			</ul>
			<div class="cta-row">
				<a class="btn btn-primary" href="/puzzle">Practice in puzzle</a>
				<a class="btn btn-ghost" href="/glyphdex">Back to Glyphdex</a>
			</div>
		</aside>
	</div>
</div>

<style>
	.page-head h1 {
		display: flex;
		align-items: baseline;
		gap: 0.65rem;
	}

	.page-head .han {
		font-size: 1.15em;
		color: var(--jade-deep);
	}

	.layout {
		display: grid;
		grid-template-columns: 1.05fr 0.95fr;
		gap: 1rem;
		align-items: start;
	}

	.parts {
		padding: 1.2rem;
	}

	.parts h2 {
		margin: 0 0 0.8rem;
		font-family: var(--font-brand);
		font-size: 1.2rem;
	}

	ul {
		list-style: none;
		margin: 0 0 1.2rem;
		padding: 0;
		display: grid;
		gap: 0.65rem;
	}

	li {
		display: grid;
		grid-template-columns: auto 1fr auto;
		gap: 0.75rem;
		align-items: center;
	}

	li .han {
		display: grid;
		place-items: center;
		width: 2.6rem;
		height: 2.6rem;
		border-radius: 10px;
		background: #fffdf7;
		border: 1px solid var(--line);
		font-size: 1.4rem;
	}

	li p {
		margin: 0.1rem 0 0;
		color: var(--ink-soft);
		font-size: 0.88rem;
	}

	.plus {
		font-weight: 800;
		color: var(--jade);
	}

	@media (max-width: 860px) {
		.layout {
			grid-template-columns: 1fr;
		}
	}
</style>
