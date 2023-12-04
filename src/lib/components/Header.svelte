<script>
  export let title = "Jessica Nelson";
  export let subtitle = "Web Developer";
</script>

<div class="text-white p-8 animate-gradient">
  <h1 class="text-5xl font-extrabold mb-4">{title}</h1>
  <p class="text-2xl opacity-75">{subtitle}</p>
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
    background: linear-gradient(45deg, #dfd1c4, #BFA58E, #120000);
    background-size: 400% 400%;
    animation: gradient 15s ease infinite;
  }
</style>