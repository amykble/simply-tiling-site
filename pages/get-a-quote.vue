<template>
  <section class="w-screen min-h-screen px-3 bg-gray-900 font-mono">
    <div class="max-w-5xl my-0 mx-auto">
      <main class="w-full flex flex-col items-center">
        <h1 class="text-gray-100 text-4xl">Get A Quote</h1>
        <div class="w-full p-3 rounded-md bg-gray-200 ">
          <form action="" class="w-full flex flex-col text-gray-900" id="form">
            <h2 class="text-3xl">Contact Us</h2>
            <div class="w-full flex justify-between gap-6">
              <div class="w-full">
                <label class="mb-1 block" for="fname">First Name</label>
                <input
                  class="st-input mb-4 px-2 py-1 block w-full bg-white hover:shadow-inner focus:shadow-inner"
                  type="text"
                  id="fname"
                />
              </div>
              <div class="w-full">
                <label class="mb-1 block" for="lname">Last Name</label>
                <input
                  class="st-input mb-4 px-2 py-1 block w-full bg-white hover:shadow-inner focus:shadow-inner"
                  type="text"
                  id="lname"
                />
              </div>
            </div>
            <div class="w-full flex justify-between gap-6">
              <div class="w-full">
                <label class="mb-1 block" for="email">Email</label>
                <input
                  class="st-input mb-4 px-2 py-1 block w-full bg-white hover:shadow-inner focus:shadow-inner"
                  type="email"
                  id="email"
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
                  id="tel"
                />
              </div>
            </div>
            <label class="mb-1 block" for="message">Message</label>
            <textarea
              class="st-input mb-4 px-2 py-1 block w-full bg-white hover:shadow-inner focus:shadow-inner"
              id="message"
              rows="4"
              placeholder="Summarise the services from Simply Tiling you would like"
            ></textarea>
            <button
              class="st-button py-3 px-5 bg-gray-900 text-yellow-400 hover:text-gray-100"
              type="submit"
            >
              Send Message
            </button>
          </form>
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
