<script lang="ts">
    import { goto } from "$app/navigation";
    // import type { PageData } from './$types';

    // export let data: PageData;
    let username: string;
    let password: string;

    function onLogin() {
        goto("/")
    }
</script>

<div>
    <input type="text" bind:value={username}>
    <input type="password" bind:value={password}>
    <button on:click={onLogin}>Login</button>
    <a href="/register">Register</a>
</div>
