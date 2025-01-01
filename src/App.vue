<script>
import TheHeader from '@/components/TheHeader.vue'
import TheFooter from '@/components/TheFooter.vue'
export default {
  components: { TheFooter, TheHeader },
  setup() {},
}
</script>

<template>
  <TheHeader />
  <main
    class="h-full min-h-full flex justify-center items-start grow container p-3 my-5 mx-auto text-[#222]"
  >
    <RouterView />
  </main>
  <TheFooter />
</template>
