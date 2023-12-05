<main class="h-screen flex">
  <section class="w-1/2 h-full bg-white flex items-center justify-center text-gray-800">
    <div>
      <h1 class="text-8xl font-bold">HELLO</h1>
      <h1 class="text-7xl font-bold">HELLO</h1>
      <h1 class="text-6xl font-bold">HELLO</h1>
    </div>
  </section>
  <section class="w-1/2 h-full bg-yellow-800/40 flex items-center justify-center">
    <img class="w-1/2" src="images/pawel-czerwinski-Qiy4hr18aGs-unsplash.jpg" alt="">
  </section>
</main>

<style>
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  .animated-section {
    animation: fadeIn 1s ease-in-out, spin 2s linear infinite;
  }
</style>

<section class="flex items-center justify-center h-screen bg-blue-700 text-white">
  <h1 class="text-8xl">Words Words Words</h1>
</section>

<section class="flex items-center justify-center h-screen bg-pink-700 text-white animated-section">
  <h1 class="text-8xl">Words Words Words</h1>
</section>




