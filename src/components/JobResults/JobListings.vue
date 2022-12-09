<template>
  <main class="jobsbackground">
    <ol>
      <JobListing />
      <JobListing />
      <JobListing />
      <JobListing />
      <JobListing />
    </ol>
  </main>
</template>
<script>
import JobListing from "@/components/JobResults/JobListing.vue";
export default {
  name: "JobListings",
  components: {
    JobListing,
  },
};
</script>

<style scoped>
.jobsbackground {
  flex: 1 1 auto;
  padding: 2rem;
  background-color: gray;
}
</style>
