<script>
    import { goto } from "$app/navigation";

    import { inputs }  from "../../../stores";

    import TagBadgeBase from "./TagBadgeBase.svelte";

    function handleClick () {
        inputs.transverse();
        goto("/tags/create");
    }
</script>


<TagBadgeBase on:click={handleClick} outline={true}>
    New tag
    <span class="font-extrabold pl-4">+</span>
</TagBadgeBase>
