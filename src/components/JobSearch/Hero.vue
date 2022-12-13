<template>
  <div class="grid-container">
    <div class="headLine"><Headline /> <job-search-form /></div>
    <div class="headLineImg">
      <img
        class="w-80 h-80 object-contain"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/2367px-Vue.js_Logo_2.svg.png"
      />
    </div>
  </div>
</template>

<script>
import Headline from "@/components/JobSearch/Headline.vue";
import JobSearchForm from "@/components/JobSearch/JobSearchForm.vue";
export default {
  name: "Hero",
  components: {
    Headline,
    JobSearchForm,
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
