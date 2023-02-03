import type GenericService from "src/services/Generic";
import { writable } from "svelte/store";

export function createGenericStore<T, C>(service: GenericService<T>) {
    const { subscribe, set, update } = writable([] as T[]);

    return {
        subscribe,
        set,
        update,
        add: async (payload: C) => {
            const response = await service.create(payload!);

            if (!response.isOk || response.code! >= 400) {
                console.error(response);
                throw new Error("Bad response from server");
            }

            update((elements: T[]) => [...elements, response.data as T]);
        },

        fetch: async () => {
            const response = await service.fetch();

            if (!response.isOk || response.code! >= 400) {
                console.error(response);
                throw new Error("Bad response from server");
            }

            set(response.data as T[]);
        }
    };
}
