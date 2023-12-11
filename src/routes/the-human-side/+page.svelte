<script>
  import Modal from '../../lib/components/Modal.svelte';

  let showModal = false;
</script>

<div class="flex items-center justify-center">
  <button on:click={() => (showModal = true)} class="border border-black text-black px-4 py-2 m-2 rounded hover:text-red-700 hover:border-red-700">
    Behind the Scenes
  </button>
</div>

{#if showModal}
  <Modal bind:showModal>
    <h2 slot="header" class="font-rasa">
      The Human Side
    </h2>

    <section class="font-rasa">
      <p class="mb-2">I'm more than just a web developer. In this corner of my portfolio, I invite you to get to know the person behind the code.</p>
      <p class="mb-2">Outside the world of code, you'll discover my passions, hobbies, and the little things that bring joy to my life. It's not just about pixels and lines of code; it's about the unique individual weaving those lines together.</p>
      <p class="text-base">Jessica</p>
    </section>
  </Modal>
{/if}


<main> 
  <h1 class="text-center">Some Music I Love</h1> 
  <section class="max-w-md mx-auto p-4">
    <p class="font-rasa mb-4">Music is not just a collection of sounds; it's a soundtrack to moments, emotions, and memories. Here are some of my favorite tunes that have accompanied me on my coding adventures and beyond:</p>
    
    <iframe 
      title="Song Playlist"
      width="100%" 
      height="300" 
      scrolling="no" 
      frameborder="no" 
      allow="autoplay" 
      src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1737325182&color=%23cd0000&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true">
    </iframe>

    <div class="text-xs mt-2" style="color: #cccccc; font-family: Interstate, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Garuda, Verdana, Tahoma, sans-serif; font-weight: 100;">
      <a href="https://soundcloud.com/jessicamnelson" 
        title="jessicamnelson" 
        target="_blank" 
        style="color: #cccccc; text-decoration: none;">
        jessicamnelson
      </a> 
      
      <span class="mx-1">/</span>
      
      <a href="https://soundcloud.com/jessicamnelson/sets/song-i-love" 
        title="Songs I Love" 
        target="_blank" 
        style="color: #cccccc; text-decoration: none;">
        Songs I Love
      </a>
    </div>
  </section>
</main>
