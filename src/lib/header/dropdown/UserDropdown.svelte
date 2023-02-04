<script lang="ts">
    import { createEventDispatcher } from 'svelte';

    import Dropdown from './Dropdown.svelte';
	import DropdownItem from "./DropdownItem.svelte";

    export let show: boolean = false;

    const dispatch = createEventDispatcher();

    function close () {
        dispatch('close')
    }

    function logout () {
        close()
        console.log("log out");
    }
</script>

<Dropdown bind:show={show} on:click={close} on:keypress={close}>
    <DropdownItem route="/profile" on:click={close} on:keypress={close}>
        Perfil
    </DropdownItem>
    <DropdownItem route="/users" on:click={close} on:keypress={close}>
        Usuarios
    </DropdownItem>
    <DropdownItem route="/tags" on:click={close} on:keypress={close}>
        Etiquetas
    </DropdownItem>
    <hr class="h-0 my-2 border border-solid border-t-0 border-gray-700 opacity-25" />
    <DropdownItem on:click={logout}>
        Cerrar Sesion
    </DropdownItem>
</Dropdown>
