<script>
	import { onMount, onDestroy } from 'svelte';
	import { slide } from 'svelte/transition';
	
	let greetings = ['Hello', 'Hola',];
	let index = 0;
	let roller;
	
	onMount(() => {
		roller = setInterval(() => {
			if (index === greetings.length - 1) index = 0;
			else index++;
		}, 1250);
	});
	
	onDestroy(() => {
		clearInterval(roller);
	});
</script>

<main class="relative flex h-full flex-col items-center justify-center">
  <video muted autoplay loop playsinline disablepictureinpicture>
    <source src="/images/hero-video.mp4" type="video/mp4">
  </video>
  <section>
  <h1 class="absolute top-8 left-0 text-6xl px-4 py-2 font-barlow md:text-4xl [text-wrap:balance] bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 to-50% to-slate-200">Trusted by the most innovative minds</h1>
</section>
</main>

<main class="h-screen flex">
  <section class="w-1/2 h-full bg-white text-black p-4">
      <div>
          <h1 class="text-8xl font-bold text-center">About</h1>
          
          <p>My name is Jessica Nelson, a passionate individual with a vibrant mix of Mexican and Canadian roots. I embrace the richness of my cultural background, allowing me to seamlessly navigate conversations in both English and Spanish.
            
          <h2 class="text-3xl">Passion for Visual Storytelling</h2>
            
          <p>I've always been captivated by the power of visual storytelling. My journey into the world of videography and photography began with a fascination for capturing moments and turning them into narratives. Through the lens of my camera, I aim to convey emotions, share experiences, and celebrate the beauty of diversity.</p>  
            
          <h2 class="text-3xl">Bridging Cultures Through Language</h2>
            
           <p>Being bilingual in Spanish and English is more than just a skill for me; it's a bridge that connects me to the stories and experiences of people from different backgrounds. I find joy in breaking down language barriers and fostering understanding.</p> 
            
          <h2 class="text-3xl">Web Development Journey</h2>
            
           <p>Currently, I'm on an exciting journey, finishing up a certificate program in web development. This adventure allows me to blend my creative passion with technical skills. I find satisfaction in crafting digital experiences that not only look stunning but also function seamlessly.</p> 
            
          <h2 class="text-3xl">What Drives Me</h2>
            
           <p>Whether I'm behind the camera or coding a website, my goal remains the same: to create meaningful connections. I believe that technology, combined with art, has the power to bring people together and amplify voices that might otherwise go unheard.</p> 
            
          <p>Join me on this journey as I continue to learn, grow, and contribute my unique perspective to the ever-evolving landscape of visual storytelling and web development.</p>
            
          <p>Let's create something extraordinary together!</p>
    
      </div>
  </section>
  <section class="w-1/2 h-full bg-black flex items-center justify-center">
    <div>
      {#key index}
        <h1 class="text-white text-8xl text-center" transition:slide>{greetings[index]}!</h1>
      {/key}
    </div>
  </section>
</main>


