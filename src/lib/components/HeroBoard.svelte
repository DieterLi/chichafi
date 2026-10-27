<script lang="ts">
	import Tianzige from './Tianzige.svelte';
	import type { SlotId } from '#lib/types';

	type Demo = {
		structure: 'left-right';
		start: Partial<Record<SlotId, string | null>>;
		add: { slot: SlotId; id: string };
		result: string;
		label: string;
	};

	const demos: Demo[] = [
		{
			structure: 'left-right',
			start: { left: 'ri' },
			add: { slot: 'right', id: 'yue' },
			result: '明',
			label: 'sun + moon'
		},
		{
			structure: 'left-right',
			start: { left: 'mu' },
			add: { slot: 'right', id: 'mu' },
			result: '林',
			label: 'tree + tree'
		},
		{
			structure: 'left-right',
			start: { right: 'qing' },
			add: { slot: 'left', id: 'san_dian_shui' },
			result: '清',
			label: 'water + qīng'
		}
	];

	let demoIndex = $state(0);
	let filled = $state(false);
	const demo = $derived(demos[demoIndex]);
	const slots = $derived({
		...demo.start,
		...(filled ? { [demo.add.slot]: demo.add.id } : {})
	});

	$effect(() => {
		let cancelled = false;

		async function loop() {
			while (!cancelled) {
				for (let i = 0; i < demos.length; i++) {
					if (cancelled) return;
					demoIndex = i;
					filled = false;
					await wait(1000);
					if (cancelled) return;
					filled = true;
					await wait(1700);
				}
			}
		}

		loop();
		return () => {
			cancelled = true;
		};
	});

	function wait(ms: number) {
		return new Promise((r) => setTimeout(r, ms));
	}
</script>

<div class="hero-board panel">
	<p class="kicker">Chinese characters are LEGO</p>
	<Tianzige
		structure={demo.structure}
		{slots}
		success={filled}
		activeSlot={filled ? null : demo.add.slot}
		size={260}
	/>
	<p class="caption">
		<span class="han">{demo.result}</span>
		<span>{demo.label}</span>
	</p>
</div>

<style>
	.hero-board {
		padding: 1.4rem 1.2rem 1.2rem;
		display: grid;
		justify-items: center;
		gap: 1rem;
	}

	.kicker {
		margin: 0;
		font-weight: 700;
		letter-spacing: 0.04em;
		text-transform: uppercase;
		font-size: 0.78rem;
		color: var(--jade-deep);
	}

	.caption {
		margin: 0;
		display: flex;
		align-items: baseline;
		gap: 0.55rem;
		color: var(--ink-soft);
		font-weight: 600;
	}

	.caption .han {
		font-size: 1.6rem;
		color: var(--ink);
	}
</style>
