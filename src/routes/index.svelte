<script lang="ts">
    import CreateTagBadge from "$lib/components/CreateTagBadge.svelte";
    import TagBadge from "$lib/components/TagBadge.svelte";
    import { onMount } from "svelte";
    import { tags, possibleTags, inputs } from "../stores";

    onMount(() => {
        if ($tags.length === 0) {
            fetch(`${import.meta.env.VITE_HOST}/api/v1/tags`)
                .then(res => res.json())
                .then(tags.set)
        }
    });
</script>

<section class="flex justify-center w-full h-full">
    <input
        type="text"
        placeholder="Search a tag"
        class="main-input main-input--search"
        bind:value={$inputs.search}
        >
        <!-- on:keyup={debounce} -->
</section>

<section class="mt-6 w-full px-16 inline-flex gap-6">
{#each $possibleTags as tag}
    <TagBadge {tag} />
{:else}
    <CreateTagBadge />
{/each}
</section>
