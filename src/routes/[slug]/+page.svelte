<script>
  export let data;
</script>

<div class="bg-black min-h-screen flex items-center justify-center p-4">
  <section>
    <a href="{data.projectItem.githubUrl}">
      <article class="p-4 md:p-8 rounded-xl shadow-lg bg-gradient-to-r from-white to-orange-50 max-w-5xl w-full">
        <img src={data.projectItem.image} alt={data.projectItem.alt} class="w-full h-auto mb-4 md:mb-6 rounded-lg">
        <h2 class="text-2xl md:text-4xl font-bold mb-2 md:mb-4 font-rasa">
          {data.projectItem.title}
        </h2>
        <p class="text-base md:text-xl font-barlow">{data.projectItem.description}</p>
      </article>
    </a>
  </section>
</div>
