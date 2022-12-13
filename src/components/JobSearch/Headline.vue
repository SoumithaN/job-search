<template>
  <section>
    <h1 class="headline">
      <span :class="actionClasses">{{ action }}</span>
      <br />
      for everyone
    </h1>
    <h2 class="sub-head">Find your next job at bright corp</h2>
  </section>
</template>
<script>
import nextElementInList from "@/utils/nextElementInList";
export default {
  name: "Headline",
  data() {
    return {
      action: "Build",
      interval: null,
    };
  },
  computed: {
    actionClasses() {
      return {
        [this.action.toLowerCase()]: true,
      };
    },
  },
  created() {
    this.changeTitle();
  },
  beforeUnmount() {
    clearInterval(this.interval);
  },
  methods: {
    changeTitle() {
      this.inteval = setInterval(() => {
        const actions = ["Build", "create", "Design", "Code"];
        this.action = nextElementInList(actions, this.action);
      }, 3000);
    },
  },
};
</script>
<style scoped>
section {
  padding-left: 10%;
}
.headline {
  font-weight: 700;
  letter-spacing: 0em;
  font-size: 6rem;
  line-height: 1;
  margin-bottom: 3.5rem;
}
.sub-head {
  font-weight: 400;
  font-size: 1.875rem;
  line-height: 2.25rem;
}
.build {
  color: #1a73e8;
}
.create {
  color: #34a853;
}
.design {
  color: #f9ab00;
}
.code {
  color: #d93025;
}
@media only screen and (min-width: 320px) and (max-width: 480px) {
  .headline {
    font-size: 2.5rem;
    margin: 1.5rem 0 1.5rem 0;
  }
  .sub-head {
    font-size: 1.2rem;
    line-height: 2.25rem;
  }
}
@media only screen and (min-width: 481px) and (max-width: 768px) {
  .headline {
    font-size: 4.7rem;
    margin: 2rem 0 3.5rem 0;
  }
  .sub-head {
    font-weight: 400;
    font-size: 1.5rem;
    line-height: 2.25rem;
  }
}
</style>
