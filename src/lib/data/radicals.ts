import type { Radical } from '#lib/types';

export const radicals: Radical[] = [
	{
		id: 'ren',
		glyph: '人',
		nameEn: 'Person',
		hint: 'A walking figure',
		pictograph: '🚶',
		nature: 'human'
	},
	{
		id: 'kou',
		glyph: '口',
		nameEn: 'Mouth',
		hint: 'An open mouth / opening',
		pictograph: '口',
		nature: 'opening'
	},
	{
		id: 'mu',
		glyph: '木',
		nameEn: 'Tree / Wood',
		hint: 'A tree with roots and branches',
		pictograph: '🌳',
		nature: 'wood'
	},
	{
		id: 'shui',
		glyph: '水',
		nameEn: 'Water',
		hint: 'Flowing streams',
		pictograph: '💧',
		nature: 'water'
	},
	{
		id: 'san_dian_shui',
		glyph: '氵',
		nameEn: 'Water droplets',
		hint: 'Three drops — water on the side',
		pictograph: '💧',
		nature: 'water'
	},
	{
		id: 'huo',
		glyph: '火',
		nameEn: 'Fire',
		hint: 'Flames rising',
		pictograph: '🔥',
		nature: 'fire'
	},
	{
		id: 'ri',
		glyph: '日',
		nameEn: 'Sun',
		hint: 'A round sun with a mark',
		pictograph: '☀️',
		nature: 'light'
	},
	{
		id: 'yue',
		glyph: '月',
		nameEn: 'Moon',
		hint: 'A crescent moon',
		pictograph: '🌙',
		nature: 'light'
	},
	{
		id: 'tu',
		glyph: '土',
		nameEn: 'Earth',
		hint: 'A mound of soil',
		pictograph: '⛰️',
		nature: 'earth'
	},
	{
		id: 'nv',
		glyph: '女',
		nameEn: 'Woman',
		hint: 'A kneeling figure',
		pictograph: '🧍',
		nature: 'human'
	},
	{
		id: 'tian',
		glyph: '田',
		nameEn: 'Field',
		hint: 'A plotted farm field',
		pictograph: '🌾',
		nature: 'earth'
	},
	{
		id: 'cao',
		glyph: '艹',
		nameEn: 'Grass',
		hint: 'Grass on top',
		pictograph: '🌿',
		nature: 'plant'
	},
	{
		id: 'qing',
		glyph: '青',
		nameEn: 'Blue-green',
		hint: 'Clear / blue-green tone',
		pictograph: '🩵',
		nature: 'color'
	},
	{
		id: 'mian',
		glyph: '宀',
		nameEn: 'Roof',
		hint: 'A house roof overhead',
		pictograph: '🏠',
		nature: 'shelter'
	},
	{
		id: 'zi_child',
		glyph: '子',
		nameEn: 'Child',
		hint: 'A child under care',
		pictograph: '👶',
		nature: 'human'
	},
	{
		id: 'xin',
		glyph: '忄',
		nameEn: 'Heart (side)',
		hint: 'Feelings live here',
		pictograph: '❤️',
		nature: 'emotion'
	},
	{
		id: 'yan',
		glyph: '讠',
		nameEn: 'Speech',
		hint: 'Words spoken aloud',
		pictograph: '💬',
		nature: 'speech'
	}
];

export const radicalById = Object.fromEntries(radicals.map((r) => [r.id, r])) as Record<
	string,
	Radical
>;
