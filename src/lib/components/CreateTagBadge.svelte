<script>
    import { goto } from "$app/navigation";
    import TagBadgeBase from "./TagBadgeBase.svelte";
</script>


<TagBadgeBase on:click={() => goto('/tags/create')} outline={true}>
    New tag
    <span class="font-extrabold pl-4">+</span>
</TagBadgeBase>
