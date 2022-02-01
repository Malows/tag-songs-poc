<script>
	export let src = "";
	export let rounded = false;
	export let alt = "";
</script>

<div class="w-16 h-16 flex justify-center items-center" on:click >
	<img
		class="w-12 h-12 rounded-full"
		class:rounded-full={rounded}
		class:bg-slate-400={!src || src === "#"}
		{src}
		{alt}
	>
</div>
