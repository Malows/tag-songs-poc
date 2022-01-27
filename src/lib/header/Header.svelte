<script lang="ts">
	import { page } from '$app/stores';
	import logo from './svelte-logo.svg';
	import Avatar from './Avatar.svelte';
</script>

<header>
	<div class="brand">
		<a href="https://kit.svelte.dev">
			<img src={logo} alt="SvelteKit" />
		</a>
	</div>

	<nav>

		<ul>
			<li class:active={$page.url.pathname === '/'}>
				<a sveltekit:prefetch href="/">Random</a>
			</li>

			<li class:active={$page.url.pathname === '/about'}>
				<a sveltekit:prefetch href="/about">Etiquetas</a>
			</li>
		</ul>

		<Avatar />
	</nav>

</header>

<style lang="scss">
	header {
		display: flex;
		justify-content: space-between;
		padding-right: 3rem;
		padding-left: 3rem;
	}

	.brand {
		justify-self: flex-start;
		width: 3em;
		height: 3em;
	}

	.brand img {
		width: 2em;
		height: 2em;
		object-fit: contain;
	}

	nav {
		display: flex;
		justify-content: flex-end;
		--background: rgba(255, 255, 255, 0.7);
	}

	ul {
		position: relative;
		padding: 0;
		margin: 0;
		height: 3em;
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
		background: var(--background);
		background-size: contain;
	}

	li {
		position: relative;
		height: 100%;
	}

	li.active::before {
		--size: 6px;
		content: '';
		width: 0;
		height: 0;
		position: absolute;
		top: 0;
		left: calc(50% - var(--size));
		border: var(--size) solid transparent;
		border-top: var(--size) solid var(--accent-color);
	}

	nav a {
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
	}
</style>
