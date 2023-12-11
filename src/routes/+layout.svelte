<script>
  import "../app.css";
  import LoaderScreen from '../lib/components/LoaderScreen.svelte';
  import Header from '../lib/components/Header.svelte';
  import Footer from '../lib/components/Footer.svelte'

  const pageTitle = 'Jessica Nelson Portfolio';
</script>

<svelte:head>
	<title>{pageTitle}</title>
</svelte:head>

<main>
  <Header />
</main>

<slot />

<Footer />

<LoaderScreen />