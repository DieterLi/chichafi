const STORAGE_KEY = 'chichafi-progress-v1';

export type ProgressState = {
	unlocked: string[];
	clearedPuzzles: string[];
};

function load(): ProgressState {
	if (typeof localStorage === 'undefined') {
		return { unlocked: ['ren', 'mu', 'ri', 'yue', 'shui', 'huo', 'tian', 'kou', 'nv', 'qing'], clearedPuzzles: [] };
	}
	try {
		const raw = localStorage.getItem(STORAGE_KEY);
		if (!raw) {
			return {
				unlocked: ['ren', 'mu', 'ri', 'yue', 'shui', 'huo', 'tian', 'kou', 'nv', 'qing'],
				clearedPuzzles: []
			};
		}
		return JSON.parse(raw) as ProgressState;
	} catch {
		return {
			unlocked: ['ren', 'mu', 'ri', 'yue', 'shui', 'huo', 'tian', 'kou', 'nv', 'qing'],
			clearedPuzzles: []
		};
	}
}

function save(state: ProgressState) {
	if (typeof localStorage === 'undefined') return;
	localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

class Progress {
	unlocked = $state<string[]>(load().unlocked);
	clearedPuzzles = $state<string[]>(load().clearedPuzzles);

	persist() {
		save({ unlocked: this.unlocked, clearedPuzzles: this.clearedPuzzles });
	}

	unlock(characterId: string) {
		if (this.unlocked.includes(characterId)) return;
		this.unlocked = [...this.unlocked, characterId];
		this.persist();
	}

	clearPuzzle(puzzleId: string, rewardId: string) {
		if (!this.clearedPuzzles.includes(puzzleId)) {
			this.clearedPuzzles = [...this.clearedPuzzles, puzzleId];
		}
		this.unlock(rewardId);
	}

	isUnlocked(characterId: string) {
		return this.unlocked.includes(characterId);
	}

	isPuzzleCleared(puzzleId: string) {
		return this.clearedPuzzles.includes(puzzleId);
	}
}

export const progress = new Progress();
