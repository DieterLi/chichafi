export type Structure =
	| 'single'
	| 'left-right'
	| 'top-bottom'
	| 'surround'
	| 'triple';

export type SlotId = 'left' | 'right' | 'top' | 'bottom' | 'outer' | 'inner' | 'full';

export interface Radical {
	id: string;
	glyph: string;
	nameEn: string;
	hint: string;
	/** Pictograph cue shown in origin reveal */
	pictograph: string;
	nature?: string;
}

export interface Character {
	id: string;
	glyph: string;
	pinyin: string;
	meaning: string;
	structure: Structure;
	parts: string[];
	/** English riddle / memory hook */
	story: string;
	pictograph?: string;
	tier: 1 | 2 | 3;
}

export interface PuzzleLevel {
	id: string;
	title: string;
	targetId: string;
	/** Slot already filled */
	given: Partial<Record<SlotId, string>>;
	/** Empty slot the player must fill */
	answerSlot: SlotId;
	answerRadicalId: string;
	clue: string;
	/** Distractor radical ids in the tray */
	tray: string[];
}

export interface Recipe {
	/** Sorted radical ids joined with + */
	key: string;
	resultId: string;
}

export interface FailFlavor {
	parts: [string, string];
	message: string;
}
