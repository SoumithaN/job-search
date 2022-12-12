<template>
  <form class="formoutline" @submit.prevent="searchForJobs">
    <font-awesome-icon :icon="['fas', 'search']" class="ml-4 mr-3" />
    <div class="flex flex-nowrap flex-1 h-full text-base font-light">
      <div class="relative flex items-center flex-1 h-full pr-3">
        <label class="absolute left-0 -top-10">Role</label>
        <TextInput v-model="role" placeholder="Software Engineer" />
      </div>
      <span class="formin">in </span>
      <div class="relative flex items-center flex-1 h-full pl-3">
        <label class="absolute left-0 -top-10">Where?</label>
        <TextInput v-model="location" placeholder="Hyderabad" />
        <ActionButton text="Search" type="secondary" class="rounded-r-3xl" />
      </div>
    </div>
  </form>
</template>

<script>
import ActionButton from "@/components/Shared/ActionButton.vue";
import TextInput from "@/components/Shared/TextInput.vue";
export default {
  name: "JobSearchForm",
  components: {
    ActionButton,
    TextInput,
  },
  data() {
    return {
      role: "",
      location: "",
    };
  },
  methods: {
    searchForJobs() {
      this.$router.push({
        name: "JobResults",
        query: { role: this.role, location: this.location },
      });
    },
  },
};
</script>

<style scoped>
.formoutline {
  display: flex;
  align-items: center;
  width: 100%;
  height: 3rem;
  margin-top: 3.5rem;
  border-width: 1px;
  border-style: solid;
  border-color: gray;
  border-radius: 1.5rem;
}
.formin {
  display: flex;
  align-items: center;
  height: 100%;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  border-left-width: 1px;
  border-right-width: 1px;
  border-color: gray;
  background-color: white;
}
</style>
