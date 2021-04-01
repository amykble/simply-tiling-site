<template>
  <header class="font-mono z-20 fixed w-screen bg-gray-100 py-8 px-3 shadow-md">
    <!-- Mobile Header -->
    <section class="md:hidden">
      <ul class="flex justify-between">
        <li>
          <button
            class="h-6 flex flex-col justify-between group hover:outline-none focus:outline-none"
            v-on:click="toggleNav = !toggleNav"
          >
            <span
              class="inline-block h-1 w-8 bg-gray-900 group-hover:bg-gray-600 group-focus:bg-gray-600"
            ></span>
            <span
              class="inline-block h-1 w-8 bg-gray-900 group-hover:bg-gray-600 group-focus:bg-gray-600"
            ></span>
            <span
              class="inline-block h-1 w-8 bg-gray-900 group-hover:bg-gray-600 group-focus:bg-gray-600"
            ></span>
          </button>
        </li>
        <li class="ml-3 px-3 border-2 border-yellow-400">
          <nuxt-link
            to="/get-a-quote"
            v-on:click.native="toggleNav = false"
            class="st-button py-3 px-5 bg-gray-900 text-yellow-400 hover:text-gray-100"
            >Get A Quote</nuxt-link
          >
        </li>
      </ul>
      <nav
        v-show="toggleNav"
        class="pt-8 w-full h-full transform transition-all duration-200"
      >
        <ul class="w-full h-full flex flex-col items-center text-xl">
          <li class="pb-6">
            <nuxt-link
              to="/"
              v-on:click.native="toggleNav = false"
              class="text-gray-900"
              >Home</nuxt-link
            >
          </li>
          <li class="pb-6">
            <nuxt-link
              to="/services"
              v-on:click.native="toggleNav = false"
              class="text-gray-900"
              >Our Services</nuxt-link
            >
          </li>
          <li>
            <nuxt-link
              to="/gallery"
              v-on:click.native="toggleNav = false"
              class="text-gray-900"
              >Gallery</nuxt-link
            >
          </li>
        </ul>
      </nav>
    </section>
    <!-- Desktop Header -->
    <nav class="hidden md:flex justify-between max-w-5xl my-0 mx-auto">
      <nuxt-link
        to="/"
        class="flex align-center text-gray-900 hover:text-yellow-400 focus:text-yellow-400 transition-all duration-200"
        ><img class="h-6 mr-3" src="/st-logo.png" /><span
          >Simply Tiling</span
        ></nuxt-link
      >
      <ul class="flex">
        <li class="mx-3">
          <nuxt-link to="/services" class="st-link px-3 text-gray-900"
            >Our Services</nuxt-link
          >
        </li>
        <li class=" mx-3">
          <nuxt-link to="/gallery" class="st-link px-3 text-gray-900"
            >Gallery</nuxt-link
          >
        </li>
        <li class="ml-3 px-3 border-2 border-yellow-400">
          <nuxt-link
            to="/get-a-quote"
            class="st-button py-3 px-5 bg-gray-900 text-yellow-400 hover:text-gray-100"
            >Get A Quote</nuxt-link
          >
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      toggleNav: false
    };
  }
};
</script>

<style scoped></style>
