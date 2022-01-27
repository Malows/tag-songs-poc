<script>
    import { page } from "$app/stores";

    export let route;

    $: active = $page.url.pathname === route;

</script>

<li
    class="relative h-full hover:border-orange-300 hover:border-b-4"
    class:border-b-4={active}
    class:border-orange-500={active}
    class:hover:border-orange-500={active}
    >
    <a
        class="h-full flex items-center px-4 text-bold uppercase no-underline hover:no-underline duration-200 ease-lineare tracking-widest text-sm"
        sveltekit:prefetch
        href={route}
        >
        <slot />
    </a>
</li>
