<template>
  <main class="jobsbackground">
    <div v-if="isLoading" class="flex h-screen items-center justify-center">
      <CSSLoader />
    </div>
    <ol v-else>
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
import { computed, onMounted } from "vue";

import useCurrentPage from "@/composables/useCurrentPage";
import usePreviousAndNextPages from "@/composables/usePreviousAndNextPages";
import { useFilteredJobs, useFetchJobsDispatch } from "@/store/composables";

export default {
  name: "JobListings",
  components: {
    JobListing,
    CSSLoader,
  },
  setup() {
    onMounted(useFetchJobsDispatch);

    const filteredJobs = useFilteredJobs();

    const currentPage = useCurrentPage();

    const maxPage = computed(() => Math.ceil(filteredJobs.value.length / 10));
    const { previousPage, nextPage } = usePreviousAndNextPages(
      currentPage,
      maxPage
    );

    const displayedJobs = computed(() => {
      const pageNumber = currentPage.value;
      const firstJobIndex = (pageNumber - 1) * 10;
      const lastJobIndex = pageNumber * 10;
      return filteredJobs.value.slice(firstJobIndex, lastJobIndex);
    });

    return { displayedJobs, previousPage, currentPage, nextPage };
  },
  // data() {
  //   return {
  //     //     jobs: [],
  //     isLoading: true,
  //   };
  // },
  // computed: {
  //   ...mapGetters([FILTERED_JOBS]),
  //   currentPage() {
  //     const pageString = this.$route.query.page || "1";
  //     return Number.parseInt(pageString);
  //   },
  //   previousPage() {
  //     const previousPage = this.currentPage - 1;
  //     const firstPage = 1;
  //     return previousPage >= firstPage ? firstPage : undefined;
  //   },
  //   nextPage() {
  //     const nextPage = this.currentPage + 1;
  //     const maxPage = Math.ceil(this.FILTERED_JOBS.length / 10);
  //     return nextPage <= maxPage ? nextPage : undefined;
  //   },
  //   displayedJobs() {
  //     const pageNumber = this.currentPage;
  //     const firstJobIndex = (pageNumber - 1) * 10;
  //     const lastJobIndex = pageNumber * 10;
  //     return this.FILTERED_JOBS.slice(firstJobIndex, lastJobIndex);
  //   },
  // },
  // async mounted() {
  //   this.loaderToggle();
  //   this.FETCH_JOBS();
  // },
  // methods: {
  //   loaderToggle() {
  //     setTimeout(() => {
  //       this.isLoading = false;
  //     }, 3000);
  //   },
  //   ...mapActions([FETCH_JOBS]),
  // },
};
</script>

<style scoped>
.jobsbackground {
  flex: 1 1 auto;
  padding: 2rem;
  background-color: light gray;
}
</style>
