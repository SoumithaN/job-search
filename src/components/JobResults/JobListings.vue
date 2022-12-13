<template>
  <main class="jobsbackground">
    <div v-if="isLoading" class="flex h-screen items-center justify-center">
      <CSSLoader />
    </div>
    <ol v-else>
      <job-listing v-for="job in jobs" :key="job.id" :job="job" />
    </ol>
  </main>
</template>
<script>
import axios from "axios";
import CSSLoader from "@/components/Shared/CSSLoader.vue";
import JobListing from "@/components/JobResults/JobListing.vue";

export default {
  name: "JobListings",
  components: {
    JobListing,
    CSSLoader,
  },
  data() {
    return {
      jobs: [],
      isLoading: true,
    };
  },
  async mounted() {
    const response = await axios.get(" http://localhost:3000/jobs");
    this.jobs = response.data;
    this.loaderToggle();
  },
  methods: {
    loaderToggle() {
      setTimeout(() => {
        this.isLoading = false;
      }, 3000);
    },
  },
};
</script>

<style scoped>
.jobsbackground {
  flex: 1 1 auto;
  padding: 2rem;
  background-color: light gray;
}
</style>
