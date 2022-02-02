import { writable } from "svelte/store";

function createStore() {
    const { subscribe, set, update } = writable({
        search: "",
        create: "",
    });

    return {
        subscribe,
        set,
        update,
        clearCreate: () => update((inputs) => ({ ...inputs, create: "" })),
        clearSearch: () => update((inputs) => ({ ...inputs, search: "" })),
        transverse: () =>
            update((inputs) => ({ search: "", create: inputs.search })),
    };
}

export const inputs = createStore();
