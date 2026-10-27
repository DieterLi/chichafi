<script lang="ts">
	import HeroBoard from '#lib/components/HeroBoard.svelte';
</script>

<section class="hero">
	<div class="hero-copy">
		<h1>
			<span class="mark">ChiChaFi</span>
			Characters click like puzzles.
		</h1>
		<p class="expand">
			<span class="han">汉字田字格</span>
			Chinese Character Field — the practice grid where hanzi snap into place.
		</p>
		<p>
			Western learners stop seeing “messy lines.” Watch a picture become a glyph, then snap radicals
			into the tianzige field — like LEGO for Chinese.
		</p>
		<div class="cta-row">
			<a class="btn btn-primary" href="/puzzle">Play a puzzle</a>
			<a class="btn btn-ghost" href="/craft">Craft combinations</a>
		</div>
	</div>
	<HeroBoard />
</section>

<section class="features">
	<article class="panel feature">
		<h2>1. Visual origin</h2>
		<p>Picture → ancient hint → modern character in the grid.</p>
		<a href="/origin/ming">Watch 明 evolve</a>
	</article>
	<article class="panel feature">
		<h2>2. Tianzige puzzle</h2>
		<p>Drag the missing radical. Space and proportion become muscle memory.</p>
		<a href="/puzzle">Start level 1</a>
	</article>
	<article class="panel feature">
		<h2>3. Craft & collect</h2>
		<p>木+木=林. Discover families like the 青 clan. Fill your Glyphdex.</p>
		<a href="/glyphdex">Open Glyphdex</a>
	</article>
</section>

<style>
	.expand {
		display: flex;
		flex-wrap: wrap;
		align-items: baseline;
		gap: 0.45rem 0.65rem;
		margin: 0 0 0.85rem !important;
		max-width: 42ch !important;
		font-weight: 600;
		color: var(--jade-deep) !important;
		font-size: 0.98rem !important;
	}

	.expand .han {
		font-size: 1.15em;
		font-weight: 700;
	}

	.features {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 0.9rem;
		padding-bottom: 3rem;
	}

	.feature {
		padding: 1.15rem 1.2rem 1.25rem;
	}

	.feature h2 {
		margin: 0 0 0.4rem;
		font-family: var(--font-brand);
		font-size: 1.15rem;
		letter-spacing: -0.02em;
	}

	.feature p {
		margin: 0 0 0.85rem;
		color: var(--ink-soft);
		font-size: 0.95rem;
	}

	.feature a {
		font-weight: 700;
		color: var(--jade-deep);
	}

	@media (max-width: 860px) {
		.features {
			grid-template-columns: 1fr;
		}
	}
</style>
