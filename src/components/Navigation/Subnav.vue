<template>
  <div class="subnav">
    <div class="flex items-center h-full px-8">
      <div v-if="onJobResultsPage" data-test="job-count">
        <font-awesome-icon :icon="['fas', 'search']" class="mr-3" />
        <span><span class="jobs-number">1653</span> jobs matched</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Subnav",
  computed: {
    onJobResultsPage() {
      return this.$route.name === "JobResults";
    },
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
