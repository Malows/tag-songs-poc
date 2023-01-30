<script lang="ts">
    import { goto } from "$app/navigation";

    import { inputs } from "../../../stores";

    import TagBadgeBase from "./TagBadgeBase.svelte";

    export let tag: Tag;

    function click () {
        goto(`/tags/${tag.slug}`).finally(inputs.clearSearch);
    }
</script>


<TagBadgeBase on:click={click} outline={false}>
    {tag.name}
</TagBadgeBase>
