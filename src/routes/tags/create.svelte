<script lang="ts">
    import { tags } from "../../store";

    let value = "";

    async function handleSubmit () {
        if (!value) {
            return;
        }

        await tags.add(value)

        value = "";
    }
</script>

<section class="flex justify-center w-full h-full">
    <input
        type="text"
        placeholder="Tag name"
        class="main-input"
        on:submit={handleSubmit}
        bind:value={value}
    >

    <button
        class="bg-orange-600 text-white py-2 px-4 ml-4 rounded-lg uppercase tracking-widest"
        on:click={handleSubmit}>
        Create
    </button>
</section>
