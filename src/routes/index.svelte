<script lang="ts">
    import CreateTagBadge from "$lib/components/CreateTagBadge.svelte";
    import TagBadge from "$lib/components/TagBadge.svelte";
    import { onMount } from "svelte";
    import { tags } from "../store";

    onMount(() => {
        fetch(`${import.meta.env.VITE_HOST}/api/v1/tags`)
            .then(res => res.json())
            .then(tags.set)
    });

    let searchValue: string = "";
    let timer: NodeJS.Timer | null = null;

    function debounce (event: KeyboardEvent) {
        if (timer) {
            clearTimeout(timer);
        }

        const key = event.key;
        const value = (event.target as HTMLInputElement).value;

        if (key === "Enter" && value) {
            searchValue = value;
        } else {
            timer = setTimeout(() => {
                searchValue = value;
            }, 500);
        }
    }
</script>

<section class="flex justify-center w-full h-full">
    <input
        type="text"
        placeholder="Search a tag"
        class="main-input main-input--search"
        on:keyup={debounce}
        bind:value={searchValue}
    >
</section>

<section class="mt-6 w-full px-16 inline-flex gap-6">
{#each $tags as tag}
    <TagBadge {tag} />
{:else}
    <CreateTagBadge />
{/each}
</section>
