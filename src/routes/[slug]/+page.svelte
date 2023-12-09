<script>
  export let data;
</script>

<div class="text-white bg-black min-h-screen flex items-center justify-center">
  <section>
    <a href="{data.projectItem.githubUrl}">
    <article class="p-4 rounded-lg shadow-md bg-white text-black" style="width: 500px;">
      <img src={data.projectItem.image} alt={data.projectItem.alt} class="mb-4 rounded-lg" style="width: 100%; height: auto;">
      <h2 class="text-2xl font-bold mb-2 flex justify-between">
        <span class="font-playfairDisplay text-3xl">{data.projectItem.title}</span>
      </h2>
    </article>
  </a>
  </section>
</div>