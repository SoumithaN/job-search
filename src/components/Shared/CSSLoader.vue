<template>
  <div class="loader"></div>
</template>

<script>
export default {
  name: "CSSLoader",
};
</script>

<style scoped>
h1 {
  text-align: center;
}
.loader {
  border: 20px solid #f3f3f3;
  position: absolute;
  left: 55%;
  border-radius: 50%;
  border-top: 20px solid rgb(186, 232, 186);
  width: 100px;
  height: 100px;
  animation: spin 2s linear infinite;
}
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
