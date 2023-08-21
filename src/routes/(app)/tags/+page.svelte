
<script lang="ts">
	import { onMount } from "svelte";

	import { tags, possibleTags, inputs } from "../../../stores";

	import CreateTagBadge from "$lib/components/badges/CreateTagBadge.svelte";
	import TagBadge from "$lib/components/badges/TagBadge.svelte";

	onMount(() => {
    if ($tags.length === 0) {
        fetch(`${import.meta.env.VITE_HOST}/api/tags`)
            .then(res => res.json())
            .then(tags.set)
    }
});

</script>

<svelte:head>
	<title>About</title>
</svelte:head>

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
{/each}
    <CreateTagBadge />
</section>
