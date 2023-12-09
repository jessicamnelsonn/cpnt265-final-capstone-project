<script>
  export let title;
  export let slug;
  export let image;
  export let alt;
  </script>
  
  <main class="" id="project-section">
      <section class="bg-gray-100 p-8 m-4 rounded-md shadow-md transition duration-300 ease-in-out transform hover:scale-105">
        <a href= {`${slug}`} class="block">
          <article class="">
            <img src={image} alt={alt}>
            <h2 class=""><span>{title}</span></h2>
          </article>
        </a>
      </section>
    </main>