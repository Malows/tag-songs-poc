<script lang="ts">
	import Header from "$lib/header/Header.svelte";
	import "../app.scss";
</script>

<Header />

<main>
	<slot></slot>
</main>

<footer>
	<p>Made with love</p>
</footer>

<style>
	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
		padding: 1rem;
		width: 100%;
		max-width: 1024px;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 40px;
	}

	@media (min-width: 480px) {
		footer {
			padding: 40px 0;
		}
	}
</style>
