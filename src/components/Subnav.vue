<template>
  <div class="w-full h-16 bg-white border-b border-solid border-brand-gray-1">
    <div
      v-if="onJobReturnsPage"
      data-test="job-count"
      class="flex items-center px-8 h-full"
    >
      <font-awesome-icon :icon="['fas', 'search']" class="mr-3" />
      <span><span class="text-brand-green-1">1653</span> jobs matched</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "Subnav",
  data() {
    return {
      onJobReturnsPage: true,
    };
  },
};
</script>
