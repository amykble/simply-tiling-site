<template>
  <section class="w-screen min-h-screen px-3 bg-gray-900 font-mono">
    <div class="max-w-6xl my-0 mx-auto">
      <main class="w-full flex flex-col items-center">
        <h1 class="text-gray-100 text-4xl">Get A Quote</h1>
        <div class="w-full p-3 rounded-md bg-gray-200">
          <div class="h-full w-full flex justify-between gap-6 text-gray-900">
            <div class="w-1/2 p-3 flex flex-col rounded-md bg-gray-100">
              <div class="flex items-center justify-center">
                <h2 class="st-header inline-block mb-6 text-3xl">
                  Get in Contact
                </h2>
              </div>
              <div class="pb-6">
                <p class="mb-1 block">
                  <fa icon="home" /> Carlton Colville, Lowestoft NR33 8BL
                </p>
                <p class="block mb-1">
                  <fa icon="clock" /> Mon-Sat: 8am-9pm. Sun: 12pm-8pm.
                </p>
                <a
                  class="mb-1 block text-blue-500 transform transition-all duration-200 hover:text-yellow-400 focus:text-yellow-400"
                  href="tel:07450102253"
                  ><fa icon="phone" /> 07450 102253</a
                >
                <a
                  class="block text-blue-500 transform transition-all duration-200 hover:text-yellow-400 focus:text-yellow-400"
                  href="mailto:simplytilingwithdave@hotmail.com"
                  ><fa icon="envelope" /> simplytilingwithdave@hotmail.com</a
                >
              </div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2044.5560263170917!2d1.6850901612936806!3d52.45377251023684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47da1b7b040bf0d7%3A0xdaefa3f41503b1b8!2sSimply%20Tiling!5e0!3m2!1sen!2suk!4v1617540870062!5m2!1sen!2suk"
                style="border:0; height:100%;"
                loading="lazy"
              ></iframe>
            </div>
            <form
              method="POST"
              data-netlify="true"
              data-netlify-recaptcha="true"
              netlify-honeypot="bot-field"
              subject="Simply Tiling Contact Submission"
              class="w-1/2 flex flex-col"
              id="contact-form"
            >
              <p class="hidden">
                <label
                  >Don’t fill this out if you’re human: <input name="bot-field"
                /></label>
              </p>
              <div class="flex items-center justify-center">
                <h2
                  class="st-header inline-block mt-3 mb-6 text-center text-3xl"
                >
                  Send a Message
                </h2>
              </div>
              <div class="w-full flex justify-between gap-6">
                <div class="w-full">
                  <label class="mb-1 block" for="fname">First Name</label>
                  <input
                    class="st-input mb-4 px-2 py-1 block w-full bg-white hover:shadow-inner focus:shadow-inner"
                    type="text"
                    name="fname"
                    id="fname"
                    required
                  />
                </div>
                <div class="w-full">
                  <label class="mb-1 block" for="lname">Last Name</label>
                  <input
                    class="st-input mb-4 px-2 py-1 block w-full bg-white hover:shadow-inner focus:shadow-inner"
                    type="text"
                    name="lname"
                    id="lname"
                    required
                  />
                </div>
              </div>
              <div class="w-full flex justify-between gap-6">
                <div class="w-full">
                  <label class="mb-1 block" for="email">Email</label>
                  <input
                    class="st-input mb-4 px-2 py-1 block w-full bg-white hover:shadow-inner focus:shadow-inner"
                    type="email"
                    name="email"
                    id="email"
                    required
                  />
                </div>
                <div class="w-full">
                  <label class="mb-1 block" for="tel"
                    >Phone Number
                    <small class="text-blue-500">(optional)</small></label
                  >
                  <input
                    class="st-input mb-4 px-2 py-1 block w-full bg-white hover:shadow-inner focus:shadow-inner"
                    type="tel"
                    name="tel"
                    id="tel"
                  />
                </div>
              </div>
              <label class="mb-1 block" for="subject">Subject</label>
              <input
                class="st-input mb-4 px-2 py-1 block w-full bg-white hover:shadow-inner focus:shadow-inner"
                type="text"
                name="subject"
                id="subject"
                required
              />
              <label class="mb-1 block" for="message">Message</label>
              <textarea
                class="st-input mb-4 px-2 py-1 block w-full bg-white hover:shadow-inner focus:shadow-inner"
                name="message"
                id="message"
                rows="4"
                placeholder="Summarise the services from Simply Tiling you require."
                required
              ></textarea>
              <div data-netlify-recaptcha="true" class="mb-4"></div>
              <button
                class="st-button py-3 px-5 bg-gray-900 text-yellow-400 hover:text-gray-100"
                type="submit"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </main>
    </div>
  </section>
</template>

<script>
export default {
  head() {
    return {
      title: "Get a Quote | Simply Tiling",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Simply Tiling offers etc etc etc"
        }
      ]
    };
  }
};
</script>

<style scoped></style>
