import type { Character } from '#lib/types';

export const characters: Character[] = [
	{
		id: 'ren',
		glyph: '人',
		pinyin: 'rén',
		meaning: 'person',
		structure: 'single',
		parts: ['ren'],
		story: 'Two strokes walking forward — a person.',
		pictograph: '🚶',
		tier: 1
	},
	{
		id: 'mu',
		glyph: '木',
		pinyin: 'mù',
		meaning: 'tree / wood',
		structure: 'single',
		parts: ['mu'],
		story: 'Trunk, branches, roots — a tree.',
		pictograph: '🌳',
		tier: 1
	},
	{
		id: 'ri',
		glyph: '日',
		pinyin: 'rì',
		meaning: 'sun / day',
		structure: 'single',
		parts: ['ri'],
		story: 'A sun disk flattened into a rectangle.',
		pictograph: '☀️',
		tier: 1
	},
	{
		id: 'yue',
		glyph: '月',
		pinyin: 'yuè',
		meaning: 'moon / month',
		structure: 'single',
		parts: ['yue'],
		story: 'A crescent moon standing upright.',
		pictograph: '🌙',
		tier: 1
	},
	{
		id: 'shui',
		glyph: '水',
		pinyin: 'shuǐ',
		meaning: 'water',
		structure: 'single',
		parts: ['shui'],
		story: 'Streams branching like flowing water.',
		pictograph: '💧',
		tier: 1
	},
	{
		id: 'huo',
		glyph: '火',
		pinyin: 'huǒ',
		meaning: 'fire',
		structure: 'single',
		parts: ['huo'],
		story: 'Flames leaping upward.',
		pictograph: '🔥',
		tier: 1
	},
	{
		id: 'tian',
		glyph: '田',
		pinyin: 'tián',
		meaning: 'field',
		structure: 'single',
		parts: ['tian'],
		story: 'Farm plots divided by paths.',
		pictograph: '🌾',
		tier: 1
	},
	{
		id: 'kou',
		glyph: '口',
		pinyin: 'kǒu',
		meaning: 'mouth',
		structure: 'single',
		parts: ['kou'],
		story: 'An open square — a mouth.',
		pictograph: '口',
		tier: 1
	},
	{
		id: 'nv',
		glyph: '女',
		pinyin: 'nǚ',
		meaning: 'woman',
		structure: 'single',
		parts: ['nv'],
		story: 'A kneeling figure — woman.',
		pictograph: '🧍',
		tier: 1
	},
	{
		id: 'qing',
		glyph: '青',
		pinyin: 'qīng',
		meaning: 'blue-green / clear',
		structure: 'single',
		parts: ['qing'],
		story: 'The clear blue-green of sky and plants.',
		pictograph: '🩵',
		tier: 1
	},
	{
		id: 'ming',
		glyph: '明',
		pinyin: 'míng',
		meaning: 'bright',
		structure: 'left-right',
		parts: ['ri', 'yue'],
		story: 'Sun + moon together make brightness.',
		pictograph: '✨',
		tier: 2
	},
	{
		id: 'lin',
		glyph: '林',
		pinyin: 'lín',
		meaning: 'forest',
		structure: 'left-right',
		parts: ['mu', 'mu'],
		story: 'Two trees side by side — a woods.',
		pictograph: '🌲',
		tier: 2
	},
	{
		id: 'sen',
		glyph: '森',
		pinyin: 'sēn',
		meaning: 'dense forest',
		structure: 'triple',
		parts: ['mu', 'mu', 'mu'],
		story: 'Three trees — a deep forest.',
		pictograph: '🌲🌲🌲',
		tier: 2
	},
	{
		id: 'xiu',
		glyph: '休',
		pinyin: 'xiū',
		meaning: 'rest',
		structure: 'left-right',
		parts: ['ren', 'mu'],
		story: 'A person leaning on a tree — resting.',
		pictograph: '🧘',
		tier: 2
	},
	{
		id: 'yan_fire',
		glyph: '炎',
		pinyin: 'yán',
		meaning: 'flame / hot',
		structure: 'top-bottom',
		parts: ['huo', 'huo'],
		story: 'Fire stacked on fire — blazing heat.',
		pictograph: '🔥🔥',
		tier: 2
	},
	{
		id: 'miao',
		glyph: '苗',
		pinyin: 'miáo',
		meaning: 'seedling',
		structure: 'top-bottom',
		parts: ['cao', 'tian'],
		story: 'Grass rising from a field — seedlings.',
		pictograph: '🌱',
		tier: 2
	},
	{
		id: 'qing_clear',
		glyph: '清',
		pinyin: 'qīng',
		meaning: 'clear (water)',
		structure: 'left-right',
		parts: ['san_dian_shui', 'qing'],
		story: 'Water + blue-green = clear, pure water.',
		pictograph: '💧',
		tier: 3
	},
	{
		id: 'qing_sunny',
		glyph: '晴',
		pinyin: 'qíng',
		meaning: 'sunny / clear weather',
		structure: 'left-right',
		parts: ['ri', 'qing'],
		story: 'Sun + blue-green = a clear sunny day.',
		pictograph: '☀️',
		tier: 3
	},
	{
		id: 'qing_feeling',
		glyph: '情',
		pinyin: 'qíng',
		meaning: 'feeling / emotion',
		structure: 'left-right',
		parts: ['xin', 'qing'],
		story: 'Heart + blue-green tone = feelings.',
		pictograph: '💗',
		tier: 3
	},
	{
		id: 'qing_please',
		glyph: '请',
		pinyin: 'qǐng',
		meaning: 'please / invite',
		structure: 'left-right',
		parts: ['yan', 'qing'],
		story: 'Speech + qing sound = to invite politely.',
		pictograph: '🙏',
		tier: 3
	},
	{
		id: 'zi',
		glyph: '字',
		pinyin: 'zì',
		meaning: 'character / word',
		structure: 'top-bottom',
		parts: ['mian', 'zi_child'],
		story: 'A child under a roof learning characters.',
		pictograph: '🏠',
		tier: 2
	},
	{
		id: 'fen',
		glyph: '焚',
		pinyin: 'fén',
		meaning: 'to burn',
		structure: 'top-bottom',
		parts: ['mu', 'huo'],
		story: 'Wood over fire — burning.',
		pictograph: '🪵🔥',
		tier: 2
	},
	{
		id: 'miao_water',
		glyph: '淼',
		pinyin: 'miǎo',
		meaning: 'vast waters',
		structure: 'triple',
		parts: ['shui', 'shui', 'shui'],
		story: 'Water upon water — a boundless flood.',
		pictograph: '🌊',
		tier: 2
	}
];

export const characterById = Object.fromEntries(characters.map((c) => [c.id, c])) as Record<
	string,
	Character
>;

export const characterByGlyph = Object.fromEntries(characters.map((c) => [c.glyph, c])) as Record<
	string,
	Character
>;
