import type { FailFlavor, Recipe } from '#lib/types';

/** Normalize ingredient ids into a stable recipe key */
export function recipeKey(ids: string[]): string {
	return [...ids].sort().join('+');
}

export const recipes: Recipe[] = [
	{ key: recipeKey(['ri', 'yue']), resultId: 'ming' },
	{ key: recipeKey(['mu', 'mu']), resultId: 'lin' },
	{ key: recipeKey(['mu', 'mu', 'mu']), resultId: 'sen' },
	{ key: recipeKey(['ren', 'mu']), resultId: 'xiu' },
	{ key: recipeKey(['huo', 'huo']), resultId: 'yan_fire' },
	{ key: recipeKey(['cao', 'tian']), resultId: 'miao' },
	{ key: recipeKey(['san_dian_shui', 'qing']), resultId: 'qing_clear' },
	{ key: recipeKey(['ri', 'qing']), resultId: 'qing_sunny' },
	{ key: recipeKey(['xin', 'qing']), resultId: 'qing_feeling' },
	{ key: recipeKey(['yan', 'qing']), resultId: 'qing_please' },
	{ key: recipeKey(['mian', 'zi_child']), resultId: 'zi' },
	{ key: recipeKey(['mu', 'huo']), resultId: 'fen' },
	{ key: recipeKey(['shui', 'shui', 'shui']), resultId: 'miao_water' }
];

export const recipeByKey = Object.fromEntries(recipes.map((r) => [r.key, r])) as Record<
	string,
	Recipe
>;

export const failFlavors: FailFlavor[] = [
	{
		parts: ['san_dian_shui', 'huo'],
		message: 'Those radicals fought — water put the fire out. Try a calmer pairing.'
	},
	{
		parts: ['huo', 'shui'],
		message: 'Steam everywhere! Fire and water don’t settle into a character here.'
	},
	{
		parts: ['ren', 'huo'],
		message: 'A person next to fire… dramatic, but not a character in this demo.'
	},
	{
		parts: ['mu', 'yue'],
		message: 'A tree under moonlight is poetic — still not a valid craft (yet).'
	}
];

export function failMessage(ids: string[]): string {
	const set = new Set(ids);
	for (const f of failFlavors) {
		if (f.parts.every((p: string) => set.has(p))) return f.message;
	}
	if (ids.length < 2) return 'Pick at least two pieces to craft.';
	return 'These pieces didn’t click. Think pictographs — what story do they tell together?';
}
