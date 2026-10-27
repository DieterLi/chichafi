<script lang="ts">
	import { radicalById } from '#lib/data/radicals';
	import type { SlotId, Structure } from '#lib/types';

	type Props = {
		structure: Structure;
		slots: Partial<Record<SlotId, string | null>>;
		activeSlot?: SlotId | null;
		highlight?: SlotId[];
		success?: boolean;
		size?: number;
		ondropSlot?: (slot: SlotId) => void;
	};

	let {
		structure,
		slots,
		activeSlot = null,
		highlight = [],
		success = false,
		size = 280,
		ondropSlot
	}: Props = $props();

	const layout = $derived.by(() => {
		if (structure === 'left-right') return ['left', 'right'] as SlotId[];
		if (structure === 'top-bottom') return ['top', 'bottom'] as SlotId[];
		if (structure === 'surround') return ['outer', 'inner'] as SlotId[];
		return ['full'] as SlotId[];
	});

	function glyph(id: string | null | undefined) {
		if (!id) return '';
		return radicalById[id]?.glyph ?? id;
	}

	function onDragOver(e: DragEvent) {
		e.preventDefault();
	}

	function onDrop(e: DragEvent, slot: SlotId) {
		e.preventDefault();
		ondropSlot?.(slot);
	}
</script>

<div
	class="tianzige"
	class:success
	class:lr={structure === 'left-right'}
	class:tb={structure === 'top-bottom'}
	class:single={structure === 'single' || structure === 'triple'}
	style={`--size:${size}px`}
	aria-label="Tianzige character grid"
>
	{#each layout as slot (slot)}
		<div
			class="cell"
			class:active={activeSlot === slot}
			class:lit={highlight.includes(slot)}
			class:filled={!!slots[slot]}
			data-slot={slot}
			role="button"
			tabindex="0"
			ondragover={onDragOver}
			ondrop={(e) => onDrop(e, slot)}
			onclick={() => ondropSlot?.(slot)}
			onkeydown={(e) => {
				if (e.key === 'Enter' || e.key === ' ') {
					e.preventDefault();
					ondropSlot?.(slot);
				}
			}}
		>
			{#if slots[slot]}
				<span class="han piece">{glyph(slots[slot])}</span>
			{:else if activeSlot === slot}
				<span class="ghost">drop</span>
			{/if}
		</div>
	{/each}
	{#if success}
		<div class="burst" aria-hidden="true"></div>
	{/if}
</div>

<style>
	.tianzige {
		--size: 280px;
		position: relative;
		width: var(--size);
		height: var(--size);
		display: grid;
		background:
			linear-gradient(to right, rgba(15, 122, 102, 0.22) 1px, transparent 1px) 0 0 / 50% 100%,
			linear-gradient(to bottom, rgba(15, 122, 102, 0.22) 1px, transparent 1px) 0 0 / 100% 50%,
			#fffdf7;
		border: 2px solid var(--jade-deep);
		border-radius: 12px;
		box-shadow:
			inset 0 0 0 1px rgba(15, 122, 102, 0.12),
			0 16px 36px rgba(26, 36, 33, 0.1);
		overflow: hidden;
		transition: box-shadow 0.25s ease, transform 0.25s ease;
	}

	.tianzige.lr {
		grid-template-columns: 0.42fr 0.58fr;
	}

	.tianzige.tb {
		grid-template-rows: 0.38fr 0.62fr;
	}

	.tianzige.single {
		grid-template-columns: 1fr;
	}

	.tianzige.success {
		box-shadow:
			inset 0 0 0 1px rgba(15, 122, 102, 0.2),
			0 0 0 4px rgba(26, 163, 138, 0.25),
			0 18px 40px rgba(15, 122, 102, 0.22);
		transform: scale(1.02);
	}

	.cell {
		display: grid;
		place-items: center;
		min-height: 0;
		border: 0;
		background: transparent;
		position: relative;
		transition: background 0.2s ease;
	}

	.cell.lit,
	.cell.active {
		background: rgba(15, 122, 102, 0.1);
	}

	.cell.active {
		outline: 2px dashed var(--jade);
		outline-offset: -8px;
		border-radius: 8px;
	}

	.piece {
		font-size: calc(var(--size) * 0.34);
		line-height: 1;
		color: var(--ink);
		animation: settle 0.28s ease;
	}

	.ghost {
		font-size: 0.85rem;
		font-weight: 700;
		letter-spacing: 0.08em;
		text-transform: uppercase;
		color: rgba(15, 122, 102, 0.55);
	}

	.burst {
		pointer-events: none;
		position: absolute;
		inset: 0;
		background: radial-gradient(circle at center, rgba(201, 162, 39, 0.28), transparent 60%);
		animation: flash 0.6s ease;
	}

	@keyframes settle {
		from {
			opacity: 0;
			transform: scale(0.85);
		}
		to {
			opacity: 1;
			transform: scale(1);
		}
	}

	@keyframes flash {
		from {
			opacity: 0.9;
		}
		to {
			opacity: 0;
		}
	}
</style>
