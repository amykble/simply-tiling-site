<template>
  <section class="home-landing w-screen min-h-screen pt-48 bg-white font-mono">
    <div class="max-w-6xl my-0 mx-auto">
      <main class="w-full flex flex-col items-center">
        <h1 class="font-sans uppercase p-4 text-6xl bg-black bg-opacity-20">
          Tiles that make a home
        </h1>
        <h2
          class="font-sans uppercase mt-12 p-4 text-2xl bg-black bg-opacity-20"
        >
          Call Dave for a free Quote on 07450102253
        </h2>
        <div class="w-full mt-12 flex items-center justify-center">
          <NuxtLink
            to="/get-a-quote"
            class="st-button py-3 px-5 bg-gray-900 text-yellow-400 hover:text-gray-100"
            >Get A Quote</NuxtLink
          >
        </div>
      </main>
    </div>
    <div class="landing-shape w-full h-auto mt-24">
      <img src="/images/landing-shape.svg" alt="" />
    </div>
    <div class="middle bg-gray-900">
      <div class="middle max-w-6xl my-0 mx-auto py-16 px-3">
        <main class="w-full flex flex-col text-white">
          <h2 class="st-header inline-block w-max mb-8 text-3xl">
            What Simply Tiling Can Do For you
          </h2>
          <p class="mb-6 text-large">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Donec
            massa sapien faucibus et molestie ac. Turpis nunc eget lorem dolor
            sed viverra ipsum nunc aliquet.
          </p>
          <p class="text-large">
            Augue ut lectus arcu bibendum at varius vel. Sagittis purus sit amet
            volutpat consequat. Rhoncus est pellentesque elit ullamcorper
            dignissim. Sed blandit libero volutpat sed cras ornare arcu dui
            vivamus.
          </p>
        </main>
      </div>
    </div>
    <div class="bottom bg-gray-100">
      <div class="middle max-w-6xl my-0 mx-auto py-16 px-3">
        <main class="w-full flex flex-col text-gray-900">
          <h2 class="st-header inline-block w-max mb-8 text-3xl">
            Always Exceeding Expectations
          </h2>
          <p class="mb-6 text-large">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Donec
            massa sapien faucibus et molestie ac. Turpis nunc eget lorem dolor
            sed viverra ipsum nunc aliquet.
          </p>
          <p class="text-large">
            Augue ut lectus arcu bibendum at varius vel. Sagittis purus sit amet
            volutpat consequat. Rhoncus est pellentesque elit ullamcorper
            dignissim. Sed blandit libero volutpat sed cras ornare arcu dui
            vivamus.
          </p>
        </main>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style scoped>
.home-landing {
  background-image: url(/images/pattern-bg.svg);
  background-size: 100%;
}
</style>
