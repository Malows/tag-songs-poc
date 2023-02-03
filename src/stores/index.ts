import Fuse from "fuse.js";
import { derived } from "svelte/store";

import { tags } from "./tags";
import { inputs } from "./inputs";

export * from "./tags";
export * from "./songs";
export * from "./inputs";

const FUSE_OPTIONS = { keys: ["name"] };

export const possibleTags = derived([tags, inputs], ([$tags, $input]) => {
    if ($input.search.length === 0) {
        return $tags;
    }

    const matches = new Fuse($tags, FUSE_OPTIONS).search($input.search);

    return matches.map((match) => match.item);
});
