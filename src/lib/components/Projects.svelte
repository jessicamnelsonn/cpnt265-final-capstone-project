<script>
  export let title;
  export let slug;
  export let image;
  export let alt;
</script>

<main class="flex items-center justify-center pb-6">
  <section class="relative bg-[#f1f1ef] p-8 m-4 rounded-md shadow-xl overflow-hidden transition-transform transform hover:scale-105">
    <a href={slug} class="block relative">
      <img src={image} alt={alt} class="w-full h-auto rounded-md transition-transform duration-400 ease-in-out hover:scale-105">
      <div class="absolute inset-0 bg-[#f1f1ef] opacity-0 rounded-md transition-opacity duration-400 ease-in-out hover:opacity-90">
        <div class="absolute inset-0 flex items-center justify-center text-[#4e5255">
          <h2 class="text-2xl text-center p-2 font-barlow">{title}</h2>
        </div>
      </div>
    </a>
  </section>
</main>
