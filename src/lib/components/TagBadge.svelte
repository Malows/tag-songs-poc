<script>
    import { goto } from "$app/navigation";
    import TagBadgeBase from "./TagBadgeBase.svelte";

    export let tag;

    function click () {
        goto(`/tags/${tag.slug}`);
    }
</script>


<TagBadgeBase on:click={click} outline={false}>
    {tag.name}
</TagBadgeBase>
