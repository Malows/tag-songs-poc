<script lang="ts">
    import { tags } from "../../store/index"

    let value = "";

    function handleSubmit () {
        if (!value) {
            return;
        }

        fetch(`${import.meta.env.VITE_HOST}/api/v1/tags`, {
            method: "POST",
            headers: { "Content-Type": "application/json", },
            body: JSON.stringify({ name: value }),
        })
            .then((res) => {
                if (res.ok && res.status === 200) {
                    return res.json();
                }

                console.error(res);
                throw new Error("Bad response from server");
            })
            .then((res) => {
                $tags = [...$tags, res as Tag];
            });
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
