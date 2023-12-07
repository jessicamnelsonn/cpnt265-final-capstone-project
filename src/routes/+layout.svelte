<script>
  import "../app.css";
  import LoaderScreen from '../lib/components/LoaderScreen.svelte';
  import Header from '../lib/components/Header.svelte';
  import Footer from '../lib/components/Footer.svelte'
</script>

<main>
  <Header />
</main>

<slot />

<Footer />

<LoaderScreen />