<script lang="ts">
    import { onMount } from "svelte";
    import { fly } from "svelte/transition";
    import { flip } from "svelte/animate";

    import { tags, possibleTags, inputs } from "../stores";

    import CreateTagBadge from "$lib/components/badges/CreateTagBadge.svelte";
    import TagBadge from "$lib/components/TagBadge.svelte";

    onMount(() => {
        if ($tags.length === 0) {
            fetch(`${import.meta.env.VITE_HOST}/api/v1/tags`)
                .then(res => res.json())
                .then(tags.set)
        }
    });
</script>

<section class="flex justify-center w-full h-full mt-80">
    <input
        type="text"
        placeholder="Search a tag"
        class="main-input main-input--search"
        bind:value={$inputs.search}
        >
</section>

<section class="mt-6 w-full px-16 inline-flex gap-6">
{#each $possibleTags as tag}
    <TagBadge {tag} />
{:else}
    <CreateTagBadge />
{/each}
</section>
