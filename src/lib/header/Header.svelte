<script lang="ts">
	import { page } from "$app/stores";
	import { goto } from "$app/navigation";

	import logo from "./svelte-logo.svg";
	import Avatar from "./Avatar.svelte";
	import NavigationItem from "./NavigationItem.svelte";
	import UserDropdown from "./dropdown/UserDropdown.svelte";

	let showMenu = false;

	function checkHome () {
	    if ($page.url.pathname != "/") {
	        goto("/");
	    }
	}

	function toggleMenu () {
		showMenu = !showMenu
	}
</script>

<header class="h-16 px-12 flex justify-between">
	<Avatar src={logo} alt="SvelteKit" on:click={checkHome} />

	<nav>

		<ul>
			<NavigationItem route="/">Random</NavigationItem>

			<NavigationItem route="/tags">Etiquetas</NavigationItem>
		</ul>

		<Avatar src="/profile-pic.png" rounded alt="profile picture" on:click={toggleMenu} />
		<UserDropdown bind:show={showMenu} on:close={() => showMenu = false} />
	</nav>

</header>

<style>
	nav {
		display: flex;
		justify-content: flex-end;
		--background: rgba(255, 255, 255, 0.7);
	}

	ul {
		position: relative;
		padding: 0;
		margin: 0;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
		/* background: var(--background);
		background-size: contain; */
	}

	/* nav a {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 1em;
		color: var(--heading-color);
		font-weight: 700;
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		text-decoration: none;
		transition: color 0.2s linear;
	}

	a:hover {
		color: var(--accent-color);
	} */
</style>
