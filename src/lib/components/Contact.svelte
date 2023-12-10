<main class="flex flex-col items-center lg:flex-row" id="contact-section">
  <!-- Left side image -->
  <div class="lg:max-w-sm lg:mx-auto m-4">
    <h1><img src="images/pawel-czerwinski-Qiy4hr18aGs-unsplash.jpg" alt=""></h1>
  </div>

  <!-- Right side contact form -->
  <form action="https://formspree.io/f/mbjvnzgo" method="post" class="w-full lg:w-1/2 mt-2 bg-transparent p-8 text-black border-l-2 border-t-2 border-black border-solid">

    <h1 class="text-2xl lg:text-7xl font-bold mb-8 font-rasa">Contact Me</h1>

    <label for="name" class="block mb-2 font-barlow">Name</label>
    <input type="text" id="name" name="name" required class="w-full p-2 mb-4 border-b border-black">

    <label for="email" class="block mb-2 font-barlow">Email</label>
    <input type="email" id="email" name="email" required class="w-full p-2 mb-4 border-b border-black">

    <label for="subject" class="block mb-2 font-barlow">Subject</label>
    <input type="text" id="subject" name="subject" required class="w-full p-2 mb-4 border-b border-black">

    <label for="message" class="block mb-2 font-barlow">Message</label>
    <textarea id="message" name="message" required class="w-full p-2 mb-4 border border-black" rows="5"></textarea>

    <input type="submit" value="Send Message" class="w-full p-2 mb-4 text-white transition duration-300 ease-in-out transform hover:bg-blue-700 bg-blue-600 cursor-pointer font-barlow">

  </form>
</main>
