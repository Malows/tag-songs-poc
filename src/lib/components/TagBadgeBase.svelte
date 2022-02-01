<script lang="ts">
    export let outline: Boolean;
</script>

<span
    class="px-4 py-2 text-base rounded-full"
    class:bg-orange-600={!outline}
    class:border-orange-600={outline}
    class:text-white={!outline}
    class:text-orange-600={outline}
    on:click
    >
    <slot />
</span>
