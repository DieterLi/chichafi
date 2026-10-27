import type { PuzzleLevel } from '#lib/types';

export const puzzles: PuzzleLevel[] = [
	{
		id: 'p1-ming',
		title: 'Sun meets Moon',
		targetId: 'ming',
		given: { left: 'ri' },
		answerSlot: 'right',
		answerRadicalId: 'yue',
		clue: 'What joins the sun to make brightness?',
		tray: ['yue', 'mu', 'huo', 'kou']
	},
	{
		id: 'p2-lin',
		title: 'Two Trees',
		targetId: 'lin',
		given: { left: 'mu' },
		answerSlot: 'right',
		answerRadicalId: 'mu',
		clue: 'Add another tree to grow a woods.',
		tray: ['mu', 'ri', 'ren', 'tu']
	},
	{
		id: 'p3-xiu',
		title: 'Take a Break',
		targetId: 'xiu',
		given: { right: 'mu' },
		answerSlot: 'left',
		answerRadicalId: 'ren',
		clue: 'Who leans against a tree to rest?',
		tray: ['ren', 'nv', 'huo', 'kou']
	},
	{
		id: 'p4-miao',
		title: 'Green Shoots',
		targetId: 'miao',
		given: { bottom: 'tian' },
		answerSlot: 'top',
		answerRadicalId: 'cao',
		clue: 'What sprouts above the field?',
		tray: ['cao', 'shui', 'huo', 'ri']
	},
	{
		id: 'p5-qing',
		title: 'Clear Water',
		targetId: 'qing_clear',
		given: { right: 'qing' },
		answerSlot: 'left',
		answerRadicalId: 'san_dian_shui',
		clue: 'Water droplets near a blue-green sky.',
		tray: ['san_dian_shui', 'huo', 'ren', 'cao']
	},
	{
		id: 'p6-zi',
		title: 'Under the Roof',
		targetId: 'zi',
		given: { bottom: 'zi_child' },
		answerSlot: 'top',
		answerRadicalId: 'mian',
		clue: 'What shelter covers the child learning words?',
		tray: ['mian', 'cao', 'ri', 'mu']
	},
	{
		id: 'p7-qing-sunny',
		title: 'Blue Family: Weather',
		targetId: 'qing_sunny',
		given: { right: 'qing' },
		answerSlot: 'left',
		answerRadicalId: 'ri',
		clue: 'Same sound family — which radical makes “sunny”?',
		tray: ['ri', 'san_dian_shui', 'xin', 'yan']
	},
	{
		id: 'p8-qing-feel',
		title: 'Blue Family: Feeling',
		targetId: 'qing_feeling',
		given: { right: 'qing' },
		answerSlot: 'left',
		answerRadicalId: 'xin',
		clue: 'Same sound family — where do emotions live?',
		tray: ['xin', 'san_dian_shui', 'ri', 'yan']
	}
];
