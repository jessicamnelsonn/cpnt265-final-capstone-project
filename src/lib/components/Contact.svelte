<main class="flex flex-col items-center lg:flex-row" id="contact-section">
  <!-- Left side image -->
  <div class="lg:max-w-sm lg:mx-auto m-4">
    <h1><img class="rounded-md" src="images/astronaut-contact.jpg" alt="ghost getting taken away in a UFO"></h1>
    <p class="text-3xl text-center p-4 font-rasa text-gray-400">We'll create something out of this world.</p>
  </div>

  <!-- Right side contact form -->
  <form action="https://formspree.io/f/mbjvnzgo" method="post" class="w-full lg:w-1/2 mt-2 bg-transparent p-8 text-black border-l-2 border-t-2 border-[#be8e5b] border-solid">

    <h1 class="text-5xl lg:text-7xl text-[#be8e5b] mb-8 font-rasa">Contact Me</h1>

    <label for="name" class="block mb-2 font-barlow text-xl text-[#be8e5b]">Name</label>
    <input type="text" id="name" name="name" required class="w-full p-2 mb-4 border-b border-[#be8e5b]">

    <label for="email" class="block mb-2 font-barlow text-xl text-[#be8e5b]">Email</label>
    <input type="email" id="email" name="email" required class="w-full p-2 mb-4 border-b border-[#be8e5b]">

    <label for="subject" class="block mb-2 font-barlow text-xl text-[#be8e5b]">Subject</label>
    <input type="text" id="subject" name="subject" required class="w-full p-2 mb-4 border-b border-[#be8e5b]">

    <label for="message" class="block mb-2 font-barlow text-xl text-[#be8e5b]">Message</label>
    <textarea id="message" name="message" required class="w-full p-2 mb-4 border border-[#be8e5b]" rows="5"></textarea>

    <input type="submit" value="Send Message" class="w-full p-2 mb-4 text-[#be8e5b] transition duration-300 ease-in-out transform hover:bg-[#be8e5b] hover:text-white border border-[#be8e5b] bg-white cursor-pointer font-barlow text-xl">

  </form>
</main>
