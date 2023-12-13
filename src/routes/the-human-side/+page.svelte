<script>
  import { onMount } from 'svelte';
  import { gsap } from 'gsap';
  import Modal from '../../lib/components/Modal.svelte';

  let showModal = false;

  onMount(() => {
    // GSAP Animation for the gallery
    gsap.fromTo(".container img", {
      y: 100,
      opacity: 0,
      scale: 0.1
    }, {
      y: 0,
      opacity: 1,
      scale: 1,
      stagger: 0.2,
      ease: "Bounce.easeOut"
    });
  });
</script>

<div class="flex items-center justify-center p-4">
  <!-- Button to trigger modal -->
  <button on:click={() => (showModal = true)} class="bg-red-700 text-white px-6 py-3 rounded-full border border-red-800 transition duration-300 ease-in-out transform hover:bg-red-800 hover:border-red-900 hover:scale-105">
    Discover More
  </button>
</div>
{#if showModal}
  <!-- Modal content -->
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

<main class="flex flex-wrap justify-center p-4">
  <!-- Section about music -->
  <section class="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/3 p-4 bg-gray-100 rounded-md shadow-md">
    <h1 class="text-center mb-4 text-2xl text-gray-800">Some Music I Love</h1>
    <p class="font-light text-gray-700 mb-6">Music is not just a collection of sounds; it's a soundtrack to moments, emotions, and memories. Here are some of my favorite tunes that have accompanied me on my coding adventures and beyond:</p>

    <!-- Music links -->
    <div class="text-sm text-gray-500">
      <a href="https://soundcloud.com/jessicamnelson" title="jessicamnelson" target="_blank" class="hover:text-gray-700 underline">jessicamnelson</a>
      <span class="mx-1">/</span>
      <a href="https://soundcloud.com/jessicamnelson/sets/song-i-love" title="Songs I Love" target="_blank" class="hover:text-gray-700 underline">Songs I Love</a>
    </div>
  </section>

  <!-- Music playlist -->
  <section class="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/3 p-4 bg-gray-100 rounded-md shadow-md">
    <iframe
      title="Song Playlist"
      width="100%"
      height="300"
      scrolling="no"
      frameborder="no"
      allow="autoplay"
      src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1737325182&color=%23cd0000&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true">
    </iframe>
  </section>

  <!-- Gallery section -->
  <section class="mb-8 mt-12">
    <h2 class="text-2xl font-bold px-4">The Human Side Gallery</h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4 container">
      <!-- Gallery images -->
      <img class="w-full h-80 max-w-xs max-h-xs object-cover p-4" src="/images/gallery-1.JPG" alt="my life">
      <img class="w-full h-80 max-w-xs max-h-xs object-cover p-4" src="/images/gallery-2.jpg" alt="my life">
      <img class="w-full h-80 max-w-xs max-h-xs object-cover p-4" src="/images/gallery-3.jpg" alt="my life">
      <img class="w-full h-80 max-w-xs max-h-xs object-cover p-4" src="/images/gallery-4.jpg" alt="my life">
      <img class="w-full h-80 max-w-xs max-h-xs object-cover p-4" src="/images/gallery-5.jpg" alt="my life">
      <img class="w-full h-80 max-w-xs max-h-xs object-cover p-4" src="/images/gallery-6.jpg" alt="my life">
      <img class="w-full h-80 max-w-xs max-h-xs object-cover p-4" src="/images/gallery-7.jpg" alt="my life">
      <img class="w-full h-80 max-w-xs max-h-xs object-cover p-4" src="/images/gallery-8.jpg" alt="my life">
      <img class="w-full h-80 max-w-xs max-h-xs object-cover p-4" src="/images/gallery-9.jpg" alt="my life">
      <img class="w-full h-80 max-w-xs max-h-xs object-cover p-4" src="/images/gallery-10.jpg" alt="my life">
      <img class="w-full h-80 max-w-xs max-h-xs object-cover p-4" src="/images/gallery-11.jpg" alt="my life">
      <img class="w-full h-80 max-w-xs max-h-xs object-cover p-4" src="/images/gallery-12.jpg" alt="my life">
    </div>
  </section>
</main>
