<script>
  // Import the onMount function from Svelte, which runs code when the component is mounted
  import { onMount } from 'svelte';

  // Execute code when the component is mounted
  onMount(() => {
    // Use setTimeout to delay the execution of the code inside it
    setTimeout(() => {
      // Find the element with the class 'loader-wrapper' and hide it by changing its display style
      document.querySelector('.loader-wrapper').style.display = 'none';
    }, 4000); // Set the timeout duration to 4000 milliseconds (4 seconds)
  });
</script>

<!-- Loader wrapper styled -->
<section class="loader-wrapper absolute w-screen h-screen bg-black flex justify-center items-center top-0 left-0">
  <!-- Loader image -->
  <img src="/images/loader-screen.gif" alt="astronaut in space gif">
</section>
