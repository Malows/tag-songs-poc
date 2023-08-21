<script lang="ts">
    import type { PageData } from './$types';

    import { tags } from '../../../../stores'

    export let data: PageData;

    $: tag = $tags.find(x => x.slug === data.tag.slug)!
</script>

<svelte:head>
	<title>{data.tag.name}</title>
</svelte:head>

<p>{tag.name}</p>
<ul>
    {#each tag?.songs ?? [] as song}
        <li>{song.name} - {song.youtube_url}</li>
    {/each}
</ul>
