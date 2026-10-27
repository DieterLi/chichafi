import { characterById } from '#lib/data/characters';
import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = ({ params }) => {
	const character = characterById[params.id];
	if (!character) error(404, 'Character not found');
	return { character };
};
