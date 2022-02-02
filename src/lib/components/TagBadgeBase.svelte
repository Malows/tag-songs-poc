<script lang="ts">
    export let outline: Boolean;

    $: extraClasses = outline
        ? "border-solid border-orange-600 text-orange-600 hover:bg-orange-200"
        : "bg-orange-600 text-white";
</script>

<span
    class={`px-8 py-2 border-2 inline-block cursor-pointer text-base rounded-full uppercase tracking-widest ${extraClasses}`}
    on:click>
    <slot />
</span>
