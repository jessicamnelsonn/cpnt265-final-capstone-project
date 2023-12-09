<script>
  import About from '../components/About.svelte'
  import Contact from '../components/Contact.svelte'
</script>

<!-- Hero Section -->
<main class="relative flex h-full flex-col items-center justify-center">
  <!-- Background video -->
  <video class="w-full h-full object-cover" muted autoplay loop playsinline disablepictureinpicture>
    <source src="/images/hero-video.mp4" type="video/mp4">
  </video>

  <!-- Text section over the video -->
  <section class="absolute top-1/3 left-0 transform -translate-y-2/5">
    <!-- Dynamic greeting text with a gradient background -->
    <h1 class="text-3xl md:text-5xl px-4 py-2 font-barlow text-transparent bg-gradient-to-r from-slate-200/60 to-50% to-slate-200 bg-clip-text">
      Trusted by the most innovative minds
    </h1>
  </section>
</main>

<About />

<Contact />



