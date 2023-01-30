import { writable } from "svelte/store";

import services from "../services";

function createStore() {
    const { subscribe, set, update } = writable([] as Tag[]);

    const service = services.user.tags; // should pick some service from the profile

    return {
        subscribe,
        set,
        update,
        add: async (name: string) => {
            const response = await service.create({ name });

            if (!response.isOk || response?.code >= 400) {
                console.error(response);
                throw new Error("Bad response from server");
            }

            update((tags: Tag[]) => [...tags, response.data as Tag]);
        },

        fetch: async () => {
            const response = await service.fetch();

            if (!response.isOk || response.code >= 400) {
                console.error(response);
                throw new Error("Bad response from server");
            }

            set(response.data as Tag[]);
        }
    };
}

export const tags = createStore();
