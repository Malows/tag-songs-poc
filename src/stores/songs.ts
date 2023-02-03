import { writable } from "svelte/store";

import services from "../services";

function createStore() {
    const { subscribe, set, update } = writable([] as Song[]);

    const service = services.user.songs; // should pick some service from the profile

    return {
        subscribe,
        set,
        update,
        add: async (payload: SongCreate) => {
            const response = await service.create(payload);

            if (!response.isOk || response.code! >= 400) {
                console.error(response);
                throw new Error("Bad response from server");
            }

            update((songs: Song[]) => [...songs, response.data as Song]);
        },

        fetch: async () => {
            const response = await service.fetch();

            if (!response.isOk || response.code! >= 400) {
                console.error(response);
                throw new Error("Bad response from server");
            }

            set(response.data as Song[]);
        }
    };
}

export const tags = createStore();
