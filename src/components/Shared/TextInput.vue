<template>
  <input
    type="text"
    :placeholder="placeholder"
    :value="modelValue"
    class="input-text"
    @input="handleInput"
  />
</template>

<script>
export default {
  name: "TextInput",
  props: {
    placeholder: {
      type: String,
      required: false,
      default: "",
    },
    modelValue: {
      type: String,
      required: true,
    },
  },
  emits: ["update:modelValue"],
  methods: {
    handleInput($event) {
      this.$emit("update:modelValue", $event.target.value);
    },
  },
};
</script>

<style scoped>
.input-text {
  width: 100%;
  font-size: 1.125rem;
  line-height: 1.175rem;
  font-weight: 400;
  outline: 2px solid transparent;
  outline-offset: 2px;
}
</style>
