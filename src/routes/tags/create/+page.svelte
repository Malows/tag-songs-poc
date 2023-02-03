<script lang="ts">
    import { tags, inputs } from "../../../stores";

    async function handleSubmit () {
        if (!$inputs.create) {
            return;
        }

        await tags.add({ name: $inputs.create })

        $inputs.create = "";
    }
</script>

<section class="flex justify-center w-full h-full mt-80">
    <input
        type="text"
        placeholder="Tag name"
        class="main-input"
        on:submit={handleSubmit}
        bind:value={$inputs.create}
    >

    <button
        class="bg-orange-600 text-white py-2 px-4 ml-4 rounded-lg uppercase tracking-widest"
        on:click={handleSubmit}>
        Create
    </button>
</section>
