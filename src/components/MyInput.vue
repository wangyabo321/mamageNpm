<template>
  <div class="hello">
    <input type="text" :value="modelValue" @input="onInput" />
  </div>
</template>

<script>
export default {
  name: 'MyInput',
  props: ['modelValue'],
  data() {
    return {}
  },
  methods: {
    onInput(e) {
      this.$emit('update:modelValue', e.target.value)
    }
  }
}
</script>

<style scoped></style>
