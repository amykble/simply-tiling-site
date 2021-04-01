<template>
  <div>
    <section class="relative z-10 h-screen w-screen px-3">
      <div
        class="h-full max-w-5xl pt-64 my-0 mx-auto flex flex-col items-center"
      >
        <h1 class="font-sans text-5xl uppercase font-bold text-yellow-400">
          Lorem ipsum dolor sit amet
        </h1>
        <div class="w-full flex justify-center mt-12 font-mono">
          <nuxt-link
            to="/gallery"
            class="st-button mx-3 py-3 px-5 bg-gray-900 text-yellow-400 hover:text-gray-100"
            >Explore Recent Work</nuxt-link
          ><nuxt-link
            to="/get-a-quote"
            class="st-button mx-3 py-3 px-5 bg-gray-900 text-yellow-400 hover:text-gray-100"
            >Get A Quote</nuxt-link
          >
        </div>
      </div>
    </section>
    <section class="z-0 fixed left-0 top-0 h-screen w-screen bg-gray-800">
      <video
        src="/videos/child-running.mp4"
        muted
        autoplay
        loop
        class="st-video z-0 h-screen w-screen object-cover object-bottom"
      ></video>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style scoped>
.st-video {
  mix-blend-mode: multiply;
}
</style>
