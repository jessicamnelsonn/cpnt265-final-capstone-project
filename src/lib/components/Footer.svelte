<script>
  // Import Icon component from iconify
  import Icon from '@iconify/svelte';
 
  // Navigation array
  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' }
  ];
</script>

<footer class="bg-black p-4 text-white shadow-lg">
  <!-- Navigation section -->
  <nav>
    <ul class="flex justify-center gap-9 font-barlow">
      <!-- Iterate over each navigation item in the array -->
      {#each navItems as { name, href }}
        <li>
          <a href={href} class="text-xl hover:text-indigo-400 hover:underline transition-colors duration-300">{name}</a>
        </li>
      {/each}
    </ul>
  </nav>
  <!-- Copyright -->
  <p class="text-center">&copy; Jessica Nelson</p>
  
  <!-- Section with social media links -->
  <section class="flex items-center justify-center gap-8 text-4xl p-4">
    <a href="https://www.instagram.com/jessicamnelson_/" class="text-white hover:text-gray-400 transition">
      <p><Icon icon="mdi:instagram" class="h-12 w-12" /></p>
    </a>

    <a href="https://github.com/jessicamnelsonn" class="text-white hover:text-gray-400 transition">
      <p><Icon icon="mdi:github" class="h-12 w-12" /></p>
    </a>

    <a href="https://www.linkedin.com/in/jessicamnelson" class="text-white hover:text-gray-400 transition">
      <p><Icon icon="mdi:linkedin" class="h-12 w-12" /></p>
    </a>
  </section>
</footer>




