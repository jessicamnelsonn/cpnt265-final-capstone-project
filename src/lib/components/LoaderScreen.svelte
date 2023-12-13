<script>
  import { onMount } from 'svelte';

  onMount(() => {
    // Find the loader wrapper element
    const loaderWrapper = document.querySelector('.loader-wrapper');

    // Check if the loader wrapper element exists
    if (loaderWrapper) {
      // Use setTimeout to delay hiding the loader by changing its display style
      setTimeout(() => {
        loaderWrapper.style.display = 'none';
      }, 1500);
    } else {
      console.error('Loader wrapper not found');
    }
  });
</script>

<!-- Loader wrapper styled -->
<section class="loader-wrapper fixed inset-0 bg-black flex justify-center items-center">
  <!-- Loader image -->
  <img src="/images/loader-screen.gif" alt="astronaut in space gif">
</section>
