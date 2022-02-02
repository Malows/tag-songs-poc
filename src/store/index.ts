import Fuse from "fuse.js";

import { derived, writable } from 'svelte/store';

export const tags = writable([] as Tag[]);

export const searchTagInput = writable('');

const FUSE_OPTIONS = {
  includeScore: true,
  minMatchCharLength: 2,
  shouldSort: true,
  keys: ['name']
};

export const possibleTags = derived([tags, searchTagInput], ([$tags, $input]) => {
  if ($input.length === 0) {
    return $tags;
  }

  const matches = new Fuse($tags, FUSE_OPTIONS).search($input);

  return matches.map(match => match.item);
});
