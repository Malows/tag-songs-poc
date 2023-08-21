import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import { get } from 'svelte/store'

import { tags } from '../../../../stores'

export const load = (async ({ params }) => {
    const { slug } = params

    const tag = get(tags).find(x => x.slug === slug)

    if (!tag) {
        throw error(404, 'Tag not found')
    }

    await tags.get(tag)

    return {
        tag: get(tags).find(x => x.slug === slug)!
    };
}) satisfies PageLoad;

