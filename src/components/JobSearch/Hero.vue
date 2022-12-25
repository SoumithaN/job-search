<template>
  <main>
    <div class="grid-container">
      <div class="headLine"><Headline /> <job-search-form /></div>
      <div class="headLineImg">
        <img
          class="w-80 h-80 object-contain"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/2367px-Vue.js_Logo_2.svg.png"
        />
      </div>
    </div>
    <div class="pt-10">
      <spotlight class="flex flex-row justify-center pb-16">
        <template #default="{ img, title, description }">
          <router-link
            to="/jobs/results"
            class="flex flex-col mx-5 border rounded-lg w-72 bg-brand-gray-2 h-96"
          >
            <img :src="img" class="object-contain" />

            <div class="h-48 px-6 py-4 mt-3">
              <h3 class="text-lg font-medium">
                {{ title }}
              </h3>

              <p class="mt-3 text-sm">
                {{ description }}
              </p>
            </div>

            <router-link
              to="/jobs/results"
              class="px-6 pb-4 text-sm text-brand-blue-1"
              >See jobs</router-link
            >
          </router-link>
        </template>
      </spotlight>
    </div>
  </main>
</template>

<script>
import Headline from "@/components/JobSearch/Headline.vue";
import JobSearchForm from "@/components/JobSearch/JobSearchForm.vue";
import Spotlight from "@/components/JobSearch/Spotlight.vue";
export default {
  name: "Hero",
  components: {
    Headline,
    JobSearchForm,
    Spotlight,
  },
};
</script>

<style scoped>
.headLine {
  grid-area: headLine;
}
.headLineImg {
  grid-area: headLineImg;
  margin: auto;
  justify-self: center;
}
.grid-container {
  display: grid;
  gap: 10px;
  background-color: white;
  padding: 10px;
  margin: 2rem 4rem 0;
  grid-template-areas: "headLine headLineImg ";
}
@media only screen and (min-width: 320px) and (max-width: 480px) {
  .grid-container {
    grid-template-areas: "headLineImg" "headLine";
    margin: 0.9rem 0.9rem 0;
  }
}
@media only screen and (min-width: 481px) and (max-width: 768px) {
  .grid-container {
    grid-template-areas: "headLineImg" "headLine";
    margin: 2rem 2rem 0;
  }
  .headLineImg {
    width: 100%;
    height: auto;
    margin: auto;
    padding-left: 4rem;
  }
}
@media only screen and (min-width: 769px) and (max-width: 1024px) {
  .headLineImg {
    width: 100%;
    height: auto;
    margin: auto;
  }
}
/* @media only screen and (min-width: 501px) and (max-width: 1000px) {
  .headLineImg {
    width: 80%;
    height: auto;
    margin: auto;
  }
}
@media only screen and (max-width: 500px) {
  .headLineImg {
    width: 80%;
    height: auto;
    margin: auto;
  }
} */
</style>
