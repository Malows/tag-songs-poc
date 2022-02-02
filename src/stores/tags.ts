import { writable } from 'svelte/store';

function createStore () {
  const { subscribe, set, update } = writable([]);

  return {
    subscribe,
    set,
    update,
    add: async (name: string) => {
        const response = await fetch(`${import.meta.env.VITE_HOST}/api/v1/tags`, {
            method: "POST",
            headers: { "Content-Type": "application/json", },
            body: JSON.stringify({ name }),
        })

        if (!response.ok || response.status >= 400) {
            console.error(response);
            throw new Error("Bad response from server");
        }

        const tag: Tag = await response.json();

        update(tags => [...tags, tag])
    },
  }
}

export const tags = createStore();
