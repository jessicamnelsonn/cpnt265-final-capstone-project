<script>
  import "../app.css";
  import LoaderScreen from '../lib/components/LoaderScreen.svelte';
  import Header from '../lib/components/Header.svelte';
  import Footer from '../lib/components/Footer.svelte'
</script>

<svelte:head>
	<title>Jessica Nelson Portfolio</title>
  <meta property="og:title" content="Jessica Nelson Portfolio">
	<meta name="description" content="I'm Jessica! Welcome to my portfolio website.">
</svelte:head>

<main>
  <Header />
</main>

<slot />

<Footer />

<LoaderScreen />