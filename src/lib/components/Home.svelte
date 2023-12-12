<script>
  // Importing components and data
  import About from '../components/About.svelte'
  import Projects from '../components/Projects.svelte'
  import { projects } from '../data.js';
  import Skills from '../components/Skills.svelte'
  import Contact from '../components/Contact.svelte'
</script>

<!-- Hero Section -->
<main class="relative h-full">
  <!-- Background video -->
  <video class="w-full h-full object-cover" muted autoplay loop playsinline disablepictureinpicture>
    <source src="/images/hero-video.mp4" type="video/mp4">
  </video>

  <!-- Text section over the video -->
  <section class="absolute top-1/3 left-0 transform -translate-y-2/5">
    <!-- Dynamic greeting text with a gradient background -->
    <h1 class="md:flex md:flex-col text-3xl md:text-5xl px-4 py-2 font-barlow md:text-transparent md:bg-gradient-to-r md:from-slate-200/60 md:to-50% md:to-slate-200 md:bg-clip-text text-white bg-black/20 p-2">
      Trusted by the most innovative minds
    </h1>
  </section>
</main>

<!-- About Section -->
<About />

<!-- Projects Section -->
<main id="project-section">
  <!-- Projects Title -->
  <section class="text-7xl p-10 font-rasa text-[#4e5255]">Projects</section>
  <!-- Grid layout for projects -->
  <section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
    {#each projects as project}
      <Projects {...project} />
    {/each}
  </section>
  <!-- "View More" link to GitHub -->
  <div class="text-center mb-8">
    <a href="https://github.com/jessicamnelsonn" class="text-xl font-bold hover:bg-[#4e5255] border-2 border-[#4e5255] text-[#4e5255] hover:text-white py-2 px-4 mb-10 rounded-full inline-block transition duration-300 ease-in-out transform hover:scale-105">
      Explore More on GitHub
    </a>
  </div>
</main>

<Skills />

<!-- Contact Section -->
<Contact />


