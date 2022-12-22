<template>
  <main class="jobsbackground">
    <div v-if="isLoading" class="flex h-screen items-center justify-center">
      <CSSLoader />
    </div>
    <ol>
      <job-listing v-for="job in displayedJobs" :key="job.id" :job="job" />
    </ol>
    <div class="mt-8 mx-auto">
      <div class="flex flex-row flex-nowrap">
        <p class="text-sm flex-grow">Page {{ currentPage }}</p>

        <div class="flex items-center justify-center">
          <router-link
            v-if="previousPage"
            :to="{ name: 'JobResults', query: { page: previousPage } }"
            class="mx-3 text-sm font-semibold text-brand-blue-1"
            data-test="previous-page-link"
            >Previous</router-link
          >

          <router-link
            v-if="nextPage"
            :to="{ name: 'JobResults', query: { page: nextPage } }"
            class="mx-3 text-sm font-semibold text-brand-blue-1"
            data-test="next-page-link"
            >Next</router-link
          >
        </div>
      </div>
    </div>
  </main>
</template>
<script>
// import axios from "axios";
import CSSLoader from "@/components/Shared/CSSLoader.vue";
import JobListing from "@/components/JobResults/JobListing.vue";
import { mapActions, mapState } from "vuex";
import { FETCH_JOBS } from "@/store";

export default {
  name: "JobListings",
  components: {
    JobListing,
    CSSLoader,
  },
  // data() {
  //   return {
  //     jobs: [],
  //     isLoading: true,
  //   };
  // },
  computed: {
    currentPage() {
      const pageString = this.$route.query.page || "1";
      return Number.parseInt(pageString);
    },
    previousPage() {
      const previousPage = this.currentPage - 1;
      const firstPage = 1;
      return previousPage >= firstPage ? firstPage : undefined;
    },
    nextPage() {
      const nextPage = this.currentPage + 1;
      const maxPage = Math.ceil(this.jobs.length / 10);
      return nextPage <= maxPage ? nextPage : undefined;
    },
    displayedJobs() {
      const pageNumber = this.currentPage;
      const firstJobIndex = (pageNumber - 1) * 10;
      const lastJobIndex = pageNumber * 10;
      // console.log(this.$route);
      return this.jobs.slice(firstJobIndex, lastJobIndex);
    },
    ...mapState(["jobs"]),
  },
  async mounted() {
    this.FETCH_JOBS();
  },
  methods: {
    loaderToggle() {
      setTimeout(() => {
        this.isLoading = false;
      }, 3000);
    },
    ...mapActions([FETCH_JOBS]),
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
