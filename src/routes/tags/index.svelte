<script context="module">
	import { browser, dev } from "$app/env";

	// we don't need any JS on this page, though we'll load
	// it in dev so that we get hot module replacement...
	export const hydrate = dev;

	// ...but if the client-side router is already loaded
	// (i.e. we came here from elsewhere in the app), use it
	export const router = browser;

	// since there's no dynamic data here, we can prerender
	// it so that it gets served as a static asset in prod
	export const prerender = true;
</script>

<script lang="ts">
	import { onMount } from "svelte";

	import { tags, possibleTags, inputs } from "../../stores";

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
