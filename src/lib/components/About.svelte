<script>
  // Importing necessary functions from the Svelte library
  import { onMount, onDestroy } from 'svelte';
  import { slide } from 'svelte/transition';

  // Initializing variables
  let greetings = ['Hello', 'Hola'];
  let index = 0;
  let roller;

  // Code to be executed when the component is mounted
  onMount(() => {
    // Setting up an interval to cycle through greetings
    roller = setInterval(() => {
      // Check if the index is at the end of the greetings array, then reset to the beginning
      if (index === greetings.length - 1) index = 0;
      else index++;
    }, 1250);
  });

  // Code to be executed when the component is destroyed
  onDestroy(() => {
    // Clearing the interval to prevent memory leaks
    clearInterval(roller);
  });
</script>

<!-- About Section -->
<main class="h-screen flex flex-col md:flex-row" id="about-section">
  <!-- Left Section with Greetings -->
  <section class="w-full md:w-1/2 h-full bg-white flex items-center justify-center border-b">
    <div>
      {#key index}
        <!-- Displaying dynamic greetings with a sliding transition -->
        <h1 class="text-[#be8e5b] text-8xl text-center font-mono" transition:slide>{greetings[index]}!</h1>
      {/key}
    </div>
  </section>

  <!-- Right Section with About Me Content -->
  <section class="w-full md:w-1/2 h-full bg-[#cda171] text-white p-4 overflow-auto">
    <div>
      <!-- Main heading for the About Me section -->
      <h1 class="font-rasa text-4xl md:text-6xl font-bold text-center mb-6">About Me</h1>

      <!-- Paragraphs providing information about me -->
      <p class="text-base md:text-lg leading-loose font-barlow">
        My name is Jessica Nelson, a passionate individual with a vibrant mix of Mexican and Canadian roots. I embrace the richness of my cultural background, allowing me to seamlessly navigate conversations in both English and Spanish.
      </p>

      <h2 class="text-xl md:text-2xl mt-6 mb-2 font-mono">Passion for Visual Storytelling</h2>

      <p class="text-base md:text-lg leading-loose font-barlow">
        I've always been captivated by the power of visual storytelling. My journey into the world of videography and photography began with a fascination for capturing moments and turning them into narratives. Through the lens of my camera, I aim to convey emotions, share experiences, and celebrate the beauty of diversity.
      </p>

      <h2 class="text-xl md:text-2xl mt-6 mb-2 font-mono">Bridging Cultures Through Language</h2>

      <p class="text-base md:text-lg leading-loose font-barlow">
        Being bilingual in Spanish and English is more than just a skill for me; it's a bridge that connects me to the stories and experiences of people from different backgrounds. I find joy in breaking down language barriers and fostering understanding.
      </p>

      <h2 class="text-xl md:text-2xl mt-6 mb-2 font-mono">Web Development Journey</h2>

      <p class="text-base md:text-lg leading-loose font-barlow">
        Currently, I'm on an exciting journey, finishing up a certificate program in web development. This adventure allows me to blend my creative passion with technical skills. I find satisfaction in crafting digital experiences that not only look stunning but also function seamlessly.
      </p>

      <h2 class="text-xl md:text-2xl mt-6 mb-2 font-mono">What Drives Me</h2>

      <p class="text-base md:text-lg leading-loose font-barlow">
        Whether I'm behind the camera or coding a website, my goal remains the same: to create meaningful connections. I believe that technology, combined with art, has the power to bring people together and amplify voices that might otherwise go unheard.
      </p>

      <p class="text-base md:text-lg leading-loose mt-4 font-barlow">
        Join me on this journey as I continue to learn, grow, and contribute my unique perspective to the ever-evolving landscape of visual storytelling and web development. Let's create something extraordinary together!
      </p>
    </div>
  </section>
</main>
