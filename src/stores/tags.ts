import { writable } from "svelte/store";

import services from "src/services";

function createStore() {
    const { subscribe, set, update } = writable([]);

    const service = services.user.tags; // should pick some service from the profile

    return {
        subscribe,
        set,
        update,
        add: async (name: string) => {
            const response = await service.create({ name });

            if (!response.isOk || response.code >= 400) {
                console.error(response);
                throw new Error("Bad response from server");
            }

            update((tags) => [...tags, response.data]);
        },

        fetch: async () => {
            const response = await service.fetch();

            if (!response.isOk || response.code >= 400) {
                console.error(response);
                throw new Error("Bad response from server");
            }

            set(response.data);
        }
    };
}

export const tags = createStore();
