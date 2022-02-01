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

<section>
    <input
        type="text"
        placeholder="Search a tag"
        on:keyup={debounce}
        bind:value={searchValue}
    >

    {#each $tags as tag}
        <TagBadge {tag} />

    {:else}
        <CreateTagBadge />
    {/each}
</section>

<style lang="scss">

    section {
        display: flex;
        justify-content: center;
        width: 100%;
        height: 100%;
    }

    input {
        accent-color: var(--accent-color);
        width: clamp(90vw, calc(100% / 1.618), 100%);
        height: 3rem;
        border-radius: 1.5rem;
        border: solid 1px #bbb;
        padding: 0 1rem;
        font-size: 2rem;
        color: #444;

        background-color: #f5f5f5;
        background-image: url("static/search.svg");
        background-repeat: no-repeat;
        background-position: right 1rem center;

        &:focus {
            background-image: url("static/search-accent.svg");
        }
    }
</style>
