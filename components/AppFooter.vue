<template>
  <footer class="font-mono bg-gray-900">
    <section class="py-8 px-3">
      <nav class="flex gap-20 max-w-6xl my-0 mx-auto">
        <NuxtLink
          to="/"
          class="flex align-center text-gray-100 hover:text-yellow-400 focus:text-yellow-400 transition-all duration-200"
          ><img class="h-6 mr-3" src="/st-logo.png" /><span
            >Simply Tiling</span
          ></NuxtLink
        >
        <ul>
          <li class="pb-3">
            <NuxtLink
              to="/services"
              class="text-gray-100 hover:text-yellow-400 focus:text-yellow-400 transition-all duration-200"
              >Our Services</NuxtLink
            >
          </li>
          <li class="pb-3">
            <NuxtLink
              to="/gallery"
              class="text-gray-100 hover:text-yellow-400 focus:text-yellow-400 transition-all duration-200"
              >Gallery</NuxtLink
            >
          </li>
          <li>
            <NuxtLink
              to="/get-a-quote"
              class="text-gray-100 hover:text-yellow-400 focus:text-yellow-400 transition-all duration-200"
              >Get A Quote</NuxtLink
            >
          </li>
        </ul>
      </nav>
    </section>
    <section class="credits bg-black">
      <div class="py-4 px-3">
        <div class="flex justify-between max-w-6xl my-0 mx-auto text-xs">
          <p class="text-gray-400">
            Copyright &copy; <span>{{ year }}</span>
          </p>
          <p class="text-gray-400">Designed &amp; Developed by Amy Keable</p>
        </div>
      </div>
    </section>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      year: ""
    };
  },
  created() {
    this.copyrightYear();
  },
  methods: {
    copyrightYear: function() {
      this.year = new Date().getFullYear();
      return this.year;
    }
  }
};
</script>

<style scoped></style>
