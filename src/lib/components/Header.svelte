<script>
  export let title = "Jessica Nelson";
  export let subtitle = "Web Developer";
</script>

<div class="text-white p-8 animate-gradient flex justify-between">
  <div>
    <h1 class="text-5xl font-extrabold mb-4">{title}</h1>
    <p class="text-2xl opacity-75">{subtitle}</p>
  </div>
  <nav class="flex gap-4">
    <a href="#home" class="text-white hover:text-gray-300">Home</a>
    <a href="#about" class="text-white hover:text-gray-300">About</a>
    <a href="#contact" class="text-white hover:text-gray-300">Contact</a>
  </nav>
</div>

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