<template>
  <section class="w-screen min-h-screen px-3 bg-gray-800 font-mono">
    <div class="max-w-6xl my-0 mx-auto">
      <main
        class="w-full min-h-screen flex flex-col items-center justify-center"
      >
        <h1 v-if="error.statusCode === 404" class="text-gray-100 text-4xl mb-8">
          404. Page not found.
        </h1>
        <h1 v-else class="text-gray-100 text-4xl mb-8">
          An error occurred - {{ error.statusCode }}
        </h1>
        <div>
          <NuxtLink
            to="/"
            class="st-button py-3 px-5 bg-gray-900 text-yellow-400 hover:text-gray-100"
            >Home Page</NuxtLink
          >
          <NuxtLink
            to="/get-a-quote"
            class="st-button py-3 px-5 bg-gray-900 text-yellow-400 hover:text-gray-100"
            >Get A Quote</NuxtLink
          >
        </div>
      </main>
    </div>
  </section>
</template>

<script>
export default {
  props: ["error"],
  layout: "error"
};
</script>
