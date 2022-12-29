<template>
  <form action="" @submit.prevent="searchForJobs">
    <font-awesome-icon :icon="['fas', 'search']" class="icon" />
    <div class="form-container">
      <div class="input-container-1">
        <label for="role">Role</label>
        <text-input v-model="role" placeholder="Software Engineer" />
      </div>
      <span class="formin">in </span>
      <div class="input-container-2">
        <label for="location">Where?</label>
        <TextInput v-model="location" placeholder="Hyderabad" />
      </div>
    </div>
    <ActionButton text="Search" type="secondary" class="botton" />
  </form>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";
import ActionButton from "@/components/Shared/ActionButton.vue";
import TextInput from "@/components/Shared/TextInput.vue";

export default {
  name: "JobSearchForm",
  components: {
    ActionButton,
    TextInput,
  },
  setup() {
    const router = useRouter();
    const role = ref("");
    const location = ref("");
    const searchForJobs = () => {
      router.push({
        name: "JobResults",
        query: { role: role.value, location: location.value },
      });
    };
    return { role, location, searchForJobs };
  },
  // data() {
  //   return {
  //     role: "",
  //     location: "",
  //   };
  // },
  // methods: {
  //   searchForJobs() {
  //     this.$router.push({
  //       name: "JobResults",
  //       query: { role: this.role, location: this.location },
  //     });
  //   },
  // },
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
form {
  display: flex;
  align-items: center;
  height: 3rem;
  border: 1px solid #80868b;
  border-radius: 1.5rem;
  margin-top: 4rem;
  margin-left: 3rem;
  margin-right: 2rem;
}
label {
  position: absolute;
  left: 0px;
  top: -2rem;
}
.icon {
  margin-left: 1rem;
  margin-right: 0.75rem;
}
.input-container-1 {
  position: relative;
  display: flex;
  align-items: center;
  flex: 1 0.5 0%;
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
.botton {
  border-top-right-radius: 1.5rem;
  border-bottom-right-radius: 1.5rem;
  height: 100%;
}

@media only screen and (min-width: 320px) and (max-width: 480px) {
  form {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: auto;
    border: none;
    margin-top: 1rem;
  }
  label {
    position: absolute;
    left: 1rem;
    top: -1.75rem;
  }
  .icon {
    display: none;
  }
  .formin {
    display: none;
  }
  .form-container {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: auto;
    font-size: 1rem;
    line-height: 1.5rem;
    padding: 0 1rem 0 0;
    margin-bottom: 1.5rem;
    margin-left: -5rem;
  }
  .input-container-1 {
    position: relative;
    display: block;
    width: 100%;
    height: 4rem;
    border: 1px solid #80868b;
    border-radius: 1.5rem;
    margin-bottom: 2rem;
    padding-left: 1rem;
    margin-top: 2rem;
    margin-left: 1rem;
  }
  .input-container-2 {
    position: relative;
    display: block;
    width: 100%;
    height: 4rem;
    border: 1px solid #80868b;
    border-radius: 1.5rem;
    margin-left: 1rem;
    padding-left: 1rem;
    margin-top: 1rem;
  }
  .botton {
    display: block;
    margin-right: 5rem;
  }
}

@media only screen and (min-width: 481px) and (max-width: 768px) {
  form {
    margin-top: 4rem;
  }
}
</style>
