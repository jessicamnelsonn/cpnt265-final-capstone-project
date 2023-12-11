<script>
  import Modal from '../../lib/components/Modal.svelte';

  let showModal = false;
</script>

<div class="flex items-center justify-center">
  <button on:click={() => (showModal = true)} class="border border-[#be8e5b] text-[#be8e5b] px-4 py-2 m-2 rounded hover:bg-[#be8e5b] hover:text-white">
    Behind the Scenes
  </button>
</div>

{#if showModal}
  <Modal bind:showModal>
    <h2 slot="header">
      The Human Side
    </h2>

    <section>
      <p class="mb-2">I'm more than just a web developer. In this corner of my portfolio, I invite you to get to know the person behind the code.</p>
      <p class="mb-2">Outside the world of code, you'll discover my passions, hobbies, and the little things that bring joy to my life. It's not just about pixels and lines of code; it's about the unique individual weaving those lines together.</p>
      <p class="text-base">Jessica</p>
    </section>
  </Modal>
{/if}


<main> 
  <h1 class="text-center">Music</h1> 
<section class="max-w-md mx-auto p-4">
  <iframe
    title="Spotify Playlist"
    style="border-radius:12px"
    src="https://open.spotify.com/embed/playlist/7vaBN86oZoBfOSTe7b4pwV?utm_source=generator"
    width="100%"
    height="200"
    frameborder="0"
    allowfullscreen=""
    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
    loading="lazy"
  ></iframe>
</section>
</main>