<script>
  import { onMount } from 'svelte';

  onMount(() => {
    // Use window.onload to ensure the entire page is loaded
    window.onload = () => {
      // Find the loader wrapper element
      const loaderWrapper = document.querySelector('.loader-wrapper');

      // Check if the loader wrapper element exists
      if (loaderWrapper) {
        // Use setTimeout to delay hiding the loader by changing its display style
        setTimeout(() => {
          loaderWrapper.style.display = 'none';
        }, 3000);
      } else {
        console.error('Loader wrapper not found');
      }
    };
  });
</script>

<!-- Loader wrapper styled -->
<section class="loader-wrapper absolute w-screen h-screen bg-black flex justify-center items-center top-0 left-0">
  <!-- Loader image -->
  <img src="/images/loader-screen.gif" alt="astronaut in space gif">
</section>
