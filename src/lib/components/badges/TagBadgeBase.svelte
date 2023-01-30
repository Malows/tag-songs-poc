<script lang="ts">
    import { fade, fly } from "svelte/transition";

    export let outline: boolean;

    $: extraClasses = outline
        ? "border-solid border-orange-600 text-orange-600 hover:bg-orange-200"
        : "bg-orange-600 text-white";
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<span
    class={`px-8 py-2 border-2 inline-block cursor-pointer text-base rounded-full uppercase tracking-widest ${extraClasses}`}
    on:click
    in:fly={{ x: 50, duration: 500 }}
    out:fade={{ duration: 80 }}>
    <slot />
</span>
