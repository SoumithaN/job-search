<template>
  <div class="subnav">
    <div class="flex items-center h-full px-8">
      <div v-if="onJobResultsPage" data-test="job-count">
        <font-awesome-icon :icon="['fas', 'search']" class="mr-3" />
        <span
          ><span class="jobs-number">{{ FILTERED_JOBS.length }}</span> jobs
          matched</span
        >
      </div>
    </div>
  </div>
</template>

<script>
import useConfirmRoute from "@/composables/useConfirmRoute";
import { useFilteredJobs } from "@/store/composables";
// import { FILTERED_JOBS } from "@/store/constants";
// import { mapGetters } from "vuex";
export default {
  name: "Subnav",
  setup() {
    // const store = useStore();
    // const FILTERED_JOBS = computed(() => store.getters.FILTERED_JOBS);
    const FILTERED_JOBS = useFilteredJobs();

    // const route = useRoute();
    // const onJobResultsPage = computed(() => route.name === "JobResults");
    const onJobResultsPage = useConfirmRoute("JobResults");

    return { onJobResultsPage, FILTERED_JOBS };
  },
  // computed: {
  //   onJobResultsPage() {
  //     return this.$route.name === "JobResults";
  //   },
  //   ...mapGetters([FILTERED_JOBS]),
  // },
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
