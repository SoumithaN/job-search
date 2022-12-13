<template>
  <form action="" class="formoutline" @submit.prevent="searchForJobs">
    <font-awesome-icon :icon="['fas', 'search']" class="ml-4 mr-3" />
    <div class="form-container">
      <div class="input-container-1">
        <label class="absolute left-0 -top-7">Role</label>
        <TextInput v-model="role" placeholder="Software Engineer" />
      </div>
      <span class="formin">in </span>
      <div class="input-container-2">
        <label class="absolute left-0 -top-7">Where?</label>
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
.form-container {
  display: flex;
  flex-wrap: nowrap;
  flex: 1 1 0%;
  height: 100%;
  font-size: 1rem;
  line-height: 1.5rem;
}
.input-container-1 {
  position: relative;
  display: flex;
  align-items: center;
  flex: 1 1 0%;
  height: 100%;
  padding-right: 0.75rem;
}
.input-container-2 {
  position: relative;
  display: flex;
  align-items: center;
  flex: 1 1 0%;
  height: 100%;
  margin-left: 0.75rem;
}
.formoutline {
  display: flex;
  align-items: center;
  /* width: 100%; */
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
@media only screen and (min-width: 501px) and (max-width: 1000px) {
  form {
    margin: 0 2rem 0 0;
    margin-right: 4rem;
  }
}
</style>
