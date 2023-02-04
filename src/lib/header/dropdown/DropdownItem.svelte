<script lang="ts">
    export let route: string | null = null;
</script>

<li on:click on:keypress>
    {#if route}
    <a
        class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"
        href={route}
    >
        <slot/>
    </a>
    {:else}
    <span
        class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"
    >
        <slot/>
    </span>
    {/if}
</li>
