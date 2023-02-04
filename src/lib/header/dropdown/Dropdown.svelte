<script lang="ts">
    import { createEventDispatcher } from 'svelte';

    export let show: boolean = false;

    const dispatch = createEventDispatcher();

    function close () {
        dispatch('close')
    }
</script>

<ul
	class="min-w-max absolute bg-white text-base z-50 float-left py-2 list-none text-left rounded-lg shadow-lg mt-1 m-0 bg-clip-padding border-none"
    class:hidden={!show}
	aria-labelledby="dropdownMenu"
    on:click={close}
    on:keypress={close}
    >
    <slot></slot>
</ul>
