<script>
  export let showModal; // boolean

  let dialog; // HTMLDialogElement

  $: if (dialog && showModal) dialog.showModal();
</script>

<!-- svelte-ignore a11y-click-events-have-key-events a11y-no-noninteractive-element-interactions -->
<dialog
  bind:this={dialog}
  on:close={() => (showModal = false)}
  on:click|self={() => dialog.close()}
  class="fixed inset-0 flex items-center justify-center overflow-x-hidden overflow-y-auto"
>
  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <div
    on:click|stopPropagation
    class="relative max-w-[90ch] p-4 bg-white border-2 border-red-800"
  >
    <slot name="header" class="mb-4 text-lg font-bold" />
    <hr class="my-4 border-t border-gray-300" />
    <slot class="mb-4" />
    <hr class="my-4 border-t border-gray-300" />
    <!-- svelte-ignore a11y-autofocus -->
    <button
      autofocus
      on:click={() => dialog.close()}
      class="border border-black text-black hover:border-red-800 hover:text-red-800 px-4 py-2 rounded font-rasa">Close
    </button>
  </div>
</dialog>
