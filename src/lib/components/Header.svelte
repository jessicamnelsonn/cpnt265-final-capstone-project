<script>
  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' }
  ];

  export let title = "Jessica Nelson";
  export let subtitle = "Web Developer";
</script>

<header class="text-white p-8 animate-gradient flex justify-between">
  <div>
    <h1 class="text-4xl font-bold mb-4 font-barlow">{title}</h1>
    <p class="text-xl opacity-80 font-rasa">{subtitle}</p>
  </div>
  <nav>
    <ul class="flex items-center space-x-8 font-barlow">
      {#each navItems as { name, href }}
        <li>
          <a href={href} class="text-xl text-white hover:text-indigo-400 hover:underline transition-colors duration-300">{name}</a>
        </li>
      {/each}
    </ul>
  </nav>
</header>

<style>
  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  .animate-gradient {
    background: linear-gradient(45deg, #aa8869, #443120, #170101);
    background-size: 400% 400%;
    animation: gradient 15s ease infinite;
  }
</style>