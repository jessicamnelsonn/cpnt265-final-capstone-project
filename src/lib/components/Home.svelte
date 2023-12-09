<script>
  import About from '../components/About.svelte'
  import Projects from '../components/Projects.svelte'
  import { projects } from '../data.js';
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
    <h1 class="md:flex md:flex-col text-3xl md:text-5xl px-4 py-2 font-barlow text-transparent bg-gradient-to-r from-slate-200/60 to-50% to-slate-200 bg-clip-text">
      Trusted by the most innovative minds
    </h1>
  </section>
</main>

<About />

<main class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 bg-black">
  {#each projects as project}
    <Projects {...project} />
  {/each}
</main>

<Contact />



