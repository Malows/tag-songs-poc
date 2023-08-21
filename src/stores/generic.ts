import type GenericService from "src/services/Generic";
import { writable } from "svelte/store";

interface Identificable {
    id: string | number;
}

export function createGenericStore<T extends Identificable, C>(service: GenericService<T>) {
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
        },

        get: async (payload: any) => {
            const response = await service.get(payload)

            if (!response.isOk || response.code! >= 400) {
                console.error(response);
                throw new Error("Bad response from server");
            }
            const data = response.data as T

            update((elements: T[]) => {
                const index = elements.findIndex(x => x.id === data.id)

                if (index === -1) {
                    return [...elements, data]
                }

                return [...elements.slice(0, index), data, ...elements.slice(index + 1)]
            })
        }
    };
}
