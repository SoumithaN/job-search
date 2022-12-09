<template>
  <div class="subnav">
    <div
      v-if="onJobReturnsPage"
      data-test="job-count"
      class="flex items-center px-8 h-full"
    >
      <font-awesome-icon :icon="['fas', 'search']" class="mr-3" />
      <span><span class="jobs-number">1653</span> jobs matched</span>
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
<style scoped>
.subnav {
  width: 100%;
  height: 4rem;
  background-color: white;
  border-color: light gray;
  border-bottom-width: 1px;
  border-style: solid;
}
.jobs-number {
  color: green;
}
</style>
