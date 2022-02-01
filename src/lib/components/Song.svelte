<script>
    export let song = null;
</script>

<div class="flex bg-gray-200 rounded-lg p-4 m-2">
    <div class="w-64 bg-gray-400 rounded-lg"></div>
    <div class="flex flex-col items-start ml-4">
        <h4 class="text-xl font-semibold">{song.name}</h4>
        <p class="text-sm">Some text about the thing that goes over a few lines.</p>

        <div class="flex justify-evenly">
            {#if song.spotify_url}
                <a class="p-2 leading-none rounded font-medium mt-3 bg-gray-400 text-xs uppercase" href={song.spotify_url}>Click Here</a>
            {/if}

            {#if song.spotify_url}
                <a class="p-2 leading-none rounded font-medium mt-3 bg-gray-400 text-xs uppercase" href={song.youtube_url}>Click Here</a>
            {/if}
        </div>
    </div>
</div>
