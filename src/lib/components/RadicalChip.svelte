<script lang="ts">
	import { radicalById } from '#lib/data/radicals';

	type Props = {
		radicalId: string;
		selected?: boolean;
		draggable?: boolean;
		disabled?: boolean;
		onclick?: () => void;
		ondragstart?: (e: DragEvent) => void;
	};

	let {
		radicalId,
		selected = false,
		draggable = true,
		disabled = false,
		onclick,
		ondragstart
	}: Props = $props();

	const radical = $derived(radicalById[radicalId]);
</script>

<button
	type="button"
	class="chip"
	class:selected
	class:disabled
	{disabled}
	draggable={draggable && !disabled}
	{onclick}
	ondragstart={(e) => {
		if (disabled) {
			e.preventDefault();
			return;
		}
		e.dataTransfer?.setData('text/plain', radicalId);
		ondragstart?.(e);
	}}
	aria-pressed={selected}
	title={radical?.hint}
>
	<span class="han glyph">{radical?.glyph ?? '?'}</span>
	<span class="meta">
		<strong>{radical?.nameEn ?? radicalId}</strong>
		<small>{radical?.hint}</small>
	</span>
</button>

<style>
	.chip {
		display: grid;
		grid-template-columns: auto 1fr;
		align-items: center;
		gap: 0.7rem;
		width: 100%;
		text-align: left;
		padding: 0.7rem 0.85rem;
		border-radius: 14px;
		border: 1px solid var(--line);
		background: rgba(255, 255, 255, 0.78);
		color: var(--ink);
		transition:
			transform 0.15s ease,
			border-color 0.15s ease,
			box-shadow 0.15s ease,
			background 0.15s ease;
	}

	.chip:hover:not(.disabled) {
		transform: translateY(-1px);
		border-color: rgba(15, 122, 102, 0.35);
		box-shadow: 0 10px 22px rgba(26, 36, 33, 0.08);
	}

	.chip.selected {
		border-color: var(--jade);
		background: rgba(15, 122, 102, 0.1);
		box-shadow: 0 0 0 2px rgba(15, 122, 102, 0.15);
	}

	.chip.disabled {
		opacity: 0.45;
		cursor: not-allowed;
	}

	.glyph {
		display: grid;
		place-items: center;
		width: 2.5rem;
		height: 2.5rem;
		border-radius: 10px;
		background: #fffdf7;
		border: 1px solid var(--line);
		font-size: 1.45rem;
	}

	.meta {
		display: grid;
		gap: 0.1rem;
		min-width: 0;
	}

	.meta strong {
		font-size: 0.95rem;
	}

	.meta small {
		color: var(--ink-soft);
		font-size: 0.78rem;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
</style>
