import { derived, writable } from 'svelte/store';

export const tags = writable([]);

export const searchTagInput = writable('');

export const possibleTags = derived([tags, searchTagInput], ([$tags, $input]) => {
  const tagSet = $tags
    .filter(tag => tag.name.includes($input.toLocaleLowerCase()) /* filtering criteria */)
    .sort((a, b) => a.name.localeCompare(b.name) /* sorting criteria */);

  return tagSet;
});
