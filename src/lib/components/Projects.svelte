<script>
  export let title;
  export let slug;
  export let image;
  export let alt;
</script>

<main class="flex items-center justify-center pb-6">
  <section class="bg-gray-300 p-8 m-4 rounded-md shadow-xl transition duration-300 ease-in-out transform hover:scale-110">
    <a href={slug} class="block">
      <article class="relative rounded-md">
        <img src={image} alt={alt} class="w-full h-auto rounded-md mb-4 transition duration-300 ease-in-out transform hover:scale-105">
        <div class="absolute inset-0 bg-black opacity-40 rounded-md"></div>
        <div class="absolute inset-0 flex items-center justify-center text-white">
          <h2 class="text-2xl font-bold text-center p-2">{title}</h2>
        </div>
      </article>
    </a>
  </section>
</main>
