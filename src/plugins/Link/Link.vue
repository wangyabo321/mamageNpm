<template>
  <div class="cus-link">{{ message }}</div>
</template>

<script>
export default {
  name: 'cus-link',
  props: {
    message: {
      type: String,
      default: '默认链接'
    },
    size: {
      type: String,
      default: '14px'
    },
    color: {
      type: String,
      default: '#fff'
    },
    disable: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    onClick () {
      if(this.disable) return;
      this.$emit('click')
    }
  }
}
</script>
<style scoped>
.cus-link:hover {
  cursor: pointer;
  text-decoration-color: red;
  text-decoration-style: solid;
  text-decoration-line: underline;
  text-underline-offset: 4px;
  text-decoration-thickness: 2px;
}
</style>
